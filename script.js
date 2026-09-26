const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-text');
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeLabel.textContent = 'LIGHT';
}

themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');

    themeLabel.textContent = isDarkMode ? 'LIGHT' : 'DARK';
    localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
});