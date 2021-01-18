const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const port = process.env.PORT || 5000;
const usersRouter = require('./routes/userroute');

const app = express();
app.use(cors());
app.use('/userroute', usersRouter);
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
).then(()=>console.log("Connection is connected")).catch(err=>console.log(err.message))


app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});
