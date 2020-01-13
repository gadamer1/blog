webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "./node_modules/next-redux-saga/dist/next-redux-saga.es.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var redux_devtools_extension_logOnlyInProduction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-devtools-extension/logOnlyInProduction */ "./node_modules/redux-devtools-extension/logOnlyInProduction.js");
/* harmony import */ var redux_devtools_extension_logOnlyInProduction__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension_logOnlyInProduction__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers */ "./reducers/index.ts");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../sagas */ "./sagas/index.ts");
/* harmony import */ var _Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Layouts/AppLayout */ "./Layouts/AppLayout.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _reducers_user_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../reducers/user/actions */ "./reducers/user/actions.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "D:\\webdev\\blog\\front\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;














var customTheme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["createMuiTheme"])({
  palette: {
    primary: {
      main: "#212121",
      light: "#484848",
      dark: "#000000"
    },
    secondary: {
      main: "#424242",
      light: "#6d6d6d",
      dark: "#1b1b1b"
    }
  }
});

var Blog = function Blog(_ref) {
  var Component = _ref.Component,
      store = _ref.store,
      pageProps = _ref.pageProps;
  // for material ui ssr
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
    store: store,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\uAC00\uB2E4\uBA38\uC758 \uBE14\uB85C\uADF8")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["ThemeProvider"], {
    theme: customTheme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })))));
};

Blog.getInitialProps = function _callee(context) {
  var pageProps, ctx, Component, state, cookie;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          pageProps = {};
          ctx = context.ctx, Component = context.Component;
          state = ctx.store.getState();
          cookie = ctx.isServer ? ctx.req.headers.cookie : "";

          if (ctx.isServer && cookie) {
            axios__WEBPACK_IMPORTED_MODULE_13___default.a.defaults.headers.cookie = cookie;
          }

          if (!state.user.user && cookie) {
            ctx.store.dispatch({
              type: _reducers_user_actions__WEBPACK_IMPORTED_MODULE_14__["LOAD_USER_REQUEST"]
            });
          }

          if (!Component.getInitialProps) {
            _context.next = 10;
            break;
          }

          _context.next = 9;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Component.getInitialProps(ctx));

        case 9:
          pageProps = _context.sent;

        case 10:
          return _context.abrupt("return", {
            pageProps: pageProps
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}; // FOR REDUX DEVTOOLS EXTENSION


var configureStore = function configureStore(initialState) {
  var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var middlewares = [sagaMiddleware];
  var composeEnhancer = Object(redux_devtools_extension_logOnlyInProduction__WEBPACK_IMPORTED_MODULE_9__["composeWithDevTools"])({// options like actionSanitizer, stateSanitizer
  });
  var enhancer = composeEnhancer(redux__WEBPACK_IMPORTED_MODULE_6__["applyMiddleware"].apply(void 0, middlewares));
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_6__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_10__["default"], initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_11__["default"]);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(configureStore)(Object(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__["default"])(Blog)));

/***/ })

})
//# sourceMappingURL=_app.js.27f0fbc04fa27ff408af.hot-update.js.map