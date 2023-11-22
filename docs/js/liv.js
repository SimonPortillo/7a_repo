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

//Livs Figur Canvas
canvas = document.getElementById("livCanvas");
const outline = circle(101, "outline", "black")
const back = circle(100, "solid", "yellow")
const whiteCircle = circle(25, "solid", "white")
const pupil = circle(16, "solid", "black")
const mouth = rectangle(70, 5, "solid", "black")

overlayXY(pupil, 56, 60,
  overlayXY(pupil, 136, 60,
    overlayXY(whiteCircle, 40, 50, 
        overlayXY(whiteCircle, 120, 50, 
            overlayXY(mouth, 65, 135,
                overlayXY(outline, 0, 0, 
                    overlayXY(back, 1, 1, canvas)))))));

//Livs Figur SVG
svg = document.getElementById("livSVG");
const outlineSVG = circleSVG(100, "outline", "black")
const backSVG = circleSVG(100, "solid", "yellow")
const whiteCircleSVG = circleSVG(25, "solid", "white")
const pupilSVG = circleSVG(16, "solid", "black")
const mouthSVG = rectangleSVG(70, 5, "solid", "black")

overlayXYsvg(pupilSVG.cloneNode(true), 75, 80,
  overlayXYsvg(pupilSVG, 155, 80,
    overlayXYsvg(whiteCircleSVG.cloneNode(true), 65, 80, 
        overlayXYsvg(whiteCircleSVG, 145, 80, 
            overlayXYsvg(mouthSVG, 65, 140,
                overlayXYsvg(backSVG, 105, 105, 
                    overlayXYsvg(outlineSVG, 105, 105, svg)))))));