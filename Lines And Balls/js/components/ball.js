class Ball {
  constructor(
  xpos,
  ypos,
  number) {
    this.x = xpos;
    this.y = ypos,
    this.number = number;
    this.networkLines = [];
    this.radius = 20;
  }

	draw() {
		this.ballBlock = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		this.ballBlock.setAttribute('cx', this.x);
		this.ballBlock.setAttribute('cy', this.y);
		this.ballBlock.setAttribute('r', this.radius);
		this.ballBlock.setAttribute('stroke-width', 3);
		this.ballBlock.setAttribute('fill', 'grey');
		document.body.querySelector('.game-window__svg').appendChild(this.ballBlock);

		this.__bindEventOnBall();
  	}

  	update (x, y, ball = this.ballBlock) {
  		if (x < WidthWindow - this.radius && x > this.radius &&
  			 y < HeightWindow - this.radius && y > this.radius) {
  			this.x = x  + 'px';
			this.y = y  + 'px';
			ball.setAttribute('cx', x  + 'px');
			ball.setAttribute('cy', y  + 'px');
			this.updateNetworkLines(x, y);
  		}
  	}

  	updateNetworkLines (x, y, number = this.number) {
  		this.networkLines.forEach((line) => {
		    	if (number == line.network[0])
		    		line.update(x, y, "start")
		    	else line.update(x, y, "end");
		    });
  	}

  	__bindEventOnBall(ball = this.ballBlock, number = this.number) {
	  	let constructor = this;
	  	ball.onmousedown = function(e) { 	  	
		  	function moveAt(e) {
		    	constructor.update(e.pageX, e.pageY);	    
		  	}

		  	document.onmousemove = function(e) {
		    	moveAt(e);
		  	}

		  	document.onmouseup = function() {
		  		ball.dispatchEvent(new CustomEvent('BallUp', {detail: number, bubbles: true}));
		    	document.onmousemove = null;
		    	ball.onmouseup = null;
		  	}
		}
		ball.ondragstart = function() {
		  	return false;
		};	
	}
}