webpackHotUpdate("static\\development\\pages\\profile\\[nickname].js",{

/***/ "./Components/profile/ProfileContainer.tsx":
/*!*************************************************!*\
  !*** ./Components/profile/ProfileContainer.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserInfo */ "./Components/profile/UserInfo.tsx");
/* harmony import */ var _UserPostList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserPostList */ "./Components/profile/UserPostList.tsx");
var _jsxFileName = "D:\\webdev\\web_blog\\front\\Components\\profile\\ProfileContainer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ProfileContaier = function ProfileContaier() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user.userInfo;
  }),
      user = _useSelector.user,
      postList = _useSelector.postList;

  if (user) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(_UserInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
      user: user,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), __jsx(_UserPostList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      postList: postList,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }));
  } else {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, "\uB85C\uB529\uC911");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileContaier);

/***/ })

})
//# sourceMappingURL=[nickname].js.5fdbce2493cf3f3c2159.hot-update.js.map