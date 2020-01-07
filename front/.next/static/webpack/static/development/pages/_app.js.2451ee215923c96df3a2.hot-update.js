webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./reducers/post/index.ts":
/*!********************************!*\
  !*** ./reducers/post/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./reducers/post/actions.ts");


var initialState = {
  posts: null,
  currentPost: null,
  loadingStates: {
    isPostLoading: false,
    isPosting: false,
    isPostingSuccess: false,
    isPostsLoading: false
  },
  metaStates: {
    getPostStatusCode: 0,
    getPostsStatusCode: 0,
    postStautsCode: 0
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case _actions__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_REQUEST"]:
        {
          draft.loadingStates.isPostLoading = true;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_SUCCESS"]:
        {
          draft.loadingStates.isPostLoading = false;
          draft.posts = action.result;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_FAILURE"]:
        {
          draft.loadingStates.isPostLoading = false;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["MAKE_POST_REQUEST"]:
        {
          draft.loadingStates.isPosting = true;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["MAKE_POST_SUCCESS"]:
        {
          draft.loadingStates.isPostingSuccess = true;
          draft.loadingStates.isPosting = false;
          draft.posts = action.result;
          break;
        }

      case _actions__WEBPACK_IMPORTED_MODULE_1__["MAKE_POST_FAILURE"]:
        {
          draft.loadingStates.isPosting = false;
          draft.loadingStates.isPostingSuccess = false;
          break;
        }

      default:
        {
          break;
        }
    }
  });
});

/***/ })

})
//# sourceMappingURL=_app.js.2451ee215923c96df3a2.hot-update.js.map