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

//Storms figur Canvas
canvas = document.getElementById("stormCanvas");
const botCircle = circle(60, "outline", "black");
const midCircle = circle(40, "outline", "black");
const topCircle = circle(20, "outline", "black");
const nose = circle(4, "solid", "orange");
const blackCircle = circle(4, "solid", "black");
const arm = rectangle(90, 5, "solid", "brown");
centerX = (canvas.width/2) - (botCircle.height/2);
centerY = (canvas.height/2) - (botCircle.height/2);


overlayXY(botCircle, centerX, centerY, canvas);
overlayXY(midCircle, centerX + 20, centerY - 80, canvas);
overlayXY(topCircle, centerX + 40, centerY - 120, canvas);
overlayXY(nose, centerX + 56, centerY - 100, canvas);
overlayXY(blackCircle, centerX + 46, centerY - 110, canvas);
overlayXY(blackCircle, centerX + 66, centerY - 110, canvas);
overlayXY(blackCircle, centerX + 56, centerY + 30, canvas);
overlayXY(blackCircle, centerX + 56, centerY - 15, canvas);
overlayXY(blackCircle, centerX + 56, centerY - 60, canvas);
overlayXY(arm, centerX + 100, centerY - 50, canvas);
overlayXY(arm, centerX - 66, centerY - 50, canvas);

//Storms figur SVG
svg = document.getElementById("stormSVG");
const botCircleSVG = circleSVG(60, "outline", "black");
const midCircleSVG = circleSVG(40, "outline", "black");
const topCircleSVG = circleSVG(20, "outline", "black");
const noseSVG = circleSVG(4, "solid", "orange");
const blackCircleSVG = circleSVG(4, "solid", "black");
const armSVG = rectangleSVG(90, 5, "solid", "brown");
centerX = svg.width/2;
centerY =  svg.height/2;


overlayXYsvg(botCircleSVG, 130, 200, svg);
overlayXYsvg(midCircleSVG, 130, 100, svg);
overlayXYsvg(topCircleSVG, 130, 40, svg);
overlayXYsvg(noseSVG, 130, 45, svg);
overlayXYsvg(blackCircleSVG.cloneNode(true), 120, 35, svg);
overlayXYsvg(blackCircleSVG.cloneNode(true), 140, 35, svg);
overlayXYsvg(blackCircleSVG.cloneNode(true), 130, 85, svg);
overlayXYsvg(blackCircleSVG.cloneNode(true), 130, 130, svg);
overlayXYsvg(blackCircleSVG, 130, 175, svg);
overlayXYsvg(armSVG.cloneNode(true), 0, 90, svg);
overlayXYsvg(armSVG, 170,  90, svg);