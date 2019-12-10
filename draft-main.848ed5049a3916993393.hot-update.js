webpackHotUpdate("draft-main",{

/***/ "us27":
/*!**********************************************!*\
  !*** ../react-draft/src/components/Draft.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "mAmL");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "OXAJ");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "XvlX");
/* harmony import */ var _out_master_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../out/master-exports */ "OYln");
/* harmony import */ var _DemoWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DemoWrapper */ "31UU");
/* harmony import */ var _lib_can_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/can-render */ "emDf");
/* harmony import */ var _Settings_SettingsProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Settings/SettingsProvider */ "5/zE");
/* harmony import */ var _SelectedProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SelectedProvider */ "QtDZ");
/* harmony import */ var _StorageContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StorageContext */ "G1N/");
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/helpers */ "D1ID");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../global.css */ "hq9N");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_10__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }











const frameCss =  false ? undefined : {
  name: "194xl2d-frameCss",
  styles: "width:100%;height:100vh;border:none;display:block;&[data-tabsopen]{height:calc(100vh - 47px);};label:frameCss;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9YYWNoZWlyZWUvZGV2L2ZhbWlseXNlYXJjaC9yZWFjdC1kcmFmdC9zcmMvY29tcG9uZW50cy9EcmFmdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXb0IiLCJmaWxlIjoiL1VzZXJzL1hhY2hlaXJlZS9kZXYvZmFtaWx5c2VhcmNoL3JlYWN0LWRyYWZ0L3NyYy9jb21wb25lbnRzL0RyYWZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJy4uLy4uL291dC9tYXN0ZXItZXhwb3J0cydcbmltcG9ydCBEZW1vV3JhcHBlciBmcm9tICcuL0RlbW9XcmFwcGVyJ1xuaW1wb3J0IGNhblJlbmRlciBmcm9tICcuLi9saWIvY2FuLXJlbmRlcidcbmltcG9ydCBTZXR0aW5nc1Byb3ZpZGVyIGZyb20gJy4vU2V0dGluZ3MvU2V0dGluZ3NQcm92aWRlcidcbmltcG9ydCBTZWxlY3RlZFByb3ZpZGVyLCB7IFNlbGVjdGVkQ29udGV4dCB9IGZyb20gJy4vU2VsZWN0ZWRQcm92aWRlcidcbmltcG9ydCBTdG9yYWdlUHJvdmlkZXIsIHsgU3RvcmFnZUNvbnRleHQgfSBmcm9tICcuL1N0b3JhZ2VDb250ZXh0J1xuaW1wb3J0IHsgbXNnLCBwYXJzZU1zZyB9IGZyb20gJy4uL2xpYi9oZWxwZXJzJ1xuXG5jb25zdCBmcmFtZUNzcyA9IGNzc2BcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgJltkYXRhLXRhYnNvcGVuXSB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDdweCk7XG4gIH1cbmBcblxuaW1wb3J0ICcuLi9nbG9iYWwuY3NzJyAvL2VzbGludC1kaXNhYmxlLWxpbmVcblxuLy8gQWRkIHRoZSBiYWJlbCBzdGFuZGFsb25lIHNjcmlwdCBzbyB3ZSBjYW4gdHJhbnNwaWxlIGpzeCBsaXZlXG5jb25zdCBiYWJlbFN0YW5kYWxvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuYmFiZWxTdGFuZGFsb25lLnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vdW5wa2cuY29tL0BiYWJlbC9zdGFuZGFsb25lL2JhYmVsLm1pbi5qcycpXG5iYWJlbFN0YW5kYWxvbmUuc2V0QXR0cmlidXRlKCdkYXRhLXByZXNldHMnLCAnZXMyMDE1LHJlYWN0JylcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoYmFiZWxTdGFuZGFsb25lKVxuXG5jb25zdCB7IGNvbXBvbmVudFRyZWUgfSA9IENvbXBvbmVudHNcblxuZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3QgaWZyYW1lUmVmID0gdXNlUmVmKG51bGwpXG4gIGNvbnN0IHsgZ2V0SXRlbSB9ID0gdXNlQ29udGV4dChTdG9yYWdlQ29udGV4dClcbiAgY29uc3QgeyBTZWxlY3RlZENvbXBvbmVudCwgcHJvcFN0YXRlcyB9ID0gdXNlQ29udGV4dChTZWxlY3RlZENvbnRleHQpXG4gIGNvbnN0IHsgbWV0YSB9ID0gU2VsZWN0ZWRDb21wb25lbnRcbiAgY29uc3QgeyBwcm9wcyB9ID0gbWV0YVxuXG4gIGNvbnN0IHRhYnMgPSBnZXRJdGVtKCdEUkFGVF90YWJzJywgW10pXG4gIGNvbnN0IGNhblJlbmRlckNvbXBvbmVudCA9IHByb3BTdGF0ZXMgJiYgY2FuUmVuZGVyKHByb3BzLCBwcm9wU3RhdGVzKVxuICBjb25zdCBoYW5kbGVNZXNzYWdlID0gcGFyc2VNc2cocmVjZWl2ZU1lc3NhZ2UpXG5cbiAgY29uc3QgbWVzc2FnZVNlbGVjdGVkQ29tcG9uZW50ID0gKCkgPT5cbiAgICBtc2coaWZyYW1lUmVmLmN1cnJlbnQgJiYgaWZyYW1lUmVmLmN1cnJlbnQuY29udGVudFdpbmRvdywgJ1NFTEVDVEVEX0NPTVBPTkVOVCcsIG1ldGEpXG5cbiAgY29uc3QgbWVzc2FnZVByb3BTdGF0ZXMgPSAoKSA9PiBtc2coaWZyYW1lUmVmLmN1cnJlbnQgJiYgaWZyYW1lUmVmLmN1cnJlbnQuY29udGVudFdpbmRvdywgJ1BST1BfU1RBVEVTJywgcHJvcFN0YXRlcylcblxuICBmdW5jdGlvbiByZWNlaXZlTWVzc2FnZSh0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdERU1PX0lOSVRJQUxJWkVEJykge1xuICAgICAgbWVzc2FnZVNlbGVjdGVkQ29tcG9uZW50KClcbiAgICAgIG1lc3NhZ2VQcm9wU3RhdGVzKClcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlTWVzc2FnZSlcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG1lc3NhZ2VTZWxlY3RlZENvbXBvbmVudCgpLCBbU2VsZWN0ZWRDb21wb25lbnRdXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBtZXNzYWdlUHJvcFN0YXRlcygpLCBbcHJvcFN0YXRlc11cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxEZW1vV3JhcHBlciBwcm9wT2JqZWN0cz17cHJvcHN9IGNvbXBvbmVudFRyZWU9e2NvbXBvbmVudFRyZWV9PlxuICAgICAge2NhblJlbmRlckNvbXBvbmVudCAmJiAoXG4gICAgICAgIDxpZnJhbWVcbiAgICAgICAgICByZWY9e2lmcmFtZVJlZn1cbiAgICAgICAgICBjc3M9e2ZyYW1lQ3NzfVxuICAgICAgICAgIG9uTG9hZD17KCkgPT4ge1xuICAgICAgICAgICAgaWZyYW1lUmVmLmN1cnJlbnQuaGVpZ2h0ID0gYCR7aWZyYW1lUmVmLmN1cnJlbnQuY29udGVudERvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0fXB4YFxuICAgICAgICAgIH19XG4gICAgICAgICAgZGF0YS10YWJzb3Blbj17dGFicy5sZW5ndGggPiAwID8gJycgOiB1bmRlZmluZWR9XG4gICAgICAgICAgdGl0bGU9XCJkZW1vXCJcbiAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LlBVQkxJQ19QQVRIIHx8ICcvJ31kZW1vYH1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9EZW1vV3JhcHBlcj5cbiAgKVxufVxuXG4vLyBSZW5kZXIgdGhlIGRlbW8gaW4gdGhlIGRvbVxuUmVhY3RET00ucmVuZGVyKFxuICA8U3RvcmFnZVByb3ZpZGVyPlxuICAgIDxTZWxlY3RlZFByb3ZpZGVyIGNvbXBvbmVudHM9e0NvbXBvbmVudHN9PlxuICAgICAgPFNldHRpbmdzUHJvdmlkZXI+XG4gICAgICAgIDxQYWdlIC8+XG4gICAgICA8L1NldHRpbmdzUHJvdmlkZXI+XG4gICAgPC9TZWxlY3RlZFByb3ZpZGVyPlxuICA8L1N0b3JhZ2VQcm92aWRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKSJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
 //eslint-disable-line
// Add the babel standalone script so we can transpile jsx live


const babelStandalone = document.createElement('script');
babelStandalone.setAttribute('src', 'https://unpkg.com/@babel/standalone/babel.min.js');
babelStandalone.setAttribute('data-presets', 'es2015,react');
document.head.appendChild(babelStandalone);
const {
  componentTree
} = _out_master_exports__WEBPACK_IMPORTED_MODULE_3__["default"];

function Page() {
  const iframeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    getItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_StorageContext__WEBPACK_IMPORTED_MODULE_8__["StorageContext"]);
  const {
    SelectedComponent,
    propStates
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_SelectedProvider__WEBPACK_IMPORTED_MODULE_7__["SelectedContext"]);
  const {
    meta
  } = SelectedComponent;
  const {
    props
  } = meta;
  const tabs = getItem('DRAFT_tabs', []);
  const canRenderComponent = propStates && Object(_lib_can_render__WEBPACK_IMPORTED_MODULE_5__["default"])(props, propStates);
  const handleMessage = Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_9__["parseMsg"])(receiveMessage);

  const messageSelectedComponent = () => Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_9__["msg"])(iframeRef.current && iframeRef.current.contentWindow, 'SELECTED_COMPONENT', meta);

  const messagePropStates = () => Object(_lib_helpers__WEBPACK_IMPORTED_MODULE_9__["msg"])(iframeRef.current && iframeRef.current.contentWindow, 'PROP_STATES', propStates);

  function receiveMessage(type) {
    if (type === 'DEMO_INITIALIZED') {
      messageSelectedComponent();
      messagePropStates();
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    messageSelectedComponent(), [SelectedComponent];
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    messagePropStates(), [propStates];
  });
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_DemoWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    propObjects: props,
    componentTree: componentTree
  }, canRenderComponent && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("iframe", {
    ref: iframeRef,
    css: frameCss,
    onLoad: () => {
      iframeRef.current.height = `${iframeRef.current.contentDocument.body.scrollHeight}px`;
    },
    "data-tabsopen": tabs.length > 0 ? '' : undefined,
    title: "demo",
    src: `${"/META-react-draft-sandbox/" || false}demo`
  }));
} // Render the demo in the dom


react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_StorageContext__WEBPACK_IMPORTED_MODULE_8__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_SelectedProvider__WEBPACK_IMPORTED_MODULE_7__["default"], {
  components: _out_master_exports__WEBPACK_IMPORTED_MODULE_3__["default"]
}, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Settings_SettingsProvider__WEBPACK_IMPORTED_MODULE_6__["default"], null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])(Page, null)))), document.getElementById('app'));

/***/ })

})
//# sourceMappingURL=draft-main.848ed5049a3916993393.hot-update.js.map