const express = require('express');
const router = express.Router();

// Mock comments data (in a real app, this would be in a database)
const comments = {
    1: [ // Comments for Inception
        {
            id: 1,
            userId: 2,
            username: "MovieFan123",
            rating: 9.5,
            text: "Mind-blowing concept and execution! Nolan at his finest. The visuals are stunning and the story keeps you engaged throughout.",
            likes: 24,
            dislikes: 2,
            timestamp: "2023-05-15T10:30:00Z",
            replies: [
                {
                    id: 101,
                    userId: 3,
                    username: "FilmCritic99",
                    text: "Completely agree! The practical effects are incredible.",
                    likes: 8,
                    dislikes: 0,
                    timestamp: "2023-05-16T14:20:00Z"
                }
            ]
        },
        {
            id: 2,
            userId: 4,
            username: "CinemaLover",
            rating: 8.0,
            text: "Great movie but a bit confusing at times. Worth watching with subtitles though!",
            likes: 12,
            dislikes: 3,
            timestamp: "2023-05-10T09:15:00Z",
            replies: []
        }
    ],
    2: [ // Comments for The Dark Knight
        {
            id: 3,
            userId: 5,
            username: "BatmanFan",
            rating: 10,
            text: "Heath Ledger's performance as the Joker is legendary. This is a masterpiece of cinema.",
            likes: 42,
            dislikes: 1,
            timestamp: "2023-05-12T16:45:00Z",
            replies: []
        }
    ]
};

// Get comments for a title
router.get('/:titleId', (req, res) => {
    try {
        const { titleId } = req.params;
        const id = parseInt(titleId);
        
        // Check if comments exist for this title
        if (!comments[id]) {
            return res.json({ comments: [] });
        }
        
        res.json({ comments: comments[id] });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Add a new comment
router.post('/:titleId', (req, res) => {
    try {
        const { titleId } = req.params;
        const { userId, username, rating, text } = req.body;
        const id = parseInt(titleId);
        
        // Validate input
        if (!userId || !username || !text) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        
        // Create new comment
        const newComment = {
            id: Date.now(), // Simple ID generation
            userId,
            username,
            rating: rating || 0,
            text,
            likes: 0,
            dislikes: 0,
            timestamp: new Date().toISOString(),
            replies: []
        };
        
        // Add to comments
        if (!comments[id]) {
            comments[id] = [];
        }
        
        comments[id].push(newComment);
        
        res.status(201).json({ 
            message: 'Comment added successfully', 
            comment: newComment 
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Add a reply to a comment
router.post('/:titleId/:commentId/reply', (req, res) => {
    try {
        const { titleId, commentId } = req.params;
        const { userId, username, text } = req.body;
        const titleIdNum = parseInt(titleId);
        const commentIdNum = parseInt(commentId);
        
        // Validate input
        if (!userId || !username || !text) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        
        // Find the comment
        if (!comments[titleIdNum]) {
            return res.status(404).json({ message: 'Title not found' });
        }
        
        const comment = comments[titleIdNum].find(c => c.id === commentIdNum);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        
        // Create new reply
        const newReply = {
            id: Date.now(), // Simple ID generation
            userId,
            username,
            text,
            likes: 0,
            dislikes: 0,
            timestamp: new Date().toISOString()
        };
        
        // Add to replies
        comment.replies.push(newReply);
        
        res.status(201).json({ 
            message: 'Reply added successfully', 
            reply: newReply 
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete a comment (admin only or user's own comment)
router.delete('/:commentId', (req, res) => {
    try {
        const { commentId } = req.params;
        const id = parseInt(commentId);
        
        // In a real app, this would require authentication
        // For now, we'll just simulate deleting a comment
        let deleted = false;
        
        for (const titleId in comments) {
            const titleComments = comments[titleId];
            const commentIndex = titleComments.findIndex(c => c.id === id);
            
            if (commentIndex !== -1) {
                titleComments.splice(commentIndex, 1);
                deleted = true;
                break;
            }
        }
        
        if (!deleted) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        
        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;