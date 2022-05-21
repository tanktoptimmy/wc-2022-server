import connectToDatabase from '@/lib/mongodb';

const handler = async (req, res) => {
  const db = await connectToDatabase();
  const goal = req.body;
  console.log(goal)
  // Insert the event object, which is the test data we pass in
  await db.collection("goals").replaceOne({"_id": goal._id}, goal, {upsert: true});
  const response = {
    statusCode: 200,
    data: JSON.stringify(goal)
  };
  res.json(response);
};

export default handler;
