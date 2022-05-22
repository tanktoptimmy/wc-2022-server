// import connectToDatabase from '@/lib/mongodb';

const handler = async (req, res) => {
  console.log("delete handler called?")
  // const db = await connectToDatabase();
  // const { _id, _type } = req.body
  // const result = await db.collection(_type).deleteOne({_id});
  // const response = {
  //   statusCode: 200,
  //   data: JSON.stringify(result)
  // };
  // res.json(response);
  console.log("ok we're there", req.body)
  res.json({status: 200})
};

export default handler;


