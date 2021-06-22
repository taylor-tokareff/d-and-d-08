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









}

export default Npc;
