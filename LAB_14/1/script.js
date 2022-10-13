
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//Штанишки
ctx.beginPath();
ctx.moveTo(120, 360);
ctx.lineTo(270, 360);
ctx.lineTo(270, 410);
ctx.lineTo(130, 410);
ctx.lineTo(130, 360);
ctx.fillStyle = "#3D75C6";
ctx.fill();

//Ботинки
ctx.beginPath();
ctx.moveTo(120, 410);
ctx.bezierCurveTo(100, 400, 200, 400, 200, 410);
ctx.bezierCurveTo(250, 400, 250, 405, 285, 415);
ctx.lineTo(120, 410);
ctx.fillStyle = "#312C30";
ctx.fill();
//Куртка

ctx.beginPath();
ctx.moveTo(140, 295);
ctx.bezierCurveTo(210, 310, 100, 265, 105, 360);
ctx.lineTo(125, 370);
ctx.lineTo(123, 385);
ctx.lineTo(200, 395);
ctx.lineTo(275, 385);
ctx.lineTo(290, 370);
ctx.bezierCurveTo(290, 330, 275, 325, 265, 295);
ctx.lineTo(140, 295);
ctx.fillStyle = " #D37061";
ctx.fill()

ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(200, 320);
ctx.lineTo(199, 393);
ctx.strokeStyle = "#744946";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = " #744946";
ctx.arc(190, 382, 3, 0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = " #744946";
ctx.arc(190, 362, 3, 0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = " #744946";
ctx.arc(192, 342, 3, 0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(263, 362);
ctx.lineTo(258, 340);
ctx.strokeStyle = "#744946";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(130, 360);
ctx.lineTo(135, 340);
ctx.strokeStyle = "#744946";
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = " #FF1E3F";
ctx.arc(118, 365, 20, 0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.fillStyle = " #FF1E3F";
ctx.strokeStyle = "#DC243D";
ctx.arc(127, 360, 7, 0, 2 * Math.PI, true);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = " #FF1E3F";
ctx.arc(277, 370, 20, 0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 6;
ctx.fillStyle = " #FF1E3F";
ctx.strokeStyle = "#DC243D";
ctx.arc(265, 370, 7, 0, 2 * Math.PI, true);
ctx.stroke();
ctx.fill();
ctx.closePath();

//Шарф
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(140, 295);
ctx.bezierCurveTo(100, 280, 200, 380, 265, 305);
ctx.lineTo(265, 295);
ctx.lineTo(140, 295);
ctx.fillStyle = "#F81F3F";
ctx.fill();

//Голова

ctx.beginPath();
ctx.lineWidth = 0; // толщина линии
ctx.fillStyle = " #FFEBC2";
ctx.arc(200,220,100,0, 2 * Math.PI, true);
//ctx.stroke();
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 0; // толщина линии
ctx.fillStyle = " #3C75C6";
ctx.arc(200,190,100,0, Math.PI, true);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(200, 75);
ctx.lineTo(160, 100);
ctx.strokeStyle = "#FF2243";
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(170, 70);
ctx.lineTo(190, 110);
ctx.strokeStyle = "#FF2243";
ctx.stroke();

ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(160, 80);
ctx.lineTo(200, 100);
ctx.strokeStyle = "#FF2243";
ctx.stroke();

ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(185, 70);
ctx.lineTo(170, 110);
ctx.strokeStyle = "#FF2243";
ctx.stroke();

ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.moveTo(200, 90);
ctx.lineTo(160, 90);
ctx.strokeStyle = "#FF2243";
ctx.stroke();

ctx.closePath();


ctx.beginPath();
ctx.moveTo(310, 205);
ctx.bezierCurveTo(330, 160, 100, 160, 80, 215);
ctx.lineTo(90, 235);
ctx.bezierCurveTo(150, 200, 220, 190, 310, 225);
ctx.lineTo(310, 205);

ctx.strokeStyle = "#FF2243";
ctx.fillStyle = "#FF2243";
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.beginPath();
ctx.ellipse(175, 235, 25, 30, Math.PI / 4, 0, 2 * Math.PI);
ctx.fillStyle = "#FFFFFF";
ctx.fill();

ctx.beginPath();
ctx.beginPath();
ctx.ellipse(230, 235, 30, 25, Math.PI / 4, 0, 2 * Math.PI);
ctx.fillStyle = "#FFFFFF";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 0; // толщина линии
ctx.fillStyle = " #000000";
ctx.arc(180,230,4,0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 0; // толщина линии
ctx.fillStyle = " #000000";
ctx.arc(225,230,4,0, 2 * Math.PI, true);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(120, 210);
ctx.lineTo(150, 180);
ctx.strokeStyle = "#523B42";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(270, 200);
ctx.lineTo(240, 175);
ctx.strokeStyle = "#523B42";
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(235, 280);
ctx.lineTo(175, 280);
ctx.lineTo(205, 300);
ctx.lineTo(235, 280);
ctx.fillStyle = "#523B42";
ctx.fill();








