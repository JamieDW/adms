(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/welcome.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var _models_car__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/car */ \"./resources/js/models/car.js\");\n/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-infinite-loading */ \"./node_modules/vue-infinite-loading/dist/vue-infinite-loading.js\");\n/* harmony import */ var vue_infinite_loading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_infinite_loading__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  layout: 'default',\n  components: {\n    InfiniteLoading: vue_infinite_loading__WEBPACK_IMPORTED_MODULE_2___default.a\n  },\n  metaInfo: function metaInfo() {\n    return {\n      title: this.$t('welcome')\n    };\n  },\n  data: function data() {\n    return {\n      title: window.config.appName,\n      page: 1,\n      cars: [],\n      infiniteId: +new Date(),\n      filter: {\n        orderBy: '-date',\n        limit: 5,\n        make: null,\n        model: null\n      }\n    };\n  },\n  // TODO add null option to selects and display it.\n  computed: Object(vuex__WEBPACK_IMPORTED_MODULE_0__[\"mapGetters\"])({\n    authenticated: 'auth/check'\n  }),\n  created: function created() {\n    this.filter.orderBy = this.$storage.get('orderBy', this.filter.orderBy);\n    this.filter.make = this.$storage.get('make', this.filter.make);\n    this.filter.model = this.$storage.get('model', this.filter.model);\n  },\n  mounted: function mounted() {},\n  methods: {\n    onUpdate: function onUpdate(filter) {\n      this.filter = filter;\n      this.page = 1;\n      this.cars = [];\n      this.infiniteId += 1;\n    },\n    onNext: function onNext($state) {\n      var vue = this;\n      var query = _models_car__WEBPACK_IMPORTED_MODULE_1__[\"default\"].orderBy(this.orderBy).page(this.page).limit(Number(this.filter.limit));\n\n      if (this.filter.make) {\n        if (this.filter.model) {\n          query.whereIn('identity', [this.filter.make, this.filter.model]);\n        } else {\n          query.where('identity', this.filter.make);\n        }\n      }\n\n      query.get().then(function (response) {\n        if (response.data.length) {\n          var _vue$cars;\n\n          vue.page++;\n\n          (_vue$cars = vue.cars).push.apply(_vue$cars, _toConsumableArray(response.data));\n\n          $state.loaded();\n        } else {\n          $state.complete();\n        }\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3BhZ2VzL3dlbGNvbWUudnVlP2M4YzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsbUJBREE7QUFHQTtBQUNBO0FBREEsR0FIQTtBQU9BLFVBUEEsc0JBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQSxHQVRBO0FBV0E7QUFBQTtBQUNBLGtDQURBO0FBRUEsYUFGQTtBQUdBLGNBSEE7QUFJQSw2QkFKQTtBQUtBO0FBQ0Esd0JBREE7QUFFQSxnQkFGQTtBQUdBLGtCQUhBO0FBSUE7QUFKQTtBQUxBO0FBQUEsR0FYQTtBQXVCQTtBQUNBO0FBQ0E7QUFEQSxJQXhCQTtBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBaENBO0FBa0NBLFNBbENBLHFCQWtDQSxFQWxDQTtBQW9DQTtBQUNBLFlBREEsb0JBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQU5BO0FBT0EsVUFQQSxrQkFPQSxNQVBBLEVBT0E7QUFFQTtBQUVBLHNFQUNBLE9BREEsQ0FDQSxZQURBLEVBRUEsSUFGQSxDQUVBLFNBRkEsRUFHQSxLQUhBLENBR0EseUJBSEE7O0FBS0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQ0EsR0FEQSxHQUVBLElBRkEsQ0FFQTtBQUNBO0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsT0FWQTtBQVlBO0FBckNBO0FBcENBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9wYWdlcy93ZWxjb21lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvXCI+XHJcbiAgICAgIDxzZWFyY2gtZmlsdGVycyA6ZmlsdGVycz1cImZpbHRlclwiIHYtb246dXBkYXRlLXJlc3VsdHM9XCJvblVwZGF0ZVwiLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgIDx2ZWhpY2xlLWNhcmQgdi1mb3I9XCJjYXIgaW4gY2Fyc1wiIDpjYXI9XCJjYXJcIiA6a2V5PVwiY2FyLmlkXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxpbmZpbml0ZS1sb2FkaW5nIHNwaW5uZXI9XCJzcGlyYWxcIiA6aWRlbnRpZmllcj1cImluZmluaXRlSWRcIiBAaW5maW5pdGU9XCJvbk5leHRcIj48L2luZmluaXRlLWxvYWRpbmc+XHJcblxyXG4gIDwvZGl2PlxyXG5cclxuICA8ZGl2IGNsYXNzPVwieGw6ZmxleC0xIHhsOmZsZXggeGw6b3ZlcmZsb3cteS1oaWRkZW5cIj5cclxuICAgIDxzZWFyY2gtZmlsdGVycyA6ZmlsdGVycz1cImZpbHRlclwiIHYtb246dXBkYXRlLXJlc3VsdHM9XCJvblVwZGF0ZVwiLz5cclxuICAgIDxtYWluIGNsYXNzPVwicHktNiB4bDpmbGV4LTEgeGw6b3ZlcmZsb3cteC1oaWRkZW5cIj5cclxuICAgICAgPGRpdiB2LWZvcj1cIihsb2NhdGlvbiwgaSkgaW4gbG9jYXRpb25zXCIgOmNsYXNzPVwieydtdC02JzogaSA+IDB9XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInB4LTQgeGw6cHgtOFwiPlxyXG4gICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1ncmF5LTkwMCB0ZXh0LXhsXCI+e3sgbG9jYXRpb24udGl0bGUgfX08L2gzPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWdyYXktNjAwXCI+e3sgbG9jYXRpb24uZGVzY3JpcHRpb24gfX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm10LTYgc206b3ZlcmZsb3cteC1hdXRvIHNtOm92ZXJmbG93LXktaGlkZGVuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicHgtNCBzbTppbmxpbmUtZmxleCBzbTpwdC0yIHNtOnBiLTggeGw6cHgtOFwiPlxyXG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKHByb3BlcnR5LCBpKSBpbiBsb2NhdGlvbi5wcm9wZXJ0aWVzXCIgOmNsYXNzPVwieydtdC0xMCBzbTptbC00JzogaSA+IDAgfVwiIGNsYXNzPVwic206bXQtMCBzbTp3LTgwIHNtOmZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICA8UHJvcGVydHlDYXJkIDpwcm9wZXJ0eT1cInByb3BlcnR5XCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICA8L2Rpdj5cclxuXHJcblxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgY2FyIGZyb20gJy4uL21vZGVscy9jYXInXHJcbmltcG9ydCBJbmZpbml0ZUxvYWRpbmcgZnJvbSAndnVlLWluZmluaXRlLWxvYWRpbmcnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxheW91dDogJ2RlZmF1bHQnLFxyXG5cclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBJbmZpbml0ZUxvYWRpbmcsXHJcbiAgfSxcclxuXHJcbiAgbWV0YUluZm8gKCkge1xyXG4gICAgcmV0dXJuIHsgdGl0bGU6IHRoaXMuJHQoJ3dlbGNvbWUnKSB9XHJcbiAgfSxcclxuXHJcbiAgZGF0YTogKCkgPT4gKHtcclxuICAgIHRpdGxlICAgICA6IHdpbmRvdy5jb25maWcuYXBwTmFtZSxcclxuICAgIHBhZ2U6IDEsXHJcbiAgICBjYXJzOiBbXSxcclxuICAgIGluZmluaXRlSWQ6ICtuZXcgRGF0ZSgpLFxyXG4gICAgZmlsdGVyOiB7XHJcbiAgICAgIG9yZGVyQnkgICA6ICctZGF0ZScsXHJcbiAgICAgIGxpbWl0ICAgICA6IDUsXHJcbiAgICAgIG1ha2UgICAgICA6IG51bGwsXHJcbiAgICAgIG1vZGVsICAgICA6IG51bGxcclxuICAgIH0sXHJcbiAgfSksXHJcbiAgLy8gVE9ETyBhZGQgbnVsbCBvcHRpb24gdG8gc2VsZWN0cyBhbmQgZGlzcGxheSBpdC5cclxuICBjb21wdXRlZDogbWFwR2V0dGVycyh7XHJcbiAgICBhdXRoZW50aWNhdGVkOiAnYXV0aC9jaGVjaydcclxuICB9KSxcclxuXHJcbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuZmlsdGVyLm9yZGVyQnkgPSB0aGlzLiRzdG9yYWdlLmdldCgnb3JkZXJCeScsIHRoaXMuZmlsdGVyLm9yZGVyQnkpXHJcbiAgICAgIHRoaXMuZmlsdGVyLm1ha2UgICAgPSB0aGlzLiRzdG9yYWdlLmdldCgnbWFrZScsIHRoaXMuZmlsdGVyLm1ha2UpXHJcbiAgICAgIHRoaXMuZmlsdGVyLm1vZGVsICAgPSB0aGlzLiRzdG9yYWdlLmdldCgnbW9kZWwnLCB0aGlzLmZpbHRlci5tb2RlbClcclxuICB9LFxyXG5cclxuICBtb3VudGVkKCkgeyB9LFxyXG5cclxuICBtZXRob2RzOiB7XHJcbiAgICBvblVwZGF0ZShmaWx0ZXIpIHtcclxuICAgICAgdGhpcy5maWx0ZXIgPSBmaWx0ZXJcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy5jYXJzID0gW107XHJcbiAgICAgIHRoaXMuaW5maW5pdGVJZCArPSAxO1xyXG4gICAgfSxcclxuICAgIG9uTmV4dCgkc3RhdGUpIHtcclxuXHJcbiAgICAgIGxldCB2dWUgPSB0aGlzO1xyXG5cclxuICAgICAgbGV0IHF1ZXJ5ID0gY2FyXHJcbiAgICAgICAgLm9yZGVyQnkodGhpcy5vcmRlckJ5KVxyXG4gICAgICAgIC5wYWdlKHRoaXMucGFnZSlcclxuICAgICAgICAubGltaXQoTnVtYmVyKHRoaXMuZmlsdGVyLmxpbWl0KSlcclxuXHJcbiAgICAgIGlmKHRoaXMuZmlsdGVyLm1ha2UpIHtcclxuICAgICAgICBpZih0aGlzLmZpbHRlci5tb2RlbCkge1xyXG4gICAgICAgICAgcXVlcnkud2hlcmVJbignaWRlbnRpdHknLCBbdGhpcy5maWx0ZXIubWFrZSwgdGhpcy5maWx0ZXIubW9kZWxdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHF1ZXJ5LndoZXJlKCdpZGVudGl0eScsIHRoaXMuZmlsdGVyLm1ha2UpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBxdWVyeVxyXG4gICAgICAgIC5nZXQoKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgdnVlLnBhZ2UrKztcclxuICAgICAgICAgICAgICB2dWUuY2Fycy5wdXNoKC4uLnJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICRzdGF0ZS5sb2FkZWQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAkc3RhdGUuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function () {}\nvar staticRenderFns = []\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvd2VsY29tZS52dWU/MzQ0MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3Jlc291cmNlcy9qcy9wYWdlcy93ZWxjb21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZGQ4ZTllZSYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge31cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&\n");

/***/ }),

/***/ "./resources/js/models/car.js":
/*!************************************!*\
  !*** ./resources/js/models/car.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return User; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./resources/js/models/model.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar User =\n/*#__PURE__*/\nfunction (_Model) {\n  _inherits(User, _Model);\n\n  function User() {\n    _classCallCheck(this, User);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(User).apply(this, arguments));\n  }\n\n  _createClass(User, [{\n    key: \"resource\",\n    value: function resource() {\n      return 'cars';\n    }\n  }]);\n\n  return User;\n}(_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kZWxzL2Nhci5qcz8wNGVmIl0sIm5hbWVzIjpbIlVzZXIiLCJNb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OytCQUduQjtBQUNFLGFBQU8sTUFBUDtBQUNEOzs7O0VBTCtCQyw4QyIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9tb2RlbHMvY2FyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGVsIGZyb20gJy4vbW9kZWwnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgTW9kZWwge1xyXG5cclxuICByZXNvdXJjZSgpXHJcbiAge1xyXG4gICAgcmV0dXJuICdjYXJzJ1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/models/car.js\n");

/***/ }),

/***/ "./resources/js/models/model.js":
/*!**************************************!*\
  !*** ./resources/js/models/model.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Model; });\n/* harmony import */ var vue_api_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-api-query */ \"./node_modules/vue-api-query/build/index.js\");\n/* harmony import */ var vue_api_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_api_query__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar Model =\n/*#__PURE__*/\nfunction (_BaseModel) {\n  _inherits(Model, _BaseModel);\n\n  function Model() {\n    _classCallCheck(this, Model);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Model).apply(this, arguments));\n  }\n\n  _createClass(Model, [{\n    key: \"baseURL\",\n    // define a base url for a REST API\n    value: function baseURL() {\n      return '/api';\n    } // implement a default request method\n\n  }, {\n    key: \"request\",\n    value: function request(config) {\n      return this.$http.request(config);\n    } // override the default page and limit name to work with the following\n    // https://docs.spatie.be/laravel-query-builder/v2/advanced-usage/pagination/\n\n  }, {\n    key: \"parameterNames\",\n    value: function parameterNames() {\n      return {\n        include: 'include',\n        filter: 'filter',\n        sort: 'sort',\n        fields: 'fields',\n        append: 'append',\n        page: 'page[number]',\n        limit: 'page[size]'\n      };\n    }\n  }]);\n\n  return Model;\n}(vue_api_query__WEBPACK_IMPORTED_MODULE_0__[\"Model\"]);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbW9kZWxzL21vZGVsLmpzPzZkZmEiXSwibmFtZXMiOlsiTW9kZWwiLCJjb25maWciLCIkaHR0cCIsInJlcXVlc3QiLCJpbmNsdWRlIiwiZmlsdGVyIiwic29ydCIsImZpZWxkcyIsImFwcGVuZCIsInBhZ2UiLCJsaW1pdCIsIkJhc2VNb2RlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVxQkEsSzs7Ozs7Ozs7Ozs7OztBQUVuQjs4QkFDVztBQUNULGFBQU8sTUFBUDtBQUNELEssQ0FFRDs7Ozs0QkFDU0MsTSxFQUFRO0FBQ2YsYUFBTyxLQUFLQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJGLE1BQW5CLENBQVA7QUFDRCxLLENBRUQ7QUFDQTs7OztxQ0FDa0I7QUFDaEIsYUFBTztBQUNMRyxlQUFPLEVBQUcsU0FETDtBQUVMQyxjQUFNLEVBQUksUUFGTDtBQUdMQyxZQUFJLEVBQU0sTUFITDtBQUlMQyxjQUFNLEVBQUksUUFKTDtBQUtMQyxjQUFNLEVBQUksUUFMTDtBQU1MQyxZQUFJLEVBQU0sY0FOTDtBQU9MQyxhQUFLLEVBQUs7QUFQTCxPQUFQO0FBU0Q7Ozs7RUF4QmdDQyxtRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9tb2RlbHMvbW9kZWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RlbCBhcyBCYXNlTW9kZWwgfSBmcm9tICd2dWUtYXBpLXF1ZXJ5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwgZXh0ZW5kcyBCYXNlTW9kZWwge1xyXG5cclxuICAvLyBkZWZpbmUgYSBiYXNlIHVybCBmb3IgYSBSRVNUIEFQSVxyXG4gIGJhc2VVUkwgKCkge1xyXG4gICAgcmV0dXJuICcvYXBpJ1xyXG4gIH1cclxuXHJcbiAgLy8gaW1wbGVtZW50IGEgZGVmYXVsdCByZXF1ZXN0IG1ldGhvZFxyXG4gIHJlcXVlc3QgKGNvbmZpZykge1xyXG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucmVxdWVzdChjb25maWcpXHJcbiAgfVxyXG5cclxuICAvLyBvdmVycmlkZSB0aGUgZGVmYXVsdCBwYWdlIGFuZCBsaW1pdCBuYW1lIHRvIHdvcmsgd2l0aCB0aGUgZm9sbG93aW5nXHJcbiAgLy8gaHR0cHM6Ly9kb2NzLnNwYXRpZS5iZS9sYXJhdmVsLXF1ZXJ5LWJ1aWxkZXIvdjIvYWR2YW5jZWQtdXNhZ2UvcGFnaW5hdGlvbi9cclxuICBwYXJhbWV0ZXJOYW1lcyAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpbmNsdWRlOiAgJ2luY2x1ZGUnLFxyXG4gICAgICBmaWx0ZXI6ICAgJ2ZpbHRlcicsXHJcbiAgICAgIHNvcnQ6ICAgICAnc29ydCcsXHJcbiAgICAgIGZpZWxkczogICAnZmllbGRzJyxcclxuICAgICAgYXBwZW5kOiAgICdhcHBlbmQnLFxyXG4gICAgICBwYWdlOiAgICAgJ3BhZ2VbbnVtYmVyXScsXHJcbiAgICAgIGxpbWl0OiAgICAncGFnZVtzaXplXScsXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/models/model.js\n");

/***/ }),

/***/ "./resources/js/pages/welcome.vue":
/*!****************************************!*\
  !*** ./resources/js/pages/welcome.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome.vue?vue&type=template&id=cdd8e9ee& */ \"./resources/js/pages/welcome.vue?vue&type=template&id=cdd8e9ee&\");\n/* harmony import */ var _welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.vue?vue&type=script&lang=js& */ \"./resources/js/pages/welcome.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _welcome_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _welcome_vue_vue_type_template_id_cdd8e9ee___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"resources/js/pages/welcome.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvcGFnZXMvd2VsY29tZS52dWU/ODVhZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRjtBQUMzQjtBQUNMOzs7QUFHdEQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLGtGQUFNO0FBQ1IsRUFBRSwyRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRiIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9wYWdlcy93ZWxjb21lLnZ1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vd2VsY29tZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2RkOGU5ZWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vd2VsY29tZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3dlbGNvbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFxhZG1zXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2NkZDhlOWVlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2NkZDhlOWVlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2NkZDhlOWVlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi93ZWxjb21lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZGQ4ZTllZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjZGQ4ZTllZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3BhZ2VzL3dlbGNvbWUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/pages/welcome.vue\n");

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