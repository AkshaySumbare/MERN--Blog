import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
 import dotenv from 'dotenv';
 import cookieParser from 'cookie-parser';

 dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MongoDb is connected");
})
.catch((err)=>{
    console.log(err);
});
 

const app = express();

app.use(express.json());
app.use(cookieParser());

app.listen(3000, ()=>{
    console.log("Server is runing!");
});


app.use('/api/user',userRoutes);

app.use('/api/auth', authRoutes);


app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
     const message = err.message || "Internal Srver Error";
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})

