import express, { urlencoded } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

//File import
import postRoutes from './routes/post.js'


//main app
const app = express();



//app body
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
//Routes
app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://alamin:alamin123@freecluster.ksjz7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(()=>app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
.catch(error => console.log(error.message))