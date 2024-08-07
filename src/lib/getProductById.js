import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

export default async function getProductById(id) {
  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();

    const db = client.db("Epoxyd");
    const collection = db.collection("products");
    const product = await collection.findOne({ _id: new ObjectId(id) });
    if (!product) {
      throw new Error(`Product with id ${id} not found.`);
    }

    return product;
  } catch (error) {
    console.log(error.message);
  } finally {
    await client.close();
  }
}
