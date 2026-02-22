import { query } from '../lib/db.js';

export const createNewSession = async (client_id, test_id, section_id) => {
  const res = await query(
    'INSERT INTO sessions(client_id, test_id, section_id) VALUES($1, $2, $3) RETURNING id',
    [client_id, test_id, section_id]
  );
  return res.rows[0] || null;
};