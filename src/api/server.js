import "dotenv/config";
import express from "express";
import cors from "cors";

import flights from "./routes/flights.js";
import airports from "./routes/airports.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/flights", flights);
app.use("/airports", airports);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});