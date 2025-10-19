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
    
    // Update dark mode checkbox in settings
    const darkModeCheckbox = document.getElementById('dark-mode');
    if (darkModeCheckbox) {
        darkModeCheckbox.checked = (newTheme === 'dark');
    }
});

// Tab navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            button.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Dark mode toggle in settings
    const darkModeCheckbox = document.getElementById('dark-mode');
    if (darkModeCheckbox) {
        darkModeCheckbox.addEventListener('change', (e) => {
            const newTheme = e.target.checked ? 'dark' : 'light';
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update theme toggle button icon
            if (newTheme === 'dark') {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        });
    }
    
    // Save settings functionality
    const saveButton = document.querySelector('.form-actions .btn-primary');
    if (saveButton) {
        saveButton.addEventListener('click', () => {
            // In a real implementation, this would save to the backend
            alert('Settings saved successfully!');
        });
    }
    
    // Add click event to content items
    document.addEventListener('click', (e) => {
        if (e.target.closest('.content-item')) {
            const item = e.target.closest('.content-item');
            const title = item.querySelector('h3').textContent;
            alert(`You clicked on: ${title}\nIn a real implementation, this would take you to the detail page.`);
        }
    });
});