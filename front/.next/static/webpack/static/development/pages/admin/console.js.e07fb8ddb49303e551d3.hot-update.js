webpackHotUpdate("static\\development\\pages\\admin\\console.js",{

/***/ "./pages/admin/console.tsx":
/*!*********************************!*\
  !*** ./pages/admin/console.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_admin_MakeCategories_MakeCategories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/admin/MakeCategories/MakeCategories */ "./Components/admin/MakeCategories/MakeCategories.tsx");
/* harmony import */ var _Components_admin_MakePosts_MakePostsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/admin/MakePosts/MakePostsContainer */ "./Components/admin/MakePosts/MakePostsContainer.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\webdev\\web_blog\\front\\pages\\admin\\console.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Console = function Console() {
  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      user = _useSelector.me;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!user || !user.admin) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/login");
    }
  }, [user]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_Components_admin_MakeCategories_MakeCategories__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_Components_admin_MakePosts_MakePostsContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Console);

/***/ })

})
//# sourceMappingURL=console.js.e07fb8ddb49303e551d3.hot-update.js.map