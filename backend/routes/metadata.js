const express = require('express');
const router = express.Router();

// Mock metadata (in a real app, this would come from TMDb API)
const metadata = {
    movies: [
        {
            id: 1,
            title: "Inception",
            type: "movie",
            release_date: "2010-07-16",
            duration: 148,
            genres: ["Action", "Sci-Fi", "Adventure"],
            overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
            poster_path: "/edfe20zUWE51aHPAQXW1uWFd2Rs.jpg",
            rating: 8.4,
            cast: [
                { name: "Leonardo DiCaprio", character: "Cobb" },
                { name: "Marion Cotillard", character: "Mal" },
                { name: "Tom Hardy", character: "Eames" }
            ]
        },
        {
            id: 2,
            title: "The Dark Knight",
            type: "movie",
            release_date: "2008-07-18",
            duration: 152,
            genres: ["Action", "Crime", "Drama"],
            overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
            poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            rating: 9.0,
            cast: [
                { name: "Christian Bale", character: "Bruce Wayne" },
                { name: "Heath Ledger", character: "Joker" },
                { name: "Aaron Eckhart", character: "Harvey Dent" }
            ]
        }
    ],
    series: [
        {
            id: 1,
            title: "Stranger Things",
            type: "series",
            release_date: "2016-07-15",
            genres: ["Sci-Fi", "Horror", "Drama"],
            overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
            poster_path: "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
            rating: 8.7,
            cast: [
                { name: "Millie Bobby Brown", character: "Eleven" },
                { name: "Finn Wolfhard", character: "Mike Wheeler" },
                { name: "Winona Ryder", character: "Joyce Byers" }
            ]
        }
    ],
    anime: [
        {
            id: 1,
            title: "Demon Slayer",
            type: "anime",
            release_date: "2019-04-06",
            genres: ["Animation", "Action", "Adventure"],
            overview: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself.",
            poster_path: "/xUfRZu2mi8jH6SzQEJGP6tjBuYK.jpg",
            rating: 8.7,
            cast: [
                { name: "Natsuki Hanae", character: "Tanjiro Kamado" },
                { name: "Akari Kito", character: "Nezuko Kamado" },
                { name: "Hiro Shimono", character: "Zenitsu Agatsuma" }
            ]
        }
    ]
};

// Get metadata for a specific title
router.get('/:type/:id', (req, res) => {
    try {
        const { type, id } = req.params;
        const typeId = parseInt(id);
        
        // Validate type
        if (!['movie', 'series', 'anime'].includes(type)) {
            return res.status(400).json({ message: 'Invalid type' });
        }
        
        // Find the title
        const title = metadata[`${type}s`].find(item => item.id === typeId);
        
        if (!title) {
            return res.status(404).json({ message: 'Title not found' });
        }
        
        res.json({ title });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Search metadata
router.get('/search/:query', (req, res) => {
    try {
        const { query } = req.params;
        const { type } = req.query;
        
        let results = [];
        
        // Search in all types or specific type
        if (!type || type === 'movie') {
            results = results.concat(metadata.movies.filter(movie => 
                movie.title.toLowerCase().includes(query.toLowerCase())
            ));
        }
        
        if (!type || type === 'series') {
            results = results.concat(metadata.series.filter(series => 
                series.title.toLowerCase().includes(query.toLowerCase())
            ));
        }
        
        if (!type || type === 'anime') {
            results = results.concat(metadata.anime.filter(anime => 
                anime.title.toLowerCase().includes(query.toLowerCase())
            ));
        }
        
        res.json({ results });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get trending titles
router.get('/trending/:type?', (req, res) => {
    try {
        const { type } = req.params;
        
        if (type) {
            // Validate type
            if (!['movie', 'series', 'anime'].includes(type)) {
                return res.status(400).json({ message: 'Invalid type' });
            }
            
            // Return trending for specific type
            const titles = metadata[`${type}s`].sort((a, b) => b.rating - a.rating).slice(0, 10);
            res.json({ titles });
        } else {
            // Return trending across all types
            const allTitles = [...metadata.movies, ...metadata.series, ...metadata.anime];
            const titles = allTitles.sort((a, b) => b.rating - a.rating).slice(0, 10);
            res.json({ titles });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;