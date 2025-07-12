import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();



const PORT = process.env.PORT || 3000;




const server = http.createServer(app);




server.listen(PORT || 3000, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});







