const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

let tasksCollection;

MongoClient.connect(process.env.MONGO_URI)
  .then((client) => {
    const db = client.db("todoDB");
    tasksCollection = db.collection("tasks");

    console.log("MongoDB connected successfully");

    // Start server only after MongoDB connects
    const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

app.get("/tasks", async (req, res) => {
  try {
    console.log("tasksCollection:", tasksCollection);
    const tasks = await tasksCollection.find().toArray();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    await tasksCollection.insertOne({
      task: req.body.task,
    });

    res.json({ message: "Task added" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/tasks/:id", async (req, res) => {
  try {
    await tasksCollection.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: { task: req.body.task } }
    );

    res.json({ message: "Task updated" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    await tasksCollection.deleteOne({
      _id: new ObjectId(req.params.id),
    });

    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});