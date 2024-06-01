import mongoose from "mongoose";

const AirportSchema = new mongoose.Schema({
    country: {type: String, required: true},
    city: {type: String, required: true},
    name: {type: String, required: true},
    iata: {type: String, required: true}
});

export const AirportModel = mongoose.model("Airport", AirportSchema);

export const getAirports = () => AirportModel.find();
export const getAirportByID = (id) => AirportModel.findById(id);

export const createAirport = (values) => new AirportModel(values).save().then((airport) => airport.toObject());
export const deleteAirportByID = (id) => AirportModel.findOneAndDelete({ _id: id });
export const updateAirportByID = (id, values) => AirportModel.findByIdAndUpdate(id, values);