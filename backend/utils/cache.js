// Caching Utility
const redis = require('redis');
const DB_CONFIG = require('../config/db.config');

class Cache {
    constructor() {
        this.client = null;
        this.isConnected = false;
    }
    
    // Initialize Redis connection
    async connect() {
        try {
            this.client = redis.createClient({
                host: DB_CONFIG.REDIS_CONFIG.host,
                port: DB_CONFIG.REDIS_CONFIG.port,
                password: DB_CONFIG.REDIS_CONFIG.password
            });
            
            await this.client.connect();
            this.isConnected = true;
            console.log('Redis cache connected successfully');
        } catch (error) {
            console.error('Redis connection failed:', error.message);
            this.isConnected = false;
        }
    }
    
    // Get data from cache
    async get(key) {
        if (!this.isConnected || !this.client) {
            return null;
        }
        
        try {
            const data = await this.client.get(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Cache get error:', error.message);
            return null;
        }
    }
    
    // Set data in cache
    async set(key, value, ttl = 3600) {
        if (!this.isConnected || !this.client) {
            return false;
        }
        
        try {
            await this.client.setEx(key, ttl, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Cache set error:', error.message);
            return false;
        }
    }
    
    // Delete data from cache
    async delete(key) {
        if (!this.isConnected || !this.client) {
            return false;
        }
        
        try {
            await this.client.del(key);
            return true;
        } catch (error) {
            console.error('Cache delete error:', error.message);
            return false;
        }
    }
    
    // Clear all cache
    async clear() {
        if (!this.isConnected || !this.client) {
            return false;
        }
        
        try {
            await this.client.flushAll();
            return true;
        } catch (error) {
            console.error('Cache clear error:', error.message);
            return false;
        }
    }
}

// Export singleton instance
module.exports = new Cache();