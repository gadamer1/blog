webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./Layouts/Header/LeftDrawerList.tsx":
/*!*******************************************!*\
  !*** ./Layouts/Header/LeftDrawerList.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
var _jsxFileName = "D:\\webdev\\blog\\front\\Layouts\\Header\\LeftDrawerList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    root: {
      flexGrow: 1
    },
    list: {
      width: 250,
      justifyItems: "center"
    },
    fullList: {
      width: "auto"
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    },
    categoryTitle: {
      justifyContent: "center",
      alignContent: "center"
    }
  });
});
var categories = [{
  name: "개발",
  slug: "/post/dev",
  icon: "important_devices"
}, {
  name: "해킹",
  slug: "/post/hacking",
  icon: "change_history"
}, {
  name: "재테크",
  slug: "/post/finance",
  icon: "attach_money"
}, {
  name: "비즈니스",
  slug: "/post/business",
  icon: "business"
}];

var LeftDrawerList = function LeftDrawerList(_ref) {
  var toggleDrawer = _ref.toggleDrawer;
  var classes = useStyles({});
  return __jsx("div", {
    className: classes.list,
    role: "presentation",
    onClick: toggleDrawer(false),
    onKeyDown: toggleDrawer(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActionArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"], {
    className: classes.media,
    image: "../../static/images/profile.jpg",
    title: "gadamer1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "gadamer1")))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.categoryTitle,
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "\uCE74\uD14C\uACE0\uB9AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, categories.map(function (obj, index) {
    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      href: "".concat(obj.slug),
      key: obj.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      button: true,
      key: obj.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, obj.icon)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
      primary: obj.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    })));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (LeftDrawerList);

/***/ })

})
//# sourceMappingURL=_app.js.6c03bf225df4169d4867.hot-update.js.map