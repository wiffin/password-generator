// when generate button is pressed window prompts start
var start = document.getElementById("generate").addEventListener("click", function () {
    var randomizer = [];

    // first prompt is how many characters you want, store this value as password length
    var passwordLength = prompt("how long do you want the password?")
    if (passwordLength > 128 || passwordLength < 1) {
        window.alert("you can't use this value try something between 1 and 128")
        start()
    }
    console.log(passwordLength);

    // next 4 are (uppercase, lowercase, numbers, symbols) if aswered true add to final array or else leave it out
    var uppercase = window.confirm("Do you want uppercase letters in the password?")
    if (uppercase === true) {
        console.log(uppercase)
        randomizer.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z")
    }

    var lowercase = window.confirm("Do you want lowercase letters in the password?")
    if (lowercase === true) {
        console.log(lowercase)
        randomizer.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")
    }

    var symbols = window.confirm("Do you want symbols in the password?")
    if (symbols === true) {
        console.log(symbols)
        randomizer.push("!", "@", "#", "$", "%", "^", "&", "*", "_")
    }

    var numbers = window.confirm("Do you want numbers in the password?")
    if (numbers === true) {
        console.log(numbers)
        randomizer.push("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
    }

    // loop through final array and pick "password.length" value amount at random
    console.log(randomizer)
    var newPassword = randomizer.sort(() => Math.random() - Math.random() ).slice(0, passwordLength)

    var finalPassword = newPassword.join('')

    // return randomized password to the empty div
    document.getElementById("password").innerHTML = finalPassword
});
