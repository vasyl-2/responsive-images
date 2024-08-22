main();

function main() {
    window.addEventListener('resize', updateText);
}

function updateText() {
    const data = document.querySelector('#data');
    data.textContent = `Width: ${window.innerWidth}, Ratio: ${window.devicePixelRatio}`
}
