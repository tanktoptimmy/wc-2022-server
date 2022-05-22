import connectToDatabase from '@/lib/mongodb';

const handler = async (req, res) => {
  const db = await connectToDatabase();
  const body = req.body;
  const {_id, type} = body;
  // Insert the event object, which is the test data we pass in
  await db.collection(_type).replaceOne({"_id": _id}, body, {upsert: true});
  const response = {
    statusCode: 200,
    data: JSON.stringify(goal)
  };
  res.json(response);
};

export default handler;
