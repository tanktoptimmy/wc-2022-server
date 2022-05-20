import clientPromise from '@/lib/mongodb'

const handler = async (req, res) => {
  const dbConnection = await clientPromise;
  const db = dbConnection.db('wc');
  db.collection("goal").insertOne(req.body, (err, result) => {
    if (err) return console.log(err);
    return result
  })
  
}

export default handler;