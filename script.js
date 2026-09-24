const themeToggleBtn = document.getElementById('theme-toggle');
        const themeText = document.getElementById('theme-text');
        
        // 1. Check for saved user preference on load
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            themeText.textContent = 'LIGHT';
        }
    
        // 2. Listen for clicks
        themeToggleBtn.addEventListener('click', () => {
            // Toggle the class
            document.body.classList.toggle('dark-mode');
            
            // Update text and save to localStorage
            if (document.body.classList.contains('dark-mode')) {
                themeText.textContent = 'LIGHT';
                localStorage.setItem('portfolio-theme', 'dark');
            } else {
                themeText.textContent = 'DARK';
                localStorage.setItem('portfolio-theme', 'light');
            }
        });