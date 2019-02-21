var GuGuDan = num => {
    for(var i = 1; i<10; i++){
        document.write(num + " x " + i + " = " + num*i + "<p>");
    }
}

// stack
class _Stack{
    top = 1;

    add(int) {
        return top + int;
    };
}