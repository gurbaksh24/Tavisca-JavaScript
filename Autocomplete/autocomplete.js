function fillData(e) {
    debugger;
    var cities = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"];
    cities=cities.sort();
    var data = document.getElementById("city").value;
    var suggestionBox = document.getElementById("suggestions");
    var str = "<ul>";
    var flag = 0;
    cities.forEach(element => {
        if (element.toUpperCase().includes(data.toUpperCase())) {
            str += "<li id='" + element + "' onclick='chooseData(this.id)' onkeydown='selectItem(event,this.innerHTML)'>" + element + "</li>";
            console.log(str);
            flag = 1;
        }
    });
    if (flag == 1)
        str += "</ul>";
    else {
        str = "<li>No Data Found</li></ul>";
    }
    if (data == "")
        suggestionBox.innerHTML = "";
    else
        suggestionBox.innerHTML = str;
}

function chooseData(data) {
    debugger;
    document.getElementById("city").value = data;
    document.getElementById("suggestions").innerHTML = "";
}
function clearText() {
    document.getElementById("city").value = "";
    document.getElementById("suggestions").innerHTML = "";
}
function selectItem(evt,data) {
    debugger;
    console.log(data);
}
function clearTextOnBodyClick() {
    debugger;
    document.getElementById("suggestions").innerHTML = "";
}