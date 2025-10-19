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

// Sample search results data
const searchResults = [
    {
        id: 1,
        title: "Inception",
        poster: "https://image.tmdb.org/t/p/w500/edfe20zUWE51aHPAQXW1uWFd2Rs.jpg",
        rating: 8.4,
        type: "Movie",
        year: 2010
    },
    {
        id: 2,
        title: "The Dark Knight",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        rating: 9.0,
        type: "Movie",
        year: 2008
    },
    {
        id: 3,
        title: "Interstellar",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        rating: 8.6,
        type: "Movie",
        year: 2014
    },
    {
        id: 4,
        title: "Breaking Bad",
        poster: "https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
        rating: 9.2,
        type: "Series",
        year: 2008
    },
    {
        id: 5,
        title: "Stranger Things",
        poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
        rating: 8.7,
        type: "Series",
        year: 2016
    },
    {
        id: 6,
        title: "Demon Slayer",
        poster: "https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYK.jpg",
        rating: 8.7,
        type: "Anime",
        year: 2019
    },
    {
        id: 7,
        title: "Attack on Titan",
        poster: "https://image.tmdb.org/t/p/w500/sHn2G8XG0f1R9R3zN4RXB6UZ4v9.jpg",
        rating: 9.0,
        type: "Anime",
        year: 2013
    },
    {
        id: 8,
        title: "The Matrix",
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        rating: 8.7,
        type: "Movie",
        year: 1999
    }
];

// Function to create content item HTML
function createContentItem(item) {
    return `
        <div class="content-item">
            <img src="${item.poster}" alt="${item.title}">
            <div class="content-item-info">
                <h3>${item.title}</h3>
                <div class="meta">
                    <span class="type">${item.type}</span>
                    <span class="year">${item.year}</span>
                </div>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <span>${item.rating}</span>
                </div>
            </div>
        </div>
    `;
}

// Populate search results
function populateSearchResults() {
    const resultsGrid = document.querySelector('.content-grid');
    
    // Clear existing content
    resultsGrid.innerHTML = '';
    
    // Populate with sample data
    searchResults.forEach(item => {
        resultsGrid.innerHTML += createContentItem(item);
    });
}

// Filter button functionality
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // In a real implementation, this would filter the results
            console.log(`Filter selected: ${button.textContent}`);
        });
    });
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    // Search on button click
    searchBtn.addEventListener('click', performSearch);
    
    // Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            // In a real implementation, this would call the backend API
            console.log(`Searching for: ${query}`);
            alert(`Searching for: ${query}\nIn a real implementation, this would fetch results from the backend.`);
        }
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateSearchResults();
    setupFilterButtons();
    setupSearch();
    
    // Add click event to content items
    document.addEventListener('click', (e) => {
        if (e.target.closest('.content-item')) {
            const item = e.target.closest('.content-item');
            const title = item.querySelector('h3').textContent;
            alert(`You clicked on: ${title}\nIn a real implementation, this would take you to the detail page.`);
        }
    });
});