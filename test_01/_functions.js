var GuGuDan = num => {
    for(var i = 1; i<10; i++){
        document.write(num + " x " + i + " = " + num*i + "<p>");
    }
}

// stack
class _Stack{
    constructor(){
        this.top = -1;
        this._array = new Array;
    }

    // 값을 넣으면 스택이 쌓인다.
    push(num){
        this._array.unshift(num);

        this.top += 1;
        
    };

    pop(){
        if(top > -1){
            this.top += -1;
            this._array.shift(num);
        }
    };

    reset(){
        this._array = new Array();
        this.top = -1;
    }

    display(){
        console.log(this._array + "top: " + top);
    }

    


}

// 테트리스 게임을 만들고 싶음
// 

class _Block{
    constructor(name){
        this.name = name; 
    }
}

function allowDrop(ev){
    ev.preventDefault();
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


