import express from "express"
import { Task } from "../models/Task"

const router = express.Router();

router.get("/", async (_req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post("/", async (req, res) => {
    const newTask = new Task(req.body);
    const saved = await newTask.save();
    res.status(201).json(saved)
})

router.patch("/:id", async (req, res) => {
    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updated)
})

router.delete("/:id", async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.sendStatus(204)
})

export default router;