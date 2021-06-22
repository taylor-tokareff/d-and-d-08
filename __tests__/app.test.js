import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import Npc from '../lib/models/Npc';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('creates a npc via POST', async () => {

    const res = await request(app)
      .post('/api/v1/npcs')
      .send({
        name: 'mable',
        age: 69,
      });

    expect(res.body).toEqual({
      id: '1',
      name: 'mable',
      age: 69,
    });

  });

  test('find a npc by id via Get route', async () => {
    const npc = await Npc.insert({
      name: 'mable',
      age: 69,
    });
    const res = await request(app).get(`/api/v1/npcs/${npc.id}`);

    expect(res.body).toEqual(npc);

  });

  test('finds all npcs via GET route', async () => {

    const npc1 = await Npc.insert({
      name: 'mable',
      age: 69,
    });
    const npc2 = await Npc.insert({
      name: 'bob',
      age: 420,
    });
    const npc3 = await Npc.insert({
      name: 'damien',
      age: 666,
    });

    const res = await request(app).get('/api/v1/npcs');
    expect(res.body).toEqual([npc1, npc2, npc3]);
  });

  test('deletes npc1', async () => {
    const npc1 = await Npc.insert({
      name: 'mable',
      age: 69,
    });

    const res = await request(app).delete(`/api/v1/npcs/${npc1.id}`);

    expect(res.body).toEqual(npc1);

  });





});
