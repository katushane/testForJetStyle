class Line {
  constructor(
  xpos1,
  ypos1,
  xpos2,
  ypos2,
  network,
  id
  ) 
  {
    this.x1 = xpos1;
    this.y1 = ypos1;
    this.x2 = xpos2;
    this.y2 = ypos2;
    this.network = network;
  }

  	// Drawing line
	draw() {
	  	this.line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
	  	this.line.setAttribute('x1', this.x1);
	  	this.line.setAttribute('y1', this.y1);
	  	this.line.setAttribute('x2', this.x2);
	  	this.line.setAttribute('y2', this.y2);
	  	document.body.querySelector('.game-window__svg').appendChild(this.line);
	}

	// Updating line by coordinates
	update(x, y, point) {
	  	let constructor = this;
		moveAt(x, y, point);  	
		function moveAt(x, y, point) {
			if (point == "start")  {
			    constructor.x1 = x;
			    constructor.y1 = y;
			    constructor.line.setAttribute('x1', x);
			    constructor.line.setAttribute('y1', y);
			}
			else {
			    constructor.x2 = x;
			    constructor.y2 = y;
				constructor.line.setAttribute('x2', x);
			    constructor.line.setAttribute('y2', y);
			}
		}
	}

}