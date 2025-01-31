const getConnection = require('./db-connection');

class ProviderService {
  async find() {
    const client = await getConnection();
    const result = await client.query('SELECT * FROM providers');
    await client.end();
    return result.rows;
  }

  async findOne(id) {
    const client = await getConnection();
    const result = await client.query('SELECT * FROM providers WHERE id = $1', [id]);
    await client.end();
    return result.rows[0];
  }

  async create(data) {
    const { name, ruc, direccion, estado } = data;
    const client = await getConnection();
    const result = await client.query(
      'INSERT INTO providers (name, ruc, direccion, estado) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, ruc, direccion, estado]
    );
    await client.end();
    return result.rows[0];
  }

  async update(id, changes) {
    const { name, ruc, direccion, estado } = changes;
    const client = await getConnection();
    const result = await client.query(
      'UPDATE providers SET name = $1, ruc = $2, direccion = $3, estado = $4 WHERE id = $5 RETURNING *',
      [name, ruc, direccion, estado, id]
    );
    await client.end();
    return result.rows[0];
  }

  async delete(id) {
    const client = await getConnection();
    await client.query('DELETE FROM providers WHERE id = $1', [id]);
    await client.end();
  }
}

module.exports = ProviderService;