import { Router } from 'express';
import Npc from '../models/Npc';
import Twitter from 'twitter';

export default Router()
  .post('/api/v1/npcs', async (req, res) => {
    try {
      const npc = await Npc.insert(req.body);

      res.send(npc);
    } catch (err) {
      res.status(401).send(err);
    }
    //send tweet
    const client = new Twitter({
      consumer_key: '',
      consumer_secret: '',
      access_token_key: '',
      access_token_secret: ''
    });
    client.post('statuses/update', { status: 'I Love Twitter' }, (error, tweet, response) => {
      if (error) throw error;
      console.log(tweet);  // Tweet body.
      console.log(response);  // Raw response object.
    });
  })

  .get('/api/v1/npcs/:id', async (req, res) => {
    try {
      const npc = await Npc.findById(req.params.id);
      res.send(npc);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .get('/api/v1/npcs', async (req, res) => {
    try {
      const npcs = await Npc.findAll();
      res.send(npcs);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })





  ;
