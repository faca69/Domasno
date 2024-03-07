import path from "path";
import Router from "express";
import { readData, writeData } from "../services/db.service.js";
import { v4 as uuidv4 } from "uuid";

const DATABASE = path.join(import.meta.dirname, "..", "data", "database.json");

const router = Router();

router.get("", (req, res) => {
  //////////////////////////
  //ALL TRAINERS
  //   const trainers = readData(DATABASE);

  //   res.send(trainers);

  ///////////////////////////////////////////
  // FOR CURRENTLY ACTIVE

  //   const currentlyActive = req.query.isCurrentlyTeaching;
  //   const trainers = readData(DATABASE);

  //   if (!currentlyActive) {
  //     res.send(trainers);
  //   }

  //   const teaching = trainers.filter(
  //     (t) => t.isCurrentlyTeaching === currentlyActive
  //   );

  //   res.send(teaching);

  /////////////////////////////////////

  // SORTING
  const trainers = readData(DATABASE);

  const sortBy = req.query.sortBy;

  const sortedTrainers = trainers.sort((a, b) => {
    return sortBy === "coursesAsc"
      ? a.coursesFinishedCount - b.coursesFinishedCount
      : b.coursesFinishedCount - a.coursesFinishedCount;
  });

  res.send(sortedTrainers);
});

// get trainer by id

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const trainers = readData(DATABASE);

  const trainer = trainers.find((t) => t.id === id);

  res.send(trainer);
});

//create a trainer

router.post("", (req, res) => {
  const trainer = req.body;

  const newTrainer = {
    id: uuidv4(),
    ...trainer,
  };

  const trainers = readData(DATABASE);

  trainers.push(newTrainer);

  writeData(DATABASE, trainers);

  res.sendStatus(201).send(newTrainer);
});

// update a trainer email

router.patch("/:id/email", (req, res) => {
  const id = req.params.id;

  const body = req.body;

  const trainers = readData(DATABASE);

  const index = trainers.findIndex((t) => t.id === id);

  trainers[index].email = body.email;

  writeData(DATABASE, trainers);

  res.send(trainers[index]);
});

// delete

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  const trainers = readData(DATABASE);

  const filteredTrainers = trainers.filter((t) => t.id !== id);

  writeData(DATABASE, filteredTrainers);
  res.sendStatus(204);
});

// delete ALL

router.delete("/", (req, res) => {
  const trainers = readData(DATABASE);

  const filteredTrainers = [];

  writeData(DATABASE, filteredTrainers);

  res.sendStatus(204);
});

export default router;
