import { ObjectId } from 'mongodb';
import connectToDatabase from '@/lib/mongodb';

const handler = async (req, res) => {
  const db = await connectToDatabase();
  const { _id } = JSON.parse(req.body)
  const { type } = req.query
  const result = await db.collection(type).deleteOne({_id});
  const response = {
    statusCode: 200,
    data: JSON.stringify(result)
  };
  res.json(response);
};

export default handler;


