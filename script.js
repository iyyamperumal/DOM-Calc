let outputScreen = document.getElementById("result");
let firstValue = 0;
function display(num) {
    outputScreen.value += num;
}

function equal() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch (err) {
        alert("Invalid Operation");
    }
}
function Clear() {
    outputScreen.value = "";
}
function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}