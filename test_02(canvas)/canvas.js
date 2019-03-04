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