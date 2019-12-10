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
/*!*********************************************!*\
  !*** ../react-draft/src/components/Demo.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "mAmL");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "OXAJ");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/helpers */ "D1ID");
/* harmony import */ var _out_master_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../out/master-exports */ "OYln");
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorBoundary */ "I+H2");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "XvlX");







function deserializeAll(states) {
  return Object.fromEntries(Object.entries(states).map(([s, v]) => [s, Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_2__["deserialize"])(v)]));
}

function Page() {
  const [SelectedComponent, setSelectedComponent] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [propStates, setPropStates] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  function receiveMessage(type, data) {
    switch (type) {
      // When a new component is selected in the explorer
      case 'SELECTED_COMPONENT':
        setSelectedComponent(() => _out_master_exports__WEBPACK_IMPORTED_MODULE_3__["default"][data.componentHash]);
        break;
      // When the prop states have updated

      case 'PROP_STATES':
        setPropStates(data);
        break;

      default:
    }
  }

  const handleMessage = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_2__["parseMsg"])(receiveMessage); // Notify DRAFT that the demo has initialized

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('message', handleMessage);
    Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_2__["msg"])(window.top, 'DEMO_INITIALIZED', {
      state: 'ready'
    });
    return () => window.removeEventListener('message', handleMessage);
  }, []); // Wrap the demo in the provided Wrapper or just a fragment

  const DemoWrapper = _out_master_exports__WEBPACK_IMPORTED_MODULE_3__["default"].Wrapper || react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment;
  return SelectedComponent ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_ErrorBoundary__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: SelectedComponent.meta.componentHash
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(DemoWrapper, null, SelectedComponent && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(SelectedComponent, deserializeAll(propStates)))) : null;
} // Render the demo in the dom


react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(Page, null), document.getElementById('demo'));

/***/ }),

/***/ 1:
/*!**********************************************************************************************************************************************************************!*\
  !*** multi ../react-draft/src/components/Demo.js ../react-draft/node_modules/webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&quiet=true ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Xacheiree/dev/familysearch/react-draft/src/components/Demo.js */"+Y16");
module.exports = __webpack_require__(/*! /Users/Xacheiree/dev/familysearch/react-draft/node_modules/webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&quiet=true */"Mqo5");


/***/ }),

/***/ "I+H2":
/*!******************************************************!*\
  !*** ../react-draft/src/components/ErrorBoundary.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorBoundary; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "mAmL");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "XvlX");
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


/** @jsx jsx */



const errorCss =  false ? undefined : {
  name: "yen9ab-errorCss",
  styles: "background:#fcc;color:#911;padding:20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;;label:errorCss;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9YYWNoZWlyZWUvZGV2L2ZhbWlseXNlYXJjaC9yZWFjdC1kcmFmdC9zcmMvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlvQiIsImZpbGUiOiIvVXNlcnMvWGFjaGVpcmVlL2Rldi9mYW1pbHlzZWFyY2gvcmVhY3QtZHJhZnQvc3JjL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5jb25zdCBlcnJvckNzcyA9IGNzc2BcbiAgYmFja2dyb3VuZDogI2ZjYztcbiAgY29sb3I6ICM5MTE7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsXG4gICAgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuYFxuXG5jb25zdCBtZXNzYWdlQ3NzID0gY3NzYFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5jb25zdCBzdGFja0NTcyA9IGNzc2BcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBlcnJvcjogJycgfVxuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIC8vIFVwZGF0ZSBzdGF0ZSBzbyB0aGUgbmV4dCByZW5kZXIgd2lsbCBzaG93IHRoZSBmYWxsYmFjayBVSS5cbiAgICByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSwgZXJyb3IgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmhhc0Vycm9yID8gKFxuICAgICAgPGRpdiBjc3M9e2Vycm9yQ3NzfT5cbiAgICAgICAgPGRpdiBjc3M9e21lc3NhZ2VDc3N9Pnt0aGlzLnN0YXRlLmVycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgIDxkaXYgY3NzPXtzdGFja0NTc30+e3RoaXMuc3RhdGUuZXJyb3Iuc3RhY2t9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIClcbiAgfVxufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const messageCss =  false ? undefined : {
  name: "1yygnny-messageCss",
  styles: "margin-bottom:16px;font-size:20px;font-weight:bold;;label:messageCss;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9YYWNoZWlyZWUvZGV2L2ZhbWlseXNlYXJjaC9yZWFjdC1kcmFmdC9zcmMvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNzQiIsImZpbGUiOiIvVXNlcnMvWGFjaGVpcmVlL2Rldi9mYW1pbHlzZWFyY2gvcmVhY3QtZHJhZnQvc3JjL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuXG5jb25zdCBlcnJvckNzcyA9IGNzc2BcbiAgYmFja2dyb3VuZDogI2ZjYztcbiAgY29sb3I6ICM5MTE7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsXG4gICAgJ0NhbnRhcmVsbCcsICdGaXJhIFNhbnMnLCAnRHJvaWQgU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuYFxuXG5jb25zdCBtZXNzYWdlQ3NzID0gY3NzYFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuYFxuXG5jb25zdCBzdGFja0NTcyA9IGNzc2BcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBlcnJvcjogJycgfVxuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcikge1xuICAgIC8vIFVwZGF0ZSBzdGF0ZSBzbyB0aGUgbmV4dCByZW5kZXIgd2lsbCBzaG93IHRoZSBmYWxsYmFjayBVSS5cbiAgICByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSwgZXJyb3IgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmhhc0Vycm9yID8gKFxuICAgICAgPGRpdiBjc3M9e2Vycm9yQ3NzfT5cbiAgICAgICAgPGRpdiBjc3M9e21lc3NhZ2VDc3N9Pnt0aGlzLnN0YXRlLmVycm9yLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgIDxkaXYgY3NzPXtzdGFja0NTc30+e3RoaXMuc3RhdGUuZXJyb3Iuc3RhY2t9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIClcbiAgfVxufVxuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
const stackCSs =  false ? undefined : {
  name: "szf9co-stackCSs",
  styles: "white-space:pre-wrap;overflow-wrap:break-word;;label:stackCSs;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9YYWNoZWlyZWUvZGV2L2ZhbWlseXNlYXJjaC9yZWFjdC1kcmFmdC9zcmMvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cb0IiLCJmaWxlIjoiL1VzZXJzL1hhY2hlaXJlZS9kZXYvZmFtaWx5c2VhcmNoL3JlYWN0LWRyYWZ0L3NyYy9jb21wb25lbnRzL0Vycm9yQm91bmRhcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcblxuY29uc3QgZXJyb3JDc3MgPSBjc3NgXG4gIGJhY2tncm91bmQ6ICNmY2M7XG4gIGNvbG9yOiAjOTExO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCAnUm9ib3RvJywgJ094eWdlbicsICdVYnVudHUnLFxuICAgICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbmBcblxuY29uc3QgbWVzc2FnZUNzcyA9IGNzc2BcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbmBcblxuY29uc3Qgc3RhY2tDU3MgPSBjc3NgXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbmBcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHsgZXJyb3I6ICcnIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3IpIHtcbiAgICAvLyBVcGRhdGUgc3RhdGUgc28gdGhlIG5leHQgcmVuZGVyIHdpbGwgc2hvdyB0aGUgZmFsbGJhY2sgVUkuXG4gICAgcmV0dXJuIHsgaGFzRXJyb3I6IHRydWUsIGVycm9yIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5oYXNFcnJvciA/IChcbiAgICAgIDxkaXYgY3NzPXtlcnJvckNzc30+XG4gICAgICAgIDxkaXYgY3NzPXttZXNzYWdlQ3NzfT57dGhpcy5zdGF0ZS5lcnJvci5tZXNzYWdlfTwvZGl2PlxuICAgICAgICA8ZGl2IGNzcz17c3RhY2tDU3N9Pnt0aGlzLnN0YXRlLmVycm9yLnN0YWNrfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICApXG4gIH1cbn1cbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error
    };
  }

  render() {
    return this.state.hasError ? Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      css: errorCss
    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      css: messageCss
    }, this.state.error.message), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
      css: stackCSs
    }, this.state.error.stack)) : this.props.children;
  }

}

/***/ })

},[[1,"runtime~demo","vendors","demo~draft-main"]]]);
});
//# sourceMappingURL=demo.js.map