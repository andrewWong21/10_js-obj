var svg = document.getElementById("svjesus");

var b1 = document.getElementById("clear");

var clear_screen = function(){
    while (svg.lastChild) {
    	svg.removeChild(svg.lastChild);
    }
};

var create = function(e){

    
    
    var o = {

        cx: e.offsetX,
        cy: e.offsetY,
        r: 30,
        color: "black",

        circle: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
        display: function(){
            this.circle.setAttribute("cx", this.cx);
            this.circle.setAttribute("cy", this.cy);
	    this.circle.setAttribute("r", this.r);
   	    this.circle.setAttribute("fill", this.color);
	    this.circle.addEventListener("click", this.changeColor);
            svg.appendChild(this.circle);
        },

	changeColor: function(){
            
            newColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            //this.circle.setAttribute("fill", newColor);
	    this.color = newColor;
	    console.log(this.color);
	},

        remove: function(){
            svg.removeChild(this.circle);
        }
    };
    o.display();
    console.log(o);
    return o;
};

var make_circle = function(e){
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", e.offsetX);
    circle.setAttribute("cy", e.offsetY);
    circle.setAttribute("r", "30");
    circle.setAttribute("fill", "black");
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
    circle.addEventListener("click", change_color, true);
};

var delete_circle = function(e){
    svg.removeChild(this);
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", Math.random()*500);
    circle.setAttribute("cy", Math.random()*500);
    circle.setAttribute("r", "30");
    circle.setAttribute("fill", "black");
    circle.setAttribute("stroke", "black");
    svg.appendChild(circle);
}



b1.addEventListener("click", clear_screen);
svg.addEventListener("click", create);
