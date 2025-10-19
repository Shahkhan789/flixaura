const express = require('express');
const router = express.Router();

// Mock streaming links (in a real app, these would be fetched from moviebox.ph)
const streamingLinks = {
    1: [ // Inception
        {
            id: 1,
            quality: "HD 1080p",
            source: "MovieBox",
            language: "English",
            subtitles: ["EN", "ES"],
            url: "https://moviebox.ph/watch/inception-1080p",
            status: "Working"
        },
        {
            id: 2,
            quality: "HD 720p",
            source: "StreamFlix",
            language: "English",
            subtitles: ["EN"],
            url: "https://streamflix.com/watch/inception-720p",
            status: "Working"
        },
        {
            id: 3,
            quality: "SD 480p",
            source: "VidCloud",
            language: "Spanish",
            subtitles: ["ES"],
            url: "https://vidcloud.com/watch/inception-480p",
            status: "Low quality"
        }
    ],
    2: [ // The Dark Knight
        {
            id: 4,
            quality: "HD 1080p",
            source: "MovieBox",
            language: "English",
            subtitles: ["EN", "FR"],
            url: "https://moviebox.ph/watch/dark-knight-1080p",
            status: "Working"
        },
        {
            id: 5,
            quality: "HD 720p",
            source: "StreamFlix",
            language: "English",
            subtitles: ["EN"],
            url: "https://streamflix.com/watch/dark-knight-720p",
            status: "Working"
        }
    ]
};

// Get streaming links for a title
router.get('/:titleId', (req, res) => {
    try {
        const { titleId } = req.params;
        const id = parseInt(titleId);
        
        // Check if links exist for this title
        if (!streamingLinks[id]) {
            return res.status(404).json({ message: 'No links found for this title' });
        }
        
        // Filter out dead links
        const workingLinks = streamingLinks[id].filter(link => link.status !== "Dead");
        
        res.json({ links: workingLinks });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Report a broken link
router.post('/report/:linkId', (req, res) => {
    try {
        const { linkId } = req.params;
        const id = parseInt(linkId);
        
        // In a real app, this would update the link status in the database
        // For now, we'll just simulate the report
        console.log(`Link ${id} reported as broken`);
        
        res.json({ message: 'Link reported successfully. Thank you for your feedback.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Add a new link (admin only)
router.post('/add', (req, res) => {
    try {
        const { titleId, link } = req.body;
        
        // In a real app, this would require authentication and admin privileges
        // For now, we'll just simulate adding a link
        if (!streamingLinks[titleId]) {
            streamingLinks[titleId] = [];
        }
        
        const newLink = {
            id: Date.now(), // Simple ID generation
            ...link
        };
        
        streamingLinks[titleId].push(newLink);
        
        res.status(201).json({ 
            message: 'Link added successfully', 
            link: newLink 
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Update a link (admin only)
router.put('/update/:linkId', (req, res) => {
    try {
        const { linkId } = req.params;
        const id = parseInt(linkId);
        const updatedLink = req.body;
        
        // In a real app, this would require authentication and admin privileges
        // For now, we'll just simulate updating a link
        let found = false;
        
        for (const titleId in streamingLinks) {
            const links = streamingLinks[titleId];
            const linkIndex = links.findIndex(link => link.id === id);
            
            if (linkIndex !== -1) {
                links[linkIndex] = { ...links[linkIndex], ...updatedLink };
                found = true;
                break;
            }
        }
        
        if (!found) {
            return res.status(404).json({ message: 'Link not found' });
        }
        
        res.json({ message: 'Link updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;