// import connectToDatabase from '@/lib/mongodb';

const handler = async (req, res) => {
  // console.log(1)
  // const db = await connectToDatabase();
  // // Insert the event object, which is the test data we pass in
  // const result = await db.collection("goals").insertOne(req.body);
  // console.log(2)
  const response = {
    statusCode: 200,
    body: "poo"//JSON.stringify(result),
  };
  return response;
};

export default handler;
