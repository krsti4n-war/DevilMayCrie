let errorBox = document.getElementById('error-msg');

let btn = document.getElementById('submit');
btn.addEventListener('click', (e) => {
    validateForm(e)
})

function validateForm(event) {
    let name = document.getElementById('input-name').value;
    let genderMale = document.getElementById('gender-male').checked;
    let genderFemale = document.getElementById('gender-female').checked;
    let email = document.getElementById('input-email').value;
    let address = document.getElementById('input-address').value;
    let password = document.getElementById('input-password').value;
    let confirmPassword = document.getElementById('input-confirm-password').value;

    let agree = document.getElementById('user-agree').checked;
    $('.error-box').hide();

    if (!validateName(name)) {
        event.preventDefault();
        $('.error-box').show();
        return
    }

    if (!validateGender(genderMale, genderFemale)) {
        event.preventDefault();
        $('.error-box').show();
        return
    }

    if (!validateEmail(email)) {
        event.preventDefault();
        $('.error-box').show();
        return
    }

    if (!validateAddress(address)) {
        event.preventDefault();
        $('.error-box').show();
        return
    }

    if (!validatePassword(password, confirmPassword)) {
        event.preventDefault();
        $('.error-box').show();
        return
    }

    if (!validateAgree(agree)) {
        event.preventDefault();
        $('.error-box').show();
        return
    }

    $('.success-box').show();
    errorBox.innerHTML = ""
}

function validateName(name) {
    if (name == "") {
        errorBox.innerHTML = "[!] Name must be filled!"
        return false
    }

    if (name.length <= 5) {
        errorBox.innerHTML = "[!] Name must be more than 5 characters!"
        return false
    }

    for (let i = 0; i < name.length; i++) {
        if ((!(name.charAt(i) >= 'A' && name.charAt(i) <= 'Z') && !(name.charAt(i) >= 'a' && name.charAt(i) <= 'z')) &&
            !(name.charAt(i) == ' ')) {
            errorBox.innerHTML = "[!] Name must be alphabet!"
            return false
        }
    }

    return true
}

function validateGender(genderMale, genderFemale) {
    if (!genderMale && !genderFemale) {
        errorBox.innerHTML = "[!] Gender must be checked!"
        return false
    }
    return true
}

function validateEmail(email) {
    if (email == "") {
        errorBox.innerHTML = "[!] Email must be filled!"
        return false
    }

    if (!(email.endsWith('@gmail.com'))) {
        errorBox.innerHTML = "[!] Email is Invalid!"
        return false
    }

    return true
}

function validateAddress(address) {
    if (address == "") {
        errorBox.innerHTML = "[!] Address must be filled!"
        return false
    }

    if (address.length <= 10) {
        errorBox.innerHTML = "[!] Please input full address"
        return false
    }

    return true
}

function validatePassword(password, confirmPassword) {

    if (password == "") {
        errorBox.innerHTML = "[!] Password must be filled!"
        return false
    }

    if (password.length < 8 || password.length > 20) {
        errorBox.innerHTML = "[!] Password must between 8-20 characters!"
        return false
    }

    let cont_up_char = -1
    let cont_lw_char = -1
    let cont_sp_char = -1
    var specialCharacters = "!@#$%^&*,()-+";
    for (var i = 0; i < password.length; i++) {
        if (password.charAt(i) >= 'A' && password.charAt(i) <= 'Z') {
            cont_up_char = 1
        }

        if (password.charAt(i) >= 'a' && password.charAt(i) <= 'z') {
            cont_lw_char = 1
        }
        if (specialCharacters.indexOf(password.charAt(i)) != -1) {
            cont_sp_char = 1
        }
    }

    if (cont_up_char == -1) {
        errorBox.innerHTML = "[!] Password must be contain upper case!"
        return false
    }

    if (cont_lw_char == -1) {
        errorBox.innerHTML = "[!] Password must be contain lower case!"
        return false
    }

    if (cont_sp_char == -1) {
        errorBox.innerHTML = "[!] Password must be contain special character!"
        return false
    }

    if (confirmPassword == "") {
        errorBox.innerHTML = "[!] Confirm Password must be filled!"
        return false
    }

    if (password != confirmPassword) {
        errorBox.innerHTML = "[!] Password not match!"
        return false
    }

    return true
}

function validateAgree(agree) {
    if (!agree) {
        errorBox.innerHTML = "[!] Agree checkbox must be checked!"
        return false
    }

    return true
}