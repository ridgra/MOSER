const db = require('../db');
const Series = db.collection('Series');
const { ObjectId } = require('mongodb');

class SeriesClass {
  static create(data) {
    return Series.insertOne(data);
  }

  static read() {
    return Series.find().toArray();
  }

  static readOne(id) {
    return Series.findOne({ _id: ObjectId(id) });
  }

  static update(id, data) {
    return Series.findOneAndUpdate(
      { _id: ObjectId(id) },
      { $set: data },
      { returnOriginal: false }
    );
  }

  static delete(id) {
    return Series.findOneAndDelete(
      { _id: ObjectId(id) },
      { returnOriginal: false }
    );
  }
}

module.exports = SeriesClass;
