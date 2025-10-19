// Firebase Initialization Script
const admin = require('firebase-admin');
const serviceAccount = require('../config/serviceAccountKey.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://parallel-ad5f8-default-rtdb.firebaseio.com'
});

console.log('Firebase Admin SDK initialized successfully');

// Export initialized Firebase instance
module.exports = admin;