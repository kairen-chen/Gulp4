!function o(r,a,i){function u(n,e){if(!a[n]){if(!r[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(c)return c(n,!0);throw(t=new Error("Cannot find module '"+n+"'")).code="MODULE_NOT_FOUND",t}t=a[n]={exports:{}},r[n][0].call(t.exports,function(e){return u(r[n][1][e]||e)},t,t.exports,o,r,a,i)}return a[n].exports}for(var c="function"==typeof require&&require,e=0;e<i.length;e++)u(i[e]);return u}({1:[function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.something=e}var e,t,o;return e=n,(t=[{key:"getInfo",value:function(){return"".concat(this.something)}}])&&r(e.prototype,t),o&&r(e,o),n}();t.default=o},{}],2:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=e("./expertise.js"))&&o.__esModule?o:{default:o};function a(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var i=function(){function o(e,n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,o),this.name=e,this.age=n,this.something=t}var e,n,t;return e=o,(n=[{key:"getInfo",value:function(){var e=new r.default(this.something);return"".concat(this.name," is ").concat(this.age," year old \n 專長: ").concat(e.getInfo())}}])&&a(e.prototype,n),t&&a(e,t),o}();t.default=i},{"./expertise.js":1}],3:[function(e,n,t){"use strict";var o;var r=new((o=e("./components/person.js"))&&o.__esModule?o:{default:o}).default("Hello! Guys",23,"sleep , appreciate the movie");console.log(r.getInfo());console.log(10+6),document.querySelector("header span").textContent="".concat(r.name)},{"./components/person.js":2}]},{},[3]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgRXhwZXJ0aXNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRXhwZXJ0aXNlKHNvbWV0aGluZykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFeHBlcnRpc2UpO1xuXG4gICAgdGhpcy5zb21ldGhpbmcgPSBzb21ldGhpbmc7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRXhwZXJ0aXNlLCBbe1xuICAgIGtleTogXCJnZXRJbmZvXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEluZm8oKSB7XG4gICAgICByZXR1cm4gXCJcIi5jb25jYXQodGhpcy5zb21ldGhpbmcpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFeHBlcnRpc2U7XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IEV4cGVydGlzZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG59LHt9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4cGVydGlzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZXhwZXJ0aXNlLmpzXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG52YXIgUGVyc29uID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUGVyc29uKG5hbWUsIGFnZSwgc29tZXRoaW5nKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBlcnNvbik7XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYWdlID0gYWdlO1xuICAgIHRoaXMuc29tZXRoaW5nID0gc29tZXRoaW5nO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFBlcnNvbiwgW3tcbiAgICBrZXk6IFwiZ2V0SW5mb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbmZvKCkge1xuICAgICAgdmFyIGV4cGVydGlzZSA9IG5ldyBfZXhwZXJ0aXNlLmRlZmF1bHQodGhpcy5zb21ldGhpbmcpO1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMubmFtZSwgXCIgaXMgXCIpLmNvbmNhdCh0aGlzLmFnZSwgXCIgeWVhciBvbGQgXFxuIFxcdTVDMDhcXHU5NTc3OiBcIikuY29uY2F0KGV4cGVydGlzZS5nZXRJbmZvKCkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQZXJzb247XG59KCk7XG5cbnZhciBfZGVmYXVsdCA9IFBlcnNvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG59LHtcIi4vZXhwZXJ0aXNlLmpzXCI6MX1dLDM6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfcGVyc29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3BlcnNvbi5qc1wiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzYXlIZWxsbyA9IG5ldyBfcGVyc29uLmRlZmF1bHQoXCJIZWxsbyEgR3V5c1wiLCAyMywgXCJzbGVlcCAsIGFwcHJlY2lhdGUgdGhlIG1vdmllXCIpO1xuY29uc29sZS5sb2coc2F5SGVsbG8uZ2V0SW5mbygpKTtcblxudmFyIGNhbGN1bGF0ZSA9IGZ1bmN0aW9uIGNhbGN1bGF0ZShhLCBiKSB7XG4gIHJldHVybiBhICsgYjtcbn07XG5cbmNvbnNvbGUubG9nKGNhbGN1bGF0ZSgxMCwgNikpO1xudmFyIHNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyIHNwYW5cIik7XG5zcGFuLnRleHRDb250ZW50ID0gXCJcIi5jb25jYXQoc2F5SGVsbG8ubmFtZSk7XG5cbn0se1wiLi9jb21wb25lbnRzL3BlcnNvbi5qc1wiOjJ9XX0se30sWzNdKTtcbiJdLCJuYW1lcyI6WyJyIiwiZSIsIm4iLCJ0IiwibyIsImkiLCJmIiwiYyIsInJlcXVpcmUiLCJ1IiwiYSIsIkVycm9yIiwiY29kZSIsInAiLCJleHBvcnRzIiwiY2FsbCIsImxlbmd0aCIsIjEiLCJtb2R1bGUiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwidmFsdWUiLCJkZWZhdWx0IiwiRXhwZXJ0aXNlIiwic29tZXRoaW5nIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIlR5cGVFcnJvciIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJjb25jYXQiLCJwcm90b3R5cGUiLCIyIiwib2JqIiwiX2V4cGVydGlzZSIsIl9fZXNNb2R1bGUiLCJQZXJzb24iLCJuYW1lIiwiYWdlIiwiZXhwZXJ0aXNlIiwiZ2V0SW5mbyIsIi4vZXhwZXJ0aXNlLmpzIiwiMyIsInNheUhlbGxvIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiLi9jb21wb25lbnRzL3BlcnNvbi5qcyJdLCJtYXBwaW5ncyI6IkNBQVksU0FBU0EsRUFBRUMsRUFBRUMsRUFBRUMsR0FBRyxTQUFTQyxFQUFFQyxFQUFFQyxHQUFHLElBQUlKLEVBQUVHLEdBQUcsQ0FBQyxJQUFJSixFQUFFSSxHQUFHLENBQUMsSUFBSUUsRUFBRSxtQkFBbUJDLFNBQVNBLFFBQVEsSUFBSUYsR0FBR0MsRUFBRSxPQUFPQSxFQUFFRixHQUFFLEdBQUksR0FBR0ksRUFBRSxPQUFPQSxFQUFFSixHQUFFLEdBQWtELE1BQTFDSyxFQUFFLElBQUlDLE1BQU0sdUJBQXVCTixFQUFFLE1BQWFPLEtBQUssbUJBQW1CRixFQUFNRyxFQUFFWCxFQUFFRyxHQUFHLENBQUNTLFFBQVEsSUFBSWIsRUFBRUksR0FBRyxHQUFHVSxLQUFLRixFQUFFQyxRQUFRLFNBQVNkLEdBQW9CLE9BQU9JLEVBQWxCSCxFQUFFSSxHQUFHLEdBQUdMLElBQWVBLElBQUlhLEVBQUVBLEVBQUVDLFFBQVFkLEVBQUVDLEVBQUVDLEVBQUVDLEdBQUcsT0FBT0QsRUFBRUcsR0FBR1MsUUFBUSxJQUFJLElBQUlMLEVBQUUsbUJBQW1CRCxTQUFTQSxRQUFRSCxFQUFFLEVBQUVBLEVBQUVGLEVBQUVhLE9BQU9YLElBQUlELEVBQUVELEVBQUVFLElBQUksT0FBT0QsRUFBN2IsQ0FBNGMsQ0FBQ2EsRUFBRSxDQUFDLFNBQVNULEVBQVFVLEVBQU9KLGdCQVV4ZSxTQUFTSyxFQUFrQkMsRUFBUUMsR0FBUyxJQUFLLElBQUloQixFQUFJLEVBQUdBLEVBQUlnQixFQUFNTCxPQUFRWCxJQUFLLENBQUUsSUFBSWlCLEVBQWFELEVBQU1oQixHQUFJaUIsRUFBV0MsV0FBYUQsRUFBV0MsYUFBYyxFQUFPRCxFQUFXRSxjQUFlLEVBQVUsVUFBV0YsSUFBWUEsRUFBV0csVUFBVyxHQUFNQyxPQUFPQyxlQUFlUCxFQUFRRSxFQUFXTSxJQUFLTixJQVA3U0ksT0FBT0MsZUFBZWIsRUFBUyxhQUFjLENBQzNDZSxPQUFPLElBRVRmLEVBQVFnQixhQUFVLEVBUWxCLElBQUlDLEVBQXlCLFdBQzNCLFNBQVNBLEVBQVVDLElBUHJCLFNBQXlCQyxFQUFVQyxHQUFlLEtBQU1ELGFBQW9CQyxHQUFnQixNQUFNLElBQUlDLFVBQVUscUNBUTVHQyxDQUFnQkMsS0FBTU4sR0FFdEJNLEtBQUtMLFVBQVlBLEVBTnJCLElBQXNCRSxFQUFhSSxFQUFZQyxFQWdCN0MsT0FoQm9CTCxFQVNQSCxHQVRvQk8sRUFTVCxDQUFDLENBQ3ZCVixJQUFLLFVBQ0xDLE1BQU8sV0FDTCxNQUFPLEdBQUdXLE9BQU9ILEtBQUtMLGdCQVprRGIsRUFBa0JlLEVBQVlPLFVBQVdILEdBQWlCQyxHQUFhcEIsRUFBa0JlLEVBQWFLLEdBZ0IzS1IsRUFkb0IsR0FrQjdCakIsRUFBUWdCLFFBRE9DLEdBR2IsSUFBSVcsRUFBRSxDQUFDLFNBQVNsQyxFQUFRVSxFQUFPSixnQkFHakNZLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUMzQ2UsT0FBTyxJQUVUZixFQUFRZ0IsYUFBVSxFQUVsQixJQUVnQ2EsRUFGNUJDLEdBRTRCRCxFQUZRbkMsRUFBUSxvQkFFS21DLEVBQUlFLFdBQWFGLEVBQU0sQ0FBRWIsUUFBU2EsR0FJdkYsU0FBU3hCLEVBQWtCQyxFQUFRQyxHQUFTLElBQUssSUFBSWhCLEVBQUksRUFBR0EsRUFBSWdCLEVBQU1MLE9BQVFYLElBQUssQ0FBRSxJQUFJaUIsRUFBYUQsRUFBTWhCLEdBQUlpQixFQUFXQyxXQUFhRCxFQUFXQyxhQUFjLEVBQU9ELEVBQVdFLGNBQWUsRUFBVSxVQUFXRixJQUFZQSxFQUFXRyxVQUFXLEdBQU1DLE9BQU9DLGVBQWVQLEVBQVFFLEVBQVdNLElBQUtOLElBSTdTLElBQUl3QixFQUFzQixXQUN4QixTQUFTQSxFQUFPQyxFQUFNQyxFQUFLaEIsSUFQN0IsU0FBeUJDLEVBQVVDLEdBQWUsS0FBTUQsYUFBb0JDLEdBQWdCLE1BQU0sSUFBSUMsVUFBVSxxQ0FRNUdDLENBQWdCQyxLQUFNUyxHQUV0QlQsS0FBS1UsS0FBT0EsRUFDWlYsS0FBS1csSUFBTUEsRUFDWFgsS0FBS0wsVUFBWUEsRUFSckIsSUFBc0JFLEVBQWFJLEVBQVlDLEVBbUI3QyxPQW5Cb0JMLEVBV1BZLEdBWG9CUixFQVdaLENBQUMsQ0FDcEJWLElBQUssVUFDTEMsTUFBTyxXQUNMLElBQUlvQixFQUFZLElBQUlMLEVBQVdkLFFBQVFPLEtBQUtMLFdBQzVDLE1BQU8sR0FBR1EsT0FBT0gsS0FBS1UsS0FBTSxRQUFRUCxPQUFPSCxLQUFLVyxJQUFLLHFCQUErQlIsT0FBT1MsRUFBVUMsZ0JBZjdCL0IsRUFBa0JlLEVBQVlPLFVBQVdILEdBQWlCQyxHQUFhcEIsRUFBa0JlLEVBQWFLLEdBbUIzS08sRUFqQmlCLEdBcUIxQmhDLEVBQVFnQixRQURPZ0IsR0FHYixDQUFDSyxpQkFBaUIsSUFBSUMsRUFBRSxDQUFDLFNBQVM1QyxFQUFRVSxFQUFPSixnQkFHbkQsSUFFZ0M2QixFQUVoQyxJQUFJVSxFQUFXLEtBRmlCVixFQUZLbkMsRUFBUSw0QkFFUW1DLEVBQUlFLFdBQWFGLEVBQU0sQ0FBRWIsUUFBU2EsSUFFNURiLFFBQVEsY0FBZSxHQUFJLGdDQUN0RHdCLFFBQVFDLElBQUlGLEVBQVNILFdBTXJCSSxRQUFRQyxJQUFjLEdBQUksR0FDZkMsU0FBU0MsY0FBYyxlQUM3QkMsWUFBYyxHQUFHbEIsT0FBT2EsRUFBU04sT0FFcEMsQ0FBQ1kseUJBQXlCLEtBQUssR0FBRyxDQUFDIn0=
