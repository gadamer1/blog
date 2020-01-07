webpackHotUpdate("static\\development\\pages\\postList.js",{

/***/ "./pages/postList.tsx":
/*!****************************!*\
  !*** ./pages/postList.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post/actions */ "./reducers/post/actions.ts");
var _jsxFileName = "D:\\webdev\\web_blog\\front\\pages\\postList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PostList = function PostList() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post.loadingStates;
  }),
      isPostLoading = _useSelector.isPostLoading;

  var posts = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post.posts;
  });

  if (isPostLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "\uB85C\uB529\uC911\uC785\uB2C8\uB2E4."));
  } else {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  }
};

PostList.getInitialProps = function (ctx) {
  ctx.store.dispatch({
    type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["GET_POSTS_REQUEST"]
  });
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ })

})
//# sourceMappingURL=postList.js.68dc00770334e0c8347f.hot-update.js.map