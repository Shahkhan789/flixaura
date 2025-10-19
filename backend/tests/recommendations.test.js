// Recommendation Engine Tests
const RecommendationEngine = require('../utils/recommendations');

describe('Recommendation Engine', () => {
    let recommender;
    
    beforeEach(() => {
        recommender = new RecommendationEngine();
    });
    
    test('should return recommendations for a valid user', () => {
        const recommendations = recommender.getRecommendations(1);
        expect(Array.isArray(recommendations)).toBe(true);
        expect(recommendations.length).toBeGreaterThan(0);
    });
    
    test('should return empty array for invalid user', () => {
        const recommendations = recommender.getRecommendations(999);
        expect(Array.isArray(recommendations)).toBe(true);
        expect(recommendations.length).toBe(0);
    });
    
    test('should return "Because You Watched" recommendations', () => {
        const recommendations = recommender.getBecauseYouWatched(1, 1);
        expect(Array.isArray(recommendations)).toBe(true);
    });
    
    test('should exclude already watched content from recommendations', () => {
        const recommendations = recommender.getRecommendations(1);
        const watched = recommender.userData[1].watched;
        
        // Check that none of the recommended items are in the watched list
        const recommendedIds = recommendations.map(item => item.id);
        const intersection = recommendedIds.filter(id => watched.includes(id));
        
        expect(intersection.length).toBe(0);
    });
});