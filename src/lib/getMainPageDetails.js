import { MongoClient } from "mongodb";

export async function getMainPageDetails() {
  const client = new MongoClient(process.env.MONGO_URI);

  try {
    await client.connect();
    const db = client.db("Epoxyd");
    const collection = db.collection("main-page");
    const details = await collection.findOne({});
    const normalizedDetails = { ...details, _id: "" };

    return (
      normalizedDetails || {
        title: "Epoxyd Desing",
        subtitle: "Piękno żywicy",
        description: "",
        backgroundImg:
          "https://res.cloudinary.com/dkfbyid3i/image/upload/v1717160460/behresii4w8a5s3qb3nt.jpg",
      }
    );
  } catch (error) {
    console.error(error.message);
  } finally {
    await client.close();
  }
}
