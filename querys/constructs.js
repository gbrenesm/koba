import { query } from '../lib/db.js';

export const getConstructsOfTests = async (test_id, section_id) => {
  const res = await query('SELECT * FROM constructs WHERE test_id = $1 AND section_id = $2', [test_id, section_id]);
  return res.rows ?? null;
};