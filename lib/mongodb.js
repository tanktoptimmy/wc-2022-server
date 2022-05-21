// Import the MongoDB driver
const MongoClient = require("mongodb").MongoClient;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local BOM')
}

// Define our connection string. Info on where to get this will be described below. In a real world application you'd want to get this string from a key vault like AWS Key Management, but for brevity, we'll hardcode it in our serverless function here.
const MONGODB_URI = process.env.MONGODB_URI;

// Once we connect to the database once, we'll store that connection and reuse it so that we don't have to connect to the database on every request.
let cachedDb = null;
async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  // Connect to our MongoDB database hosted on MongoDB Atlas
  const client = await MongoClient.connect(MONGODB_URI);
  // Specify which database we want to use
  const db = await client.db("wc");
  console.log("connecting")
  cachedDb = db;
  return db;
}

export default connectToDatabase;