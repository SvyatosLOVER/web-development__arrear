var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//Шатишки
ctx.beginPath();
ctx.moveTo(130, 330);
ctx.lineTo(265, 330);
ctx.lineTo(265, 365);
ctx.lineTo(130, 365);
ctx.lineTo(130, 330);
ctx.fillStyle = "#22847E";
ctx.fill();

//Ботинки
ctx.beginPath();
ctx.moveTo(120, 365);
ctx.bezierCurveTo(100, 355, 200, 355, 200, 365);
ctx.bezierCurveTo(250, 355, 250, 355, 285, 365);
ctx.lineTo(120, 365);
ctx.fillStyle = "#312C30";
ctx.fill();

//Куртка 

ctx.beginPath();
ctx.moveTo(140, 247);
ctx.bezierCurveTo(120, 235, 100, 265, 100, 315);
ctx.lineTo(125, 340);
ctx.lineTo(200, 350);
ctx.lineTo(275, 340);
ctx.lineTo(295, 315);
ctx.bezierCurveTo(295, 275, 275, 260, 265, 245);
ctx.lineTo(140, 247);
ctx.fillStyle = " #FF6118";
ctx.fill()

ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(153, 293);
ctx.lineTo(180, 293);
ctx.lineTo(180, 323);
ctx.lineTo(153, 323);
ctx.lineTo(153, 293);
ctx.lineTo(166, 305);
ctx.lineTo(180, 293);
ctx.strokeStyle = "#000000";
ctx.stroke()

ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(218, 291);
ctx.lineTo(245, 290);
ctx.lineTo(245, 321);
ctx.lineTo(218, 321);
ctx.lineTo(218, 291);
ctx.lineTo(231, 303);
ctx.lineTo(245, 290);
ctx.strokeStyle = "#000000";
ctx.stroke()


ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(125, 315);
ctx.lineTo(132, 290);
ctx.strokeStyle = "#000000";
ctx.stroke()

ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(267, 320);
ctx.lineTo(260, 290);
ctx.strokeStyle = "#000000";
ctx.stroke()

ctx.beginPath();
ctx.fillStyle = " #4FC53E";
ctx.arc(110, 325, 18, 0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.fillStyle = " #4FC53E";
ctx.strokeStyle = "#00AD51";
ctx.arc(120, 320, 7, 0, 2 * Math.PI, true);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = " #4FC53E";
ctx.arc(280, 330, 18, 0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.fillStyle = " #4FC53E";
ctx.strokeStyle = "#00AD51";
ctx.arc(270, 328, 7, 0, 2 * Math.PI, true);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(200, 350);
ctx.lineTo(200, 260);
ctx.strokeStyle = "#000000";
ctx.stroke()

//Шарф

ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(130, 248);
ctx.bezierCurveTo(100, 220, 200, 350, 275, 246);
ctx.lineTo(130, 248);
ctx.fillStyle = "#07A54E";
ctx.fill();


//Голова
ctx.beginPath();
ctx.lineWidth = 0; // толщина линии
ctx.fillStyle = " #FFEBC2";
ctx.arc(200,177,100,0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath()

ctx.beginPath();
ctx.beginPath();
ctx.ellipse(170, 175, 27, 32, Math.PI / 4, 0, 2 * Math.PI);
ctx.fillStyle = "#FFFFFF";
ctx.fill()

ctx.beginPath();
ctx.beginPath();
ctx.ellipse(230, 175, 32, 27, Math.PI / 4, 0, 2 * Math.PI);
ctx.fillStyle = "#FFFFFF";
ctx.fill()

ctx.beginPath();
ctx.lineWidth = 3; // толщина линии
ctx.fillStyle = " #000000";
ctx.arc(180, 177, 4, 0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 3; // толщина линии
ctx.fillStyle = " #000000";
ctx.arc(215, 177, 4, 0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath()

ctx.beginPath();
ctx.moveTo(170, 230)
ctx.lineTo(234, 230);
ctx.lineTo(203, 257);
ctx.lineTo(170, 230);
ctx.fillStyle = "#302B2E";
ctx.fill();

ctx.beginPath();
ctx.moveTo(172, 232)
ctx.lineTo(232, 232);
ctx.lineTo(224, 239);
ctx.lineTo(180, 239);
ctx.lineTo(172, 232);
ctx.fillStyle = "#ffffff";
ctx.fill();

//Шапка

// ctx.stroke();
// ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 2; // толщина линии
ctx.fillStyle = " #4EC53D";
ctx.arc(125, 75, 25,0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 2; // толщина линии
ctx.fillStyle = " #4EC53D";
ctx.arc(275, 75, 25,0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(125, 50);
ctx.lineTo(275, 50);
ctx.lineTo(300, 75);
ctx.lineTo(300, 75);
ctx.lineTo(300, 140);
ctx.lineTo(100, 140);
ctx.lineTo(100, 75);
ctx.lineTo(125, 50);
ctx.fillStyle = " #4EC53D";
ctx.fill();
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(110, 90);
ctx.lineTo(285, 90);
ctx.lineTo(285, 140);
ctx.lineTo(110, 140);
ctx.lineTo(110, 90);
ctx.fillStyle = " #00AD50";
ctx.fill();
ctx.closePath()

ctx.beginPath();
ctx.beginPath();
ctx.ellipse(85, 170, 25, 43, Math.PI / 4, 0, 2 * Math.PI);
ctx.fillStyle = "#4EC53D";
ctx.fill()

ctx.beginPath();
ctx.beginPath();
ctx.ellipse(320, 167, 45, 20, Math.PI / 4, 0, 2 * Math.PI);
ctx.fillStyle = "#4EC53D";
ctx.fill()


ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(147, 143);
ctx.lineTo(170, 120);
ctx.strokeStyle = "#3E4744";
ctx.stroke();
ctx.closePath()

ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(250, 145);
ctx.lineTo(220, 127);
ctx.strokeStyle = "#3E4744";
ctx.stroke();
ctx.closePath()

