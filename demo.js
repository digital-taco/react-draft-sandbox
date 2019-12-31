(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo"],{

/***/ "+Y16":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"mAmL\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"OXAJ\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"D1ID\");\n/* harmony import */ var _out_master_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"OYln\");\n/* harmony import */ var _demo_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"HSFu\");\n/* harmony import */ var _demo_EmptyDemo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(\"il/q\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(\"XvlX\");\n/* eslint-disable import/no-named-as-default */\n\n\n\n\n\n\n\n\nfunction Page() {\n  const [SelectedComponent, setSelectedComponent] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(() => _demo_EmptyDemo__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  const [propStates, setPropStates] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n\n  function receiveMessage(type, data) {\n    if (undefined) console.log('DEMO | Message Received: ', type, data);\n\n    switch (type) {\n      // When a new component is selected in the explorer\n      case 'SELECTED_COMPONENT':\n        setSelectedComponent(() => _out_master_exports__WEBPACK_IMPORTED_MODULE_3__[\"default\"][data.componentHash]);\n        break;\n      // When the prop states have updated\n\n      case 'PROP_STATES':\n        setPropStates(data);\n        break;\n\n      default:\n    }\n  }\n\n  const handleMessage = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_2__[\"parseMsg\"])(receiveMessage); // Notify DRAFT that the demo has initialized\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    window.addEventListener('message', handleMessage);\n    Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_2__[\"msg\"])(window.top, 'DEMO_INITIALIZED', {\n      state: 'ready'\n    });\n    return () => window.removeEventListener('message', handleMessage);\n  }, []); // Wrap the demo in the provided Wrapper or just a fragment\n\n  const Wrapper = _out_master_exports__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Wrapper || react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_demo_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    key: SelectedComponent.meta.componentHash\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(Wrapper, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(SelectedComponent, Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_2__[\"deserializeAll\"])(propStates))));\n} // Render the demo in the dom\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(Page, null), document.getElementById('demo'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiK1kxNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9yZWFjdC1kcmFmdC9zcmMvY29tcG9uZW50cy9EZW1vLmpzP2Y5OGQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLW5hbWVkLWFzLWRlZmF1bHQgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgbXNnLCBwYXJzZU1zZywgZGVzZXJpYWxpemVBbGwgfSBmcm9tICcuLi9saWIvaGVscGVycydcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJy4uLy4uL291dC9tYXN0ZXItZXhwb3J0cydcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4vZGVtby9FcnJvckJvdW5kYXJ5J1xuaW1wb3J0IEVtcHR5RGVtbyBmcm9tICcuL2RlbW8vRW1wdHlEZW1vJ1xuXG5mdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbU2VsZWN0ZWRDb21wb25lbnQsIHNldFNlbGVjdGVkQ29tcG9uZW50XSA9IHVzZVN0YXRlKCgpID0+IEVtcHR5RGVtbylcbiAgY29uc3QgW3Byb3BTdGF0ZXMsIHNldFByb3BTdGF0ZXNdID0gdXNlU3RhdGUoe30pXG5cbiAgZnVuY3Rpb24gcmVjZWl2ZU1lc3NhZ2UodHlwZSwgZGF0YSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5ERUJVRykgY29uc29sZS5sb2coJ0RFTU8gfCBNZXNzYWdlIFJlY2VpdmVkOiAnLCB0eXBlLCBkYXRhKVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgLy8gV2hlbiBhIG5ldyBjb21wb25lbnQgaXMgc2VsZWN0ZWQgaW4gdGhlIGV4cGxvcmVyXG4gICAgICBjYXNlICdTRUxFQ1RFRF9DT01QT05FTlQnOlxuICAgICAgICBzZXRTZWxlY3RlZENvbXBvbmVudCgoKSA9PiBDb21wb25lbnRzW2RhdGEuY29tcG9uZW50SGFzaF0pXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIC8vIFdoZW4gdGhlIHByb3Agc3RhdGVzIGhhdmUgdXBkYXRlZFxuICAgICAgY2FzZSAnUFJPUF9TVEFURVMnOlxuICAgICAgICBzZXRQcm9wU3RhdGVzKGRhdGEpXG4gICAgICAgIGJyZWFrXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuICB9XG5cbiAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IHBhcnNlTXNnKHJlY2VpdmVNZXNzYWdlKVxuXG4gIC8vIE5vdGlmeSBEUkFGVCB0aGF0IHRoZSBkZW1vIGhhcyBpbml0aWFsaXplZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICBtc2cod2luZG93LnRvcCwgJ0RFTU9fSU5JVElBTElaRUQnLCB7IHN0YXRlOiAncmVhZHknIH0pXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgfSwgW10pXG5cbiAgLy8gV3JhcCB0aGUgZGVtbyBpbiB0aGUgcHJvdmlkZWQgV3JhcHBlciBvciBqdXN0IGEgZnJhZ21lbnRcbiAgY29uc3QgV3JhcHBlciA9IENvbXBvbmVudHMuV3JhcHBlciB8fCBSZWFjdC5GcmFnbWVudFxuXG4gIHJldHVybiAoXG4gICAgPEVycm9yQm91bmRhcnkga2V5PXtTZWxlY3RlZENvbXBvbmVudC5tZXRhLmNvbXBvbmVudEhhc2h9PlxuICAgICAgPFdyYXBwZXI+XG4gICAgICAgIDxTZWxlY3RlZENvbXBvbmVudCB7Li4uZGVzZXJpYWxpemVBbGwocHJvcFN0YXRlcyl9IC8+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgPC9FcnJvckJvdW5kYXJ5PlxuICApXG59XG5cbi8vIFJlbmRlciB0aGUgZGVtbyBpbiB0aGUgZG9tXG5SZWFjdERPTS5yZW5kZXIoPFBhZ2UgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZW1vJykpXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///+Y16\n");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("+Y16");
module.exports = __webpack_require__("1BUH");


/***/ }),

/***/ "HSFu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ErrorBoundary; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"mAmL\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"XvlX\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__() { return \"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\"; }\n\n\n\n\nconst errorCss =  false ? undefined : {\n  name: \"yen9ab-errorCss\",\n  styles: \"background:#fcc;color:#911;padding:20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;;label:errorCss;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9YYWNoZWlyZWUvZGV2L2ZhbWlseXNlYXJjaC9yZWFjdC1kcmFmdC9zcmMvY29tcG9uZW50cy9kZW1vL0Vycm9yQm91bmRhcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR29CIiwiZmlsZSI6Ii9Vc2Vycy9YYWNoZWlyZWUvZGV2L2ZhbWlseXNlYXJjaC9yZWFjdC1kcmFmdC9zcmMvY29tcG9uZW50cy9kZW1vL0Vycm9yQm91bmRhcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5jb25zdCBlcnJvckNzcyA9IGNzc2BcbiAgYmFja2dyb3VuZDogI2ZjYztcbiAgY29sb3I6ICM5MTE7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsXG4gICAgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuYFxuXG5jb25zdCBtZXNzYWdlQ3NzID0gY3NzYFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5jb25zdCBzdGFja0NTcyA9IGNzc2BcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBlcnJvcjogJycgfVxuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIC8vIFVwZGF0ZSBzdGF0ZSBzbyB0aGUgbmV4dCByZW5kZXIgd2lsbCBzaG93IHRoZSBmYWxsYmFjayBVSS5cbiAgICByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSwgZXJyb3IgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmhhc0Vycm9yID8gKFxuICAgICAgPGRpdiBjc3M9e2Vycm9yQ3NzfT5cbiAgICAgICAgPGRpdiBjc3M9e21lc3NhZ2VDc3N9Pnt0aGlzLnN0YXRlLmVycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgIDxkaXYgY3NzPXtzdGFja0NTc30+e3RoaXMuc3RhdGUuZXJyb3Iuc3RhY2t9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIClcbiAgfVxufVxuIl19 */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\nconst messageCss =  false ? undefined : {\n  name: \"1yygnny-messageCss\",\n  styles: \"margin-bottom:16px;font-size:20px;font-weight:bold;;label:messageCss;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9YYWNoZWlyZWUvZGV2L2ZhbWlseXNlYXJjaC9yZWFjdC1kcmFmdC9zcmMvY29tcG9uZW50cy9kZW1vL0Vycm9yQm91bmRhcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYXNCIiwiZmlsZSI6Ii9Vc2Vycy9YYWNoZWlyZWUvZGV2L2ZhbWlseXNlYXJjaC9yZWFjdC1kcmFmdC9zcmMvY29tcG9uZW50cy9kZW1vL0Vycm9yQm91bmRhcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5jb25zdCBlcnJvckNzcyA9IGNzc2BcbiAgYmFja2dyb3VuZDogI2ZjYztcbiAgY29sb3I6ICM5MTE7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsXG4gICAgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuYFxuXG5jb25zdCBtZXNzYWdlQ3NzID0gY3NzYFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5jb25zdCBzdGFja0NTcyA9IGNzc2BcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBlcnJvcjogJycgfVxuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIC8vIFVwZGF0ZSBzdGF0ZSBzbyB0aGUgbmV4dCByZW5kZXIgd2lsbCBzaG93IHRoZSBmYWxsYmFjayBVSS5cbiAgICByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSwgZXJyb3IgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmhhc0Vycm9yID8gKFxuICAgICAgPGRpdiBjc3M9e2Vycm9yQ3NzfT5cbiAgICAgICAgPGRpdiBjc3M9e21lc3NhZ2VDc3N9Pnt0aGlzLnN0YXRlLmVycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgIDxkaXYgY3NzPXtzdGFja0NTc30+e3RoaXMuc3RhdGUuZXJyb3Iuc3RhY2t9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIClcbiAgfVxufVxuIl19 */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\nconst stackCSs =  false ? undefined : {\n  name: \"szf9co-stackCSs\",\n  styles: \"white-space:pre-wrap;overflow-wrap:break-word;;label:stackCSs;\",\n  map: \"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9YYWNoZWlyZWUvZGV2L2ZhbWlseXNlYXJjaC9yZWFjdC1kcmFmdC9zcmMvY29tcG9uZW50cy9kZW1vL0Vycm9yQm91bmRhcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJvQiIsImZpbGUiOiIvVXNlcnMvWGFjaGVpcmVlL2Rldi9mYW1pbHlzZWFyY2gvcmVhY3QtZHJhZnQvc3JjL2NvbXBvbmVudHMvZGVtby9FcnJvckJvdW5kYXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcblxuY29uc3QgZXJyb3JDc3MgPSBjc3NgXG4gIGJhY2tncm91bmQ6ICNmY2M7XG4gIGNvbG9yOiAjOTExO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLFxuICAgICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbmBcblxuY29uc3QgbWVzc2FnZUNzcyA9IGNzc2BcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbmBcblxuY29uc3Qgc3RhY2tDU3MgPSBjc3NgXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbmBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHsgZXJyb3I6ICcnIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpIHtcbiAgICAvLyBVcGRhdGUgc3RhdGUgc28gdGhlIG5leHQgcmVuZGVyIHdpbGwgc2hvdyB0aGUgZmFsbGJhY2sgVUkuXG4gICAgcmV0dXJuIHsgaGFzRXJyb3I6IHRydWUsIGVycm9yIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5oYXNFcnJvciA/IChcbiAgICAgIDxkaXYgY3NzPXtlcnJvckNzc30+XG4gICAgICAgIDxkaXYgY3NzPXttZXNzYWdlQ3NzfT57dGhpcy5zdGF0ZS5lcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNzcz17c3RhY2tDU3N9Pnt0aGlzLnN0YXRlLmVycm9yLnN0YWNrfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\",\n  toString: _EMOTION_STRINGIFIED_CSS_ERROR__\n};\nclass ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      error: ''\n    };\n  }\n\n  static getDerivedStateFromError(error) {\n    // Update state so the next render will show the fallback UI.\n    return {\n      hasError: true,\n      error\n    };\n  }\n\n  render() {\n    return this.state.hasError ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n      css: errorCss\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n      css: messageCss\n    }, this.state.error.message), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"div\", {\n      css: stackCSs\n    }, this.state.error.stack)) : this.props.children;\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFNGdS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9yZWFjdC1kcmFmdC9zcmMvY29tcG9uZW50cy9kZW1vL0Vycm9yQm91bmRhcnkuanM/MWQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5jb25zdCBlcnJvckNzcyA9IGNzc2BcbiAgYmFja2dyb3VuZDogI2ZjYztcbiAgY29sb3I6ICM5MTE7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsXG4gICAgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuYFxuXG5jb25zdCBtZXNzYWdlQ3NzID0gY3NzYFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5jb25zdCBzdGFja0NTcyA9IGNzc2BcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBlcnJvcjogJycgfVxuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIC8vIFVwZGF0ZSBzdGF0ZSBzbyB0aGUgbmV4dCByZW5kZXIgd2lsbCBzaG93IHRoZSBmYWxsYmFjayBVSS5cbiAgICByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSwgZXJyb3IgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmhhc0Vycm9yID8gKFxuICAgICAgPGRpdiBjc3M9e2Vycm9yQ3NzfT5cbiAgICAgICAgPGRpdiBjc3M9e21lc3NhZ2VDc3N9Pnt0aGlzLnN0YXRlLmVycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgIDxkaXYgY3NzPXtzdGFja0NTc30+e3RoaXMuc3RhdGUuZXJyb3Iuc3RhY2t9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIClcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBckJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///HSFu\n");

/***/ })

},[[1,"runtime~demo","vendors","demo~draft-main"]]]);
});