// Project Initialization Script
const fs = require('fs');
const path = require('path');

console.log('Initializing Flix Aura Backend Project...');

// Check if node_modules exists
const nodeModulesPath = path.join(__dirname, '..', 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
    console.log('Please run "npm install" to install dependencies first.');
    process.exit(1);
}

// Check if .env file exists
const envPath = path.join(__dirname, '..', '.env');
if (!fs.existsSync(envPath)) {
    console.log('Creating .env file from example...');
    const envExamplePath = path.join(__dirname, '..', '.env.example');
    if (fs.existsSync(envExamplePath)) {
        fs.copyFileSync(envExamplePath, envPath);
    } else {
        // Create a basic .env file
        const envContent = `
# Server Configuration
PORT=3000
NODE_ENV=development

# TMDb API Configuration
TMDB_API_KEY=your_tmdb_api_key_here
TMDB_READ_ACCESS_TOKEN=your_tmdb_read_access_token_here

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/flixaura
REDIS_HOST=localhost
REDIS_PORT=6379
`;
        fs.writeFileSync(envPath, envContent.trim());
    }
    console.log('.env file created. Please update it with your actual configuration.');
}

console.log('Project initialization completed successfully!');
console.log('To start the server, run: npm start');