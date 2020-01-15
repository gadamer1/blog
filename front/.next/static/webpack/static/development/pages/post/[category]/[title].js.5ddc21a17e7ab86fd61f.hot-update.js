webpackHotUpdate("static\\development\\pages\\post\\[category]\\[title].js",{

/***/ "./pages/post/[category]/[title].tsx":
/*!*******************************************!*\
  !*** ./pages/post/[category]/[title].tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers/post/actions */ "./reducers/post/actions.ts");
/* harmony import */ var _Components_draft_Renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Components/draft/Renderer */ "./Components/draft/Renderer.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _Components_BreadCrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Components/BreadCrumb */ "./Components/BreadCrumb.tsx");
var _jsxFileName = "D:\\webdev\\blog\\front\\pages\\post\\[category]\\[title].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["createStyles"])({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
      justifyContent: "center",
      paddingRight: "20px"
    },
    container: {
      marginBottom: "200px"
    },
    title: {
      border: "1px solid black"
    }
  });
});

var Post = function Post() {
  var classes = useStyles({});

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      currentPost = _useSelector.currentPost;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post.loadingStates;
  }),
      isPostLoading = _useSelector2.isPostLoading;

  var _useRouter$query = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])().query,
      category = _useRouter$query.category,
      title = _useRouter$query.title;

  var _onClickNickname = function _onClickNickname(nickname) {
    return function () {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/profile/".concat(nickname));
    };
  };

  if (isPostLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "\uB85C\uB529\uC911 \uC785\uB2C8\uB2E4!"));
  } else {
    return __jsx("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(_Components_BreadCrumb__WEBPACK_IMPORTED_MODULE_8__["default"], {
      category: category,
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      container: true,
      className: classes.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      item: true,
      xs: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      variant: "h4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "\uD0C0\uC774\uD2C0", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      variant: "h5",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, currentPost.title))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Grid"], {
      item: true,
      xs: 6,
      style: {
        "float": "right"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Chip"], {
      icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_7__["Face"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }),
      onClick: _onClickNickname(currentPost.nickname),
      label: currentPost.nickname,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, currentPost.Date))), currentPost && __jsx(_Components_draft_Renderer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      raw: JSON.parse(currentPost.body),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }));
  }
};

Post.getInitialProps = function (ctx) {
  var _ctx$query = ctx.query,
      title = _ctx$query.title,
      category = _ctx$query.category;
  ctx.store.dispatch({
    type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_POST_REQUEST"],
    payload: {
      title: title,
      category: category
    }
  });
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[title].js.5ddc21a17e7ab86fd61f.hot-update.js.map