webpackHotUpdate("static\\development\\pages\\profile\\[nickname].js",{

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
var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\profile\\UserPostList.tsx";
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
      key: post._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
      alignItems: "flex-start",
      key: post._id,
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

/***/ })

})
//# sourceMappingURL=[nickname].js.1b7dbade74736a73d2bd.hot-update.js.map