$(document).ready(function () {
    
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});


// validation form
let username = document.getElementById("username");
let email = document.getElementById("email");
let project = document.getElementById("project");
let message = document.getElementById("message");
let flag = 1;

function validateFrom() {
    if (username.value == "") {
        document.getElementById("userError").innerHTML = "User Name is empty";
        flag = 0;
    } else if (username.value.length < 3) {
        document.getElementById("userError").innerHTML = "User Name require min 3 character";
        flag = 0;
    } else {
        document.getElementById("userError").innerHTML = "";
        flag = 1;
    }

    if (email.value == "") {
        document.getElementById("emailError").innerHTML = "Email is empty";
        flag = 0;
    } else {
        document.getElementById("emailError").innerHTML = "";
        flag = 1;
    }
    if (phone.value == "") {
        document.getElementById("phoneError").innerHTML = "Number is empty";
        flag = 0;
    } else {
        document.getElementById("phoneError").innerHTML = "";
        flag = 1;
    }
    if (message.value == "") {
        document.getElementById("messageError").innerHTML = "Write a Message";
        flag = 0;
    } else {
        document.getElementById("messageError").innerHTML = "";
        flag = 1;
    }

    if (flag) {
        return true;
    } else {
        return false;
    }
}
