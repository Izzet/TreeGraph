function Line(x1, y1, x2, y2, width){
	
	// 1 is start point, 2 is endpoint
	
	this.x1 = x1;
	this.x2 = x2;
	
	this.y1 = y1;
	this.y2 = y2;
	
	this.midX = 0;
	
	this.midY = 0;
	
	this.updateMid();
	
	this.width = width == undefined ? 5 : width;
	
	this.length = 0;
	this.argument = 0;
	
	this.updateLength();
	this.updateArgument();
	
	this.line = document.createElement("div");
	
	this.line.style.backgroundColor = "black";
	this.line.style.position = "absolute";
	
	this.updateElement();
}
Line.prototype.updateLength = function (){
	this.length = Math.sqrt((this.x2-this.x1)*(this.x2-this.x1)+(this.y2-this.y1)*(this.y2-this.y1));
	return this.length;
};

Line.prototype.updateArgument = function(){
	this.argument = Math.atan2((this.y2-this.y1), (this.x2-this.x1));
	return this.argument;
};

Line.prototype.updateMid = function(){
	this.midX = (this.x1+this.x2)/2;
	this.midY = (this.y1+this.y2)/2;
	
	return [this.midX, this.midY];
};

Line.prototype.updateEndpoint = function (x2,y2){
	this.x2 = x2;
	this.y2 = y2;
	
	this.updateLength();
	this.updateArgument();
	this.updateMid();
	
	this.updateElement();
};

Line.prototype.updateElement = function(){
	this.line.style.left = this.midX;
	this.line.style.top = this.midY;
	
	this.line.style.marginLeft = -this.length/2;
	this.line.style.marginTop = -this.width/2;
	
	this.line.style.webkitTransform = "rotate("+this.argument+"rad)";
	
	this.line.style.width = this.length;
	
	this.line.style.height = this.width;
	
	return this.line;
};