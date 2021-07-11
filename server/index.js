import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRouter from './routes/posts.js';
import userRouter from './routes/users.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRouter);
app.use('/users',userRouter);

// mongodb
//const CONNECTION_URL = 'mongodb+srv://MERNProject:MERNProject123@cluster0.b4hf8.mongodb.net/MERNProject';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then (() => app.listen(PORT, () => console.log('SERVER IS RUNNING ON PORT: ' + PORT)))
    .catch ((error) => console.log(error));

mongoose.set('useFindAndModify', false);