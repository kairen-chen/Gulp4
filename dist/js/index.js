"use strict";

var _person = _interopRequireDefault(require("./components/person.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sayHello = new _person.default("Hello! Guys", 23, "sleep , appreciate the movie");
console.log(sayHello.getInfo());

var calculate = function calculate(a, b) {
  return a + b;
};

console.log(calculate(10, 6));
var span = document.querySelector("header span");
span.textContent = "".concat(sayHello.name);
console.log(process.env.test);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9wZXJzb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvcGVyc29uLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHNheUhlbGxvID0gbmV3IF9wZXJzb24uZGVmYXVsdChcIkhlbGxvISBHdXlzXCIsIDIzLCBcInNsZWVwICwgYXBwcmVjaWF0ZSB0aGUgbW92aWVcIik7XG5jb25zb2xlLmxvZyhzYXlIZWxsby5nZXRJbmZvKCkpO1xuXG52YXIgY2FsY3VsYXRlID0gZnVuY3Rpb24gY2FsY3VsYXRlKGEsIGIpIHtcbiAgcmV0dXJuIGEgKyBiO1xufTtcblxuY29uc29sZS5sb2coY2FsY3VsYXRlKDEwLCA2KSk7XG52YXIgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIgc3BhblwiKTtcbnNwYW4udGV4dENvbnRlbnQgPSBcIlwiLmNvbmNhdChzYXlIZWxsby5uYW1lKTtcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52LnRlc3QpOyJdLCJmaWxlIjoianMvaW5kZXguanMifQ==
