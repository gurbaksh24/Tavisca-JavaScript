function validateOnSubmit() {
    debugger;
    if (firstNameValidate() == true && lastNameValidate() == true && phoneValidate() == true && emailValidate() == true && genderValidate() == true) {
        return true;
    }
    return false;
}
function firstNameValidate() {
    var firstName = document.getElementById("firstName");
    if (firstName.value == null || firstName.value == "") {
        document.getElementById("errorFname").innerHTML = "First Name can't be blank";
        firstName.style.border="2px solid #FF0000";
        return false;
    }
    else {
        var regex = /^[A-Za-z]+$/;
        if (regex.test(firstName.value) == false) {
            document.getElementById("errorFname").innerHTML = "Only Alphabets are allowed";
            return false;
        }
    }
    document.getElementById("errorFname").innerHTML = "";
    firstName.style.border="1px solid #808080";
    return true;
}
function lastNameValidate() {
    var lastName = document.getElementById("lastName");
    if (lastName.value == null || lastName.value == "") {
        document.getElementById("errorFname").innerHTML = "";
        lastName.style.border="1px solid #808080";
        return true;
    }
    var regex = /^[A-Za-z]+$/;
    if (regex.test(lastName.value) == false) {
        document.getElementById("errorLname").innerHTML = "Only Alphabets are allowed";
        lastName.style.border="2px solid #FF0000";
        return false;
    }
    document.getElementById("errorLname").innerHTML = "";
    lastName.style.border="1px solid #808080";
    return true;
}
function phoneValidate() {
    var phoneNumber = document.getElementById("phoneNumber");
    if (phoneNumber.value == null || phoneNumber.value == "") {
        document.getElementById("errorPno").innerHTML = "Phone Number can't be blank";
        phoneNumber.style.border="2px solid #FF0000";
        return false;
    }
    var regex = /^[0-9]+$/;
    if (regex.test(phoneNumber.value) == false) {
        document.getElementById("errorPno").innerHTML = "Only Numbers are allowed";
        phoneNumber.style.border="2px solid #FF0000";
        return false;
    }
    if (phoneNumber.value.length != 10) {
        document.getElementById("errorPno").innerHTML = "Phone Number must be of 10 digits";
        phoneNumber.style.border="2px solid #FF0000";
        return false;
    }
    document.getElementById("errorPno").innerHTML = "";
    phoneNumber.style.border="1px solid #808080";
    return true;
}
function emailValidate() {
    var email = document.getElementById("email");
    if (email.value == null || email.value == "") {
        document.getElementById("errorEmail").innerHTML = "Email can't be blank";
        email.style.border="2px solid #FF0000";
        return false;
    }
    else {
        var regex = /^([A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4})/igm;
        if (regex.test(email.value) == false) {
            document.getElementById("errorEmail").innerHTML = "Enter a valid email";
            email.style.border="2px solid #FF0000";
            return false;
        }
    }
    document.getElementById("errorEmail").innerHTML = "";
    email.style.border="1px solid #808080";
    return true;
}
function genderValidate() {
    var gender = document.getElementsByName("gender");
    if (gender[0].checked == false && gender[1].checked == false && gender[2].checked == false) {
        document.getElementById("errorGender").innerHTML = "Please choose your gender";
        return false;
    }
    document.getElementById("errorGender").innerHTML = "";
    return true;
}