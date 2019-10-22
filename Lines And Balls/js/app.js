WidthWindow = document.querySelector('.game-window__svg').getAttribute('width');
HeightWindow = document.querySelector('.game-window__svg').getAttribute('height');
main (config);

function main(config) {
	balls = [],
	lines = [];
	init();
}

//Initialization gaming components
function init() {
    document.getElementById('play-again').addEventListener('click', function() {
        document.querySelector('.game-window__svg').innerHTML = '';
        reset();
        main(config);
        draw(config.balls, config.lines);
    });
    document.addEventListener("GameOver", () => {
    	document.getElementById('game-over').style.display = 'block';
    document.getElementById('game-over-overlay').style.display = 'block';
    })
    reset();
}

// Reset game to original state
function reset() {
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('game-over-overlay').style.display = 'none';
};