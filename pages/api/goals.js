import clientPromise from '@/lib/mongodb'

const handler = async (req, res) => {
  // Get data from your database
  
  const dbConnection = await clientPromise;
  const db = dbConnection.db();
  db.collection("goal").insertOne(req.body, (err, res) => {
    if(err) return console.log(err);
    return res.json({body: req.body})
  })
  
}

export default handler;