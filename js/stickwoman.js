function drawStickwoman(ctx, x, y, thrusting) {
    ctx.strokeStyle = '#FFFFFF'; // White outline
    ctx.lineWidth = 5;
    ctx.fillStyle = '#FFFDD0'; // Cream body

    const thrustOffset = thrusting ? 5 : 0;
    const shakeOffset = thrusting ? Math.random() * 4 - 2 : 0;

    // Draw body
    ctx.beginPath();
    ctx.moveTo(x, y + 10 + shakeOffset);
    ctx.lineTo(x + 50, y + 10 + shakeOffset);
    ctx.stroke();
    
    // Draw head
    ctx.beginPath();
    ctx.arc(x - 10, y + shakeOffset, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Draw arms
    ctx.beginPath();
    ctx.moveTo(x + 10, y + 10 + shakeOffset);
    ctx.lineTo(x + 20, y - 10 + shakeOffset);
    ctx.moveTo(x + 10, y + 10 + shakeOffset);
    ctx.lineTo(x + 20, y + 30 + shakeOffset);
    ctx.stroke();
    
    // Draw legs
    ctx.beginPath();
    ctx.moveTo(x + 50, y + 10 + shakeOffset);
    ctx.lineTo(x + 70, y - 10 + shakeOffset);
    ctx.moveTo(x + 50, y + 10 + shakeOffset);
    ctx.lineTo(x + 70, y + 30 + shakeOffset);
    ctx.stroke();
}
