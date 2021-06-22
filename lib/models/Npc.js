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

}

export default Npc;
