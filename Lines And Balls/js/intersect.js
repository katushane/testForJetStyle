initIntersects();

function initIntersects () {

	Array.prototype.diff = function(a) {
    	return this.filter(function(i) {return a.indexOf(i) < 0;});
	};

	document.addEventListener('BallUp', (event) => {
	 	let checkingLines = balls[event.detail-1].networkLines,
	 		uncheckedLines = lines.diff(balls[event.detail-1].networkLines);
	 	let checkingBall = balls[event.detail-1],
			uncheckedBalls = balls.slice();
		uncheckedBalls.splice(event.detail-1, 1);
		findIntersects(checkingLines, uncheckedLines);	

		function cellIntersects () {
		 	if (uncheckedBalls.length != 0) {
		 		checkingBall = uncheckedBalls.pop();
				checkingLines = checkingBall.networkLines;			
				uncheckedLines = uncheckedLines.diff(checkingBall.networkLines);
				if (uncheckedLines.length != 0)
				findIntersects (checkingLines, uncheckedLines)
				else document.dispatchEvent(new Event('GameOver', {bubbles: true}));
		 	}
			else document.dispatchEvent(new Event('GameOver', {bubbles: true}));
		}

		function findIntersects (checkingLines, uncheckedLines) {
			let isIntersect = false;
			
			for (let i = 0; i<checkingLines.length; i++) {
				let line = checkingLines[i];
				for (let j = 0; j<uncheckedLines.length; j++) {
					let anotherLine = uncheckedLines[j];
					if ((anotherLine.x1 == line.x2 && anotherLine.y1 == line.y2) || 
						(anotherLine.x2 == line.x1 && anotherLine.y2 == line.y1) ||
						(anotherLine.x1 == line.x1 && anotherLine.y1 == line.y1) || 
						(anotherLine.x2 == line.x2 && anotherLine.y2 == line.y2))
						isIntersect += false;
					else
					isIntersect += (intersects(Number(line.x1), Number(line.y1), Number(line.x2), Number(line.y2)
						, Number(anotherLine.x1), Number(anotherLine.y1), Number(anotherLine.x2),
						 Number(anotherLine.y2)));
				}
				if (isIntersect) break;
			}
			if (!isIntersect) cellIntersects();
		}	
	});	
}

// Find the intersects of two lines
function intersects(x1,y1,x2,y2, x3,y3,x4,y4) {
    var x=((x1*y2-y1*x2)*(x3-x4)-(x1-x2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    var y=((x1*y2-y1*x2)*(y3-y4)-(y1-y2)*(x3*y4-y3*x4))/((x1-x2)*(y3-y4)-(y1-y2)*(x3-x4));
    if (isNaN(x)||isNaN(y)) {
        return false;
    } else {
        if (x1>=x2) {
            if (!(x2<=x&&x<=x1)) {return false;}
        } else {
            if (!(x1<=x&&x<=x2)) {return false;}
        }
        if (y1>=y2) {
            if (!(y2<=y&&y<=y1)) {return false;}
        } else {
            if (!(y1<=y&&y<=y2)) {return false;}
        }
        if (x3>=x4) {
            if (!(x4<=x&&x<=x3)) {return false;}
        } else {
            if (!(x3<=x&&x<=x4)) {return false;}
        }
        if (y3>=y4) {
            if (!(y4<=y&&y<=y3)) {return false;}
        } else {
            if (!(y3<=y&&y<=y4)) {return false;}
        }
    }
    return true;
}

