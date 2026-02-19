
import { query } from '../lib/db.js';

export const addNewResponses = async ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('Please provide at least one response');
  }

  const values = [];
  const placeholders = data.map((item, index) => {
    const offset = index * 5;
    
    // Asegurar que response sea un array
    const responseArray = Array.isArray(item.response) 
      ? item.response 
      : [item.response];
    
    values.push(
      item.question_id,
      item.responses_type,
      item.client_id,
      responseArray,  // PostgreSQL lo convertirá automáticamente
      item.session_id
    );
    
    return `($${offset + 1}::uuid, $${offset + 2}::response_type, $${offset + 3}::uuid, $${offset + 4}::text[], $${offset + 5}::uuid)`;
  }).join(', ');

  const queryText = `
    INSERT INTO responses (question_id, response_type, client_id, response, session_id) 
    VALUES ${placeholders}
    RETURNING *
  `;

  console.log('QUERY:', queryText);
  console.log('VALUES:', values);

  const res = await query(queryText, values);
  return res.rows ?? null;
};