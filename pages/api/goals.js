import clientPromise from '@/lib/mongodb'

const handler = async (req, res) => {
  let dbConnection;
  try {
    console.log(req.body)
    dbConnection = await clientPromise;
    const db = dbConnection.db('wc');
    const goal = await db.collection("goal").insertOne(req.body);
    res.json({status: 200, data: goal})
  }
  catch(err) {
    return err
  }
  finally {
    dbConnection.close()
  }
}

export default handler;
