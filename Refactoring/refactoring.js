// code block #1

function findSymbols(string, symbol1, symbol2) {

	if (string.length == 0) return -1;

	let symbol1Index = string.lastIndexOf(symbol1),
		symbol2Index = string.lastIndexOf(symbol2);

	if (symbol1Index == -1 && symbol2Index == -1)	return -1;
	else return Math.max(symbol1Index, symbol2Index);
}

// code block #2
function drawRating(vote) {
	if (vote >= 0 && vote <= 20) return createStarsString(1);
	if (vote > 20 && vote <= 40) return createStarsString(2);
	if (vote > 40 && vote <= 60) return createStarsString(3);
	if (vote > 60 && vote <= 80) return createStarsString(4);
	if (vote > 80 && vote <= 100) return createStarsString(5);
}

function createStarsString(count) {
	let resultString;
	for (let i = 0; i < count; i++) 
		resultString += '★';
	for (let i = 0; i < 5-count; i++)
		resultString += '☆';
	return resultString;
}

// Проверка работы результата
console.log(drawRating(0) ); // ★☆☆☆☆
console.log(drawRating(1) ); // ★☆☆☆☆
console.log(drawRating(50)); // ★★★☆☆
console.log(drawRating(99)); // ★★★★★