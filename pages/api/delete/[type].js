import connectToDatabase from '@/lib/mongodb';

const handler = async (req, res) => {
  const db = await connectToDatabase();
  const { _id } = req.body;
  const { type } = req.query

  // Insert the event object, which is the test data we pass in
  await db.collection(type).remove({"_id": _id});
  const response = {
    statusCode: 200,
    data: `Successfully deleted ${type}`
  };
  res.json(response);
};

export default handler;


