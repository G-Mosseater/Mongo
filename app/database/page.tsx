import { MongoClient, ServerApiVersion } from "mongodb";
import Link from "next/link";
import Front from "../front/page";
import Back from "../back/page";






const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("ERROR BLABLABLA MONGO");
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Querying our database
    const cursor = await client.db("test").collection("greetings").find();
    const array = await cursor.toArray();
    return array;
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}




export default async function Database() {
  const greetings = await run();
  return (
    <>
      <div
        className="flex justify-around 
      items-center mt-16"
      >
        {" "}
        <Link href="/api">
          <button className="text-white bg-slate-600 rounded-md  active:bg-slate-700  hover:bg-slate-500 px-4 py-2 ">
            API page{" "}
          </button>
        </Link>
      </div>
      <h1 className="text-center py-10 text-white text-xl">
        On this page you can add text to a mongo database, edit and delete it.{" "}
        <br /> Refresh the page after each change.
      </h1>

      <div className="flex items-center align-center justify-center gap-8 py-[30px]">
        <div className="flex flex-col  items-center align-center">
          {greetings.map((greetingObj) => (
            <h1
              className="flex items-center align-center text-center text-white w-auto h-10   "
              key={greetingObj._id.toString()}
            >
              {greetingObj.greet}
            </h1>
          ))}
        </div>

        <Back />
      </div>
      <Front></Front>
    </>
  );
}

run().catch(console.dir);
