var input="";
var hist="";
function displayOnScreen(content) {
    input += content;
    document.getElementById("screen").value=input;
}
function clearScreen() {
    input="";
    displayOnScreen("");
}
function showResult() {
    input = document.getElementById("screen").value;
    try{
        content = eval(input);
        hist = hist + input + " = " + content + "<br>";
        input="";
        displayOnScreen(content);
        input="";
    }
    catch(error){
        input="";
        displayOnScreen("Error: Invalid Syntax");
    }  
}
function showResultWhenEnterPress(e) {
    if (e.keyCode == 13) {
        showResult();
    }  
}
function showHistory() {
    document.getElementById("history-screen").innerHTML=hist;
}