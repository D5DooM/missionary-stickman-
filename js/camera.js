let cameraAngle = 0;
let cameraMonitoring = false;
let cameraWarningTime = 0;
let cameraCheckInterval = random(1000, 9000); // Initial random interval

const CAMERA_VIEW_ANGLE = 15; // Viewing angle in degrees
const CAMERA_WARNING_TIME = 2000; // Warning time in milliseconds

function updateCamera() {
    if (cameraMonitoring) {
        cameraWarningTime -= 1000 / FPS;
        if (cameraWarningTime <= 0) {
            cameraMonitoring = false;
            cameraCheckInterval = random(5000, 10000); // Random interval for next check
        }
    } else {
        cameraCheckInterval -= 1000 / FPS;
        if (cameraCheckInterval <= 0) {
            cameraMonitoring = true;
            cameraWarningTime = CAMERA_WARNING_TIME; // Set warning time
        }
    }
}

function drawCamera(ctx) {
    ctx.save();
    ctx.translate(WIDTH - 50, 50);
    ctx.rotate(cameraAngle * Math.PI / 180);
    
    // Draw camera view
    ctx.strokeStyle = '#FF0000'; // Red outline
    ctx.fillStyle = 'rgba(255, 0, 0, 0.2)'; // Transparent red tint

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(WIDTH / 2, -WIDTH * Math.tan(CAMERA_VIEW_ANGLE * Math.PI / 180)); // Left side
    ctx.lineTo(WIDTH / 2, WIDTH * Math.tan(CAMERA_VIEW_ANGLE * Math.PI / 180)); // Right side
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore();
}
