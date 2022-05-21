import connectToDatabase from '@/lib/mongodb';

const handler = async (req, res) => {
  console.log(323)
  const db = await connectToDatabase();
  const goal = JSON.parse(req.body);
  // Insert the event object, which is the test data we pass in
  await db.collection("goals").insertOne(goal);
  console.log(2)
  const response = {
    statusCode: 200
  };
  res.json(response);
};

export default handler;
