import { query } from '../lib/db.js';

export const getQuestionsOfTest = async (section_id) => {
  const res = await query('SELECT * FROM questions WHERE section_id = $1', [section_id]);
  return res.rows ?? null;
};