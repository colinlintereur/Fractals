var Ax, Ay, Bx, By, Cx, Cy, Px, Py, exPx, exPy, i, xes, yes, length, lame;

function opchangeAx() {
  Ax = parseInt(document.getElementById("opAx").value);
  halfStepLoop(length);
}

function opchangeBx() {
  Bx = parseInt(document.getElementById("opBx").value);
  halfStepLoop(length);
}

function opchangeCx() {
  Cx = parseInt(document.getElementById("opCx").value);
  halfStepLoop(length);
}

function opchangePx() {
  Px = parseInt(document.getElementById("opPx").value);
  halfStepLoop(length);
}

function opchangeAy() {
  Ay = parseInt(document.getElementById("opAy").value);
  halfStepLoop(length);
}

function opchangeBy() {
  By = parseInt(document.getElementById("opBy").value);
  halfStepLoop(length);
}

function opchangeCy() {
  Cy = parseInt(document.getElementById("opCy").value);
  halfStepLoop(length);
}

function opchangePy() {
  Py = parseInt(document.getElementById("opPy").value);
  halfStepLoop(length);
}

function opchangeLen() {
  length = parseInt(document.getElementById("len").value);
  halfStepLoop(length);
}

function halfStep(Ptx, Pty, Tx, Ty) {
  newPx = (Ptx - Tx)/2;
  newPy = (Pty - Ty)/2;
  
  fill(0);
  exPx = Tx + newPx;
  exPy = Ty + newPy;
  
}

function halfStepLoop(len) {
  xes = [];
  yes = [];
  length = len;
  document.getElementById("opAx").value = Ax;
  document.getElementById("opBx").value = Bx;
  document.getElementById("opCx").value = Cx;
  document.getElementById("opPx").value = Px;
  document.getElementById("opAy").value = Ay;
  document.getElementById("opBy").value = By;
  document.getElementById("opCy").value = Cy;
  document.getElementById("opPy").value = Py;
  document.getElementById("len").value = length;
  for (i = 0; i < len - 1; i++) {
    var test = Math.floor(Math.random() * 3) % 3;
    switch (test) {
      case 0:
        halfStep(exPx, exPy, Bx, By);
        xes.push(exPx);
        yes.push(exPy);
        break;
      case 1:
        halfStep(exPx, exPy, Cx, Cy);
        xes.push(exPx);
        yes.push(exPy);
        break;
      case 2:
        halfStep(exPx, exPy, Ax, Ay);
        xes.push(exPx);
        yes.push(exPy);
        break;
      default:
        break;
    }
  }
  lame = 1;
  
}

function setup() {
  createCanvas(900, 900);
  
  Ax = 500;
  Ay = 100;
  Bx = 800;
  By = 800;
  Cx = 200;
  Cy = 650;
  Px = 600;
  Py = 600;
  xes = [];
  yes = [];
  lame = 0;
  
}

function draw() {
  background(200, 200, 200);
  
  fill(0);
  ellipse(Ax, Ay, 20, 20);
  ellipse(Bx, By, 20, 20);
  ellipse(Cx, Cy, 20, 20);
  
  fill(0, 0, 255);
  ellipse(Px, Py, 10, 10);
  
  halfStep(Px, Py, Ax, Ay);
  ellipse(exPx, exPy, 2, 2);
  
  if (lame === 0) {
    halfStepLoop(1000);
  }
  
  for (var j = 0; j < i; j++) {
    ellipse(xes[j], yes[j], 2, 2);
  }
  
  document.getElementById("changeAx").innerHTML = "Ax =";
  document.getElementById("changeAy").innerHTML = "Ay =";
  document.getElementById("changeBx").innerHTML = "Bx =";
  document.getElementById("changeBy").innerHTML = "By =";
  document.getElementById("changeCx").innerHTML = "Cx =";
  document.getElementById("changeCy").innerHTML = "Cy =";
  document.getElementById("changePx").innerHTML = "Px =";
  document.getElementById("changePy").innerHTML = "Py =";
  document.getElementById("changeLen").innerHTML = "# of points =";
}



/* FOR LATER
  1. Calculate area of ABC
      A = [Ax(By - Cy) + Bx(Cy - Ay) + Cx(Ay - By)] / 2
  2. Calculate area of PAB using formula as A1
  3. repeat for all sides, PAC, PBC: B1, C1
  4. If A1 + B1 + C1 = A, P lies inside ABC
*/