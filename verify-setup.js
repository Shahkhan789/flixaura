// Setup Verification Script
const fs = require('fs');
const path = require('path');

// List of required files and directories
const requiredPaths = [
    // Frontend
    'frontend/index.html',
    'frontend/search.html',
    'frontend/detail.html',
    'frontend/profile.html',
    'frontend/admin.html',
    'frontend/css/style.css',
    'frontend/css/detail.css',
    'frontend/css/search.css',
    'frontend/css/profile.css',
    'frontend/css/admin.css',
    'frontend/js/main.js',
    'frontend/js/detail.js',
    'frontend/js/search.js',
    'frontend/js/profile.js',
    'frontend/js/admin.js',
    'frontend/README.md',
    
    // Backend
    'backend/server.js',
    'backend/package.json',
    'backend/.env.example',
    'backend/README.md',
    'backend/routes/auth.js',
    'backend/routes/metadata.js',
    'backend/routes/links.js',
    'backend/routes/comments.js',
    'backend/routes/admin.js',
    'backend/models/User.js',
    'backend/controllers/AuthController.js',
    'backend/middleware/auth.js',
    'backend/config/tmdb.config.js',
    'backend/config/db.config.js',
    'backend/utils/cache.js',
    'backend/utils/tmdb.js',
    'backend/utils/scraper.js',
    'backend/utils/recommendations.js',
    'backend/scripts/firebase-init.js',
    'backend/scripts/test-tmdb.js',
    'backend/scripts/init-project.js',
    'backend/scripts/run-tests.js',
    'backend/scripts/api-demo.js',
    'backend/tests/User.test.js',
    'backend/tests/tmdb.test.js',
    'backend/tests/recommendations.test.js',
    
    // Root
    'README.md',
    'PROJECT_DOCUMENTATION.md',
    'LICENSE'
];

console.log('🔍 Verifying Flix Aura project setup...\n');

let allExist = true;

for (const relativePath of requiredPaths) {
    const fullPath = path.join(__dirname, relativePath);
    
    if (fs.existsSync(fullPath)) {
        console.log(`✅ ${relativePath}`);
    } else {
        console.log(`❌ ${relativePath} (MISSING)`);
        allExist = false;
    }
}

console.log('\n' + '='.repeat(50));

if (allExist) {
    console.log('🎉 All required files are present!');
    console.log('\n🚀 You can now run the project:');
    console.log('   1. cd backend');
    console.log('   2. npm install');
    console.log('   3. npm start');
    console.log('   4. Open frontend files in your browser');
} else {
    console.log('⚠️  Some required files are missing.');
    console.log('   Please check the list above and ensure all files are created.');
}

console.log('\n📄 For detailed documentation, see:');
console.log('   - README.md (main project documentation)');
console.log('   - PROJECT_DOCUMENTATION.md (complete documentation)');
console.log('   - frontend/README.md (frontend documentation)');
console.log('   - backend/README.md (backend documentation)');