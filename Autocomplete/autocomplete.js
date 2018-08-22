function fillData(e){
    debugger;
    var cities=["Delhi","Pune","Mumbai","Bangalore","Hyderabad","Bareilly"];
    var data=document.getElementById("city").value;
    var suggestionBox=document.getElementById("suggestions");
    var str="<ul>";
    var flag=0;

    cities.forEach(element => {
        if(element.toUpperCase().includes(data.toUpperCase()))
        {
            str+="<li id='"+element+"' onclick='chooseData(this.id)' onkeydown='selectItem(event)'>"+element+"</li>";
            console.log(str);
            flag=1;
        }
    });
    if(flag==1)
        str+="</ul>";
    else
    {
        str="<li>No Data Found</li></ul>";
    }
    if(data=="")
        suggestionBox.innerHTML="";
    else
        suggestionBox.innerHTML=str;
}

function chooseData(data){
    debugger;
    document.getElementById("city").value=data;
    document.getElementById("suggestions").innerHTML="";
}
function clearText(){
    document.getElementById("city").value="";
    document.getElementById("suggestions").innerHTML="";
}
function selectItem(evt) {
    if(evt.keyCode==40) {
        document.getElementById('')
    }
}