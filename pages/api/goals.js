import clientPromise from '@/lib/mongodb'

const handler = async (req, res) => {
  // Get data from your database
  console.log("poo")
  // const dbConnection = await clientPromise;
  // const db = dbConnection.db();
  // db.collection("goal").insertOne(req.body, (err, res) => {
  //   if(err) return console.log(err);
  //   // response.json(res)
  //   console.log("poo")
  // })
  res.json({req.body})
}

export default handler;