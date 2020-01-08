webpackHotUpdate("static\\development\\pages\\profile\\[nickname].js",{

/***/ "./pages/profile/[nickname].tsx":
/*!**************************************!*\
  !*** ./pages/profile/[nickname].tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Components_IsLoadingUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/IsLoadingUser */ "./Components/IsLoadingUser.tsx");
/* harmony import */ var _reducers_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/user/actions */ "./reducers/user/actions.ts");
/* harmony import */ var _Components_profile_ProfileContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/profile/ProfileContainer */ "./Components/profile/ProfileContainer.tsx");

var _jsxFileName = "D:\\webdev\\blog\\front\\pages\\profile\\[nickname].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Profile = function Profile() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.loadingStates;
  }),
      isLoadingUser = _useSelector.isLoadingUser;

  if (isLoadingUser) {
    return __jsx(_Components_profile_ProfileContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  } else {
    return __jsx(_Components_IsLoadingUser__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    });
  }
};

Profile.getInitialProps = function _callee(ctx) {
  var nickname;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          nickname = ctx.query.nickname;
          ctx.store.dispatch({
            type: _reducers_user_actions__WEBPACK_IMPORTED_MODULE_4__["GET_USER_BY_NICKNAME_REQUEST"],
            payload: {
              nickname: nickname
            }
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ })

})
//# sourceMappingURL=[nickname].js.e73c2fa650d7198915cc.hot-update.js.map