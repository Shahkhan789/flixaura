// TMDb API Configuration
const TMDB_CONFIG = {
    // API Key (should be kept secret in environment variables in production)
    API_KEY: '77693385b1096f555bae38e33bafe4c4',
    
    // Read Access Token (should be kept secret in environment variables in production)
    READ_ACCESS_TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzY5MzM4NWIxMDk2ZjU1NWJhZTM4ZTMzYmFmZTRjNCIsIm5iZiI6MTc2MDg2MjAwOS4xNTM5OTk4LCJzdWIiOiI2OGY0OWYzOTQ0OGZmOTNhMTQ0ZTcwYWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JgV3J-g6c-ohBIhPtwH1TiTeMqmEY7oCWwhScOxWlFE',
    
    // Base URLs
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    
    // Image sizes
    IMAGE_SIZES: {
        backdrop: {
            small: 'w300',
            medium: 'w780',
            large: 'w1280',
            original: 'original'
        },
        poster: {
            small: 'w92',
            medium: 'w154',
            large: 'w185',
            xlarge: 'w342',
            xxlarge: 'w500',
            xxxlarge: 'w780',
            original: 'original'
        },
        profile: {
            small: 'w45',
            medium: 'w185',
            large: 'h632',
            original: 'original'
        }
    }
};

module.exports = TMDB_CONFIG;