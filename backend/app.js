import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import postRoutes from './routes/post.js';
import userRoutes from './routes/user.js';
import Post from './model/post.js'
//import post from "./model/post.js";


//mongoose.connect('mongodb+srv://ralmosoukar:y4LLMrIOg0h8NPRp@cluster0.qxk2v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    mongoose.connect( process.env.MONGODB_KEY)
        .then(()=> {
          console.log('connected to db');
      }).catch(() => {
      console.log('connect failed');
    });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//adding header :user mongopdb(usernama,me:ralmosoukar;pass:v677XuFxXGwBrNqS).
//mongodb+srv://ralmosoukar:<db_password>@cluster0.qxk2v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


app.use((req,res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
);
  res.setHeader(
    "Access-Control-Allow-Methods" ,
    'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    );
   next();
});

app.use('/api/posts', postRoutes);
app.use('/api/user', userRoutes);

export default app;
