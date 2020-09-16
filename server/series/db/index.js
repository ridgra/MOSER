const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'entertain-me';
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
});

(async () => {
  try {
    await client.connect();
  } catch (error) {
    console.log(error);
  }
})();
const db = client.db(dbName);

module.exports = db;
