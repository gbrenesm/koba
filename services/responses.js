'use server';
import { addNewResponses } from '@/querys/responses.js';
import { createNewSession } from "@/querys/sessions.js";
import { createInterpretations } from "@/services/interpretations";

export const createNewResponsesService = async (formData, section, test_id, client_id, response_type = 'selection') => {
  client_id = 'eb5b7b55-472e-4ed2-8b13-6091ad55a7ee'
  
  // 1. Crear la sesión de respuestas
  const session = await createNewSession(client_id, test_id, section.id);
  console.log("session_id", session)
  // TODO: Implementar client_id
  const data = Object.fromEntries(formData);
  
  const responsesArray = Object.entries(data).map(([key, value]) => ({
    client_id,
    question_id: key,
    response: [value],
    session_id: session.id
  }));
  
  // 2. Guardar las respuestas en la base de datos, agregando el session_id
  try {
    const result = await addNewResponses({ data: responsesArray });
    console.log(`${result?.length || 0} respuestas insertadas correctamente`);
  } catch (error) {
    console.error(error);
  }
  
  // 3. Crear una interpretación para las respuestas
  try {
    const interpretation = await createInterpretations(client_id, test_id, session.id);
    console.log("Interpretation:", interpretation);
  } catch (error) {
    console.error(error);
  }
  
  return {
    success: true
  };
};