webpackHotUpdate(1,{

/***/ "./Components/admin/MakePosts/MakePostsForm.tsx":
/*!******************************************************!*\
  !*** ./Components/admin/MakePosts/MakePostsForm.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css");
/* harmony import */ var _node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_Components_CircularProgressComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/Components/CircularProgressComponent */ "./utils/Components/CircularProgressComponent.tsx");
/* harmony import */ var _reducers_post_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../reducers/post/actions */ "./reducers/post/actions.ts");



var _jsxFileName = "D:\\webdev\\blog\\front\\Components\\admin\\MakePosts\\MakePostsForm.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




 //load editor css






function uploadImageCallBack(file) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID b1e6509aad56ae0");
    var data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", function () {
      var response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", function () {
      var error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

var MakePostsForm = function MakePostsForm() {
  var _jsx;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      editorState = _useState[0],
      setEditorState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("dev"),
      category = _useState2[0],
      setCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      title = _useState3[0],
      setTitle = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      hidden = _useState4[0],
      setHidden = _useState4[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post.loadingStates;
  }),
      isPosting = _useSelector.isPosting,
      isPostingSuccess = _useSelector.isPostingSuccess;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user.me;
  }),
      _id = _useSelector2._id,
      nickname = _useSelector2.nickname; // 포스팅 완료됐으면 튕구기


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (isPostingSuccess) {
      dispatch({
        type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_11__["MAKE_POST_FAILURE"]
      });
      window.localStorage.removeItem("category");
      window.localStorage.removeItem("title");
      window.localStorage.removeItem("content");
      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/post/".concat(category, "/").concat(title));
    }
  }, [isPostingSuccess]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var content = window.localStorage.getItem("content");
    var title = window.localStorage.getItem("title");
    var category = window.localStorage.getItem("category");
    var hidden = window.localStorage.getItem("hidden");

    if (content) {
      setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_5__["EditorState"].createWithContent(Object(draft_js__WEBPACK_IMPORTED_MODULE_5__["convertFromRaw"])(JSON.parse(content))));
    } else {
      setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_5__["EditorState"].createEmpty());
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

  var saveContent = function saveContent(content) {
    window.localStorage.setItem("content", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_5__["convertToRaw"])(content)));
  };

  var saveTitle = function saveTitle(title) {
    window.localStorage.setItem("title", title);
  };

  var saveCategory = function saveCategory(category) {
    window.localStorage.setItem("category", category);
  };

  var onChangeEditorState = function onChangeEditorState(editorState) {
    var contentState = editorState.getCurrentContent();
    saveContent(contentState);
    setEditorState(editorState);
  };

  var _onClickPostButton = function _onClickPostButton(e) {
    if (title.trim() !== "") {
      dispatch({
        type: _reducers_post_actions__WEBPACK_IMPORTED_MODULE_11__["MAKE_POST_REQUEST"],
        payload: {
          authorId: _id,
          category: category,
          // @ts-ignore
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_5__["convertToRaw"])(editorState.getCurrentContent())),
          title: title,
          hidden: hidden,
          nickname: nickname
        }
      });
    }
  };

  var _onCategoryChange = function _onCategoryChange(e) {
    saveCategory(e.target.value);
    setCategory(e.target.value);
  };

  var _onChangeTitle = function _onChangeTitle(e) {
    saveTitle(e.target.value);
    setTitle(e.target.value);
  };

  var _onChangeHidden = function _onChangeHidden(e) {
    setHidden(e.target.checked);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormControl"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
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
      lineNumber: 147
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormLabel"], {
    component: "legend",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "\uCE74\uD14C\uACE0\uB9AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Select"], {
    value: category,
    onChange: _onCategoryChange,
    style: {
      maxWidth: 100
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    value: "dev",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "\uAC1C\uBC1C"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    value: "hacking",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "\uD574\uD0B9"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    value: "finance",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "\uC7AC\uD14C\uD06C"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["MenuItem"], {
    value: "business",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "\uBE44\uC988\uB2C8\uC2A4")), __jsx(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_7__["Editor"] //@ts-ignore
  , (_jsx = {
    wrapperClassName: "demo-wrapper",
    editorClassName: "demo-editor",
    editorState: editorState
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "editorClassName", "demo-editor"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onEditorStateChange", onChangeEditorState), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "localization", {
    locale: "ko"
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "toolbar", {
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
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 167
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    variant: "contained",
    color: "primary",
    onClick: _onClickPostButton,
    disabled: isPosting,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, isPosting ? __jsx(_utils_Components_CircularProgressComponent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "\uD3EC\uC2A4\uD305")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["FormControlLabel"], {
    control: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Checkbox"], {
      checked: hidden,
      onChange: _onChangeHidden,
      value: hidden,
      color: "primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }),
    label: "\uC784\uC2DC\uC800\uC7A5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MakePostsForm);

/***/ })

})
//# sourceMappingURL=1.6091bffbff904c0a226d.hot-update.js.map