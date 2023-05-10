const express = require('express');
const cors = require('cors');

const logRoutes = require('./middleware/logger');
const postRouter = require('./routers/post');
const userRouter = require('./routers/user');

const api = express();

api.use(cors());
api.use(express.json());
api.use(logRoutes);

api.get("/", (req, res) => {
    res.json({
        name: "Florin County Council Library",
        description: "App for libary workers to show, update and delete books for the community. The community can also browse the libary and find out opening times "
    })
})

//This is an added layer of sercurity to reject requests that are not defined.
api.post('/', (req, res) => {
    res.status(405).send("Not allowed")
})

api.use("/posts", postRouter);
api.use("/users", userRouter);

module.exports = api;
