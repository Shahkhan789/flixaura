// TMDb API Utility Tests
const TMDbAPI = require('../utils/tmdb');

describe('TMDb API Utility', () => {
    let tmdb;
    
    beforeEach(() => {
        tmdb = new TMDbAPI();
    });
    
    test('should generate correct image URLs', () => {
        const imagePath = '/test.jpg';
        const url = tmdb.getImageUrl(imagePath, 'w500');
        expect(url).toBe('https://image.tmdb.org/t/p/w500/test.jpg');
    });
    
    test('should return null for empty image path', () => {
        const url = tmdb.getImageUrl(null, 'w500');
        expect(url).toBeNull();
    });
    
    test('should use original size as default', () => {
        const imagePath = '/test.jpg';
        const url = tmdb.getImageUrl(imagePath);
        expect(url).toBe('https://image.tmdb.org/t/p/original/test.jpg');
    });
});