import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.mjs";
import authRoutes from "./routes/authRoute.js";
// import { MongoClient, ObjectId } from "mongodb";

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("combined"));

const port = process.env.PORT || 5000;
const mode = process.env.DEV_MODE;

connectDB();

// const mongodbURI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.iqd5nyl.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(mongodbURI);
// const database = client.db("EcommerceApp");
// const userCollection = database.collection("users");

// async function run() {
//   try {
//     await client.connect();

//     await client.db("EcommerceApp").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// Routes

app.use('/api/v1/auth', authRoutes);

app.get("/", (req, res) => {
  console.log("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening in ${mode} mode on port ${port}`);
});
