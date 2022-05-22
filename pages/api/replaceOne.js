import connectToDatabase from '@/lib/mongodb';

const handler = async (req, res) => {
  const db = await connectToDatabase();
  const body = req.body;
  const {_id, _type} = body;
  await db.collection(_type).replaceOne({_id}, body, {upsert: true});
  const response = {
    statusCode: 200,
    data: JSON.stringify(body)
  };
  res.json(response);
};

export default handler;
