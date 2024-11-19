const express = require('express');
const connectDB = require('./config/db');
const Movie_router = require('./routes/movie.route');
const Auth_router = require('./routes/auth.route');
require('dotenv').config();
const PORT = process.env.PORT || 5000;



const app = express();
app.use(express.json())
app.use("/api/v1/auth", Auth_router)
app.use("/api/v1/movie", Movie_router)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB()
  });


