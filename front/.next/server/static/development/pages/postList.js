module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/PostList/PostListContainer.tsx":
/*!***************************************************!*\
  !*** ./Components/PostList/PostListContainer.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_postList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/postList */ "./pages/postList.tsx");
var _jsxFileName = "D:\\webdev\\web_blog\\front\\Components\\PostList\\PostListContainer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => {
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

const PostListContainer = () => {
  const classes = useStyles({});
  const {
    posts
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  return (//@ts-ignore
    __jsx("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }, //@ts-ignore
    __jsx(_pages_postList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "dev",
      posts: posts && posts.dev,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, //@ts-ignore
    __jsx(_pages_postList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "hacking",
      posts: posts && posts.hacking,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, //@ts-ignore
    __jsx(_pages_postList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "finance",
      posts: posts && posts.finance,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: undefined
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, //@ts-ignore
    __jsx(_pages_postList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "business",
      posts: posts && posts.business,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }))))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PostListContainer);

/***/ }),

/***/ "./pages/postList.tsx":
/*!****************************!*\
  !*** ./pages/postList.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post/actions */ "./reducers/post/actions.ts");
/* harmony import */ var _Components_PostList_PostListContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/PostList/PostListContainer */ "./Components/PostList/PostListContainer.tsx");
var _jsxFileName = "D:\\webdev\\web_blog\\front\\pages\\postList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const PostList = () => {
  const {
    isPostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post.loadingStates);
  const posts = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post.posts);

  if (isPostLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, "\uB85C\uB529\uC911\uC785\uB2C8\uB2E4."));
  } else {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: undefined
    }, __jsx(_Components_PostList_PostListContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }));
  }
};

PostList.getInitialProps = ctx => {
  ctx.store.dispatch({
    type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["GET_POSTS_REQUEST"]
  });
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (PostList);

/***/ }),

/***/ "./reducers/post/actions.ts":
/*!**********************************!*\
  !*** ./reducers/post/actions.ts ***!
  \**********************************/
/*! exports provided: MAKE_POST_REQUEST, MAKE_POST_SUCCESS, MAKE_POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAKE_POST_REQUEST", function() { return MAKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAKE_POST_SUCCESS", function() { return MAKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAKE_POST_FAILURE", function() { return MAKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_REQUEST", function() { return GET_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_SUCCESS", function() { return GET_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_FAILURE", function() { return GET_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_REQUEST", function() { return GET_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_SUCCESS", function() { return GET_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_FAILURE", function() { return GET_POSTS_FAILURE; });
const MAKE_POST_REQUEST = "MAKE_POST_REQUEST";
const MAKE_POST_SUCCESS = "MAKE_POST_SUCCESS";
const MAKE_POST_FAILURE = "MAKE_POST_FAILURE";
const GET_POST_REQUEST = "GET_POST_REQUEST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_FAILURE = "GET_POST_FAILURE";
const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/postList.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\webdev\web_blog\front\pages\postList.tsx */"./pages/postList.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=postList.js.map