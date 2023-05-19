const express = require ("express");
const cors = require('cors');
const port = 5000;
const app = express();
const TaskRouter = require('./router/TaskRouter');
const connect = require("./helper/db")
connect("Successfully connected mongodb")

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/',TaskRouter);

app.get("/", (req,res) => {
    res.send("Todo list backend")
})

app.get("/test", (req,res) => {
    res.send("Successfully connected mongodb")
})

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
});


