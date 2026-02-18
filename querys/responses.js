import { query } from '../lib/db.js';

export const addNewResponses = async ({ data }) => {
  const { section, responses_type, responses, count, notes, interpretations, tests_id, client_id } = data;
  const res = await query('INSERT INTO responses (section, responses_type, responses, count, notes, interpretations, tests_id, client_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [section, responses_type, responses, count, notes, interpretations, tests_id, client_id]);
  return res.rows ?? null;
};