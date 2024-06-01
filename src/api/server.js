import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import users from "./routes/users.js";

import flights from "./routes/flights.js";
import airports from "./routes/airports.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());


app.use("/users", users);

app.use("/flights", flights);
app.use("/airports", airports);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

mongoose.connect(process.env.ATLAS_URI)
mongoose.connection.on("error", (error) => console.error(error));