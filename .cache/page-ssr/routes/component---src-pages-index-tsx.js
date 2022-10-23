"use strict";
exports.id = "component---src-pages-index-tsx";
exports.ids = ["component---src-pages-index-tsx"];
exports.modules = {

/***/ "./src/common/hooks/useSiteMetaData.tsx":
/*!**********************************************!*\
  !*** ./src/common/hooks/useSiteMetaData.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSiteMetadata": () => (/* binding */ useSiteMetadata)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2703881467_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../public/page-data/sq/d/2703881467.json */ "./public/page-data/sq/d/2703881467.json");

const useSiteMetadata = () => {
  const data = _public_page_data_sq_d_2703881467_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return data.site.siteMetadata;
};

/***/ }),

/***/ "./src/components/core/SEO.tsx":
/*!*************************************!*\
  !*** ./src/components/core/SEO.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_hooks_useSiteMetaData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/hooks/useSiteMetaData */ "./src/common/hooks/useSiteMetaData.tsx");
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui/jsx-runtime */ "./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");




const defaultKeywords = '博客, 前端, gatsby, blog, frontend, framework, react, vue, node';
const SEO = ({
  title,
  description,
  meta,
  keywords,
  children
}) => {
  const {
    description: defaultDescription
  } = (0,_common_hooks_useSiteMetaData__WEBPACK_IMPORTED_MODULE_0__.useSiteMetadata)();
  let metas = [{
    name: `description`,
    content: description || defaultDescription
  }, {
    property: `og:title`,
    content: title
  }, {
    property: `og:description`,
    content: description || defaultDescription
  }, {
    property: `og:type`,
    content: `website`
  }, {
    name: `keywords`,
    content: keywords || defaultKeywords
  }];
  if (meta) {
    metas = metas.concat(meta);
  }
  return (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("title", {
      children: title
    }), metas.map(item => item.name ? (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      name: item.name,
      content: item.content
    }, item.name) : (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      property: item.property,
      content: item.content
    }, item.property)), children, (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("meta", {
      name: "theme-color",
      content: "var(--theme-ui-colors-background)"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ "./src/pages/index.tsx?export=default":
/*!********************************************!*\
  !*** ./src/pages/index.tsx?export=default ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");
/* harmony import */ var _components_core_SEO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/core/SEO */ "./src/components/core/SEO.tsx");
/* harmony import */ var theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui/jsx-runtime */ "./node_modules/theme-ui/jsx-runtime/dist/theme-ui-jsx-runtime.esm.js");



const IndexPage = () => (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Container, {
  sx: {
    mt: 6,
    maxWidth: ['100%', 600, 700, 800]
  },
  children: (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Heading, {
    sx: {
      textAlign: 'center'
    },
    children: "This is Index"
  })
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);
const Head = () => (0,theme_ui_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_core_SEO__WEBPACK_IMPORTED_MODULE_0__["default"], {
  title: "Index"
});

/***/ }),

/***/ "./public/page-data/sq/d/2703881467.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2703881467.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"description":"my blog reproduction"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsx.js.map