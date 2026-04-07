import { query } from '../lib/db.js';

export const getAllPublicTests = async () => {
  const res = await query('SELECT * FROM tests WHERE license_type = $1 ORDER BY id ASC', ['public']);
  return res.rows;
};

export const getTestById = async (id) => {
  const res = await query('SELECT * FROM tests WHERE id = $1', [id]);
  return res.rows[0] || null;
};

export const createTest = async (authors, title, editor, place, year, other_data, license_type, construct, user_id) => {
  const res = await query(
    'INSERT INTO tests(authors, title, editor, place, year, other_data, license_type, construct, user_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
    [authors, title, editor, place, year, other_data, license_type, construct, user_id]
  );
  return res.rows[0] || null;
};

export const updateTest = async (id, name, description) => {
  const res = await query(
    'UPDATE tests SET name = $1, description = $2 WHERE id = $3 RETURNING *',
    [name, description, id]
  );
  return res.rows[0] || null;
};

export const deleteTest = async (id) => {
  const res = await query('DELETE FROM tests WHERE id = $1 RETURNING *', [id]);
  return res.rows[0] || null;
};
