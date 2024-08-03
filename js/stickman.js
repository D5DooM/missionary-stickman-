function drawStickman(ctx, x, y, thrusting) {
    ctx.strokeStyle = '#FFFFFF'; // White outline
    ctx.lineWidth = 5;
    ctx.fillStyle = '#8B4513'; // Light brown body

    const bodyWidth = 20;
    const bodyHeight = 60;
    const headRadius = 10;
    const legLength = 30;
    const armLength = 20;
    const thighGap = 10;
    const thrustOffset = thrusting ? 10 : 0;

    // Calculate body coordinates
    const bodyTopLeftX = x - bodyWidth / 2;
    const bodyTopLeftY = y - bodyHeight / 2;

    // Draw body
    ctx.beginPath();
    ctx.rect(bodyTopLeftX, bodyTopLeftY, bodyWidth, bodyHeight);
    ctx.fill();
    ctx.stroke();
    
    // Draw head
    ctx.beginPath();
    ctx.arc(x, bodyTopLeftY, headRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Draw arms
    ctx.beginPath();
    ctx.moveTo(x - armLength, bodyTopLeftY + bodyHeight / 3);
    ctx.lineTo(x + armLength, bodyTopLeftY + bodyHeight / 3);
    ctx.moveTo(x - armLength, bodyTopLeftY + bodyHeight / 3 * 2);
    ctx.lineTo(x + armLength, bodyTopLeftY + bodyHeight / 3 * 2);
    ctx.stroke();
    
    // Draw legs
    ctx.beginPath();
    ctx.moveTo(bodyTopLeftX, y + bodyHeight / 2);
    ctx.lineTo(bodyTopLeftX - thighGap, y + bodyHeight / 2 + legLength);
    ctx.moveTo(bodyTopLeftX + bodyWidth, y + bodyHeight / 2);
    ctx.lineTo(bodyTopLeftX + bodyWidth + thighGap, y + bodyHeight / 2 + legLength);
    ctx.stroke();
    
    // Draw penis (cylindrical rod)
    ctx.fillStyle = '#FFD700'; // Gold color
    const penisLength = 25;
    const penisThickness = 5;

    ctx.beginPath();
    ctx.moveTo(x - penisThickness / 2, y + bodyHeight / 2); // Starting point of penis
    ctx.lineTo(x - penisThickness / 2, y + bodyHeight / 2 + penisLength - thrustOffset); // Top of penis
    ctx.lineTo(x + penisThickness / 2, y + bodyHeight / 2 + penisLength - thrustOffset); // Top of penis
    ctx.lineTo(x + penisThickness / 2, y + bodyHeight / 2); // Tip of penis
    ctx.closePath();
    ctx.fill();
}
