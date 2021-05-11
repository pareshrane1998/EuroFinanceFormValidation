/* Author: 

*/


function validate(){
    var fname = document.stud_form.firstname;
    var lname = document.stud_form.lastname;
    var position = document.stud_form.position;
    var company = document.stud_form.company;
    var companytype = document.stud_form.companytype;
    var country = document.stud_form.country;
    var email = document.stud_form.email;
    var subscribe = document.stud_form.subscribe;

    // console.log(subscribe.length);



    if(fname.value.length <= 0) {
        alert("First Name is Required !");
        fname.focus();
        return false;
    }
    if(lname.value.length <= 0) {
        alert("Last Name is Required !");
        lname.focus();
        return false;
    }
    if(position.value.length <= 0) {
        alert("position is Required !");
        position.focus();
        return false;
    }
    if(company.value.length <= 0) {
        alert("company Name is Required !");
        company.focus();
        return false;
    }
    if(companytype.value == "Company Type") {
        alert("Please select company type !");
        return false;
    }
    if(country.value == "Country") {
        alert("Please select your country !");
        return false;
    }
    if(email.value.length <= 0) {
        alert("Email is Required !");
        email.focus();
        return false;
    }


    var check = false;
    for(var i = subscribe.length -1; i >= 0; i--){
        if(subscribe[i].checked) {
            check = true;
        }
    }

    if(check == false) {
        alert("Please subscribe option !");
        return false;
    }
    return false;
}

// validate string 

function validateString(id) {
    var element = document.getElementById(id);
    var regExp = /^[a-zA-Z ]+$/;
    if(!regExp.test(element.value)) {
        alert("Please Enter Text Value.");
        element.style.border = "1px solid red"
        // element.focus();
        return false;
    }


}

// validate email
function validateEmail(id) {
    var element = document.getElementById(id);
    var regExp = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    if(!regExp.test(element.value)) {
        alert("Please Enter Valid Email Id.");
        element.style.border = "1px solid red"
        // element.focus();
        return false;
    }


}






















