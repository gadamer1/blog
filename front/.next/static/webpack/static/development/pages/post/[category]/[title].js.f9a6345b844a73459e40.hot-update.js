webpackHotUpdate("static\\development\\pages\\post\\[category]\\[title].js",{

/***/ "./Components/draft/Renderer.js":
/*!**************************************!*\
  !*** ./Components/draft/Renderer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Renderer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _renderer_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./renderer.config */ "./Components/draft/renderer.config.js");






var _jsxFileName = "D:\\webdev\\web_blog\\front\\Components\\draft\\Renderer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var Renderer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Renderer, _Component);

  function Renderer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Renderer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Renderer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Renderer, [{
    key: "renderWarning",
    value: function renderWarning() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, "Nothing to render.");
    }
  }, {
    key: "render",
    value: function render() {
      var raw = this.props.raw;

      if (!raw) {
        return this.renderWarning();
      }

      var rendered = redraft(raw, _renderer_config__WEBPACK_IMPORTED_MODULE_7__["renderers"]); // redraft returns a null if there's nothing to render

      if (!rendered) {
        return this.renderWarning();
      }

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, rendered);
    }
  }]);

  return Renderer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Renderer, "propTypes", {
  raw: PropTypes.object
});



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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\webdev\\web_blog\\front\\Components\\draft\\renderer.config.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/**
 *  You can use inline styles or classNames inside your callbacks
 */

var styles = {
  code: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  },
  codeBlock: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 20
  }
}; // just a helper to add a <br /> after a block

var addBreaklines = function addBreaklines(children) {
  return children.map(function (child) {
    return [child, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })];
  });
};
/**
 * Define the renderers
 */


var renderers = {
  /**
   * Those callbacks will be called recursively to render a nested structure
   */
  inline: {
    // The key passed here is just an index based on rendering order inside a block
    BOLD: function BOLD(children, _ref) {
      var key = _ref.key;
      return __jsx("strong", {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, children);
    },
    ITALIC: function ITALIC(children, _ref2) {
      var key = _ref2.key;
      return __jsx("em", {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, children);
    },
    UNDERLINE: function UNDERLINE(children, _ref3) {
      var key = _ref3.key;
      return __jsx("u", {
        key: key,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, children);
    },
    CODE: function CODE(children, _ref4) {
      var key = _ref4.key;
      return __jsx("span", {
        key: key,
        style: styles.code,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, children);
    }
  },

  /**
   * Blocks receive children and depth
   * Note that children are an array of blocks with same styling,
   */
  blocks: {
    unstyled: function unstyled(children) {
      return children.map(function (child) {
        return __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, child);
      });
    },
    blockquote: function blockquote(children) {
      return __jsx("blockquote", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, addBreaklines(children));
    },
    "header-one": function headerOne(children) {
      return children.map(function (child) {
        return __jsx("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, child);
      });
    },
    "header-two": function headerTwo(children) {
      return children.map(function (child) {
        return __jsx("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, child);
      });
    },
    // You can also access the original keys of the blocks
    "code-block": function codeBlock(children, _ref5) {
      var keys = _ref5.keys;
      return __jsx("pre", {
        style: styles.codeBlock,
        key: keys[0],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, addBreaklines(children));
    },
    // or depth for nested lists
    "unordered-list-item": function unorderedListItem(children, _ref6) {
      var depth = _ref6.depth,
          keys = _ref6.keys;
      return __jsx("ul", {
        key: keys[keys.length - 1],
        className: "ul-level-".concat(depth),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, children.map(function (child) {
        return __jsx("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, child);
      }));
    },
    "ordered-list-item": function orderedListItem(children, _ref7) {
      var depth = _ref7.depth,
          keys = _ref7.keys;
      return __jsx("ol", {
        key: keys.join("|"),
        className: "ol-level-".concat(depth),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, children.map(function (child, index) {
        return __jsx("li", {
          key: keys[index],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, child);
      }));
    },
    // If your blocks use meta data it can also be accessed like keys
    atomic: function atomic(children, _ref8) {
      var keys = _ref8.keys,
          data = _ref8.data;
      return children.map(function (child, i) {
        return __jsx(Atomic, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: keys[i]
        }, data[i], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }));
      });
    }
  },

  /**
   * Entities receive children and the entity data
   */
  entities: {
    // key is the entity key value from raw
    LINK: function LINK(children, data, _ref9) {
      var key = _ref9.key;
      return __jsx(Link, {
        key: key,
        to: data.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, children);
    }
  },

  /**
   * Array of decorators,
   * Entities receive children and the entity data,
   * inspired by https://facebook.github.io/draft-js/docs/advanced-topics-decorators.html
   * it's also possible to pass a custom Decorator class that matches the [DraftDecoratorType](https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecoratorType.js)
   */
  decorators: [{
    // by default linkStrategy receives a ContentBlock stub (more info under Creating the ContentBlock)
    // strategy only receives first two arguments, contentState is yet not provided
    strategy: linkStrategy,
    // component - a callback as with other renderers
    // decoratedText a plain string matched by the strategy
    // if your decorator depends on draft-js contentState you need to provide convertFromRaw in redraft options
    component: function component(_ref10) {
      var children = _ref10.children,
          decoratedText = _ref10.decoratedText;
      return __jsx("a", {
        href: decoratedText,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, children);
    }
  }, new CustomDecorator(someOptions)]
};

/***/ })

})
//# sourceMappingURL=[title].js.f9a6345b844a73459e40.hot-update.js.map