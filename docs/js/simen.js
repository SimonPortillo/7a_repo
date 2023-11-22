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

//Simens figur Canvas
var canvas = document.getElementById("simenCanvas");
var centerX = canvas.width/2;
var centerY = canvas.height/2; 

const bakgrunn = rectangle(200,200,"solid","maroon")
const bakgrunn2 = rectangle(220, 220, "solid", "blue")
const linje1 = rectangle(80, 25, "solid", "green")
const linje2 = rectangle(25, 80, "solid", "green")
const linje3 = rectangle(90, 35, "solid", "pink")
const linje4 = rectangle(35, 90, "solid", "pink")


overlayXY(bakgrunn, 10, 10, bakgrunn2);
overlayXY(linje3, 60, 15, bakgrunn2);
overlayXY(linje4, 60, 35, bakgrunn2);
overlayXY(linje3, 60, 95, bakgrunn2);
overlayXY(linje4, 115, 105, bakgrunn2);
overlayXY(linje3, 60, 165, bakgrunn2);
overlayXY(linje1, 65, 20, bakgrunn2);
overlayXY(linje2, 65, 40, bakgrunn2);
overlayXY(linje1, 65, 100, bakgrunn2);
overlayXY(linje2, 120, 110, bakgrunn2);
overlayXY(linje1, 65, 170, bakgrunn2);
overlayXY(bakgrunn2, centerX - (bakgrunn2.width/2), centerY - (bakgrunn2.height/2), canvas);

//Simens figur SVG
var svg = document.getElementById("simenSVG");
var bakgrunnSVG = rectangleSVG(200,200,"solid","maroon")
var bakgrunn2SVG = rectangleSVG(220, 220, "solid", "blue")
var linje1SVG = rectangleSVG(80, 25, "solid", "green")
var linje2SVG = rectangleSVG(25, 80, "solid", "green")
var linje3SVG = rectangleSVG(90, 35, "solid", "pink")
var linje4SVG = rectangleSVG(35, 90, "solid", "pink")


overlayXYsvg(bakgrunn2SVG, 0, 0, svg);
overlayXYsvg(bakgrunnSVG, 10, 10, svg);
overlayXYsvg(linje3SVG.cloneNode(true), 60, 15, svg);
overlayXYsvg(linje4SVG.cloneNode(true), 60, 35, svg);
overlayXYsvg(linje3SVG.cloneNode(true), 60, 95, svg);
overlayXYsvg(linje4SVG, 115, 105, svg);
overlayXYsvg(linje3SVG, 60, 165, svg);
overlayXYsvg(linje1SVG.cloneNode(true), 65, 20, svg);
overlayXYsvg(linje2SVG.cloneNode(true), 65, 40, svg);
overlayXYsvg(linje1SVG.cloneNode(true), 65, 100, svg);
overlayXYsvg(linje2SVG, 120, 110, svg);
overlayXYsvg(linje1SVG, 65, 170, svg);
