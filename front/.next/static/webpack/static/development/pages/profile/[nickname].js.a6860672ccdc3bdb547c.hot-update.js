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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserInfo */ "./Components/profile/UserInfo.tsx");
/* harmony import */ var _UserPostList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UserPostList */ "./Components/profile/UserPostList.tsx");
var _jsxFileName = "D:\\webdev\\web_blog\\front\\Components\\profile\\ProfileContainer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ProfileContaier = function ProfileContaier() {
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_UserInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(_UserPostList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileContaier);

/***/ }),

/***/ "./Components/profile/UserInfo.tsx":
/*!*****************************************!*\
  !*** ./Components/profile/UserInfo.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "D:\\webdev\\web_blog\\front\\Components\\profile\\UserInfo.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var UserInfo = function UserInfo(_ref) {
  var user = _ref.user;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, user.nickname), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, user.email));
};

/* harmony default export */ __webpack_exports__["default"] = (UserInfo);

/***/ }),

/***/ "./Components/profile/UserPostList.tsx":
/*!*********************************************!*\
  !*** ./Components/profile/UserPostList.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
var _jsxFileName = "D:\\webdev\\web_blog\\front\\Components\\profile\\UserPostList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    }
  });
});

var UserPostList = function UserPostList(_ref) {
  var postList = _ref.postList;
  var classes = useStyles({});
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, postList.map(function (post) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
      variant: "inset",
      component: "li",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      alignItems: "flex-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItemText"], {
      primary: post.title,
      secondary: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        component: "span",
        variant: "body2",
        className: classes.inline,
        color: "textPrimary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, post.category), post.Date),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    })));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UserPostList);

/***/ }),

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

var _jsxFileName = "D:\\webdev\\web_blog\\front\\pages\\profile\\[nickname].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Profile = function Profile() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.metaStates;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  if (isLoggedIn) {
    return __jsx(_Components_profile_ProfileContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  } else {
    return __jsx(_Components_IsLoadingUser__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
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
//# sourceMappingURL=[nickname].js.a6860672ccdc3bdb547c.hot-update.js.map