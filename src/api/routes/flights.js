import express from "express";
import { ObjectId } from "mongodb";
import { createFlight, deleteFlightByID, getFlightByID, getFlights } from "../db/flights.js";

const router = express.Router();

router.get("/", async (req, res) => {
    let results = await getFlights();
    res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    let result = await getFlightByID(id);
    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});

router.post("/", async (req, res) => {
    try {
        let newFlight = {
            carrier: req.body.carrier,
            flight_number: req.body.flight_number,
            aircraft: req.body.aircraft,
            origin: req.body.origin,
            destination: req.body.destination,
            departure: new Date(req.body.departure),
            arrival: new Date(req.body.arrival),
            duration: new Number(req.body.duration)
        };
        let result = await createFlight(newFlight);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.send("Error adding flight").status(500);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updates = {
            carrier: req.body.carrier,
            flight_number: req.body.flight_number,
            aircraft: req.body.aircraft,
            origin: req.body.origin,
            destination: req.body.destination,
            departure: new Date(req.body.departure),
            arrival: new Date(req.body.arrival),
            duration: req.body.duration
        };
        let result = await updateFlightByID(id, updates)
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.send("Error updating flight").status(500);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        let result = await deleteFlightByID(id);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.send("Error deleting flight").status(500);
    }
});

export default router;