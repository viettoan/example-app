import express from "express";

export const usersRoute = (app) => {
    const router = express.Router()

    app.use('/users', router);
}