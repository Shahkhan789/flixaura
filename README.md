# Flix Aura

A movie/series/anime community & streaming aggregator website.

## Project Overview

Flix Aura is a modern streaming platform that aggregates metadata from TMDb and streaming links from various sources. The platform features a responsive design with both desktop and mobile interfaces, user authentication, content browsing, and an admin panel for content management.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: Firebase (with MongoDB as an alternative)
- **Caching**: Redis
- **APIs**: TMDb API for metadata
- **Authentication**: Firebase Auth

## Project Structure
```
/flix-aura
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
/backend
  server.js            # Main server file
  /routes
    auth.js            # Authentication routes
    metadata.js        # Metadata routes
    links.js           # Streaming links routes
    comments.js        # Comments routes
    admin.js           # Admin routes
  /models              # Database models
  /controllers         # Route controllers
  /config
    tmdb.config.js     # TMDb API configuration
    db.config.js       # Database configuration
  /scripts
    firebase-init.js   # Firebase initialization
    test-tmdb.js       # TMDb API test script
  package.json         # Backend dependencies
  .env                 # Environment variables
  README.md            # Backend documentation
```

## Features

### User Features
- **Browsing**: Homepage with hero banner, trending carousel, grid lists for movies, series, anime
- **Search/Filter**: Search by keyword/title, filters by genre, year, language, rating, type
- **Detail Page**: Poster, title, description, release year, genres, cast, user ratings, streaming links
- **Comments**: User reviews with threaded replies and like/dislike functionality
- **User Profile**: Watched list, To-Watch list, reviews, watch history, profile settings
- **Responsive UI**: Mobile-first design with bottom navigation bar
- **Dark Mode**: Theme toggle for light/dark mode
- **Social Sharing**: Share content on social media platforms

### Admin Features
- **Dashboard**: Statistics on users, content views, comments, device breakdown
- **User Management**: List users, ban/unban, edit roles, export user data
- **Content Management**: Override metadata, add/edit/remove streaming links
- **Comment Moderation**: View flagged comments, approve/delete, reply as admin
- **Link Health Monitoring**: Track broken links and re-check link health

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile/:userId` - Get user profile
- `PUT /api/auth/profile/:userId` - Update user profile

### Metadata
- `GET /api/metadata/:type/:id` - Get metadata for a specific title
- `GET /api/metadata/search/:query` - Search for titles
- `GET /api/metadata/trending/:type?` - Get trending titles

### Streaming Links
- `GET /api/links/:titleId` - Get streaming links for a title
- `POST /api/links/report/:linkId` - Report a broken link
- `POST /api/links/add` - Add a new link (admin only)
- `PUT /api/links/update/:linkId` - Update a link (admin only)

### Comments
- `GET /api/comments/:titleId` - Get comments for a title
- `POST /api/comments/:titleId` - Add a new comment
- `POST /api/comments/:titleId/:commentId/reply` - Add a reply to a comment
- `DELETE /api/comments/:commentId` - Delete a comment (admin/user)

### Admin
- `GET /api/admin/metrics` - Get admin metrics
- `GET /api/admin/users` - Get users list
- `PUT /api/admin/user/:userId/ban` - Ban/unban a user
- `PUT /api/admin/user/:userId/role` - Edit user role
- `GET /api/admin/users/export` - Export users list (CSV)

## Setup Instructions

1. **Frontend**: Open any HTML file directly in a browser or serve with a local server
2. **Backend**: 
   - Navigate to the `backend` directory
   - Install dependencies: `npm install`
   - Create a `.env` file with your configuration
   - Start the server: `npm start`

## Data Flow

1. **Metadata**: Fetch from TMDb API → Cache locally → Serve to frontend
2. **Streaming Links**: Scrape from moviebox.ph → Store in database → Merge with metadata
3. **User Activity**: Track watch history → Feed into recommendation engine
4. **Recommendations**: Analyze user preferences → Suggest relevant content

## Security & Performance

- API keys protected in backend environment variables
- User authentication with role-based access control
- Input validation and sanitization
- Caching for improved performance
- HTTPS support
- Rate limiting on API endpoints

## Legal Note

This project is for educational purposes only. The use of streaming links from external sources may have copyright implications. In a production environment, only authorized sources should be used.