const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db/db');
const authRoutes = require('./routes/authRoute');
const todoRoutes = require('./routes/todoRoutes');

dotenv.config();
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running ...');
});

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
