valid = [0, 0, 0, 0, 0, 0, 0];

function getMajors() {
    var majors = document.getElementById("major");
    var college = document.getElementById("college").value;
    if (college == "default"){
        majors.innerHTML = "<option value=\"Select a college\">Blank</option>";
        valid[6] = 0;
        checkValid();
    } else {
        valid[6] = 1;
        checkValid();
    }
    if (college == "bcoe") {
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

function checkValid() {
    for (var i = 0; i < 7; i++) {
        if (valid[i] != 1) {
            var submit = document.getElementById("submit");
            submit.disabled = true;
            return;
        }
    }
    var submit = document.getElementById("submit");
    submit.disabled = false;

}

function resetForm() {
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        switch (inputs[i].type) {
            case 'text':
            case 'number':
            case 'email': 
                inputs[i].value = '';
                break;
            case 'checkbox':
            case 'radio':
                inputs[i].checked = false;
                break;
        }
        inputs[i].style = "border-color: ''; border-width: '';";
        inputs[i].nextSibling.innerHTML = "";
    }
    var college = document.getElementById("college");
    college.selectedIndex = 0;

    if (typeof getMajors === 'function') {
        getMajors();
    }
    var major = document.getElementById("major");
    if (major) {
        major.selectedIndex = 0;
    }
}
function submitForm() {
    // 1. Grab the actual input DOM elements
    var fnameInput = document.getElementById("fname");
    var lnameInput = document.getElementById("lname");
    var dobInput = document.getElementById("dob");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phonenum");
    var guestInput = document.getElementById("guests");
    var college = document.getElementById("college");

    var fnameResult = validateName(fnameInput, 'Your first name must only consist of letters and cannot be empty.');
    var lnameResult = validateName(lnameInput, 'Your last name must only consist of letters and cannot be empty.');
    var dobResult = validateBirthDate(dobInput, 'You must enter a valid birth date in the form MM/DD/YYYY and be at least 16 years old.');
    var emailResult = validateEmail(emailInput, 'The phone number must consist of ten digits.');
    var phoneResult = validatePhone(phoneInput, 'The input must be a valid email.');
    var guestResult = validateGuests(guestInput, 'The number of guests must be at least 1.');

    if (fnameResult === "" && lnameResult == "" && dobResult == "" && emailResult == "" && phoneResult == "" && guestResult == "" && college.selectedIndex > 0) {
        
        // Success! Process your form data here, then reset.
        alert("Form submitted successfully!");
        resetForm();
    }
}
function validateName(control, errormessage) {
    var error="";
    var name = /^[a-zA-Z]+$/;
    document.getElementById(control.id).nextSibling.innerHTML="";
    document.getElementById(control.id).style = "border-color: ''; border-width: '';";
    if (control.value.match(name)) {
        if (control.id == "fname") {
            valid[0] = 1;
        } else {
            valid[1] = 1;
        }
        checkValid();
        return error; 
    } else {
        error = errormessage;
        document.getElementById(control.id).nextSibling.innerHTML=errormessage;
       // document.getElementById(control.id).focus();
        document.getElementById(control.id).style = "border-color: red; border-width: 4px;";
        if (control.id == "fname") {
            valid[0] = 0;
        } else {
            valid[1] = 0;
        }
        checkValid();
    }
}

function validatePhone (control, errormessage) {
    var error="";
    var phoneNumber = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    document.getElementById(control.id).nextSibling.innerHTML="";
    document.getElementById(control.id).style = "border-color: ''; border-width: '';";
    if (control.value.match(phoneNumber)) {
        valid[3] = 1;
        checkValid();
        return error; 
    } else {
        error = errormessage;
        document.getElementById(control.id).nextSibling.innerHTML=errormessage;
        //document.getElementById(control.id).focus();
        document.getElementById(control.id).style = "border-color: red; border-width: 4px;";
        valid[3] = 0;
        checkValid();
    }
}

function validateGuests(control, errormessage) {
    var error="";
    document.getElementById(control.id).nextSibling.innerHTML="";
    document.getElementById(control.id).style = "border-color: ''; border-width: '';";
    if (control.value >= 1) {
        valid[5] = 1;
        checkValid();
        return error;
    } else {
        error = errormessage;
        document.getElementById(control.id).nextSibling.innerHTML=errormessage;
        //document.getElementById(control.id).focus();
        document.getElementById(control.id).style = "border-color: red; border-width: 4px;";
        valid[5] = 0;
        checkValid();
    }
}

function validateEmail (control, errormessage) {
    var error="";
    document.getElementById(control.id).nextSibling.innerHTML="";
    document.getElementById(control.id).style = "border-color: ''; border-width: '';";
    if (!/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.(com)|(edu)|(gov)/.test(control.value) ) {
        error = errormessage;
        document.getElementById(control.id).nextSibling.innerHTML=errormessage;
       // document.getElementById(control.id).focus();
        document.getElementById(control.id).style = "border-color: red; border-width: 4px;";
        valid[4] = 0;
        checkValid();
    } else {
        valid[4] = 1;
        checkValid();
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
       // document.getElementById(control.id).focus();
        document.getElementById(control.id).style = "border-color: red; border-width: 4px;";
        valid[2] = 0;
        checkValid();
    } else {
        valid[2] = 1;
        checkValid();
    }
    return error;
}

