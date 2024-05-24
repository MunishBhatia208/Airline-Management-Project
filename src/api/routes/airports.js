import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = db.collection("airports");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
    let collection = db.collection("airports");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.post("/", async (req, res) => {
    try {
        let newDocument = {
            country: req.body.country,
            city: req.body.city,
            name: req.body.name,
            iata: req.body.iata
        };
        let collection = db.collection("airports");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.send("Error adding airport").status(500);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                country: req.body.country,
                city: req.body.city,
                name: req.body.name,
                iata: req.body.iata
            },
        };
        let collection = db.collection("airports");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.send("Error updating airport").status(500);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        let collection = db.collection("airports");
        let result = await collection.deleteOne(query);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.send("Error deleting airport").status(500);
    }
});

export default router;