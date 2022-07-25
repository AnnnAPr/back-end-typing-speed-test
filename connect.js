// const { MongoClient } = require("mongodb");
import mongodb from "mongodb";
import { MongoClient } from "mongodb";

// Replace the following with your Atlas connection string
const url =
  "mongodb+srv://Anya-1215:T5KBdLAdCCETZ7Xn@cluster0.a2xlhrt.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
