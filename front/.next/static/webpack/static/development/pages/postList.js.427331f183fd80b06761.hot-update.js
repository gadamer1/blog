webpackHotUpdate("static\\development\\pages\\postList.js",{

/***/ "./Components/PostList/PostListContainer.tsx":
/*!***************************************************!*\
  !*** ./Components/PostList/PostListContainer.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _pages_postList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/postList */ "./pages/postList.tsx");
var _jsxFileName = "D:\\webdev\\web_blog\\front\\Components\\PostList\\PostListContainer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
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

var PostListContainer = function PostListContainer() {
  var classes = useStyles({});

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      posts = _useSelector.posts;

  return (//@ts-ignore
    __jsx("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx(_pages_postList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "dev",
      posts: posts && posts.dev,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(_pages_postList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "hacking",
      posts: posts && posts.hacking,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      container: true,
      spacing: 3,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx(_pages_postList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "finance",
      posts: posts && posts.finance,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
      item: true,
      xs: 12,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(_pages_postList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      category: "business",
      posts: posts && posts.business,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }))))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (PostListContainer);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/array/is-array.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_a-function.js":
false,

/***/ "./node_modules/core-js/library/modules/_add-to-unscopables.js":
false,

/***/ "./node_modules/core-js/library/modules/_an-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_array-includes.js":
false,

/***/ "./node_modules/core-js/library/modules/_classof.js":
false,

/***/ "./node_modules/core-js/library/modules/_cof.js":
false,

/***/ "./node_modules/core-js/library/modules/_core.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_ctx.js":
false,

/***/ "./node_modules/core-js/library/modules/_defined.js":
false,

/***/ "./node_modules/core-js/library/modules/_descriptors.js":
false,

/***/ "./node_modules/core-js/library/modules/_dom-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_enum-bug-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_export.js":
false,

/***/ "./node_modules/core-js/library/modules/_fails.js":
false,

/***/ "./node_modules/core-js/library/modules/_global.js":
false,

/***/ "./node_modules/core-js/library/modules/_has.js":
false,

/***/ "./node_modules/core-js/library/modules/_hide.js":
false,

/***/ "./node_modules/core-js/library/modules/_html.js":
false,

/***/ "./node_modules/core-js/library/modules/_ie8-dom-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_iobject.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-define.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-step.js":
false,

/***/ "./node_modules/core-js/library/modules/_iterators.js":
false,

/***/ "./node_modules/core-js/library/modules/_library.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-create.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-dp.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-dps.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-gpo.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-keys-internal.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-keys.js":
false,

/***/ "./node_modules/core-js/library/modules/_property-desc.js":
false,

/***/ "./node_modules/core-js/library/modules/_redefine.js":
false,

/***/ "./node_modules/core-js/library/modules/_set-to-string-tag.js":
false,

/***/ "./node_modules/core-js/library/modules/_shared-key.js":
false,

/***/ "./node_modules/core-js/library/modules/_shared.js":
false,

/***/ "./node_modules/core-js/library/modules/_string-at.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-absolute-index.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-integer.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-iobject.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-length.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-object.js":
false,

/***/ "./node_modules/core-js/library/modules/_to-primitive.js":
false,

/***/ "./node_modules/core-js/library/modules/_uid.js":
false,

/***/ "./node_modules/core-js/library/modules/_wks.js":
false,

/***/ "./node_modules/core-js/library/modules/core.get-iterator-method.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.is-array.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.string.iterator.js":
false,

/***/ "./node_modules/core-js/library/modules/web.dom.iterable.js":
false

})
//# sourceMappingURL=postList.js.427331f183fd80b06761.hot-update.js.map