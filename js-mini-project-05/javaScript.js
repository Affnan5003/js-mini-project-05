const passwordInput = document.getElementById("Password");
const length = 12;

const uppertCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const allCharacters = uppertCase + lowerCase + numbers + symbols;

function generatePassword() {
    let password = "";
    password += uppertCase[Math.floor(Math.random() * uppertCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    passwordInput.value = password;
}

function copyPassword() {
    passwordInput.select();
    document.execCommand("copy");
}