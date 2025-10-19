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

// Star rating functionality
document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.stars i');
    
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            // Reset all stars
            stars.forEach(s => s.classList.remove('fas'));
            stars.forEach(s => s.classList.add('far'));
            
            // Fill stars up to clicked one
            for (let i = 0; i <= index; i++) {
                stars[i].classList.remove('far');
                stars[i].classList.add('fas');
            }
        });
    });
    
    // Like/Dislike functionality for comments
    document.addEventListener('click', (e) => {
        if (e.target.closest('.action-btn')) {
            const button = e.target.closest('.action-btn');
            
            if (button.querySelector('.fa-thumbs-up')) {
                const countElement = button.querySelector('span') || button.nextSibling;
                let count = parseInt(countElement.textContent) || 0;
                
                // Toggle like state
                if (button.classList.contains('liked')) {
                    button.classList.remove('liked');
                    count--;
                } else {
                    button.classList.add('liked');
                    count++;
                }
                
                if (countElement) {
                    countElement.textContent = count;
                }
            }
        }
        
        // Report broken link functionality
        if (e.target.closest('.fa-flag')) {
            const flagButton = e.target.closest('.btn-secondary');
            if (confirm('Report this link as broken?')) {
                flagButton.innerHTML = '<i class="fas fa-check"></i>';
                flagButton.classList.add('btn-success');
                setTimeout(() => {
                    alert('Thank you for reporting. Our team will review this link.');
                }, 300);
            }
        }
    });
    
    // Add to watch list functionality
    const addToWatchButton = document.querySelector('.btn-secondary .fa-plus').closest('.btn');
    if (addToWatchButton) {
        addToWatchButton.addEventListener('click', () => {
            const icon = addToWatchButton.querySelector('i');
            if (icon.classList.contains('fa-plus')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-check');
                addToWatchButton.innerHTML = '<i class="fas fa-check"></i> Added to List';
                setTimeout(() => {
                    alert('Added to your watch list!');
                }, 300);
            } else {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-plus');
                addToWatchButton.innerHTML = '<i class="fas fa-plus"></i> Add to List';
                setTimeout(() => {
                    alert('Removed from your watch list!');
                }, 300);
            }
        });
    }
    
    // Mark as watched functionality
    const markWatchedButton = document.querySelector('.btn-secondary .fa-check').closest('.btn');
    if (markWatchedButton) {
        markWatchedButton.addEventListener('click', () => {
            const icon = markWatchedButton.querySelector('i');
            if (icon.classList.contains('fa-check')) {
                icon.classList.remove('fa-check');
                icon.classList.add('fa-eye');
                markWatchedButton.innerHTML = '<i class="fas fa-eye"></i> Watched';
                markWatchedButton.classList.add('btn-success');
                setTimeout(() => {
                    alert('Marked as watched!');
                }, 300);
            } else {
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-check');
                markWatchedButton.innerHTML = '<i class="fas fa-check"></i> Mark Watched';
                markWatchedButton.classList.remove('btn-success');
                setTimeout(() => {
                    alert('Unmarked as watched!');
                }, 300);
            }
        });
    }
    
    // Share functionality
    const shareButton = document.querySelector('.btn-secondary .fa-share-alt').closest('.btn');
    if (shareButton) {
        shareButton.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: 'Inception (2010) - Flix Aura',
                    text: 'Check out this amazing movie on Flix Aura!',
                    url: window.location.href
                }).catch(console.error);
            } else {
                // Fallback for browsers that don't support Web Share API
                alert('Copy this link to share: ' + window.location.href);
            }
        });
    }
});