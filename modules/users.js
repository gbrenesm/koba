import { query } from '../lib/db.js';

export const getAllUsers = async () => {
  const res = await query('SELECT * FROM users ORDER BY id ASC');
  return res.rows;
};

export const getUserById = async (id) => {
  const res = await query('SELECT * FROM users WHERE id = $1', [id]);
  return res.rows[0];
};

export const createUser = async (name, lastname, email, password) => {
  const res = await query(
    'INSERT INTO users(name, lastname, email, password) VALUES($1, $2, $3, $4) RETURNING *',
    [name, lastname, email, password]
  );
  return res.rows[0];
};

export const updateUser = async (id, name, email) => {
  const res = await query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, id]
  );
  return res.rows[0];
};

export const deleteUser = async (id) => {
  const res = await query('UPDATE users SET deleted_at = NOW() WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};
