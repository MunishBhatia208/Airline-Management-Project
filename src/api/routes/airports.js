import express from "express";
import { ObjectId } from "mongodb";
import { createAirport, deleteAirportByID, getAirportByID, getAirports, updateAirportByID } from "../db/airports.js";

const router = express.Router();

router.get("/", async (req, res) => {
    let results = await getAirports();
    res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    let result = await getAirportByID(id);
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.post("/", async (req, res) => {
    try {
        let newAirport = {
            country: req.body.country,
            city: req.body.city,
            name: req.body.name,
            iata: req.body.iata
        };
        let result = await createAirport(newAirport);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.send("Error adding airport").status(500);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updates = {
            country: req.body.country,
            city: req.body.city,
            name: req.body.name,
            iata: req.body.iata
        };
        let result = await updateAirportByID(id, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.send("Error updating airport").status(500);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        let result = await deleteAirportByID(id);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.send("Error deleting airport").status(500);
    }
});

export default router;