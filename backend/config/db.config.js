// Database Configuration
const DB_CONFIG = {
    // Firebase configuration (from the user's provided config)
    FIREBASE_CONFIG: {
        apiKey: "AIzaSyAdvJH8LOV15l09Omtg7okdO2qlTwBX-Cw",
        authDomain: "parallel-ad5f8.firebaseapp.com",
        databaseURL: "https://parallel-ad5f8-default-rtdb.firebaseio.com",
        projectId: "parallel-ad5f8",
        storageBucket: "parallel-ad5f8.firebasestorage.app",
        messagingSenderId: "837531806929",
        appId: "1:837531806929:web:fbfe27f1efec5f1db369f0",
        measurementId: "G-MNDNP3YJPF"
    },
    
    // MongoDB configuration (alternative option)
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/flixaura',
    
    // Redis configuration (for caching)
    REDIS_CONFIG: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379,
        password: process.env.REDIS_PASSWORD || null
    },
    
    // Cache settings
    CACHE: {
        TTL: {
            METADATA: 24 * 60 * 60, // 24 hours for metadata
            STREAMING_LINKS: 60 * 60, // 1 hour for streaming links
            USER_DATA: 30 * 60 // 30 minutes for user data
        }
    }
};

module.exports = DB_CONFIG;