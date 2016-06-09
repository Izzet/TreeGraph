function Cell(x,y){
	
	this.x = x;
	this.y = y;
	
	this.element = document.createElement("div");
	this.element.className = "draggable";
	
	this.updateElement();
};
Cell.prototype.updatePosition = function(x,y){
	this.x = x;
	this.y = y;
	
	this.updateElement();
};

Cell.prototype.updateElement = function(){
	this.element.style.top = this.y;
	this.element.style.left = this.x;
};