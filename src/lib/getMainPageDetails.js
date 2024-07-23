import { MongoClient } from "mongodb";

export async function getMainPageDetails() {
  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();
    const db = client.db("Epoxyd");
    const collection = db.collection("main-page");
    const result = await collection.findOne({});
    if (!result) {
      throw new Error("No main page details found");
    }

    return result;
  } catch (error) {
    console.error(error.message);
  } finally {
    await client.close();
  }
}
