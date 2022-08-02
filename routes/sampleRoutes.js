import express from "express";
import Sample from "../models/sample.js";

const router = express.Router();

//Get all samples
router.get("/samples", async (req, res) => {
  try {
    const data = await Sample.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Post sample
router.post("/samples", async (req, res) => {
  const data = new Sample({
    text: req.body.text,
    scores: req.body.scores,
    title: req.body.title
  })

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }


})

// Get all scores by sample ID
router.get("/samples/:id/scores", async (req, res) => {
  try {
    const data = await Sample.findById(req.params.id);
    res.json(data.scores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

// Post score by sample ID
router.patch("/samples/:id/scores", async (req, res) => {

  try {
    const data = await Sample.findById(req.params.id);
    data.scores.push(req.body.score)
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
})

export default router