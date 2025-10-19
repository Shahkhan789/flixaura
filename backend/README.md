# Flix Aura Backend

This is the backend API for the Flix Aura streaming platform.

## Features

- User authentication (signup, login, profile management)
- Metadata fetching from TMDb API
- Streaming link management
- Comment and review system
- Admin panel endpoints
- Caching for performance optimization
- Recommendation engine
- Web scraping utilities

## Tech Stack

- Node.js
- Express.js
- Firebase (authentication and database)
- MongoDB (alternative database option)
- Redis (caching)
- TMDb API (metadata)
- Cheerio (web scraping)

## Project Structure

```
/backend
  server.js            # Main server file
  /routes
    auth.js            # Authentication routes
    metadata.js        # Metadata routes
    links.js           # Streaming links routes
    comments.js        # Comments routes
    admin.js           # Admin routes
  /models
    User.js            # User model
  /controllers
    AuthController.js  # Authentication controller
  /middleware
    auth.js            # Authentication middleware
  /config
    tmdb.config.js     # TMDb API configuration
    db.config.js       # Database configuration
  /utils
    cache.js           # Caching utility
    tmdb.js            # TMDb API utility
    scraper.js         # Web scraping utility
    recommendations.js # Recommendation engine
  /scripts
    firebase-init.js   # Firebase initialization
    test-tmdb.js       # TMDb API test script
    init-project.js    # Project initialization script
    run-tests.js       # Test runner script
  /tests
    User.test.js       # User model tests
    tmdb.test.js       # TMDb utility tests
    recommendations.test.js # Recommendation engine tests
  package.json         # Backend dependencies
  .env                 # Environment variables
  .env.example         # Example environment variables
```

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

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file with your configuration (see `.env.example`)

3. Start the server:
   ```
   npm start
   ```

4. For development:
   ```
   npm run dev
   ```

## Running Tests

To run all tests:
```
npm test
```

Or use the test runner script:
```
node scripts/run-tests.js
```

## Environment Variables

See `.env.example` file for all required environment variables.

## Utilities

### Caching
The caching utility uses Redis to cache API responses and improve performance.

### TMDb API
The TMDb utility provides a wrapper around the TMDb API with built-in caching.

### Web Scraper
The scraper utility handles scraping streaming links from external sources.

### Recommendation Engine
The recommendation engine provides personalized content recommendations based on user preferences.

## Security

- API keys are protected in environment variables
- User authentication with JWT tokens
- Role-based access control
- Input validation and sanitization
- HTTPS support

## Performance

- Caching for improved response times
- Connection pooling for databases
- Rate limiting on API endpoints
- Lazy loading for images

## Legal Note

This project is for educational purposes only. The use of streaming links from external sources may have copyright implications. In a production environment, only authorized sources should be used.

## License

This project is licensed under the MIT License.