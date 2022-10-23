"use strict";
exports.id = "component---src-pages-404-tsxhead";
exports.ids = ["component---src-pages-404-tsxhead"];
exports.modules = {

/***/ "./src/pages/404.tsx?export=head":
/*!***************************************!*\
  !*** ./src/pages/404.tsx?export=head ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui/jsx-runtime */ "./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");


// styles



const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
};
const paragraphStyles = {
  marginBottom: 48
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4
};

// markup
const NotFoundPage = () => {
  return (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("main", {
    style: pageStyles,
    children: [(0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("title", {
      children: "Not found"
    }), (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1", {
      style: headingStyles,
      children: "Page not found"
    }), (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      style: paragraphStyles,
      children: ["Sorry", " ", (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
        role: "img",
        "aria-label": "Pensive emoji",
        children: "\uD83D\uDE14"
      }), " ", "we couldn\u2019t find what you were looking for.", (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}),  true ? (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [(0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), "Try creating a page in ", (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("code", {
          style: codeStyles,
          children: "src/pages/"
        }), ".", (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {})]
      }) : 0, (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("br", {}), (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, {
        to: "/",
        children: "Go home"
      }), "."]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-tsxhead.js.map