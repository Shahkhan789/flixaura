# Flix Aura - Complete Project Documentation

## Project Overview

Flix Aura is a modern streaming platform that aggregates metadata from TMDb and streaming links from various sources. The platform features a responsive design with both desktop and mobile interfaces, user authentication, content browsing, and an admin panel for content management.

## Architecture

### Frontend
- **Technology**: HTML, CSS, JavaScript
- **Features**: Responsive design, dark mode, user authentication, content browsing
- **Pages**: Homepage, search, detail, profile, admin panel

### Backend
- **Technology**: Node.js, Express.js
- **Database**: Firebase (with MongoDB as an alternative)
- **Caching**: Redis
- **APIs**: TMDb API for metadata
- **Authentication**: Firebase Auth

### Data Flow
1. **Metadata**: TMDb API → Backend Cache → Frontend
2. **Streaming Links**: moviebox.ph → Web Scraper → Backend Database → Frontend
3. **User Activity**: Frontend → Backend → Recommendation Engine → Personalized Content
4. **Admin Functions**: Admin Panel → Backend API → Database

## File Structure

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
    README.md            # Frontend documentation
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
      api-demo.js        # API demonstration script
    /tests
      User.test.js       # User model tests
      tmdb.test.js       # TMDb utility tests
      recommendations.test.js # Recommendation engine tests
    package.json         # Backend dependencies
    .env                 # Environment variables
    .env.example         # Example environment variables
    README.md            # Backend documentation
  README.md              # Main project documentation
  PROJECT_DOCUMENTATION.md # Complete project documentation
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Redis server (for caching)
- MongoDB (optional, as an alternative to Firebase)

### Frontend Setup
1. No special setup required
2. Open any HTML file directly in a browser, or
3. Serve with a local server:
   ```
   npx serve
   ```

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file with your configuration (copy from `.env.example`):
   ```
   cp .env.example .env
   ```

4. Update the `.env` file with your actual configuration values

5. Start the server:
   ```
   npm start
   ```

6. For development with auto-restart:
   ```
   npm run dev
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

## Testing

### Running Tests
```
cd backend
npm test
```

### Test Coverage
- User model
- TMDb API utility
- Recommendation engine

## Deployment

### Backend Deployment
1. Set up a server (AWS, Google Cloud, Heroku, etc.)
2. Install Node.js and Redis
3. Clone the repository
4. Install dependencies
5. Configure environment variables
6. Start the server

### Frontend Deployment
1. Serve the frontend files with a web server
2. Ensure the frontend can access the backend API

## Security Considerations

### API Keys
- Never expose API keys in frontend code
- Store in environment variables on the backend
- Use read-only tokens where possible

### Authentication
- Use HTTPS in production
- Implement proper session management
- Hash passwords before storing
- Use JWT tokens for stateless authentication

### Input Validation
- Validate all user inputs
- Sanitize data before storing or displaying
- Implement rate limiting to prevent abuse

### Data Protection
- Encrypt sensitive data at rest
- Use parameterized queries to prevent SQL injection
- Implement proper access controls

## Performance Optimization

### Caching
- Use Redis for caching API responses
- Cache TMDb metadata for 24 hours
- Cache streaming links for 1 hour

### Database Optimization
- Index frequently queried fields
- Use connection pooling
- Optimize queries

### Frontend Optimization
- Lazy load images
- Minimize CSS and JavaScript
- Use efficient DOM manipulation

## Legal and Ethical Considerations

### Copyright
- This project is for educational purposes only
- The use of streaming links from external sources may have copyright implications
- In a production environment, only authorized sources should be used

### Terms of Service
- Respect the terms of service of all integrated APIs
- Comply with data protection regulations (GDPR, CCPA, etc.)
- Implement proper attribution for third-party content

## Future Enhancements

### Monetization
- Premium subscription tier
- Ad-free interface
- Higher quality streaming links

### Parental Controls
- Child profiles with restricted content
- PIN-protected genres/ratings

### Social Features
- "Watch Together" / Sync Play
- Voice search
- Autocomplete suggestions

### Mobile Features
- Native mobile app
- Push notifications
- Offline viewing

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## Support

For support, please open an issue on the GitHub repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- TMDb for providing the metadata API
- Font Awesome for icons
- All open-source libraries used in this project