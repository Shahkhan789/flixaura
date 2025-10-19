// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);

// Update theme toggle button icon
if (currentTheme === 'dark') {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
} else {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle theme function
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update button icon
    if (newTheme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// Sample data for content grids
const movies = [
    {
        id: 1,
        title: "Inception",
        poster: "https://image.tmdb.org/t/p/w500/edfe20zUWE51aHPAQXW1uWFd2Rs.jpg",
        rating: 8.4
    },
    {
        id: 2,
        title: "The Dark Knight",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        rating: 9.0
    },
    {
        id: 3,
        title: "Interstellar",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        rating: 8.6
    },
    {
        id: 4,
        title: "Pulp Fiction",
        poster: "https://image.tmdb.org/t/p/w500/fIE3lAGcZDVHJjUd7iBUaP57CT3.jpg",
        rating: 8.9
    },
    {
        id: 5,
        title: "The Matrix",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        rating: 8.7
    },
    {
        id: 6,
        title: "Parasite",
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        rating: 8.6
    }
];

const series = [
    {
        id: 1,
        title: "Breaking Bad",
        poster: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
        rating: 9.2
    },
    {
        id: 2,
        title: "Stranger Things",
        poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        rating: 8.7
    },
    {
        id: 3,
        title: "Game of Thrones",
        poster: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
        rating: 8.4
    },
    {
        id: 4,
        title: "The Witcher",
        poster: "https://image.tmdb.org/t/p/w500/zrPpUezF6EHtfAvcAfz7Cb6SbwB.jpg",
        rating: 8.0
    },
    {
        id: 5,
        title: "The Mandalorian",
        poster: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
        rating: 8.4
    },
    {
        id: 6,
        title: "Money Heist",
        poster: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
        rating: 8.3
    }
];

const anime = [
    {
        id: 1,
        title: "Demon Slayer",
        poster: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYK.jpg",
        rating: 8.7
    },
    {
        id: 2,
        title: "Attack on Titan",
        poster: "https://image.tmdb.org/t/p/w500/sHn2G8XG0f1R9R3zN4RXB6UZ4v9.jpg",
        rating: 9.0
    },
    {
        id: 3,
        title: "My Hero Academia",
        poster: "https://image.tmdb.org/t/p/w500/vMC92RJI5LH5BX6j1iQvvWo3VDS.jpg",
        rating: 8.5
    },
    {
        id: 4,
        title: "One Piece",
        poster: "https://image.tmdb.org/t/p/w500/bQXAqRx2Fgc46uJbnUEBZcXAR3n.jpg",
        rating: 8.8
    },
    {
        id: 5,
        title: "Death Note",
        poster: "https://image.tmdb.org/t/p/w500/nDlpa7DvzUe3E7iaK61K0nFUk6u.jpg",
        rating: 9.0
    },
    {
        id: 6,
        title: "Fullmetal Alchemist",
        poster: "https://image.tmdb.org/t/p/w500/9PaAn7vxX6pPZvqaCVB6zr3uKpD.jpg",
        rating: 9.1
    }
];

const recommendations = [
    {
        id: 1,
        title: "Tenet",
        poster: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
        rating: 7.4
    },
    {
        id: 2,
        title: "Dunkirk",
        poster: "https://image.tmdb.org/t/p/w500/cU7ItHEtH92YFSLv25DT4y5gt2o.jpg",
        rating: 7.9
    },
    {
        id: 3,
        title: "The Prestige",
        poster: "https://image.tmdb.org/t/p/w500/5MXyQfz8xUP3dIFPTubhTsbFY6N.jpg",
        rating: 8.5
    },
    {
        id: 4,
        title: "Batman Begins",
        poster: "https://image.tmdb.org/t/p/w500/1P3ZyEq02wcTMd3iE4ebB6EZJtB.jpg",
        rating: 8.2
    },
    {
        id: 5,
        title: "The Avengers",
        poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
        rating: 7.7
    },
    {
        id: 6,
        title: "Avengers: Endgame",
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        rating: 8.4
    }
];

// Function to create content item HTML
function createContentItem(item) {
    return `
        <div class="content-item">
            <img src="${item.poster}" alt="${item.title}">
            <div class="content-item-info">
                <h3>${item.title}</h3>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>${item.rating}</span>
                </div>
            </div>
        </div>
    `;
}

// Populate content grids
function populateContentGrids() {
    const movieGrid = document.querySelectorAll('.content-section')[0].querySelector('.content-grid');
    const seriesGrid = document.querySelectorAll('.content-section')[1].querySelector('.content-grid');
    const animeGrid = document.querySelectorAll('.content-section')[2].querySelector('.content-grid');
    const recommendationGrid = document.querySelectorAll('.content-section')[3].querySelector('.content-grid');
    
    // Populate movies grid
    movieGrid.innerHTML = '';
    movies.forEach(movie => {
        movieGrid.innerHTML += createContentItem(movie);
    });
    
    // Populate series grid
    seriesGrid.innerHTML = '';
    series.forEach(serie => {
        seriesGrid.innerHTML += createContentItem(serie);
    });
    
    // Populate anime grid
    animeGrid.innerHTML = '';
    anime.forEach(animeItem => {
        animeGrid.innerHTML += createContentItem(animeItem);
    });
    
    // Populate recommendations grid
    recommendationGrid.innerHTML = '';
    recommendations.forEach(rec => {
        recommendationGrid.innerHTML += createContentItem(rec);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateContentGrids();
    
    // Add click event to content items
    document.addEventListener('click', (e) => {
        if (e.target.closest('.content-item')) {
            const item = e.target.closest('.content-item');
            const title = item.querySelector('h3').textContent;
            alert(`You clicked on: ${title}\nIn a real implementation, this would take you to the detail page.`);
        }
    });
});