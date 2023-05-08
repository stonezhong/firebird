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
        src: "/static/images/logo.png",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBRVg7RUFBQztFQUFBLE9BQUFtSyxtQkFBQTtBQUFBLEVBWDZCbkssd0RBQWU7QUFjakRyRCxDQUFDLENBQUMsWUFBVztFQUNULElBQU15TixJQUFJLEdBQUcsSUFBSWpNLHlEQUFlLENBQUMsQ0FBQztFQUVsQytMLHVEQUFlLGVBQ1hsSywwREFBQSxDQUFDeUMsOEVBQW9CO0lBQ2pCcEUsWUFBWSxFQUFFK0wsSUFBSSxDQUFDL0wsWUFBYTtJQUNoQ0csVUFBVSxFQUFFNEwsSUFBSSxDQUFDNUwsVUFBVztJQUM1QkUsYUFBYSxFQUFFMEwsSUFBSSxDQUFDMUwsYUFBYztJQUNsQ0gsV0FBVyxFQUFFNkwsSUFBSSxDQUFDN0w7RUFBWSxnQkFFOUJ5QiwwREFBQSxDQUFDbUssbUJBQW1CLE1BQUUsQ0FDSixDQUFDLEVBQ3ZCRSxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQ2pDLENBQUM7QUFDTCxDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL2NvbW1vbl9saWIuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vdWkvanMvY29tcG9uZW50cy9idXNpbmVzcy9hcHBiYXNlL2luZGV4LmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL2NvbXBvbmVudHMvZ2VuZXJpYy9kaWFsb2dib3gvaW5kZXguanN4Iiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL2NvbXBvbmVudHMvZ2VuZXJpYy9kaWFsb2dib3gvcHJvdmlkZXJzLmpzeCIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi91aS9qcy9jb21wb25lbnRzL2J1c2luZXNzL2FwcGJhc2UvbWFpbi5zY3NzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL2NvbXBvbmVudHMvZ2VuZXJpYy9kaWFsb2dib3gvbWFpbi5zY3NzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vdWkvanMvY29tcG9uZW50cy9idXNpbmVzcy9hcHBiYXNlL21haW4uc2Nzcz8wNzc1Iiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL2NvbXBvbmVudHMvZ2VuZXJpYy9kaWFsb2dib3gvbWFpbi5zY3NzP2M2NWUiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFwiUmVhY3RET01cIiIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFwiX1wiIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJBbGVydFwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJCdXR0b25cIl0iLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlL2V4dGVybmFsIHZhciBbXCJSZWFjdEJvb3RzdHJhcFwiLFwiQ29sXCJdIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS9leHRlcm5hbCB2YXIgW1wiUmVhY3RCb290c3RyYXBcIixcIkNvbnRhaW5lclwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJEcm9wZG93blwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJEcm9wZG93bkJ1dHRvblwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJNb2RhbFwiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvZXh0ZXJuYWwgdmFyIFtcIlJlYWN0Qm9vdHN0cmFwXCIsXCJOYXZcIl0iLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlL2V4dGVybmFsIHZhciBbXCJSZWFjdEJvb3RzdHJhcFwiLFwiTmF2YmFyXCJdIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS9leHRlcm5hbCB2YXIgW1wiUmVhY3RCb290c3RyYXBcIixcIlJvd1wiXSIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9yZWdlbmVyYXRvclJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmlyZWJpcmRjb25zb2xlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maXJlYmlyZGNvbnNvbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZpcmViaXJkY29uc29sZS8uL3VpL2pzL3BhZ2VzL2hvbWUvbWFpbi5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2V0U3RhdGVBc3luYyhjb21wb25lbnQsIHN0YXRlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBjb21wb25lbnQuc2V0U3RhdGUoc3RhdGUsIHJlc29sdmUpKTtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uUGFnZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudF91c2VyICAgICAgID0gdGhpcy5nZXRfbWV0YV9qc29uKFwidXNlclwiKTtcbiAgICAgICAgdGhpcy5hcHBfY29udGV4dCAgICAgICAgPSB0aGlzLmdldF9tZXRhX2pzb24oXCJhcHBfY29udGV4dFwiLCB7fSk7XG4gICAgICAgIHRoaXMuY3NyZl90b2tlbiAgICAgICAgID0gdGhpcy5nZXRfbWV0YShcImNzcmZcIik7XG4gICAgICAgIHRoaXMuaW5pdF9tZW51X2tleSAgICAgID0gdGhpcy5nZXRfbWV0YShcImluaXRfbWVudV9rZXlcIik7XG4gICAgfVxuXG4gICAgZ2V0X21ldGFfanNvbihuYW1lLCBkZWZhdWx0X3ZhbHVlPW51bGwpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSAkKGBtZXRhW25hbWU9JyR7bmFtZX0nXWApO1xuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGVsZW1lbnRzWzBdLmNvbnRlbnQpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdF92YWx1ZVxuICAgIH1cblxuICAgIGdldF9tZXRhKG5hbWUpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSAkKGBtZXRhW25hbWU9JyR7bmFtZX0nXWApO1xuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50c1swXS5jb250ZW50O1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBibGVzc19tb2RhbChtb2RhbF9pZCkge1xuICAgIGNvbnN0IG1vZGFsX2NvbnRlbnQgPSAkKGBbZGF0YS1tb2RhbC1pZD0ke21vZGFsX2lkfV0gPiAubW9kYWwtY29udGVudGApO1xuIFxuICAgIG1vZGFsX2NvbnRlbnQucmVzaXphYmxlKHt9KTtcbiAgICBtb2RhbF9jb250ZW50LmRyYWdnYWJsZSh7XG4gICAgICAgIGhhbmRsZTogXCIubW9kYWwtaGVhZGVyXCIsXG4gICAgfSk7XG4gICAgbW9kYWxfY29udGVudC5wb3NpdGlvbih7XG4gICAgICAgIG9mOiAkKHdpbmRvdylcbiAgICB9KTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Sb3cnO1xuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ecm9wZG93bkJ1dHRvbic7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Ryb3Bkb3duJztcbmltcG9ydCBBbGVydCBmcm9tICdyZWFjdC1ib290c3RyYXAvQWxlcnQnO1xuXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCB7IHNldFN0YXRlQXN5bmMgfSBmcm9tICcvY29tbW9uX2xpYic7XG5cbmltcG9ydCBcIi4vbWFpbi5zY3NzXCI7XG5cbmltcG9ydCB7RGlhbG9nQm94U3RhY2ssIERpYWxvZ0JveFN0YWNrUHJvdmlkZXJ9IGZyb20gJy9jb21wb25lbnRzL2dlbmVyaWMvZGlhbG9nYm94JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogUHVycG9zZTogUGFnZSB0byB2aWV3IGFuIGFwcGxpY2F0aW9uXG4gKlxuICogUHJvcHNcbiAqICAgICAgY3VycmVudF91c2VyOiBjdXJyZW50IHVzZXIgIFxuICogICAgICBpbml0X21lbnVfa2V5OiB0aGUgZGVmYXVsdCBhY3RpdmF0ZSBrZXlcbiAqICAgICAgXG4gKiAgSXQgd2lsbCBpbmplY3QgYWxsIGl0J3MgcHJvcGVydHkgdG8gaXQncyBjaGlsZHJlblxuICogIEl0IHdpbGwgYWxzbyBwYXNzIGEgcHJvcGVydHkgc2V0X2FsZXJ0KHZhcmlhbnQsIHRleHQpIG1ldGhvZCB0byBpdCdzIGNoaWxkcmVuIHNvIHRoZXkgY2FuIHJlcG9ydCBlcnJvclxuICovXG5jbGFzcyBHbG9iYWxIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxOYXZiYXIgZml4ZWQ9XCJ0b3BcIiBleHBhbmQ9XCJzbVwiIHZhcmlhbnQ9XCJkYXJrXCIgY2xhc3NOYW1lPVwiZ2xvYmFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmUtYmxvY2sgYWxpZ24tdG9wXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPkZpcmViaXJkPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlICAvPlxuICAgICAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8TmF2IHZhcmlhbnQ9XCJwaWxsc1wiIGNsYXNzTmFtZT1cIm1lLWF1dG9cIiBkZWZhdWx0QWN0aXZlS2V5PXt0aGlzLnByb3BzLmluaXRfbWVudV9rZXl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdGhpcy5wcm9wcy5jdXJyZW50X3VzZXIuaXNfYXV0aGVudGljYXRlZCAmJiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50S2V5PVwibG9naW5cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi91aS9sb2dpblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPkxvZ2luPC9OYXYuTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLnByb3BzLmN1cnJlbnRfdXNlci5pc19hdXRoZW50aWNhdGVkICYmIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRLZXk9XCJzaWdudXBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi91aS9zaWdudXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5TaWdudXA8L05hdi5MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3VycmVudF91c2VyLmlzX2F1dGhlbnRpY2F0ZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXItcHJvZmlsZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5jdXJyZW50X3VzZXIudXNlcm5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLkl0ZW0gaHJlZj1cIi9hY2NvdW50cy9sb2dvdXRcIj5Mb2dvdXQ8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PiAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9OYXZiYXI+O1xuICAgIH1cbn1cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogUHVycG9zZTogUGFnZSB0byB2aWV3IGFuIGFwcGxpY2F0aW9uXG4gKlxuICogUHJvcHNcbiAqICAgICAgY3VycmVudF91c2VyOiBjdXJyZW50IHVzZXIgIFxuICogICAgICBcbiAqICBJdCB3aWxsIGluamVjdCBhbGwgaXQncyBwcm9wZXJ0eSB0byBpdCdzIGNoaWxkcmVuXG4gKiAgSXQgd2lsbCBhbHNvIHBhc3MgYSBwcm9wZXJ0eSBzZXRfYWxlcnQodmFyaWFudCwgdGV4dCkgbWV0aG9kIHRvIGl0J3MgY2hpbGRyZW4gc28gdGhleSBjYW4gcmVwb3J0IGVycm9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBsaWNhdGlvbkNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgZGJzUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgZXJyb3JfbXNnczoge31cbiAgICB9XG5cbiAgICBzZXRfYWxlcnQgPSBhc3luYyAodmFyaWFudCwgdGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSB1dWlkdjQoKTtcbiAgICAgICAgYXdhaXQgc2V0U3RhdGVBc3luYyh0aGlzLCBzdGF0ZT0+IHtcbiAgICAgICAgICAgIHN0YXRlLmVycm9yX21zZ3Nba2V5XSA9IHtcbiAgICAgICAgICAgICAgICB2YXJpYW50OiB2YXJpYW50LFxuICAgICAgICAgICAgICAgIHRleHQ6IHRleHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHsuLi4gdGhpcy5wcm9wcywgc2V0X2FsZXJ0OiB0aGlzLnNldF9hbGVydH07XG4gICAgICAgIHJldHVybiA8PlxuICAgICAgICAgICAgPERpYWxvZ0JveFN0YWNrUHJvdmlkZXIuUHJvdmlkZXIgdmFsdWU9e3RoaXMuZGJzUmVmfT5cbiAgICAgICAgICAgICAgICA8R2xvYmFsSGVhZGVyIHsuLi4gdGhpcy5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKE9iamVjdC5rZXlzKHRoaXMuc3RhdGUuZXJyb3JfbXNncykubGVuZ3RoID4gMCkgJiYgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5zdGF0ZS5lcnJvcl9tc2dzKS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZW50cnkpID0+IDxBbGVydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZW50cnlbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17ZW50cnlbMV0udmFyaWFudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlQXN5bmModGhpcywgc3RhdGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc3RhdGUuZXJyb3JfbXNnc1tlbnRyeVswXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc21pc3NpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VudHJ5WzFdLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuQ2hpbGRyZW4ubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4sIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkID0+IFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMsIG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8RGlhbG9nQm94U3RhY2sgcmVmPXt0aGlzLmRic1JlZn0gLz5cbiAgICAgICAgICAgIDwvRGlhbG9nQm94U3RhY2tQcm92aWRlci5Qcm92aWRlcj5cbiAgICAgICAgPC8+O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9CdXR0b24nO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyJztcbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvTW9kYWwnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHtibGVzc19tb2RhbCwgc2V0U3RhdGVBc3luY30gZnJvbSAnL2NvbW1vbl9saWInO1xuaW1wb3J0IHtEaWFsb2dCb3hTdGFja1Byb3ZpZGVyfSBmcm9tICcvY29tcG9uZW50cy9nZW5lcmljL2RpYWxvZ2JveC9wcm92aWRlcnMuanN4JztcblxuZXhwb3J0IHtEaWFsb2dCb3hTdGFja1Byb3ZpZGVyfTtcblxuaW1wb3J0IFwiLi9tYWluLnNjc3NcIjtcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICogWW91IG5lZWQgdG8gZGVyaXZlIGZyb20gRGxnQm94QWdlbnQgaW4gY2FzZSB5b3Ugd2FudCB0byBjcmVhdGVcbiAqIGFuIGludGVyYWN0aXZlIGRpYWxib2dib3hcbiAqIC0gQ29uc3RydWN0b3JcbiAqICAgICAgIFlvdSBjYW4gZXh0ZW5kIGl0LCB3aWxsIHJlY2VpdmUgZGJzUmVmLCB3aGljaCBpcyBhIFxuICogICAgICAgcmVmZXJlbmNlIHRvIGRpYWxvZyBib3ggc3RhY2sgcmVmZXJlbmNlLiBTbyB5b3UgY2FuIHVzZSBpdCB0byBsYXVuY2ggXG4gKiAgICAgICBuZXcgZGlhbG9nYm94XG4gKiBcbiAqIC0gZ2V0SW5pdFN1YlN0YXRlXG4gKiAgICAgICBkaWFib2dib3ggY29tcG9uZW50IGhhcyBhIHN1YlN0YXRlIGZpZWxkIGluc2lkZSBpdCdzIHN0YXRlIHRvIHN0b3JlXG4gKiAgICAgICBjdXN0b20gc3RhdGUuIEFuIGFnZW50IGNhbiByZXR1cm4gaW5pdGlhbCBzdWJTdGF0ZSBpbiB0aGlzIGZ1bmN0aW9uXG4gKiBcbiAqIC0gb3BlbkRpYWxvZ1xuICogICAgICAgVXNlIHRoZSBzYW1lIGRpYWxvZyBib3ggc3RhY2sgcmVmZXJlbmNlIHRvIGxhdW5jaCBhIG5ldyBkaWFsb2dib3ggb25cbiAqICAgICAgIHRoZSB0b3AuXG4gKiBcbiAqIC0gb25TdWJTdGF0ZVVwZGF0ZWRcbiAqICAgICAgIGNhbGxlZCB3aGVuIHN1YlN0YXRlIGlzIGFib3V0IHRvIGJlIHVwZGF0ZWQuIFVzdWFsbHkgaXMgdHJpZ2dlcmVkXG4gKiAgICAgICBieSBzb21lb25lIGNhbGxzIERpYWxvZ0JveC51cGRhdGVTdWJTdGF0ZS5cbiAqICAgICAgIHJldHVybiB2YWx1ZSBpcyBub3QgbG9va2VkIGF0LiBCdXQgeW91IGNhbiBjYWxsIGZ1bmN0aW9ucyBsaWtlXG4gKiAgICAgICBhY3Rpb25fcmVtb3ZlL2FjdGlvbl9zZXQvc2V0X3RpdGxlIHRvIGFkZCwgcmVtb3ZlLCB1cGRhdGUgYWN0aW9uIGJ1dHRvbnNcbiAqICAgICAgIG9yIHVwZGF0ZSBkaWFsb2cgdGl0bGUuXG4gKiBcbiAqICAtIHJlbmRlckNvbnRlbnQoZGxnYm94KVxuICogICAgICAgWW91IG5lZWQgdG8gaW1wbWVtZW50IHRoaXMgZnVuY3Rpb24gdG8gcmV0dXJuIGNvbXBvbmVudCB0aGF0IHdpbGwgYmVcbiAqICAgICAgIHJlbmRlcmVkIGF0IHRoZSBjbGllbnQgYXJlYSBvZiB0aGUgZGlhbG9nYm94LlxuICpcbiAqICAtIG9uQWN0aW9uKGRsZ2JveCwgbmFtZSkgICAgICAgXG4gKiAgICAgICBDYWxsZWQgd2hlbiB1c2VyIHdhbnQgdG8gcGVyZm9ybSBhbiBhY3Rpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBEbGdCb3hBZ2VudCB7XG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAqIGRic1JlZjogcmVmIHRvIERpYWxvZ0JveFN0YWNrXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGJzUmVmKSB7XG4gICAgICAgIHRoaXMuZGJzUmVmID0gZGJzUmVmO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEluaXRTdWJTdGF0ZShkbGdib3gpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8vIHRoaXMgaXMgYSBhc3luYyBmdW5jdGlvbiBzaW5jZSBpbm5lciBjYWxscyBhc3luYyBmdW5jdGlvblxuICAgIG9wZW5EaWFsb2cob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5kYnNSZWYuY3VycmVudC5vcGVuRGlhbG9nKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyB3aGVuIHVwZGF0aW5nIHN0YXRlLCB5b3Ugc2hvdWxkIHVzZSBzdGF0ZSBzcGVjaWZpZWQgaGVyZVxuICAgIC8vIGluc3RlYWQgb2YgZGxnYm94LnN0YXRlXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIG9uU3ViU3RhdGVVcGRhdGVkKGRsZ2JveCwgc3RhdGUsIG5ld1N1YlN0YXRlKSB7XG4gICAgfVxuXG4gICAgcmVuZGVyQ29udGVudChkbGdib3gpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgYXN5bmMgb25BY3Rpb24oZGxnYm94LCBuYW1lKSB7XG5cbiAgICB9XG59XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFB1cnBvc2U6IEEgZGlhbG9nYm94IHdyYXBwZXJcbiAqIFxuICogLSBQYXNzIGFuIGFnZW50IGlmIHlvdSB3YW50IGEgZHluYW1pYyBkaWFsb2cgYm94XG4gKiBcbiAqIC0gYWN0aW9uX3JlbW92ZVxuICogICAgICAgcmVtb3ZlIGFuIGFjdGlvbi5cbiAqIFxuICogLSBhY3Rpb25fc2V0XG4gKiAgICAgICBkZWZpbmUgYSBuZXcgYWN0aW9uIG9yIG92ZXJ3cml0ZSBhbiBleGlzdGluZyBhY3Rpb25cbiAqIFxuICogLSB0aXRsZV9zZXRcbiAqICAgICAgIFNldCBkaWFsb2dib3ggdGl0bGVcbiAqIFxuICogLSB1cGRhdGVTdWJTdGF0ZVxuICogICAgICAgVXBkYXRlIHN1YlN0YXRlLCB3aWxsIHRyaWdnZXIgYWdlbnQncyBvblN1YlN0YXRlVXBkYXRlZFxuICpcbiAqIC0gdXBkYXRlU3ViU3RhdGVGaWVsZFxuICogICAgICAgVXBkYXRlIGEgZmllbGQgaW4gc3ViU3RhdGUsIHdpbGwgdHJpZ2dlciBhZ2VudCdzIG9uU3ViU3RhdGVVcGRhdGVkXG4gKiBcbiAqIC0gY2xvc2VcbiAqICAgICAgIENsb3NlIHRoZSBkaWFsb2dib3gsIHJlc2V0IHN0YXR1c1xuICogXG4gKiAtIG9uQWN0aW9uXG4gKiAgICAgICBEaXNwYXRjaCBhY3Rpb24gdG8gYWdlbnQuIEFuZCBoYW5kbGUgY2xvc2UgYWN0aW9uIGFzIHdlbGwuXG4gKiBcbiAqIC0gb3BlbkRpYWxvZ1xuICogICAgICAgT3BlbnMgYSBkaWFsb2dib3gsIHVzZXIgc2hvdWxkIG5vdCBjYWxsIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkuXG4gKiBcbiAqIC0gcmVuZGVyXG4gKiAgICAgICBmb3IgcmVhY3RcbiAqL1xuXG5leHBvcnQgY2xhc3MgRGlhbG9nQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgc2hvdzogICAgICAgZmFsc2UsXG4gICAgICAgIHRpdGxlOiAgICAgICcnLFxuICAgICAgICBzaXplOiAgICAgICAnc20nLFxuICAgICAgICBhY3Rpb25zOiAgICB7fSxcbiAgICAgICAgYWdlbnQ6ICAgICAgbnVsbCxcbiAgICAgICAgb25DbG9zZTogICAgbnVsbCwgIC8vIGEgY2FsbGJhY2sgdG8gbm90aWZ5IHRoZSBzdGFjayB0aGUgZGlhbG9nYm94IGlzIGNsb3NlZFxuICAgICAgICBzdWJTdGF0ZTogICB7fSxcbiAgICB9O1xuXG4gICAgbW9kYWxfaWQgPSB1dWlkdjQoKTtcblxuICAgIC8vIEZvbGxvd2luZyBmdW5jdGlvbnMgYXJlIG9ubHkgY2FsbGVkIGluIG9uU3ViU3RhdGVVcGRhdGVkIGZyb20gYWdlbnRcbiAgICBhY3Rpb25fcmVtb3ZlID0gKHN0YXRlLCBuYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lIGluIHN0YXRlLmFjdGlvbnMpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5hY3Rpb25zW25hbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFjdGlvbl9zZXQgPSAoc3RhdGUsIG5hbWUsIGNiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHN0YXRlLmFjdGlvbnNbbmFtZV0gfHwgbnVsbDtcbiAgICAgICAgY29uc3Qge3RleHQsIGFsbG93ZWR9ID0gY2IoYWN0aW9uKTtcbiAgICAgICAgc3RhdGUuYWN0aW9uc1tuYW1lXSA9IHt0ZXh0LCBhbGxvd2VkfTtcbiAgICB9XG4gICAgdGl0bGVfc2V0ID0gKHN0YXRlLCB0aXRsZSkgPT4ge1xuICAgICAgICBzdGF0ZS50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBzdWJzdGF0ZSwgdGhlIHVwZGF0ZShzdGF0ZS5zdWJTdGF0ZSkgd2lsbCByZXR1cm4gbmV3IHN1YlN0YXRlXG4gICAgdXBkYXRlU3ViU3RhdGUgPSBhc3luYyAodXBkYXRlKSA9PiB7XG4gICAgICAgIGF3YWl0IHNldFN0YXRlQXN5bmModGhpcywgc3RhdGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3U3ViU3RhdGUgPSB1cGRhdGUoc3RhdGUuc3ViU3RhdGUpO1xuICAgICAgICAgICAgc3RhdGUuc3ViU3RhdGUgPSBuZXdTdWJTdGF0ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWdlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFnZW50Lm9uU3ViU3RhdGVVcGRhdGVkKHRoaXMsIHN0YXRlLCBuZXdTdWJTdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGEgc3ViU3RhdGUgZmllbGRcbiAgICB1cGRhdGVTdWJTdGF0ZUZpZWxkID0gYXN5bmMgKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSkgPT4ge1xuICAgICAgICBhd2FpdCBzZXRTdGF0ZUFzeW5jKHRoaXMsIHN0YXRlID0+IHtcbiAgICAgICAgICAgIHN0YXRlLnN1YlN0YXRlW2ZpZWxkTmFtZV0gPSBmaWVsZFZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUuYWdlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmFnZW50Lm9uU3ViU3RhdGVVcGRhdGVkKHRoaXMsIHN0YXRlLCBzdGF0ZS5zdWJTdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY2xvc2UgdGhlIGRpYWxvZ2JveFxuICAgIGNsb3NlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBvbkNsb3NlID0gdGhpcy5zdGF0ZS5vbkNsb3NlO1xuICAgICAgICBhd2FpdCBzZXRTdGF0ZUFzeW5jKHRoaXMsIHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgc2l6ZTogJ3NtJyxcbiAgICAgICAgICAgIGFjdGlvbnM6IHt9LFxuICAgICAgICAgICAgYWdlbnQ6IG51bGwsXG4gICAgICAgICAgICBvbkNsb3NlOiBudWxsLFxuICAgICAgICAgICAgc3ViU3RhdGU6IHt9LFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBvbkNsb3NlKCk7XG4gICAgfVxuXG4gICAgb25BY3Rpb24gPSBhc3luYyAobmFtZSkgPT4ge1xuICAgICAgICBpZiAoIV8uaXNOdWxsKHRoaXMuc3RhdGUuYWdlbnQpKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnN0YXRlLmFnZW50Lm9uQWN0aW9uKHRoaXMsIG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lID09PSBcImNsb3NlXCIpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRpdGxlICAgICAgICAgICAgOiBzdHJpbmcsIHRoZSB0aXRsZSBvZiB0aGUgZGlhbG9nXG4gICAgLy8gc2l6ZSAgICAgICAgICAgICA6IHN0cmluZywgc20sIG1kIG9yIGxnLCBzcGVjaWZ5IHRoZSBzaXplIG9mIHRoZSBkaWFsb2dib3hcbiAgICAvLyBhZ2VudCAgICAgICAgICAgIDogYW4gb2JqZWN0IG9mIGNsYXNzIERsZ0JveEFnZW50XG4gICAgLy8gb25DbG9zZSAgICAgICAgICA6IGEgY2FsbGJhY2sgZnJvbSBzdGFjaywgc28gc3RhY2sgY2FuIGRvIGNsZWFudXAgd2hlbiB0aGUgZGlhbG9nYm94IGlzIGNsb3NlZFxuICAgIC8vIGNvbnRlbnQgICAgICAgICAgOiBzdGF0aWMgY29udGVudCwgb25seSB1c2VmdWwgd2hlbiBhZ2VudCBpcyBudWxsXG4gICAgb3BlbkRpYWxvZyA9IGFzeW5jIChvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgY29uc3Qge3RpdGxlLCBzaXplLCBhZ2VudCwgb25DbG9zZSwgY29udGVudH0gPSB7XG4gICAgICAgICAgICB0aXRsZTogJycsIFxuICAgICAgICAgICAgc2l6ZTogJ3NtJywgXG4gICAgICAgICAgICBhZ2VudDogbnVsbCwgXG4gICAgICAgICAgICBjb250ZW50OiBudWxsLFxuICAgICAgICAgICAgLi4ub3B0aW9uc1xuICAgICAgICB9O1xuICAgICAgICAvLyBzaW1wbGUgY2FzZSwgbm8gYWdlbnRcbiAgICAgICAgaWYgKF8uaXNOdWxsKGFnZW50KSkge1xuICAgICAgICAgICAgYXdhaXQgc2V0U3RhdGVBc3luYyh0aGlzLCB7XG4gICAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiB7fSxcbiAgICAgICAgICAgICAgICBhZ2VudDogbnVsbCxcbiAgICAgICAgICAgICAgICBvbkNsb3NlOiBvbkNsb3NlLFxuICAgICAgICAgICAgICAgIHN1YlN0YXRlOiB7fSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBibGVzc19tb2RhbCh0aGlzLm1vZGFsX2lkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN1YlN0YXRlID0gYXdhaXQgYWdlbnQuZ2V0SW5pdFN1YlN0YXRlKHRoaXMpO1xuICAgICAgICBhd2FpdCBzZXRTdGF0ZUFzeW5jKHRoaXMsIHN0YXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgICAgICAgICAgYWN0aW9uczoge30sXG4gICAgICAgICAgICAgICAgYWdlbnQ6IGFnZW50LFxuICAgICAgICAgICAgICAgIG9uQ2xvc2U6IG9uQ2xvc2UsXG4gICAgICAgICAgICAgICAgc3ViU3RhdGU6IF8uY2xvbmUoc3ViU3RhdGUpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGFnZW50Lm9uU3ViU3RhdGVVcGRhdGVkKHRoaXMsIG5ld1N0YXRlLCBzdWJTdGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICAgIH0pO1xuICAgICAgICBibGVzc19tb2RhbCh0aGlzLm1vZGFsX2lkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG5cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkbGdfcHJvcHMgPSB7fTtcblxuICAgICAgICBsZXQgZGlhbG9nQ2xhc3NOYW1lID0gXCJzdGFuZGFyZC1tb2RhbFwiXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnNpemUgPT09ICdzbScpIHtcbiAgICAgICAgICAgIGRpYWxvZ0NsYXNzTmFtZSArPSAnIHNtLW1vZGFsJ1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2l6ZSA9PT0gJ21kJykge1xuICAgICAgICAgICAgZGlhbG9nQ2xhc3NOYW1lICs9ICcgbWQtbW9kYWwnXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5zaXplID09PSAnbGcnKSB7XG4gICAgICAgICAgICBkaWFsb2dDbGFzc05hbWUgKz0gJyBsZy1tb2RhbCdcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2RpYWxvZ0NsYXNzTmFtZScgaW4gdGhpcy5wcm9wcykge1xuICAgICAgICAgICAgZGlhbG9nQ2xhc3NOYW1lICs9ICgnICcgKyB0aGlzLnByb3BzLmRpYWxvZ0NsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93fVxuICAgICAgICAgICAgICAgIG9uSGlkZT17KCkgPT4gdGhpcy5vbkFjdGlvbihcImNsb3NlXCIpfVxuICAgICAgICAgICAgICAgIGJhY2tkcm9wPVwic3RhdGljXCJcbiAgICAgICAgICAgICAgICBzY3JvbGxhYmxlXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBkaWFsb2dDbGFzc05hbWU9e2RpYWxvZ0NsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICBkYXRhLW1vZGFsLWlkPXt0aGlzLm1vZGFsX2lkfVxuICAgICAgICAgICAgICAgIHsgLi4uIGRsZ19wcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+e3RoaXMuc3RhdGUuc2hvdyAmJiB0aGlzLnN0YXRlLnRpdGxlfTwvTW9kYWwuVGl0bGU+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvdyAmJiA8Q29udGFpbmVyIGZsdWlkIGNsYXNzTmFtZT1cInBiLTIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtfLmlzTnVsbCh0aGlzLnN0YXRlLmFnZW50KSAmJiB0aGlzLnN0YXRlLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFfLmlzTnVsbCh0aGlzLnN0YXRlLmFnZW50KSAmJiB0aGlzLnN0YXRlLmFnZW50LnJlbmRlckNvbnRlbnQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cblxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvdyAmJiBPYmplY3QuZW50cmllcyh0aGlzLnN0YXRlLmFjdGlvbnMpLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZW50cnkpID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZW50cnlbMF0gIT09ICdjbG9zZScpICYmIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2VudHJ5WzBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2dCkgPT4gdGhpcy5vbkFjdGlvbihlbnRyeVswXSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IWVudHJ5WzFdLmFsbG93ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbnRyeVsxXS50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZ0KSA9PiB0aGlzLm9uQWN0aW9uKFwiY2xvc2VcIil9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIENsb3NlXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2dCb3hTdGFjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY3VycmVudCA9IC0xXG4gICAgXG4gICAgZGxnQm94UmVmcyA9IF8ucmFuZ2UoMjApLm1hcChpID0+IFJlYWN0LmNyZWF0ZVJlZigpKVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5kbGdCb3hSZWZzLm1hcCgocmVmLCBpZHgpID0+IDxEaWFsb2dCb3gga2V5PXtpZHh9IHJlZj17cmVmfS8+KVxuICAgICAgICAgICAgfVxuICAgICAgICA8Lz4pO1xuICAgIH1cblxuICAgIG9wZW5EaWFsb2cgPSBhc3luYyAob3B0aW9ucz17fSkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb25zRXggPSB7Li4ub3B0aW9uc307XG4gICAgICAgIG9wdGlvbnNFeC5vbkNsb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50IC09IDE7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCh0aGlzLmN1cnJlbnQrMSkgPj0gdGhpcy5kbGdCb3hSZWZzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVG9vIG1hbnkgZGlhbG9ncyFcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmN1cnJlbnQgKz0gMTtcblxuICAgICAgICByZXR1cm4gdGhpcy5kbGdCb3hSZWZzW3RoaXMuY3VycmVudF0uY3VycmVudC5vcGVuRGlhbG9nKG9wdGlvbnNFeCk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IERpYWxvZ0JveFN0YWNrUHJvdmlkZXIgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJuYXYuZ2xvYmFsLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QTg3O1xcbn1cXG5uYXYuZ2xvYmFsLWhlYWRlciAubmF2YmFyLWJyYW5kID4gaW1nIHtcXG4gIGhlaWdodDogMzJweDtcXG59XFxubmF2Lmdsb2JhbC1oZWFkZXIgLm5hdmJhci1icmFuZCA+IHNwYW4ge1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG59XFxuXFxuZGl2LmFwcC1jb250YWluZXIge1xcbiAgcGFkZGluZy10b3A6IDU4cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3VpL2pzL2NvbXBvbmVudHMvYnVzaW5lc3MvYXBwYmFzZS9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDSSx5QkFBQTtBQUNKO0FBRVE7RUFDSSxZQUFBO0FBQVo7QUFHUTtFQUNJLGdCQUFBO0FBRFo7O0FBT0E7RUFDSSxpQkFBQTtBQUpKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm5hdi5nbG9iYWwtaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0E4NztcXG5cXG4gICAgLm5hdmJhci1icmFuZCB7XFxuICAgICAgICAmID4gaW1nIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmID4gc3BhbiB7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG5kaXYuYXBwLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctdG9wOiA1OHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuc3RhbmRhcmQtbW9kYWwge1xcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XFxuICBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XFxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxufVxcbmRpdi5zdGFuZGFyZC1tb2RhbCA+IGRpdi5tb2RhbC1jb250ZW50IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmV5O1xcbn1cXG5kaXYuc3RhbmRhcmQtbW9kYWwgPiBkaXYubW9kYWwtY29udGVudCA+IGRpdi5tb2RhbC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbiAgcGFkZGluZzogNnB4O1xcbn1cXG5kaXYuc3RhbmRhcmQtbW9kYWwgPiBkaXYubW9kYWwtY29udGVudCA+IGRpdi5tb2RhbC1oZWFkZXIgPiBkaXYubW9kYWwtdGl0bGUge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbmRpdi5zdGFuZGFyZC1tb2RhbCA+IGRpdi5tb2RhbC1jb250ZW50ID4gZGl2Lm1vZGFsLWhlYWRlciA+IGJ1dHRvbi5jbG9zZSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbmRpdi5zdGFuZGFyZC1tb2RhbCA+IGRpdi5tb2RhbC1jb250ZW50ID4gZGl2Lm1vZGFsLWJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcXG59XFxuXFxuZGl2LmxnLW1vZGFsID4gZGl2Lm1vZGFsLWNvbnRlbnQge1xcbiAgd2lkdGg6IDE0NDBweDtcXG4gIGhlaWdodDogODYwcHg7XFxufVxcblxcbmRpdi5tZC1tb2RhbCA+IGRpdi5tb2RhbC1jb250ZW50IHtcXG4gIHdpZHRoOiAxMDgwcHg7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbn1cXG5cXG5kaXYuc20tbW9kYWwgPiBkaXYubW9kYWwtY29udGVudCB7XFxuICB3aWR0aDogODAwcHg7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi91aS9qcy9jb21wb25lbnRzL2dlbmVyaWMvZGlhbG9nYm94L21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBQ0o7QUFDSTtFQXFCSSwwQkFBQTtBQW5CUjtBQURRO0VBQ0ksMkJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUdaO0FBRFk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBR2hCO0FBQVk7RUFDSSxlQUFBO0FBRWhCO0FBRVE7RUFDSSx5QkFBQTtBQUFaOztBQU9JO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUFKUjs7QUFRSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0FBTFI7O0FBU0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQU5SXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdi5zdGFuZGFyZC1tb2RhbCB7XFxuICAgIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xcbiAgICBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XFxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcblxcbiAgICAmID4gZGl2Lm1vZGFsLWNvbnRlbnQge1xcbiAgICAgICAgJiA+IGRpdi5tb2RhbC1oZWFkZXIge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJveWFsYmx1ZTtcXG4gICAgICAgICAgICBjdXJzb3I6IG1vdmU7XFxuICAgICAgICAgICAgcGFkZGluZzogNnB4O1xcblxcbiAgICAgICAgICAgICYgPiBkaXYubW9kYWwtdGl0bGUge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICYgPiBidXR0b24uY2xvc2Uge1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJiA+IGRpdi5tb2RhbC1ib2R5IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZXk7XFxuICAgIH1cXG59XFxuZGl2LmxnLW1vZGFsIHtcXG4gICAgJiA+IGRpdi5tb2RhbC1jb250ZW50IHtcXG4gICAgICAgIHdpZHRoOiAgMTQ0MHB4O1xcbiAgICAgICAgaGVpZ2h0OiA4NjBweDtcXG4gICAgfVxcbn1cXG5kaXYubWQtbW9kYWwge1xcbiAgICAmID4gZGl2Lm1vZGFsLWNvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6ICAxMDgwcHg7XFxuICAgICAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB9XFxufVxcbmRpdi5zbS1tb2RhbCB7XFxuICAgICYgPiBkaXYubW9kYWwtY29udGVudCB7XFxuICAgICAgICB3aWR0aDogIDgwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHJhbmRvbVVVSUQgPSB0eXBlb2YgY3J5cHRvICE9PSAndW5kZWZpbmVkJyAmJiBjcnlwdG8ucmFuZG9tVVVJRCAmJiBjcnlwdG8ucmFuZG9tVVVJRC5iaW5kKGNyeXB0byk7XG5leHBvcnQgZGVmYXVsdCB7XG4gIHJhbmRvbVVVSURcbn07IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxubGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAvLyBsYXp5IGxvYWQgc28gdGhhdCBlbnZpcm9ubWVudHMgdGhhdCBuZWVkIHRvIHBvbHlmaWxsIGhhdmUgYSBjaGFuY2UgdG8gZG8gc29cbiAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAvLyBnZXRSYW5kb21WYWx1ZXMgbmVlZHMgdG8gYmUgaW52b2tlZCBpbiBhIGNvbnRleHQgd2hlcmUgXCJ0aGlzXCIgaXMgYSBDcnlwdG8gaW1wbGVtZW50YXRpb24uXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKTtcblxuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdldFJhbmRvbVZhbHVlcyhybmRzOCk7XG59IiwiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuLyoqXG4gKiBDb252ZXJ0IGFycmF5IG9mIDE2IGJ5dGUgdmFsdWVzIHRvIFVVSUQgc3RyaW5nIGZvcm1hdCBvZiB0aGUgZm9ybTpcbiAqIFhYWFhYWFhYLVhYWFgtWFhYWC1YWFhYLVhYWFhYWFhYWFhYWFxuICovXG5cbmNvbnN0IGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zbGljZSgxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpOyAvLyBDb25zaXN0ZW5jeSBjaGVjayBmb3IgdmFsaWQgVVVJRC4gIElmIHRoaXMgdGhyb3dzLCBpdCdzIGxpa2VseSBkdWUgdG8gb25lXG4gIC8vIG9mIHRoZSBmb2xsb3dpbmc6XG4gIC8vIC0gT25lIG9yIG1vcmUgaW5wdXQgYXJyYXkgdmFsdWVzIGRvbid0IG1hcCB0byBhIGhleCBvY3RldCAobGVhZGluZyB0b1xuICAvLyBcInVuZGVmaW5lZFwiIGluIHRoZSB1dWlkKVxuICAvLyAtIEludmFsaWQgaW5wdXQgdmFsdWVzIGZvciB0aGUgUkZDIGB2ZXJzaW9uYCBvciBgdmFyaWFudGAgZmllbGRzXG5cbiAgaWYgKCF2YWxpZGF0ZSh1dWlkKSkge1xuICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gIH1cblxuICByZXR1cm4gdXVpZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5OyIsImltcG9ydCBuYXRpdmUgZnJvbSAnLi9uYXRpdmUuanMnO1xuaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5cbmZ1bmN0aW9uIHY0KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIGlmIChuYXRpdmUucmFuZG9tVVVJRCAmJiAhYnVmICYmICFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5hdGl2ZS5yYW5kb21VVUlEKCk7XG4gIH1cblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgY29uc3Qgcm5kcyA9IG9wdGlvbnMucmFuZG9tIHx8IChvcHRpb25zLnJuZyB8fCBybmcpKCk7IC8vIFBlciA0LjQsIHNldCBiaXRzIGZvciB2ZXJzaW9uIGFuZCBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGBcblxuICBybmRzWzZdID0gcm5kc1s2XSAmIDB4MGYgfCAweDQwO1xuICBybmRzWzhdID0gcm5kc1s4XSAmIDB4M2YgfCAweDgwOyAvLyBDb3B5IGJ5dGVzIHRvIGJ1ZmZlciwgaWYgcHJvdmlkZWRcblxuICBpZiAoYnVmKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHx8IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHJuZHNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHJldHVybiB1bnNhZmVTdHJpbmdpZnkocm5kcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHY0OyIsImltcG9ydCBSRUdFWCBmcm9tICcuL3JlZ2V4LmpzJztcblxuZnVuY3Rpb24gdmFsaWRhdGUodXVpZCkge1xuICByZXR1cm4gdHlwZW9mIHV1aWQgPT09ICdzdHJpbmcnICYmIFJFR0VYLnRlc3QodXVpZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHZhbGlkYXRlOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdERPTTsiLCJtb2R1bGUuZXhwb3J0cyA9IF87IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdEJvb3RzdHJhcC5BbGVydDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0Qm9vdHN0cmFwLkJ1dHRvbjsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0Qm9vdHN0cmFwLkNvbDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0Qm9vdHN0cmFwLkNvbnRhaW5lcjsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0Qm9vdHN0cmFwLkRyb3Bkb3duOyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RCb290c3RyYXAuRHJvcGRvd25CdXR0b247IiwibW9kdWxlLmV4cG9ydHMgPSBSZWFjdEJvb3RzdHJhcC5Nb2RhbDsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0Qm9vdHN0cmFwLk5hdjsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0Qm9vdHN0cmFwLk5hdmJhcjsiLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0Qm9vdHN0cmFwLlJvdzsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuL3R5cGVvZi5qc1wiKVtcImRlZmF1bHRcIl07XG5mdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICBcInVzZSBzdHJpY3RcIjsgLyohIHJlZ2VuZXJhdG9yLXJ1bnRpbWUgLS0gQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuIC0tIGxpY2Vuc2UgKE1JVCk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9ibG9iL21haW4vTElDRU5TRSAqL1xuICBtb2R1bGUuZXhwb3J0cyA9IF9yZWdlbmVyYXRvclJ1bnRpbWUgPSBmdW5jdGlvbiBfcmVnZW5lcmF0b3JSdW50aW1lKCkge1xuICAgIHJldHVybiBleHBvcnRzO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHM7XG4gIHZhciBleHBvcnRzID0ge30sXG4gICAgT3AgPSBPYmplY3QucHJvdG90eXBlLFxuICAgIGhhc093biA9IE9wLmhhc093blByb3BlcnR5LFxuICAgIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5IHx8IGZ1bmN0aW9uIChvYmosIGtleSwgZGVzYykge1xuICAgICAgb2JqW2tleV0gPSBkZXNjLnZhbHVlO1xuICAgIH0sXG4gICAgJFN5bWJvbCA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sID8gU3ltYm9sIDoge30sXG4gICAgaXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiLFxuICAgIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIixcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG4gIGZ1bmN0aW9uIGRlZmluZShvYmosIGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICB3cml0YWJsZTogITBcbiAgICB9KSwgb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcixcbiAgICAgIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKSxcbiAgICAgIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGdlbmVyYXRvciwgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpXG4gICAgfSksIGdlbmVyYXRvcjtcbiAgfVxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogXCJub3JtYWxcIixcbiAgICAgICAgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKVxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFwidGhyb3dcIixcbiAgICAgICAgYXJnOiBlcnJcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcbiAgZGVmaW5lKEl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KTtcbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICAgIE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8gJiYgZ2V0UHJvdG8oZ2V0UHJvdG8odmFsdWVzKFtdKSkpO1xuICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJiBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiYgaGFzT3duLmNhbGwoTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUsIGl0ZXJhdG9yU3ltYm9sKSAmJiAoSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSk7XG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24gKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChcInRocm93XCIgIT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnLFxuICAgICAgICAgIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgXCJvYmplY3RcIiA9PSBfdHlwZW9mKHZhbHVlKSAmJiBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpID8gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pIDogUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbiAodW53cmFwcGVkKSB7XG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkLCByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgfVxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG4gICAgZGVmaW5lUHJvcGVydHkodGhpcywgXCJfaW52b2tlXCIsIHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShtZXRob2QsIGFyZykge1xuICAgICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID0gcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICAgIHJldHVybiBmdW5jdGlvbiAobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChcImV4ZWN1dGluZ1wiID09PSBzdGF0ZSkgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIGlmIChcImNvbXBsZXRlZFwiID09PSBzdGF0ZSkge1xuICAgICAgICBpZiAoXCJ0aHJvd1wiID09PSBtZXRob2QpIHRocm93IGFyZztcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29udGV4dC5tZXRob2QgPSBtZXRob2QsIGNvbnRleHQuYXJnID0gYXJnOzspIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgdmFyIGRlbGVnYXRlUmVzdWx0ID0gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCk7XG4gICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQgPT09IENvbnRpbnVlU2VudGluZWwpIGNvbnRpbnVlO1xuICAgICAgICAgICAgcmV0dXJuIGRlbGVnYXRlUmVzdWx0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJuZXh0XCIgPT09IGNvbnRleHQubWV0aG9kKSBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7ZWxzZSBpZiAoXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkge1xuICAgICAgICAgIGlmIChcInN1c3BlbmRlZFN0YXJ0XCIgPT09IHN0YXRlKSB0aHJvdyBzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQuYXJnO1xuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuICAgICAgICB9IGVsc2UgXCJyZXR1cm5cIiA9PT0gY29udGV4dC5tZXRob2QgJiYgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgY29udGV4dC5hcmcpO1xuICAgICAgICBzdGF0ZSA9IFwiZXhlY3V0aW5nXCI7XG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKFwibm9ybWFsXCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID0gY29udGV4dC5kb25lID8gXCJjb21wbGV0ZWRcIiA6IFwic3VzcGVuZGVkWWllbGRcIiwgcmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBcInRocm93XCIgPT09IHJlY29yZC50eXBlICYmIChzdGF0ZSA9IFwiY29tcGxldGVkXCIsIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiLCBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmcpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbiAgZnVuY3Rpb24gbWF5YmVJbnZva2VEZWxlZ2F0ZShkZWxlZ2F0ZSwgY29udGV4dCkge1xuICAgIHZhciBtZXRob2ROYW1lID0gY29udGV4dC5tZXRob2QsXG4gICAgICBtZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2ROYW1lXTtcbiAgICBpZiAodW5kZWZpbmVkID09PSBtZXRob2QpIHJldHVybiBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgXCJ0aHJvd1wiID09PSBtZXRob2ROYW1lICYmIGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdICYmIChjb250ZXh0Lm1ldGhvZCA9IFwicmV0dXJuXCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkLCBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSwgXCJ0aHJvd1wiID09PSBjb250ZXh0Lm1ldGhvZCkgfHwgXCJyZXR1cm5cIiAhPT0gbWV0aG9kTmFtZSAmJiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIlRoZSBpdGVyYXRvciBkb2VzIG5vdCBwcm92aWRlIGEgJ1wiICsgbWV0aG9kTmFtZSArIFwiJyBtZXRob2RcIikpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChtZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBjb250ZXh0LmFyZyk7XG4gICAgaWYgKFwidGhyb3dcIiA9PT0gcmVjb3JkLnR5cGUpIHJldHVybiBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIiwgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbDtcbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgcmV0dXJuIGluZm8gPyBpbmZvLmRvbmUgPyAoY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWUsIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2MsIFwicmV0dXJuXCIgIT09IGNvbnRleHQubWV0aG9kICYmIChjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiLCBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZCksIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsLCBDb250aW51ZVNlbnRpbmVsKSA6IGluZm8gOiAoY29udGV4dC5tZXRob2QgPSBcInRocm93XCIsIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpLCBjb250ZXh0LmRlbGVnYXRlID0gbnVsbCwgQ29udGludWVTZW50aW5lbCk7XG4gIH1cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7XG4gICAgICB0cnlMb2M6IGxvY3NbMF1cbiAgICB9O1xuICAgIDEgaW4gbG9jcyAmJiAoZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdKSwgMiBpbiBsb2NzICYmIChlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXSwgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdKSwgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCIsIGRlbGV0ZSByZWNvcmQuYXJnLCBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbe1xuICAgICAgdHJ5TG9jOiBcInJvb3RcIlxuICAgIH1dLCB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyksIHRoaXMucmVzZXQoITApO1xuICB9XG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBpdGVyYWJsZS5uZXh0KSByZXR1cm4gaXRlcmFibGU7XG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSxcbiAgICAgICAgICBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICAgIGZvciAoOyArK2kgPCBpdGVyYWJsZS5sZW5ndGg7KSBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSByZXR1cm4gbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldLCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgICAgICAgIHJldHVybiBuZXh0LnZhbHVlID0gdW5kZWZpbmVkLCBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHQ6IGRvbmVSZXN1bHRcbiAgICB9O1xuICB9XG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBkb25lOiAhMFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmVQcm9wZXJ0eShHcCwgXCJjb25zdHJ1Y3RvclwiLCB7XG4gICAgdmFsdWU6IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIGNvbmZpZ3VyYWJsZTogITBcbiAgfSksIGRlZmluZVByb3BlcnR5KEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIHtcbiAgICB2YWx1ZTogR2VuZXJhdG9yRnVuY3Rpb24sXG4gICAgY29uZmlndXJhYmxlOiAhMFxuICB9KSwgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpLCBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbiAoZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGdlbkZ1biAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuICEhY3RvciAmJiAoY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHwgXCJHZW5lcmF0b3JGdW5jdGlvblwiID09PSAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpKTtcbiAgfSwgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24gKGdlbkZ1bikge1xuICAgIHJldHVybiBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSkgOiAoZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKSksIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKSwgZ2VuRnVuO1xuICB9LCBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiB7XG4gICAgICBfX2F3YWl0OiBhcmdcbiAgICB9O1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpLCBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSksIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3IsIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbiAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgdm9pZCAwID09PSBQcm9taXNlSW1wbCAmJiAoUHJvbWlzZUltcGwgPSBQcm9taXNlKTtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLCBQcm9taXNlSW1wbCk7XG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKSA/IGl0ZXIgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgIH0pO1xuICB9LCBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApLCBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKSwgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9KSwgZGVmaW5lKEdwLCBcInRvU3RyaW5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSksIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uICh2YWwpIHtcbiAgICB2YXIgb2JqZWN0ID0gT2JqZWN0KHZhbCksXG4gICAgICBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkga2V5cy5wdXNoKGtleSk7XG4gICAgcmV0dXJuIGtleXMucmV2ZXJzZSgpLCBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgZm9yICg7IGtleXMubGVuZ3RoOykge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHJldHVybiBuZXh0LnZhbHVlID0ga2V5LCBuZXh0LmRvbmUgPSAhMSwgbmV4dDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXh0LmRvbmUgPSAhMCwgbmV4dDtcbiAgICB9O1xuICB9LCBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcywgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG4gICAgcmVzZXQ6IGZ1bmN0aW9uIHJlc2V0KHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIGlmICh0aGlzLnByZXYgPSAwLCB0aGlzLm5leHQgPSAwLCB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkLCB0aGlzLmRvbmUgPSAhMSwgdGhpcy5kZWxlZ2F0ZSA9IG51bGwsIHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMuYXJnID0gdW5kZWZpbmVkLCB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KSwgIXNraXBUZW1wUmVzZXQpIGZvciAodmFyIG5hbWUgaW4gdGhpcykgXCJ0XCIgPT09IG5hbWUuY2hhckF0KDApICYmIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmICFpc05hTigrbmFtZS5zbGljZSgxKSkgJiYgKHRoaXNbbmFtZV0gPSB1bmRlZmluZWQpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgIHRoaXMuZG9uZSA9ICEwO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSB0aGlzLnRyeUVudHJpZXNbMF0uY29tcGxldGlvbjtcbiAgICAgIGlmIChcInRocm93XCIgPT09IHJvb3RSZWNvcmQudHlwZSkgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uIGRpc3BhdGNoRXhjZXB0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJldHVybiByZWNvcmQudHlwZSA9IFwidGhyb3dcIiwgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbiwgY29udGV4dC5uZXh0ID0gbG9jLCBjYXVnaHQgJiYgKGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCIsIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkKSwgISFjYXVnaHQ7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXSxcbiAgICAgICAgICByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICBpZiAoXCJyb290XCIgPT09IGVudHJ5LnRyeUxvYykgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKSxcbiAgICAgICAgICAgIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsICEwKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgITApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWhhc0ZpbmFsbHkpIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uIGFicnVwdCh0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJiBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZpbmFsbHlFbnRyeSAmJiAoXCJicmVha1wiID09PSB0eXBlIHx8IFwiY29udGludWVcIiA9PT0gdHlwZSkgJiYgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiYgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jICYmIChmaW5hbGx5RW50cnkgPSBudWxsKTtcbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmV0dXJuIHJlY29yZC50eXBlID0gdHlwZSwgcmVjb3JkLmFyZyA9IGFyZywgZmluYWxseUVudHJ5ID8gKHRoaXMubWV0aG9kID0gXCJuZXh0XCIsIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jLCBDb250aW51ZVNlbnRpbmVsKSA6IHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbiBjb21wbGV0ZShyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAoXCJ0aHJvd1wiID09PSByZWNvcmQudHlwZSkgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIHJldHVybiBcImJyZWFrXCIgPT09IHJlY29yZC50eXBlIHx8IFwiY29udGludWVcIiA9PT0gcmVjb3JkLnR5cGUgPyB0aGlzLm5leHQgPSByZWNvcmQuYXJnIDogXCJyZXR1cm5cIiA9PT0gcmVjb3JkLnR5cGUgPyAodGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnLCB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCIsIHRoaXMubmV4dCA9IFwiZW5kXCIpIDogXCJub3JtYWxcIiA9PT0gcmVjb3JkLnR5cGUgJiYgYWZ0ZXJMb2MgJiYgKHRoaXMubmV4dCA9IGFmdGVyTG9jKSwgQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuICAgIGZpbmlzaDogZnVuY3Rpb24gZmluaXNoKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykgcmV0dXJuIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpLCByZXNldFRyeUVudHJ5KGVudHJ5KSwgQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24gX2NhdGNoKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChcInRocm93XCIgPT09IHJlY29yZC50eXBlKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbiBkZWxlZ2F0ZVlpZWxkKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH0sIFwibmV4dFwiID09PSB0aGlzLm1ldGhvZCAmJiAodGhpcy5hcmcgPSB1bmRlZmluZWQpLCBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfSwgZXhwb3J0cztcbn1cbm1vZHVsZS5leHBvcnRzID0gX3JlZ2VuZXJhdG9yUnVudGltZSwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gKG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZSwgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMpLCBfdHlwZW9mKG9iaik7XG59XG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlLCBtb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0czsiLCIvLyBUT0RPKEJhYmVsIDgpOiBSZW1vdmUgdGhpcyBmaWxlLlxuXG52YXIgcnVudGltZSA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3JlZ2VuZXJhdG9yUnVudGltZVwiKSgpO1xubW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuXG4vLyBDb3BpZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvYmxvYi9tYWluL3BhY2thZ2VzL3J1bnRpbWUvcnVudGltZS5qcyNMNzM2PVxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gXCJvYmplY3RcIikge1xuICAgIGdsb2JhbFRoaXMucmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbiAgfSBlbHNlIHtcbiAgICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuICByZXR1cm4gc2VsZjtcbn0iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImltcG9ydCB0b1Byb3BlcnR5S2V5IGZyb20gXCIuL3RvUHJvcGVydHlLZXkuanNcIjtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHRvUHJvcGVydHlLZXkoZGVzY3JpcHRvci5rZXkpLCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29uc3RydWN0b3IsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGtleSA9IHRvUHJvcGVydHlLZXkoa2V5KTtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN1YkNsYXNzLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlXG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IGFzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tIFwiLi9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKF90eXBlb2YoY2FsbCkgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikpIHtcbiAgICByZXR1cm4gY2FsbDtcbiAgfSBlbHNlIGlmIChjYWxsICE9PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChfdHlwZW9mKHJlcykgIT09IFwib2JqZWN0XCIpIHJldHVybiByZXM7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleShhcmcpIHtcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XG4gIHJldHVybiBfdHlwZW9mKGtleSkgPT09IFwic3ltYm9sXCIgPyBrZXkgOiBTdHJpbmcoa2V5KTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ29sJztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1Jvdyc7XG5cbmltcG9ydCB7IEFwcGxpY2F0aW9uQ29udGFpbmVyIH0gZnJvbSAnL2NvbXBvbmVudHMvYnVzaW5lc3MvYXBwYmFzZSc7XG5cbmltcG9ydCB7QXBwbGljYXRpb25QYWdlfSBmcm9tICcvY29tbW9uX2xpYic7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFB1cnBvc2U6IFBhZ2UgdG8gdmlldyBhbiBhcHBsaWNhdGlvblxuICpcbiAqIFByb3BzXG4gKiAgICAgIGN1cnJlbnRfdXNlcjogY3VycmVudCB1c2VyXG4gKiAgICAgIGNzcmZfdG9rZW46ICAgdGhlIGNzcmYgdG9rZW5cbiAqICAgICAgc2V0X2FsZXJ0OiAgICBhIGZ1bmN0aW9uIHRvIHNldCBhbGVydFxuICovXG5cbmNsYXNzIEhvbWVBcHBsaWNhdGlvblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgPENvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ib21lIFBhZ2U8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfVxufVxuXG4kKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHBhZ2UgPSBuZXcgQXBwbGljYXRpb25QYWdlKCk7XG5cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgIDxBcHBsaWNhdGlvbkNvbnRhaW5lclxuICAgICAgICAgICAgY3VycmVudF91c2VyPXtwYWdlLmN1cnJlbnRfdXNlcn1cbiAgICAgICAgICAgIGNzcmZfdG9rZW49e3BhZ2UuY3NyZl90b2tlbn1cbiAgICAgICAgICAgIGluaXRfbWVudV9rZXk9e3BhZ2UuaW5pdF9tZW51X2tleX1cbiAgICAgICAgICAgIGFwcF9jb250ZXh0PXtwYWdlLmFwcF9jb250ZXh0fVxuICAgICAgICA+XG4gICAgICAgICAgICA8SG9tZUFwcGxpY2F0aW9uUGFnZSAvPlxuICAgICAgICA8L0FwcGxpY2F0aW9uQ29udGFpbmVyPixcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4gICAgKTtcbn0pOyJdLCJuYW1lcyI6WyIkIiwiXyIsInNldFN0YXRlQXN5bmMiLCJfeCIsIl94MiIsIl9zZXRTdGF0ZUFzeW5jIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsImNvbXBvbmVudCIsInN0YXRlIiwid3JhcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsImFicnVwdCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0U3RhdGUiLCJzdG9wIiwiQXBwbGljYXRpb25QYWdlIiwiX2NsYXNzQ2FsbENoZWNrIiwiY3VycmVudF91c2VyIiwiZ2V0X21ldGFfanNvbiIsImFwcF9jb250ZXh0IiwiY3NyZl90b2tlbiIsImdldF9tZXRhIiwiaW5pdF9tZW51X2tleSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwibmFtZSIsImRlZmF1bHRfdmFsdWUiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJlbGVtZW50cyIsImNvbmNhdCIsIkpTT04iLCJwYXJzZSIsImNvbnRlbnQiLCJibGVzc19tb2RhbCIsIm1vZGFsX2lkIiwibW9kYWxfY29udGVudCIsInJlc2l6YWJsZSIsImRyYWdnYWJsZSIsImhhbmRsZSIsInBvc2l0aW9uIiwib2YiLCJ3aW5kb3ciLCJSZWFjdCIsIkNvbCIsIlJvdyIsIk5hdmJhciIsIk5hdiIsIkNvbnRhaW5lciIsIkRyb3Bkb3duQnV0dG9uIiwiRHJvcGRvd24iLCJBbGVydCIsInY0IiwidXVpZHY0IiwiRGlhbG9nQm94U3RhY2siLCJEaWFsb2dCb3hTdGFja1Byb3ZpZGVyIiwiR2xvYmFsSGVhZGVyIiwiX1JlYWN0JENvbXBvbmVudCIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJmaXhlZCIsImV4cGFuZCIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJmbHVpZCIsIkJyYW5kIiwiaHJlZiIsInNyYyIsImFsdCIsIlRvZ2dsZSIsIkNvbGxhcHNlIiwiZGVmYXVsdEFjdGl2ZUtleSIsInByb3BzIiwiaXNfYXV0aGVudGljYXRlZCIsIkxpbmsiLCJldmVudEtleSIsImlkIiwidGl0bGUiLCJ1c2VybmFtZSIsIkl0ZW0iLCJDb21wb25lbnQiLCJBcHBsaWNhdGlvbkNvbnRhaW5lciIsIl9SZWFjdCRDb21wb25lbnQyIiwiX3N1cGVyMiIsIl90aGlzIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJjYWxsIiwiX2RlZmluZVByb3BlcnR5IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImNyZWF0ZVJlZiIsImVycm9yX21zZ3MiLCJfcmVmIiwidGV4dCIsIl90aGlzMiIsIl9vYmplY3RTcHJlYWQiLCJzZXRfYWxlcnQiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiZGJzUmVmIiwiT2JqZWN0Iiwia2V5cyIsImVudHJpZXMiLCJtYXAiLCJlbnRyeSIsIm9uQ2xvc2UiLCJkaXNtaXNzaWJsZSIsIkNoaWxkcmVuIiwiY2hpbGRyZW4iLCJjaGlsZCIsImNsb25lRWxlbWVudCIsInJlZiIsIkJ1dHRvbiIsIk1vZGFsIiwiRGxnQm94QWdlbnQiLCJfZ2V0SW5pdFN1YlN0YXRlIiwiZGxnYm94IiwiZ2V0SW5pdFN1YlN0YXRlIiwib3BlbkRpYWxvZyIsIm9wdGlvbnMiLCJjdXJyZW50Iiwib25TdWJTdGF0ZVVwZGF0ZWQiLCJuZXdTdWJTdGF0ZSIsInJlbmRlckNvbnRlbnQiLCJfb25BY3Rpb24iLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIm9uQWN0aW9uIiwiX3gzIiwiRGlhbG9nQm94Iiwic2hvdyIsInNpemUiLCJhY3Rpb25zIiwiYWdlbnQiLCJzdWJTdGF0ZSIsImNiIiwiYWN0aW9uIiwiX2NiIiwiYWxsb3dlZCIsIl9jYWxsZWUzIiwidXBkYXRlIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiX3g0IiwiX3JlZjIiLCJfY2FsbGVlNCIsImZpZWxkTmFtZSIsImZpZWxkVmFsdWUiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJfeDUiLCJfeDYiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIl9yZWY0IiwiX2NhbGxlZTYiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJpc051bGwiLCJjbG9zZSIsIl94NyIsIl9jYWxsZWU3IiwiX3RpdGxlJHNpemUkYWdlbnQkY29uIiwiX2FyZ3M3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3Iiwic2VudCIsIm5ld1N0YXRlIiwiY2xvbmUiLCJkbGdfcHJvcHMiLCJkaWFsb2dDbGFzc05hbWUiLCJfZXh0ZW5kcyIsIm9uSGlkZSIsImJhY2tkcm9wIiwic2Nyb2xsYWJsZSIsImFuaW1hdGlvbiIsIkhlYWRlciIsImNsb3NlQnV0dG9uIiwiVGl0bGUiLCJCb2R5IiwiRm9vdGVyIiwib25DbGljayIsImV2dCIsImRpc2FibGVkIiwiX3RoaXMzIiwiX2xlbjIiLCJfa2V5MiIsInJhbmdlIiwiaSIsIl9jYWxsZWU4Iiwib3B0aW9uc0V4IiwiX2FyZ3M4IiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwiZGxnQm94UmVmcyIsIkVycm9yIiwiaWR4IiwiY3JlYXRlQ29udGV4dCIsIlJlYWN0RE9NIiwiSG9tZUFwcGxpY2F0aW9uUGFnZSIsInBhZ2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sInNvdXJjZVJvb3QiOiIifQ==