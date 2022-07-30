"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = 'Hello World';
console.log(message);
var x = 20;
var y = 20;
var isBeginner = true;
console.log(isBeginner);
var total = 40;
console.log(total);
var name = 'Denny';
var sentence = "My name is ".concat(name, "\nI am a beginner in TypeScript");
console.log(sentence);
var list1 = [1, 3, 5, 7];
console.log(list1);
var list2 = [2, 4, 6, 8];
console.log(list2);
var person1 = ['John', 22];
console.log(person1);
var car;
(function (car) {
    car[car["BMW"] = 0] = "BMW";
    car[car["BENZ"] = 1] = "BENZ";
    car[car["AUDI"] = 2] = "AUDI";
})(car || (car = {}));
;
var c = car.BENZ;
console.log(c);
var a; //haven't specified type so inferred it to be of type any.
a = 10;
a = true;
var b = 20; //type inference taking place.
var multiType;
multiType = 20;
multiType = 'Chris';
function add(num1, num2, num3) {
    if (num3)
        return num1 + num2 + num3;
    else
        return num1 + num2;
}
console.log(add(10, 10));
console.log(add(5, 10, 15));
function name_age(person) {
    console.log("".concat(person.name, " ").concat(person.age));
}
var p = {
    name: 'Bruce Wayne',
    age: 28
};
name_age(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.empname = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.empname));
    };
    return Employee;
}());
var emp1 = new Employee('Rahul');
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managername) {
        return _super.call(this, managername) || this;
    }
    Manager.prototype.delegate = function () {
        console.log('Manager delegating tasks');
    };
    return Manager;
}(Employee));
var m1 = new Manager('Ramesh');
m1.delegate();
m1.greet();
