var createUser = function (_a) {
    var string = _a.name, _b = _a.isPaid, boolean = _b === void 0 ? false : _b;
};
var userObj = { name: "dhanjit", isPaid: true, email: "email" };
// createUser(userObj); should thorow error but doesn't ! 
var createCourse = function (userObj) {
    var id = userObj.id;
    return {
        courseName: "ts",
        price: 400,
        active: true,
        text: "Your request id ".concat(id)
    };
};
var getAdmin = function (admin) {
    var token = 'hehe';
    return "token ".concat(token);
};
var newAdmin = getAdmin({ username: "dhanjit", adminId: 121, password: "hiiii" });
console.log(newAdmin);
