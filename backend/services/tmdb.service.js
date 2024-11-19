const axios = require('axios');
require('dotenv').config();

const MOVIE_API_KEY = process.env.MOVIE_API_KEY;

if (!MOVIE_API_KEY) {
  console.warn("Warning: MOVIE_API_KEY is not defined in the .env file.");
}

const fetchFromTMDB = async (url) => {
  try {
    const options = {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${MOVIE_API_KEY}`,
      },
    };

    const response = await axios.get(url, options);

    return response.data;
  } catch (error) {
    console.error(`Error fetching data from TMDB: ${error.response?.statusText || error.message}`);
    throw error;
  }
};

module.exports = fetchFromTMDB;
