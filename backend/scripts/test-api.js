// API Test Script
const axios = require('axios');

async function testApiEndpoints() {
    const baseURL = 'http://localhost:3000/api';
    
    try {
        console.log('Testing Flix Aura API endpoints...\n');
        
        // Test metadata endpoint
        console.log('1. Testing metadata endpoint...');
        const metadataResponse = await axios.get(`${baseURL}/metadata/movie/1`);
        console.log('   Status:', metadataResponse.status);
        console.log('   Title:', metadataResponse.data.title.title);
        console.log('   Success!\n');
        
        // Test trending endpoint
        console.log('2. Testing trending endpoint...');
        const trendingResponse = await axios.get(`${baseURL}/metadata/trending`);
        console.log('   Status:', trendingResponse.status);
        console.log('   Results:', trendingResponse.data.titles.length, 'titles');
        console.log('   Success!\n');
        
        // Test links endpoint
        console.log('3. Testing links endpoint...');
        const linksResponse = await axios.get(`${baseURL}/links/1`);
        console.log('   Status:', linksResponse.status);
        console.log('   Links:', linksResponse.data.links.length, 'links');
        console.log('   Success!\n');
        
        // Test comments endpoint
        console.log('4. Testing comments endpoint...');
        const commentsResponse = await axios.get(`${baseURL}/comments/1`);
        console.log('   Status:', commentsResponse.status);
        console.log('   Comments:', commentsResponse.data.comments.length, 'comments');
        console.log('   Success!\n');
        
        console.log('All API tests passed successfully!');
        
    } catch (error) {
        console.error('API test failed:', error.message);
        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
        }
    }
}

// Run the tests
testApiEndpoints();