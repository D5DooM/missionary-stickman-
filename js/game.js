const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game variables
let progress = 0;
let caught = false;
let timeLeft = 100;
let actionPerformed = false;

// Stickman and Stickwoman position
const stickmanX = WIDTH / 2 - 25;
const stickmanY = HEIGHT / 2;
const stickwomanX = stickmanX;
const stickwomanY = stickmanY + 10;

// Function to draw progress bar
function drawProgressBar(ctx, progress, timeLeft) {
    const barWidth = 200;
    const barHeight = 20;
    const x = 10;
    const y = 10;
    
    // Draw background
    ctx.fillStyle = '#333333'; // Dark gray
    ctx.fillRect(x, y, barWidth, barHeight);
    
    // Draw progress
    ctx.fillStyle = '#00FF00'; // Green
    ctx.fillRect(x, y, (progress / 100) * barWidth, barHeight);
    
    // Draw time left
    ctx.fillStyle = '#FF0000'; // Red
    ctx.fillRect(x + (progress / 100) * barWidth, y, barWidth - (progress / 100) * barWidth, barHeight);
    
    // Draw text
    ctx.fillStyle = '#FFFFFF'; // White
    ctx.font = '16px Arial';
    ctx.fillText(`${progress.toFixed(1)}%`, x + 5, y + 15);
    ctx.fillText(`${(100 - progress).toFixed(1)}%`, x + barWidth - 50, y + 15);
}

// Function to update the game
function update() {
    if (caught) return;
    
    // Update progress
    if (actionPerformed) {
        progress += 4 / FPS;
        timeLeft -= 1 / FPS;
    } else {
        progress -= 1 / FPS;
    }
    
    // Clamp values
    progress = Math.max(0, Math.min(100, progress));
    timeLeft = Math.max(0, Math.min(100, timeLeft));
    
    // Check for game over
    if (timeLeft === 0) {
        caught = true;
        alert('Game Over! You ran out of time.');
    }
    
    // Update camera
    updateCamera();
}

// Function to draw the game
function draw() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);
    drawStickman(ctx, stickmanX, stickmanY, actionPerformed);
    drawStickwoman(ctx, stickwomanX, stickwomanY, actionPerformed);
    drawProgressBar(ctx, progress, timeLeft);
    drawCamera(ctx);
}

// Main game loop
function gameLoop() {
    update();
    draw();
    if (!caught) {
        requestAnimationFrame(gameLoop);
    }
}

// Event listeners
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        actionPerformed = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.code === 'Space') {
        actionPerformed = false;
    }
});

// Start the game
gameLoop();
