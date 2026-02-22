import { query } from '../lib/db.js';

export const addInterpretationForTest = async ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    throw new Error('Please provide at least one response');
  }
  console.log("Data received:", data);
  const values = [];
  const placeholders = data.map((item, index) => {
    const offset = index * 5;
    
    const interprtations = Array.isArray(item.interpretation_total) 
      ? item.interpretation_total 
      : [item.interpretation_total];
    
    values.push(
      interprtations,
      item.test_id,
      item.client_id,
      item.construct_id,
      item.session_id,
    );
    
    return `($${offset + 1}::text[], $${offset + 2}::uuid, $${offset + 3}::uuid, $${offset + 4}::uuid, $${offset + 5}::uuid)`;
  }).join(', ');

  const queryText = `
    INSERT INTO interpretations (interpretation_total, test_id, client_id, construct_id, session_id) 
    VALUES ${placeholders}
    RETURNING *
  `;

  const res = await query(queryText, values);
  return res.rows ?? null;
};