webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/user/index.ts":
/*!********************************!*\
  !*** ./reducers/user/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./reducers/user/actions.ts");



/*INITIAL STATE */
var initialState = {
  user: null,
  loadingStates: {
    isLoging: false,
    isSigning: false
  },
  metaStates: {
    isLoggedIn: false,
    loginStautsCode: 0,
    signUpStatusCode: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_REQUEST"]:
        {
          draft.loadingStates.isLoging = true;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESS"]:
        {
          draft.loadingStates.isLoging = false;
          draft.metaStates.isLoggedIn = true;
          draft.metaStates.loginStautsCode = 200;
          draft.user = action.result;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_FAILURE"]:
        {
          draft.loadingStates.isLoging = false;
          draft.metaStates.loginStautsCode = action.errorCode;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"]:
        {
          draft.loadingStates.isSigning = true;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"]:
        {
          draft.loadingStates.isSigning = false;
          draft.metaStates.isLoggedIn = true;
          draft.user = action.payload;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"]:
        {
          draft.loadingStates.isSigning = false;
          draft.metaStates.signUpStatusCode = action.errorCode;
          break;
        }

      default:
        {
          break;
        }
    }
  });
});

/***/ })

})
//# sourceMappingURL=_app.js.f2da2c44c9146b0690e9.hot-update.js.map