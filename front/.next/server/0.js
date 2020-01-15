exports.ids = [0];
exports.modules = {

/***/ "./Components/admin/MakePosts/MakePostsForm.tsx":
/*!******************************************************!*\
  !*** ./Components/admin/MakePosts/MakePostsForm.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js */ "draft-js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-draft-wysiwyg */ "react-draft-wysiwyg");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
/* harmony import */ var _node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_Components_CircularProgressComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/Components/CircularProgressComponent */ "./utils/Components/CircularProgressComponent.tsx");
/* harmony import */ var _reducers_post_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../reducers/post/actions */ "./reducers/post/actions.ts");


var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\admin\\MakePosts\\MakePostsForm.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




 //load editor css






function uploadImageCallBack(file) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID b1e6509aad56ae0");
    const data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

const MakePostsForm = () => {
  const {
    0: editorState,
    1: setEditorState
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: category,
    1: setCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("dev");
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: hidden,
    1: setHidden
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    isPosting,
    isPostingSuccess
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.post.loadingStates);
  const {
    _id,
    nickname
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.user.me); // 포스팅 완료됐으면 튕구기

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (isPostingSuccess) {
      dispatch({
        type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_10__["MAKE_POST_FAILURE"]
      });
      window.localStorage.removeItem("category");
      window.localStorage.removeItem("title");
      window.localStorage.removeItem("content");
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push(`/post/${category}/${title}`);
    }
  }, [isPostingSuccess]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const content = window.localStorage.getItem("content");
    const title = window.localStorage.getItem("title");
    const category = window.localStorage.getItem("category");
    const hidden = window.localStorage.getItem("hidden");

    if (content) {
      setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_4__["EditorState"].createWithContent(Object(draft_js__WEBPACK_IMPORTED_MODULE_4__["convertFromRaw"])(JSON.parse(content))));
    } else {
      setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_4__["EditorState"].createEmpty());
    }

    if (title) {
      setTitle(title);
    } else {
      setTitle("");
    }

    if (category) {
      setCategory(category);
    } else {
      setCategory("");
    }
  }, []);

  const saveContent = content => {
    window.localStorage.setItem("content", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_4__["convertToRaw"])(content)));
  };

  const saveTitle = title => {
    window.localStorage.setItem("title", title);
  };

  const saveCategory = category => {
    window.localStorage.setItem("category", category);
  };

  const onChangeEditorState = editorState => {
    const contentState = editorState.getCurrentContent();
    saveContent(contentState);
    console.log(editorState);
    setEditorState(editorState);
  };

  const _onClickPostButton = e => {
    if (title.trim() !== "") {
      dispatch({
        type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_10__["MAKE_POST_REQUEST"],
        payload: {
          authorId: _id,
          category,
          // @ts-ignore
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_4__["convertToRaw"])(editorState.getCurrentContent())),
          title,
          hidden,
          nickname
        }
      });
    }
  };

  const _onCategoryChange = e => {
    saveCategory(e.target.value);
    setCategory(e.target.value);
  };

  const _onChangeTitle = e => {
    saveTitle(e.target.value);
    setTitle(e.target.value);
  };

  const _onChangeHidden = e => {
    setHidden(e.target.checked);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControl"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
    id: "outlined-basic",
    label: "\uC81C\uBAA9",
    variant: "outlined",
    value: title,
    onChange: _onChangeTitle,
    style: {
      maxWidth: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormLabel"], {
    component: "legend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, "\uCE74\uD14C\uACE0\uB9AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Select"], {
    value: category,
    onChange: _onCategoryChange,
    style: {
      maxWidth: 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
    value: "dev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: undefined
  }, "\uAC1C\uBC1C"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
    value: "hacking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, "\uD574\uD0B9"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
    value: "finance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, "\uC7AC\uD14C\uD06C"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["MenuItem"], {
    value: "business",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, "\uBE44\uC988\uB2C8\uC2A4")), __jsx(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_6__["Editor"] //@ts-ignore
  , {
    wrapperClassName: "demo-wrapper",
    editorState: editorState,
    editorClassName: "demo-editor",
    onEditorStateChange: onChangeEditorState,
    localization: {
      locale: "ko"
    },
    toolbar: {
      inline: {
        inDropdown: true
      },
      list: {
        inDropdown: true
      },
      textAlign: {
        inDropdown: true
      },
      link: {
        inDropdown: true
      },
      history: {
        inDropdown: true
      },
      image: {
        uploadCallback: uploadImageCallBack,
        alt: {
          present: true,
          mandatory: true
        }
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: _onClickPostButton,
    disabled: isPosting,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, isPosting ? __jsx(_utils_Components_CircularProgressComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: undefined
  }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  }, "\uD3EC\uC2A4\uD305")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
      checked: hidden,
      onChange: _onChangeHidden,
      value: hidden,
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: undefined
    }),
    label: "\uC784\uC2DC\uC800\uC7A5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MakePostsForm);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css":
/*!***********************************************************************!*\
  !*** ./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./utils/Components/CircularProgressComponent.tsx":
/*!********************************************************!*\
  !*** ./utils/Components/CircularProgressComponent.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\webdev\\blog\\front\\utils\\Components\\CircularProgressComponent.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CircularProgressComponent = () => {
  const {
    0: progress,
    1: setProgress
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function tick() {
      setProgress(oldProgress => oldProgress >= 100 ? 0 : oldProgress + 1);
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["CircularProgress"], {
    variant: "determinate",
    value: progress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (CircularProgressComponent);

/***/ })

};;
//# sourceMappingURL=0.js.map