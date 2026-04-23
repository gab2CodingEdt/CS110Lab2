
function getMajors() {
    var majors = document.getElementById("major");
    var college = document.getElementById("college").value;
    if (college == "default"){
        majors.innerHTML = "<option value=\"Select a college\">Blank</option>";
    } else if (college == "bcoe") {
        majors.innerHTML = "<option value=\"compsci\">Computer Science</option> <option value=\"compeng\">Computer Engineering</option>";
    } else if (college == "cnas") {
        majors.innerHTML = "<option value=\"biology\">Biology</option> <option value=\"chemistry\">Chemistry</option> <option value=\"mathematics\">Mathematics</option>";
    } else if (college == "chass") {
        majors.innerHTML = "<option value=\"psychology\">Psychology</option> <option value=\"sociology\">Sociology</option> <option value=\"history\">History</option>";
    } else if (college == "sob") {
        majors.innerHTML = "<option value=\"business\">Business Administration</option> <option value=\"accounting\">Accounting</option>";
    } else if (college == "spp") {
        majors.innerHTML = "<option value=\"pubpol\">Public Policy</option>";
    } else if (college == "soe") {
        majors.innerHTML = "<option value=\"education\">Education</option>";
    }
}

function resetForm() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        switch (inputs[i].type) {
            case 'text':
                inputs[i].value = '';
                break;
            case 'number':
                inputs[i].value = '';
                break;
            case 'checkbox':
                inputs[i].checked = false;
                break;
        }
    }

    var college = document.getElementById("college");
    college.selectedIndex = 0;

    getMajors();

    var major = document.getElementById("major");
    major.selectedIndex = 0;
}

function validateName(control, errormessage) {
    var error="";
    var name = /^[a-zA-Z]+$/;
    document.getElementById(control.id).nextSibling.innerHTML="";
    document.getElementById(control.id).style = "border-color: ''; border-width: '';";
    if (control.value.match(name)) {
        return error; 
    } else {
        error = errormessage;
        document.getElementById(control.id).nextSibling.innerHTML=errormessage;
        document.getElementById(control.id).focus();
        document.getElementById(control.id).style = "border-color: red; border-width: 4px;";
    }
}

function validatePhone (control, errormessage) {
    var error="";
    var phoneNumber = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    document.getElementById(control.id).nextSibling.innerHTML="";
    document.getElementById(control.id).style = "border-color: ''; border-width: '';";
    if (control.value.match(phoneNumber)) {
        return error; 
    } else {
        error = errormessage;
        document.getElementById(control.id).nextSibling.innerHTML=errormessage;
        document.getElementById(control.id).focus();
        document.getElementById(control.id).style = "border-color: red; border-width: 4px;";
    }
}

function validateGuests(control, errormessage) {
    var error="";
    document.getElementById(control.id).nextSibling.innerHTML="";
    document.getElementById(control.id).style = "border-color: ''; border-width: '';";
    if (control.value >= 1) {
        return error;
    } else {
        error = errormessage;
        document.getElementById(control.id).nextSibling.innerHTML=errormessage;
        document.getElementById(control.id).focus();
        document.getElementById(control.id).style = "border-color: red; border-width: 4px;";
    }
}

function validateEmail (control, errormessage) {
    var error="";
    document.getElementById(control.id).nextSibling.innerHTML="";
    document.getElementById(control.id).style = "border-color: ''; border-width: '';";
    if (!/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com)|(edu)|(gov)/.test(control.value) ) {
        error = errormessage;
        document.getElementById(control.id).nextSibling.innerHTML=errormessage;
        document.getElementById(control.id).focus();
        document.getElementById(control.id).style = "border-color: red; border-width: 4px;";
    }
    return error;
}

function validateBirthDate (control, errormessage) {
    var error="";
    document.getElementById(control.id).nextSibling.innerHTML="";
    document.getElementById(control.id).style = "border-color: ''; border-width: '';";

    var birthDate = new Date(control.value);

    var matches = false;

    var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    
    if (pattern.test(control.value) && !isNaN(birthDate)) {

        var today = new Date();
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        if (age >= 16) {
            matches = true;
        }
    }


    if (!matches) {
        error = errormessage;
        document.getElementById(control.id).nextSibling.innerHTML=errormessage;
        document.getElementById(control.id).focus();
        document.getElementById(control.id).style = "border-color: red; border-width: 4px;";
    }
    return error;
}

