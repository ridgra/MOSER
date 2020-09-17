const express = require('express');
const api = express.Router();
const MovieClass = require('../models/movie');

api.post('/', async (req, res) => {
  try {
    const { title, overview, poster_path, popularity, tags } = req.body;
    // // tags = tags.split(',')
    // console.log(tags);
    // console.log(tags);
    const result = await MovieClass.create({
      title,
      overview,
      poster_path,
      popularity,
      tags,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
});

api.get('/', async (req, res) => {
  try {
    const result = await MovieClass.read();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

api.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await MovieClass.readOne(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

api.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, overview, poster_path, popularity, tags } = req.body;
    const data = await MovieClass.update(id, {
      title,
      overview,
      poster_path,
      popularity,
      tags,
      updatedAt: new Date(),
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

api.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await MovieClass.delete(id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = api;
