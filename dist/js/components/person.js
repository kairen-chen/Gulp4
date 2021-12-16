"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expertise = _interopRequireDefault(require("./expertise.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Person = /*#__PURE__*/function () {
  function Person(name, age, something) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
    this.something = something;
  }

  _createClass(Person, [{
    key: "getInfo",
    value: function getInfo() {
      var expertise = new _expertise.default(this.something);
      return "".concat(this.name, " is ").concat(this.age, " year old \n \u5C08\u9577: ").concat(expertise.getInfo());
    }
  }]);

  return Person;
}();

var _default = Person;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJqcy9jb21wb25lbnRzL3BlcnNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHBlcnRpc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2V4cGVydGlzZS5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxudmFyIFBlcnNvbiA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFBlcnNvbihuYW1lLCBhZ2UsIHNvbWV0aGluZykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQZXJzb24pO1xuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICB0aGlzLnNvbWV0aGluZyA9IHNvbWV0aGluZztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQZXJzb24sIFt7XG4gICAga2V5OiBcImdldEluZm9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5mbygpIHtcbiAgICAgIHZhciBleHBlcnRpc2UgPSBuZXcgX2V4cGVydGlzZS5kZWZhdWx0KHRoaXMuc29tZXRoaW5nKTtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh0aGlzLm5hbWUsIFwiIGlzIFwiKS5jb25jYXQodGhpcy5hZ2UsIFwiIHllYXIgb2xkIFxcbiBcXHU1QzA4XFx1OTU3NzogXCIpLmNvbmNhdChleHBlcnRpc2UuZ2V0SW5mbygpKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGVyc29uO1xufSgpO1xuXG52YXIgX2RlZmF1bHQgPSBQZXJzb247XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwiZmlsZSI6ImpzL2NvbXBvbmVudHMvcGVyc29uLmpzIn0=
