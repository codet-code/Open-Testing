const btn = document.getElementById('fullscreen-btn');
const container = document.getElementById('my-container');

btn.addEventListener('click', async () => {
    try {
        if (!document.fullscreenElement) {
            await container.requestFullscreen();
        } else {
            await document.exitFullscreen();
        }
    } catch (err) {
        alert(`Fullscreen error: ${err.message}`);
    }
});