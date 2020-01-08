webpackHotUpdate("static\\development\\pages\\post\\[category].js",{

/***/ "./pages/post/[category].tsx":
/*!***********************************!*\
  !*** ./pages/post/[category].tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/post/actions */ "./reducers/post/actions.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");

var _jsxFileName = "D:\\webdev\\blog\\front\\pages\\post\\[category].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createStyles"])({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      maxWidth: 500,
      textDecoration: "none"
    },
    image: {
      width: 128,
      height: 128
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%"
    }
  });
});

var Post = function Post() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      posts = _useSelector.posts;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var category = router.query.category;
  var classes = useStyles({});

  var CategoryTitle = function CategoryTitle(_ref) {
    var category = _ref.category;

    switch (category) {
      case "dev":
        {
          return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
            variant: "h2",
            color: "primary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, "\uAC1C\uBC1C");
        }

      case "hacking":
        {
          return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
            variant: "h2",
            color: "error",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, "\uD574\uD0B9");
        }

      case "finance":
        {
          return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
            variant: "h2",
            color: "initial",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, "\uC7AC\uD14C\uD06C");
        }

      case "business":
        {
          return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
            variant: "h2",
            color: "secondary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }, "\uBE44\uC988\uB2C8\uC2A4");
          break;
        }

      default:
        {
          break;
        }
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    maxWidth: "sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    container: true,
    justify: "center",
    spacing: 3,
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
    item: true,
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(CategoryTitle, {
    category: category,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), posts && posts.map(function (post) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Link"], {
      href: "/post/".concat(category, "/").concat(post.title),
      key: post._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      key: post._id,
      item: true,
      xs: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Paper"], {
      className: classes.paper,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, post.title), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      variant: "h6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, post.nickname), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      variant: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }, post.Date)))));
  }))));
};

Post.getInitialProps = function _callee(ctx) {
  var category;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          category = ctx.query.category;
          ctx.store.dispatch({
            type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_4__["GET_POSTS_REQUEST"],
            payload: {
              category: category
            }
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[category].js.c7ca98cf77980cbdf84d.hot-update.js.map