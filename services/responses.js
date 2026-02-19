'use server';
import { randomUUID } from 'crypto';
import { addNewResponses } from '../querys/responses.js';

export const createNewResponses = async (formData, client_id, responses_type = 'selection') => {
  const session_id = randomUUID();
  
  const data = Object.fromEntries(formData);
  
  console.log("Session:", session_id);
  const responsesArray = Object.entries(data).map(([key, value]) => ({
    question_id: key,
    responses_type,
    // TODO: Implementar client_id
    client_id: 'c095cf60-545b-4ef9-bd92-69a988dc465c',
    response: [value],
    session_id
  }));
  
  console.log(`Insertando ${responsesArray.length} respuestas con session_id: ${session_id}`);
  
  const result = await addNewResponses({ data: responsesArray });
  
  console.log(`${result?.length || 0} respuestas insertadas correctamente`);
  
  return {
    success: true,
    session_id,
    count: result?.length || 0,
    data: result
  };
};