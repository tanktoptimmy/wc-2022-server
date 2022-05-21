import clientPromise from '@/lib/mongodb'

const handler = async (req, res) => {
  console.log("poo")
  res.json({status:200, data:"poo"})
  // let dbConnection;
  // try {
  //   console.log(req.body)
  //   dbConnection = await clientPromise;
  //   const db = dbConnection.db('wc');
  //   const goal = await db.collection("goal").insertOne(req.body);
  //   console.log("goal:", goal)
  //   res.json({status: 200, data: goal})
  // }
  // catch(err) {
  //   return console.log("err:", err)
  // }
  // finally {
  //   dbConnection.close()
  // }
}

export default handler;
