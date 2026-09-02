export function initCursorTracker() {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);

    const remToPx = (rem) => rem * parseFloat(getComputedStyle(document.documentElement).fontSize);

    const offset = remToPx(2);
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX - offset;
        mouseY = e.clientY - offset;
    });

    function animate() {
        
        dotX += (mouseX - dotX) * 0.1;
        dotY += (mouseY - dotY) * 0.1;

        dot.style.transform = `translate(${dotX}px, ${dotY}px)`;

        requestAnimationFrame(animate);
    }

    animate();
}