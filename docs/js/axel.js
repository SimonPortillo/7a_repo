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
//canvas axel
canvas = document.getElementById("axelCanvas");
centerX = canvas.width/2;
centerY = canvas.height/2; 
const scene = rectangle(150, 150,"solid","blue");
overlayXY(rectangle(70, 25, "solid", "green"), 0, 0, scene);
overlayXY(rectangle(80, 40, "solid", "yellow"),0, 25, scene);
overlayXY(rectangle(80, 50, "solid", "maroon"), 30, 60, scene);
overlayXY(rectangle(50, 60, "solid", "orange"), 100, 0, scene);
overlayXY(rectangle(35, 80, "solid", "pink"), 70, 0, scene);
overlayXY(rectangle(30, 100, "solid", "purple"), 0, 50, scene);
overlayXY(rectangle(120, 50, "solid", "red"), 30, 100, scene);
overlayXY(scene, centerX, centerY, canvas);

//Axels Figur SVG

var svg = document.getElementById("axelSVG");
overlayXYsvg(rectangleSVG(150, 150,"solid","blue"), 0, 0, svg);
overlayXYsvg(rectangleSVG(70, 25, "solid", "green"), 0, 0, svg);
overlayXYsvg(rectangleSVG(80, 40, "solid", "yellow"),0, 25, svg);
overlayXYsvg(rectangleSVG(80, 50, "solid", "maroon"), 30, 60, svg);
overlayXYsvg(rectangleSVG(50, 60, "solid", "orange"), 100, 0, svg);
overlayXYsvg(rectangleSVG(35, 80, "solid", "pink"), 70, 0, svg);
overlayXYsvg(rectangleSVG(30, 100, "solid", "purple"), 0, 50, svg);
overlayXYsvg(rectangleSVG(120, 50, "solid", "red"), 30, 100, svg);