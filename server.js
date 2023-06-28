const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv").config();


connectDb();
const app = express();

const port = process.env.PORT || 5000;

// Accept json from payload 
app.use(express.json());

// Use the express-fileupload middleware
app.use(
    fileUpload({
        limits: {
            fileSize: 10000000,
        },
        abortOnLimit: true,
    })
);
app.use(express.static('public'));

// Create Path
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/files", require("./routes/fileRoutes"));

// Use custom middleware
app.use(errorHandler);

// Create Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})


