webpackHotUpdate("static\\development\\pages\\_error.js",{

/***/ "./Components/Error.tsx":
/*!******************************!*\
  !*** ./Components/Error.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\Error.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Error = function Error(_ref) {
  var statusCode = _ref.statusCode;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, statusCode ? "An error ".concat(statusCode, " occurred on server") : "An error occurred on client"));
};

Error.getInitialProps = function (_ref2) {
  var res = _ref2.res,
      err = _ref2.err;
  var statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ })

})
//# sourceMappingURL=_error.js.807d5c1b3ebbf350b413.hot-update.js.map