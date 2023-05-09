/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Col */ "react-bootstrap/Col");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Row */ "react-bootstrap/Row");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_business_appbase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../components/business/appbase */ "./ui/js/components/business/appbase/index.js");
/* harmony import */ var _common_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../common_lib */ "./ui/js/common_lib.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
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
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(HomeApplicationPage, _React$Component);
  var _super = _createSuper(HomeApplicationPage);
  function HomeApplicationPage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomeApplicationPage);
    return _super.apply(this, arguments);
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeApplicationPage, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_8___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_7___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("h1", null, "Home Page"))));
    }
  }]);
  return HomeApplicationPage;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));
$(function () {
  var page = new _common_lib__WEBPACK_IMPORTED_MODULE_10__.ApplicationPage();
  react_dom__WEBPACK_IMPORTED_MODULE_6___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_business_appbase__WEBPACK_IMPORTED_MODULE_9__.ApplicationContainer, {
    current_user: page.current_user,
    csrf_token: page.csrf_token,
    init_menu_key: page.init_menu_key,
    app_context: page.app_context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(HomeApplicationPage, null)), document.getElementById('app'));
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBRVg7RUFBQztFQUFBLE9BQUFtSyxtQkFBQTtBQUFBLEVBWDZCbkssd0RBQWU7QUFjakRyRCxDQUFDLENBQUMsWUFBVztFQUNULElBQU15TixJQUFJLEdBQUcsSUFBSWpNLHlEQUFlLENBQUMsQ0FBQztFQUVsQytMLHVEQUFlLGVBQ1hsSywwREFBQSxDQUFDeUMsOEVBQW9CO0lBQ2pCcEUsWUFBWSxFQUFFK0wsSUFBSSxDQUFDL0wsWUFBYTtJQUNoQ0csVUFBVSxFQUFFNEwsSUFBSSxDQUFDNUwsVUFBVztJQUM1QkUsYUFBYSxFQUFFMEwsSUFBSSxDQUFDMUwsYUFBYztJQUNsQ0gsV0FBVyxFQUFFNkwsSUFBSSxDQUFDN0w7RUFBWSxnQkFFOUJ5QiwwREFBQSxDQUFDbUssbUJBQW1CLE1BQUUsQ0FDSixDQUFDLEVBQ3ZCRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQ2pDLENBQUM7QUFDTCxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL2NvbW1vbl9saWIuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vdWkvanMvY29tcG9uZW50cy9idXNpbmVzcy9hcHBiYXNlL2luZGV4LmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL2NvbXBvbmVudHMvZ2VuZXJpYy9kaWFsb2dib3gvaW5kZXguanN4Iiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL2NvbXBvbmVudHMvZ2VuZXJpYy9kaWFsb2dib3gvcHJvdmlkZXJzLmpzeCIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi91aS9qcy9jb21wb25lbnRzL2J1c2luZXNzL2FwcGJhc2UvbWFpbi5zY3NzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL2NvbXBvbmVudHMvZ2VuZXJpYy9kaWFsb2dib3gvbWFpbi5zY3NzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vdWkvanMvY29tcG9uZW50cy9idXNpbmVzcy9hcHBiYXNlL21haW4uc2Nzcz8wNzc1Iiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL2NvbXBvbmVudHMvZ2VuZXJpYy9kaWFsb2dib3gvbWFpbi5zY3NzP2M2NWUiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFwiX1wiIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJBbGVydFwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJCdXR0b25cIl0iLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlL2V4dGVybmFsIHZhciBbXCJSZWFjdEJvb3RzdHJhcFwiLFwiQ29sXCJdIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS9leHRlcm5hbCB2YXIgW1wiUmVhY3RCb290c3RyYXBcIixcIkNvbnRhaW5lclwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJEcm9wZG93blwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJEcm9wZG93bkJ1dHRvblwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJNb2RhbFwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJOYXZcIl0iLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlL2V4dGVybmFsIHZhciBbXCJSZWFjdEJvb3RzdHJhcFwiLFwiTmF2YmFyXCJdIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS9leHRlcm5hbCB2YXIgW1wiUmVhY3RCb290c3RyYXBcIixcIlJvd1wiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9yZWdlbmVyYXRvclJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL3BhZ2VzL2hvbWUvbWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0U3RhdGVBc3luYyhjb21wb25lbnQsIHN0YXRlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBjb21wb25lbnQuc2V0U3RhdGUoc3RhdGUsIHJlc29sdmUpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uUGFnZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudF91c2VyICAgICAgID0gdGhpcy5nZXRfbWV0YV9qc29uKFwidXNlclwiKTtcbiAgICAgICAgdGhpcy5hcHBfY29udGV4dCAgICAgICAgPSB0aGlzLmdldF9tZXRhX2pzb24oXCJhcHBfY29udGV4dFwiLCB7fSk7XG4gICAgICAgIHRoaXMuY3NyZl90b2tlbiAgICAgICAgID0gdGhpcy5nZXRfbWV0YShcImNzcmZcIik7XG4gICAgICAgIHRoaXMuaW5pdF9tZW51X2tleSAgICAgID0gdGhpcy5nZXRfbWV0YShcImluaXRfbWVudV9rZXlcIik7XG4gICAgfVxuXG4gICAgZ2V0X21ldGFfanNvbihuYW1lLCBkZWZhdWx0X3ZhbHVlPW51bGwpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSAkKGBtZXRhW25hbWU9JyR7bmFtZX0nXWApO1xuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGVsZW1lbnRzWzBdLmNvbnRlbnQpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdF92YWx1ZVxuICAgIH1cblxuICAgIGdldF9tZXRhKG5hbWUpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSAkKGBtZXRhW25hbWU9JyR7bmFtZX0nXWApO1xuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50c1swXS5jb250ZW50O1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBibGVzc19tb2RhbChtb2RhbF9pZCkge1xuICAgIGNvbnN0IG1vZGFsX2NvbnRlbnQgPSAkKGBbZGF0YS1tb2RhbC1pZD0ke21vZGFsX2lkfV0gPiAubW9kYWwtY29udGVudGApO1xuIFxuICAgIG1vZGFsX2NvbnRlbnQucmVzaXphYmxlKHt9KTtcbiAgICBtb2RhbF9jb250ZW50LmRyYWdnYWJsZSh7XG4gICAgICAgIGhhbmRsZTogXCIubW9kYWwtaGVhZGVyXCIsXG4gICAgfSk7XG4gICAgbW9kYWxfY29udGVudC5wb3NpdGlvbih7XG4gICAgICAgIG9mOiAkKHdpbmRvdylcbiAgICB9KTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ecm9wZG93bkJ1dHRvbic7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duJztcbmltcG9ydCBBbGVydCBmcm9tICdyZWFjdC1ib290c3RyYXAvQWxlcnQnO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IHNldFN0YXRlQXN5bmMgfSBmcm9tICcvY29tbW9uX2xpYic7XG5cbmltcG9ydCBcIi4vbWFpbi5zY3NzXCI7XG5cbmltcG9ydCB7RGlhbG9nQm94U3RhY2ssIERpYWxvZ0JveFN0YWNrUHJvdmlkZXJ9IGZyb20gJy9jb21wb25lbnRzL2dlbmVyaWMvZGlhbG9nYm94JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogUHVycG9zZTogUGFnZSB0byB2aWV3IGFuIGFwcGxpY2F0aW9uXG4gKlxuICogUHJvcHNcbiAqICAgICAgY3VycmVudF91c2VyOiBjdXJyZW50IHVzZXIgIFxuICogICAgICBpbml0X21lbnVfa2V5OiB0aGUgZGVmYXVsdCBhY3RpdmF0ZSBrZXlcbiAqICAgICAgXG4gKiAgSXQgd2lsbCBpbmplY3QgYWxsIGl0J3MgcHJvcGVydHkgdG8gaXQncyBjaGlsZHJlblxuICogIEl0IHdpbGwgYWxzbyBwYXNzIGEgcHJvcGVydHkgc2V0X2FsZXJ0KHZhcmlhbnQsIHRleHQpIG1ldGhvZCB0byBpdCdzIGNoaWxkcmVuIHNvIHRoZXkgY2FuIHJlcG9ydCBlcnJvclxuICovXG5jbGFzcyBHbG9iYWxIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxOYXZiYXIgZml4ZWQ9XCJ0b3BcIiBleHBhbmQ9XCJzbVwiIHZhcmlhbnQ9XCJkYXJrXCIgY2xhc3NOYW1lPVwiZ2xvYmFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28uanBlZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRvcFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGRcIj5GaXJlYmlyZDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L05hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSAgLz5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdiB2YXJpYW50PVwicGlsbHNcIiBjbGFzc05hbWU9XCJtZS1hdXRvXCIgZGVmYXVsdEFjdGl2ZUtleT17dGhpcy5wcm9wcy5pbml0X21lbnVfa2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMucHJvcHMuY3VycmVudF91c2VyLmlzX2F1dGhlbnRpY2F0ZWQgJiYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEtleT1cImxvZ2luXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvdWkvbG9naW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5Mb2dpbjwvTmF2Lkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5jdXJyZW50X3VzZXIuaXNfYXV0aGVudGljYXRlZCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50S2V5PVwic2lnbnVwXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvdWkvc2lnbnVwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+U2lnbnVwPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmN1cnJlbnRfdXNlci5pc19hdXRoZW50aWNhdGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VyLXByb2ZpbGVcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuY3VycmVudF91c2VyLnVzZXJuYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIvYWNjb3VudHMvbG9nb3V0XCI+TG9nb3V0PC9Ecm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdj4gICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvTmF2YmFyPjtcbiAgICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFB1cnBvc2U6IFBhZ2UgdG8gdmlldyBhbiBhcHBsaWNhdGlvblxuICpcbiAqIFByb3BzXG4gKiAgICAgIGN1cnJlbnRfdXNlcjogY3VycmVudCB1c2VyICBcbiAqICAgICAgXG4gKiAgSXQgd2lsbCBpbmplY3QgYWxsIGl0J3MgcHJvcGVydHkgdG8gaXQncyBjaGlsZHJlblxuICogIEl0IHdpbGwgYWxzbyBwYXNzIGEgcHJvcGVydHkgc2V0X2FsZXJ0KHZhcmlhbnQsIHRleHQpIG1ldGhvZCB0byBpdCdzIGNoaWxkcmVuIHNvIHRoZXkgY2FuIHJlcG9ydCBlcnJvclxuICovXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25Db250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGRic1JlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGVycm9yX21zZ3M6IHt9XG4gICAgfVxuXG4gICAgc2V0X2FsZXJ0ID0gYXN5bmMgKHZhcmlhbnQsIHRleHQpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gdXVpZHY0KCk7XG4gICAgICAgIGF3YWl0IHNldFN0YXRlQXN5bmModGhpcywgc3RhdGU9PiB7XG4gICAgICAgICAgICBzdGF0ZS5lcnJvcl9tc2dzW2tleV0gPSB7XG4gICAgICAgICAgICAgICAgdmFyaWFudDogdmFyaWFudCxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB7Li4uIHRoaXMucHJvcHMsIHNldF9hbGVydDogdGhpcy5zZXRfYWxlcnR9O1xuICAgICAgICByZXR1cm4gPD5cbiAgICAgICAgICAgIDxEaWFsb2dCb3hTdGFja1Byb3ZpZGVyLlByb3ZpZGVyIHZhbHVlPXt0aGlzLmRic1JlZn0+XG4gICAgICAgICAgICAgICAgPEdsb2JhbEhlYWRlciB7Li4uIHRoaXMucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChPYmplY3Qua2V5cyh0aGlzLnN0YXRlLmVycm9yX21zZ3MpLmxlbmd0aCA+IDApICYmIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMuc3RhdGUuZXJyb3JfbXNncykubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVudHJ5KSA9PiA8QWxlcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VudHJ5WzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e2VudHJ5WzFdLnZhcmlhbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZUFzeW5jKHRoaXMsIHN0YXRlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnN0YXRlLmVycm9yX21zZ3NbZW50cnlbMF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNtaXNzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbnRyeVsxXS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbGVydD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZCA9PiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzLCBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPERpYWxvZ0JveFN0YWNrIHJlZj17dGhpcy5kYnNSZWZ9IC8+XG4gICAgICAgICAgICA8L0RpYWxvZ0JveFN0YWNrUHJvdmlkZXIuUHJvdmlkZXI+XG4gICAgICAgIDwvPjtcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL01vZGFsJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7Ymxlc3NfbW9kYWwsIHNldFN0YXRlQXN5bmN9IGZyb20gJy9jb21tb25fbGliJztcbmltcG9ydCB7RGlhbG9nQm94U3RhY2tQcm92aWRlcn0gZnJvbSAnL2NvbXBvbmVudHMvZ2VuZXJpYy9kaWFsb2dib3gvcHJvdmlkZXJzLmpzeCc7XG5cbmV4cG9ydCB7RGlhbG9nQm94U3RhY2tQcm92aWRlcn07XG5cbmltcG9ydCBcIi4vbWFpbi5zY3NzXCI7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFlvdSBuZWVkIHRvIGRlcml2ZSBmcm9tIERsZ0JveEFnZW50IGluIGNhc2UgeW91IHdhbnQgdG8gY3JlYXRlXG4gKiBhbiBpbnRlcmFjdGl2ZSBkaWFsYm9nYm94XG4gKiAtIENvbnN0cnVjdG9yXG4gKiAgICAgICBZb3UgY2FuIGV4dGVuZCBpdCwgd2lsbCByZWNlaXZlIGRic1JlZiwgd2hpY2ggaXMgYSBcbiAqICAgICAgIHJlZmVyZW5jZSB0byBkaWFsb2cgYm94IHN0YWNrIHJlZmVyZW5jZS4gU28geW91IGNhbiB1c2UgaXQgdG8gbGF1bmNoIFxuICogICAgICAgbmV3IGRpYWxvZ2JveFxuICogXG4gKiAtIGdldEluaXRTdWJTdGF0ZVxuICogICAgICAgZGlhYm9nYm94IGNvbXBvbmVudCBoYXMgYSBzdWJTdGF0ZSBmaWVsZCBpbnNpZGUgaXQncyBzdGF0ZSB0byBzdG9yZVxuICogICAgICAgY3VzdG9tIHN0YXRlLiBBbiBhZ2VudCBjYW4gcmV0dXJuIGluaXRpYWwgc3ViU3RhdGUgaW4gdGhpcyBmdW5jdGlvblxuICogXG4gKiAtIG9wZW5EaWFsb2dcbiAqICAgICAgIFVzZSB0aGUgc2FtZSBkaWFsb2cgYm94IHN0YWNrIHJlZmVyZW5jZSB0byBsYXVuY2ggYSBuZXcgZGlhbG9nYm94IG9uXG4gKiAgICAgICB0aGUgdG9wLlxuICogXG4gKiAtIG9uU3ViU3RhdGVVcGRhdGVkXG4gKiAgICAgICBjYWxsZWQgd2hlbiBzdWJTdGF0ZSBpcyBhYm91dCB0byBiZSB1cGRhdGVkLiBVc3VhbGx5IGlzIHRyaWdnZXJlZFxuICogICAgICAgYnkgc29tZW9uZSBjYWxscyBEaWFsb2dCb3gudXBkYXRlU3ViU3RhdGUuXG4gKiAgICAgICByZXR1cm4gdmFsdWUgaXMgbm90IGxvb2tlZCBhdC4gQnV0IHlvdSBjYW4gY2FsbCBmdW5jdGlvbnMgbGlrZVxuICogICAgICAgYWN0aW9uX3JlbW92ZS9hY3Rpb25fc2V0L3NldF90aXRsZSB0byBhZGQsIHJlbW92ZSwgdXBkYXRlIGFjdGlvbiBidXR0b25zXG4gKiAgICAgICBvciB1cGRhdGUgZGlhbG9nIHRpdGxlLlxuICogXG4gKiAgLSByZW5kZXJDb250ZW50KGRsZ2JveClcbiAqICAgICAgIFlvdSBuZWVkIHRvIGltcG1lbWVudCB0aGlzIGZ1bmN0aW9uIHRvIHJldHVybiBjb21wb25lbnQgdGhhdCB3aWxsIGJlXG4gKiAgICAgICByZW5kZXJlZCBhdCB0aGUgY2xpZW50IGFyZWEgb2YgdGhlIGRpYWxvZ2JveC5cbiAqXG4gKiAgLSBvbkFjdGlvbihkbGdib3gsIG5hbWUpICAgICAgIFxuICogICAgICAgQ2FsbGVkIHdoZW4gdXNlciB3YW50IHRvIHBlcmZvcm0gYW4gYWN0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgRGxnQm94QWdlbnQge1xuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgKiBkYnNSZWY6IHJlZiB0byBEaWFsb2dCb3hTdGFja1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRic1JlZikge1xuICAgICAgICB0aGlzLmRic1JlZiA9IGRic1JlZjtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRJbml0U3ViU3RhdGUoZGxnYm94KSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvLyB0aGlzIGlzIGEgYXN5bmMgZnVuY3Rpb24gc2luY2UgaW5uZXIgY2FsbHMgYXN5bmMgZnVuY3Rpb25cbiAgICBvcGVuRGlhbG9nKG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGJzUmVmLmN1cnJlbnQub3BlbkRpYWxvZyhvcHRpb25zKTtcbiAgICB9XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gd2hlbiB1cGRhdGluZyBzdGF0ZSwgeW91IHNob3VsZCB1c2Ugc3RhdGUgc3BlY2lmaWVkIGhlcmVcbiAgICAvLyBpbnN0ZWFkIG9mIGRsZ2JveC5zdGF0ZVxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBvblN1YlN0YXRlVXBkYXRlZChkbGdib3gsIHN0YXRlLCBuZXdTdWJTdGF0ZSkge1xuICAgIH1cblxuICAgIHJlbmRlckNvbnRlbnQoZGxnYm94KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGFzeW5jIG9uQWN0aW9uKGRsZ2JveCwgbmFtZSkge1xuXG4gICAgfVxufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBQdXJwb3NlOiBBIGRpYWxvZ2JveCB3cmFwcGVyXG4gKiBcbiAqIC0gUGFzcyBhbiBhZ2VudCBpZiB5b3Ugd2FudCBhIGR5bmFtaWMgZGlhbG9nIGJveFxuICogXG4gKiAtIGFjdGlvbl9yZW1vdmVcbiAqICAgICAgIHJlbW92ZSBhbiBhY3Rpb24uXG4gKiBcbiAqIC0gYWN0aW9uX3NldFxuICogICAgICAgZGVmaW5lIGEgbmV3IGFjdGlvbiBvciBvdmVyd3JpdGUgYW4gZXhpc3RpbmcgYWN0aW9uXG4gKiBcbiAqIC0gdGl0bGVfc2V0XG4gKiAgICAgICBTZXQgZGlhbG9nYm94IHRpdGxlXG4gKiBcbiAqIC0gdXBkYXRlU3ViU3RhdGVcbiAqICAgICAgIFVwZGF0ZSBzdWJTdGF0ZSwgd2lsbCB0cmlnZ2VyIGFnZW50J3Mgb25TdWJTdGF0ZVVwZGF0ZWRcbiAqXG4gKiAtIHVwZGF0ZVN1YlN0YXRlRmllbGRcbiAqICAgICAgIFVwZGF0ZSBhIGZpZWxkIGluIHN1YlN0YXRlLCB3aWxsIHRyaWdnZXIgYWdlbnQncyBvblN1YlN0YXRlVXBkYXRlZFxuICogXG4gKiAtIGNsb3NlXG4gKiAgICAgICBDbG9zZSB0aGUgZGlhbG9nYm94LCByZXNldCBzdGF0dXNcbiAqIFxuICogLSBvbkFjdGlvblxuICogICAgICAgRGlzcGF0Y2ggYWN0aW9uIHRvIGFnZW50LiBBbmQgaGFuZGxlIGNsb3NlIGFjdGlvbiBhcyB3ZWxsLlxuICogXG4gKiAtIG9wZW5EaWFsb2dcbiAqICAgICAgIE9wZW5zIGEgZGlhbG9nYm94LCB1c2VyIHNob3VsZCBub3QgY2FsbCB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5LlxuICogXG4gKiAtIHJlbmRlclxuICogICAgICAgZm9yIHJlYWN0XG4gKi9cblxuZXhwb3J0IGNsYXNzIERpYWxvZ0JveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHNob3c6ICAgICAgIGZhbHNlLFxuICAgICAgICB0aXRsZTogICAgICAnJyxcbiAgICAgICAgc2l6ZTogICAgICAgJ3NtJyxcbiAgICAgICAgYWN0aW9uczogICAge30sXG4gICAgICAgIGFnZW50OiAgICAgIG51bGwsXG4gICAgICAgIG9uQ2xvc2U6ICAgIG51bGwsICAvLyBhIGNhbGxiYWNrIHRvIG5vdGlmeSB0aGUgc3RhY2sgdGhlIGRpYWxvZ2JveCBpcyBjbG9zZWRcbiAgICAgICAgc3ViU3RhdGU6ICAge30sXG4gICAgfTtcblxuICAgIG1vZGFsX2lkID0gdXVpZHY0KCk7XG5cbiAgICAvLyBGb2xsb3dpbmcgZnVuY3Rpb25zIGFyZSBvbmx5IGNhbGxlZCBpbiBvblN1YlN0YXRlVXBkYXRlZCBmcm9tIGFnZW50XG4gICAgYWN0aW9uX3JlbW92ZSA9IChzdGF0ZSwgbmFtZSkgPT4ge1xuICAgICAgICBpZiAobmFtZSBpbiBzdGF0ZS5hY3Rpb25zKSB7XG4gICAgICAgICAgICBkZWxldGUgc3RhdGUuYWN0aW9uc1tuYW1lXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY3Rpb25fc2V0ID0gKHN0YXRlLCBuYW1lLCBjYikgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBzdGF0ZS5hY3Rpb25zW25hbWVdIHx8IG51bGw7XG4gICAgICAgIGNvbnN0IHt0ZXh0LCBhbGxvd2VkfSA9IGNiKGFjdGlvbik7XG4gICAgICAgIHN0YXRlLmFjdGlvbnNbbmFtZV0gPSB7dGV4dCwgYWxsb3dlZH07XG4gICAgfVxuICAgIHRpdGxlX3NldCA9IChzdGF0ZSwgdGl0bGUpID0+IHtcbiAgICAgICAgc3RhdGUudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgc3Vic3RhdGUsIHRoZSB1cGRhdGUoc3RhdGUuc3ViU3RhdGUpIHdpbGwgcmV0dXJuIG5ldyBzdWJTdGF0ZVxuICAgIHVwZGF0ZVN1YlN0YXRlID0gYXN5bmMgKHVwZGF0ZSkgPT4ge1xuICAgICAgICBhd2FpdCBzZXRTdGF0ZUFzeW5jKHRoaXMsIHN0YXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N1YlN0YXRlID0gdXBkYXRlKHN0YXRlLnN1YlN0YXRlKTtcbiAgICAgICAgICAgIHN0YXRlLnN1YlN0YXRlID0gbmV3U3ViU3RhdGU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFnZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hZ2VudC5vblN1YlN0YXRlVXBkYXRlZCh0aGlzLCBzdGF0ZSwgbmV3U3ViU3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBhIHN1YlN0YXRlIGZpZWxkXG4gICAgdXBkYXRlU3ViU3RhdGVGaWVsZCA9IGFzeW5jIChmaWVsZE5hbWUsIGZpZWxkVmFsdWUpID0+IHtcbiAgICAgICAgYXdhaXQgc2V0U3RhdGVBc3luYyh0aGlzLCBzdGF0ZSA9PiB7XG4gICAgICAgICAgICBzdGF0ZS5zdWJTdGF0ZVtmaWVsZE5hbWVdID0gZmllbGRWYWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFnZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hZ2VudC5vblN1YlN0YXRlVXBkYXRlZCh0aGlzLCBzdGF0ZSwgc3RhdGUuc3ViU3RhdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNsb3NlIHRoZSBkaWFsb2dib3hcbiAgICBjbG9zZSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3Qgb25DbG9zZSA9IHRoaXMuc3RhdGUub25DbG9zZTtcbiAgICAgICAgYXdhaXQgc2V0U3RhdGVBc3luYyh0aGlzLCB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIHNpemU6ICdzbScsXG4gICAgICAgICAgICBhY3Rpb25zOiB7fSxcbiAgICAgICAgICAgIGFnZW50OiBudWxsLFxuICAgICAgICAgICAgb25DbG9zZTogbnVsbCxcbiAgICAgICAgICAgIHN1YlN0YXRlOiB7fSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgb25DbG9zZSgpO1xuICAgIH1cblxuICAgIG9uQWN0aW9uID0gYXN5bmMgKG5hbWUpID0+IHtcbiAgICAgICAgaWYgKCFfLmlzTnVsbCh0aGlzLnN0YXRlLmFnZW50KSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zdGF0ZS5hZ2VudC5vbkFjdGlvbih0aGlzLCBuYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSA9PT0gXCJjbG9zZVwiKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aXRsZSAgICAgICAgICAgIDogc3RyaW5nLCB0aGUgdGl0bGUgb2YgdGhlIGRpYWxvZ1xuICAgIC8vIHNpemUgICAgICAgICAgICAgOiBzdHJpbmcsIHNtLCBtZCBvciBsZywgc3BlY2lmeSB0aGUgc2l6ZSBvZiB0aGUgZGlhbG9nYm94XG4gICAgLy8gYWdlbnQgICAgICAgICAgICA6IGFuIG9iamVjdCBvZiBjbGFzcyBEbGdCb3hBZ2VudFxuICAgIC8vIG9uQ2xvc2UgICAgICAgICAgOiBhIGNhbGxiYWNrIGZyb20gc3RhY2ssIHNvIHN0YWNrIGNhbiBkbyBjbGVhbnVwIHdoZW4gdGhlIGRpYWxvZ2JveCBpcyBjbG9zZWRcbiAgICAvLyBjb250ZW50ICAgICAgICAgIDogc3RhdGljIGNvbnRlbnQsIG9ubHkgdXNlZnVsIHdoZW4gYWdlbnQgaXMgbnVsbFxuICAgIG9wZW5EaWFsb2cgPSBhc3luYyAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IHt0aXRsZSwgc2l6ZSwgYWdlbnQsIG9uQ2xvc2UsIGNvbnRlbnR9ID0ge1xuICAgICAgICAgICAgdGl0bGU6ICcnLCBcbiAgICAgICAgICAgIHNpemU6ICdzbScsIFxuICAgICAgICAgICAgYWdlbnQ6IG51bGwsIFxuICAgICAgICAgICAgY29udGVudDogbnVsbCxcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcbiAgICAgICAgfTtcbiAgICAgICAgLy8gc2ltcGxlIGNhc2UsIG5vIGFnZW50XG4gICAgICAgIGlmIChfLmlzTnVsbChhZ2VudCkpIHtcbiAgICAgICAgICAgIGF3YWl0IHNldFN0YXRlQXN5bmModGhpcywge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgICAgICAgICAgYWN0aW9uczoge30sXG4gICAgICAgICAgICAgICAgYWdlbnQ6IG51bGwsXG4gICAgICAgICAgICAgICAgb25DbG9zZTogb25DbG9zZSxcbiAgICAgICAgICAgICAgICBzdWJTdGF0ZToge30sXG4gICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYmxlc3NfbW9kYWwodGhpcy5tb2RhbF9pZCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdWJTdGF0ZSA9IGF3YWl0IGFnZW50LmdldEluaXRTdWJTdGF0ZSh0aGlzKTtcbiAgICAgICAgYXdhaXQgc2V0U3RhdGVBc3luYyh0aGlzLCBzdGF0ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICBzaXplOiBzaXplLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IHt9LFxuICAgICAgICAgICAgICAgIGFnZW50OiBhZ2VudCxcbiAgICAgICAgICAgICAgICBvbkNsb3NlOiBvbkNsb3NlLFxuICAgICAgICAgICAgICAgIHN1YlN0YXRlOiBfLmNsb25lKHN1YlN0YXRlKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhZ2VudC5vblN1YlN0YXRlVXBkYXRlZCh0aGlzLCBuZXdTdGF0ZSwgc3ViU3RhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1N0YXRlO1xuICAgICAgICB9KTtcbiAgICAgICAgYmxlc3NfbW9kYWwodGhpcy5tb2RhbF9pZCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuXG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZGxnX3Byb3BzID0ge307XG5cbiAgICAgICAgbGV0IGRpYWxvZ0NsYXNzTmFtZSA9IFwic3RhbmRhcmQtbW9kYWxcIlxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaXplID09PSAnc20nKSB7XG4gICAgICAgICAgICBkaWFsb2dDbGFzc05hbWUgKz0gJyBzbS1tb2RhbCdcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnNpemUgPT09ICdtZCcpIHtcbiAgICAgICAgICAgIGRpYWxvZ0NsYXNzTmFtZSArPSAnIG1kLW1vZGFsJ1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2l6ZSA9PT0gJ2xnJykge1xuICAgICAgICAgICAgZGlhbG9nQ2xhc3NOYW1lICs9ICcgbGctbW9kYWwnXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdkaWFsb2dDbGFzc05hbWUnIGluIHRoaXMucHJvcHMpIHtcbiAgICAgICAgICAgIGRpYWxvZ0NsYXNzTmFtZSArPSAoJyAnICsgdGhpcy5wcm9wcy5kaWFsb2dDbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd31cbiAgICAgICAgICAgICAgICBvbkhpZGU9eygpID0+IHRoaXMub25BY3Rpb24oXCJjbG9zZVwiKX1cbiAgICAgICAgICAgICAgICBiYWNrZHJvcD1cInN0YXRpY1wiXG4gICAgICAgICAgICAgICAgc2Nyb2xsYWJsZVxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgZGlhbG9nQ2xhc3NOYW1lPXtkaWFsb2dDbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgZGF0YS1tb2RhbC1pZD17dGhpcy5tb2RhbF9pZH1cbiAgICAgICAgICAgICAgICB7IC4uLiBkbGdfcHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsLlRpdGxlPnt0aGlzLnN0YXRlLnNob3cgJiYgdGhpcy5zdGF0ZS50aXRsZX08L01vZGFsLlRpdGxlPlxuICAgICAgICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3cgJiYgPENvbnRhaW5lciBmbHVpZCBjbGFzc05hbWU9XCJwYi0yIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Xy5pc051bGwodGhpcy5zdGF0ZS5hZ2VudCkgJiYgdGhpcy5zdGF0ZS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshXy5pc051bGwodGhpcy5zdGF0ZS5hZ2VudCkgJiYgdGhpcy5zdGF0ZS5hZ2VudC5yZW5kZXJDb250ZW50KHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L01vZGFsLkJvZHk+XG5cbiAgICAgICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNob3cgJiYgT2JqZWN0LmVudHJpZXModGhpcy5zdGF0ZS5hY3Rpb25zKS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVudHJ5KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVudHJ5WzBdICE9PSAnY2xvc2UnKSAmJiA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtlbnRyeVswXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldnQpID0+IHRoaXMub25BY3Rpb24oZW50cnlbMF0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFlbnRyeVsxXS5hbGxvd2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZW50cnlbMV0udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2dCkgPT4gdGhpcy5vbkFjdGlvbihcImNsb3NlXCIpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDbG9zZVxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGlhbG9nQm94U3RhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGN1cnJlbnQgPSAtMVxuICAgIFxuICAgIGRsZ0JveFJlZnMgPSBfLnJhbmdlKDIwKS5tYXAoaSA9PiBSZWFjdC5jcmVhdGVSZWYoKSlcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuICg8PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuZGxnQm94UmVmcy5tYXAoKHJlZiwgaWR4KSA9PiA8RGlhbG9nQm94IGtleT17aWR4fSByZWY9e3JlZn0vPilcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC8+KTtcbiAgICB9XG5cbiAgICBvcGVuRGlhbG9nID0gYXN5bmMgKG9wdGlvbnM9e30pID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uc0V4ID0gey4uLm9wdGlvbnN9O1xuICAgICAgICBvcHRpb25zRXgub25DbG9zZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCAtPSAxO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgodGhpcy5jdXJyZW50KzEpID49IHRoaXMuZGxnQm94UmVmcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRvbyBtYW55IGRpYWxvZ3MhXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50ICs9IDE7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGxnQm94UmVmc1t0aGlzLmN1cnJlbnRdLmN1cnJlbnQub3BlbkRpYWxvZyhvcHRpb25zRXgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBEaWFsb2dCb3hTdGFja1Byb3ZpZGVyID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwibmF2Lmdsb2JhbC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0E4NztcXG59XFxubmF2Lmdsb2JhbC1oZWFkZXIgLm5hdmJhci1icmFuZCA+IGltZyB7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcbm5hdi5nbG9iYWwtaGVhZGVyIC5uYXZiYXItYnJhbmQgPiBzcGFuIHtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcblxcbmRpdi5hcHAtY29udGFpbmVyIHtcXG4gIHBhZGRpbmctdG9wOiA1OHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi91aS9qcy9jb21wb25lbnRzL2J1c2luZXNzL2FwcGJhc2UvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0kseUJBQUE7QUFDSjtBQUVRO0VBQ0ksWUFBQTtBQUFaO0FBR1E7RUFDSSxnQkFBQTtBQURaOztBQU9BO0VBQ0ksaUJBQUE7QUFKSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJuYXYuZ2xvYmFsLWhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdBODc7XFxuXFxuICAgIC5uYXZiYXItYnJhbmQge1xcbiAgICAgICAgJiA+IGltZyB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiA+IHNwYW4ge1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuZGl2LmFwcC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogNThweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LnN0YW5kYXJkLW1vZGFsIHtcXG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xcbiAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcbn1cXG5kaXYuc3RhbmRhcmQtbW9kYWwgPiBkaXYubW9kYWwtY29udGVudCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JleTtcXG59XFxuZGl2LnN0YW5kYXJkLW1vZGFsID4gZGl2Lm1vZGFsLWNvbnRlbnQgPiBkaXYubW9kYWwtaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcXG4gIGN1cnNvcjogbW92ZTtcXG4gIHBhZGRpbmc6IDZweDtcXG59XFxuZGl2LnN0YW5kYXJkLW1vZGFsID4gZGl2Lm1vZGFsLWNvbnRlbnQgPiBkaXYubW9kYWwtaGVhZGVyID4gZGl2Lm1vZGFsLXRpdGxlIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5kaXYuc3RhbmRhcmQtbW9kYWwgPiBkaXYubW9kYWwtY29udGVudCA+IGRpdi5tb2RhbC1oZWFkZXIgPiBidXR0b24uY2xvc2Uge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5kaXYuc3RhbmRhcmQtbW9kYWwgPiBkaXYubW9kYWwtY29udGVudCA+IGRpdi5tb2RhbC1ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxufVxcblxcbmRpdi5sZy1tb2RhbCA+IGRpdi5tb2RhbC1jb250ZW50IHtcXG4gIHdpZHRoOiAxNDQwcHg7XFxuICBoZWlnaHQ6IDg2MHB4O1xcbn1cXG5cXG5kaXYubWQtbW9kYWwgPiBkaXYubW9kYWwtY29udGVudCB7XFxuICB3aWR0aDogMTA4MHB4O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG59XFxuXFxuZGl2LnNtLW1vZGFsID4gZGl2Lm1vZGFsLWNvbnRlbnQge1xcbiAgd2lkdGg6IDgwMHB4O1xcbiAgaGVpZ2h0OiA2MDBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vdWkvanMvY29tcG9uZW50cy9nZW5lcmljL2RpYWxvZ2JveC9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtBQUNKO0FBQ0k7RUFxQkksMEJBQUE7QUFuQlI7QUFEUTtFQUNJLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFHWjtBQURZO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUdoQjtBQUFZO0VBQ0ksZUFBQTtBQUVoQjtBQUVRO0VBQ0kseUJBQUE7QUFBWjs7QUFPSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FBSlI7O0FBUUk7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQUxSOztBQVNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFOUlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJkaXYuc3RhbmRhcmQtbW9kYWwge1xcbiAgICBtYXgtd2lkdGg6IG5vbmUgIWltcG9ydGFudDtcXG4gICAgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG5cXG4gICAgJiA+IGRpdi5tb2RhbC1jb250ZW50IHtcXG4gICAgICAgICYgPiBkaXYubW9kYWwtaGVhZGVyIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XFxuICAgICAgICAgICAgY3Vyc29yOiBtb3ZlO1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcXG5cXG4gICAgICAgICAgICAmID4gZGl2Lm1vZGFsLXRpdGxlIHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAmID4gYnV0dG9uLmNsb3NlIHtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICYgPiBkaXYubW9kYWwtYm9keSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xcbiAgICB9XFxufVxcbmRpdi5sZy1tb2RhbCB7XFxuICAgICYgPiBkaXYubW9kYWwtY29udGVudCB7XFxuICAgICAgICB3aWR0aDogIDE0NDBweDtcXG4gICAgICAgIGhlaWdodDogODYwcHg7XFxuICAgIH1cXG59XFxuZGl2Lm1kLW1vZGFsIHtcXG4gICAgJiA+IGRpdi5tb2RhbC1jb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiAgMTA4MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgfVxcbn1cXG5kaXYuc20tbW9kYWwge1xcbiAgICAmID4gZGl2Lm1vZGFsLWNvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6ICA4MDBweDtcXG4gICAgICAgIGhlaWdodDogNjAwcHg7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007IiwibW9kdWxlLmV4cG9ydHMgPSBfOyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RCb290c3RyYXAuQWxlcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdEJvb3RzdHJhcC5CdXR0b247IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdEJvb3RzdHJhcC5Db2w7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdEJvb3RzdHJhcC5Db250YWluZXI7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdEJvb3RzdHJhcC5Ecm9wZG93bjsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0Qm9vdHN0cmFwLkRyb3Bkb3duQnV0dG9uOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RCb290c3RyYXAuTW9kYWw7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdEJvb3RzdHJhcC5OYXY7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdEJvb3RzdHJhcC5OYXZiYXI7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdEJvb3RzdHJhcC5Sb3c7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi90eXBlb2YuanNcIilbXCJkZWZhdWx0XCJdO1xuZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7IC8qISByZWdlbmVyYXRvci1ydW50aW1lIC0tIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLiAtLSBsaWNlbnNlIChNSVQpOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL0xJQ0VOU0UgKi9cbiAgbW9kdWxlLmV4cG9ydHMgPSBfcmVnZW5lcmF0b3JSdW50aW1lID0gZnVuY3Rpb24gX3JlZ2VuZXJhdG9yUnVudGltZSgpIHtcbiAgICByZXR1cm4gZXhwb3J0cztcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzO1xuICB2YXIgZXhwb3J0cyA9IHt9LFxuICAgIE9wID0gT2JqZWN0LnByb3RvdHlwZSxcbiAgICBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eSxcbiAgICBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSB8fCBmdW5jdGlvbiAob2JqLCBrZXksIGRlc2MpIHtcbiAgICAgIG9ialtrZXldID0gZGVzYy52YWx1ZTtcbiAgICB9LFxuICAgICRTeW1ib2wgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCA/IFN5bWJvbCA6IHt9LFxuICAgIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIixcbiAgICBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCIsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wgPSAkU3ltYm9sLnRvU3RyaW5nVGFnIHx8IFwiQEB0b1N0cmluZ1RhZ1wiO1xuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgd3JpdGFibGU6ICEwXG4gICAgfSksIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgZGVmaW5lKHt9LCBcIlwiKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGVmaW5lID0gZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3IsXG4gICAgICBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKHByb3RvR2VuZXJhdG9yLnByb3RvdHlwZSksXG4gICAgICBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShnZW5lcmF0b3IsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KVxuICAgIH0pLCBnZW5lcmF0b3I7XG4gIH1cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwibm9ybWFsXCIsXG4gICAgICAgIGFyZzogZm4uY2FsbChvYmosIGFyZylcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBcInRocm93XCIsXG4gICAgICAgIGFyZzogZXJyXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgJiYgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkgJiYgKEl0ZXJhdG9yUHJvdG90eXBlID0gTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUpO1xuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAoXCJ0aHJvd1wiICE9PSByZWNvcmQudHlwZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZyxcbiAgICAgICAgICB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIFwib2JqZWN0XCIgPT0gX3R5cGVvZih2YWx1ZSkgJiYgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSA/IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KSA6IFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24gKHVud3JhcHBlZCkge1xuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZCwgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgIH1cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuICAgIGRlZmluZVByb3BlcnR5KHRoaXMsIFwiX2ludm9rZVwiLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUobWV0aG9kLCBhcmcpIHtcbiAgICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9IHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLCBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZykgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoXCJleGVjdXRpbmdcIiA9PT0gc3RhdGUpIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICBpZiAoXCJjb21wbGV0ZWRcIiA9PT0gc3RhdGUpIHtcbiAgICAgICAgaWYgKFwidGhyb3dcIiA9PT0gbWV0aG9kKSB0aHJvdyBhcmc7XG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnRleHQubWV0aG9kID0gbWV0aG9kLCBjb250ZXh0LmFyZyA9IGFyZzs7KSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFwibmV4dFwiID09PSBjb250ZXh0Lm1ldGhvZCkgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO2Vsc2UgaWYgKFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHtcbiAgICAgICAgICBpZiAoXCJzdXNwZW5kZWRTdGFydFwiID09PSBzdGF0ZSkgdGhyb3cgc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0LmFyZztcbiAgICAgICAgICBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKTtcbiAgICAgICAgfSBlbHNlIFwicmV0dXJuXCIgPT09IGNvbnRleHQubWV0aG9kICYmIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgc3RhdGUgPSBcImV4ZWN1dGluZ1wiO1xuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChcIm5vcm1hbFwiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgIGlmIChzdGF0ZSA9IGNvbnRleHQuZG9uZSA/IFwiY29tcGxldGVkXCIgOiBcInN1c3BlbmRlZFlpZWxkXCIsIHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSAmJiAoc3RhdGUgPSBcImNvbXBsZXRlZFwiLCBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kTmFtZSA9IGNvbnRleHQubWV0aG9kLFxuICAgICAgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kTmFtZV07XG4gICAgaWYgKHVuZGVmaW5lZCA9PT0gbWV0aG9kKSByZXR1cm4gY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIFwidGhyb3dcIiA9PT0gbWV0aG9kTmFtZSAmJiBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSAmJiAoY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCwgbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCksIFwidGhyb3dcIiA9PT0gY29udGV4dC5tZXRob2QpIHx8IFwicmV0dXJuXCIgIT09IG1ldGhvZE5hbWUgJiYgKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIiArIG1ldGhvZE5hbWUgKyBcIicgbWV0aG9kXCIpKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSByZXR1cm4gY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZywgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWw7XG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgIHJldHVybiBpbmZvID8gaW5mby5kb25lID8gKGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlLCBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jLCBcInJldHVyblwiICE9PSBjb250ZXh0Lm1ldGhvZCAmJiAoY29udGV4dC5tZXRob2QgPSBcIm5leHRcIiwgY29udGV4dC5hcmcgPSB1bmRlZmluZWQpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCkgOiBpbmZvIDogKGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKSwgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGwsIENvbnRpbnVlU2VudGluZWwpO1xuICB9XG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0ge1xuICAgICAgdHJ5TG9jOiBsb2NzWzBdXG4gICAgfTtcbiAgICAxIGluIGxvY3MgJiYgKGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXSksIDIgaW4gbG9jcyAmJiAoZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl0sIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXSksIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiLCBkZWxldGUgcmVjb3JkLmFyZywgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3tcbiAgICAgIHRyeUxvYzogXCJyb290XCJcbiAgICB9XSwgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpLCB0aGlzLnJlc2V0KCEwKTtcbiAgfVxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgaXRlcmFibGUubmV4dCkgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsXG4gICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICBmb3IgKDsgKytpIDwgaXRlcmFibGUubGVuZ3RoOykgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkgcmV0dXJuIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICAgICAgICByZXR1cm4gbmV4dC52YWx1ZSA9IHVuZGVmaW5lZCwgbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBuZXh0OiBkb25lUmVzdWx0XG4gICAgfTtcbiAgfVxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgZG9uZTogITBcbiAgICB9O1xuICB9XG4gIHJldHVybiBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lUHJvcGVydHkoR3AsIFwiY29uc3RydWN0b3JcIiwge1xuICAgIHZhbHVlOiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICBjb25maWd1cmFibGU6ICEwXG4gIH0pLCBkZWZpbmVQcm9wZXJ0eShHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSwgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBnZW5GdW4gJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiAhIWN0b3IgJiYgKGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8IFwiR2VuZXJhdG9yRnVuY3Rpb25cIiA9PT0gKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSk7XG4gIH0sIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uIChnZW5GdW4pIHtcbiAgICByZXR1cm4gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpIDogKGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSwgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIikpLCBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCksIGdlbkZ1bjtcbiAgfSwgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgX19hd2FpdDogYXJnXG4gICAgfTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKSwgZGVmaW5lKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlLCBhc3luY0l0ZXJhdG9yU3ltYm9sLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pLCBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yLCBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24gKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0LCBQcm9taXNlSW1wbCkge1xuICAgIHZvaWQgMCA9PT0gUHJvbWlzZUltcGwgJiYgKFByb21pc2VJbXBsID0gUHJvbWlzZSk7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcih3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSwgUHJvbWlzZUltcGwpO1xuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbikgPyBpdGVyIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICB9KTtcbiAgfSwgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKSwgZGVmaW5lKEdwLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JcIiksIGRlZmluZShHcCwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH0pLCBleHBvcnRzLmtleXMgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgdmFyIG9iamVjdCA9IE9iamVjdCh2YWwpLFxuICAgICAga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIGtleXMucHVzaChrZXkpO1xuICAgIHJldHVybiBrZXlzLnJldmVyc2UoKSwgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIGZvciAoOyBrZXlzLmxlbmd0aDspIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSByZXR1cm4gbmV4dC52YWx1ZSA9IGtleSwgbmV4dC5kb25lID0gITEsIG5leHQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dC5kb25lID0gITAsIG5leHQ7XG4gICAgfTtcbiAgfSwgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXMsIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldChza2lwVGVtcFJlc2V0KSB7XG4gICAgICBpZiAodGhpcy5wcmV2ID0gMCwgdGhpcy5uZXh0ID0gMCwgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZCwgdGhpcy5kb25lID0gITEsIHRoaXMuZGVsZWdhdGUgPSBudWxsLCB0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLmFyZyA9IHVuZGVmaW5lZCwgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSksICFza2lwVGVtcFJlc2V0KSBmb3IgKHZhciBuYW1lIGluIHRoaXMpIFwidFwiID09PSBuYW1lLmNoYXJBdCgwKSAmJiBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJiAhaXNOYU4oK25hbWUuc2xpY2UoMSkpICYmICh0aGlzW25hbWVdID0gdW5kZWZpbmVkKTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICB0aGlzLmRvbmUgPSAhMDtcbiAgICAgIHZhciByb290UmVjb3JkID0gdGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByb290UmVjb3JkLnR5cGUpIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbiBkaXNwYXRjaEV4Y2VwdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZXR1cm4gcmVjb3JkLnR5cGUgPSBcInRocm93XCIsIHJlY29yZC5hcmcgPSBleGNlcHRpb24sIGNvbnRleHQubmV4dCA9IGxvYywgY2F1Z2h0ICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksICEhY2F1Z2h0O1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV0sXG4gICAgICAgICAgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgaWYgKFwicm9vdFwiID09PSBlbnRyeS50cnlMb2MpIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIiksXG4gICAgICAgICAgICBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCAhMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFoYXNGaW5hbGx5KSB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWJydXB0OiBmdW5jdGlvbiBhYnJ1cHQodHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiYgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJiB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmaW5hbGx5RW50cnkgJiYgKFwiYnJlYWtcIiA9PT0gdHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHR5cGUpICYmIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYyAmJiAoZmluYWxseUVudHJ5ID0gbnVsbCk7XG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IHR5cGUsIHJlY29yZC5hcmcgPSBhcmcsIGZpbmFsbHlFbnRyeSA/ICh0aGlzLm1ldGhvZCA9IFwibmV4dFwiLCB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYywgQ29udGludWVTZW50aW5lbCkgOiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcbiAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHRocm93IHJlY29yZC5hcmc7XG4gICAgICByZXR1cm4gXCJicmVha1wiID09PSByZWNvcmQudHlwZSB8fCBcImNvbnRpbnVlXCIgPT09IHJlY29yZC50eXBlID8gdGhpcy5uZXh0ID0gcmVjb3JkLmFyZyA6IFwicmV0dXJuXCIgPT09IHJlY29yZC50eXBlID8gKHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZywgdGhpcy5tZXRob2QgPSBcInJldHVyblwiLCB0aGlzLm5leHQgPSBcImVuZFwiKSA6IFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlICYmIGFmdGVyTG9jICYmICh0aGlzLm5leHQgPSBhZnRlckxvYyksIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcbiAgICBmaW5pc2g6IGZ1bmN0aW9uIGZpbmlzaChmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHJldHVybiB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKSwgcmVzZXRUcnlFbnRyeShlbnRyeSksIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG4gICAgfSxcbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uIF9jYXRjaCh0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24gZGVsZWdhdGVZaWVsZChpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9LCBcIm5leHRcIiA9PT0gdGhpcy5tZXRob2QgJiYgKHRoaXMuYXJnID0gdW5kZWZpbmVkKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH0sIGV4cG9ydHM7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIChtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzKSwgX3R5cGVvZihvYmopO1xufVxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7IiwiLy8gVE9ETyhCYWJlbCA4KTogUmVtb3ZlIHRoaXMgZmlsZS5cblxudmFyIHJ1bnRpbWUgPSByZXF1aXJlKFwiLi4vaGVscGVycy9yZWdlbmVyYXRvclJ1bnRpbWVcIikoKTtcbm1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcblxuLy8gQ29waWVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2Jsb2IvbWFpbi9wYWNrYWdlcy9ydW50aW1lL3J1bnRpbWUuanMjTDczNj1cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICBpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09IFwib2JqZWN0XCIpIHtcbiAgICBnbG9iYWxUaGlzLnJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG4gIH0gZWxzZSB7XG4gICAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCB0b1Byb3BlcnR5S2V5KGRlc2NyaXB0b3Iua2V5KSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBrZXkgPSB0b1Byb3BlcnR5S2V5KGtleSk7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzdWJDbGFzcywgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH0gZWxzZSBpZiAoY2FsbCAhPT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO1xuICB9XG4gIHJldHVybiBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvUHJpbWl0aXZlKGlucHV0LCBoaW50KSB7XG4gIGlmIChfdHlwZW9mKGlucHV0KSAhPT0gXCJvYmplY3RcIiB8fCBpbnB1dCA9PT0gbnVsbCkgcmV0dXJuIGlucHV0O1xuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcmVzID0gcHJpbS5jYWxsKGlucHV0LCBoaW50IHx8IFwiZGVmYXVsdFwiKTtcbiAgICBpZiAoX3R5cGVvZihyZXMpICE9PSBcIm9iamVjdFwiKSByZXR1cm4gcmVzO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmltcG9ydCB0b1ByaW1pdGl2ZSBmcm9tIFwiLi90b1ByaW1pdGl2ZS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICB9IDogZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gIH0sIF90eXBlb2Yob2JqKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuXG5pbXBvcnQgeyBBcHBsaWNhdGlvbkNvbnRhaW5lciB9IGZyb20gJy9jb21wb25lbnRzL2J1c2luZXNzL2FwcGJhc2UnO1xuXG5pbXBvcnQge0FwcGxpY2F0aW9uUGFnZX0gZnJvbSAnL2NvbW1vbl9saWInO1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiBQdXJwb3NlOiBQYWdlIHRvIHZpZXcgYW4gYXBwbGljYXRpb25cbiAqXG4gKiBQcm9wc1xuICogICAgICBjdXJyZW50X3VzZXI6IGN1cnJlbnQgdXNlclxuICogICAgICBjc3JmX3Rva2VuOiAgIHRoZSBjc3JmIHRva2VuXG4gKiAgICAgIHNldF9hbGVydDogICAgYSBmdW5jdGlvbiB0byBzZXQgYWxlcnRcbiAqL1xuXG5jbGFzcyBIb21lQXBwbGljYXRpb25QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+SG9tZSBQYWdlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuJChmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwYWdlID0gbmV3IEFwcGxpY2F0aW9uUGFnZSgpO1xuXG4gICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICA8QXBwbGljYXRpb25Db250YWluZXJcbiAgICAgICAgICAgIGN1cnJlbnRfdXNlcj17cGFnZS5jdXJyZW50X3VzZXJ9XG4gICAgICAgICAgICBjc3JmX3Rva2VuPXtwYWdlLmNzcmZfdG9rZW59XG4gICAgICAgICAgICBpbml0X21lbnVfa2V5PXtwYWdlLmluaXRfbWVudV9rZXl9XG4gICAgICAgICAgICBhcHBfY29udGV4dD17cGFnZS5hcHBfY29udGV4dH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEhvbWVBcHBsaWNhdGlvblBhZ2UgLz5cbiAgICAgICAgPC9BcHBsaWNhdGlvbkNvbnRhaW5lcj4sXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuICAgICk7XG59KTsiXSwibmFtZXMiOlsiJCIsIl8iLCJzZXRTdGF0ZUFzeW5jIiwiX3giLCJfeDIiLCJfc2V0U3RhdGVBc3luYyIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJjb21wb25lbnQiLCJzdGF0ZSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJhYnJ1cHQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFN0YXRlIiwic3RvcCIsIkFwcGxpY2F0aW9uUGFnZSIsIl9jbGFzc0NhbGxDaGVjayIsImN1cnJlbnRfdXNlciIsImdldF9tZXRhX2pzb24iLCJhcHBfY29udGV4dCIsImNzcmZfdG9rZW4iLCJnZXRfbWV0YSIsImluaXRfbWVudV9rZXkiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsIm5hbWUiLCJkZWZhdWx0X3ZhbHVlIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZWxlbWVudHMiLCJjb25jYXQiLCJKU09OIiwicGFyc2UiLCJjb250ZW50IiwiYmxlc3NfbW9kYWwiLCJtb2RhbF9pZCIsIm1vZGFsX2NvbnRlbnQiLCJyZXNpemFibGUiLCJkcmFnZ2FibGUiLCJoYW5kbGUiLCJwb3NpdGlvbiIsIm9mIiwid2luZG93IiwiUmVhY3QiLCJDb2wiLCJSb3ciLCJOYXZiYXIiLCJOYXYiLCJDb250YWluZXIiLCJEcm9wZG93bkJ1dHRvbiIsIkRyb3Bkb3duIiwiQWxlcnQiLCJ2NCIsInV1aWR2NCIsIkRpYWxvZ0JveFN0YWNrIiwiRGlhbG9nQm94U3RhY2tQcm92aWRlciIsIkdsb2JhbEhlYWRlciIsIl9SZWFjdCRDb21wb25lbnQiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiZml4ZWQiLCJleHBhbmQiLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwiZmx1aWQiLCJCcmFuZCIsImhyZWYiLCJzcmMiLCJhbHQiLCJUb2dnbGUiLCJDb2xsYXBzZSIsImRlZmF1bHRBY3RpdmVLZXkiLCJwcm9wcyIsImlzX2F1dGhlbnRpY2F0ZWQiLCJMaW5rIiwiZXZlbnRLZXkiLCJpZCIsInRpdGxlIiwidXNlcm5hbWUiLCJJdGVtIiwiQ29tcG9uZW50IiwiQXBwbGljYXRpb25Db250YWluZXIiLCJfUmVhY3QkQ29tcG9uZW50MiIsIl9zdXBlcjIiLCJfdGhpcyIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2FsbCIsIl9kZWZpbmVQcm9wZXJ0eSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJjcmVhdGVSZWYiLCJlcnJvcl9tc2dzIiwiX3JlZiIsInRleHQiLCJfdGhpczIiLCJfb2JqZWN0U3ByZWFkIiwic2V0X2FsZXJ0IiwiRnJhZ21lbnQiLCJQcm92aWRlciIsImRic1JlZiIsIk9iamVjdCIsImtleXMiLCJlbnRyaWVzIiwibWFwIiwiZW50cnkiLCJvbkNsb3NlIiwiZGlzbWlzc2libGUiLCJDaGlsZHJlbiIsImNoaWxkcmVuIiwiY2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJyZWYiLCJCdXR0b24iLCJNb2RhbCIsIkRsZ0JveEFnZW50IiwiX2dldEluaXRTdWJTdGF0ZSIsImRsZ2JveCIsImdldEluaXRTdWJTdGF0ZSIsIm9wZW5EaWFsb2ciLCJvcHRpb25zIiwiY3VycmVudCIsIm9uU3ViU3RhdGVVcGRhdGVkIiwibmV3U3ViU3RhdGUiLCJyZW5kZXJDb250ZW50IiwiX29uQWN0aW9uIiwiX2NhbGxlZTIiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJvbkFjdGlvbiIsIl94MyIsIkRpYWxvZ0JveCIsInNob3ciLCJzaXplIiwiYWN0aW9ucyIsImFnZW50Iiwic3ViU3RhdGUiLCJjYiIsImFjdGlvbiIsIl9jYiIsImFsbG93ZWQiLCJfY2FsbGVlMyIsInVwZGF0ZSIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsIl94NCIsIl9yZWYyIiwiX2NhbGxlZTQiLCJmaWVsZE5hbWUiLCJmaWVsZFZhbHVlIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiX3g1IiwiX3g2IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJfcmVmNCIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwiaXNOdWxsIiwiY2xvc2UiLCJfeDciLCJfY2FsbGVlNyIsIl90aXRsZSRzaXplJGFnZW50JGNvbiIsIl9hcmdzNyIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsInNlbnQiLCJuZXdTdGF0ZSIsImNsb25lIiwiZGxnX3Byb3BzIiwiZGlhbG9nQ2xhc3NOYW1lIiwiX2V4dGVuZHMiLCJvbkhpZGUiLCJiYWNrZHJvcCIsInNjcm9sbGFibGUiLCJhbmltYXRpb24iLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIlRpdGxlIiwiQm9keSIsIkZvb3RlciIsIm9uQ2xpY2siLCJldnQiLCJkaXNhYmxlZCIsIl90aGlzMyIsIl9sZW4yIiwiX2tleTIiLCJyYW5nZSIsImkiLCJfY2FsbGVlOCIsIm9wdGlvbnNFeCIsIl9hcmdzOCIsIl9jYWxsZWU4JCIsIl9jb250ZXh0OCIsImRsZ0JveFJlZnMiLCJFcnJvciIsImlkeCIsImNyZWF0ZUNvbnRleHQiLCJSZWFjdERPTSIsIkhvbWVBcHBsaWNhdGlvblBhZ2UiLCJwYWdlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=