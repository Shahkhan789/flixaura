// User Model
class User {
    constructor(id, username, email, password, role = 'user', createdAt = new Date()) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password; // Should be hashed in real implementation
        this.role = role;
        this.createdAt = createdAt;
        this.watchedList = [];
        this.toWatchList = [];
        this.reviews = [];
    }
    
    // Add title to watched list
    addToWatched(titleId) {
        if (!this.watchedList.includes(titleId)) {
            this.watchedList.push(titleId);
            return true;
        }
        return false;
    }
    
    // Add title to to-watch list
    addToToWatch(titleId) {
        if (!this.toWatchList.includes(titleId)) {
            this.toWatchList.push(titleId);
            return true;
        }
        return false;
    }
    
    // Add review
    addReview(review) {
        this.reviews.push(review);
    }
    
    // Get user data without password
    toJSON() {
        const { password, ...userData } = this;
        return userData;
    }
}

module.exports = User;