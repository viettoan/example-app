import express from "express";
import { router } from "./router/index.js";
import cors from "cors";
import {connect} from "./config/database/mongo.js";

// Connect MongoDB 
connect();

// Khoi tao instance express
const app = express();
// third party middleware
app.use(cors());

// config app doc duoc data dang application/json
// built-in middleware de xu ly request co content-type = application/json
app.use(express.json());

// build-in middleware static file
app.use(express.static('storage'))
app.use(express.static('images'))


//application midleware
// Cac middleware duoc ap dung cho toan bo api hoac 1 nhom api nao do
// create middleware log request
app.use((req, res, next) => {
    console.log('logging...');
    next();
});
router(app);

// error handling middleware
app.use(
    (err, req, res, next) => {
        res.json({
            message: err.message,
            name: err.name
        })
    }
)


// Khoi tao server listen port 3000
app.listen(
    3000,
    () => {
        console.log("Server listening on port 3000");
    }
)