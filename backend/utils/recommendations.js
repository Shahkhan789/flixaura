// Recommendation Engine
class RecommendationEngine {
    constructor() {
        // Mock user data (in a real app, this would come from a database)
        this.userData = {
            1: {
                watched: [1, 2, 5],
                ratings: { 1: 9, 2: 8, 5: 7 },
                genres: ["Action", "Sci-Fi", "Adventure"],
                cast: ["Leonardo DiCaprio", "Christian Bale"]
            },
            2: {
                watched: [3, 4],
                ratings: { 3: 9, 4: 8 },
                genres: ["Sci-Fi", "Horror"],
                cast: ["Millie Bobby Brown"]
            }
        };
        
        // Mock content data (in a real app, this would come from a database)
        this.contentData = {
            1: { title: "Inception", genres: ["Action", "Sci-Fi", "Adventure"], cast: ["Leonardo DiCaprio"] },
            2: { title: "The Dark Knight", genres: ["Action", "Crime", "Drama"], cast: ["Christian Bale"] },
            3: { title: "Stranger Things", genres: ["Sci-Fi", "Horror", "Drama"], cast: ["Millie Bobby Brown"] },
            4: { title: "Demon Slayer", genres: ["Animation", "Action", "Adventure"], cast: ["Natsuki Hanae"] },
            5: { title: "Interstellar", genres: ["Adventure", "Drama", "Sci-Fi"], cast: ["Matthew McConaughey"] },
            6: { title: "The Matrix", genres: ["Action", "Sci-Fi"], cast: ["Keanu Reeves"] }
        };
    }
    
    // Get recommendations for a user
    getRecommendations(userId) {
        const user = this.userData[userId];
        if (!user) {
            return [];
        }
        
        // Calculate similarity scores for all content
        const scores = {};
        
        for (const contentId in this.contentData) {
            const content = this.contentData[contentId];
            const contentIdNum = parseInt(contentId);
            
            // Skip content the user has already watched
            if (user.watched.includes(contentIdNum)) {
                continue;
            }
            
            // Calculate genre similarity
            let genreScore = 0;
            for (const genre of content.genres) {
                if (user.genres.includes(genre)) {
                    genreScore += 1;
                }
            }
            
            // Calculate cast similarity
            let castScore = 0;
            for (const actor of content.cast) {
                if (user.cast.includes(actor)) {
                    castScore += 1;
                }
            }
            
            // Calculate weighted score
            const totalScore = (genreScore * 2) + (castScore * 3);
            scores[contentIdNum] = totalScore;
        }
        
        // Sort by score and return top recommendations
        const sortedScores = Object.entries(scores)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
        
        // Return recommended content with details
        const recommendations = sortedScores.map(([id, score]) => ({
            id: parseInt(id),
            ...this.contentData[id],
            score
        }));
        
        return recommendations;
    }
    
    // Get "Because You Watched" recommendations
    getBecauseYouWatched(userId, titleId) {
        const user = this.userData[userId];
        if (!user) {
            return [];
        }
        
        const watchedTitle = this.contentData[titleId];
        if (!watchedTitle) {
            return [];
        }
        
        // Find similar content based on the watched title
        const recommendations = [];
        
        for (const contentId in this.contentData) {
            const content = this.contentData[contentId];
            const contentIdNum = parseInt(contentId);
            
            // Skip the watched title itself and content the user has already watched
            if (contentIdNum === titleId || user.watched.includes(contentIdNum)) {
                continue;
            }
            
            // Calculate similarity
            let similarity = 0;
            
            // Genre similarity
            for (const genre of content.genres) {
                if (watchedTitle.genres.includes(genre)) {
                    similarity += 1;
                }
            }
            
            // Cast similarity
            for (const actor of content.cast) {
                if (watchedTitle.cast.includes(actor)) {
                    similarity += 2;
                }
            }
            
            if (similarity > 0) {
                recommendations.push({
                    id: contentIdNum,
                    ...content,
                    similarity
                });
            }
        }
        
        // Sort by similarity and return top recommendations
        return recommendations
            .sort((a, b) => b.similarity - a.similarity)
            .slice(0, 5);
    }
}

// Export singleton instance
module.exports = new RecommendationEngine();