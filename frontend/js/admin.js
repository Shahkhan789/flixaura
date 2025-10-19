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

// Tab navigation functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.admin-nav a');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = link.getAttribute('data-tab');
            
            // Remove active class from all links and tabs
            tabLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked link and corresponding tab
            link.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // User action buttons
    document.addEventListener('click', (e) => {
        if (e.target.closest('.fa-ban')) {
            if (confirm('Are you sure you want to ban this user?')) {
                const row = e.target.closest('tr');
                const statusCell = row.querySelector('.status');
                statusCell.textContent = 'Banned';
                statusCell.className = 'status banned';
                e.target.closest('.action-btn').innerHTML = '<i class="fas fa-check"></i>';
                alert('User banned successfully!');
            }
        }
        
        if (e.target.closest('.fa-check')) {
            if (confirm('Are you sure you want to unban this user?')) {
                const row = e.target.closest('tr');
                const statusCell = row.querySelector('.status');
                statusCell.textContent = 'Active';
                statusCell.className = 'status active';
                e.target.closest('.action-btn').innerHTML = '<i class="fas fa-ban"></i>';
                alert('User unbanned successfully!');
            }
        }
        
        if (e.target.closest('.fa-trash')) {
            if (confirm('Are you sure you want to delete this title?')) {
                e.target.closest('tr').remove();
                alert('Title deleted successfully!');
            }
        }
    });
    
    // Export CSV functionality
    const exportButton = document.querySelector('.btn-secondary .fa-download');
    if (exportButton) {
        exportButton.closest('.btn').addEventListener('click', () => {
            alert('User data exported to CSV successfully!');
        });
    }
    
    // Add title functionality
    const addButton = document.querySelector('.btn-primary .fa-plus');
    if (addButton) {
        addButton.closest('.btn').addEventListener('click', () => {
            alert('Add title form would open here.');
        });
    }
});