const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

// Accept json from payload 
app.use(express.json());

// Create Path
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Use custom middleware
app.use(errorHandler);

// Create Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})


