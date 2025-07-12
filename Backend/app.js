import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
// Importing dotenv to manage environment variables
import dotenv from 'dotenv';
dotenv.config();
 

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.send('Welcome to the Backend API');
});






export default app;



