// drawline 함수정의
function drawline(sx, sy, ex, ey) {
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.stroke();
}

function draw_closePath(num) {
    ctx.beginPath();
    ctx.moveTo(150, 10);
    ctx.lineTo(250, 150);
    ctx.lineTo(50, 150);
    ctx.closePath();
    if (num == 1) { ctx.stroke(); }
    else if (num == 2) { ctx.fill(); }
}

// 분리된 두개의 사각형
function draw_pathrect() {
    ctx.beginPath();
    ctx.rect(10, 10, 100, 80);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150, 10, 100, 80);
    ctx.fill();
}

//원호 그리기
function draw_arc() {
    ctx.beginPath();
    ctx.arc(100, 100, 70, 0 * Math.PI / 180, 120 * Math.PI / 180, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(300, 100, 70, 0 * Math.PI / 180, 120 * Math.PI / 180, true);
    ctx.stroke();
}

//연결된 원호
function draw_arc2() {
    ctx.beginPath();
    ctx.arc(100, 100, 70, 0 * Math.PI / 180, 120 * Math.PI / 180, false);
    ctx.arc(300, 100, 70, 0 * Math.PI / 180, 120 * Math.PI / 180, true);
    ctx.stroke();
}

// 파이, 부채꼴 그리기
function draw_pie() {
    ctx.beginPath();
    ctx.arc(100, 100, 70, 0 * Math.PI / 180, 120 * Math.PI / 180);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(300, 100);
    ctx.arc(300, 100, 70, 0 * Math.PI / 180, 120 * Math.PI / 180);
    ctx.fill();
}

// 원 그리기
function draw_circle() {
    ctx.beginPath();
    ctx.arc(200, 100, 100, 0, 2 * Math.PI);  // x,y,r
    ctx.stroke();
}

// 원 매소드 정의
CanvasRenderingContext2D.prototype.strokeCircle = function (x, y, r) {
    this.beginPath();
    this.arc(x, y, r, 0, 2 * Math.PI);
    this.stroke();
}

CanvasRenderingContext2D.prototype.fillCircle = function (x, y, r) {
    this.beginPath();
    this.arc(x, y, r, 0, 2 * Math.PI);
    this.fill();
}

// arcTo 매소드
function draw_arcTo() {
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.arcTo(100, 150, 200, 10, 40);
    ctx.stroke();
}

// 모서리 둥글게 그리기
function draw_roundarc() {
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.arcTo(200, 10, 200, 50, 50);
    ctx.lineTo(200, 100);
    ctx.arcTo(200, 150, 10, 150, 50);
    ctx.lineTo(10, 150);
    ctx.stroke();
}

// 모서리가 둥근 사각형
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
}

CanvasRenderingContext2D.prototype.strokeRoundRect = function (x, y, w, h, r) {
    this.roundRect(x, y, w, h, r);
    this.stroke();
}

CanvasRenderingContext2D.prototype.fillRoundRect = function (x, y, w, h, r) {
    this.roundRect(x, y, w, h, r);
    this.fill();
}

// 모서리가 둥근 삼각형
function draw_triangle() {
    ctx.beginPath();
    ctx.moveTo(14, 152);
    ctx.arcTo(90, 0, 180, 180, 20);
    ctx.arcTo(180, 180, 0, 180, 20);
    ctx.arcTo(0, 180, 90, 0, 20);
    ctx.stroke();
}

// 2차 곡선
function draw_curve() {
    ctx.beginPath();
    ctx.moveTo(100, 10);
    ctx.quadraticCurveTo(200, 200, 300, 10);
    ctx.stroke();
}

// 3차 곡선
function draw_bezier() {
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.bezierCurveTo(300, 10, 10, 300, 200, 150);
    ctx.stroke();
}

function draw_colorStyle() {
    // draw colorstyle
    ctx.fillStyle = "yellow";
    ctx.fillRect(10, 10, 200, 100);

    ctx.lineWidth = 8;
    ctx.strokeStyle = "#ff0000";
    ctx.strokeRect(10, 10, 200, 100);
}

function draw_RGBA() {
    ctx.fillStyle = "rgb(0,0,255)";
    ctx.fillRect(10, 10, 100, 100);
    ctx.fillStyle = "rgba(255,0,0,0.5)";    // a : 투명도
    ctx.fillRect(50, 50, 100, 100);
}

function draw_globalalpha() {
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 100, 100);
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "red";
    ctx.fillRect(50, 50, 100, 100);
}

// 직선 그래디언트
function draw_lineargradient() {
    var brush = ctx.createLinearGradient(10, 10, 150, 10);
    brush.addColorStop(0, "white");
    brush.addColorStop(1, "black");
    ctx.fillStyle = brush;
    ctx.fillRect(10, 10, 140, 140);
}

function draw_lineargradient2() {
    var brush = ctx.createLinearGradient(10, 10, 150, 10);
    brush.addColorStop(0, "yellow");
    brush.addColorStop(0.5, "blue");
    brush.addColorStop(1, "red");
    ctx.fillStyle = brush;
    ctx.fillRect(10, 10, 140, 140);
}

function draw_lineargradient3() {
    var brush = ctx.createLinearGradient(10, 10, 10, 150);
    brush.addColorStop(0, "white");
    brush.addColorStop(1, "black");
    ctx.fillStyle = brush;
    ctx.fillRect(10, 10, 140, 140);

    var brush = ctx.createLinearGradient(210, 10, 350, 150);
    brush.addColorStop(0, "yellow");
    brush.addColorStop(1, "red");
    ctx.fillStyle = brush;
    ctx.fillRect(210, 10, 140, 140);
}

//rainbow
function draw_rainbow() {
    var brush = ctx.createLinearGradient(10, 150, 350, 150);
    brush.addColorStop(0, "red");
    brush.addColorStop(0.3, "yellow");
    brush.addColorStop(0.5, "green");
    brush.addColorStop(0.7, "blue");
    brush.addColorStop(1, "violet");
    ctx.fillStyle = brush;
    ctx.fillRect(10, 10, 340, 140);
}

// 중심점 위치 지정
function draw_lineargradient4() {
    var brush = ctx.createLinearGradient(10, 10, 150, 10);
    brush.addColorStop(0, "white");
    brush.addColorStop(0.3, "gray");
    brush.addColorStop(1, "black");
    ctx.fillStyle = brush;
    ctx.fillRect(10, 10, 140, 140);

    var brush = ctx.createLinearGradient(210, 10, 350, 10);
    brush.addColorStop(0, "white");
    brush.addColorStop(0.7, "gray");
    brush.addColorStop(1, "black");
    ctx.fillStyle = brush;
    ctx.fillRect(210, 10, 140, 140);
}

// 채색 영역 바깥의 시작점
function draw_lineargradient5() {
    var brush = ctx.createLinearGradient(100, 10, 200, 10);
    brush.addColorStop(0, "yellow");
    brush.addColorStop(1, "red");
    ctx.fillStyle = brush;
    ctx.fillRect(10, 10, 300, 80);

    var brush = ctx.createLinearGradient(0, 110, 400, 110);
    brush.addColorStop(0, "yellow");
    brush.addColorStop(1, "red");
    ctx.fillStyle = brush;
    ctx.fillRect(10, 110, 300, 80);
}

// 원형 그래디언트
function draw_radialgradient() {
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, 2 * Math.PI, true);
    var brush = ctx.createRadialGradient(100, 100, 0, 100, 100, 80);
    brush.addColorStop(0, "white");
    brush.addColorStop(1, "black");
    ctx.fillStyle = brush;
    ctx.fill();
}

// 중심을 약간 위로
function draw_radialgradient2() {
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, 2 * Math.PI, true);
    var brush = ctx.createRadialGradient(70, 70, 0, 100, 100, 80);
    brush.addColorStop(0, "white");
    brush.addColorStop(1, "black");
    ctx.fillStyle = brush;
    ctx.fill();
}

// 중심과 바깥원 이동하기
function draw_radialgradient3() {
    ctx.beginPath();
    ctx.arc(100, 100, 80, 0, 2 * Math.PI, true);
    var brush = ctx.createRadialGradient(70, 70, 0, 70, 70, 80);
    brush.addColorStop(0, "white");
    brush.addColorStop(1, "black");
    ctx.fillStyle = brush;
    ctx.fill();
}