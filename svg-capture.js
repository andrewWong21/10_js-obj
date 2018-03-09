var svg = document.getElementById("svjesus");
var svg_width = svg.getAttribute("width");
var svg_height = svg.getAttribute("height");
var b1 = document.getElementById("clear");

var clear_screen = function(){
    while (svg.lastChild) {
    	svg.removeChild(svg.lastChild);
    }
};

var create_circle = function(cx, cy){
    var o = {
        cx: cx,
        cy: cy,
        r: 30,
        color: "black",

        circle: document.createElementNS("http://www.w3.org/2000/svg", "circle"),
        display: function(){
            this.circle.setAttribute("cx", this.cx);
            this.circle.setAttribute("cy", this.cy);
            this.circle.setAttribute("r", this.r);
            this.circle.setAttribute("fill", this.color);
            this.circle.addEventListener("click", this.changeColor, true);
            svg.appendChild(this.circle);
        },

        changeColor: function(e){
            e.stopPropagation();
            hex = "0123456789ABCDEF";
            newColor = "#";
            for (var i = 0; i < 6; i++){
                newColor = newColor + hex[Math.floor(Math.random() * 16)];
            };
            o.circle.setAttribute("fill", newColor);
            o.color = newColor;
            o.circle.addEventListener("click", o.remove, true);
        },

        remove: function(e){
            svg.removeChild(o.circle);
            create_circle(Math.floor(Math.random() * svg_width), Math.floor(Math.random() * svg_height));
        }
    };
    o.display();
    return o;
};

b1.addEventListener("click", clear_screen);
svg.addEventListener("click", function(e) { create_circle(e.offsetX, e.offsetY); } );