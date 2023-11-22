const DarkModeButton = document.getElementById("DarkModeButton");

DarkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})
//darkmode

//SVG FUNCTIONS
function circleSVG(radius, fillmode, color){
var image = document.createElementNS("http://www.w3.org/2000/svg", "circle");
image.setAttribute("r", radius);
if(fillmode == "outline"){
    image.setAttribute("stroke", color);
    image.setAttribute("fill-opacity", 0);
} else if(fillmode == "solid") {
    image.setAttribute("fill", color);
}
return image;
}

function rectangleSVG(width, height, fillmode, color){
var image = document.createElementNS("http://www.w3.org/2000/svg", "rect");
image.setAttribute("width", width);
image.setAttribute("height", height);
if(fillmode == "outline"){
    image.setAttribute("stroke", color);
} else if(fillmode == "solid") {
    image.setAttribute("fill", color);
}
return image;
}
  
function overlayXYsvg(img1, x, y, img2) {
//img2 is overlaid on top of img1 at coordinates
img2.appendChild(img1)
  if(img1.tagName == "circle"){
    img1.setAttribute("cx", x);
    img1.setAttribute("cy", y);
  } else if(img1.tagName == "rect"){
    img1.setAttribute("x", x);
    img1.setAttribute("y", y);
  }
  return img2;
}

//CANVAS FUNCTIONS
function circle(radius, fillmode, color){
    var canvas = document.createElement("canvas");
    canvas.width = (radius*2)+5;
    canvas.height = (radius*2)+5;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(radius+2, radius+2, radius, 0, 2 * Math.PI);
    if (fillmode == "solid"){
        ctx.fillStyle = color;
        ctx.fill();
    } else if (fillmode == "outline"){
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    return canvas;
}

function rectangle(width, height, fillmode, color){
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    var ctx = canvas.getContext("2d");
    ctx.rect(0, 0, width, height);
    if (fillmode == "solid"){
        ctx.fillStyle = color;
        ctx.fill();
    } else if (fillmode == "outline"){
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    return canvas;
}


function overlayXY(img1, x, y, img2){
    const ctx = img2.getContext("2d");
    ctx.drawImage(img1, x, y);
    return img2;
}

var canvas = document.getElementById("simonCanvas");
var ctx = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
    overlayxy(ctx, centerX - 20, centerY - 20, rectangle(40, 40, "solid", "blue"));
    overlayxy(ctx, centerX - 15, centerY - 15, rectangle(30, 30, "solid", "red"));
    overlayxy(ctx, centerX - 10, centerY - 10, rectangle(20, 20, "solid", "black"));
    overlayxy(ctx, centerX - 5, centerY - 5, rectangle(10, 10, "solid", "white"));
    overlayxy(ctx, centerX - 42, centerY - 42, circle(40, "outline", "red"));
    overlayxy(ctx, centerX -37, centerY - 37, circle(35, "outline", "blue"));
    overlayxy(ctx, centerX - 32, centerY - 32, circle(30, "outline", "red"));

/*
var canvas = document.getElementById("axelCanvas");
var ctx = canvas.getContext("2d");
rectangle(50, 50, "solid", "green");

var canvas = document.getElementById("livCanvas");
var ctx = canvas.getContext("2d");
circle(40, "outline", "red");

var canvas = document.getElementById("birkCanvas");
var ctx = canvas.getContext("2d");
circle(40, "outline", "red");

var canvas = document.getElementById("siriCanvas");
var ctx = canvas.getContext("2d");
circle(40, "outline", "red");

var canvas = document.getElementById("simenCanvas");
var ctx = canvas.getContext("2d");
circle(40, "outline", "red");

var canvas = document.getElementById("stormCanvas");
var ctx = canvas.getContext("2d");
circle(40, "outline", "red");
*/

    