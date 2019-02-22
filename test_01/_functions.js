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

    add(int) {
        return this.top + int;
    };

    // 값을 넣으면 스택이 쌓인다.
    push(num){
        this._array.unshift(num);

        console.log(this._array);
    };

    pop(){

    };

    


}