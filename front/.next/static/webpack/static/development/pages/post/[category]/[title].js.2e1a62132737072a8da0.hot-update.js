webpackHotUpdate("static\\development\\pages\\post\\[category]\\[title].js",{

/***/ "./Components/draft/renderer.config.js":
/*!*********************************************!*\
  !*** ./Components/draft/renderer.config.js ***!
  \*********************************************/
/*! exports provided: renderers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderers", function() { return renderers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redraft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redraft */ "./node_modules/redraft/lib/index.js");
/* harmony import */ var redraft__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redraft__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\webdev\\web_blog\\front\\Components\\draft\\renderer.config.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var styleMap = {
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

var InlineWrapper = function InlineWrapper(_ref) {
  var children = _ref.children,
      style = _ref.style,
      key = _ref.key;
  return __jsx("span", {
    key: key,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children);
}; // this Component results in a flatter output as it can have multiple styles (also possibly less semantic)
// Api aligned w draft-js, aliasedElements are not required as draft-js uses them for parsing pasted html


var blockRenderMap = {
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
var renderers = {
  // note the styles key and createStylesRenderer helper
  styles: Object(redraft__WEBPACK_IMPORTED_MODULE_1__["createStylesRenderer"])(InlineWrapper, styleMap),
  blocks: Object(redraft__WEBPACK_IMPORTED_MODULE_1__["createBlockRenderer"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement, blockRenderMap)
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
false,

/***/ "./node_modules/core-js/library/fn/object/assign.js":
false,

/***/ "./node_modules/core-js/library/modules/_object-assign.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.assign.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js":
/*!**************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/punycode/punycode.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/redraft/lib/ContentNode.js":
/*!*************************************************!*\
  !*** ./node_modules/redraft/lib/ContentNode.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _arrayEqual = __webpack_require__(/*! ./helpers/arrayEqual */ "./node_modules/redraft/lib/helpers/arrayEqual.js");

var _arrayEqual2 = _interopRequireDefault(_arrayEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContentNode = function () {
  function ContentNode(props) {
    _classCallCheck(this, ContentNode);

    this.content = props.content || [];
    this.start = typeof props.start !== 'undefined' ? props.start : null;
    this.end = typeof props.end !== 'undefined' ? props.end : null;
    this.entity = typeof props.entity !== 'undefined' ? props.entity : null;
    this.decorator = typeof props.decorator !== 'undefined' ? props.decorator : null;
    this.decoratorProps = props.decoratorProps || null;
    this.decoratedText = typeof props.decoratedText !== 'undefined' ? props.decoratedText : null;
    this.contentState = props.contentState;
    this.style = props.style || null;
    this.styles = props.styles || null;
    this.block = props.block || {};
  }

  _createClass(ContentNode, [{
    key: 'getCurrentContent',
    value: function getCurrentContent() {
      return this.content[this.content.length - 1];
    }
  }, {
    key: 'addToCurrentContent',
    value: function addToCurrentContent(string) {
      this.content[this.content.length - 1] = this.content[this.content.length - 1] + string;
    }
  }, {
    key: 'handleFlatPush',
    value: function handleFlatPush(string, stack) {
      var current = this.getCurrentContent();
      // if the stacks are equal just add the string to the current node
      if (current instanceof ContentNode && (0, _arrayEqual2.default)(stack, current.styles)) {
        current.addToCurrentContent(string);
        return;
      }
      // create a node with whole styles stack
      var newNode = new ContentNode({ styles: [].concat(_toConsumableArray(stack)), content: [string] });
      this.content.push(newNode);
    }
  }, {
    key: 'pushContent',
    value: function pushContent(string) {
      var stack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var flat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      // we can just concat strings when both the pushed item
      // and the last element of the content array is a string
      if (!stack || stack.length < 1) {
        if (typeof string === 'string' && typeof this.getCurrentContent() === 'string') {
          this.addToCurrentContent(string);
        } else {
          this.content.push(string);
        }
        return this;
      }
      // handle flat structure
      if (flat) {
        this.handleFlatPush(string, stack);
        return this;
      }

      var _stack = _toArray(stack),
          head = _stack[0],
          rest = _stack.slice(1);

      var current = this.getCurrentContent();
      if (current instanceof ContentNode && current.style === head) {
        current.pushContent(string, rest, flat);
      } else {
        var newNode = new ContentNode({ style: head });
        newNode.pushContent(string, rest, flat);
        this.content.push(newNode);
      }
      return this;
    }
  }]);

  return ContentNode;
}();

exports.default = ContentNode;

/***/ }),

/***/ "./node_modules/redraft/lib/RawParser.js":
/*!***********************************************!*\
  !*** ./node_modules/redraft/lib/RawParser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _punycode = __webpack_require__(/*! punycode */ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js");

var _punycode2 = _interopRequireDefault(_punycode);

var _ContentNode = __webpack_require__(/*! ./ContentNode */ "./node_modules/redraft/lib/ContentNode.js");

var _ContentNode2 = _interopRequireDefault(_ContentNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Slices the decoded ucs2 array and encodes the result back to a string representation
 */
var getString = function getString(array, from, to) {
  return _punycode2.default.ucs2.encode(array.slice(from, to));
};

/**
 * creates nodes with entity keys and the endOffset
 */
function createNodes(entityRanges) {
  var decoratorRanges = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var textArray = arguments[2];
  var block = arguments[3];

  var lastIndex = 0;
  var mergedRanges = [].concat(_toConsumableArray(entityRanges), _toConsumableArray(decoratorRanges)).sort(function (a, b) {
    return a.offset - b.offset;
  });
  var nodes = [];
  // if thers no entities will return just a single item
  if (mergedRanges.length < 1) {
    nodes.push(new _ContentNode2.default({ block: block, start: 0, end: textArray.length }));
    return nodes;
  }

  mergedRanges.forEach(function (range) {
    // create an empty node for content between previous and this entity
    if (range.offset > lastIndex) {
      nodes.push(new _ContentNode2.default({ block: block, start: lastIndex, end: range.offset }));
    }
    // push the node for the entity
    nodes.push(new _ContentNode2.default({
      block: block,
      entity: range.key,
      decorator: range.component,
      decoratorProps: range.decoratorProps,
      decoratedText: range.component ? getString(textArray, range.offset, range.offset + range.length) : undefined,
      start: range.offset,
      end: range.offset + range.length,
      contentState: range.contentState
    }));
    lastIndex = range.offset + range.length;
  });

  // finaly add a node for the remaining text if any
  if (lastIndex < textArray.length) {
    nodes.push(new _ContentNode2.default({
      block: block,
      start: lastIndex,
      end: textArray.length
    }));
  }
  return nodes;
}

function addIndexes(indexes, ranges) {
  ranges.forEach(function (range) {
    indexes.push(range.offset);
    indexes.push(range.offset + range.length);
  });
  return indexes;
}

/**
 * Creates an array of sorted char indexes to avoid iterating over every single character
 */
function getRelevantIndexes(text, inlineRanges) {
  var entityRanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var decoratorRanges = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var relevantIndexes = [];
  // set indexes to corresponding keys to ensure uniquenes
  relevantIndexes = addIndexes(relevantIndexes, inlineRanges);
  relevantIndexes = addIndexes(relevantIndexes, entityRanges);
  relevantIndexes = addIndexes(relevantIndexes, decoratorRanges);
  // add text start and end to relevant indexes
  relevantIndexes.push(0);
  relevantIndexes.push(text.length);
  var uniqueRelevantIndexes = relevantIndexes.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
  // and sort it
  return uniqueRelevantIndexes.sort(function (aa, bb) {
    return aa - bb;
  });
}

var RawParser = function () {
  function RawParser(_ref) {
    var _ref$flat = _ref.flat,
        flat = _ref$flat === undefined ? false : _ref$flat;

    _classCallCheck(this, RawParser);

    this.flat = flat;
  }

  _createClass(RawParser, [{
    key: 'relevantStyles',
    value: function relevantStyles(offset) {
      var styles = this.ranges.filter(function (range) {
        return offset >= range.offset && offset < range.offset + range.length;
      });
      return styles.map(function (style) {
        return style.style;
      });
    }

    /**
     * Loops over relevant text indexes
     */

  }, {
    key: 'nodeIterator',
    value: function nodeIterator(node, start, end) {
      var _this = this;

      var indexes = this.relevantIndexes.slice(this.relevantIndexes.indexOf(start), this.relevantIndexes.indexOf(end));
      // loops while next index is smaller than the endOffset
      indexes.forEach(function (index, key) {
        // figure out what styles this char and the next char need
        // (regardless of whether there *is* a next char or not)
        var characterStyles = _this.relevantStyles(index);
        // calculate distance or set it to 1 if thers no next index
        var distance = indexes[key + 1] ? indexes[key + 1] - index : 1;
        // add all the chars up to next relevantIndex
        var text = getString(_this.textArray, index, index + distance);
        node.pushContent(text, characterStyles, _this.flat);

        // if thers no next index and thers more text left to push
        if (!indexes[key + 1] && index < end) {
          node.pushContent(getString(_this.textArray, index + 1, end), _this.relevantStyles(end - 1), _this.flat);
        }
      });
      return node;
    }

    /**
     * Converts raw block to object with nested style objects,
     * while it returns an object not a string
     * the idea is still mostly same as backdraft.js (https://github.com/evanc/backdraft-js)
     */

  }, {
    key: 'parse',
    value: function parse(block) {
      var _this2 = this;

      var text = block.text,
          ranges = block.inlineStyleRanges,
          entityRanges = block.entityRanges,
          _block$decoratorRange = block.decoratorRanges,
          decoratorRanges = _block$decoratorRange === undefined ? [] : _block$decoratorRange;
      // Some unicode charactes actualy have length of more than 1
      // this creates an array of code points using es6 string iterator

      this.textArray = _punycode2.default.ucs2.decode(text);
      this.ranges = ranges;
      this.iterator = 0;
      // get all the relevant indexes for whole block
      this.relevantIndexes = getRelevantIndexes(text, ranges, entityRanges, decoratorRanges);
      // create entity or empty nodes to place the inline styles in
      var nodes = createNodes(entityRanges, decoratorRanges, this.textArray, block);
      var parsedNodes = nodes.map(function (node) {
        return _this2.nodeIterator(node, node.start, node.end);
      });
      return new _ContentNode2.default({ block: block, content: parsedNodes });
    }
  }]);

  return RawParser;
}();

exports.default = RawParser;

/***/ }),

/***/ "./node_modules/redraft/lib/createBlockRenderer.js":
/*!*********************************************************!*\
  !*** ./node_modules/redraft/lib/createBlockRenderer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var KEY_DELIMITER = ',';

// Return either a single key if present or joined keys array from props;
var getKey = function getKey(_ref, key) {
  var keys = _ref.keys;

  if (key) {
    return key;
  }
  if (!keys) {
    return undefined;
  }
  return keys.join(KEY_DELIMITER);
};

// Call the wrapper with element, props, and spread children
// this order is specific to React.createElement
var getBlock = function getBlock(element, wrapper) {
  return function (children, properties, key) {
    var props = Object.assign({}, properties);
    var blockKey = getKey(props, key);
    delete props.depth;
    delete props.keys;
    return wrapper.apply(undefined, [element, Object.assign({}, props, { key: blockKey })].concat(_toConsumableArray(children)));
  };
};

// Handle blocks with wrapper element defined
var getWrappedChildren = function getWrappedChildren(callback, block, _ref2) {
  var children = _ref2.children,
      props = _ref2.props,
      key = _ref2.key;

  var wrapperBlockFn = getBlock(block.wrapper, callback);
  var blockFn = getBlock(block.element, callback, true);
  return wrapperBlockFn(children.map(function (child, ii) {
    return blockFn(child, { depth: props.depth }, props.keys && props.keys[ii]);
  }), props, key);
};

/**
* Returns a blockRenderer crated from a blockRendererMap using a callback ie. React.createElement
*/
var createBlockRenderer = function createBlockRenderer(callback, blockMap) {
  var renderer = {};
  Object.keys(blockMap).forEach(function (item) {
    var block = blockMap[item];
    // If wrapper is present children need to be nested inside
    if (block.wrapper) {
      renderer[item] = function (children, props, key) {
        return getWrappedChildren(callback, block, {
          children: children,
          props: props,
          key: key
        });
      };
      return;
    }
    // Wrapper is not present
    renderer[item] = getBlock(block.element, callback);
  });
  return renderer;
};

exports.default = createBlockRenderer;

/***/ }),

/***/ "./node_modules/redraft/lib/createStyleRenderer.js":
/*!*********************************************************!*\
  !*** ./node_modules/redraft/lib/createStyleRenderer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Returns a single style object provided styleArray and stylesMap
 */
var reduceStyles = function reduceStyles(styleArray, stylesMap) {
  return styleArray.map(function (style) {
    return stylesMap[style];
  }).reduce(function (prev, next) {
    var mergedStyles = {};
    if (next !== undefined) {
      var key = 'text-decoration' in next ? 'text-decoration' : 'textDecoration';
      if (next[key] !== prev[key]) {
        // .trim() is necessary for IE9/10/11 and Edge
        mergedStyles[key] = [prev[key], next[key]].join(' ').trim();
      }
    }
    return Object.assign(prev, next, mergedStyles);
  }, {});
};

/**
 * Returns a styleRenderer from a customStyleMap and a wrapper callback (Component)
 */
var createStyleRenderer = function createStyleRenderer(wrapper, stylesMap) {
  return function (children, styleArray, params) {
    var style = reduceStyles(styleArray, stylesMap);
    return wrapper(Object.assign({}, { children: children }, params, { style: style }));
  };
};

exports.default = createStyleRenderer;

/***/ }),

/***/ "./node_modules/redraft/lib/defaultOptions.js":
/*!****************************************************!*\
  !*** ./node_modules/redraft/lib/defaultOptions.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultOptions = {
  joinOutput: false,
  cleanup: {
    after: ['atomic'],
    types: ['unstyled'],
    trim: false,
    split: true
  },
  blockFallback: 'unstyled'
};

exports.default = defaultOptions;

/***/ }),

/***/ "./node_modules/redraft/lib/helpers/CompositeDecorator.js":
/*!****************************************************************!*\
  !*** ./node_modules/redraft/lib/helpers/CompositeDecorator.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// eslint-disable-next-line import/no-extraneous-dependencies
var DELIMITER = '.';

/**
 * Determine whether we can occupy the specified slice of the decorations
 * array.
 */

// eslint-disable-next-line import/no-extraneous-dependencies
/**
 * This is only slighly modified version of draft-js CompositeDraftDecorator
 * https://github.com/facebook/draft-js/blob/dc27624caaaede4dad9d182ff9918a5da8f83c99/src/model/decorators/CompositeDraftDecorator.js
 *
 * Basicly it just swaps the Immutable.js List with own ListStub
 *
 * 
 */

// eslint-disable-next-line import/no-extraneous-dependencies
function canOccupySlice(decorations, start, end) {
  // eslint-disable-next-line no-plusplus
  for (var ii = start; ii < end; ii++) {
    if (decorations[ii] != null) {
      return false;
    }
  }
  return true;
}

/**
 * Splice the specified component into our decoration array at the desired
 * range.
 */
function occupySlice(targetArr, start, end, componentKey) {
  // eslint-disable-next-line no-plusplus
  for (var ii = start; ii < end; ii++) {
    // eslint-disable-next-line no-param-reassign
    targetArr[ii] = componentKey;
  }
}
/**
 * A CompositeDraftDecorator traverses through a list of DraftDecorator
 * instances to identify sections of a ContentBlock that should be rendered
 * in a "decorated" manner. For example, hashtags, mentions, and links may
 * be intended to stand out visually, be rendered as anchors, etc.
 *
 * The list of decorators supplied to the constructor will be used in the
 * order they are provided. This allows the caller to specify a priority for
 * string matching, in case of match collisions among decorators.
 *
 * For instance, I may have a link with a `#` in its text. Though this section
 * of text may match our hashtag decorator, it should not be treated as a
 * hashtag. I should therefore list my link DraftDecorator
 * before my hashtag DraftDecorator when constructing this composite
 * decorator instance.
 *
 * Thus, when a collision like this is encountered, the earlier match is
 * preserved and the new match is discarded.
 */

var CompositeDraftDecorator = function () {
  function CompositeDraftDecorator(decorators) {
    _classCallCheck(this, CompositeDraftDecorator);

    // Copy the decorator array, since we use this array order to determine
    // precedence of decoration matching. If the array is mutated externally,
    // we don't want to be affected here.
    this.decorators = decorators.slice();
  }

  _createClass(CompositeDraftDecorator, [{
    key: 'getDecorations',
    value: function getDecorations(block, contentState) {
      var decorations = Array(block.getText().length).fill(null);

      this.decorators.forEach(function ( /* object*/decorator, /* number*/ii) {
        var counter = 0;
        var strategy = decorator.strategy;

        var callback = function callback( /* number*/start, /* number*/end) {
          // Find out if any of our matching range is already occupied
          // by another decorator. If so, discard the match. Otherwise, store
          // the component key for rendering.
          if (canOccupySlice(decorations, start, end)) {
            occupySlice(decorations, start, end, ii + DELIMITER + counter);
            // eslint-disable-next-line no-plusplus
            counter++;
          }
        };
        strategy(block, callback, contentState);
      });

      return decorations;
    }
  }, {
    key: 'getComponentForKey',
    value: function getComponentForKey(key) {
      var componentKey = parseInt(key.split(DELIMITER)[0], 10);
      return this.decorators[componentKey].component;
    }
  }, {
    key: 'getPropsForKey',
    value: function getPropsForKey(key) {
      var componentKey = parseInt(key.split(DELIMITER)[0], 10);
      return this.decorators[componentKey].props;
    }
  }]);

  return CompositeDraftDecorator;
}();

exports.default = CompositeDraftDecorator;

/***/ }),

/***/ "./node_modules/redraft/lib/helpers/MultiDecorator.js":
/*!************************************************************!*\
  !*** ./node_modules/redraft/lib/helpers/MultiDecorator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KEY_SEPARATOR = '-';

var MultiDecorator = function () {
  function MultiDecorator(decorators) {
    _classCallCheck(this, MultiDecorator);

    this.decorators = decorators;
  }

  /**
   * Return list of decoration IDs per character
   *
   * @param {ContentBlock} block
   * @return {List<String>}
   */


  _createClass(MultiDecorator, [{
    key: 'getDecorations',
    value: function getDecorations(block, contentState) {
      var decorations = new Array(block.getText().length).fill(null);
      this.decorators.forEach(function (decorator, i) {
        var subDecorations = decorator.getDecorations(block, contentState);

        subDecorations.forEach(function (key, offset) {
          if (!key) {
            return;
          }

          decorations[offset] = i + KEY_SEPARATOR + key;
        });
      });

      return decorations;
    }

    /**
     * Return component to render a decoration
     *
     * @param {String} key
     * @return {Function}
     */

  }, {
    key: 'getComponentForKey',
    value: function getComponentForKey(key) {
      var decorator = this.getDecoratorForKey(key);
      return decorator.getComponentForKey(MultiDecorator.getInnerKey(key));
    }

    /**
     * Return props to render a decoration
     *
     * @param {String} key
     * @return {Object}
     */

  }, {
    key: 'getPropsForKey',
    value: function getPropsForKey(key) {
      var decorator = this.getDecoratorForKey(key);
      return decorator.getPropsForKey(MultiDecorator.getInnerKey(key));
    }

    /**
     * Return a decorator for a specific key
     *
     * @param {String} key
     * @return {Decorator}
     */

  }, {
    key: 'getDecoratorForKey',
    value: function getDecoratorForKey(key) {
      var parts = key.split(KEY_SEPARATOR);
      var index = Number(parts[0]);

      return this.decorators[index];
    }

    /**
     * Return inner key for a decorator
     *
     * @param {String} key
     * @return {String}
     */

  }], [{
    key: 'getInnerKey',
    value: function getInnerKey(key) {
      var parts = key.split(KEY_SEPARATOR);
      return parts.slice(1).join(KEY_SEPARATOR);
    }
  }]);

  return MultiDecorator;
}();

exports.default = MultiDecorator;

/***/ }),

/***/ "./node_modules/redraft/lib/helpers/arrayEqual.js":
/*!********************************************************!*\
  !*** ./node_modules/redraft/lib/helpers/arrayEqual.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Very simple array comparison
 */
var arraysEqual = function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // defining for loops with airbnb config is a pain maybe should disable some rules
  // eslint-disable-next-line
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

exports.default = arraysEqual;

/***/ }),

/***/ "./node_modules/redraft/lib/helpers/checkCleanup.js":
/*!**********************************************************!*\
  !*** ./node_modules/redraft/lib/helpers/checkCleanup.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Check if block has any text, respects trim setting
 */
var hasText = function hasText(text, _ref) {
  var trim = _ref.trim;
  return !!(trim ? text.trim() : text);
};

/**
 * Check if block has any data like text, metadata or entities
 */
var hasData = function hasData(block, options) {
  if (hasText(block.text, options)) {
    return true;
  }
  if (block.data && Object.keys(block.data).length) {
    return true;
  }
  if (block.entityRanges && block.entityRanges.length) {
    return true;
  }
  return false;
};

/**
 * Checks if current block is empty and if it should be ommited according to passed settings
 */
var checkCleanup = function checkCleanup(block, prevType, _ref2) {
  var cleanup = _ref2.cleanup;

  if (!cleanup || hasData(block, cleanup)) {
    return false;
  }
  // Check if cleanup is enabled after prev type
  if (cleanup.after && cleanup.after !== 'all' && !(cleanup.after.indexOf(prevType) !== -1)) {
    return false;
  }
  // Handle the except array if passed
  if (cleanup.except && !(cleanup.except.indexOf(block.type) !== -1)) {
    return true;
  }
  // Finaly if cleanup is enabled for current type
  if (cleanup.types && (cleanup.types === 'all' || cleanup.types.indexOf(block.type) !== -1)) {
    return true;
  }
  return false;
};

exports.default = checkCleanup;

/***/ }),

/***/ "./node_modules/redraft/lib/helpers/checkJoin.js":
/*!*******************************************************!*\
  !*** ./node_modules/redraft/lib/helpers/checkJoin.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Joins the input if the joinOutput option is enabled
 */
var checkJoin = function checkJoin(input, options) {
  if (Array.isArray(input) && options.joinOutput) {
    return input.join('');
  }
  return input;
};

exports.default = checkJoin;

/***/ }),

/***/ "./node_modules/redraft/lib/helpers/getKeyGenerator.js":
/*!*************************************************************!*\
  !*** ./node_modules/redraft/lib/helpers/getKeyGenerator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// return a new generator wich produces sequential keys for nodes
var getKeyGenerator = function getKeyGenerator() {
  var key = 0;
  var keyGenerator = function keyGenerator() {
    var current = key;
    key += 1;
    return current; // eslint-disable-line no-plusplus
  };
  return keyGenerator;
};

exports.default = getKeyGenerator;

/***/ }),

/***/ "./node_modules/redraft/lib/helpers/pushString.js":
/*!********************************************************!*\
  !*** ./node_modules/redraft/lib/helpers/pushString.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Concats or insets a string at given array index
 */
var pushString = function pushString(string, array, index) {
  var tempArray = array;
  if (!array[index]) {
    tempArray[index] = string;
  } else {
    tempArray[index] += string;
  }
  return tempArray;
};

exports.default = pushString;

/***/ }),

/***/ "./node_modules/redraft/lib/helpers/stubContentBlock.js":
/*!**************************************************************!*\
  !*** ./node_modules/redraft/lib/helpers/stubContentBlock.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This is a simple replacement for draft-js ContentBlock,
 * CharacterList or any related methods are not implented here
 */

var ContentBlockStub = function () {
  function ContentBlockStub(block) {
    _classCallCheck(this, ContentBlockStub);

    Object.assign(this, block);
  }

  _createClass(ContentBlockStub, [{
    key: "get",
    value: function get(name) {
      return this[name];
    }
  }, {
    key: "getText",
    value: function getText() {
      return this.text;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }, {
    key: "getKey",
    value: function getKey() {
      return this.key;
    }
  }, {
    key: "getLength",
    value: function getLength() {
      return this.text.length;
    }
  }, {
    key: "getDepth",
    value: function getDepth() {
      return this.depth;
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }]);

  return ContentBlockStub;
}();

var stubContentBlock = function stubContentBlock(block) {
  return new ContentBlockStub(block);
};

exports.default = stubContentBlock;

/***/ }),

/***/ "./node_modules/redraft/lib/helpers/warn.js":
/*!**************************************************!*\
  !*** ./node_modules/redraft/lib/helpers/warn.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Logs a warning message if not in production
 */
var warn = function warn(msg) {
  if (true) {
    console.warn('Redraft: ' + msg); // eslint-disable-line no-console
  }
};

exports.default = warn;

/***/ }),

/***/ "./node_modules/redraft/lib/index.js":
/*!*******************************************!*\
  !*** ./node_modules/redraft/lib/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompositeDecorator = exports.renderNode = exports.RawParser = exports.createBlockRenderer = exports.createStylesRenderer = undefined;

var _RawParser = __webpack_require__(/*! ./RawParser */ "./node_modules/redraft/lib/RawParser.js");

var _RawParser2 = _interopRequireDefault(_RawParser);

var _createStyleRenderer = __webpack_require__(/*! ./createStyleRenderer */ "./node_modules/redraft/lib/createStyleRenderer.js");

var _createStyleRenderer2 = _interopRequireDefault(_createStyleRenderer);

var _render = __webpack_require__(/*! ./render */ "./node_modules/redraft/lib/render.js");

var _CompositeDecorator = __webpack_require__(/*! ./helpers/CompositeDecorator */ "./node_modules/redraft/lib/helpers/CompositeDecorator.js");

var _CompositeDecorator2 = _interopRequireDefault(_CompositeDecorator);

var _createBlockRenderer = __webpack_require__(/*! ./createBlockRenderer */ "./node_modules/redraft/lib/createBlockRenderer.js");

var _createBlockRenderer2 = _interopRequireDefault(_createBlockRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createStylesRenderer = _createStyleRenderer2.default;
exports.createBlockRenderer = _createBlockRenderer2.default;
exports.RawParser = _RawParser2.default;
exports.renderNode = _render.renderNode;
exports.CompositeDecorator = _CompositeDecorator2.default;
exports.default = _render.render;

/***/ }),

/***/ "./node_modules/redraft/lib/render.js":
/*!********************************************!*\
  !*** ./node_modules/redraft/lib/render.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = exports.renderNode = undefined;

var _RawParser = __webpack_require__(/*! ./RawParser */ "./node_modules/redraft/lib/RawParser.js");

var _RawParser2 = _interopRequireDefault(_RawParser);

var _warn = __webpack_require__(/*! ./helpers/warn */ "./node_modules/redraft/lib/helpers/warn.js");

var _warn2 = _interopRequireDefault(_warn);

var _checkCleanup = __webpack_require__(/*! ./helpers/checkCleanup */ "./node_modules/redraft/lib/helpers/checkCleanup.js");

var _checkCleanup2 = _interopRequireDefault(_checkCleanup);

var _getKeyGenerator = __webpack_require__(/*! ./helpers/getKeyGenerator */ "./node_modules/redraft/lib/helpers/getKeyGenerator.js");

var _getKeyGenerator2 = _interopRequireDefault(_getKeyGenerator);

var _checkJoin = __webpack_require__(/*! ./helpers/checkJoin */ "./node_modules/redraft/lib/helpers/checkJoin.js");

var _checkJoin2 = _interopRequireDefault(_checkJoin);

var _pushString = __webpack_require__(/*! ./helpers/pushString */ "./node_modules/redraft/lib/helpers/pushString.js");

var _pushString2 = _interopRequireDefault(_pushString);

var _defaultOptions = __webpack_require__(/*! ./defaultOptions */ "./node_modules/redraft/lib/defaultOptions.js");

var _defaultOptions2 = _interopRequireDefault(_defaultOptions);

var _withDecorators = __webpack_require__(/*! ./withDecorators */ "./node_modules/redraft/lib/withDecorators.js");

var _withDecorators2 = _interopRequireDefault(_withDecorators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEY_DELIMITER = '.';

/**
 * Recursively renders a node with nested nodes with given callbacks
 */
var renderNode = exports.renderNode = function renderNode(node, inlineRenderers, entityRenderers, styleRenderers, entityMap, options, keyGenerator) {
  if (node.styles && styleRenderers) {
    return styleRenderers((0, _checkJoin2.default)(node.content, options), node.styles, { key: keyGenerator() });
  }
  var children = [];
  var index = 0;
  node.content.forEach(function (part) {
    if (typeof part === 'string') {
      children = (0, _pushString2.default)(part, children, index);
    } else {
      index += 1;
      children[index] = renderNode(part, inlineRenderers, entityRenderers, styleRenderers, entityMap, options, keyGenerator);
      index += 1;
    }
  });
  if (node.style && inlineRenderers[node.style]) {
    return inlineRenderers[node.style]((0, _checkJoin2.default)(children, options), { key: keyGenerator() });
  }
  if (node.entity !== null) {
    var entity = entityMap[node.entity];
    if (entity && entityRenderers[entity.type]) {
      return entityRenderers[entity.type]((0, _checkJoin2.default)(children, options), entity.data, { key: node.entity });
    }
  }
  if (node.decorator !== null) {
    // FIXME: few props are missing see https://github.com/facebook/draft-js/blob/0c609d9d3671fdbbe2a290ed160a0537f846f08e/src/component/contents/DraftEditorBlock.react.js#L196-L205
    var decoratorOffsetKey = [node.block.key, node.start, 0].join(KEY_DELIMITER);
    return node.decorator(Object.assign({
      children: (0, _checkJoin2.default)(children, options),
      decoratedText: node.decoratedText,
      contentState: node.contentState,
      entityKey: node.entity,
      offsetKey: decoratorOffsetKey,
      key: decoratorOffsetKey
    }, node.decoratorProps));
  }
  return children;
};

/**
 * Nests blocks by depth as children
 */
var byDepth = function byDepth(blocks) {
  var group = [];
  var depthStack = [];
  var prevDepth = 0;
  var unwind = function unwind(targetDepth) {
    var i = prevDepth - targetDepth;
    // in case depthStack is too short for target depth
    if (depthStack.length < i) {
      i = depthStack.length;
    }
    for (i; i > 0; i -= 1) {
      var tmp = group;
      group = depthStack.pop();
      group[group.length - 1].children = tmp;
    }
  };

  blocks.forEach(function (block) {
    // if type of the block has changed render the block and clear group
    if (prevDepth < block.depth) {
      depthStack.push(group);
      group = [];
    } else if (prevDepth > block.depth) {
      unwind(block.depth);
    }
    prevDepth = block.depth;
    group.push(Object.assign({}, block));
  });
  if (prevDepth !== 0) {
    unwind(0);
  }
  return group;
};

/**
 * Conditionaly render a group if its not empty,
 * pass all the params to the renderers
 */
var renderGroup = function renderGroup(group, blockRenderers, rendered, params, options) {
  var type = params.prevType,
      depth = params.prevDepth,
      keys = params.prevKeys,
      data = params.prevData;
  // in case current group is empty it should not be rendered

  if (group.length === 0) {
    return;
  }
  var renderCb = blockRenderers[type] || blockRenderers[options.blockFallback];
  if (renderCb) {
    var props = {
      depth: depth,
      keys: keys
    };
    if (data && data.some(function (item) {
      return !!item;
    })) {
      props.data = data;
    }
    rendered.push(renderCb(group, props));
    return;
  }
  rendered.push(group);
};

/**
 * Renders blocks grouped by type using provided blockStyleRenderers
 */
var renderBlocks = function renderBlocks(blocks) {
  var inlineRenderers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var blockRenderers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var entityRenderers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var stylesRenderer = arguments[4];
  var entityMap = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
  var userOptions = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};

  // initialize
  var options = Object.assign({}, _defaultOptions2.default, userOptions);
  var rendered = [];
  var group = [];
  var prevType = null;
  var prevDepth = 0;
  var prevKeys = [];
  var prevData = [];
  var splitGroup = false;
  var Parser = new _RawParser2.default({ flat: !!stylesRenderer });
  blocks.forEach(function (block) {
    if ((0, _checkCleanup2.default)(block, prevType, options)) {
      // Set the split flag if enabled
      if (options.cleanup.split === true) {
        splitGroup = true;
      }
      return;
    }
    var node = Parser.parse(block);
    var renderedNode = renderNode(node, inlineRenderers, entityRenderers, stylesRenderer, entityMap, options, (0, _getKeyGenerator2.default)());
    // if type of the block has changed or the split flag is set
    // render and clear group
    if (prevType && prevType !== block.type || splitGroup) {
      renderGroup(group, blockRenderers, rendered, { prevType: prevType, prevDepth: prevDepth, prevKeys: prevKeys, prevData: prevData }, options);
      // reset group vars
      // IDEA: might be worth to group those into an instance and just newup a new one
      prevData = [];
      prevKeys = [];
      group = [];
      splitGroup = false;
    }
    // handle children
    if (block.children) {
      var children = renderBlocks(block.children, inlineRenderers, blockRenderers, entityRenderers, stylesRenderer, entityMap, options);
      renderedNode.push(children);
    }
    // push current node to group
    group.push(renderedNode);

    // lastly save current type for refference
    prevType = block.type;
    prevDepth = block.depth;
    prevKeys.push(block.key);
    prevData.push(block.data);
  });
  // render last group
  renderGroup(group, blockRenderers, rendered, { prevType: prevType, prevDepth: prevDepth, prevKeys: prevKeys, prevData: prevData }, options);
  return (0, _checkJoin2.default)(rendered, options);
};

/**
 * Converts and renders each block of Draft.js rawState
 */
var render = exports.render = function render(raw) {
  var renderers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!raw || !Array.isArray(raw.blocks)) {
    (0, _warn2.default)('invalid raw object');
    return null;
  }
  // If the lenght of the blocks array is 0 its should not log a warning but still return a null
  if (!raw.blocks.length) {
    return null;
  }
  var inlineRenderers = renderers.inline,
      blockRenderers = renderers.blocks,
      entityRenderers = renderers.entities,
      stylesRenderer = renderers.styles,
      decorators = renderers.decorators;
  // If decorators are present, they are maped with the blocks array

  var blocksWithDecorators = decorators ? (0, _withDecorators2.default)(raw, decorators, options) : raw.blocks;
  // Nest blocks by depth
  var blocks = byDepth(blocksWithDecorators);
  return renderBlocks(blocks, inlineRenderers, blockRenderers, entityRenderers, stylesRenderer, raw.entityMap, options);
};

/***/ }),

/***/ "./node_modules/redraft/lib/withDecorators.js":
/*!****************************************************!*\
  !*** ./node_modules/redraft/lib/withDecorators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _punycode = __webpack_require__(/*! punycode */ "./node_modules/node-libs-browser/node_modules/punycode/punycode.js");

var _punycode2 = _interopRequireDefault(_punycode);

var _CompositeDecorator = __webpack_require__(/*! ./helpers/CompositeDecorator */ "./node_modules/redraft/lib/helpers/CompositeDecorator.js");

var _CompositeDecorator2 = _interopRequireDefault(_CompositeDecorator);

var _MultiDecorator = __webpack_require__(/*! ./helpers/MultiDecorator */ "./node_modules/redraft/lib/helpers/MultiDecorator.js");

var _MultiDecorator2 = _interopRequireDefault(_MultiDecorator);

var _stubContentBlock = __webpack_require__(/*! ./helpers/stubContentBlock */ "./node_modules/redraft/lib/helpers/stubContentBlock.js");

var _stubContentBlock2 = _interopRequireDefault(_stubContentBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Use CompositeDecorator to build decoratorRanges with ranges, components, and props
 */

// This offsets or rather recalculates ranges for decorators
// with punycode.ucs2.decode
var offsetRanges = function offsetRanges(ranges, block) {
  // if there are no decorator skip this step
  ranges.forEach(function (range) {
    var pre = block.text.substring(0, range.offset);
    var decorated = block.text.substring(range.offset, range.offset + range.length);
    // eslint-disable-next-line no-param-reassign
    range.offset = _punycode2.default.ucs2.decode(pre).length;
    // eslint-disable-next-line no-param-reassign
    range.length = _punycode2.default.ucs2.decode(decorated).length;
  });
  return ranges;
};
// Return true if decorator implements the DraftDecoratorType interface
// @see https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecoratorType.js
var decoratorIsCustom = function decoratorIsCustom(decorator) {
  return typeof decorator.getDecorations === 'function' && typeof decorator.getComponentForKey === 'function' && typeof decorator.getPropsForKey === 'function';
};

var resolveDecorators = function resolveDecorators(decorators) {
  var compositeDecorator = new _CompositeDecorator2.default(decorators.filter(function (decorator) {
    return !decoratorIsCustom(decorator);
  }));

  var customDecorators = decorators.filter(function (decorator) {
    return decoratorIsCustom(decorator);
  });
  var decor = [].concat(_toConsumableArray(customDecorators), [compositeDecorator]);
  return new _MultiDecorator2.default(decor);
};

var decorateBlock = function decorateBlock(block, decorators, contentState, _ref) {
  var createContentBlock = _ref.createContentBlock;

  var decoratorRanges = [];
  // create a Decorator instance
  var decorator = resolveDecorators(decorators);
  // create ContentBlock or a stub
  var contentBlock = createContentBlock ? createContentBlock(block) : (0, _stubContentBlock2.default)(block);
  // Get decorations from CompositeDecorator instance
  var decorations = decorator.getDecorations(contentBlock, contentState);
  // Keep track of offset for current key
  var offset = 0;
  decorations.forEach(function (key, index) {
    // If no key just move the offset
    if (!key) {
      offset += 1;
      return;
    }
    // get next key
    var nextIndex = index + 1;
    var next = decorations[nextIndex];
    // if thers no next key or the key chages build a decoratorRange entry
    if (!next || next !== key) {
      decoratorRanges.push({
        offset: offset,
        length: nextIndex - offset,
        component: decorator.getComponentForKey(key),
        decoratorProps: decorator.getPropsForKey(key) || {},
        // save reference to contentState
        contentState: contentState
      });
      // reset the offset to next index
      offset = nextIndex;
    }
  });
  // merge the block with decoratorRanges
  return Object.assign({}, block, {
    decoratorRanges: offsetRanges(decoratorRanges, block)
  });
};

var withDecorators = function withDecorators(raw, decorators, options) {
  var contentState = options.convertFromRaw && options.convertFromRaw(raw);
  return raw.blocks.map(function (block) {
    return decorateBlock(block, decorators, contentState, options || {});
  });
};

exports.default = withDecorators;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

})
//# sourceMappingURL=[title].js.2e1a62132737072a8da0.hot-update.js.map