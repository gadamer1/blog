webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./Components/SignUp/SignUpForm.tsx":
/*!******************************************!*\
  !*** ./Components/SignUp/SignUpForm.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utils_validateEmailInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/validateEmailInput */ "./utils/validateEmailInput.ts");
/* harmony import */ var _reducers_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/user/actions */ "./reducers/user/actions.ts");
/* harmony import */ var _utils_Components_CircularProgressComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/Components/CircularProgressComponent */ "./utils/Components/CircularProgressComponent.tsx");
var _jsxFileName = "D:\\webdev\\web_blog\\front\\Components\\SignUp\\SignUpForm.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
    form: {
      width: "100%",
      // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  });
});

var SignUpForm = function SignUpForm() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user.loadingStates;
  }),
      isSigning = _useSelector.isSigning;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var classes = useStyles({});

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      nickname = _useState[0],
      setNickname = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      nicknameError = _useState2[0],
      setNicknameError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      email = _useState3[0],
      setEmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      emailError = _useState4[0],
      setEmailError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      password = _useState5[0],
      setPassword = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      passwordError = _useState6[0],
      setPasswordError = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      passwordCheck = _useState7[0],
      setPasswordCheck = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      passwordCheckError = _useState8[0],
      setPasswordCheckError = _useState8[1];

  var handleSubmitForm = function handleSubmitForm(event) {
    event.preventDefault();
    var validate = true;

    if (!Object(_utils_validateEmailInput__WEBPACK_IMPORTED_MODULE_4__["default"])(email)) {
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

    if (passwordCheck.trim() === "") {
      setPasswordError("비밀번호 확인란을 입력해주세요");
      validate = false;
    }

    if (password !== passwordCheck) {
      setPasswordCheck("비밀번호가 같지 않습니다");
      validate = false;
    }

    if (validate) {
      dispatch({
        type: _reducers_user_actions__WEBPACK_IMPORTED_MODULE_5__["SIGN_UP_REQUEST"],
        payload: {
          email: email,
          nickname: nickname,
          password: password
        }
      });
    }
  };

  var handleNickname = function handleNickname(event) {
    if (nicknameError) {
      setNicknameError("");
    }

    setNickname(event.target.value);
  };

  var handleEmail = function handleEmail(event) {
    if (emailError) {
      setEmailError("");
    }

    setEmail(event.target.value);
  };

  var handdlePassword = function handdlePassword(event) {
    if (passwordError) {
      setEmailError("");
    }

    setPassword(event.target.value);
  };

  var handdlePasswordCheck = function handdlePasswordCheck(event) {
    if (passwordCheckError) {
      setEmailError("");
    }

    setPasswordCheck(event.target.value);
  };

  return __jsx("form", {
    className: classes.form,
    noValidate: true,
    onSubmit: handleSubmitForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    error: !!nicknameError,
    helperText: nicknameError,
    autoComplete: "nickname",
    name: "nickname",
    variant: "outlined",
    required: true,
    fullWidth: true,
    id: "nickname",
    label: "\uB2C9\uB124\uC784",
    autoFocus: true,
    value: nickname,
    onChange: handleNickname,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    error: !!emailError,
    helperText: emailError,
    variant: "outlined",
    required: true,
    fullWidth: true,
    id: "email",
    label: "\uC774\uBA54\uC77C \uC8FC\uC18C",
    name: "email",
    autoComplete: "email",
    value: email,
    onChange: handleEmail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    error: !!passwordError,
    helperText: passwordError,
    variant: "outlined",
    required: true,
    fullWidth: true,
    name: "password",
    label: "\uBE44\uBC00\uBC88\uD638",
    type: "password",
    id: "password",
    autoComplete: "current-password",
    value: password,
    onChange: handdlePassword,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    error: !!passwordCheckError,
    helperText: passwordCheckError,
    variant: "outlined",
    required: true,
    fullWidth: true,
    name: "password",
    label: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
    type: "password",
    id: "password",
    autoComplete: "current-password",
    value: passwordCheck,
    onChange: handdlePasswordCheck,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      value: "allowExtraEmails",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }),
    label: "\uC54C\uB78C\uC744 \uBC1B\uACE0 \uC2F6\uC2B5\uB2C8\uB2E4. \uC774\uBA54\uC77C\uC744 \uD1B5\uD574 \uC54C\uB78C\uC744 \uBC1B\uC744\uB798\uC694! ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    fullWidth: true,
    variant: "contained",
    color: "primary",
    className: classes.submit,
    disabled: isSigning,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, isSigning && __jsx(_utils_Components_CircularProgressComponent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }), "\uD68C\uC6D0 \uAC00\uC785"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "flex-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    href: "#",
    variant: "body2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "\uACC4\uC815\uC774 \uC774\uBBF8 \uC788\uB098\uC694? \uB85C\uADF8\uC778"))));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUpForm);

/***/ })

})
//# sourceMappingURL=signup.js.38ca7fdda30dd85eda79.hot-update.js.map