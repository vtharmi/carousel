const MongoClient = require('mongodb').MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const dbName = "test";

MongoClient.connect(connectionUrl).then(client => {
    console.log("MongoDB is connected successfully");
   const db = client.db(dbName)
}).catch(err => {
    console.log("failed to connect to database");
})


