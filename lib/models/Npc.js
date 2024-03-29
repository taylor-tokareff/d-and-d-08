import pool from '../utils/pool';

class Npc {
  id;
  name;
  age;


  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
  }

  static async insert({ name, age }) {
    const { rows } = await pool.query(
      'INSERT INTO npcs (name, age) VALUES ($1, $2) RETURNING *', [name, age]
    );

    return new Npc(rows[0]);

  }


  static async findById(id) {
    const { rows } = await pool.query(`
    SELECT *
    FROM npcs
    WHERE id = $1
  `, [id]);
    if (!rows[0]) return null;

    return new Npc(rows[0]);

  }

  static async findAll() {
    const { rows } = await pool.query(`
    SELECT * from npcs
    `);
    return rows.map(row => new Npc(row));
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `DELETE FROM npcs
      WHERE id = $1
      RETURNING *`,
      [id]
    );
    return new Npc(rows[0]);
  }

  static async update(npc, id) {
    const { rows } = await pool.query(
      `UPDATE npcs
      SET name = $1, age = $2
      WHERE id = $3
      RETURNING *`,
      [npc.name, npc.age, id]
    );
    return new Npc(rows[0]);
  }

}

export default Npc;
