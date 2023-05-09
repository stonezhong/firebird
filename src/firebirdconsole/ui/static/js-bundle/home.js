/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./ui/js/apis.js":
/*!***********************!*\
  !*** ./ui/js/apis.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "list_pipelines": () => (/* binding */ list_pipelines)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../http */ "./ui/js/http.js");



function list_pipelines() {
  return _list_pipelines.apply(this, arguments);
}
function _list_pipelines() {
  _list_pipelines = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", (0,_http__WEBPACK_IMPORTED_MODULE_2__.api_get)("/ui/apis/list_pipelines"));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _list_pipelines.apply(this, arguments);
}

/***/ }),

/***/ "./ui/js/common_lib.js":
/*!*****************************!*\
  !*** ./ui/js/common_lib.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationPage": () => (/* binding */ ApplicationPage),
/* harmony export */   "bless_modal": () => (/* binding */ bless_modal),
/* harmony export */   "setStateAsync": () => (/* binding */ setStateAsync)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






function setStateAsync(_x, _x2) {
  return _setStateAsync.apply(this, arguments);
}
function _setStateAsync() {
  _setStateAsync = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(component, state) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve) {
            return component.setState(state, resolve);
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _setStateAsync.apply(this, arguments);
}
var ApplicationPage = /*#__PURE__*/function () {
  function ApplicationPage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ApplicationPage);
    this.current_user = this.get_meta_json("user");
    this.app_context = this.get_meta_json("app_context", {});
    this.csrf_token = this.get_meta("csrf");
    this.init_menu_key = this.get_meta("init_menu_key");
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ApplicationPage, [{
    key: "get_meta_json",
    value: function get_meta_json(name) {
      var default_value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var elements = jquery__WEBPACK_IMPORTED_MODULE_4___default()("meta[name='".concat(name, "']"));
      if (elements.length > 0) return JSON.parse(elements[0].content);else return default_value;
    }
  }, {
    key: "get_meta",
    value: function get_meta(name) {
      var elements = jquery__WEBPACK_IMPORTED_MODULE_4___default()("meta[name='".concat(name, "']"));
      if (elements.length > 0) return elements[0].content;else return "";
    }
  }]);
  return ApplicationPage;
}();
function bless_modal(modal_id) {
  var modal_content = jquery__WEBPACK_IMPORTED_MODULE_4___default()("[data-modal-id=".concat(modal_id, "] > .modal-content"));
  modal_content.resizable({});
  modal_content.draggable({
    handle: ".modal-header"
  });
  modal_content.position({
    of: jquery__WEBPACK_IMPORTED_MODULE_4___default()(window)
  });
}

/***/ }),

/***/ "./ui/js/components/business/appbase/index.js":
/*!****************************************************!*\
  !*** ./ui/js/components/business/appbase/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplicationContainer": () => (/* binding */ ApplicationContainer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-bootstrap/DropdownButton */ "react-bootstrap/DropdownButton");
/* harmony import */ var react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-bootstrap/Dropdown */ "react-bootstrap/Dropdown");
/* harmony import */ var react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-bootstrap/Alert */ "react-bootstrap/Alert");
/* harmony import */ var react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _common_lib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../../common_lib */ "./ui/js/common_lib.js");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main.scss */ "./ui/js/components/business/appbase/main.scss");
/* harmony import */ var _components_generic_dialogbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../../components/generic/dialogbox */ "./ui/js/components/generic/dialogbox/index.jsx");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }














/*********************************************************************************
 * Purpose: Page to view an application
 *
 * Props
 *      current_user: current user  
 *      init_menu_key: the default activate key
 *      
 *  It will inject all it's property to it's children
 *  It will also pass a property set_alert(variant, text) method to it's children so they can report error
 */
var GlobalHeader = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(GlobalHeader, _React$Component);
  var _super = _createSuper(GlobalHeader);
  function GlobalHeader() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, GlobalHeader);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(GlobalHeader, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_12___default()), {
        fixed: "top",
        expand: "sm",
        variant: "dark",
        className: "global-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_14___default()), {
        fluid: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_12___default().Brand), {
        href: "#"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("img", {
        src: "/static/images/logo.jpeg",
        alt: "Logo",
        className: "d-inline-block align-top"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", {
        className: "font-weight-bold"
      }, "Firebird")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_12___default().Toggle), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_12___default().Collapse), {
        className: "justify-content-end"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_13___default()), {
        variant: "pills",
        className: "me-auto",
        defaultActiveKey: this.props.init_menu_key
      }, !this.props.current_user.is_authenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_13___default().Link), {
        eventKey: "login",
        href: "/ui/login"
      }, "Login")), this.props.current_user.is_authenticated && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_13___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react_bootstrap_DropdownButton__WEBPACK_IMPORTED_MODULE_15___default()), {
        id: "user-profile",
        title: this.props.current_user.username,
        variant: "light"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react_bootstrap_Dropdown__WEBPACK_IMPORTED_MODULE_16___default().Item), {
        href: "/accounts/logout"
      }, "Logout"))))));
    }
  }]);
  return GlobalHeader;
}((react__WEBPACK_IMPORTED_MODULE_9___default().Component));
/*********************************************************************************
 * Purpose: Page to view an application
 *
 * Props
 *      current_user: current user  
 *      
 *  It will inject all it's property to it's children
 *  It will also pass a property set_alert(variant, text) method to it's children so they can report error
 */
var ApplicationContainer = /*#__PURE__*/function (_React$Component2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ApplicationContainer, _React$Component2);
  var _super2 = _createSuper(ApplicationContainer);
  function ApplicationContainer() {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ApplicationContainer);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super2.call.apply(_super2, [this].concat(args));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "dbsRef", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createRef());
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "state", {
      error_msgs: {}
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "set_alert", /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().mark(function _callee(variant, text) {
        var key;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_8___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              key = (0,uuid__WEBPACK_IMPORTED_MODULE_21__["default"])();
              _context.next = 3;
              return (0,_common_lib__WEBPACK_IMPORTED_MODULE_18__.setStateAsync)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), function (state) {
                state.error_msgs[key] = {
                  variant: variant,
                  text: text
                };
                return state;
              });
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ApplicationContainer, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var props = _objectSpread(_objectSpread({}, this.props), {}, {
        set_alert: this.set_alert
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react__WEBPACK_IMPORTED_MODULE_9___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_generic_dialogbox__WEBPACK_IMPORTED_MODULE_20__.DialogBoxStackProvider.Provider, {
        value: this.dbsRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(GlobalHeader, this.props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_14___default()), {
        fluid: true,
        className: "app-container"
      }, Object.keys(this.state.error_msgs).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_11___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_10___default()), null, Object.entries(this.state.error_msgs).map(function (entry) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement((react_bootstrap_Alert__WEBPACK_IMPORTED_MODULE_17___default()), {
          key: entry[0],
          variant: entry[1].variant,
          onClose: function onClose() {
            (0,_common_lib__WEBPACK_IMPORTED_MODULE_18__.setStateAsync)(_this2, function (state) {
              delete _this2.state.error_msgs[entry[0]];
              return state;
            });
          },
          dismissible: true
        }, entry[1].text);
      }))), react__WEBPACK_IMPORTED_MODULE_9___default().Children.map(this.props.children, function (child) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().cloneElement(child, props, null);
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_components_generic_dialogbox__WEBPACK_IMPORTED_MODULE_20__.DialogBoxStack, {
        ref: this.dbsRef
      })));
    }
  }]);
  return ApplicationContainer;
}((react__WEBPACK_IMPORTED_MODULE_9___default().Component));

/***/ }),

/***/ "./ui/js/components/generic/dialogbox/index.jsx":
/*!******************************************************!*\
  !*** ./ui/js/components/generic/dialogbox/index.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogBox": () => (/* binding */ DialogBox),
/* harmony export */   "DialogBoxStack": () => (/* binding */ DialogBoxStack),
/* harmony export */   "DialogBoxStackProvider": () => (/* reexport safe */ _components_generic_dialogbox_providers_jsx__WEBPACK_IMPORTED_MODULE_16__.DialogBoxStackProvider),
/* harmony export */   "DlgBoxAgent": () => (/* binding */ DlgBoxAgent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Button */ "react-bootstrap/Button");
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-bootstrap/Modal */ "react-bootstrap/Modal");
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _common_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../../common_lib */ "./ui/js/common_lib.js");
/* harmony import */ var _components_generic_dialogbox_providers_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../../components/generic/dialogbox/providers.jsx */ "./ui/js/components/generic/dialogbox/providers.jsx");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main.scss */ "./ui/js/components/generic/dialogbox/main.scss");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }












/*********************************************
 * You need to derive from DlgBoxAgent in case you want to create
 * an interactive dialbogbox
 * - Constructor
 *       You can extend it, will receive dbsRef, which is a 
 *       reference to dialog box stack reference. So you can use it to launch 
 *       new dialogbox
 * 
 * - getInitSubState
 *       diabogbox component has a subState field inside it's state to store
 *       custom state. An agent can return initial subState in this function
 * 
 * - openDialog
 *       Use the same dialog box stack reference to launch a new dialogbox on
 *       the top.
 * 
 * - onSubStateUpdated
 *       called when subState is about to be updated. Usually is triggered
 *       by someone calls DialogBox.updateSubState.
 *       return value is not looked at. But you can call functions like
 *       action_remove/action_set/set_title to add, remove, update action buttons
 *       or update dialog title.
 * 
 *  - renderContent(dlgbox)
 *       You need to impmement this function to return component that will be
 *       rendered at the client area of the dialogbox.
 *
 *  - onAction(dlgbox, name)       
 *       Called when user want to perform an action.
 */
var DlgBoxAgent = /*#__PURE__*/function () {
  /*********************************************************************************
   * dbsRef: ref to DialogBoxStack
   */
  function DlgBoxAgent(dbsRef) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, DlgBoxAgent);
    this.dbsRef = dbsRef;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(DlgBoxAgent, [{
    key: "getInitSubState",
    value: function () {
      var _getInitSubState = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().mark(function _callee(dlgbox) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", {});
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getInitSubState(_x) {
        return _getInitSubState.apply(this, arguments);
      }
      return getInitSubState;
    }() // this is a async function since inner calls async function
  }, {
    key: "openDialog",
    value: function openDialog(options) {
      return this.dbsRef.current.openDialog(options);
    }

    //-----------------------------------------------------------------
    // when updating state, you should use state specified here
    // instead of dlgbox.state
    //-----------------------------------------------------------------
  }, {
    key: "onSubStateUpdated",
    value: function onSubStateUpdated(dlgbox, state, newSubState) {}
  }, {
    key: "renderContent",
    value: function renderContent(dlgbox) {
      return null;
    }
  }, {
    key: "onAction",
    value: function () {
      var _onAction = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().mark(function _callee2(dlgbox, name) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function onAction(_x2, _x3) {
        return _onAction.apply(this, arguments);
      }
      return onAction;
    }()
  }]);
  return DlgBoxAgent;
}();

/*********************************************************************************
 * Purpose: A dialogbox wrapper
 * 
 * - Pass an agent if you want a dynamic dialog box
 * 
 * - action_remove
 *       remove an action.
 * 
 * - action_set
 *       define a new action or overwrite an existing action
 * 
 * - title_set
 *       Set dialogbox title
 * 
 * - updateSubState
 *       Update subState, will trigger agent's onSubStateUpdated
 *
 * - updateSubStateField
 *       Update a field in subState, will trigger agent's onSubStateUpdated
 * 
 * - close
 *       Close the dialogbox, reset status
 * 
 * - onAction
 *       Dispatch action to agent. And handle close action as well.
 * 
 * - openDialog
 *       Opens a dialogbox, user should not call this function directly.
 * 
 * - render
 *       for react
 */

var DialogBox = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(DialogBox, _React$Component);
  var _super = _createSuper(DialogBox);
  function DialogBox() {
    var _this;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, DialogBox);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "state", {
      show: false,
      title: '',
      size: 'sm',
      actions: {},
      agent: null,
      onClose: null,
      // a callback to notify the stack the dialogbox is closed
      subState: {}
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "modal_id", (0,uuid__WEBPACK_IMPORTED_MODULE_18__["default"])());
    // Following functions are only called in onSubStateUpdated from agent
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "action_remove", function (state, name) {
      if (name in state.actions) {
        delete state.actions[name];
      }
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "action_set", function (state, name, cb) {
      var action = state.actions[name] || null;
      var _cb = cb(action),
        text = _cb.text,
        allowed = _cb.allowed;
      state.actions[name] = {
        text: text,
        allowed: allowed
      };
    });
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "title_set", function (state, title) {
      state.title = title;
    });
    // Update substate, the update(state.subState) will return new subState
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "updateSubState", /*#__PURE__*/function () {
      var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().mark(function _callee3(update) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0,_common_lib__WEBPACK_IMPORTED_MODULE_15__.setStateAsync)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), function (state) {
                var newSubState = update(state.subState);
                state.subState = newSubState;
                if (_this.state.agent) {
                  _this.state.agent.onSubStateUpdated((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), state, newSubState);
                }
                return state;
              });
            case 2:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      return function (_x4) {
        return _ref.apply(this, arguments);
      };
    }());
    // Update a subState field
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "updateSubStateField", /*#__PURE__*/function () {
      var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().mark(function _callee4(fieldName, fieldValue) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0,_common_lib__WEBPACK_IMPORTED_MODULE_15__.setStateAsync)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), function (state) {
                state.subState[fieldName] = fieldValue;
                if (_this.state.agent) {
                  _this.state.agent.onSubStateUpdated((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), state, state.subState);
                }
                return state;
              });
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x5, _x6) {
        return _ref2.apply(this, arguments);
      };
    }());
    // close the dialogbox
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "close", /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().mark(function _callee5() {
      var onClose;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            onClose = _this.state.onClose;
            _context5.next = 3;
            return (0,_common_lib__WEBPACK_IMPORTED_MODULE_15__.setStateAsync)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), {
              show: false,
              title: '',
              size: 'sm',
              actions: {},
              agent: null,
              onClose: null,
              subState: {}
            });
          case 3:
            _context5.next = 5;
            return onClose();
          case 5:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    })));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "onAction", /*#__PURE__*/function () {
      var _ref4 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().mark(function _callee6(name) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              if (lodash__WEBPACK_IMPORTED_MODULE_14___default().isNull(_this.state.agent)) {
                _context6.next = 3;
                break;
              }
              _context6.next = 3;
              return _this.state.agent.onAction((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), name);
            case 3:
              if (!(name === "close")) {
                _context6.next = 6;
                break;
              }
              _context6.next = 6;
              return _this.close();
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      return function (_x7) {
        return _ref4.apply(this, arguments);
      };
    }());
    // title            : string, the title of the dialog
    // size             : string, sm, md or lg, specify the size of the dialogbox
    // agent            : an object of class DlgBoxAgent
    // onClose          : a callback from stack, so stack can do cleanup when the dialogbox is closed
    // content          : static content, only useful when agent is null
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "openDialog", /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().mark(function _callee7() {
      var options,
        _title$size$agent$con,
        title,
        size,
        agent,
        onClose,
        content,
        subState,
        _args7 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            options = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
            _title$size$agent$con = _objectSpread({
              title: '',
              size: 'sm',
              agent: null,
              content: null
            }, options), title = _title$size$agent$con.title, size = _title$size$agent$con.size, agent = _title$size$agent$con.agent, onClose = _title$size$agent$con.onClose, content = _title$size$agent$con.content; // simple case, no agent
            if (!lodash__WEBPACK_IMPORTED_MODULE_14___default().isNull(agent)) {
              _context7.next = 7;
              break;
            }
            _context7.next = 5;
            return (0,_common_lib__WEBPACK_IMPORTED_MODULE_15__.setStateAsync)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), {
              show: true,
              title: title,
              size: size,
              actions: {},
              agent: null,
              onClose: onClose,
              subState: {},
              content: content
            });
          case 5:
            (0,_common_lib__WEBPACK_IMPORTED_MODULE_15__.bless_modal)(_this.modal_id);
            return _context7.abrupt("return");
          case 7:
            _context7.next = 9;
            return agent.getInitSubState((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this));
          case 9:
            subState = _context7.sent;
            _context7.next = 12;
            return (0,_common_lib__WEBPACK_IMPORTED_MODULE_15__.setStateAsync)((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), function (state) {
              var newState = {
                show: true,
                title: title,
                size: size,
                actions: {},
                agent: agent,
                onClose: onClose,
                subState: lodash__WEBPACK_IMPORTED_MODULE_14___default().clone(subState)
              };
              agent.onSubStateUpdated((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), newState, subState);
              return newState;
            });
          case 12:
            (0,_common_lib__WEBPACK_IMPORTED_MODULE_15__.bless_modal)(_this.modal_id);
            return _context7.abrupt("return");
          case 14:
          case "end":
            return _context7.stop();
        }
      }, _callee7);
    })));
    return _this;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(DialogBox, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var dlg_props = {};
      var dialogClassName = "standard-modal";
      if (this.state.size === 'sm') {
        dialogClassName += ' sm-modal';
      } else if (this.state.size === 'md') {
        dialogClassName += ' md-modal';
      } else if (this.state.size === 'lg') {
        dialogClassName += ' lg-modal';
      }
      if ('dialogClassName' in this.props) {
        dialogClassName += ' ' + this.props.dialogClassName;
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_13___default()), (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        show: this.state.show,
        onHide: function onHide() {
          return _this2.onAction("close");
        },
        backdrop: "static",
        scrollable: true,
        animation: false,
        dialogClassName: dialogClassName,
        "data-modal-id": this.modal_id
      }, dlg_props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_13___default().Header), {
        closeButton: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_13___default().Title), null, this.state.show && this.state.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_13___default().Body), null, this.state.show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_12___default()), {
        fluid: true,
        className: "pb-2 mb-2"
      }, lodash__WEBPACK_IMPORTED_MODULE_14___default().isNull(this.state.agent) && this.state.content, !lodash__WEBPACK_IMPORTED_MODULE_14___default().isNull(this.state.agent) && this.state.agent.renderContent(this))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_13___default().Footer), null, this.state.show && Object.entries(this.state.actions).map(function (entry) {
        return entry[0] !== 'close' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
          variant: "primary",
          size: "sm",
          key: entry[0],
          onClick: function onClick(evt) {
            return _this2.onAction(entry[0]);
          },
          disabled: !entry[1].allowed
        }, entry[1].text);
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_11___default()), {
        variant: "secondary",
        size: "sm",
        onClick: function onClick(evt) {
          return _this2.onAction("close");
        }
      }, "Close")));
    }
  }]);
  return DialogBox;
}((react__WEBPACK_IMPORTED_MODULE_10___default().Component));
var DialogBoxStack = /*#__PURE__*/function (_React$Component2) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(DialogBoxStack, _React$Component2);
  var _super2 = _createSuper(DialogBoxStack);
  function DialogBoxStack() {
    var _this3;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_7__["default"])(this, DialogBoxStack);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this3 = _super2.call.apply(_super2, [this].concat(args));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this3), "current", -1);
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this3), "dlgBoxRefs", lodash__WEBPACK_IMPORTED_MODULE_14___default().range(20).map(function (i) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createRef();
    }));
    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this3), "openDialog", /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().mark(function _callee8() {
      var options,
        optionsEx,
        _args8 = arguments;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_9___default().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            options = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {};
            optionsEx = _objectSpread({}, options);
            optionsEx.onClose = function () {
              _this3.current -= 1;
            };
            if (!(_this3.current + 1 >= _this3.dlgBoxRefs.length)) {
              _context8.next = 5;
              break;
            }
            throw new Error("Too many dialogs!");
          case 5:
            _this3.current += 1;
            return _context8.abrupt("return", _this3.dlgBoxRefs[_this3.current].current.openDialog(optionsEx));
          case 7:
          case "end":
            return _context8.stop();
        }
      }, _callee8);
    })));
    return _this3;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_8__["default"])(DialogBoxStack, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement((react__WEBPACK_IMPORTED_MODULE_10___default().Fragment), null, this.dlgBoxRefs.map(function (ref, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default().createElement(DialogBox, {
          key: idx,
          ref: ref
        });
      }));
    }
  }]);
  return DialogBoxStack;
}((react__WEBPACK_IMPORTED_MODULE_10___default().Component));

/***/ }),

/***/ "./ui/js/components/generic/dialogbox/providers.jsx":
/*!**********************************************************!*\
  !*** ./ui/js/components/generic/dialogbox/providers.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogBoxStackProvider": () => (/* binding */ DialogBoxStackProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DialogBoxStackProvider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);

/***/ }),

/***/ "./ui/js/http.js":
/*!***********************!*\
  !*** ./ui/js/http.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api_delete": () => (/* binding */ api_delete),
/* harmony export */   "api_get": () => (/* binding */ api_get),
/* harmony export */   "api_patch": () => (/* binding */ api_patch),
/* harmony export */   "api_post": () => (/* binding */ api_post)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var build_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! build-url */ "./node_modules/build-url/dist/build-url.js");
/* harmony import */ var build_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(build_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);






function api_get(_x) {
  return _api_get.apply(this, arguments);
}
function _api_get() {
  _api_get = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {
    var params,
      effective_url,
      res,
      _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
          effective_url = lodash__WEBPACK_IMPORTED_MODULE_3___default().isEmpty(params) ? build_url__WEBPACK_IMPORTED_MODULE_2___default()(url) : build_url__WEBPACK_IMPORTED_MODULE_2___default()(url, {
            queryParams: params
          });
          _context.next = 4;
          return fetch(effective_url);
        case 4:
          res = _context.sent;
          if (!(res.status >= 200 && res.status < 300)) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.json());
        case 7:
          throw res;
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _api_get.apply(this, arguments);
}
function api_post(_x2, _x3, _x4) {
  return _api_post.apply(this, arguments);
}
function _api_post() {
  _api_post = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(url, csrfToken, payload) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch(url, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrfToken
            },
            body: JSON.stringify(payload)
          });
        case 2:
          res = _context2.sent;
          if (!(res.status >= 200 && res.status < 300)) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", res.json());
        case 5:
          throw res;
        case 6:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _api_post.apply(this, arguments);
}
function api_delete(_x5, _x6) {
  return _api_delete.apply(this, arguments);
}
function _api_delete() {
  _api_delete = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(url, csrfToken) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetch(url, {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrfToken
            }
          });
        case 2:
          res = _context3.sent;
          if (!(res.status >= 200 && res.status < 300)) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return");
        case 5:
          throw res;
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _api_delete.apply(this, arguments);
}
function api_patch(_x7, _x8, _x9) {
  return _api_patch.apply(this, arguments);
}
function _api_patch() {
  _api_patch = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(url, csrfToken, payload) {
    var res;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return fetch(url, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'X-UNICORN-Use-Method': 'PATCH',
              'X-CSRFToken': csrfToken
            },
            body: JSON.stringify(payload)
          });
        case 2:
          res = _context4.sent;
          if (!(res.status >= 200 && res.status < 300)) {
            _context4.next = 5;
            break;
          }
          return _context4.abrupt("return", res.json());
        case 5:
          throw res;
        case 6:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _api_patch.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/build-url/dist/build-url.js":
/*!**************************************************!*\
  !*** ./node_modules/build-url/dist/build-url.js ***!
  \**************************************************/
/***/ (function(module, exports) {

/**
 * build-url - A small library that builds a URL given its components
 * @version v6.0.0
 * @link https://github.com/steverydz/build-url#readme
 * @license MIT
 */
;(function () {
  'use strict';

  var root = this;
  var previousBuildUrl = root.buildUrl;

  var encodedParam = function (param) {
    return param === null ? '' : encodeURIComponent(String(param).trim());
  };

  var buildUrl = function (url, options) {
    var queryString = [];
    var key;
    var builtUrl;
    var caseChange; 
    
    if (options && options.lowerCase) {
        caseChange = !!options.lowerCase;
    } else {
        caseChange = false;
    }

    if (url === null) {
      builtUrl = '';
    } else if (typeof(url) === 'object') {
      builtUrl = '';
      options = url;
    } else {
      builtUrl = url;
    }

    if (options) {
      if (options.path) {
        if(builtUrl && builtUrl[builtUrl.length - 1] === '/') {
          builtUrl = builtUrl.slice(0, -1);
        } 

        var localVar = String(options.path).trim(); 
        if (caseChange) {
          localVar = localVar.toLowerCase();
        }
        if (localVar.indexOf('/') === 0) {
            builtUrl += localVar;
        } else {
          builtUrl += '/' + localVar;
        }
      }

      if (options.queryParams) {
        for (key in options.queryParams) {
          if (options.queryParams.hasOwnProperty(key) && options.queryParams[key] !== void 0) {
            var param;
            if (options.disableCSV && Array.isArray(options.queryParams[key]) && options.queryParams[key].length) {
              for(var i = 0; i < options.queryParams[key].length; i++) {
                param = options.queryParams[key][i];
                queryString.push(key + '=' + encodedParam(param));
              }
            } else {              
              if (caseChange) {
                param = options.queryParams[key].toLowerCase();
              }
              else {
                param = options.queryParams[key];
              }
              queryString.push(key + '=' + encodedParam(param));
            }
          }
        }
        builtUrl += '?' + queryString.join('&');
      }

      if (options.hash) {
        if(caseChange)
            builtUrl += '#' + String(options.hash).trim().toLowerCase();
        else
            builtUrl += '#' + String(options.hash).trim();
      }
    } 
    return builtUrl;
  };

  buildUrl.noConflict = function () {
    root.buildUrl = previousBuildUrl;
    return buildUrl;
  };

  if (true) {
    if ( true && module.exports) {
      exports = module.exports = buildUrl;
    }
    exports.buildUrl = buildUrl;
  } else {}
}).call(this);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./ui/js/components/business/appbase/main.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./ui/js/components/business/appbase/main.scss ***!
  \**********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "nav.global-header {\n  background-color: #007A87;\n}\nnav.global-header .navbar-brand > img {\n  height: 32px;\n}\nnav.global-header .navbar-brand > span {\n  margin-left: 8px;\n}\n\ndiv.app-container {\n  padding-top: 58px;\n}", "",{"version":3,"sources":["webpack://./ui/js/components/business/appbase/main.scss"],"names":[],"mappings":"AAAA;EACI,yBAAA;AACJ;AAEQ;EACI,YAAA;AAAZ;AAGQ;EACI,gBAAA;AADZ;;AAOA;EACI,iBAAA;AAJJ","sourcesContent":["nav.global-header {\n    background-color: #007A87;\n\n    .navbar-brand {\n        & > img {\n            height: 32px;\n        }\n\n        & > span {\n            margin-left: 8px;\n        }\n    }\n}\n\n\ndiv.app-container {\n    padding-top: 58px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./ui/js/components/generic/dialogbox/main.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./ui/js/components/generic/dialogbox/main.scss ***!
  \***********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "div.standard-modal {\n  max-width: none !important;\n  max-height: none !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\ndiv.standard-modal > div.modal-content {\n  border: 1px solid darkgrey;\n}\ndiv.standard-modal > div.modal-content > div.modal-header {\n  background-color: royalblue;\n  cursor: move;\n  padding: 6px;\n}\ndiv.standard-modal > div.modal-content > div.modal-header > div.modal-title {\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n}\ndiv.standard-modal > div.modal-content > div.modal-header > button.close {\n  cursor: default;\n}\ndiv.standard-modal > div.modal-content > div.modal-body {\n  background-color: #fafafa;\n}\n\ndiv.lg-modal > div.modal-content {\n  width: 1440px;\n  height: 860px;\n}\n\ndiv.md-modal > div.modal-content {\n  width: 1080px;\n  height: 600px;\n}\n\ndiv.sm-modal > div.modal-content {\n  width: 800px;\n  height: 600px;\n}", "",{"version":3,"sources":["webpack://./ui/js/components/generic/dialogbox/main.scss"],"names":[],"mappings":"AAAA;EACI,0BAAA;EACA,2BAAA;EACA,wBAAA;EACA,2BAAA;AACJ;AACI;EAqBI,0BAAA;AAnBR;AADQ;EACI,2BAAA;EACA,YAAA;EACA,YAAA;AAGZ;AADY;EACI,YAAA;EACA,iBAAA;EACA,eAAA;AAGhB;AAAY;EACI,eAAA;AAEhB;AAEQ;EACI,yBAAA;AAAZ;;AAOI;EACI,aAAA;EACA,aAAA;AAJR;;AAQI;EACI,aAAA;EACA,aAAA;AALR;;AASI;EACI,YAAA;EACA,aAAA;AANR","sourcesContent":["div.standard-modal {\n    max-width: none !important;\n    max-height: none !important;\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n\n    & > div.modal-content {\n        & > div.modal-header {\n            background-color: royalblue;\n            cursor: move;\n            padding: 6px;\n\n            & > div.modal-title {\n                color: white;\n                font-weight: bold;\n                font-size: 18px;\n            }\n\n            & > button.close {\n                cursor: default;\n            }\n        }\n\n        & > div.modal-body {\n            background-color: #fafafa;\n        }\n\n        border: 1px solid darkgrey;\n    }\n}\ndiv.lg-modal {\n    & > div.modal-content {\n        width:  1440px;\n        height: 860px;\n    }\n}\ndiv.md-modal {\n    & > div.modal-content {\n        width:  1080px;\n        height: 600px;\n    }\n}\ndiv.sm-modal {\n    & > div.modal-content {\n        width:  800px;\n        height: 600px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./ui/js/components/business/appbase/main.scss":
/*!*****************************************************!*\
  !*** ./ui/js/components/business/appbase/main.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./ui/js/components/business/appbase/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./ui/js/components/generic/dialogbox/main.scss":
/*!******************************************************!*\
  !*** ./ui/js/components/generic/dialogbox/main.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./ui/js/components/generic/dialogbox/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = ReactDOM;

/***/ }),

/***/ "lodash":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/***/ ((module) => {

"use strict";
module.exports = _;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ }),

/***/ "react-bootstrap/Alert":
/*!*******************************************!*\
  !*** external ["ReactBootstrap","Alert"] ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = ReactBootstrap.Alert;

/***/ }),

/***/ "react-bootstrap/Button":
/*!********************************************!*\
  !*** external ["ReactBootstrap","Button"] ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = ReactBootstrap.Button;

/***/ }),

/***/ "react-bootstrap/Col":
/*!*****************************************!*\
  !*** external ["ReactBootstrap","Col"] ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = ReactBootstrap.Col;

/***/ }),

/***/ "react-bootstrap/Container":
/*!***********************************************!*\
  !*** external ["ReactBootstrap","Container"] ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = ReactBootstrap.Container;

/***/ }),

/***/ "react-bootstrap/Dropdown":
/*!**********************************************!*\
  !*** external ["ReactBootstrap","Dropdown"] ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = ReactBootstrap.Dropdown;

/***/ }),

/***/ "react-bootstrap/DropdownButton":
/*!****************************************************!*\
  !*** external ["ReactBootstrap","DropdownButton"] ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = ReactBootstrap.DropdownButton;

/***/ }),

/***/ "react-bootstrap/Modal":
/*!*******************************************!*\
  !*** external ["ReactBootstrap","Modal"] ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = ReactBootstrap.Modal;

/***/ }),

/***/ "react-bootstrap/Nav":
/*!*****************************************!*\
  !*** external ["ReactBootstrap","Nav"] ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = ReactBootstrap.Nav;

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!********************************************!*\
  !*** external ["ReactBootstrap","Navbar"] ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = ReactBootstrap.Navbar;

/***/ }),

/***/ "react-bootstrap/Row":
/*!*****************************************!*\
  !*** external ["ReactBootstrap","Row"] ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = ReactBootstrap.Row;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************!*\
  !*** ./ui/js/pages/home/main.jsx ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_business_appbase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../components/business/appbase */ "./ui/js/components/business/appbase/index.js");
/* harmony import */ var _common_lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../common_lib */ "./ui/js/common_lib.js");
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../../apis */ "./ui/js/apis.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }








/*********************************************************************************
 * Purpose: Page to view an application
 *
 * Props
 *      current_user: current user
 *      csrf_token:   the csrf token
 *      set_alert:    a function to set alert
 */
var HomeApplicationPage = /*#__PURE__*/function (_React$Component) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(HomeApplicationPage, _React$Component);
  var _super = _createSuper(HomeApplicationPage);
  function HomeApplicationPage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, HomeApplicationPage);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(HomeApplicationPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement((react__WEBPACK_IMPORTED_MODULE_7___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_10___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_9___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("h1", null, "Home Page"))));
    }
  }]);
  return HomeApplicationPage;
}((react__WEBPACK_IMPORTED_MODULE_7___default().Component));
$( /*#__PURE__*/(0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().mark(function _callee() {
  var page, pipelines;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        page = new _common_lib__WEBPACK_IMPORTED_MODULE_12__.ApplicationPage();
        _context.next = 3;
        return (0,_apis__WEBPACK_IMPORTED_MODULE_13__.list_pipelines)();
      case 3:
        pipelines = _context.sent;
        console.log(pipelines);
        react_dom__WEBPACK_IMPORTED_MODULE_8___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_components_business_appbase__WEBPACK_IMPORTED_MODULE_11__.ApplicationContainer, {
          current_user: page.current_user,
          csrf_token: page.csrf_token,
          init_menu_key: page.init_menu_key,
          app_context: page.app_context
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(HomeApplicationPage, null)), document.getElementById('app'));
      case 6:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVg2QjdMLHdEQUFlO0FBY2pEeEMsQ0FBQyxlQUFBWCxtRkFBQSxlQUFBQyxzRUFBQSxDQUFDLFNBQUFFLFFBQUE7RUFBQSxJQUFBOE8sSUFBQSxFQUFBQyxTQUFBO0VBQUEsT0FBQWpQLHNFQUFBLFVBQUFJLFNBQUFDLFFBQUE7SUFBQSxrQkFBQUEsUUFBQSxDQUFBQyxJQUFBLEdBQUFELFFBQUEsQ0FBQUUsSUFBQTtNQUFBO1FBQ1F5TyxJQUFJLEdBQUcsSUFBSTNOLHlEQUFlLENBQUMsQ0FBQztRQUFBaEIsUUFBQSxDQUFBRSxJQUFBO1FBQUEsT0FFVlosc0RBQWMsQ0FBQyxDQUFDO01BQUE7UUFBbENzUCxTQUFTLEdBQUE1TyxRQUFBLENBQUErSyxJQUFBO1FBQ2Y4RCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsU0FBUyxDQUFDO1FBRXRCSCx1REFBZSxlQUNYNUwsMERBQUEsQ0FBQ3lDLCtFQUFvQjtVQUNqQnBFLFlBQVksRUFBRXlOLElBQUksQ0FBQ3pOLFlBQWE7VUFDaENHLFVBQVUsRUFBRXNOLElBQUksQ0FBQ3ROLFVBQVc7VUFDNUJFLGFBQWEsRUFBRW9OLElBQUksQ0FBQ3BOLGFBQWM7VUFDbENILFdBQVcsRUFBRXVOLElBQUksQ0FBQ3ZOO1FBQVksZ0JBRTlCeUIsMERBQUEsQ0FBQzZMLG1CQUFtQixNQUFFLENBQ0osQ0FBQyxFQUN2QkssUUFBUSxDQUFDQyxjQUFjLENBQUMsS0FBSyxDQUNqQyxDQUFDO01BQUM7TUFBQTtRQUFBLE9BQUFoUCxRQUFBLENBQUFJLElBQUE7SUFBQTtFQUFBLEdBQUFQLE9BQUE7QUFBQSxDQUNMLEdBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL2FwaXMuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vdWkvanMvY29tbW9uX2xpYi5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi91aS9qcy9jb21wb25lbnRzL2J1c2luZXNzL2FwcGJhc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vdWkvanMvY29tcG9uZW50cy9nZW5lcmljL2RpYWxvZ2JveC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vdWkvanMvY29tcG9uZW50cy9nZW5lcmljL2RpYWxvZ2JveC9wcm92aWRlcnMuanN4Iiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL2h0dHAuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL2J1aWxkLXVybC9kaXN0L2J1aWxkLXVybC5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi91aS9qcy9jb21wb25lbnRzL2J1c2luZXNzL2FwcGJhc2UvbWFpbi5zY3NzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL2NvbXBvbmVudHMvZ2VuZXJpYy9kaWFsb2dib3gvbWFpbi5zY3NzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vdWkvanMvY29tcG9uZW50cy9idXNpbmVzcy9hcHBiYXNlL21haW4uc2Nzcz8wNzc1Iiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL2NvbXBvbmVudHMvZ2VuZXJpYy9kaWFsb2dib3gvbWFpbi5zY3NzP2M2NWUiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFwiX1wiIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJBbGVydFwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJCdXR0b25cIl0iLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlL2V4dGVybmFsIHZhciBbXCJSZWFjdEJvb3RzdHJhcFwiLFwiQ29sXCJdIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS9leHRlcm5hbCB2YXIgW1wiUmVhY3RCb290c3RyYXBcIixcIkNvbnRhaW5lclwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJEcm9wZG93blwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJEcm9wZG93bkJ1dHRvblwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJNb2RhbFwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJOYXZcIl0iLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlL2V4dGVybmFsIHZhciBbXCJSZWFjdEJvb3RzdHJhcFwiLFwiTmF2YmFyXCJdIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS9leHRlcm5hbCB2YXIgW1wiUmVhY3RCb290c3RyYXBcIixcIlJvd1wiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9yZWdlbmVyYXRvclJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL3BhZ2VzL2hvbWUvbWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthcGlfZ2V0fSBmcm9tIFwiL2h0dHBcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3RfcGlwZWxpbmVzKCkge1xuICAgIHJldHVybiBhcGlfZ2V0KFwiL3VpL2FwaXMvbGlzdF9waXBlbGluZXNcIik7XG59XG4iLCJpbXBvcnQgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRTdGF0ZUFzeW5jKGNvbXBvbmVudCwgc3RhdGUpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGNvbXBvbmVudC5zZXRTdGF0ZShzdGF0ZSwgcmVzb2x2ZSkpO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25QYWdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50X3VzZXIgICAgICAgPSB0aGlzLmdldF9tZXRhX2pzb24oXCJ1c2VyXCIpO1xuICAgICAgICB0aGlzLmFwcF9jb250ZXh0ICAgICAgICA9IHRoaXMuZ2V0X21ldGFfanNvbihcImFwcF9jb250ZXh0XCIsIHt9KTtcbiAgICAgICAgdGhpcy5jc3JmX3Rva2VuICAgICAgICAgPSB0aGlzLmdldF9tZXRhKFwiY3NyZlwiKTtcbiAgICAgICAgdGhpcy5pbml0X21lbnVfa2V5ICAgICAgPSB0aGlzLmdldF9tZXRhKFwiaW5pdF9tZW51X2tleVwiKTtcbiAgICB9XG5cbiAgICBnZXRfbWV0YV9qc29uKG5hbWUsIGRlZmF1bHRfdmFsdWU9bnVsbCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9ICQoYG1ldGFbbmFtZT0nJHtuYW1lfSddYCk7XG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZWxlbWVudHNbMF0uY29udGVudCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0X3ZhbHVlXG4gICAgfVxuXG4gICAgZ2V0X21ldGEobmFtZSkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9ICQoYG1ldGFbbmFtZT0nJHtuYW1lfSddYCk7XG4gICAgICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRzWzBdLmNvbnRlbnQ7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsZXNzX21vZGFsKG1vZGFsX2lkKSB7XG4gICAgY29uc3QgbW9kYWxfY29udGVudCA9ICQoYFtkYXRhLW1vZGFsLWlkPSR7bW9kYWxfaWR9XSA+IC5tb2RhbC1jb250ZW50YCk7XG4gXG4gICAgbW9kYWxfY29udGVudC5yZXNpemFibGUoe30pO1xuICAgIG1vZGFsX2NvbnRlbnQuZHJhZ2dhYmxlKHtcbiAgICAgICAgaGFuZGxlOiBcIi5tb2RhbC1oZWFkZXJcIixcbiAgICB9KTtcbiAgICBtb2RhbF9jb250ZW50LnBvc2l0aW9uKHtcbiAgICAgICAgb2Y6ICQod2luZG93KVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XG5pbXBvcnQgRHJvcGRvd25CdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duQnV0dG9uJztcbmltcG9ydCBEcm9wZG93biBmcm9tICdyZWFjdC1ib290c3RyYXAvRHJvcGRvd24nO1xuaW1wb3J0IEFsZXJ0IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9BbGVydCc7XG5cbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgc2V0U3RhdGVBc3luYyB9IGZyb20gJy9jb21tb25fbGliJztcblxuaW1wb3J0IFwiLi9tYWluLnNjc3NcIjtcblxuaW1wb3J0IHtEaWFsb2dCb3hTdGFjaywgRGlhbG9nQm94U3RhY2tQcm92aWRlcn0gZnJvbSAnL2NvbXBvbmVudHMvZ2VuZXJpYy9kaWFsb2dib3gnO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBQdXJwb3NlOiBQYWdlIHRvIHZpZXcgYW4gYXBwbGljYXRpb25cbiAqXG4gKiBQcm9wc1xuICogICAgICBjdXJyZW50X3VzZXI6IGN1cnJlbnQgdXNlciAgXG4gKiAgICAgIGluaXRfbWVudV9rZXk6IHRoZSBkZWZhdWx0IGFjdGl2YXRlIGtleVxuICogICAgICBcbiAqICBJdCB3aWxsIGluamVjdCBhbGwgaXQncyBwcm9wZXJ0eSB0byBpdCdzIGNoaWxkcmVuXG4gKiAgSXQgd2lsbCBhbHNvIHBhc3MgYSBwcm9wZXJ0eSBzZXRfYWxlcnQodmFyaWFudCwgdGV4dCkgbWV0aG9kIHRvIGl0J3MgY2hpbGRyZW4gc28gdGhleSBjYW4gcmVwb3J0IGVycm9yXG4gKi9cbmNsYXNzIEdsb2JhbEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPE5hdmJhciBmaXhlZD1cInRvcFwiIGV4cGFuZD1cInNtXCIgdmFyaWFudD1cImRhcmtcIiBjbGFzc05hbWU9XCJnbG9iYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3N0YXRpYy9pbWFnZXMvbG9nby5qcGVnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPkZpcmViaXJkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlICAvPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8TmF2IHZhcmlhbnQ9XCJwaWxsc1wiIGNsYXNzTmFtZT1cIm1lLWF1dG9cIiBkZWZhdWx0QWN0aXZlS2V5PXt0aGlzLnByb3BzLmluaXRfbWVudV9rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5jdXJyZW50X3VzZXIuaXNfYXV0aGVudGljYXRlZCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50S2V5PVwibG9naW5cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi91aS9sb2dpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPkxvZ2luPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmN1cnJlbnRfdXNlci5pc19hdXRoZW50aWNhdGVkICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRLZXk9XCJzaWdudXBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi91aS9zaWdudXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TaWdudXA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudF91c2VyLmlzX2F1dGhlbnRpY2F0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXItcHJvZmlsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5jdXJyZW50X3VzZXIudXNlcm5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIi9hY2NvdW50cy9sb2dvdXRcIj5Mb2dvdXQ8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PiAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9OYXZiYXI+O1xuICAgIH1cbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogUHVycG9zZTogUGFnZSB0byB2aWV3IGFuIGFwcGxpY2F0aW9uXG4gKlxuICogUHJvcHNcbiAqICAgICAgY3VycmVudF91c2VyOiBjdXJyZW50IHVzZXIgIFxuICogICAgICBcbiAqICBJdCB3aWxsIGluamVjdCBhbGwgaXQncyBwcm9wZXJ0eSB0byBpdCdzIGNoaWxkcmVuXG4gKiAgSXQgd2lsbCBhbHNvIHBhc3MgYSBwcm9wZXJ0eSBzZXRfYWxlcnQodmFyaWFudCwgdGV4dCkgbWV0aG9kIHRvIGl0J3MgY2hpbGRyZW4gc28gdGhleSBjYW4gcmVwb3J0IGVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgZGJzUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZXJyb3JfbXNnczoge31cbiAgICB9XG5cbiAgICBzZXRfYWxlcnQgPSBhc3luYyAodmFyaWFudCwgdGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB1dWlkdjQoKTtcbiAgICAgICAgYXdhaXQgc2V0U3RhdGVBc3luYyh0aGlzLCBzdGF0ZT0+IHtcbiAgICAgICAgICAgIHN0YXRlLmVycm9yX21zZ3Nba2V5XSA9IHtcbiAgICAgICAgICAgICAgICB2YXJpYW50OiB2YXJpYW50LFxuICAgICAgICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHsuLi4gdGhpcy5wcm9wcywgc2V0X2FsZXJ0OiB0aGlzLnNldF9hbGVydH07XG4gICAgICAgIHJldHVybiA8PlxuICAgICAgICAgICAgPERpYWxvZ0JveFN0YWNrUHJvdmlkZXIuUHJvdmlkZXIgdmFsdWU9e3RoaXMuZGJzUmVmfT5cbiAgICAgICAgICAgICAgICA8R2xvYmFsSGVhZGVyIHsuLi4gdGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZXJyb3JfbXNncykubGVuZ3RoID4gMCkgJiYgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5zdGF0ZS5lcnJvcl9tc2dzKS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZW50cnkpID0+IDxBbGVydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZW50cnlbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17ZW50cnlbMV0udmFyaWFudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlQXN5bmModGhpcywgc3RhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhdGUuZXJyb3JfbXNnc1tlbnRyeVswXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc21pc3NpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VudHJ5WzFdLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuQ2hpbGRyZW4ubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkID0+IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMsIG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8RGlhbG9nQm94U3RhY2sgcmVmPXt0aGlzLmRic1JlZn0gLz5cbiAgICAgICAgICAgIDwvRGlhbG9nQm94U3RhY2tQcm92aWRlci5Qcm92aWRlcj5cbiAgICAgICAgPC8+O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtibGVzc19tb2RhbCwgc2V0U3RhdGVBc3luY30gZnJvbSAnL2NvbW1vbl9saWInO1xuaW1wb3J0IHtEaWFsb2dCb3hTdGFja1Byb3ZpZGVyfSBmcm9tICcvY29tcG9uZW50cy9nZW5lcmljL2RpYWxvZ2JveC9wcm92aWRlcnMuanN4JztcblxuZXhwb3J0IHtEaWFsb2dCb3hTdGFja1Byb3ZpZGVyfTtcblxuaW1wb3J0IFwiLi9tYWluLnNjc3NcIjtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogWW91IG5lZWQgdG8gZGVyaXZlIGZyb20gRGxnQm94QWdlbnQgaW4gY2FzZSB5b3Ugd2FudCB0byBjcmVhdGVcbiAqIGFuIGludGVyYWN0aXZlIGRpYWxib2dib3hcbiAqIC0gQ29uc3RydWN0b3JcbiAqICAgICAgIFlvdSBjYW4gZXh0ZW5kIGl0LCB3aWxsIHJlY2VpdmUgZGJzUmVmLCB3aGljaCBpcyBhIFxuICogICAgICAgcmVmZXJlbmNlIHRvIGRpYWxvZyBib3ggc3RhY2sgcmVmZXJlbmNlLiBTbyB5b3UgY2FuIHVzZSBpdCB0byBsYXVuY2ggXG4gKiAgICAgICBuZXcgZGlhbG9nYm94XG4gKiBcbiAqIC0gZ2V0SW5pdFN1YlN0YXRlXG4gKiAgICAgICBkaWFib2dib3ggY29tcG9uZW50IGhhcyBhIHN1YlN0YXRlIGZpZWxkIGluc2lkZSBpdCdzIHN0YXRlIHRvIHN0b3JlXG4gKiAgICAgICBjdXN0b20gc3RhdGUuIEFuIGFnZW50IGNhbiByZXR1cm4gaW5pdGlhbCBzdWJTdGF0ZSBpbiB0aGlzIGZ1bmN0aW9uXG4gKiBcbiAqIC0gb3BlbkRpYWxvZ1xuICogICAgICAgVXNlIHRoZSBzYW1lIGRpYWxvZyBib3ggc3RhY2sgcmVmZXJlbmNlIHRvIGxhdW5jaCBhIG5ldyBkaWFsb2dib3ggb25cbiAqICAgICAgIHRoZSB0b3AuXG4gKiBcbiAqIC0gb25TdWJTdGF0ZVVwZGF0ZWRcbiAqICAgICAgIGNhbGxlZCB3aGVuIHN1YlN0YXRlIGlzIGFib3V0IHRvIGJlIHVwZGF0ZWQuIFVzdWFsbHkgaXMgdHJpZ2dlcmVkXG4gKiAgICAgICBieSBzb21lb25lIGNhbGxzIERpYWxvZ0JveC51cGRhdGVTdWJTdGF0ZS5cbiAqICAgICAgIHJldHVybiB2YWx1ZSBpcyBub3QgbG9va2VkIGF0LiBCdXQgeW91IGNhbiBjYWxsIGZ1bmN0aW9ucyBsaWtlXG4gKiAgICAgICBhY3Rpb25fcmVtb3ZlL2FjdGlvbl9zZXQvc2V0X3RpdGxlIHRvIGFkZCwgcmVtb3ZlLCB1cGRhdGUgYWN0aW9uIGJ1dHRvbnNcbiAqICAgICAgIG9yIHVwZGF0ZSBkaWFsb2cgdGl0bGUuXG4gKiBcbiAqICAtIHJlbmRlckNvbnRlbnQoZGxnYm94KVxuICogICAgICAgWW91IG5lZWQgdG8gaW1wbWVtZW50IHRoaXMgZnVuY3Rpb24gdG8gcmV0dXJuIGNvbXBvbmVudCB0aGF0IHdpbGwgYmVcbiAqICAgICAgIHJlbmRlcmVkIGF0IHRoZSBjbGllbnQgYXJlYSBvZiB0aGUgZGlhbG9nYm94LlxuICpcbiAqICAtIG9uQWN0aW9uKGRsZ2JveCwgbmFtZSkgICAgICAgXG4gKiAgICAgICBDYWxsZWQgd2hlbiB1c2VyIHdhbnQgdG8gcGVyZm9ybSBhbiBhY3Rpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBEbGdCb3hBZ2VudCB7XG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIGRic1JlZjogcmVmIHRvIERpYWxvZ0JveFN0YWNrXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGJzUmVmKSB7XG4gICAgICAgIHRoaXMuZGJzUmVmID0gZGJzUmVmO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEluaXRTdWJTdGF0ZShkbGdib3gpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgYSBhc3luYyBmdW5jdGlvbiBzaW5jZSBpbm5lciBjYWxscyBhc3luYyBmdW5jdGlvblxuICAgIG9wZW5EaWFsb2cob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYnNSZWYuY3VycmVudC5vcGVuRGlhbG9nKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB3aGVuIHVwZGF0aW5nIHN0YXRlLCB5b3Ugc2hvdWxkIHVzZSBzdGF0ZSBzcGVjaWZpZWQgaGVyZVxuICAgIC8vIGluc3RlYWQgb2YgZGxnYm94LnN0YXRlXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG9uU3ViU3RhdGVVcGRhdGVkKGRsZ2JveCwgc3RhdGUsIG5ld1N1YlN0YXRlKSB7XG4gICAgfVxuXG4gICAgcmVuZGVyQ29udGVudChkbGdib3gpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgb25BY3Rpb24oZGxnYm94LCBuYW1lKSB7XG5cbiAgICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFB1cnBvc2U6IEEgZGlhbG9nYm94IHdyYXBwZXJcbiAqIFxuICogLSBQYXNzIGFuIGFnZW50IGlmIHlvdSB3YW50IGEgZHluYW1pYyBkaWFsb2cgYm94XG4gKiBcbiAqIC0gYWN0aW9uX3JlbW92ZVxuICogICAgICAgcmVtb3ZlIGFuIGFjdGlvbi5cbiAqIFxuICogLSBhY3Rpb25fc2V0XG4gKiAgICAgICBkZWZpbmUgYSBuZXcgYWN0aW9uIG9yIG92ZXJ3cml0ZSBhbiBleGlzdGluZyBhY3Rpb25cbiAqIFxuICogLSB0aXRsZV9zZXRcbiAqICAgICAgIFNldCBkaWFsb2dib3ggdGl0bGVcbiAqIFxuICogLSB1cGRhdGVTdWJTdGF0ZVxuICogICAgICAgVXBkYXRlIHN1YlN0YXRlLCB3aWxsIHRyaWdnZXIgYWdlbnQncyBvblN1YlN0YXRlVXBkYXRlZFxuICpcbiAqIC0gdXBkYXRlU3ViU3RhdGVGaWVsZFxuICogICAgICAgVXBkYXRlIGEgZmllbGQgaW4gc3ViU3RhdGUsIHdpbGwgdHJpZ2dlciBhZ2VudCdzIG9uU3ViU3RhdGVVcGRhdGVkXG4gKiBcbiAqIC0gY2xvc2VcbiAqICAgICAgIENsb3NlIHRoZSBkaWFsb2dib3gsIHJlc2V0IHN0YXR1c1xuICogXG4gKiAtIG9uQWN0aW9uXG4gKiAgICAgICBEaXNwYXRjaCBhY3Rpb24gdG8gYWdlbnQuIEFuZCBoYW5kbGUgY2xvc2UgYWN0aW9uIGFzIHdlbGwuXG4gKiBcbiAqIC0gb3BlbkRpYWxvZ1xuICogICAgICAgT3BlbnMgYSBkaWFsb2dib3gsIHVzZXIgc2hvdWxkIG5vdCBjYWxsIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkuXG4gKiBcbiAqIC0gcmVuZGVyXG4gKiAgICAgICBmb3IgcmVhY3RcbiAqL1xuXG5leHBvcnQgY2xhc3MgRGlhbG9nQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc2hvdzogICAgICAgZmFsc2UsXG4gICAgICAgIHRpdGxlOiAgICAgICcnLFxuICAgICAgICBzaXplOiAgICAgICAnc20nLFxuICAgICAgICBhY3Rpb25zOiAgICB7fSxcbiAgICAgICAgYWdlbnQ6ICAgICAgbnVsbCxcbiAgICAgICAgb25DbG9zZTogICAgbnVsbCwgIC8vIGEgY2FsbGJhY2sgdG8gbm90aWZ5IHRoZSBzdGFjayB0aGUgZGlhbG9nYm94IGlzIGNsb3NlZFxuICAgICAgICBzdWJTdGF0ZTogICB7fSxcbiAgICB9O1xuXG4gICAgbW9kYWxfaWQgPSB1dWlkdjQoKTtcblxuICAgIC8vIEZvbGxvd2luZyBmdW5jdGlvbnMgYXJlIG9ubHkgY2FsbGVkIGluIG9uU3ViU3RhdGVVcGRhdGVkIGZyb20gYWdlbnRcbiAgICBhY3Rpb25fcmVtb3ZlID0gKHN0YXRlLCBuYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lIGluIHN0YXRlLmFjdGlvbnMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5hY3Rpb25zW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFjdGlvbl9zZXQgPSAoc3RhdGUsIG5hbWUsIGNiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHN0YXRlLmFjdGlvbnNbbmFtZV0gfHwgbnVsbDtcbiAgICAgICAgY29uc3Qge3RleHQsIGFsbG93ZWR9ID0gY2IoYWN0aW9uKTtcbiAgICAgICAgc3RhdGUuYWN0aW9uc1tuYW1lXSA9IHt0ZXh0LCBhbGxvd2VkfTtcbiAgICB9XG4gICAgdGl0bGVfc2V0ID0gKHN0YXRlLCB0aXRsZSkgPT4ge1xuICAgICAgICBzdGF0ZS50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBzdWJzdGF0ZSwgdGhlIHVwZGF0ZShzdGF0ZS5zdWJTdGF0ZSkgd2lsbCByZXR1cm4gbmV3IHN1YlN0YXRlXG4gICAgdXBkYXRlU3ViU3RhdGUgPSBhc3luYyAodXBkYXRlKSA9PiB7XG4gICAgICAgIGF3YWl0IHNldFN0YXRlQXN5bmModGhpcywgc3RhdGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3U3ViU3RhdGUgPSB1cGRhdGUoc3RhdGUuc3ViU3RhdGUpO1xuICAgICAgICAgICAgc3RhdGUuc3ViU3RhdGUgPSBuZXdTdWJTdGF0ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWdlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFnZW50Lm9uU3ViU3RhdGVVcGRhdGVkKHRoaXMsIHN0YXRlLCBuZXdTdWJTdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGEgc3ViU3RhdGUgZmllbGRcbiAgICB1cGRhdGVTdWJTdGF0ZUZpZWxkID0gYXN5bmMgKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSkgPT4ge1xuICAgICAgICBhd2FpdCBzZXRTdGF0ZUFzeW5jKHRoaXMsIHN0YXRlID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnN1YlN0YXRlW2ZpZWxkTmFtZV0gPSBmaWVsZFZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWdlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFnZW50Lm9uU3ViU3RhdGVVcGRhdGVkKHRoaXMsIHN0YXRlLCBzdGF0ZS5zdWJTdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY2xvc2UgdGhlIGRpYWxvZ2JveFxuICAgIGNsb3NlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBvbkNsb3NlID0gdGhpcy5zdGF0ZS5vbkNsb3NlO1xuICAgICAgICBhd2FpdCBzZXRTdGF0ZUFzeW5jKHRoaXMsIHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgc2l6ZTogJ3NtJyxcbiAgICAgICAgICAgIGFjdGlvbnM6IHt9LFxuICAgICAgICAgICAgYWdlbnQ6IG51bGwsXG4gICAgICAgICAgICBvbkNsb3NlOiBudWxsLFxuICAgICAgICAgICAgc3ViU3RhdGU6IHt9LFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBvbkNsb3NlKCk7XG4gICAgfVxuXG4gICAgb25BY3Rpb24gPSBhc3luYyAobmFtZSkgPT4ge1xuICAgICAgICBpZiAoIV8uaXNOdWxsKHRoaXMuc3RhdGUuYWdlbnQpKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN0YXRlLmFnZW50Lm9uQWN0aW9uKHRoaXMsIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lID09PSBcImNsb3NlXCIpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRpdGxlICAgICAgICAgICAgOiBzdHJpbmcsIHRoZSB0aXRsZSBvZiB0aGUgZGlhbG9nXG4gICAgLy8gc2l6ZSAgICAgICAgICAgICA6IHN0cmluZywgc20sIG1kIG9yIGxnLCBzcGVjaWZ5IHRoZSBzaXplIG9mIHRoZSBkaWFsb2dib3hcbiAgICAvLyBhZ2VudCAgICAgICAgICAgIDogYW4gb2JqZWN0IG9mIGNsYXNzIERsZ0JveEFnZW50XG4gICAgLy8gb25DbG9zZSAgICAgICAgICA6IGEgY2FsbGJhY2sgZnJvbSBzdGFjaywgc28gc3RhY2sgY2FuIGRvIGNsZWFudXAgd2hlbiB0aGUgZGlhbG9nYm94IGlzIGNsb3NlZFxuICAgIC8vIGNvbnRlbnQgICAgICAgICAgOiBzdGF0aWMgY29udGVudCwgb25seSB1c2VmdWwgd2hlbiBhZ2VudCBpcyBudWxsXG4gICAgb3BlbkRpYWxvZyA9IGFzeW5jIChvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgY29uc3Qge3RpdGxlLCBzaXplLCBhZ2VudCwgb25DbG9zZSwgY29udGVudH0gPSB7XG4gICAgICAgICAgICB0aXRsZTogJycsIFxuICAgICAgICAgICAgc2l6ZTogJ3NtJywgXG4gICAgICAgICAgICBhZ2VudDogbnVsbCwgXG4gICAgICAgICAgICBjb250ZW50OiBudWxsLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9O1xuICAgICAgICAvLyBzaW1wbGUgY2FzZSwgbm8gYWdlbnRcbiAgICAgICAgaWYgKF8uaXNOdWxsKGFnZW50KSkge1xuICAgICAgICAgICAgYXdhaXQgc2V0U3RhdGVBc3luYyh0aGlzLCB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2VudDogbnVsbCxcbiAgICAgICAgICAgICAgICBvbkNsb3NlOiBvbkNsb3NlLFxuICAgICAgICAgICAgICAgIHN1YlN0YXRlOiB7fSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBibGVzc19tb2RhbCh0aGlzLm1vZGFsX2lkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1YlN0YXRlID0gYXdhaXQgYWdlbnQuZ2V0SW5pdFN1YlN0YXRlKHRoaXMpO1xuICAgICAgICBhd2FpdCBzZXRTdGF0ZUFzeW5jKHRoaXMsIHN0YXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgICAgICAgICAgYWN0aW9uczoge30sXG4gICAgICAgICAgICAgICAgYWdlbnQ6IGFnZW50LFxuICAgICAgICAgICAgICAgIG9uQ2xvc2U6IG9uQ2xvc2UsXG4gICAgICAgICAgICAgICAgc3ViU3RhdGU6IF8uY2xvbmUoc3ViU3RhdGUpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFnZW50Lm9uU3ViU3RhdGVVcGRhdGVkKHRoaXMsIG5ld1N0YXRlLCBzdWJTdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICAgIH0pO1xuICAgICAgICBibGVzc19tb2RhbCh0aGlzLm1vZGFsX2lkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkbGdfcHJvcHMgPSB7fTtcblxuICAgICAgICBsZXQgZGlhbG9nQ2xhc3NOYW1lID0gXCJzdGFuZGFyZC1tb2RhbFwiXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNpemUgPT09ICdzbScpIHtcbiAgICAgICAgICAgIGRpYWxvZ0NsYXNzTmFtZSArPSAnIHNtLW1vZGFsJ1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2l6ZSA9PT0gJ21kJykge1xuICAgICAgICAgICAgZGlhbG9nQ2xhc3NOYW1lICs9ICcgbWQtbW9kYWwnXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zaXplID09PSAnbGcnKSB7XG4gICAgICAgICAgICBkaWFsb2dDbGFzc05hbWUgKz0gJyBsZy1tb2RhbCdcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2RpYWxvZ0NsYXNzTmFtZScgaW4gdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgZGlhbG9nQ2xhc3NOYW1lICs9ICgnICcgKyB0aGlzLnByb3BzLmRpYWxvZ0NsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gdGhpcy5vbkFjdGlvbihcImNsb3NlXCIpfVxuICAgICAgICAgICAgICAgIGJhY2tkcm9wPVwic3RhdGljXCJcbiAgICAgICAgICAgICAgICBzY3JvbGxhYmxlXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBkaWFsb2dDbGFzc05hbWU9e2RpYWxvZ0NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBkYXRhLW1vZGFsLWlkPXt0aGlzLm1vZGFsX2lkfVxuICAgICAgICAgICAgICAgIHsgLi4uIGRsZ19wcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+e3RoaXMuc3RhdGUuc2hvdyAmJiB0aGlzLnN0YXRlLnRpdGxlfTwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvdyAmJiA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cInBiLTIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfLmlzTnVsbCh0aGlzLnN0YXRlLmFnZW50KSAmJiB0aGlzLnN0YXRlLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFfLmlzTnVsbCh0aGlzLnN0YXRlLmFnZW50KSAmJiB0aGlzLnN0YXRlLmFnZW50LnJlbmRlckNvbnRlbnQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cblxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvdyAmJiBPYmplY3QuZW50cmllcyh0aGlzLnN0YXRlLmFjdGlvbnMpLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZW50cnkpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZW50cnlbMF0gIT09ICdjbG9zZScpICYmIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VudHJ5WzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2dCkgPT4gdGhpcy5vbkFjdGlvbihlbnRyeVswXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVudHJ5WzFdLmFsbG93ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbnRyeVsxXS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZ0KSA9PiB0aGlzLm9uQWN0aW9uKFwiY2xvc2VcIil9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2dCb3hTdGFjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY3VycmVudCA9IC0xXG4gICAgXG4gICAgZGxnQm94UmVmcyA9IF8ucmFuZ2UoMjApLm1hcChpID0+IFJlYWN0LmNyZWF0ZVJlZigpKVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5kbGdCb3hSZWZzLm1hcCgocmVmLCBpZHgpID0+IDxEaWFsb2dCb3gga2V5PXtpZHh9IHJlZj17cmVmfS8+KVxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz4pO1xuICAgIH1cblxuICAgIG9wZW5EaWFsb2cgPSBhc3luYyAob3B0aW9ucz17fSkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zRXggPSB7Li4ub3B0aW9uc307XG4gICAgICAgIG9wdGlvbnNFeC5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50IC09IDE7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnQrMSkgPj0gdGhpcy5kbGdCb3hSZWZzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9vIG1hbnkgZGlhbG9ncyFcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnQgKz0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kbGdCb3hSZWZzW3RoaXMuY3VycmVudF0uY3VycmVudC5vcGVuRGlhbG9nKG9wdGlvbnNFeCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IERpYWxvZ0JveFN0YWNrUHJvdmlkZXIgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYnVpbGRVcmwgZnJvbSAnYnVpbGQtdXJsJztcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwaV9nZXQodXJsLCBwYXJhbXM9e30pIHtcbiAgICBjb25zdCBlZmZlY3RpdmVfdXJsID0gXy5pc0VtcHR5KHBhcmFtcyk/YnVpbGRVcmwodXJsKTpidWlsZFVybCh1cmwsIHtxdWVyeVBhcmFtczogcGFyYW1zfSk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goZWZmZWN0aXZlX3VybCk7XG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfVxuICAgIHRocm93IHJlcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwaV9wb3N0KHVybCwgY3NyZlRva2VuLCBwYXlsb2FkKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIHVybCxcbiAgICAgICAge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdYLUNTUkZUb2tlbic6IGNzcmZUb2tlbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcbiAgICAgICAgfVxuICAgICk7XG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gMjAwICYmIHJlcy5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfVxuICAgIHRocm93IHJlcztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwaV9kZWxldGUodXJsLCBjc3JmVG9rZW4pIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgdXJsLFxuICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiBjc3JmVG9rZW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgKTtcbiAgICBpZiAocmVzLnN0YXR1cyA+PSAyMDAgJiYgcmVzLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB0aHJvdyByZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcGlfcGF0Y2godXJsLCBjc3JmVG9rZW4sIHBheWxvYWQpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgdXJsLFxuICAgICAgICB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ1gtVU5JQ09STi1Vc2UtTWV0aG9kJzogJ1BBVENIJyxcbiAgICAgICAgICAgICAgICAnWC1DU1JGVG9rZW4nOiBjc3JmVG9rZW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gICAgICAgIH1cbiAgICApO1xuICAgIGlmIChyZXMuc3RhdHVzID49IDIwMCAmJiByZXMuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH1cbiAgICB0aHJvdyByZXM7XG59XG4iLCIvKipcbiAqIGJ1aWxkLXVybCAtIEEgc21hbGwgbGlicmFyeSB0aGF0IGJ1aWxkcyBhIFVSTCBnaXZlbiBpdHMgY29tcG9uZW50c1xuICogQHZlcnNpb24gdjYuMC4wXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vc3RldmVyeWR6L2J1aWxkLXVybCNyZWFkbWVcbiAqIEBsaWNlbnNlIE1JVFxuICovXG47KGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciByb290ID0gdGhpcztcbiAgdmFyIHByZXZpb3VzQnVpbGRVcmwgPSByb290LmJ1aWxkVXJsO1xuXG4gIHZhciBlbmNvZGVkUGFyYW0gPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICByZXR1cm4gcGFyYW0gPT09IG51bGwgPyAnJyA6IGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcocGFyYW0pLnRyaW0oKSk7XG4gIH07XG5cbiAgdmFyIGJ1aWxkVXJsID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICAgIHZhciBxdWVyeVN0cmluZyA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgdmFyIGJ1aWx0VXJsO1xuICAgIHZhciBjYXNlQ2hhbmdlOyBcbiAgICBcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmxvd2VyQ2FzZSkge1xuICAgICAgICBjYXNlQ2hhbmdlID0gISFvcHRpb25zLmxvd2VyQ2FzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYXNlQ2hhbmdlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHVybCA9PT0gbnVsbCkge1xuICAgICAgYnVpbHRVcmwgPSAnJztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZih1cmwpID09PSAnb2JqZWN0Jykge1xuICAgICAgYnVpbHRVcmwgPSAnJztcbiAgICAgIG9wdGlvbnMgPSB1cmw7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1aWx0VXJsID0gdXJsO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5wYXRoKSB7XG4gICAgICAgIGlmKGJ1aWx0VXJsICYmIGJ1aWx0VXJsW2J1aWx0VXJsLmxlbmd0aCAtIDFdID09PSAnLycpIHtcbiAgICAgICAgICBidWlsdFVybCA9IGJ1aWx0VXJsLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgfSBcblxuICAgICAgICB2YXIgbG9jYWxWYXIgPSBTdHJpbmcob3B0aW9ucy5wYXRoKS50cmltKCk7IFxuICAgICAgICBpZiAoY2FzZUNoYW5nZSkge1xuICAgICAgICAgIGxvY2FsVmFyID0gbG9jYWxWYXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxWYXIuaW5kZXhPZignLycpID09PSAwKSB7XG4gICAgICAgICAgICBidWlsdFVybCArPSBsb2NhbFZhcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidWlsdFVybCArPSAnLycgKyBsb2NhbFZhcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5xdWVyeVBhcmFtcykge1xuICAgICAgICBmb3IgKGtleSBpbiBvcHRpb25zLnF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMucXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBvcHRpb25zLnF1ZXJ5UGFyYW1zW2tleV0gIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgdmFyIHBhcmFtO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGlzYWJsZUNTViAmJiBBcnJheS5pc0FycmF5KG9wdGlvbnMucXVlcnlQYXJhbXNba2V5XSkgJiYgb3B0aW9ucy5xdWVyeVBhcmFtc1trZXldLmxlbmd0aCkge1xuICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgb3B0aW9ucy5xdWVyeVBhcmFtc1trZXldLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcGFyYW0gPSBvcHRpb25zLnF1ZXJ5UGFyYW1zW2tleV1baV07XG4gICAgICAgICAgICAgICAgcXVlcnlTdHJpbmcucHVzaChrZXkgKyAnPScgKyBlbmNvZGVkUGFyYW0ocGFyYW0pKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHsgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBpZiAoY2FzZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHBhcmFtID0gb3B0aW9ucy5xdWVyeVBhcmFtc1trZXldLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW0gPSBvcHRpb25zLnF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcXVlcnlTdHJpbmcucHVzaChrZXkgKyAnPScgKyBlbmNvZGVkUGFyYW0ocGFyYW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnVpbHRVcmwgKz0gJz8nICsgcXVlcnlTdHJpbmcuam9pbignJicpO1xuICAgICAgfVxuXG4gICAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgICAgIGlmKGNhc2VDaGFuZ2UpXG4gICAgICAgICAgICBidWlsdFVybCArPSAnIycgKyBTdHJpbmcob3B0aW9ucy5oYXNoKS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgYnVpbHRVcmwgKz0gJyMnICsgU3RyaW5nKG9wdGlvbnMuaGFzaCkudHJpbSgpO1xuICAgICAgfVxuICAgIH0gXG4gICAgcmV0dXJuIGJ1aWx0VXJsO1xuICB9O1xuXG4gIGJ1aWxkVXJsLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgcm9vdC5idWlsZFVybCA9IHByZXZpb3VzQnVpbGRVcmw7XG4gICAgcmV0dXJuIGJ1aWxkVXJsO1xuICB9O1xuXG4gIGlmICh0eXBlb2YoZXhwb3J0cykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZihtb2R1bGUpICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gYnVpbGRVcmw7XG4gICAgfVxuICAgIGV4cG9ydHMuYnVpbGRVcmwgPSBidWlsZFVybDtcbiAgfSBlbHNlIHtcbiAgICByb290LmJ1aWxkVXJsID0gYnVpbGRVcmw7XG4gIH1cbn0pLmNhbGwodGhpcyk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIm5hdi5nbG9iYWwtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdBODc7XFxufVxcbm5hdi5nbG9iYWwtaGVhZGVyIC5uYXZiYXItYnJhbmQgPiBpbWcge1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5uYXYuZ2xvYmFsLWhlYWRlciAubmF2YmFyLWJyYW5kID4gc3BhbiB7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbn1cXG5cXG5kaXYuYXBwLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nLXRvcDogNThweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdWkvanMvY29tcG9uZW50cy9idXNpbmVzcy9hcHBiYXNlL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7QUFFUTtFQUNJLFlBQUE7QUFBWjtBQUdRO0VBQ0ksZ0JBQUE7QUFEWjs7QUFPQTtFQUNJLGlCQUFBO0FBSkpcIixcInNvdXJjZXNDb250ZW50XCI6W1wibmF2Lmdsb2JhbC1oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QTg3O1xcblxcbiAgICAubmF2YmFyLWJyYW5kIHtcXG4gICAgICAgICYgPiBpbWcge1xcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgPiBzcGFuIHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblxcbmRpdi5hcHAtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy10b3A6IDU4cHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImRpdi5zdGFuZGFyZC1tb2RhbCB7XFxuICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcXG4gIG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG59XFxuZGl2LnN0YW5kYXJkLW1vZGFsID4gZGl2Lm1vZGFsLWNvbnRlbnQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XFxufVxcbmRpdi5zdGFuZGFyZC1tb2RhbCA+IGRpdi5tb2RhbC1jb250ZW50ID4gZGl2Lm1vZGFsLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XFxuICBjdXJzb3I6IG1vdmU7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcbmRpdi5zdGFuZGFyZC1tb2RhbCA+IGRpdi5tb2RhbC1jb250ZW50ID4gZGl2Lm1vZGFsLWhlYWRlciA+IGRpdi5tb2RhbC10aXRsZSB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuZGl2LnN0YW5kYXJkLW1vZGFsID4gZGl2Lm1vZGFsLWNvbnRlbnQgPiBkaXYubW9kYWwtaGVhZGVyID4gYnV0dG9uLmNsb3NlIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuZGl2LnN0YW5kYXJkLW1vZGFsID4gZGl2Lm1vZGFsLWNvbnRlbnQgPiBkaXYubW9kYWwtYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbn1cXG5cXG5kaXYubGctbW9kYWwgPiBkaXYubW9kYWwtY29udGVudCB7XFxuICB3aWR0aDogMTQ0MHB4O1xcbiAgaGVpZ2h0OiA4NjBweDtcXG59XFxuXFxuZGl2Lm1kLW1vZGFsID4gZGl2Lm1vZGFsLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwODBweDtcXG4gIGhlaWdodDogNjAwcHg7XFxufVxcblxcbmRpdi5zbS1tb2RhbCA+IGRpdi5tb2RhbC1jb250ZW50IHtcXG4gIHdpZHRoOiA4MDBweDtcXG4gIGhlaWdodDogNjAwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3VpL2pzL2NvbXBvbmVudHMvZ2VuZXJpYy9kaWFsb2dib3gvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUFDSjtBQUNJO0VBcUJJLDBCQUFBO0FBbkJSO0FBRFE7RUFDSSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBR1o7QUFEWTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFHaEI7QUFBWTtFQUNJLGVBQUE7QUFFaEI7QUFFUTtFQUNJLHlCQUFBO0FBQVo7O0FBT0k7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQUpSOztBQVFJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUFMUjs7QUFTSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBTlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGl2LnN0YW5kYXJkLW1vZGFsIHtcXG4gICAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuXFxuICAgICYgPiBkaXYubW9kYWwtY29udGVudCB7XFxuICAgICAgICAmID4gZGl2Lm1vZGFsLWhlYWRlciB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xcbiAgICAgICAgICAgIGN1cnNvcjogbW92ZTtcXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XFxuXFxuICAgICAgICAgICAgJiA+IGRpdi5tb2RhbC10aXRsZSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgJiA+IGJ1dHRvbi5jbG9zZSB7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmID4gZGl2Lm1vZGFsLWJvZHkge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcXG4gICAgfVxcbn1cXG5kaXYubGctbW9kYWwge1xcbiAgICAmID4gZGl2Lm1vZGFsLWNvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6ICAxNDQwcHg7XFxuICAgICAgICBoZWlnaHQ6IDg2MHB4O1xcbiAgICB9XFxufVxcbmRpdi5tZC1tb2RhbCB7XFxuICAgICYgPiBkaXYubW9kYWwtY29udGVudCB7XFxuICAgICAgICB3aWR0aDogIDEwODBweDtcXG4gICAgICAgIGhlaWdodDogNjAwcHg7XFxuICAgIH1cXG59XFxuZGl2LnNtLW1vZGFsIHtcXG4gICAgJiA+IGRpdi5tb2RhbC1jb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiAgODAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcmFuZG9tVVVJRCA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5yYW5kb21VVUlEICYmIGNyeXB0by5yYW5kb21VVUlELmJpbmQoY3J5cHRvKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmFuZG9tVVVJRFxufTsiLCJleHBvcnQgZGVmYXVsdCAvXig/OlswLTlhLWZdezh9LVswLTlhLWZdezR9LVsxLTVdWzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9fDAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCkkL2k7IiwiLy8gVW5pcXVlIElEIGNyZWF0aW9uIHJlcXVpcmVzIGEgaGlnaCBxdWFsaXR5IHJhbmRvbSAjIGdlbmVyYXRvci4gSW4gdGhlIGJyb3dzZXIgd2UgdGhlcmVmb3JlXG4vLyByZXF1aXJlIHRoZSBjcnlwdG8gQVBJIGFuZCBkbyBub3Qgc3VwcG9ydCBidWlsdC1pbiBmYWxsYmFjayB0byBsb3dlciBxdWFsaXR5IHJhbmRvbSBudW1iZXJcbi8vIGdlbmVyYXRvcnMgKGxpa2UgTWF0aC5yYW5kb20oKSkuXG5sZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gIC8vIGxhenkgbG9hZCBzbyB0aGF0IGVudmlyb25tZW50cyB0aGF0IG5lZWQgdG8gcG9seWZpbGwgaGF2ZSBhIGNoYW5jZSB0byBkbyBzb1xuICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgIC8vIGdldFJhbmRvbVZhbHVlcyBuZWVkcyB0byBiZSBpbnZva2VkIGluIGEgY29udGV4dCB3aGVyZSBcInRoaXNcIiBpcyBhIENyeXB0byBpbXBsZW1lbnRhdGlvbi5cbiAgICBnZXRSYW5kb21WYWx1ZXMgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5cbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgLy8gTm90ZTogQmUgY2FyZWZ1bCBlZGl0aW5nIHRoaXMgY29kZSEgIEl0J3MgYmVlbiB0dW5lZCBmb3IgcGVyZm9ybWFuY2VcbiAgLy8gYW5kIHdvcmtzIGluIHdheXMgeW91IG1heSBub3QgZXhwZWN0LiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkL3B1bGwvNDM0XG4gIHJldHVybiAoYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAzXV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA2XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDddXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA5XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEwXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDExXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDEzXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDE1XV0pLnRvTG93ZXJDYXNlKCk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgY29uc3QgdXVpZCA9IHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCk7IC8vIENvbnNpc3RlbmN5IGNoZWNrIGZvciB2YWxpZCBVVUlELiAgSWYgdGhpcyB0aHJvd3MsIGl0J3MgbGlrZWx5IGR1ZSB0byBvbmVcbiAgLy8gb2YgdGhlIGZvbGxvd2luZzpcbiAgLy8gLSBPbmUgb3IgbW9yZSBpbnB1dCBhcnJheSB2YWx1ZXMgZG9uJ3QgbWFwIHRvIGEgaGV4IG9jdGV0IChsZWFkaW5nIHRvXG4gIC8vIFwidW5kZWZpbmVkXCIgaW4gdGhlIHV1aWQpXG4gIC8vIC0gSW52YWxpZCBpbnB1dCB2YWx1ZXMgZm9yIHRoZSBSRkMgYHZlcnNpb25gIG9yIGB2YXJpYW50YCBmaWVsZHNcblxuICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHJldHVybiB1dWlkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7IiwiaW1wb3J0IG5hdGl2ZSBmcm9tICcuL25hdGl2ZS5qcyc7XG5pbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCB7IHVuc2FmZVN0cmluZ2lmeSB9IGZyb20gJy4vc3RyaW5naWZ5LmpzJztcblxuZnVuY3Rpb24gdjQob3B0aW9ucywgYnVmLCBvZmZzZXQpIHtcbiAgaWYgKG5hdGl2ZS5yYW5kb21VVUlEICYmICFidWYgJiYgIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmF0aXZlLnJhbmRvbVVVSUQoKTtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBjb25zdCBybmRzID0gb3B0aW9ucy5yYW5kb20gfHwgKG9wdGlvbnMucm5nIHx8IHJuZykoKTsgLy8gUGVyIDQuNCwgc2V0IGJpdHMgZm9yIHZlcnNpb24gYW5kIGBjbG9ja19zZXFfaGlfYW5kX3Jlc2VydmVkYFxuXG4gIHJuZHNbNl0gPSBybmRzWzZdICYgMHgwZiB8IDB4NDA7XG4gIHJuZHNbOF0gPSBybmRzWzhdICYgMHgzZiB8IDB4ODA7IC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuXG4gIGlmIChidWYpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfHwgMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7ICsraSkge1xuICAgICAgYnVmW29mZnNldCArIGldID0gcm5kc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgcmV0dXJuIHVuc2FmZVN0cmluZ2lmeShybmRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdjQ7IiwiaW1wb3J0IFJFR0VYIGZyb20gJy4vcmVnZXguanMnO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh1dWlkKSB7XG4gIHJldHVybiB0eXBlb2YgdXVpZCA9PT0gJ3N0cmluZycgJiYgUkVHRVgudGVzdCh1dWlkKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGU7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0RE9NOyIsIm1vZHVsZS5leHBvcnRzID0gXzsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0Qm9vdHN0cmFwLkFsZXJ0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RCb290c3RyYXAuQnV0dG9uOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RCb290c3RyYXAuQ29sOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RCb290c3RyYXAuQ29udGFpbmVyOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RCb290c3RyYXAuRHJvcGRvd247IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdEJvb3RzdHJhcC5Ecm9wZG93bkJ1dHRvbjsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0Qm9vdHN0cmFwLk1vZGFsOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RCb290c3RyYXAuTmF2OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RCb290c3RyYXAuTmF2YmFyOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RCb290c3RyYXAuUm93OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4vdHlwZW9mLmpzXCIpW1wiZGVmYXVsdFwiXTtcbmZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gIFwidXNlIHN0cmljdFwiOyAvKiEgcmVnZW5lcmF0b3ItcnVudGltZSAtLSBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRmFjZWJvb2ssIEluYy4gLS0gbGljZW5zZSAoTUlUKTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9MSUNFTlNFICovXG4gIG1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSA9IGZ1bmN0aW9uIF9yZWdlbmVyYXRvclJ1bnRpbWUoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHM7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cztcbiAgdmFyIGV4cG9ydHMgPSB7fSxcbiAgICBPcCA9IE9iamVjdC5wcm90b3R5cGUsXG4gICAgaGFzT3duID0gT3AuaGFzT3duUHJvcGVydHksXG4gICAgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgfHwgZnVuY3Rpb24gKG9iaiwga2V5LCBkZXNjKSB7XG4gICAgICBvYmpba2V5XSA9IGRlc2MudmFsdWU7XG4gICAgfSxcbiAgICAkU3ltYm9sID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgPyBTeW1ib2wgOiB7fSxcbiAgICBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCIsXG4gICAgYXN5bmNJdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCBcIkBAYXN5bmNJdGVyYXRvclwiLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgIHdyaXRhYmxlOiAhMFxuICAgIH0pLCBvYmpba2V5XTtcbiAgfVxuICB0cnkge1xuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBwcm90b0dlbmVyYXRvciA9IG91dGVyRm4gJiYgb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IgPyBvdXRlckZuIDogR2VuZXJhdG9yLFxuICAgICAgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpLFxuICAgICAgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcbiAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoZ2VuZXJhdG9yLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dClcbiAgICB9KSwgZ2VuZXJhdG9yO1xuICB9XG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcIm5vcm1hbFwiLFxuICAgICAgICBhcmc6IGZuLmNhbGwob2JqLCBhcmcpXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJ0aHJvd1wiLFxuICAgICAgICBhcmc6IGVyclxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgZXhwb3J0cy53cmFwID0gd3JhcDtcbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBkZWZpbmUoSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICE9PSBPcCAmJiBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpICYmIChJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKFwidGhyb3dcIiAhPT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmcsXG4gICAgICAgICAgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBcIm9iamVjdFwiID09IF90eXBlb2YodmFsdWUpICYmIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikgPyBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSkgOiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uICh1bndyYXBwZWQpIHtcbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQsIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICB9XG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcbiAgICBkZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pbnZva2VcIiwge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPSBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZywgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcpIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtZXRob2QsIGFyZykge1xuICAgICAgaWYgKFwiZXhlY3V0aW5nXCIgPT09IHN0YXRlKSB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgaWYgKFwiY29tcGxldGVkXCIgPT09IHN0YXRlKSB7XG4gICAgICAgIGlmIChcInRocm93XCIgPT09IG1ldGhvZCkgdGhyb3cgYXJnO1xuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuICAgICAgZm9yIChjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZCwgY29udGV4dC5hcmcgPSBhcmc7Oykge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChcIm5leHRcIiA9PT0gY29udGV4dC5tZXRob2QpIGNvbnRleHQuc2VudCA9IGNvbnRleHQuX3NlbnQgPSBjb250ZXh0LmFyZztlbHNlIGlmIChcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSB7XG4gICAgICAgICAgaWYgKFwic3VzcGVuZGVkU3RhcnRcIiA9PT0gc3RhdGUpIHRocm93IHN0YXRlID0gXCJjb21wbGV0ZWRcIiwgY29udGV4dC5hcmc7XG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG4gICAgICAgIH0gZWxzZSBcInJldHVyblwiID09PSBjb250ZXh0Lm1ldGhvZCAmJiBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIHN0YXRlID0gXCJleGVjdXRpbmdcIjtcbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAoXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPSBjb250ZXh0LmRvbmUgPyBcImNvbXBsZXRlZFwiIDogXCJzdXNwZW5kZWRZaWVsZFwiLCByZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUgJiYgKHN0YXRlID0gXCJjb21wbGV0ZWRcIiwgY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZyk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZE5hbWUgPSBjb250ZXh0Lm1ldGhvZCxcbiAgICAgIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZE5hbWVdO1xuICAgIGlmICh1bmRlZmluZWQgPT09IG1ldGhvZCkgcmV0dXJuIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBcInRocm93XCIgPT09IG1ldGhvZE5hbWUgJiYgZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0gJiYgKGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQsIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpLCBcInRocm93XCIgPT09IGNvbnRleHQubWV0aG9kKSB8fCBcInJldHVyblwiICE9PSBtZXRob2ROYW1lICYmIChjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAnXCIgKyBtZXRob2ROYW1lICsgXCInIG1ldGhvZFwiKSksIENvbnRpbnVlU2VudGluZWw7XG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcbiAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgcmV0dXJuIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcsIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICByZXR1cm4gaW5mbyA/IGluZm8uZG9uZSA/IChjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZSwgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYywgXCJyZXR1cm5cIiAhPT0gY29udGV4dC5tZXRob2QgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpIDogaW5mbyA6IChjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFwiaXRlcmF0b3IgcmVzdWx0IGlzIG5vdCBhbiBvYmplY3RcIiksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKTtcbiAgfVxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHtcbiAgICAgIHRyeUxvYzogbG9jc1swXVxuICAgIH07XG4gICAgMSBpbiBsb2NzICYmIChlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV0pLCAyIGluIGxvY3MgJiYgKGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdLCBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM10pLCB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIiwgZGVsZXRlIHJlY29yZC5hcmcsIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7XG4gICAgICB0cnlMb2M6IFwicm9vdFwiXG4gICAgfV0sIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKSwgdGhpcy5yZXNldCghMCk7XG4gIH1cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGl0ZXJhYmxlLm5leHQpIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLFxuICAgICAgICAgIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgZm9yICg7ICsraSA8IGl0ZXJhYmxlLmxlbmd0aDspIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHJldHVybiBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV0sIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgICAgICAgcmV0dXJuIG5leHQudmFsdWUgPSB1bmRlZmluZWQsIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgbmV4dDogZG9uZVJlc3VsdFxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgIGRvbmU6ICEwXG4gICAgfTtcbiAgfVxuICByZXR1cm4gR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZVByb3BlcnR5KEdwLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgZGVmaW5lUHJvcGVydHkoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvbixcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIiksIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZ2VuRnVuICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gISFjdG9yICYmIChjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIgPT09IChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkpO1xuICB9LCBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgcmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKSA6IChnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpKSwgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApLCBnZW5GdW47XG4gIH0sIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbiAoYXJnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIF9fYXdhaXQ6IGFyZ1xuICAgIH07XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSksIGRlZmluZShBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSwgYXN5bmNJdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZXhwb3J0cy5Bc3luY0l0ZXJhdG9yID0gQXN5bmNJdGVyYXRvciwgZXhwb3J0cy5hc3luYyA9IGZ1bmN0aW9uIChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICB2b2lkIDAgPT09IFByb21pc2VJbXBsICYmIChQcm9taXNlSW1wbCA9IFByb21pc2UpO1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3Iod3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCksIFByb21pc2VJbXBsKTtcbiAgICByZXR1cm4gZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pID8gaXRlciA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgfSk7XG4gIH0sIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCksIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpLCBkZWZpbmUoR3AsIGl0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBkZWZpbmUoR3AsIFwidG9TdHJpbmdcIiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9KSwgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24gKHZhbCkge1xuICAgIHZhciBvYmplY3QgPSBPYmplY3QodmFsKSxcbiAgICAgIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSBrZXlzLnB1c2goa2V5KTtcbiAgICByZXR1cm4ga2V5cy5yZXZlcnNlKCksIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICBmb3IgKDsga2V5cy5sZW5ndGg7KSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkgcmV0dXJuIG5leHQudmFsdWUgPSBrZXksIG5leHQuZG9uZSA9ICExLCBuZXh0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5leHQuZG9uZSA9ICEwLCBuZXh0O1xuICAgIH07XG4gIH0sIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzLCBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoc2tpcFRlbXBSZXNldCkge1xuICAgICAgaWYgKHRoaXMucHJldiA9IDAsIHRoaXMubmV4dCA9IDAsIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQsIHRoaXMuZG9uZSA9ICExLCB0aGlzLmRlbGVnYXRlID0gbnVsbCwgdGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5hcmcgPSB1bmRlZmluZWQsIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpLCAhc2tpcFRlbXBSZXNldCkgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSBcInRcIiA9PT0gbmFtZS5jaGFyQXQoMCkgJiYgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiYgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSAmJiAodGhpc1tuYW1lXSA9IHVuZGVmaW5lZCk7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgdGhpcy5kb25lID0gITA7XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHRoaXMudHJ5RW50cmllc1swXS5jb21wbGV0aW9uO1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcm9vdFJlY29yZC50eXBlKSB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24gZGlzcGF0Y2hFeGNlcHRpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB0aHJvdyBleGNlcHRpb247XG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiLCByZWNvcmQuYXJnID0gZXhjZXB0aW9uLCBjb250ZXh0Lm5leHQgPSBsb2MsIGNhdWdodCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCAhIWNhdWdodDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldLFxuICAgICAgICAgIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgIGlmIChcInJvb3RcIiA9PT0gZW50cnkudHJ5TG9jKSByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpLFxuICAgICAgICAgICAgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaGFzRmluYWxseSkgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFicnVwdDogZnVuY3Rpb24gYWJydXB0KHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiYgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZmluYWxseUVudHJ5ICYmIChcImJyZWFrXCIgPT09IHR5cGUgfHwgXCJjb250aW51ZVwiID09PSB0eXBlKSAmJiBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJiBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MgJiYgKGZpbmFsbHlFbnRyeSA9IG51bGwpO1xuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSB0eXBlLCByZWNvcmQuYXJnID0gYXJnLCBmaW5hbGx5RW50cnkgPyAodGhpcy5tZXRob2QgPSBcIm5leHRcIiwgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MsIENvbnRpbnVlU2VudGluZWwpIDogdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIFwiYnJlYWtcIiA9PT0gcmVjb3JkLnR5cGUgfHwgXCJjb250aW51ZVwiID09PSByZWNvcmQudHlwZSA/IHRoaXMubmV4dCA9IHJlY29yZC5hcmcgOiBcInJldHVyblwiID09PSByZWNvcmQudHlwZSA/ICh0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmcsIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIiwgdGhpcy5uZXh0ID0gXCJlbmRcIikgOiBcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSAmJiBhZnRlckxvYyAmJiAodGhpcy5uZXh0ID0gYWZ0ZXJMb2MpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG4gICAgZmluaXNoOiBmdW5jdGlvbiBmaW5pc2goZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSByZXR1cm4gdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyksIHJlc2V0VHJ5RW50cnkoZW50cnkpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuICAgIH0sXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbiBfY2F0Y2godHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uIGRlbGVnYXRlWWllbGQoaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfSwgXCJuZXh0XCIgPT09IHRoaXMubWV0aG9kICYmICh0aGlzLmFyZyA9IHVuZGVmaW5lZCksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9LCBleHBvcnRzO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiAobW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cyksIF90eXBlb2Yob2JqKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsIi8vIFRPRE8oQmFiZWwgOCk6IFJlbW92ZSB0aGlzIGZpbGUuXG5cbnZhciBydW50aW1lID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvcmVnZW5lcmF0b3JSdW50aW1lXCIpKCk7XG5tb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG5cbi8vIENvcGllZCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vcGFja2FnZXMvcnVudGltZS9ydW50aW1lLmpzI0w3MzY9XG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAga2V5ID0gdG9Qcm9wZXJ0eUtleShrZXkpO1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gPyBPYmplY3QuYXNzaWduLmJpbmQoKSA6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgQ29sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db2wnO1xuaW1wb3J0IFJvdyBmcm9tICdyZWFjdC1ib290c3RyYXAvUm93JztcblxuaW1wb3J0IHsgQXBwbGljYXRpb25Db250YWluZXIgfSBmcm9tICcvY29tcG9uZW50cy9idXNpbmVzcy9hcHBiYXNlJztcblxuaW1wb3J0IHtBcHBsaWNhdGlvblBhZ2V9IGZyb20gJy9jb21tb25fbGliJztcbmltcG9ydCB7bGlzdF9waXBlbGluZXN9IGZyb20gJy9hcGlzJztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogUHVycG9zZTogUGFnZSB0byB2aWV3IGFuIGFwcGxpY2F0aW9uXG4gKlxuICogUHJvcHNcbiAqICAgICAgY3VycmVudF91c2VyOiBjdXJyZW50IHVzZXJcbiAqICAgICAgY3NyZl90b2tlbjogICB0aGUgY3NyZiB0b2tlblxuICogICAgICBzZXRfYWxlcnQ6ICAgIGEgZnVuY3Rpb24gdG8gc2V0IGFsZXJ0XG4gKi9cblxuY2xhc3MgSG9tZUFwcGxpY2F0aW9uUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkhvbWUgUGFnZTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9XG59XG5cbiQoYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcGFnZSA9IG5ldyBBcHBsaWNhdGlvblBhZ2UoKTtcblxuICAgIGNvbnN0IHBpcGVsaW5lcyA9IGF3YWl0IGxpc3RfcGlwZWxpbmVzKCk7XG4gICAgY29uc29sZS5sb2cocGlwZWxpbmVzKTtcblxuICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgPEFwcGxpY2F0aW9uQ29udGFpbmVyXG4gICAgICAgICAgICBjdXJyZW50X3VzZXI9e3BhZ2UuY3VycmVudF91c2VyfVxuICAgICAgICAgICAgY3NyZl90b2tlbj17cGFnZS5jc3JmX3Rva2VufVxuICAgICAgICAgICAgaW5pdF9tZW51X2tleT17cGFnZS5pbml0X21lbnVfa2V5fVxuICAgICAgICAgICAgYXBwX2NvbnRleHQ9e3BhZ2UuYXBwX2NvbnRleHR9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxIb21lQXBwbGljYXRpb25QYWdlIC8+XG4gICAgICAgIDwvQXBwbGljYXRpb25Db250YWluZXI+LFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbiAgICApO1xufSk7Il0sIm5hbWVzIjpbImFwaV9nZXQiLCJsaXN0X3BpcGVsaW5lcyIsIl9saXN0X3BpcGVsaW5lcyIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiYWJydXB0Iiwic3RvcCIsIiQiLCJfIiwic2V0U3RhdGVBc3luYyIsIl94IiwiX3gyIiwiX3NldFN0YXRlQXN5bmMiLCJjb21wb25lbnQiLCJzdGF0ZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0U3RhdGUiLCJBcHBsaWNhdGlvblBhZ2UiLCJfY2xhc3NDYWxsQ2hlY2siLCJjdXJyZW50X3VzZXIiLCJnZXRfbWV0YV9qc29uIiwiYXBwX2NvbnRleHQiLCJjc3JmX3Rva2VuIiwiZ2V0X21ldGEiLCJpbml0X21lbnVfa2V5IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJuYW1lIiwiZGVmYXVsdF92YWx1ZSIsImxlbmd0aCIsInVuZGVmaW5lZCIsImVsZW1lbnRzIiwiY29uY2F0IiwiSlNPTiIsInBhcnNlIiwiY29udGVudCIsImJsZXNzX21vZGFsIiwibW9kYWxfaWQiLCJtb2RhbF9jb250ZW50IiwicmVzaXphYmxlIiwiZHJhZ2dhYmxlIiwiaGFuZGxlIiwicG9zaXRpb24iLCJvZiIsIndpbmRvdyIsIlJlYWN0IiwiQ29sIiwiUm93IiwiTmF2YmFyIiwiTmF2IiwiQ29udGFpbmVyIiwiRHJvcGRvd25CdXR0b24iLCJEcm9wZG93biIsIkFsZXJ0IiwidjQiLCJ1dWlkdjQiLCJEaWFsb2dCb3hTdGFjayIsIkRpYWxvZ0JveFN0YWNrUHJvdmlkZXIiLCJHbG9iYWxIZWFkZXIiLCJfUmVhY3QkQ29tcG9uZW50IiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImZpeGVkIiwiZXhwYW5kIiwidmFyaWFudCIsImNsYXNzTmFtZSIsImZsdWlkIiwiQnJhbmQiLCJocmVmIiwic3JjIiwiYWx0IiwiVG9nZ2xlIiwiQ29sbGFwc2UiLCJkZWZhdWx0QWN0aXZlS2V5IiwicHJvcHMiLCJpc19hdXRoZW50aWNhdGVkIiwiTGluayIsImV2ZW50S2V5IiwiaWQiLCJ0aXRsZSIsInVzZXJuYW1lIiwiSXRlbSIsIkNvbXBvbmVudCIsIkFwcGxpY2F0aW9uQ29udGFpbmVyIiwiX1JlYWN0JENvbXBvbmVudDIiLCJfc3VwZXIyIiwiX3RoaXMiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNhbGwiLCJfZGVmaW5lUHJvcGVydHkiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiY3JlYXRlUmVmIiwiZXJyb3JfbXNncyIsIl9yZWYiLCJ0ZXh0IiwiX3RoaXMyIiwiX29iamVjdFNwcmVhZCIsInNldF9hbGVydCIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJkYnNSZWYiLCJPYmplY3QiLCJrZXlzIiwiZW50cmllcyIsIm1hcCIsImVudHJ5Iiwib25DbG9zZSIsImRpc21pc3NpYmxlIiwiQ2hpbGRyZW4iLCJjaGlsZHJlbiIsImNoaWxkIiwiY2xvbmVFbGVtZW50IiwicmVmIiwiQnV0dG9uIiwiTW9kYWwiLCJEbGdCb3hBZ2VudCIsIl9nZXRJbml0U3ViU3RhdGUiLCJkbGdib3giLCJnZXRJbml0U3ViU3RhdGUiLCJvcGVuRGlhbG9nIiwib3B0aW9ucyIsImN1cnJlbnQiLCJvblN1YlN0YXRlVXBkYXRlZCIsIm5ld1N1YlN0YXRlIiwicmVuZGVyQ29udGVudCIsIl9vbkFjdGlvbiIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwib25BY3Rpb24iLCJfeDMiLCJEaWFsb2dCb3giLCJzaG93Iiwic2l6ZSIsImFjdGlvbnMiLCJhZ2VudCIsInN1YlN0YXRlIiwiY2IiLCJhY3Rpb24iLCJfY2IiLCJhbGxvd2VkIiwiX2NhbGxlZTMiLCJ1cGRhdGUiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfeDQiLCJfcmVmMiIsIl9jYWxsZWU0IiwiZmllbGROYW1lIiwiZmllbGRWYWx1ZSIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIl94NSIsIl94NiIsIl9jYWxsZWU1IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiX3JlZjQiLCJfY2FsbGVlNiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsImlzTnVsbCIsImNsb3NlIiwiX3g3IiwiX2NhbGxlZTciLCJfdGl0bGUkc2l6ZSRhZ2VudCRjb24iLCJfYXJnczciLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJzZW50IiwibmV3U3RhdGUiLCJjbG9uZSIsImRsZ19wcm9wcyIsImRpYWxvZ0NsYXNzTmFtZSIsIl9leHRlbmRzIiwib25IaWRlIiwiYmFja2Ryb3AiLCJzY3JvbGxhYmxlIiwiYW5pbWF0aW9uIiwiSGVhZGVyIiwiY2xvc2VCdXR0b24iLCJUaXRsZSIsIkJvZHkiLCJGb290ZXIiLCJvbkNsaWNrIiwiZXZ0IiwiZGlzYWJsZWQiLCJfdGhpczMiLCJfbGVuMiIsIl9rZXkyIiwicmFuZ2UiLCJpIiwiX2NhbGxlZTgiLCJvcHRpb25zRXgiLCJfYXJnczgiLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiLCJkbGdCb3hSZWZzIiwiRXJyb3IiLCJpZHgiLCJjcmVhdGVDb250ZXh0IiwiYnVpbGRVcmwiLCJfYXBpX2dldCIsInVybCIsInBhcmFtcyIsImVmZmVjdGl2ZV91cmwiLCJyZXMiLCJfYXJncyIsImlzRW1wdHkiLCJxdWVyeVBhcmFtcyIsImZldGNoIiwic3RhdHVzIiwianNvbiIsImFwaV9wb3N0IiwiX2FwaV9wb3N0IiwiY3NyZlRva2VuIiwicGF5bG9hZCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5IiwiYXBpX2RlbGV0ZSIsIl9hcGlfZGVsZXRlIiwiYXBpX3BhdGNoIiwiX3g4IiwiX3g5IiwiX2FwaV9wYXRjaCIsIlJlYWN0RE9NIiwiSG9tZUFwcGxpY2F0aW9uUGFnZSIsInBhZ2UiLCJwaXBlbGluZXMiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=