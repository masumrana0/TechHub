import { MongoClient, ServerApiVersion } from "mongodb";
const ObjectId = require("mongodb").ObjectId;
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.w9y9xep.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const productCollection = await client
      .db("Pc-Builder-Db")
      .collection("products");
    if (req.method == "GET") {
      if (req.query.category) {
        const products = await productCollection
          .aggregate([
            {
              $match: {
                category: { $regex: new RegExp(req.query.category, "i") },
              },
            },
          ])
          .toArray();

        res.send({ message: "Success", status: 200, data: products });
      } else if (req.query.id) {
        const id = req.query.id;
        const product = await productCollection.findOne({
          _id: new ObjectId(id),
        });
        res.send({ message: "Success", status: 200, data: product });
      } else if (req.query.limit) {
        const limit = parseInt(req.query.limit);

        const products = await productCollection
          .find({})
          .limit(limit)
          .toArray();

        res.send({ message: "Success", status: 200, data: products });
      } else {
        const products = await productCollection.find({}).toArray();
        res.send({ message: "Success", status: 200, data: products });
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export default run;
