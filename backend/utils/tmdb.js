// TMDb API Utility
const axios = require('axios');
const TMDB_CONFIG = require('../config/tmdb.config');
const cache = require('./cache');

class TMDbAPI {
    constructor() {
        this.baseUrl = TMDB_CONFIG.BASE_URL;
        this.apiKey = TMDB_CONFIG.API_KEY;
        this.accessToken = TMDB_CONFIG.READ_ACCESS_TOKEN;
        this.imageBaseUrl = TMDB_CONFIG.IMAGE_BASE_URL;
    }
    
    // Get movie details
    async getMovie(id) {
        const cacheKey = `movie_${id}`;
        
        // Try to get from cache first
        let movie = await cache.get(cacheKey);
        if (movie) {
            return movie;
        }
        
        try {
            const response = await axios.get(`${this.baseUrl}/movie/${id}`, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`
                },
                params: {
                    api_key: this.apiKey
                }
            });
            
            movie = response.data;
            
            // Cache the result
            await cache.set(cacheKey, movie, 24 * 60 * 60); // 24 hours
            
            return movie;
        } catch (error) {
            throw new Error(`Failed to fetch movie: ${error.message}`);
        }
    }
    
    // Get TV series details
    async getTVSeries(id) {
        const cacheKey = `tv_${id}`;
        
        // Try to get from cache first
        let series = await cache.get(cacheKey);
        if (series) {
            return series;
        }
        
        try {
            const response = await axios.get(`${this.baseUrl}/tv/${id}`, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`
                },
                params: {
                    api_key: this.apiKey
                }
            });
            
            series = response.data;
            
            // Cache the result
            await cache.set(cacheKey, series, 24 * 60 * 60); // 24 hours
            
            return series;
        } catch (error) {
            throw new Error(`Failed to fetch TV series: ${error.message}`);
        }
    }
    
    // Search for content
    async search(query, type = 'multi') {
        const cacheKey = `search_${query}_${type}`;
        
        // Try to get from cache first
        let results = await cache.get(cacheKey);
        if (results) {
            return results;
        }
        
        try {
            const response = await axios.get(`${this.baseUrl}/search/${type}`, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`
                },
                params: {
                    api_key: this.apiKey,
                    query
                }
            });
            
            results = response.data;
            
            // Cache the result
            await cache.set(cacheKey, results, 60 * 60); // 1 hour
            
            return results;
        } catch (error) {
            throw new Error(`Failed to search: ${error.message}`);
        }
    }
    
    // Get trending content
    async getTrending(mediaType = 'all', timeWindow = 'week') {
        const cacheKey = `trending_${mediaType}_${timeWindow}`;
        
        // Try to get from cache first
        let results = await cache.get(cacheKey);
        if (results) {
            return results;
        }
        
        try {
            const response = await axios.get(`${this.baseUrl}/trending/${mediaType}/${timeWindow}`, {
                headers: {
                    'Authorization': `Bearer ${this.accessToken}`
                },
                params: {
                    api_key: this.apiKey
                }
            });
            
            results = response.data;
            
            // Cache the result
            await cache.set(cacheKey, results, 60 * 60); // 1 hour
            
            return results;
        } catch (error) {
            throw new Error(`Failed to fetch trending content: ${error.message}`);
        }
    }
    
    // Get image URL with specified size
    getImageUrl(path, size = 'original') {
        if (!path) return null;
        return `${this.imageBaseUrl}/${size}${path}`;
    }
}

// Export singleton instance
module.exports = new TMDbAPI();