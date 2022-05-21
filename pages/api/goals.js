// import clientPromise from '@/lib/mongodb'

// const handler = async (req, res) => {
//   let dbConnection;
//   let returnedValue;
//   try {
//     dbConnection = await clientPromise;
//     const db = dbConnection.db('wc');
//     const goal = await db.collection("goal").insertOne(req.body);
//     res.json({ status: 200, data: goal })
//   }
//   catch(err) {
//     console.log("err:", err)
//   }
//   finally {
//     dbConnection.close()
//   }
// }

// export default handler;


import connectToDatabase from '@/lib/mongodb';

const handler = async (req, res) => {
  const db = await connectToDatabase();
  // Insert the event object, which is the test data we pass in
  const result = await db.collection("goals").insertOne(req.body);
  const response = {
    statusCode: 200,
    body: JSON.stringify(result),
  };
  return response;
};

export default handler;
