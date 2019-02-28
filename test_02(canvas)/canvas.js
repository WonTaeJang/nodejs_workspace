var pos = {
    drawable: false,
    x: -1,
    y: -1
};

window.onload = function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    canvas.addEventListener("mousedown",    listener);
    canvas.addEventListener("mousemove",    listener);
    canvas.addEventListener("mouseup",      listener);
    canvas.addEventListener("mouseout",     listener);
}

function listener(event){
    switch(event.type){
        case "mousedown":
            initDraw(event);    // 클릭했을 떄 버튼을 누른 순간 down이벤트가 발생하고, moveTo()를 이용하여 해당좌표로 pos를 변경시켜준다.
            break;
        case "mousemove":
            if(pos.drawable)
                draw(event);    // down상태에서 이동을 하면 move이벤트가 발생하고, lineTo()를 이용해서 라인을 그려준다.
            break;
        case "mouseout":
        case "mouseup":
            finishDraw();       // 마우스가 캔버스에서 벗어나면 out이벤트, 버튼을 떼는 순간 up 이벤트가 발생하며, 그리기를 중지한다.
            break;
    }
}

function initDraw(event){
    ctx.beginPath();
    pos.drawable = true;
    var coors = getPosition(event);
    pos.X = coors.X;
    pos.Y = coors.Y;
    ctx.moveTo(pos.X, pos.Y);
}

function draw(canvas){
    var coors = getPosition(event);
    ctx.lineTo(coors.X, coors.Y);

    pos.X = coors.X;
    pos.Y = coors.Y;

    ctx.stroke();
}

function finishDraw(){
    pos.drawable = false;
    pos.X = -1;
    pos.Y = -1;
}

function getPosition(event){
    var x= event.pageX - canvas.offsetLeft;
    var y= event.pageY - canvas.offsetTop;
    return {X: x, Y:y};
}