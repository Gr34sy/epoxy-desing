import { MongoClient } from "mongodb";

export async function getProducts() {
  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();

    const db = client.db("Epoxyd");
    const collection = db.collection("products");
    const products = await collection.find({}).toArray();
    if (!products.length) {
      throw new Error("No products found");
    }

    return products || [];
  } catch (error) {
    console.log(error.message);
  } finally {
    await client.close();
  }
}
