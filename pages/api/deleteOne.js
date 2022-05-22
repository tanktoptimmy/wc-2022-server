import connectToDatabase from '@/lib/mongodb';

const handler = async (req, res) => {
  console.log("delete handler called")
  const db = await connectToDatabase();
  console.log(req.body)
  const { _id, _type } = req.body
  const result = await db.collection(_type).deleteOne({_id});
  const response = {
    statusCode: 200,
    data: JSON.stringify(result)
  };

  console.log("unpublished response:", response)
  res.json(response);
};

export default handler;


