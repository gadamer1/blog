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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/home/About.js":
/*!**********************************!*\
  !*** ./Components/home/About.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./Components/home/data.js");

var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\home\\About.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class About extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {});
  }

  render() {
    return __jsx("div", {
      className: "about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("div", {
      className: "about-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      bottom: true,
      cascade: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "\uC800\uB294")), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      bottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].abouttext))), _data__WEBPACK_IMPORTED_MODULE_3__["default"].ShowAboutImage ? __jsx("img", {
      src: _data__WEBPACK_IMPORTED_MODULE_3__["default"].aboutImage,
      alt: "about iamge",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }) : null);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./Components/home/App.css":
/*!*********************************!*\
  !*** ./Components/home/App.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./Components/home/Contact.js":
/*!************************************!*\
  !*** ./Components/home/Contact.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./Components/home/Project.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./Components/home/data.js");

var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\home\\Contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Work extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {});
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h1", {
      className: "heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
      bottom: true,
      cascade: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "Work.")), __jsx("div", {
      className: "work-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, _data__WEBPACK_IMPORTED_MODULE_4__["default"].projects.map(project => __jsx(_Project__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: project.id,
      title: project.title,
      service: project.service,
      imageSrc: project.imageSrc,
      url: project.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ "./Components/home/Header.js":
/*!***********************************!*\
  !*** ./Components/home/Header.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./Components/home/data.js");

var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\home\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Header extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {});
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h1", {
      className: "heading-background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, "gadamer"), __jsx("header", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      bottom: true,
      cascade: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].name))), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      bottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("p", {
      className: "header-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, _data__WEBPACK_IMPORTED_MODULE_3__["default"].headerTagline[0], __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), _data__WEBPACK_IMPORTED_MODULE_3__["default"].headerTagline[1], __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), _data__WEBPACK_IMPORTED_MODULE_3__["default"].headerTagline[2], __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./Components/home/Home.js":
/*!*********************************!*\
  !*** ./Components/home/Home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./Components/home/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./Components/home/Header.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About */ "./Components/home/About.js");
/* harmony import */ var _Work__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Work */ "./Components/home/Work.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contact */ "./Components/home/Contact.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navbar */ "./Components/home/Navbar.js");
var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\home\\Home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Home() {
  return __jsx("div", {
    className: "App",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("div", {
    className: "App-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), __jsx("div", {
    className: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_About__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("div", {
    className: "work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(_Work__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./Components/home/Navbar.js":
/*!***********************************!*\
  !*** ./Components/home/Navbar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\home\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Navbar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {});

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "scrollToTop", () => {
      react_scroll__WEBPACK_IMPORTED_MODULE_2__["animateScroll"].scrollToTop();
    });
  }

  render() {
    return __jsx("nav", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "link",
      activeClass: "active",
      to: "homw",
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      onClick: this.scrollToTop,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "Home")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "link",
      activeClass: "active",
      to: "About",
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "About")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "link",
      activeClass: "active",
      to: "work",
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Work")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "link",
      activeClass: "active",
      to: "contact",
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Contact"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./Components/home/Project.js":
/*!************************************!*\
  !*** ./Components/home/Project.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\home\\Project.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Project extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {});
  }

  render() {
    return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
      bottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("div", {
      className: "project",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("a", {
      href: this.props.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("img", {
      src: this.props.imageSrc,
      alt: this.props.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    })), __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, this.props.title), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, this.props.service)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./Components/home/Work.js":
/*!*********************************!*\
  !*** ./Components/home/Work.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./Components/home/Project.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "react-reveal/Fade");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./Components/home/data.js");

var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\home\\Work.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Work extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {});
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("h1", {
      className: "heading",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
      bottom: true,
      cascade: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "jobs")), __jsx("div", {
      className: "work-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, _data__WEBPACK_IMPORTED_MODULE_4__["default"].projects.map(project => __jsx(_Project__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: project.id,
      title: project.title,
      service: project.service,
      imageSrc: project.imageSrc,
      url: project.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ "./Components/home/data.js":
/*!*********************************!*\
  !*** ./Components/home/data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template
  headerTagline: [//Line 1 For Header
  "안녕하세요 👋 ", //Line 2 For Header
  "공부 블로그 ", //Line 3 For Header
  "gadamer1 입니다"],
  // Add Your About Text Here
  abouttext: "어떤 분야든지 흥미롭게 공부중인 학생입니다.",
  aboutImage: "https://images.pexels.com/photos/207580/pexels-photo-207580.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //Change This To Hide The Image of About Section (True Or False)
  ShowAboutImage: true,
  //true or false (Change Here)
  // Change Projects Here
  projects: [{
    id: 1,
    //DO NOT CHANGE THIS (Please)😅
    title: "프론트엔드 개발자",
    //Project Title - Add Your Project Title Here
    service: "프론트 엔드",
    // Add Your Service Type Here
    //Project Image - Add Your Project Image Here
    imageSrc: "https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //Project URL - Add Your Project Url Here
    url: "#"
  }, {
    id: 2,
    //DO NOT CHANGE THIS (Please)😅
    title: "백엔드 개발자",
    service: "Website Development",
    imageSrc: "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    url: "#"
  }, {
    id: 3,
    //DO NOT CHANGE THIS (Please)😅
    title: "AI",
    service: "ai",
    imageSrc: "https://images.pexels.com/photos/319968/pexels-photo-319968.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    url: "https://www.kaggle.com/fastfastfastfast"
  }
  /*
                  If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
              ,{
              id: 5,
              title: 'Project Five',
              service: 'Something Amazing',
              imageSrc: "",
              url: ''
          }
              */
  ],
  social: [// Add Or Remove The Link Accordingly
  {
    name: "Github",
    url: "https://github.com/gadamer1"
  }]
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_home_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/home/Home */ "./Components/home/Home.js");
var _jsxFileName = "D:\\webdev\\blog\\front\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = () => {
  return __jsx(_Components_home_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\webdev\blog\front\pages\index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-reveal/Fade":
/*!************************************!*\
  !*** external "react-reveal/Fade" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-reveal/Fade");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map