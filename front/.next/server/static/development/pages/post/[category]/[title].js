module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/draft/Renderer.js":
/*!**************************************!*\
  !*** ./Components/draft/Renderer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderer_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderer.config */ "./Components/draft/renderer.config.js");
/* harmony import */ var redraft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redraft */ "redraft");
/* harmony import */ var redraft__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redraft__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\webdev\\web_blog\\front\\Components\\draft\\Renderer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Renderer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  renderWarning() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "Nothing to render.");
  }

  render() {
    const {
      raw
    } = this.props;

    if (!raw) {
      return this.renderWarning();
    }

    const rendered = redraft__WEBPACK_IMPORTED_MODULE_2___default()(raw, _renderer_config__WEBPACK_IMPORTED_MODULE_1__["renderers"]); // redraft returns a null if there's nothing to render

    if (!rendered) {
      return this.renderWarning();
    }

    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, rendered);
  }

}

/***/ }),

/***/ "./Components/draft/renderer.config.js":
/*!*********************************************!*\
  !*** ./Components/draft/renderer.config.js ***!
  \*********************************************/
/*! exports provided: renderers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderers", function() { return renderers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redraft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redraft */ "redraft");
/* harmony import */ var redraft__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redraft__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\webdev\\web_blog\\front\\Components\\draft\\renderer.config.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const styleMap = {
  BOLD: {
    fontWeight: "bold"
  },
  ITALIC: {
    fontStyle: "italic"
  },
  UNDERLINE: {
    textDecoration: "underline"
  }
}; // This is a wrapper callback for the inline styles
// the style object contains all the relevant styles from the styleMap
// it needs a key as redraft returns arrays not Components

const InlineWrapper = ({
  children,
  style,
  key
}) => __jsx("span", {
  key: key,
  style: style,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, children); // this Component results in a flatter output as it can have multiple styles (also possibly less semantic)
// Api aligned w draft-js, aliasedElements are not required as draft-js uses them for parsing pasted html


const blockRenderMap = {
  unstyled: {
    element: "div"
  },
  blockquote: {
    element: "blockquote"
  },
  "ordered-list-item": {
    element: "li",
    wrapper: "ol"
  },
  "unordered-list-item": {
    element: "li",
    wrapper: "ul"
  }
};
const renderers = {
  // note the styles key and createStylesRenderer helper
  styles: Object(redraft__WEBPACK_IMPORTED_MODULE_1__["createStylesRenderer"])(InlineWrapper, styleMap),
  blocks: Object(redraft__WEBPACK_IMPORTED_MODULE_1__["createBlockRenderer"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement, blockRenderMap)
};

/***/ }),

/***/ "./pages/post/[category]/[title].tsx":
/*!*******************************************!*\
  !*** ./pages/post/[category]/[title].tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../reducers/post/actions */ "./reducers/post/actions.ts");
/* harmony import */ var _Components_draft_Renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Components/draft/Renderer */ "./Components/draft/Renderer.js");
var _jsxFileName = "D:\\webdev\\web_blog\\front\\pages\\post\\[category]\\[title].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Post = () => {
  const {
    currentPost
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post);
  const {
    isPostLoading
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.post.loadingStates);

  if (isPostLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }, "\uB85C\uB529\uC911 \uC785\uB2C8\uB2E4!"));
  } else {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, currentPost.title), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, currentPost.nickname), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: undefined
    }, currentPost.Date), currentPost && __jsx(_Components_draft_Renderer__WEBPACK_IMPORTED_MODULE_3__["default"], {
      raw: JSON.parse(currentPost.body),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: undefined
    }));
  }
};

Post.getInitialProps = ctx => {
  const {
    title,
    category
  } = ctx.query;
  ctx.store.dispatch({
    type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_2__["FETCH_POST_REQUEST"],
    payload: {
      title,
      category
    }
  });
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./reducers/post/actions.ts":
/*!**********************************!*\
  !*** ./reducers/post/actions.ts ***!
  \**********************************/
/*! exports provided: MAKE_POST_REQUEST, MAKE_POST_SUCCESS, MAKE_POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POST_REQUEST", function() { return FETCH_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POST_SUCCESS", function() { return FETCH_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_POST_FAILURE", function() { return FETCH_POST_FAILURE; });
const MAKE_POST_REQUEST = "MAKE_POST_REQUEST";
const MAKE_POST_SUCCESS = "MAKE_POST_SUCCESS";
const MAKE_POST_FAILURE = "MAKE_POST_FAILURE";
const GET_POST_REQUEST = "GET_POST_REQUEST";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_FAILURE = "GET_POST_FAILURE";
const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";

/***/ }),

/***/ 7:
/*!*************************************************!*\
  !*** multi ./pages/post/[category]/[title].tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\webdev\web_blog\front\pages\post\[category]\[title].tsx */"./pages/post/[category]/[title].tsx");


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

/***/ }),

/***/ "redraft":
/*!**************************!*\
  !*** external "redraft" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redraft");

/***/ })

/******/ });
//# sourceMappingURL=[title].js.map