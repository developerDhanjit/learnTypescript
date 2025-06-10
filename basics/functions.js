"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
var result = addTwo(2);
function toUpperCase(text) {
    return text.toUpperCase();
}
var dhanjit = toUpperCase("Dhanjit");
function signUpUser(name, email, password) {
    return "".concat(name.toUpperCase(), " with ").concat(email.toLowerCase(), " signed in with password ").concat(password.toExponential(1));
}
var newUser = signUpUser("dhanjit", "dhanjit@dhanjit.com", 109);
var loginUser = function (username, password, isPaid) {
    if (username === void 0) { username = "unknown user"; }
    if (password === void 0) { password = 111; }
    if (isPaid === void 0) { isPaid = true; }
};
var loggedInUser = loginUser("dhanjit", 121);
// console.log(newUser.toUpperCase())
var sayHello = function (s) {
    return "hello";
};
var response = sayHello("");
console.log(response);
