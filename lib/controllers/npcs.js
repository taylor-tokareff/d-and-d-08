import { Router } from 'express';
import Npc from '../models/Npc';

export default Router()
  .post('/api/v1/npcs', async (req, res) => {
    try {
      const npc = await Npc.insert(req.body);

      res.send(npc);
    } catch (err) {
      res.status(401).send(err);
    }
    //send tweet
  })





  ;
