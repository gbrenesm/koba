import { query } from '../lib/db.js';

export const getQuestionsOfTest = async (test_id, section_id) => {
  const res = await query('SELECT * FROM questions WHERE test_id = $1 AND section_id = $2', [test_id, section_id]);
  return res.rows ?? null;
};