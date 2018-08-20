var input="";
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
        input="";
        displayOnScreen(content);
    }
    catch(error){
        input="";
        displayOnScreen("Error: Invalid Syntax");
    }  
}
function showResult(e) {
    debugger;
    if (e.keyCode == 13) {
        input = document.getElementById("screen").value;
        try {
            content = eval(input);
            input = "";
            displayOnScreen(content);
        }
        catch (error) {
            input = "";
            displayOnScreen("Error: Invalid Syntax");
        }
    }  
}