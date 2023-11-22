const DarkModeButton = document.getElementById("DarkModeButton");

DarkModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})
//darkmode

/*
const svg = document.getElementById("svg");
svg.setAttribute("width", "100",);
svg.setAttribute("height", "100",);



function circle(radius, mode, color) {
    console.log("tegn en sirkel");
    //<rect width="100%" height="100%" fill="red" />
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", radius);
    circle.setAttribute("cy", radius);
    circle.setAttribute("r", radius);
    if (mode == "outline") {
        circle.setAttribute("stroke", color);
    }
    else {
        circle.setAttribute("fill", color);
    }
    return circle;
}

function overlayxy(ctx, dx, dy, circle) {
    
    ctx.appendChild(circle)
}


svg.appendChild(circle(50, "solid", "black"));

svg.appendChild(circle(25, "solid", "white"));
*/

//axel

function circleSVG(radius, fillmode, color) {
    var image = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    image.setAttribute("r", radius);
    if (fillmode == "outline") {
        image.setAttribute("stroke", color);
    } else if (fillmode == "solid") {
        image.setAttribute("fill", color);
    }
    return image;
}

function rectangleSVG(width, height, fillmode, color) {
    var image = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    image.setAttribute("width", width);
    image.setAttribute("height", height);
    if (fillmode == "outline") {
        image.setAttribute("stroke", color);
    } else if (fillmode == "solid") {
        image.setAttribute("fill", color);
    }
    return image;
}

function overlayXYsvg(img1, x, y, img2) {
    //img2 is overlaid on top of img1 at coordinates
    img2.appendChild(img1)
    if (img1.tagName == "circle") {
        img1.setAttribute("cx", x);
        img1.setAttribute("cy", y);
    } else if (img1.tagName == "rect") {
        img1.setAttribute("x", x);
        img1.setAttribute("y", y);
    }
}



//CANVAS FUNCTIONS
function circle(radius, fillmode, color) {
    var canvas = document.createElement("canvas");
    canvas.width = (radius * 2) + 5;
    canvas.heigth = (radius * 2) + 5;
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(radius + 2, radius + 2, radius, 0, 2 * Math.PI);
    if (fillmode == "solid") {
        ctx.fillStyle = color;
        ctx.fill();
    } else if (fillmode == "outline") {
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    return canvas;
}

function rectangle(width, height, fillmode, color) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.heigth = height;
    var ctx = canvas.getContext("2d");
    ctx.rect(0, 0, width, height);
    if (fillmode == "solid") {
        ctx.fillStyle = color;
        ctx.fill();
    } else if (fillmode == "outline") {
        ctx.strokeStyle = color;
        ctx.stroke();
    }
    return canvas;
}

/*
function overlayxy(img1, x, y, img2) {
    img1.drawImage(img2, x, y);

}
*/

function overlayXY(img1, x, y, img2){
    const ctx = img2.getContext("2d");
    ctx.drawImage(img1, x, y);
    return img2;
}

var canvas = document.getElementById("simonCanvas");
var ctx = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
    // simon canvas
    overlayXY(rectangle(25, 100, "solid", "black"), centerX + 38, centerY + 90, canvas);
    overlayXY(rectangle(25, 75, "solid", "black"), centerX + 55, centerY + 190, canvas);
    overlayXY(rectangle(25, 75, "solid", "black"), centerX + 20, centerY + 190, canvas);
    overlayXY(rectangle(75, 25, "solid", "black"), centerX + 60, centerY + 120, canvas);
    overlayXY(rectangle(75, 25, "solid", "black"), centerX + -30, centerY + 120, canvas);
    overlayXY(circle(48, "solid", "yellow"), centerX, centerY, canvas);
    overlayXY(circle(10, "solid", "black"), centerX + 20, centerY + 20, canvas);
    overlayXY(circle(8, "solid", "black"), centerX + 50, centerY + 30, canvas);
    overlayXY(rectangle(50, 5, "solid", "black"), centerX + 20, centerY + 70, canvas);

    //simon SVG
    var svg = document.getElementById("simonSVG");
    var figur1 = circleSVG(50, "solid", "yellow");
    var figur2 = rectangleSVG(25, 100, "solid", "black");
    var figur3 = rectangleSVG(25, 75, "solid", "black");
    var figur4 = rectangleSVG(25, 75, "solid", "black");
    var figur5 = rectangleSVG(75, 25, "solid", "black");
    var figur6 = rectangleSVG(75, 25, "solid", "black");
    var figur7 = circleSVG(10,  "solid", "black");
    var figur8 = circleSVG(8, "solid", "black");
    var figur9 = rectangleSVG(50, 5, "solid", "black");
    
    overlayXYsvg(figur1, 150, 350, svg);
    overlayXYsvg(figur2, 138, 400, svg);
    overlayXYsvg(figur3, 120, 500, svg);
    overlayXYsvg(figur4, 155, 500, svg);
    overlayXYsvg(figur5, 155, 420, svg);
    overlayXYsvg(figur6, 70, 420, svg);
    overlayXYsvg(figur7, 127, 335, svg);
    overlayXYsvg(figur8, 155, 345, svg);
    overlayXYsvg(figur9, 120, 370, svg);


   /* 
figur1 = circle(50, "solid", "yellow")
figur2 = rectangle(25, 100, "solid", "black")
figur3 = rectangle(25, 75, "solid", "black")
figur4 = rectangle(25, 75, "solid", "black")
figur5 = rectangle(75, 25, "solid", "black")
figur6 = rectangle(75, 25, "solid", "black")
figur7 = circle(10, "solid", "black")
figur8 = circle(10, "solid", "black")
figur9 = rectangle(50, 5, "solid", "black")
bakgrunn = rectangle(100,260, "outline", "black")

step1 = overlay-xy(figur1, 0, 0, bakgrunn)
step2 = overlay-xy(figur2, -37, -100, step1)  
step3 = overlay-xy(figur3, -55, -200, step2) 
step4 = overlay-xy(figur4, -20, -200, step3) 
step5 = overlay-xy(figur5, -60, -120, step4) 
step6 = overlay-xy(figur6, 30, -120, step5)
step7 = overlay-xy(figur7, -50, -25, step6)
step8 = overlay-xy(figur8, -80, -30, step7)
step9 = overlay-xy(figur9, -50, -75, step8)

step9
*/