(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/welcome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_car__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/car */ \"./resources/js/models/car.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  layout: 'default',\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t('welcome')\n    };\n  },\n  data: function data() {\n    return {\n      title: window.config.appName,\n      offset: 4,\n      pagination: {},\n      cars: {}\n    };\n  },\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapGetters\"])({\n    authenticated: 'auth/check'\n  }),\n  created: function created() {\n    this.fetchCars();\n  },\n  methods: {\n    fetchCars: function () {\n      var _fetchCars = _asyncToGenerator(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var current_page, pageNum, vue, response;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                current_page = this.pagination.current_page;\n                pageNum = current_page ? current_page : 1;\n                vue = this;\n                _context.next = 5;\n                return _models_car__WEBPACK_IMPORTED_MODULE_3__[\"default\"].page(pageNum).get();\n\n              case 5:\n                response = _context.sent;\n                this.pagination = response;\n                this.cars = response.data; // await axios.get(`/api/cars?page[number]=${pageNum}&page[size]=3`)\n                // .then((response) => {\n                //   vue.pagination = response.data;\n                //   vue.cars = response.data.data;\n                // }).catch((e) => {\n                // });\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function fetchCars() {\n        return _fetchCars.apply(this, arguments);\n      }\n\n      return fetchCars;\n    }()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL3dlbGNvbWUudnVlP2M4YzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQSxtQkFEQTtBQUdBLFVBSEEsc0JBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxHQUxBO0FBT0E7QUFBQTtBQUNBLGtDQURBO0FBRUEsZUFGQTtBQUdBLG9CQUhBO0FBSUE7QUFKQTtBQUFBLEdBUEE7QUFjQTtBQUNBO0FBREEsSUFkQTtBQWtCQTtBQUNBO0FBQ0EsR0FwQkE7QUFzQkE7QUFDQSxhQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBLDRCQUhBLEdBR0EsNEJBSEE7QUFJQSx1QkFKQSxHQUlBLCtCQUpBO0FBTUEsbUJBTkEsR0FNQSxJQU5BO0FBQUE7QUFBQSx1QkFRQSx1RUFSQTs7QUFBQTtBQVFBLHdCQVJBO0FBVUE7QUFDQSwwQ0FYQSxDQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXRCQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvcGFnZXMvd2VsY29tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG9cIj5cbiAgICAgIDx2ZWhpY2xlLWNhcmQgdi1mb3I9XCJjYXIgaW4gY2Fyc1wiIDpjYXI9XCJjYXJcIiA6a2V5PVwiY2FyLmlkXCIvPlxuXG4gICAgICA8cGFnaW5hdGlvbiA6cGFnaW5hdGlvbj1cInBhZ2luYXRpb25cIiBAcGFnaW5hdGU9XCJmZXRjaENhcnNcIiA6b2Zmc2V0PVwiNFwiLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBDYXIgZnJvbSAnLi4vbW9kZWxzL2NhcidcblxuZXhwb3J0IGRlZmF1bHQge1xuICBsYXlvdXQ6ICdkZWZhdWx0JyxcblxuICBtZXRhSW5mbyAoKSB7XG4gICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ3dlbGNvbWUnKSB9XG4gIH0sXG5cbiAgZGF0YTogKCkgPT4gKHtcbiAgICB0aXRsZTogd2luZG93LmNvbmZpZy5hcHBOYW1lLFxuICAgIG9mZnNldDogNCxcbiAgICBwYWdpbmF0aW9uOiB7fSxcbiAgICBjYXJzOiB7fSxcbiAgfSksXG5cbiAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoe1xuICAgIGF1dGhlbnRpY2F0ZWQ6ICdhdXRoL2NoZWNrJ1xuICB9KSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmZldGNoQ2FycygpO1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBmZXRjaENhcnMgKCkge1xuXG4gICAgICBsZXQgY3VycmVudF9wYWdlID0gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRfcGFnZTtcbiAgICAgIGxldCBwYWdlTnVtID0gY3VycmVudF9wYWdlID8gY3VycmVudF9wYWdlIDogMTtcblxuICAgICAgbGV0IHZ1ZSA9IHRoaXM7XG5cbiAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IENhci5wYWdlKHBhZ2VOdW0pLmdldCgpXG5cbiAgICAgIHRoaXMucGFnaW5hdGlvbiA9IHJlc3BvbnNlO1xuICAgICAgdGhpcy5jYXJzID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgLy8gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2NhcnM/cGFnZVtudW1iZXJdPSR7cGFnZU51bX0mcGFnZVtzaXplXT0zYClcbiAgICAgIC8vIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgLy8gICB2dWUucGFnaW5hdGlvbiA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAvLyAgIHZ1ZS5jYXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhO1xuICAgICAgLy8gfSkuY2F0Y2goKGUpID0+IHtcblxuICAgICAgLy8gfSk7XG4gICAgfVxuICB9LFxuXG5cbn1cbjwvc2NyaXB0PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"container mx-auto\" },\n    [\n      _vm._l(_vm.cars, function(car) {\n        return _c(\"vehicle-card\", { key: car.id, attrs: { car: car } })\n      }),\n      _vm._v(\" \"),\n      _c(\"pagination\", {\n        attrs: { pagination: _vm.pagination, offset: 4 },\n        on: { paginate: _vm.fetchCars }\n      })\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvd2VsY29tZS52dWU/MzQ0MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLG1DQUFtQztBQUN4QztBQUNBO0FBQ0EsbUNBQW1DLHNCQUFzQixXQUFXLEVBQUU7QUFDdEUsT0FBTztBQUNQO0FBQ0E7QUFDQSxnQkFBZ0Isd0NBQXdDO0FBQ3hELGFBQWE7QUFDYixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9wYWdlcy93ZWxjb21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZGQ4ZTllZSYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXIgbXgtYXV0b1wiIH0sXG4gICAgW1xuICAgICAgX3ZtLl9sKF92bS5jYXJzLCBmdW5jdGlvbihjYXIpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwidmVoaWNsZS1jYXJkXCIsIHsga2V5OiBjYXIuaWQsIGF0dHJzOiB7IGNhcjogY2FyIH0gfSlcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHBhZ2luYXRpb246IF92bS5wYWdpbmF0aW9uLCBvZmZzZXQ6IDQgfSxcbiAgICAgICAgb246IHsgcGFnaW5hdGU6IF92bS5mZXRjaENhcnMgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&\n");

/***/ }),

/***/ "./resources/js/models/car.js":
/*!************************************!*\
  !*** ./resources/js/models/car.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./resources/js/models/model.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar User =\n/*#__PURE__*/\nfunction (_Model) {\n  _inherits(User, _Model);\n\n  function User() {\n    _classCallCheck(this, User);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(User).apply(this, arguments));\n  }\n\n  _createClass(User, [{\n    key: \"resource\",\n    value: function resource() {\n      return 'cars';\n    }\n  }]);\n\n  return User;\n}(_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kZWxzL2Nhci5qcz8wNGVmIl0sIm5hbWVzIjpbIlVzZXIiLCJNb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OytCQUduQjtBQUNFLGFBQU8sTUFBUDtBQUNEOzs7O0VBTCtCQyw4QyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9tb2RlbHMvY2FyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWwge1xyXG5cclxuICByZXNvdXJjZSgpXHJcbiAge1xyXG4gICAgcmV0dXJuICdjYXJzJ1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/models/car.js\n");

/***/ }),

/***/ "./resources/js/models/model.js":
/*!**************************************!*\
  !*** ./resources/js/models/model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\n/* harmony import */ var vue_api_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-api-query */ \"./node_modules/vue-api-query/build/index.js\");\n/* harmony import */ var vue_api_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_api_query__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Model =\n/*#__PURE__*/\nfunction (_BaseModel) {\n  _inherits(Model, _BaseModel);\n\n  function Model() {\n    _classCallCheck(this, Model);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Model).apply(this, arguments));\n  }\n\n  _createClass(Model, [{\n    key: \"baseURL\",\n    // define a base url for a REST API\n    value: function baseURL() {\n      return '/api';\n    } // implement a default request method\n\n  }, {\n    key: \"request\",\n    value: function request(config) {\n      return this.$http.request(config);\n    }\n  }]);\n\n  return Model;\n}(vue_api_query__WEBPACK_IMPORTED_MODULE_0__[\"Model\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kZWxzL21vZGVsLmpzPzZkZmEiXSwibmFtZXMiOlsiTW9kZWwiLCJjb25maWciLCIkaHR0cCIsInJlcXVlc3QiLCJCYXNlTW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7QUFFbkI7OEJBQ1c7QUFDVCxhQUFPLE1BQVA7QUFDRCxLLENBRUQ7Ozs7NEJBQ1NDLE0sRUFBUTtBQUNmLGFBQU8sS0FBS0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixNQUFuQixDQUFQO0FBQ0Q7Ozs7RUFWZ0NHLG1EIiwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL21vZGVscy9tb2RlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGVsIGFzIEJhc2VNb2RlbCB9IGZyb20gJ3Z1ZS1hcGktcXVlcnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCBleHRlbmRzIEJhc2VNb2RlbCB7XHJcblxyXG4gIC8vIGRlZmluZSBhIGJhc2UgdXJsIGZvciBhIFJFU1QgQVBJXHJcbiAgYmFzZVVSTCAoKSB7XHJcbiAgICByZXR1cm4gJy9hcGknXHJcbiAgfVxyXG5cclxuICAvLyBpbXBsZW1lbnQgYSBkZWZhdWx0IHJlcXVlc3QgbWV0aG9kXHJcbiAgcmVxdWVzdCAoY29uZmlnKSB7XHJcbiAgICByZXR1cm4gdGhpcy4kaHR0cC5yZXF1ZXN0KGNvbmZpZylcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/models/model.js\n");

/***/ }),

/***/ "./resources/js/pages/welcome.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/welcome.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.vue?vue&type=template&id=cdd8e9ee& */ \"./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&\");\n/* harmony import */ var _welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.vue?vue&type=script&lang=js& */ \"./resources/js/pages/welcome.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/welcome.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvd2VsY29tZS52dWU/ODVhZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRjtBQUMzQjtBQUNMOzs7QUFHdEQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLGtGQUFNO0FBQ1IsRUFBRSwyRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wYWdlcy93ZWxjb21lLnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vd2VsY29tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2RkOGU5ZWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vd2VsY29tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3dlbGNvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJFOlxcXFwxLiBQcm9qZWN0c1xcXFw4LiBBRE1TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjZGQ4ZTllZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjZGQ4ZTllZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vd2VsY29tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2RkOGU5ZWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2RkOGU5ZWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9wYWdlcy93ZWxjb21lLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/welcome.vue\n");

/***/ }),

/***/ "./resources/js/pages/welcome.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/welcome.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./welcome.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvd2VsY29tZS52dWU/MTYyMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUEsd0NBQXVMLENBQWdCLG1QQUFHLEVBQUMiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvd2VsY29tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93ZWxjb21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93ZWxjb21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/pages/welcome.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./welcome.vue?vue&type=template&id=cdd8e9ee& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvd2VsY29tZS52dWU/Njk0ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvcGFnZXMvd2VsY29tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2RkOGU5ZWUmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dlbGNvbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWNkZDhlOWVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&\n");

/***/ })

}]);