const express = require('express');
const api = express.Router();
const SeriesClass = require('../models/series');

api.post('/', async (req, res) => {
  try {
    const { title, overview, poster_path, popularity, tags } = req.body;
    const result = await SeriesClass.create({
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
    const result = await SeriesClass.read();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

api.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await SeriesClass.readOne(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

api.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, overview, poster_path, popularity, tags } = req.body;
    const data = await SeriesClass.update(id, {
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
    const data = await SeriesClass.delete(id);
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = api;
