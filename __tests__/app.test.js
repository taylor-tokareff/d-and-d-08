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



});
