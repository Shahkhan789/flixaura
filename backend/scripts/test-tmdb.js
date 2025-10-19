// TMDb API Test Script
const axios = require('axios');
const TMDB_CONFIG = require('../config/tmdb.config');

async function testTmdbApi() {
    try {
        console.log('Testing TMDb API connection...');
        
        // Test API key with a simple request
        const response = await axios.get(`${TMDB_CONFIG.BASE_URL}/movie/550`, {
            headers: {
                'Authorization': `Bearer ${TMDB_CONFIG.READ_ACCESS_TOKEN}`
            },
            params: {
                api_key: TMDB_CONFIG.API_KEY
            }
        });
        
        console.log('TMDb API connection successful!');
        console.log('Movie Title:', response.data.title);
        console.log('Release Date:', response.data.release_date);
        console.log('Rating:', response.data.vote_average);
        
    } catch (error) {
        console.error('TMDb API connection failed:', error.message);
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        }
    }
}

// Run the test
testTmdbApi();