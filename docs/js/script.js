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

function overlayXYsvg(img2, x, y, img1) {
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
    overlayXY(rectangle(25, 100, "solid", "black"), centerX + 38, centerY + 90, canvas);
    overlayXY(rectangle(25, 75, "solid", "black"), centerX + 55, centerY + 190, canvas);
    overlayXY(rectangle(25, 75, "solid", "black"), centerX + 20, centerY + 190, canvas);
    overlayXY(rectangle(75, 25, "solid", "black"), centerX + 60, centerY + 120, canvas);
    overlayXY(rectangle(75, 25, "solid", "black"), centerX + -30, centerY + 120, canvas);
    overlayXY(circle(48, "solid", "yellow"), centerX, centerY, canvas);
    overlayXY(circle(10, "solid", "black"), centerX + 20, centerY + 20, canvas);
    overlayXY(circle(8, "solid", "black"), centerX + 50, centerY + 30, canvas);
    overlayXY(rectangle(50, 5, "solid", "black"), centerX + 20, centerY + 70, canvas);

    