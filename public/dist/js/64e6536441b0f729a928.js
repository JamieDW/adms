(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/welcome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _models_car__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/car */ \"./resources/js/models/car.js\");\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  layout: 'default',\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t('welcome')\n    };\n  },\n  data: function data() {\n    return {\n      title: window.config.appName,\n      pagination: {},\n      orderBy: '-year'\n    };\n  },\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_1__[\"mapGetters\"])({\n    authenticated: 'auth/check'\n  }),\n  created: function created() {\n    this.fetchCars();\n  },\n  methods: {\n    fetchCars: function () {\n      var _fetchCars = _asyncToGenerator(\n      /*#__PURE__*/\n      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var pageNumber;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                pageNumber = this.pagination.current_page || 1;\n                _context.next = 3;\n                return _models_car__WEBPACK_IMPORTED_MODULE_2__[\"default\"].orderBy(this.orderBy).page(pageNumber).limit(3).get();\n\n              case 3:\n                this.pagination = _context.sent;\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function fetchCars() {\n        return _fetchCars.apply(this, arguments);\n      }\n\n      return fetchCars;\n    }()\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL3dlbGNvbWUudnVlP2M4YzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUVBO0FBRUE7QUFDQSxtQkFEQTtBQUdBLFVBSEEsc0JBR0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxHQUxBO0FBT0E7QUFBQTtBQUNBLGtDQURBO0FBRUEsb0JBRkE7QUFHQTtBQUhBO0FBQUEsR0FQQTtBQWFBO0FBQ0E7QUFEQSxJQWJBO0FBaUJBO0FBQ0E7QUFDQSxHQW5CQTtBQXFCQTtBQUNBLGFBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0EsMEJBSEEsR0FHQSxpQ0FIQTtBQUFBO0FBQUEsdUJBS0Esb0RBQ0EsT0FEQSxDQUNBLFlBREEsRUFFQSxJQUZBLENBRUEsVUFGQSxFQUdBLEtBSEEsQ0FHQSxDQUhBLEVBSUEsR0FKQSxFQUxBOztBQUFBO0FBS0EsK0JBTEE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQXJCQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvcGFnZXMvd2VsY29tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIG14LWF1dG9cIj5cblxuICAgICAgPHNlbGVjdCB2LW1vZGVsPVwib3JkZXJCeVwiPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGF0ZVwiPlJlY2VudDwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJpY2VcIj5QcmljZSAoTG93ZXN0KTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiLXByaWNlXCI+UHJpY2UgKEhpZ2hlc3QpPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJ5ZWFyXCI+QWdlIChOZXdlc3QgZmlyc3QpPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJtaWxlc1wiPk1pbGVhZ2U8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuXG4gICAgICA8dmVoaWNsZS1jYXJkIHYtZm9yPVwiY2FyIGluIHBhZ2luYXRpb24uZGF0YVwiIDpjYXI9XCJjYXJcIiA6a2V5PVwiY2FyLmlkXCIvPlxuXG4gICAgICA8cGFnaW5hdGlvbiA6cGFnaW5hdGlvbj1cInBhZ2luYXRpb25cIiBAcGFnaW5hdGU9XCJmZXRjaENhcnNcIiA6b2Zmc2V0PVwiNFwiLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuaW1wb3J0IENhciBmcm9tICcuLi9tb2RlbHMvY2FyJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGxheW91dDogJ2RlZmF1bHQnLFxuXG4gIG1ldGFJbmZvICgpIHtcbiAgICByZXR1cm4geyB0aXRsZTogdGhpcy4kdCgnd2VsY29tZScpIH1cbiAgfSxcblxuICBkYXRhOiAoKSA9PiAoe1xuICAgIHRpdGxlOiB3aW5kb3cuY29uZmlnLmFwcE5hbWUsXG4gICAgcGFnaW5hdGlvbjoge30sXG4gICAgb3JkZXJCeTogJy15ZWFyJ1xuICB9KSxcblxuICBjb21wdXRlZDogbWFwR2V0dGVycyh7XG4gICAgYXV0aGVudGljYXRlZDogJ2F1dGgvY2hlY2snXG4gIH0pLFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZmV0Y2hDYXJzKCk7XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGZldGNoQ2FycyAoKSB7XG5cbiAgICAgIGxldCBwYWdlTnVtYmVyID0gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSB8fCAxO1xuXG4gICAgICB0aGlzLnBhZ2luYXRpb24gPSBhd2FpdCBDYXJcbiAgICAgICAgLm9yZGVyQnkodGhpcy5vcmRlckJ5KVxuICAgICAgICAucGFnZShwYWdlTnVtYmVyKVxuICAgICAgICAubGltaXQoMylcbiAgICAgICAgLmdldCgpXG4gICAgfVxuICB9LFxuXG5cbn1cbjwvc2NyaXB0PlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"container mx-auto\" },\n    [\n      _c(\n        \"select\",\n        {\n          directives: [\n            {\n              name: \"model\",\n              rawName: \"v-model\",\n              value: _vm.orderBy,\n              expression: \"orderBy\"\n            }\n          ],\n          on: {\n            change: function($event) {\n              var $$selectedVal = Array.prototype.filter\n                .call($event.target.options, function(o) {\n                  return o.selected\n                })\n                .map(function(o) {\n                  var val = \"_value\" in o ? o._value : o.value\n                  return val\n                })\n              _vm.orderBy = $event.target.multiple\n                ? $$selectedVal\n                : $$selectedVal[0]\n            }\n          }\n        },\n        [\n          _c(\"option\", { attrs: { value: \"date\" } }, [_vm._v(\"Recent\")]),\n          _vm._v(\" \"),\n          _c(\"option\", { attrs: { value: \"price\" } }, [\n            _vm._v(\"Price (Lowest)\")\n          ]),\n          _vm._v(\" \"),\n          _c(\"option\", { attrs: { value: \"-price\" } }, [\n            _vm._v(\"Price (Highest)\")\n          ]),\n          _vm._v(\" \"),\n          _c(\"option\", { attrs: { value: \"year\" } }, [\n            _vm._v(\"Age (Newest first)\")\n          ]),\n          _vm._v(\" \"),\n          _c(\"option\", { attrs: { value: \"miles\" } }, [_vm._v(\"Mileage\")])\n        ]\n      ),\n      _vm._v(\" \"),\n      _vm._l(_vm.pagination.data, function(car) {\n        return _c(\"vehicle-card\", { key: car.id, attrs: { car: car } })\n      }),\n      _vm._v(\" \"),\n      _c(\"pagination\", {\n        attrs: { pagination: _vm.pagination, offset: 4 },\n        on: { paginate: _vm.fetchCars }\n      })\n    ],\n    2\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvd2VsY29tZS52dWU/MzQ0MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLG1DQUFtQztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esd0JBQXdCLFNBQVMsZ0JBQWdCLEVBQUU7QUFDbkQ7QUFDQSx3QkFBd0IsU0FBUyxpQkFBaUIsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUyxrQkFBa0IsRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUyxnQkFBZ0IsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsU0FBUyxpQkFBaUIsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzQkFBc0IsV0FBVyxFQUFFO0FBQ3RFLE9BQU87QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCLHdDQUF3QztBQUN4RCxhQUFhO0FBQ2IsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8hLi9yZXNvdXJjZXMvanMvcGFnZXMvd2VsY29tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2RkOGU5ZWUmLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIG14LWF1dG9cIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICB7XG4gICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm9yZGVyQnksXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwib3JkZXJCeVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbihvKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgX3ZtLm9yZGVyQnkgPSAkZXZlbnQudGFyZ2V0Lm11bHRpcGxlXG4gICAgICAgICAgICAgICAgPyAkJHNlbGVjdGVkVmFsXG4gICAgICAgICAgICAgICAgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJkYXRlXCIgfSB9LCBbX3ZtLl92KFwiUmVjZW50XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcInByaWNlXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJQcmljZSAoTG93ZXN0KVwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCItcHJpY2VcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIlByaWNlIChIaWdoZXN0KVwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJ5ZWFyXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJBZ2UgKE5ld2VzdCBmaXJzdClcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwib3B0aW9uXCIsIHsgYXR0cnM6IHsgdmFsdWU6IFwibWlsZXNcIiB9IH0sIFtfdm0uX3YoXCJNaWxlYWdlXCIpXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLnBhZ2luYXRpb24uZGF0YSwgZnVuY3Rpb24oY2FyKSB7XG4gICAgICAgIHJldHVybiBfYyhcInZlaGljbGUtY2FyZFwiLCB7IGtleTogY2FyLmlkLCBhdHRyczogeyBjYXI6IGNhciB9IH0pXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBhZ2luYXRpb25cIiwge1xuICAgICAgICBhdHRyczogeyBwYWdpbmF0aW9uOiBfdm0ucGFnaW5hdGlvbiwgb2Zmc2V0OiA0IH0sXG4gICAgICAgIG9uOiB7IHBhZ2luYXRlOiBfdm0uZmV0Y2hDYXJzIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\n/* harmony import */ var vue_api_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-api-query */ \"./node_modules/vue-api-query/build/index.js\");\n/* harmony import */ var vue_api_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_api_query__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Model =\n/*#__PURE__*/\nfunction (_BaseModel) {\n  _inherits(Model, _BaseModel);\n\n  function Model() {\n    _classCallCheck(this, Model);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Model).apply(this, arguments));\n  }\n\n  _createClass(Model, [{\n    key: \"baseURL\",\n    // define a base url for a REST API\n    value: function baseURL() {\n      return '/api';\n    } // implement a default request method\n\n  }, {\n    key: \"request\",\n    value: function request(config) {\n      return this.$http.request(config);\n    } // override the default page and limit name to work with the following\n    // https://docs.spatie.be/laravel-query-builder/v2/advanced-usage/pagination/\n\n  }, {\n    key: \"parameterNames\",\n    value: function parameterNames() {\n      return {\n        page: 'page[number]',\n        limit: 'page[size]'\n      };\n    }\n  }]);\n\n  return Model;\n}(vue_api_query__WEBPACK_IMPORTED_MODULE_0__[\"Model\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kZWxzL21vZGVsLmpzPzZkZmEiXSwibmFtZXMiOlsiTW9kZWwiLCJjb25maWciLCIkaHR0cCIsInJlcXVlc3QiLCJwYWdlIiwibGltaXQiLCJCYXNlTW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7QUFFbkI7OEJBQ1c7QUFDVCxhQUFPLE1BQVA7QUFDRCxLLENBRUQ7Ozs7NEJBQ1NDLE0sRUFBUTtBQUNmLGFBQU8sS0FBS0MsS0FBTCxDQUFXQyxPQUFYLENBQW1CRixNQUFuQixDQUFQO0FBQ0QsSyxDQUVEO0FBQ0E7Ozs7cUNBQ2tCO0FBQ2hCLGFBQU87QUFDTEcsWUFBSSxFQUFJLGNBREg7QUFFTEMsYUFBSyxFQUFHO0FBRkgsT0FBUDtBQUlEOzs7O0VBbkJnQ0MsbUQiLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvbW9kZWxzL21vZGVsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kZWwgYXMgQmFzZU1vZGVsIH0gZnJvbSAndnVlLWFwaS1xdWVyeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIGV4dGVuZHMgQmFzZU1vZGVsIHtcclxuXHJcbiAgLy8gZGVmaW5lIGEgYmFzZSB1cmwgZm9yIGEgUkVTVCBBUElcclxuICBiYXNlVVJMICgpIHtcclxuICAgIHJldHVybiAnL2FwaSdcclxuICB9XHJcblxyXG4gIC8vIGltcGxlbWVudCBhIGRlZmF1bHQgcmVxdWVzdCBtZXRob2RcclxuICByZXF1ZXN0IChjb25maWcpIHtcclxuICAgIHJldHVybiB0aGlzLiRodHRwLnJlcXVlc3QoY29uZmlnKVxyXG4gIH1cclxuXHJcbiAgLy8gb3ZlcnJpZGUgdGhlIGRlZmF1bHQgcGFnZSBhbmQgbGltaXQgbmFtZSB0byB3b3JrIHdpdGggdGhlIGZvbGxvd2luZ1xyXG4gIC8vIGh0dHBzOi8vZG9jcy5zcGF0aWUuYmUvbGFyYXZlbC1xdWVyeS1idWlsZGVyL3YyL2FkdmFuY2VkLXVzYWdlL3BhZ2luYXRpb24vXHJcbiAgcGFyYW1ldGVyTmFtZXMgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFnZTogICAncGFnZVtudW1iZXJdJyxcclxuICAgICAgbGltaXQ6ICAncGFnZVtzaXplXSdcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/models/model.js\n");

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