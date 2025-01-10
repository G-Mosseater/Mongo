// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.MONGODB_URI;
// if (!uri) {
//   throw new Error("ERROR BLABLABLA MONGO");
// }

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server (optional starting in v4.7)
//     await client.connect();
//     // Querying our database
//     const cursor = await client.db("test").collection("greetings").find();
//     const array = await cursor.toArray();
//     return array;
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// export async function GET(request: Request){

//     const greetings = await run()

// return Response.json(greetings)

// }

import connect from "@/app/utils/startMongo";
import { ObjectId } from "mongodb";

export async function GET(request: Request) {
  const client = await connect;
  const cursor = await client.db("test").collection("greetings").find();
  const greetings = await cursor.toArray();

  return Response.json(greetings);
}

// export async function POST(request: Request){
//     const client = await connect;
//     const cursor = await client.db("test").collection("greetings").insertOne({greet:"Goodbye cruel world"});
//     return Response.json({message: "successfully updated the document"})
//   }

export async function POST(request: Request) {
  const client = connect;
  const body = await request.json();
  await client
    .db("test")
    .collection("greetings")
    .insertOne({ greet: body.greet });
  return Response.json({ message: "successfull" });
}

export async function PUT(request: Request) {
  const client = connect;
  const body = await request.json();
  const id = new ObjectId(body.id as string);
  await client
    .db("test")
    .collection("greetings")
    .updateOne({ _id: id }, { $set: { greet: body.greet } });
  return Response.json({ message: "document updated!" });
}

export async function DELETE(request: Request) {
  const client = connect;
  const body = await request.json();
  const id = new ObjectId(body._id as string)
  console.log(id)
  await client
  .db("test")
  .collection("greetings")
  .deleteOne ({_id: id})
  return Response.json({ message: "document deleted!" });


}
