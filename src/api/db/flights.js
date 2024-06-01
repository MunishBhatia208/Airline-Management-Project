import mongoose from "mongoose";

const FlightSchema = new mongoose.Schema({
    carrier: {type: String, required: true},
    flight_number: {type: String, required: true},
    aircraft: {type: String, required: true},
    origin: {type: String, required: true},
    destination: {type: String, required: true},
    departure: {type: Date, required: true},
    arrival: {type: Date, required: true},
    duration: {type: Number, required: true}
});

export const FlightModel = mongoose.model("Flight", FlightSchema);

export const getFlights = () => FlightModel.find();
export const getFlightByID = (id) => FlightModel.findById(id);

export const createFlight = (values) => new FlightModel(values).save().then((flight) => flight.toObject());
export const deleteFlightByID = (id) => FlightModel.findOneAndDelete({ _id: id });
export const updateFlightByID = (id, values) => FlightModel.findByIdAndUpdate(id, values);