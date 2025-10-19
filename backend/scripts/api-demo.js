// API Demo Script
const axios = require('axios');

async function demoApi() {
    const baseURL = 'http://localhost:3000/api';
    
    console.log('Flix Aura API Demo\n');
    
    try {
        // 1. User signup
        console.log('1. User Signup');
        const signupResponse = await axios.post(`${baseURL}/auth/signup`, {
            username: 'demouser',
            email: 'demo@example.com',
            password: 'demopassword'
        });
        console.log('   Status:', signupResponse.status);
        console.log('   Message:', signupResponse.data.message);
        console.log('   User ID:', signupResponse.data.user.id);
        console.log('   Success!\n');
        
        // 2. User login
        console.log('2. User Login');
        const loginResponse = await axios.post(`${baseURL}/auth/login`, {
            email: 'demo@example.com',
            password: 'demopassword'
        });
        console.log('   Status:', loginResponse.status);
        console.log('   Message:', loginResponse.data.message);
        console.log('   User:', loginResponse.data.user.username);
        console.log('   Success!\n');
        
        // 3. Get movie metadata
        console.log('3. Get Movie Metadata');
        const movieResponse = await axios.get(`${baseURL}/metadata/movie/1`);
        console.log('   Status:', movieResponse.status);
        console.log('   Title:', movieResponse.data.title.title);
        console.log('   Release Date:', movieResponse.data.title.release_date);
        console.log('   Rating:', movieResponse.data.title.rating);
        console.log('   Success!\n');
        
        // 4. Get streaming links
        console.log('4. Get Streaming Links');
        const linksResponse = await axios.get(`${baseURL}/links/1`);
        console.log('   Status:', linksResponse.status);
        console.log('   Links Count:', linksResponse.data.links.length);
        console.log('   First Link Source:', linksResponse.data.links[0].source);
        console.log('   Success!\n');
        
        // 5. Get comments
        console.log('5. Get Comments');
        const commentsResponse = await axios.get(`${baseURL}/comments/1`);
        console.log('   Status:', commentsResponse.status);
        console.log('   Comments Count:', commentsResponse.data.comments.length);
        if (commentsResponse.data.comments.length > 0) {
            console.log('   First Comment:', commentsResponse.data.comments[0].text.substring(0, 50) + '...');
        }
        console.log('   Success!\n');
        
        // 6. Search for content
        console.log('6. Search for Content');
        const searchResponse = await axios.get(`${baseURL}/metadata/search/inception`);
        console.log('   Status:', searchResponse.status);
        console.log('   Results Count:', searchResponse.data.results.length);
        console.log('   Success!\n');
        
        // 7. Get trending content
        console.log('7. Get Trending Content');
        const trendingResponse = await axios.get(`${baseURL}/metadata/trending/movie`);
        console.log('   Status:', trendingResponse.status);
        console.log('   Trending Movies Count:', trendingResponse.data.titles.length);
        console.log('   Success!\n');
        
        console.log('🎉 All API demos completed successfully!');
        console.log('\nNote: This demo uses mock data. In a real implementation, it would interact with actual APIs and databases.');
        
    } catch (error) {
        console.error('❌ API demo failed:', error.message);
        if (error.response) {
            console.error('   Status:', error.response.status);
            console.error('   Data:', error.response.data);
        }
    }
}

// Run the demo
demoApi();