import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));


app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO).then(() => {
  console.log("connected to database!!");
}).catch((err) => {
  console.log(err);
});



app.listen(3000, () => {
  console.log('Server is running on port 3000!!!');

})