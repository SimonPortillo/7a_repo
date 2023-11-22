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

//Birks figur Canvas
canvas = document.getElementById("birkCanvas");
centerX = canvas.width/2;
centerY = canvas.height/2; 
const background = rectangle(130, 100, "solid", "green");

overlayXY(rectangle(120, 90, "solid", "dark-blue"), 5, 5, background);
overlayXY(rectangle(110, 80, "solid", "purple"), 10, 10, background);
overlayXY(rectangle(100, 70, "solid", "pink"), 15, 15, background);
overlayXY(rectangle(90, 60, "solid", "yellow"), 20, 20, background);
overlayXY(rectangle(80, 50, "solid", "crimson"), 25, 25, background);
overlayXY(rectangle(70, 40, "solid", "orange"), 30, 30, background); 
overlayXY(rectangle(60, 30, "solid", "lime"), 35, 35, background);
overlayXY(rectangle(10, 30, "solid", "white"), 80, 35, background);
overlayXY(rectangle(10, 30, "solid", "white"), 60, 35, background);
overlayXY(rectangle(10, 30, "solid", "white"), 40, 35, background);
overlayXY(background, centerX - (background.width/2), centerY - (background.height/2), canvas);

//Birks Figur SVG
svg = document.getElementById("birkSVG");
overlayXYsvg(rectangleSVG(130, 100, "solid", "green"), 0, 0, svg);
overlayXYsvg(rectangleSVG(120, 90, "solid", "dark-blue"), 5, 5, svg);
overlayXYsvg(rectangleSVG(110, 80, "solid", "purple"), 10, 10, svg);
overlayXYsvg(rectangleSVG(100, 70, "solid", "pink"), 15, 15, svg);
overlayXYsvg(rectangleSVG(90, 60, "solid", "yellow"), 20, 20, svg);
overlayXYsvg(rectangleSVG(80, 50, "solid", "crimson"), 25, 25, svg);
overlayXYsvg(rectangleSVG(70, 40, "solid", "orange"), 30, 30, svg); 
overlayXYsvg(rectangleSVG(60, 30, "solid", "lime"), 35, 35, svg);
overlayXYsvg(rectangleSVG(10, 30, "solid", "white"), 80, 35, svg);
overlayXYsvg(rectangleSVG(10, 30, "solid", "white"), 60, 35, svg);
overlayXYsvg(rectangleSVG(10, 30, "solid", "white"), 40, 35, svg);

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

//Siris FIgur Canvas
canvas = document.getElementById("siriCanvas");
overlayXY(circle(30, "solid", "lemonChiffon"), 120, 130,
  overlayXY(circle(60, "solid", "plum"), 50, 140,
    overlayXY(circle(60, "solid", "plum"), 40, 85,
      overlayXY(circle(60, "solid", "plum"), 125, 140,
        overlayXY(circle(60, "solid", "plum"), 140, 90,
          overlayXY(circle(60, "solid", "plum"), 100, 50,
            overlayXY(circle(90, "solid", "mediumOrchid"), 130, 50,
              overlayXY(circle(90, "solid", "mediumOrchid"), 60, 0,
                overlayXY(circle(90, "solid", "mediumOrchid"), 5, 50,
                  overlayXY(circle( 90, "solid", "mediumOrchid"), 10, 125,
                    overlayXY(circle(90, "solid", "mediumOrchid"), 100, 125, canvas)))))))))));

//SIris Figur SVG
svg = document.getElementById("siriSVG");
overlayXYsvg(circleSVG(30, "solid", "lemonChiffon"), 150, 160,
  overlayXYsvg(circleSVG(60, "solid", "plum"), 110, 200,
    overlayXYsvg(circleSVG(60, "solid", "plum"), 100, 145,
      overlayXYsvg(circleSVG(60, "solid", "plum"), 185, 200,
        overlayXYsvg(circleSVG(60, "solid", "plum"), 200, 150,
          overlayXYsvg(circleSVG(60, "solid", "plum"), 160, 110,
            overlayXYsvg(circleSVG(90, "solid", "mediumOrchid"), 220, 140,
              overlayXYsvg(circleSVG(90, "solid", "mediumOrchid"), 160, 90,
                overlayXYsvg(circleSVG(90, "solid", "mediumOrchid"), 95, 140,
                  overlayXYsvg(circleSVG( 90, "solid", "mediumOrchid"), 100, 215,
                    overlayXYsvg(circleSVG(90, "solid", "mediumOrchid"), 190, 215, svg)))))))))));


canvas = document.getElementById("simonCanvas");
centerX = canvas.width / 2;
centerY = canvas.height / 2;
    overlayXY(rectangle(40, 40, "solid", "blue"), centerX - 20, centerY - 20, canvas);
    overlayXY(rectangle(30, 30, "solid", "red"), centerX - 15, centerY - 15, canvas);
    overlayXY(rectangle(20, 20, "solid", "black"), centerX - 10, centerY - 10, canvas);
    overlayXY(rectangle(10, 10, "solid", "white"), centerX - 5, centerY - 5, canvas);
    overlayXY(circle(40, "outline", "red"), centerX - 42, centerY - 42, canvas);
    overlayXY(circle(35, "outline", "blue"), centerX -37, centerY - 37, canvas);
    overlayXY(circle(30, "outline", "red"), centerX - 32, centerY - 32, canvas);

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

