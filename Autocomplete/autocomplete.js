var cities = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
var suggestionIndex = [];
var scrollFlag = 0;
var resetInput = 0;
var i = 0;
var j = 0;
var moveUp = 0;
var moveDown = 0;
cities = cities.sort();
function fillData(e) {
    if (resetInput == 0) {
        suggestionIndex = [];
        resetInput = 1;
    }
    if (e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 13) {
        var data = document.getElementById("city").value;
        var suggestionBox = document.getElementById("suggestions");
        var str = "<ul>";
        var flagNoData = 0;
        var flagFirstElementHover = 0;
        var j = 0;
        suggestionIndex=[];
        for (var i = 0; i < cities.length; i++) {
            if (cities[i].toUpperCase().includes(data.toUpperCase())) {
                str += "<li id='" + i + "' onclick='chooseData(this.innerHTML)' onmouseover='hoverElements(this.id)'>" + cities[i] + "</li>";
                suggestionIndex[j] = i;
                flagNoData = 1;
                j++;
            }
        }
        if (flagNoData == 1) {
            str += "</ul>";
        }
        else {
            str = "<li>No Data Found</li></ul>";
        }
        if (data == "") {
            suggestionBox.innerHTML = "";
            i = 0;
            scrollFlag = 0;
            resetInput = 0;
        }
        else {
            suggestionBox.innerHTML = str;
            document.getElementById(suggestionIndex[0]).style.backgroundColor = "#FFFFFF";
        }
    }
}
var p=5;
function chooseData(data) {
    document.getElementById("city").value = data;
    document.getElementById("suggestions").innerHTML = "";
    i = 0;
    j = 0;
    moveUp = 0;
    moveDown = 0;
}
function clearText() {
    document.getElementById("city").value = "";
    document.getElementById("suggestions").innerHTML = "";
    i = 0;
    j = 0;
    moveUp = 0;
    moveDown = 0;
}
function selectItem(evt) {
    debugger;
    if (scrollFlag == 0) {
        i = 0;
        j = 0;
        moveUp = 0;
        moveDown = 0;
        scrollFlag = 1;
    }

    i = suggestionIndex[j];
    if (evt.keyCode == 13) {
        chooseData(cities[i]);
    }
    else if (evt.keyCode == 38) {
        if (j > 0) {
            document.getElementById(i).style.backgroundColor = "#b7dacd";
            j--;
            if (moveUp < 5)
                moveUp++;
            i = suggestionIndex[j];
            document.getElementById(i).style.backgroundColor = "#FFFFFF";
            if (moveUp == moveDown)
                document.getElementById("suggestions").scrollBy(0, -22);
        }

    }
    else if (evt.keyCode == 40) {
        if (j < suggestionIndex.length - 1) {
            moveUp = 0;
            if (moveDown < 5)
                moveDown++;
            document.getElementById(i).style.backgroundColor = "#b7dacd";
            j++;
            i = suggestionIndex[j];
            document.getElementById(i).style.backgroundColor = "#FFFFFF";
            if (j >= 5)
                document.getElementById("suggestions").scrollBy(0, 22);
        }
    }
}
function clearTextOnBodyClick() {
    document.getElementById("suggestions").innerHTML = "";
}
function hoverElements(id) {
    document.getElementById(id).style.backgroundColor="#FFFFFF";
    j=id;
    for(var i=0;i<suggestionIndex.length;i++){
        if(suggestionIndex[i]!=id)
        {
            document.getElementById(suggestionIndex[i]).style.backgroundColor="#b7dacd";
        }
    }
}