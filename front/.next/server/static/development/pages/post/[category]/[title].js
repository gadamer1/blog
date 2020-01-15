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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/BreadCrumb.tsx":
/*!***********************************!*\
  !*** ./Components/BreadCrumb.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\BreadCrumb.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Breadcrumb = props => {
  const {
    title,
    category
  } = props;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Breadcrumbs"], {
    "aria-label": "breadcrumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    color: "inherit",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "home"), category && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    color: "inherit",
    href: `/post/${category}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, category), title && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    color: "inherit",
    href: `/post/${category}/${title}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, title));
};

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ }),

/***/ "./Components/CustomMarkdown.tsx":
/*!***************************************!*\
  !*** ./Components/CustomMarkdown.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _admin_MakePosts_CodeBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/MakePosts/CodeBlock */ "./Components/admin/MakePosts/CodeBlock.js");
var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\CustomMarkdown.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function CustomLink(props) {
  return __jsx("a", {
    href: props.href,
    style: {
      textDecoration: "none",
      color: "cadetblue"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.children.map(({
    props
  }) => {
    return __jsx("span", {
      key: props.nodeKey,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, props.children);
  }));
}

const CustomMarkdown = ({
  source
}) => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_1___default.a, {
    source: source,
    renderers: {
      code: _admin_MakePosts_CodeBlock__WEBPACK_IMPORTED_MODULE_2__["default"],
      link: CustomLink
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomMarkdown);

/***/ }),

/***/ "./Components/admin/MakePosts/CodeBlock.js":
/*!*************************************************!*\
  !*** ./Components/admin/MakePosts/CodeBlock.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-syntax-highlighter */ "react-syntax-highlighter");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/hljs */ "react-syntax-highlighter/dist/cjs/styles/hljs");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\admin\\MakePosts\\CodeBlock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CodeBlock = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(({
  value,
  language
}) => {
  return __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_1___default.a, {
    language: language,
    style: react_syntax_highlighter_dist_cjs_styles_hljs__WEBPACK_IMPORTED_MODULE_2__["docco"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, value);
});
/* harmony default export */ __webpack_exports__["default"] = (CodeBlock);

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../reducers/post/actions */ "./reducers/post/actions.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons */ "@material-ui/icons");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Components_BreadCrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Components/BreadCrumb */ "./Components/BreadCrumb.tsx");
/* harmony import */ var _Components_CustomMarkdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Components/CustomMarkdown */ "./Components/CustomMarkdown.tsx");
var _jsxFileName = "D:\\webdev\\blog\\front\\pages\\post\\[category]\\[title].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["createStyles"])({
  root: {
    width: "80%",
    backgroundColor: theme.palette.background.paper,
    justifyContent: "center",
    paddingLeft: "20px"
  },
  container: {
    marginBottom: "200px"
  },
  title: {
    border: "1px solid black"
  }
}));

const Post = () => {
  const classes = useStyles({});
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    currentPost
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post);
  const {
    isPostLoading,
    isPostDeleting,
    isPostDeleteSuccess
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.post.loadingStates);
  const {
    me
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user);
  const {
    category,
    title
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])().query;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isPostDeleteSuccess) {
      dispatch({
        type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_FAILURE"]
      });
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(`/post/${category}`);
    }
  }, [isPostDeleteSuccess]);

  const _onClickNickname = nickname => () => {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(`/profile/${nickname}`);
  };

  const _onClickDeleteButton = e => {
    e.preventDefault();
    dispatch({
      type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_3__["DELETE_POST_REQUEST"],
      payload: {
        postId: currentPost._id,
        userId: me._id
      }
    });
  };

  if (isPostLoading) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: undefined
    }, "\uB85C\uB529\uC911 \uC785\uB2C8\uB2E4!"));
  } else if (currentPost) {
    return __jsx("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: undefined
    }, __jsx(_Components_BreadCrumb__WEBPACK_IMPORTED_MODULE_7__["default"], {
      category: category,
      title: title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      container: true,
      className: classes.container,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      item: true,
      xs: 6,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h5",
      color: "secondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: undefined
    }, "\uC81C\uBAA9", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      variant: "h4",
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: undefined
    }, currentPost.title))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
      item: true,
      xs: 6,
      style: {
        float: "right"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: undefined
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Chip"], {
      icon: __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__["Face"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: undefined
      }),
      onClick: _onClickNickname(currentPost.nickname),
      label: currentPost.nickname,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: undefined
    }), me && me.nickname === currentPost.nickname && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      color: "secondary",
      variant: "contained",
      onClick: _onClickDeleteButton,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: undefined
    }, "\uC0AD\uC81C"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }, currentPost.Date))), currentPost && __jsx(_Components_CustomMarkdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
      source: currentPost.body,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }));
  } else {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: undefined
    }, "\uD3EC\uC2A4\uD2B8\uAC00 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4");
  }
};

Post.getInitialProps = ctx => {
  const {
    title,
    category
  } = ctx.query;
  ctx.store.dispatch({
    type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_3__["FETCH_POST_REQUEST"],
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
/*! exports provided: MAKE_POST_REQUEST, MAKE_POST_SUCCESS, MAKE_POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS, GET_POST_FAILURE, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE, DELETE_POST_REQUEST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_REQUEST", function() { return DELETE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_SUCCESS", function() { return DELETE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_FAILURE", function() { return DELETE_POST_FAILURE; });
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
const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

/***/ }),

/***/ 4:
/*!*************************************************!*\
  !*** multi ./pages/post/[category]/[title].tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\webdev\blog\front\pages\post\[category]\[title].tsx */"./pages/post/[category]/[title].tsx");


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

/***/ "@material-ui/icons":
/*!*************************************!*\
  !*** external "@material-ui/icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-syntax-highlighter":
/*!*******************************************!*\
  !*** external "react-syntax-highlighter" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "react-syntax-highlighter/dist/cjs/styles/hljs":
/*!****************************************************************!*\
  !*** external "react-syntax-highlighter/dist/cjs/styles/hljs" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/hljs");

/***/ })

/******/ });
//# sourceMappingURL=[title].js.map