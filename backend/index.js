import express from 'express';
import cors from 'cors';
import connectDB from './Database/db.js';

import userRoute from './Routes/user.js';
import authRoute from './Routes/auth.js';
import conferenceRoute from './Routes/conference.js';
import workshopRoute from './Routes/workshop.js';
import paymentRoute from './Routes/payment.js';
import researchRoute from './Routes/research.js';
import postRoute from './Routes/post.js';

const app = express();

app.use('/uploads', express.static('uploads'));

//Database connection
connectDB().then(
  () => console.log('Database Connected....'),
  (error) => console.log(error),
);

app.use(cors()); //cors added
app.use(express.json({ extended: false })); //enables json

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/user', userRoute);
app.use('/api/login', authRoute);
app.use('/api/conference', conferenceRoute);
app.use('/api/workshop', workshopRoute);
app.use('/api/payment', paymentRoute);
app.use('/api/research', researchRoute);
app.use('/api/post', postRoute);

const PORT = process.env.PORT || 5000;

//starting app
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));

export default app;