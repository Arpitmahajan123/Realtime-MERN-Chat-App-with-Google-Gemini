import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import connectDB from './db/db.js';
// Importing dotenv to manage environment variables
import dotenv from 'dotenv';
dotenv.config();


 
// Connect to MongoDB
connectDB(); 

const app = express();



// Logging middleware
app.use(morgan('dev')); 

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send('Welcome to the Backend API');
});






export default app;



