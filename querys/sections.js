import { query } from '../lib/db.js';

export const getSectionsForTest = async (test_id) => {
  const res = await query('SELECT * FROM sections WHERE test_id = $1', [test_id]);
  return res.rows ?? null;
};