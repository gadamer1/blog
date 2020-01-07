webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./Layouts/Header/Auth.tsx":
/*!*********************************!*\
  !*** ./Layouts/Header/Auth.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/token */ "./utils/token.js");
/* harmony import */ var _reducers_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/user/actions */ "./reducers/user/actions.ts");
var _jsxFileName = "D:\\webdev\\web_blog\\front\\Layouts\\Header\\Auth.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Auth = function Auth() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user.metaStates;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user.me;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _onClickLogout = function _onClickLogout() {
    Object(_utils_token__WEBPACK_IMPORTED_MODULE_3__["JWTlogout"])();
    dispatch({
      type: _reducers_user_actions__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_REQUEST"]
    });
  };

  if (isLoggedIn) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, user && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "\uBC18\uAC11\uC2B5\uB2C8\uB2E4 ", user.nickname, "\uB2D8"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: "inherit",
      href: "/profile/".concat(user.nickname),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "\uD504\uB85C\uD544")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: "inherit",
      onClick: _onClickLogout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "\uB85C\uADF8\uC544\uC6C3")), user.admin && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: "inherit",
      href: "/admin/console",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "\uCF58\uC194")));
  } else {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: "inherit",
      href: "/login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "\uB85C\uADF8\uC778")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      color: "inherit",
      href: "/signup",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "\uD68C\uC6D0 \uAC00\uC785")));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ })

})
//# sourceMappingURL=_app.js.b77846390ba397296f59.hot-update.js.map