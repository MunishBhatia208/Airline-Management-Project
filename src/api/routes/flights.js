import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = db.collection("flights");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
    let collection = db.collection("flights");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.post("/", async (req, res) => {
    try {
        let newDocument = {
            carrier: req.body.carrier,
            flight_number: req.body.flight_number,
            aircraft: req.body.aircraft,
            origin: req.body.origin,
            destination: req.body.destination,
            departure: new Date(req.body.departure),
            arrival: new Date(req.body.arrival),
            duration: req.body.duration
        };
        let collection = db.collection("flights");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.send("Error adding flight").status(500);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                carrier: req.body.carrier,
                flight_number: req.body.flight_number,
                aircraft: req.body.aircraft,
                origin: req.body.origin,
                destination: req.body.destination,
                departure: new Date(req.body.departure),
                arrival: new Date(req.body.arrival),
                duration: req.body.duration
            },
        };
        let collection = db.collection("flights");
        let result = await collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.send("Error updating flight").status(500);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        let collection = db.collection("flights");
        let result = await collection.deleteOne(query);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.send("Error deleting flight").status(500);
    }
});

export default router;