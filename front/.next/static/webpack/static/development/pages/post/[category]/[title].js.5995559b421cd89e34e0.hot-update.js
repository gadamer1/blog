webpackHotUpdate("static\\development\\pages\\post\\[category]\\[title].js",{

/***/ "./Components/CustomMarkdown.tsx":
/*!***************************************!*\
  !*** ./Components/CustomMarkdown.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_MakePosts_CodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/MakePosts/CodeBlock */ "./Components/admin/MakePosts/CodeBlock.js");
var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\CustomMarkdown.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function CustomLink(props) {
  console.log(props.children);
  return __jsx("a", {
    href: props.href,
    style: {
      textDecoration: "none",
      color: "cadetblue"
    },
    key: props.nodeKey,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.children);
}

var CustomMarkdown = function CustomMarkdown(_ref) {
  var source = _ref.source;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: source,
    renderers: {
      code: _admin_MakePosts_CodeBlock__WEBPACK_IMPORTED_MODULE_2__["default"],
      link: CustomLink
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomMarkdown);

/***/ })

})
//# sourceMappingURL=[title].js.5995559b421cd89e34e0.hot-update.js.map