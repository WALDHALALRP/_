const starsContainer = document.getElementById('stars-container');
for (let i = 0; i < 100; i++) { // يمكنك تغيير العدد هنا
    const star = document.createElement('div');
    star.className = 'stars';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    starsContainer.appendChild(star);
}
