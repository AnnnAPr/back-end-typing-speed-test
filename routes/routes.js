import express from "express";
import Model from "../models/model.js";
import Score  from "../models/score.js";

const router = express.Router();

//Post text
router.post("/post", async (req, res) => {
  console.log(req.body);
  const data = new Model({
    text: req.body.text,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Post score
router.post("/score", async (req, res) => {
  console.log(req.body);
  const data = new Score({
    score: req.body.score,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});



//Get random text
router.get("/text", async (req, res) => {
  try {
    const data = await Model.find();
    let randNumber = Math.floor(Math.random() * data.length);
    res.json(data[randNumber].text);
    // res.json(data[randNumber].text.split(" "));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get all scores
router.get("/scores", async (req, res) => {
  try {
    const data = await Score.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
