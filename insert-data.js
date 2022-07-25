import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://Anya-1215:T5KBdLAdCCETZ7Xn@cluster0.a2xlhrt.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(url);
 
  // The database to use
const dbName = "textData";
async function run() {
  try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db(dbName);
       // Use the collection "texts"
      const col = db.collection("texts");
       // Construct a document                                                                                                                                                              
      let text = {
          "textData": { "" },
      
      }
       // Insert a single document, wait for promise so we can read it back
      const p = await col.insertOne(personDocument);
       // Find one document
      const myDoc = await col.findOne();
       // Print to the console
      console.log(myDoc);
      } catch (err) {
      console.log(err.stack);
  }

  finally {
      await client.close();
  }
}
run().catch(console.dir);
