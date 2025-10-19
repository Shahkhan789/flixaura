// User Model Tests
const User = require('../models/User');

describe('User Model', () => {
    test('should create a new user with correct properties', () => {
        const user = new User(1, 'testuser', 'test@example.com', 'password123');
        
        expect(user.id).toBe(1);
        expect(user.username).toBe('testuser');
        expect(user.email).toBe('test@example.com');
        expect(user.password).toBe('password123');
        expect(user.role).toBe('user');
        expect(Array.isArray(user.watchedList)).toBe(true);
        expect(Array.isArray(user.toWatchList)).toBe(true);
        expect(Array.isArray(user.reviews)).toBe(true);
    });
    
    test('should allow adding titles to watched list', () => {
        const user = new User(1, 'testuser', 'test@example.com', 'password123');
        
        const result = user.addToWatched(1);
        expect(result).toBe(true);
        expect(user.watchedList).toContain(1);
        
        // Adding the same title again should return false
        const result2 = user.addToWatched(1);
        expect(result2).toBe(false);
    });
    
    test('should allow adding titles to to-watch list', () => {
        const user = new User(1, 'testuser', 'test@example.com', 'password123');
        
        const result = user.addToToWatch(1);
        expect(result).toBe(true);
        expect(user.toWatchList).toContain(1);
        
        // Adding the same title again should return false
        const result2 = user.addToToWatch(1);
        expect(result2).toBe(false);
    });
    
    test('should return user data without password', () => {
        const user = new User(1, 'testuser', 'test@example.com', 'password123');
        const userData = user.toJSON();
        
        expect(userData.id).toBe(1);
        expect(userData.username).toBe('testuser');
        expect(userData.email).toBe('test@example.com');
        expect(userData.password).toBeUndefined();
    });
});