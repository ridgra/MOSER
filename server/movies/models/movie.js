const db = require('../db');
const Movie = db.collection('Movies');
const { ObjectId } = require('mongodb');

class MovieClass {
  static create(data) {
    return Movie.insertOne(data);
  }

  static read() {
    return Movie.find().toArray();
  }

  static readOne(id) {
    return Movie.findOne({_id: ObjectId(id)});
  }

  static update(id, data) {
    return Movie.findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: data },
      { returnOriginal: false }
    );
  }

  static delete(id) {
    return Movie.findOneAndDelete(
      { _id: ObjectId(id) },
      { returnOriginal: false }
    );
  }
}

module.exports = MovieClass;
