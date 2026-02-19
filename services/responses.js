'use server';
import { addNewResponses } from '../querys/responses.js';

export const createNewResponses = async (formData, client_id, responses_type = 'selection') => {
  
  const data = Object.fromEntries(formData);  
  const responsesArray = Object.entries(data).reduce((acc, [key, value]) => {
      acc.push({
        question_id: key,
        responses_type,
        // TODO: cambiar el id del cliente
        client_id: 'c095cf60-545b-4ef9-bd92-69a988dc465c',
        response: value
      });
      
      return acc;
    }, []);

  console.log('Respuestas a insertar:', responsesArray);

  // Insertar todas las respuestas
  const result = await addNewResponses({ data: responsesArray });
  
  return result;
};
