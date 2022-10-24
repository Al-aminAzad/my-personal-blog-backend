import express, { urlencoded } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

//File import
import postsRoutes from './routes/posts.js'
import usersRoutes from './routes/users.js'


//main app
const app = express();
dotenv.config();



//app body
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
//Routes
app.use('/posts', postsRoutes);
app.use('/users', usersRoutes);

app.get('/', (req,res)=>{
    res.send('PING')
})

// const CONNECTION_URL = 'mongodb+srv://alamin:alamin123@freecluster.ksjz7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
.then(()=>app.listen(PORT, ()=> console.log(`Server running on port: ${PORT}`)))
.catch(error => console.log(error.message))