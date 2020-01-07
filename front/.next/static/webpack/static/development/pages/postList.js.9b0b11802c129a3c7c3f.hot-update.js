webpackHotUpdate("static\\development\\pages\\postList.js",{

/***/ "./Components/PostList/PostListContainer.tsx":
/*!***************************************************!*\
  !*** ./Components/PostList/PostListContainer.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _pages_postList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/postList */ "./pages/postList.tsx");
var _jsxFileName = "D:\\webdev\\web_blog\\front\\Components\\PostList\\PostListContainer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createStyles"])({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  });
});

var PostListContainer = function PostListContainer() {
  var classes = useStyles({});

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      posts = _useSelector.posts;

  return (//@ts-ignore
    __jsx("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, //@ts-ignore
    __jsx(_pages_postList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "dev",
      posts: posts && posts.dev,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, //@ts-ignore
    __jsx(_pages_postList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "hacking",
      posts: posts && posts.hacking,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, //@ts-ignore
    __jsx(_pages_postList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "finance",
      posts: posts && posts.finance,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, //@ts-ignore
    __jsx(_pages_postList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "business",
      posts: posts && posts.business,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }))))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PostListContainer);

/***/ })

})
//# sourceMappingURL=postList.js.9b0b11802c129a3c7c3f.hot-update.js.map