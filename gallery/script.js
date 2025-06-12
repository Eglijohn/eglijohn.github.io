document.addEventListener('mousemove', function(e) {
    const dot = document.getElementById('cursor-dot');
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
});