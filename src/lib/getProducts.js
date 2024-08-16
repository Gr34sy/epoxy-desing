import { MongoClient } from "mongodb";

export async function getProducts() {
  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();

    const db = client.db("Epoxyd");
    const collection = db.collection("products");
    const products = await collection.find({}).toArray();
    const normalizedProducts = products.map((product) => ({
      ...product,
      _id: product._id.toString(),
    }));

    return normalizedProducts || [];
  } catch (error) {
    console.log(error.message);
  } finally {
    await client.close();
  }
}
