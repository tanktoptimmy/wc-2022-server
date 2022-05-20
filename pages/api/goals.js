import clientPromise from '@/lib/mongodb'

const handler = async (req, res) => {
  let dbConnection;
  try {
    dbConnection = await clientPromise;
    const db = dbConnection.db('wc');
    const goal = await db.collection("goal").upsert(req.body);
    res.json({ status: 200, data: goal })
  }
  catch(err) {
    console.log("err:", err)
  }
  finally {
    dbConnection.close()
  }
}

export default handler;
