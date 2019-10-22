draw(config.balls, config.lines);

// Draw lines and balls
function draw(coordinates, networks) {
	networks.forEach((network) => {
		let coord1 = coordinates[network.start],
			coord2 = coordinates[network.end];
		let elemLine = new Line(coord1.x, coord1.y, coord2.x, coord2.y, [network.start, network.end]);
		elemLine.draw();
		lines.push(elemLine);
	});
	for (let key in coordinates) {
		elemBall = new Ball(coordinates[key].x, coordinates[key].y, key),
		elemBall.draw();
		balls.push(elemBall);
	}
	networks.forEach((network) => {
		let currentBall = balls.find(ball => ball.number == network.start);
		let currentLine = lines.find(line => line.network.includes(network.start) &&
			line.network.includes(network.end));
		currentBall.networkLines.push(currentLine);
		currentBall.network = "start";
		currentBall = balls.find(ball => ball.number == network.end);
		currentBall.networkLines.push(currentLine);
		currentBall.network = "end";
	});
}
