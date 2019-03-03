 // drawline 함수정의
function drawline(sx, sy, ex, ey){
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex,ey);
    ctx.stroke();
}

function draw_closePath(num){
    ctx.beginPath();
    ctx.moveTo(150,10);
    ctx.lineTo(250,150);
    ctx.lineTo(50,150);
    ctx.closePath();
    if(num == 1){ctx.stroke();}
    else if(num == 2){ctx.fill();}
}

// 분리된 두개의 사각형
function draw_pathrect(){
    ctx.beginPath();
    ctx.rect(10,10,100,80);
    ctx.stroke();

    ctx.beginPath();
    ctx.rect(150,10,100,80);
    ctx.fill();
}

//원호 그리기
function draw_arc(){
    ctx.beginPath();
    ctx.arc(100,100,70,0*Math.PI / 180, 120 * Math.PI / 180, false);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(300,100,70,0*Math.PI / 180, 120 * Math.PI / 180, true);
    ctx.stroke();
}

//연결된 원호
function draw_arc2(){
    ctx.beginPath();
    ctx.arc(100,100,70,0*Math.PI / 180, 120 * Math.PI / 180, false);
    ctx.arc(300,100,70,0*Math.PI / 180, 120 * Math.PI / 180, true);
    ctx.stroke();
}

// 파이, 부채꼴 그리기
function draw_pie(){
    ctx.beginPath();
    ctx.arc(100,100,70,0*Math.PI/180, 120*Math.PI/180);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(300,100);
    ctx.arc(300,100,70,0*Math.PI/180, 120*Math.PI/180);
    ctx.fill();
}

// 원 그리기
function draw_circle(){
    ctx.beginPath();
    ctx.arc(200,100,100,0, 2*Math.PI);  // x,y,r
    ctx.stroke();
}