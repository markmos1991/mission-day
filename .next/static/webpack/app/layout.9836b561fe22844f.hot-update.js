"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"4cf351e7c110\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3M/ODk4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjRjZjM1MWU3YzExMFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/styles/global.css\n"));

/***/ }),

/***/ "(app-client)/./src/app/components/headerSection.tsx":
/*!**********************************************!*\
  !*** ./src/app/components/headerSection.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Hooks/useScrollPosition */ \"(app-client)/./src/Hooks/useScrollPosition.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst Header = ()=>{\n    const scrollPosition = (0,_Hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_3__.UseScrollPosition)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"sticky top-0 z-50 transition-shadow \".concat(scrollPosition > 0 ? \"shadow bg-opacity-70 backdrop-blur-lg backdrop-filter\" : \"shadow-none\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex flex-wrap items-center space-evenly text-bold lg:w-2/5 md:ml-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"#street-art-section\",\n                            scroll: true,\n                            className: \"justify-end p-2 mr-5 bg-gray-100 border border-red-700 shadow-xl rounded-xl hover:text-gray-900 hover:bg-red-600 opacity-70\",\n                            children: \"Street Art\"\n                        }, void 0, false, {\n                            fileName: \"/Users/markamos/Desktop/MagnaWeb.nosync/mission-day/src/app/components/headerSection.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"#food\",\n                            className: \"p-2 mr-5 bg-gray-100 border border-red-700 shadow-xl rounded-xl hover:text-gray-900 hover:bg-red-600 opacity-70\",\n                            children: \"Food & Drink\"\n                        }, void 0, false, {\n                            fileName: \"/Users/markamos/Desktop/MagnaWeb.nosync/mission-day/src/app/components/headerSection.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"#upload\",\n                            className: \"p-2 mr-5 bg-gray-100 border border-red-700 shadow-xl rounded-xl hover:text-gray-900 hover:bg-red-600 opacity-70\",\n                            children: \"Upload Pics\"\n                        }, void 0, false, {\n                            fileName: \"/Users/markamos/Desktop/MagnaWeb.nosync/mission-day/src/app/components/headerSection.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/markamos/Desktop/MagnaWeb.nosync/mission-day/src/app/components/headerSection.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/markamos/Desktop/MagnaWeb.nosync/mission-day/src/app/components/headerSection.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/markamos/Desktop/MagnaWeb.nosync/mission-day/src/app/components/headerSection.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/markamos/Desktop/MagnaWeb.nosync/mission-day/src/app/components/headerSection.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL2hlYWRlclNlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRTBCO0FBQ0c7QUFDcUM7QUFHbEUsTUFBTUcsU0FBUztJQUNiLE1BQU1DLGlCQUFpQkYsMkVBQWlCQTtJQUt4QyxxQkFFRSw4REFBQ0c7UUFBSUMsV0FBVyx1Q0FBb0ksT0FBN0ZGLGlCQUFpQixJQUFJLDBEQUEwRDtrQkFDcEksNEVBQUNHO3NCQUlDLDRFQUFDQztnQkFBSUYsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQU1iLDhEQUFDTCxrREFBSUE7NEJBQ0pRLE1BQUs7NEJBQXNCQyxRQUFROzRCQUFNSixXQUFVO3NDQUE4SDs7Ozs7O3NDQUlsTCw4REFBQ0wsa0RBQUlBOzRCQUFDUSxNQUFLOzRCQUFRSCxXQUFVO3NDQUFrSDs7Ozs7O3NDQUkvSSw4REFBQ0wsa0RBQUlBOzRCQUFDUSxNQUFLOzRCQUFVSCxXQUFVO3NDQUFrSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWTdKO0tBekNNSDtBQTJDTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyU2VjdGlvbi50c3g/YzI0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcblwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBVc2VTY3JvbGxQb3NpdGlvbiB9IGZyb20gJy4uLy4uL0hvb2tzL3VzZVNjcm9sbFBvc2l0aW9uJztcblxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHNjcm9sbFBvc2l0aW9uID0gVXNlU2Nyb2xsUG9zaXRpb24oKTtcblxuXG5cbiAgXG4gIHJldHVybiAoXG5cbiAgICA8bmF2IGNsYXNzTmFtZT17YHN0aWNreSB0b3AtMCB6LTUwIHRyYW5zaXRpb24tc2hhZG93ICR7c2Nyb2xsUG9zaXRpb24gPiAwID8gXCJzaGFkb3cgYmctb3BhY2l0eS03MCBiYWNrZHJvcC1ibHVyLWxnIGJhY2tkcm9wLWZpbHRlclwiIDogXCJzaGFkb3ctbm9uZVwifWB9PlxuICAgICAgPGhlYWRlciA+XG5cblxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgZmxleC13cmFwIGl0ZW1zLWNlbnRlciBwLTUgbXgtYXV0byBtZDpmbGV4LXJvd1wiPlxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIHNwYWNlLWV2ZW5seSB0ZXh0LWJvbGQgbGc6dy0yLzUgbWQ6bWwtYXV0b1wiPlxuXG5cblxuXG5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgaHJlZj1cIiNzdHJlZXQtYXJ0LXNlY3Rpb25cIiBzY3JvbGw9e3RydWV9IGNsYXNzTmFtZT1cImp1c3RpZnktZW5kIHAtMiBtci01IGJnLWdyYXktMTAwIGJvcmRlciBib3JkZXItcmVkLTcwMCBzaGFkb3cteGwgcm91bmRlZC14bCBob3Zlcjp0ZXh0LWdyYXktOTAwIGhvdmVyOmJnLXJlZC02MDAgb3BhY2l0eS03MFwiPlxuICAgICAgICAgICAgIFN0cmVldCBBcnRcbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNmb29kXCIgY2xhc3NOYW1lPVwicC0yIG1yLTUgYmctZ3JheS0xMDAgYm9yZGVyIGJvcmRlci1yZWQtNzAwIHNoYWRvdy14bCByb3VuZGVkLXhsIGhvdmVyOnRleHQtZ3JheS05MDAgaG92ZXI6YmctcmVkLTYwMCBvcGFjaXR5LTcwXCI+XG4gICAgICAgICAgICAgRm9vZCAmIERyaW5rXG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjdXBsb2FkXCIgY2xhc3NOYW1lPVwicC0yIG1yLTUgYmctZ3JheS0xMDAgYm9yZGVyIGJvcmRlci1yZWQtNzAwIHNoYWRvdy14bCByb3VuZGVkLXhsIGhvdmVyOnRleHQtZ3JheS05MDAgaG92ZXI6YmctcmVkLTYwMCBvcGFjaXR5LTcwXCI+XG4gICAgICAgICAgICAgVXBsb2FkIFBpY3NcbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgIDwvbmF2PlxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgIDwvbmF2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJVc2VTY3JvbGxQb3NpdGlvbiIsIkhlYWRlciIsInNjcm9sbFBvc2l0aW9uIiwibmF2IiwiY2xhc3NOYW1lIiwiaGVhZGVyIiwiZGl2IiwiaHJlZiIsInNjcm9sbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/headerSection.tsx\n"));

/***/ })

});