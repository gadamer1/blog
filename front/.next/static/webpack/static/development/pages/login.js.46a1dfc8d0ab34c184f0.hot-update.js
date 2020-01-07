webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _reducers_user_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/user/actions */ "./reducers/user/actions.ts");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_Components_CircularProgressComponent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/Components/CircularProgressComponent */ "./utils/Components/CircularProgressComponent.tsx");
/* harmony import */ var _utils_validateEmailInput__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utils/validateEmailInput */ "./utils/validateEmailInput.ts");
/* harmony import */ var _Components_IsAleadyLoggedIn__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Components/IsAleadyLoggedIn */ "./Components/IsAleadyLoggedIn.tsx");
var _jsxFileName = "D:\\webdev\\web_blog\\front\\pages\\login.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















 // loading component

 // validate email



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["createStyles"])({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%",
      // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  });
});

var Login = function Login() {
  var classes = useStyles({});

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user.loadingStates;
  }),
      isLoging = _useSelector.isLoging;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user.metaStates;
  }),
      isLoggedIn = _useSelector2.isLoggedIn;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      email = _useState[0],
      setEmail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      emailError = _useState2[0],
      setEmailError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      passwordError = _useState4[0],
      setPasswordError = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (isLoggedIn) {
      next_router__WEBPACK_IMPORTED_MODULE_15___default.a.push("/");
    }
  }, [isLoggedIn]);

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    var validate = true;

    if (!Object(_utils_validateEmailInput__WEBPACK_IMPORTED_MODULE_17__["default"])(email)) {
      setEmailError("올바르지 않은 이메일 주소입니다.");
      validate = false;
    }

    if (email.trim() === "") {
      setEmailError("이메일 주소를 입력해주세요");
      validate = false;
    }

    if (password.trim() === "") {
      setPasswordError("비밀번호를 입력해주세요");
      validate = false;
    }

    if (validate) {
      dispatch({
        type: _reducers_user_actions__WEBPACK_IMPORTED_MODULE_14__["LOGIN_REQUEST"],
        payload: {
          email: email,
          password: password
        }
      });
    }
  };

  var handleEmail = function handleEmail(event) {
    if (emailError) {
      setEmailError("");
    }

    setEmail(event.target.value);
  };

  var handlePassword = function handlePassword(event) {
    if (passwordError) {
      setPasswordError("");
    }

    setPassword(event.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoggedIn ? __jsx(_Components_IsAleadyLoggedIn__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }) : __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_13__["default"], {
    component: "main",
    maxWidth: "xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }), __jsx("div", {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.avatar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_10___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    component: "h1",
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "\uB85C\uADF8\uC778"), __jsx("form", {
    className: classes.form,
    noValidate: true,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    error: !!emailError,
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    id: "email",
    label: "\uC774\uBA54\uC77C",
    name: "email",
    autoComplete: "email",
    autoFocus: true,
    value: email,
    onChange: handleEmail,
    helperText: emailError,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    error: !!passwordError,
    variant: "outlined",
    margin: "normal",
    required: true,
    fullWidth: true,
    name: "password",
    label: "\uBE44\uBC00\uBC88\uD638",
    type: "password",
    id: "password",
    autoComplete: "current-password",
    value: password,
    onChange: handlePassword,
    helperText: passwordError,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    control: __jsx(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
      value: "remember",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }),
    label: "\uB85C\uADF8\uC778 \uC0C1\uD0DC \uC720\uC9C0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    disabled: isLoging,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, isLoging ? __jsx(_utils_Components_CircularProgressComponent__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }) : __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "\uB85C\uADF8\uC778")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: "#",
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "\uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC73C\uC168\uB098\uC694?")), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: "/signup",
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "계정이 없으신가요? 회원가입")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.46a1dfc8d0ab34c184f0.hot-update.js.map