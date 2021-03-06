var namespace = "http://www.w3.org/2000/svg"

function createFirstScene() {
    var number = Math.random()
    if(number < 0.50){
    makeImage("https://myanimelist.cdn-dena.com/images/characters/4/290843.jpg", 0, 0, 200, 100, 1.0)
    }else{
       makeText("Subaru Sakamaki", 50, 10, 10, "Caveat Brush","red", 1.0)
    }
    makeCircle(125, 50, 22, "black", 1.0)
    makeCircle(125, 50, 20, "#cc0000", 1.0)
    makeEllipse(125, 49, 3, 5, "#ff8080", 1.0)
    makeRect(130, 45, 10, 8, "#ff8080", 1.0)
    makeRect(110, 45, 10, 8, "#ff8080", 1.0)
    makeEllipse(125, 65, 13, 5, "#ffcccc", 1.0)
    makeEllipse(125, 35, 16, 5, "800000", 0.5)
    makeCircle(50, 50, 22, "black", 1.0)
    makeCircle(50, 50, 20, "#ffb3bf", 1.0)
makeEllipse(50, 49, 3, 5, "#ffb3d7", 1.0)
makeRect(35, 45,10, 8, "#ffb3d7", 1.0)
makeRect(55, 45, 10, 8, "#ffb3d7", 1.0)
makeEllipse(50, 65, 13, 5, "#ffe6f2", 1.0)
makeEllipse(50, 35, 16, 5, "#ffcce2", 0.5)
}

function createSecondScene() {
    var numbz = Math.random()
    if(numbz > 0.50){
    makeImage("https://myanimelist.cdn-dena.com/images/characters/11/280388.jpg", 0, 0, 200, 100, 1.0)
    }else{
        makeText("Kanato Sakamaki", 50, 10, 10, "Amatic SC", "purple", 1.0)
    makeCircle(125, 50, 22, "black", 1.0)
    makeCircle(125, 50, 20, "#d11aff", 1.0)
    makeEllipse(125, 49, 3, 3, "#e600e6", 1.0)
    makeRect(130, 45, 8, 10, "#f5ccff", 1.0)
    makeRect(110, 45, 8, 10, "#f5ccff", 1.0)
    makeEllipse(125, 65, 13, 9, "#f9e6ff", 1.0)
    makeEllipse(125, 37, 16, 9, "#330033", 1.0)
    makeCircle(50, 50, 22, "black", 1.0)
    makeCircle(50, 50, 20, "#d11aff", 1.0)
    makeEllipse(50, 37, 16, 9, "#330033", 1.0)
    makeEllipse(50, 49, 3, 3, "#e600e6", 1.0)
    makeRect(35, 45, 8, 10, "#f5ccff", 1.0)
    makeRect(55, 45, 8, 10, "#f5ccff", 1.0)
    makeEllipse(50, 65, 13, 9, "#f9e6ff", 1.0)
}

function createThirdScene() {
    var num = Math.random(){
        if(num > 0.50){
    makeImage("https://myanimelist.cdn-dena.com/images/characters/4/280387.jpg", 0, 0, 200, 100, 1.0)
        }else{
            makeText("Shu Sakamaki", 50, 50, 50, "IM Fell Double Pica", 1.0)
makeCircle(125, 50, 22, "black", 1.0)
makeCircle(125, 50, 20, "#3333ff", 1.0)
makeEllipse(125, 49, 2, 2, "#b3b3ff", 1.0)
makeRect(130, 45, 12, 10, "#b3b3ff", 1.0)
makeRect(108, 45, 12, 10, "#b3b3ff", 1.0)
makeEllipse(125, 65, 13, 5, "#b3b3ff", 1.0)
makeEllipse(125, 35, 14, 5, "#b3b3ff", 1.0)
makeCircle(125, 65, 5, "#ffffff", 1.0)
makeCircle(50, 50, 22, "black", 1.0)
makeCircle(50, 50, 20, "#3333ff", 1.0)
makeEllipse(50, 49, 2, 2, "#b3b3ff", 1.0)
makeEllipse(50, 35, 14, 5, "#b3b3ff", 1.0)
makeRect(35, 45, 12, 10, "#b3b3ff", 1.0)
makeRect(55, 45, 12, 10, "#b3b3ff", 1.0)
makeEllipse(50, 65, 13, 5, "#b3b3ff", 1.0)
makeCircle(50, 65, 5, "#ffffff", 1.0)
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    var numb = Math.random()
    if(numb < 0.33){
    createFirstScene()
    }else if(numb > 0.67){
    createSecondScene()
    }else{
    createThirdScene()
}
}


// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}