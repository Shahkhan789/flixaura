# Flix Aura Frontend

This is the frontend for the Flix Aura streaming platform.

## Features

- Responsive design (mobile-first)
- Dark/light mode toggle
- User authentication
- Content browsing and search
- Detailed content pages
- User profiles and watch lists
- Admin panel
- Social sharing

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome (icons)

## Project Structure

```
/frontend
  index.html           # Homepage
  search.html          # Search page
  detail.html          # Content detail page
  profile.html         # User profile page
  admin.html           # Admin panel
  /css
    style.css          # Main styles
    detail.css         # Detail page styles
    search.css         # Search page styles
    profile.css        # Profile page styles
    admin.css          # Admin panel styles
  /js
    main.js            # Homepage functionality
    detail.js          # Detail page functionality
    search.js          # Search page functionality
    profile.js         # Profile page functionality
    admin.js           # Admin panel functionality
  /assets              # Images and other assets
```

## Pages

### Homepage (index.html)
- Hero banner with featured content
- Trending carousel
- Grid lists for movies, series, and anime
- "Because You Watched" recommendations
- Mobile navigation

### Search Page (search.html)
- Search bar with autocomplete
- Filter options (type, genre, year, rating)
- Sort options
- Search results grid
- Pagination

### Detail Page (detail.html)
- Content metadata (title, description, cast, etc.)
- Streaming links with quality/language filters
- User comments and reviews
- Rating system
- Social sharing buttons
- Watch list and mark watched buttons

### Profile Page (profile.html)
- User information
- Watched list
- To-watch list
- User reviews
- Profile settings

### Admin Panel (admin.html)
- Dashboard with metrics
- User management
- Content management
- Link management
- Comment moderation

## Responsive Design

The frontend is designed with a mobile-first approach:

- Desktop: Full featured experience with sidebar navigation
- Tablet: Adaptive layout with collapsible elements
- Mobile: Bottom navigation bar, touch-friendly controls

## Dark Mode

The platform supports both light and dark themes:

- Toggle button in the header
- Persists user preference in localStorage
- System-aware default (prefers dark mode)

## JavaScript Features

### Homepage
- Theme toggle
- Content grid population
- Carousel navigation

### Detail Page
- Star rating system
- Like/dislike functionality
- Report broken links
- Add to watch list
- Social sharing

### Search Page
- Search functionality
- Filter system
- Pagination

### Profile Page
- Tab navigation
- Profile editing
- Theme settings

### Admin Panel
- Tab navigation
- User management
- Content management

## Performance

- Lazy loading for images
- Efficient DOM manipulation
- Minimal external dependencies
- Optimized CSS with variables and mixins

## Accessibility

- Semantic HTML
- Proper contrast ratios
- Keyboard navigation
- Screen reader support

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid and Flexbox layouts

## Setup

To run the frontend:

1. Open any HTML file directly in a browser, or
2. Serve the frontend with a local server:
   ```
   npx serve
   ```

## Customization

### Colors
The color scheme is defined in CSS variables in `style.css`:
- Primary color: #e50914 (Netflix red)
- Background colors for dark/light modes
- Text colors for readability

### Typography
- System font stack for performance
- Responsive font sizes
- Proper line heights for readability

### Components
- Reusable CSS classes
- Consistent spacing system
- Modular design for maintainability

## Legal Note

This project is for educational purposes only. The use of streaming links from external sources may have copyright implications. In a production environment, only authorized sources should be used.

## License

This project is licensed under the MIT License.