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
  me: null,
  userInfo: null,
  loadingStates: {
    isLoging: false,
    isSigning: false,
    isLogouting: false,
    isLoadingUser: false
  },
  metaStates: {
    isLoggedIn: false,
    loginStautsCode: 0,
    signUpStatusCode: 0
  }
};
var mockUser = {
  nickname: "gadamer",
  emailVerified: false
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
          draft.metaStates.loginStautsCode = 200;
          draft.metaStates.isLoggedIn = true;
          draft.me = action.result.user;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOGIN_FAILURE"]:
        {
          draft.loadingStates.isLoging = false;
          draft.metaStates.loginStautsCode = action.errorCode;
          draft.metaStates.isLoggedIn = false;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"]:
        {
          draft.loadingStates.isSigning = true;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"]:
        {
          draft.loadingStates.isSigning = false;
          draft.me = action.result.user;
          draft.metaStates.isLoggedIn = true;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"]:
        {
          draft.loadingStates.isSigning = false;
          draft.metaStates.signUpStatusCode = action.errorCode;
          draft.metaStates.isLoggedIn = false;
          break;
        }
      // 로그아웃

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"]:
        {
          draft.loadingStates.isLogouting = true;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]:
        {
          draft.me = null;
          draft.loadingStates.isLogouting = false;
          draft.metaStates.isLoggedIn = false;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"]:
        {
          draft.loadingStates.isLogouting = false;
        }
      // 회원정보 가져오기

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_REQUEST"]:
        {
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_SUCCESS"]:
        {
          draft.me = action.result.user;
          draft.metaStates.isLoggedIn = true;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_FAILURE"]:
        {
          draft.metaStates.isLoggedIn = false;
          draft.me = null;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["GET_USER_BY_NICKNAME_REQUEST"]:
        {
          draft.loadingStates.isLoadingUser = true;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["GET_USER_BY_NICKNAME_SUCCESS"]:
        {
          draft.loadingStates.isLoadingUser = false; // @ts-ignore

          draft.userInfo = action.result;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["GET_USER_BY_NICKNAME_FAILURE"]:
        {
          draft.loadingStates.isLoadingUser = false;
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
//# sourceMappingURL=_app.js.e4af98930c7371908f37.hot-update.js.map