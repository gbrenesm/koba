
import { query } from '../lib/db.js';

export const addNewResponses = async ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('Please provide at least one response');
  }

  const values = [];
  const placeholders = data.map((item, index) => {
    const offset = index * 4;
    
    // Asegurar que response sea un array
    const responseArray = Array.isArray(item.response) 
      ? item.response 
      : [item.response];
    
    values.push(
      item.client_id,
      item.question_id,
      responseArray,
      item.session_id
    );
    
    return `($${offset + 1}::uuid, $${offset + 2}::uuid, $${offset + 3}::text[], $${offset + 4}::uuid)`;
  }).join(', ');

  const queryText = `
    INSERT INTO responses (client_id, question_id, response, session_id) 
    VALUES ${placeholders}
    RETURNING *
  `;

  const res = await query(queryText, values);
  return res.rows ?? null;
};


export const getResponsesForInterpretation = async (client_id, session_id) => {
  const queryText = `
    SELECT r.*, q.construct_id, q.notes
    FROM responses r
    INNER JOIN questions q ON q.id = r.question_id
    WHERE r.session_id = $1
    AND r.client_id = $2
    AND r.deleted_at IS NULL
  `;

  const res = await query(queryText, [session_id, client_id]);

  return res.rows ?? null;
};
