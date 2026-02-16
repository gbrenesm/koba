import { query } from '../lib/db.js';

export const getQuestionsOfTest = async (id) => {
  const res = await query('SELECT * FROM questions WHERE tests_id = $1', [id]);
  return res.rows ?? null;
};