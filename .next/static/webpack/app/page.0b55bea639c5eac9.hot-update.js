"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/SliderTest.jsx":
/*!***************************************!*\
  !*** ./app/components/SliderTest.jsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst SliderTest = ()=>{\n    _s();\n    const slides = [\n        {\n            image: '/images/Dashboardnew.png',\n            title: 'Dashboard',\n            content: 'Effortlessly manage your entities with a centralized dashboard that brings together critical company data. View and download general information, shareholder details, share classes, directors, officers, and cap tables—all with just a click.'\n        },\n        {\n            image: '/images/Mbook.png',\n            title: 'Digital Minute Book',\n            content: 'The digital minute book lets users upload multiple documents simultaneously, organize them automatically, and edit or enhance them with AI tools. Documents can be signed directly within the platform, and the entire minute book can be instantly downloaded for seamless corporate record management.'\n        },\n        {\n            image: '/images/Activity1.png',\n            title: 'The Activity Log',\n            content: 'The Activity Log serves as a centralized record of all corporate activities; each assigned a unique transaction ID powered by our distributed ledger. Easily download the log or securely share access with third parties for transparent and efficient management.'\n        }\n    ];\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const nextSlide = ()=>{\n        setCurrentIndex((prevIndex)=>(prevIndex + 1) % slides.length);\n    };\n    const prevSlide = ()=>{\n        setCurrentIndex((prevIndex)=>prevIndex === 0 ? slides.length - 1 : prevIndex - 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative w-full max-w-7xl mx-auto flex flex-col items-center justify-between overflow-hidden bg-gray-900 text-white rounded-lg shadow-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full h-[200px] lg:h-[600px] overflow-hidden rounded-t-lg lg:rounded-none lg:w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        initial: {\n                            opacity: 0,\n                            x: 50\n                        },\n                        animate: {\n                            opacity: 1,\n                            x: 0\n                        },\n                        exit: {\n                            opacity: 0,\n                            x: -50\n                        },\n                        transition: {\n                            duration: 0.5\n                        },\n                        className: \"absolute w-full h-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: slides[currentIndex].image,\n                            alt: \"Slide \".concat(currentIndex),\n                            className: \"rounded-lg object-cover\",\n                            fill: true,\n                            priority: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Vashu\\\\Desktop\\\\Woyce-avai\\\\next-js-ui-\\\\app\\\\components\\\\SliderTest.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    }, currentIndex, false, {\n                        fileName: \"C:\\\\Users\\\\Vashu\\\\Desktop\\\\Woyce-avai\\\\next-js-ui-\\\\app\\\\components\\\\SliderTest.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vashu\\\\Desktop\\\\Woyce-avai\\\\next-js-ui-\\\\app\\\\components\\\\SliderTest.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vashu\\\\Desktop\\\\Woyce-avai\\\\next-js-ui-\\\\app\\\\components\\\\SliderTest.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center lg:items-start lg:w-1/2 px-6 lg:px-12 py-8 text-center lg:text-left\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n                    mode: \"wait\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        initial: {\n                            opacity: 0,\n                            y: 50\n                        },\n                        animate: {\n                            opacity: 1,\n                            y: 0\n                        },\n                        exit: {\n                            opacity: 0,\n                            y: -50\n                        },\n                        transition: {\n                            duration: 0.5\n                        },\n                        className: \"w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl lg:text-4xl font-bold mb-4\",\n                                children: slides[currentIndex].title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vashu\\\\Desktop\\\\Woyce-avai\\\\next-js-ui-\\\\app\\\\components\\\\SliderTest.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg lg:text-xl leading-relaxed\",\n                                children: slides[currentIndex].content\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Vashu\\\\Desktop\\\\Woyce-avai\\\\next-js-ui-\\\\app\\\\components\\\\SliderTest.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, currentIndex, true, {\n                        fileName: \"C:\\\\Users\\\\Vashu\\\\Desktop\\\\Woyce-avai\\\\next-js-ui-\\\\app\\\\components\\\\SliderTest.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Vashu\\\\Desktop\\\\Woyce-avai\\\\next-js-ui-\\\\app\\\\components\\\\SliderTest.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vashu\\\\Desktop\\\\Woyce-avai\\\\next-js-ui-\\\\app\\\\components\\\\SliderTest.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: prevSlide,\n                className: \"absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-gray-700 text-white rounded-full shadow hover:bg-gray-600 transition\",\n                \"aria-label\": \"Previous Slide\",\n                children: \"❮\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vashu\\\\Desktop\\\\Woyce-avai\\\\next-js-ui-\\\\app\\\\components\\\\SliderTest.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: nextSlide,\n                className: \"absolute top-1/2 right-4 transform -translate-y-1/2 p-3 bg-gray-700 text-white rounded-full shadow hover:bg-gray-600 transition\",\n                \"aria-label\": \"Next Slide\",\n                children: \"❯\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vashu\\\\Desktop\\\\Woyce-avai\\\\next-js-ui-\\\\app\\\\components\\\\SliderTest.jsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-6 flex gap-3\",\n                children: slides.map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"w-3 h-3 rounded-full \".concat(currentIndex === index ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'),\n                        onClick: ()=>setCurrentIndex(index),\n                        \"aria-label\": \"Go to slide \".concat(index + 1)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Vashu\\\\Desktop\\\\Woyce-avai\\\\next-js-ui-\\\\app\\\\components\\\\SliderTest.jsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Vashu\\\\Desktop\\\\Woyce-avai\\\\next-js-ui-\\\\app\\\\components\\\\SliderTest.jsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Vashu\\\\Desktop\\\\Woyce-avai\\\\next-js-ui-\\\\app\\\\components\\\\SliderTest.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SliderTest, \"tusBbsahUVevXfyh6oH5R6YDC9Q=\");\n_c = SliderTest;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderTest);\nvar _c;\n$RefreshReg$(_c, \"SliderTest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NsaWRlclRlc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNpQztBQUNGO0FBQ3lCO0FBRXhELE1BQU1JLGFBQWE7O0lBQ2pCLE1BQU1DLFNBQVM7UUFDYjtZQUNFQyxPQUFPO1lBQ1BDLE9BQU87WUFDUEMsU0FDRTtRQUNKO1FBQ0E7WUFDRUYsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFNBQ0U7UUFDSjtRQUNBO1lBQ0VGLE9BQU87WUFDUEMsT0FBTztZQUNQQyxTQUNFO1FBQ0o7S0FDRDtJQUVELE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1XLFlBQVk7UUFDaEJELGdCQUFnQixDQUFDRSxZQUFjLENBQUNBLFlBQVksS0FBS1AsT0FBT1EsTUFBTTtJQUNoRTtJQUVBLE1BQU1DLFlBQVk7UUFDaEJKLGdCQUFnQixDQUFDRSxZQUNmQSxjQUFjLElBQUlQLE9BQU9RLE1BQU0sR0FBRyxJQUFJRCxZQUFZO0lBRXREO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ2IsMERBQWVBOzhCQUNkLDRFQUFDRCxpREFBTUEsQ0FBQ2EsR0FBRzt3QkFFVEUsU0FBUzs0QkFBRUMsU0FBUzs0QkFBR0MsR0FBRzt3QkFBRzt3QkFDN0JDLFNBQVM7NEJBQUVGLFNBQVM7NEJBQUdDLEdBQUc7d0JBQUU7d0JBQzVCRSxNQUFNOzRCQUFFSCxTQUFTOzRCQUFHQyxHQUFHLENBQUM7d0JBQUc7d0JBQzNCRyxZQUFZOzRCQUFFQyxVQUFVO3dCQUFJO3dCQUM1QlAsV0FBVTtrQ0FFViw0RUFBQ2Ysa0RBQUtBOzRCQUNKdUIsS0FBS25CLE1BQU0sQ0FBQ0ksYUFBYSxDQUFDSCxLQUFLOzRCQUMvQm1CLEtBQUssU0FBc0IsT0FBYmhCOzRCQUNkTyxXQUFVOzRCQUNWVSxJQUFJOzRCQUNKQyxRQUFROzs7Ozs7dUJBWkxsQjs7Ozs7Ozs7Ozs7Ozs7OzBCQW1CWCw4REFBQ007Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNiLDBEQUFlQTtvQkFBQ3lCLE1BQUs7OEJBQ3BCLDRFQUFDMUIsaURBQU1BLENBQUNhLEdBQUc7d0JBRVRFLFNBQVM7NEJBQUVDLFNBQVM7NEJBQUdXLEdBQUc7d0JBQUc7d0JBQzdCVCxTQUFTOzRCQUFFRixTQUFTOzRCQUFHVyxHQUFHO3dCQUFFO3dCQUM1QlIsTUFBTTs0QkFBRUgsU0FBUzs0QkFBR1csR0FBRyxDQUFDO3dCQUFHO3dCQUMzQlAsWUFBWTs0QkFBRUMsVUFBVTt3QkFBSTt3QkFDNUJQLFdBQVU7OzBDQUVWLDhEQUFDYztnQ0FBR2QsV0FBVTswQ0FDWFgsTUFBTSxDQUFDSSxhQUFhLENBQUNGLEtBQUs7Ozs7OzswQ0FFN0IsOERBQUN3QjtnQ0FBRWYsV0FBVTswQ0FDVlgsTUFBTSxDQUFDSSxhQUFhLENBQUNELE9BQU87Ozs7Ozs7dUJBWDFCQzs7Ozs7Ozs7Ozs7Ozs7OzBCQWtCWCw4REFBQ3VCO2dCQUNDQyxTQUFTbkI7Z0JBQ1RFLFdBQVU7Z0JBQ1ZrQixjQUFXOzBCQUNaOzs7Ozs7MEJBSUQsOERBQUNGO2dCQUNDQyxTQUFTdEI7Z0JBQ1RLLFdBQVU7Z0JBQ1ZrQixjQUFXOzBCQUNaOzs7Ozs7MEJBS0QsOERBQUNuQjtnQkFBSUMsV0FBVTswQkFDWlgsT0FBTzhCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxzQkFDZCw4REFBQ0w7d0JBRUNoQixXQUFXLHdCQUVWLE9BRENQLGlCQUFpQjRCLFFBQVEsYUFBYTt3QkFFeENKLFNBQVMsSUFBTXZCLGdCQUFnQjJCO3dCQUMvQkgsY0FBWSxlQUF5QixPQUFWRyxRQUFRO3VCQUw5QkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXakI7R0EvR01qQztLQUFBQTtBQWlITixpRUFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxWYXNodVxcRGVza3RvcFxcV295Y2UtYXZhaVxcbmV4dC1qcy11aS1cXGFwcFxcY29tcG9uZW50c1xcU2xpZGVyVGVzdC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuY29uc3QgU2xpZGVyVGVzdCA9ICgpID0+IHtcclxuICBjb25zdCBzbGlkZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9EYXNoYm9hcmRuZXcucG5nJyxcclxuICAgICAgdGl0bGU6ICdEYXNoYm9hcmQnLFxyXG4gICAgICBjb250ZW50OlxyXG4gICAgICAgICdFZmZvcnRsZXNzbHkgbWFuYWdlIHlvdXIgZW50aXRpZXMgd2l0aCBhIGNlbnRyYWxpemVkIGRhc2hib2FyZCB0aGF0IGJyaW5ncyB0b2dldGhlciBjcml0aWNhbCBjb21wYW55IGRhdGEuIFZpZXcgYW5kIGRvd25sb2FkIGdlbmVyYWwgaW5mb3JtYXRpb24sIHNoYXJlaG9sZGVyIGRldGFpbHMsIHNoYXJlIGNsYXNzZXMsIGRpcmVjdG9ycywgb2ZmaWNlcnMsIGFuZCBjYXAgdGFibGVz4oCUYWxsIHdpdGgganVzdCBhIGNsaWNrLicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogJy9pbWFnZXMvTWJvb2sucG5nJyxcclxuICAgICAgdGl0bGU6ICdEaWdpdGFsIE1pbnV0ZSBCb29rJyxcclxuICAgICAgY29udGVudDpcclxuICAgICAgICAnVGhlIGRpZ2l0YWwgbWludXRlIGJvb2sgbGV0cyB1c2VycyB1cGxvYWQgbXVsdGlwbGUgZG9jdW1lbnRzIHNpbXVsdGFuZW91c2x5LCBvcmdhbml6ZSB0aGVtIGF1dG9tYXRpY2FsbHksIGFuZCBlZGl0IG9yIGVuaGFuY2UgdGhlbSB3aXRoIEFJIHRvb2xzLiBEb2N1bWVudHMgY2FuIGJlIHNpZ25lZCBkaXJlY3RseSB3aXRoaW4gdGhlIHBsYXRmb3JtLCBhbmQgdGhlIGVudGlyZSBtaW51dGUgYm9vayBjYW4gYmUgaW5zdGFudGx5IGRvd25sb2FkZWQgZm9yIHNlYW1sZXNzIGNvcnBvcmF0ZSByZWNvcmQgbWFuYWdlbWVudC4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL0FjdGl2aXR5MS5wbmcnLFxyXG4gICAgICB0aXRsZTogJ1RoZSBBY3Rpdml0eSBMb2cnLFxyXG4gICAgICBjb250ZW50OlxyXG4gICAgICAgICdUaGUgQWN0aXZpdHkgTG9nIHNlcnZlcyBhcyBhIGNlbnRyYWxpemVkIHJlY29yZCBvZiBhbGwgY29ycG9yYXRlIGFjdGl2aXRpZXM7IGVhY2ggYXNzaWduZWQgYSB1bmlxdWUgdHJhbnNhY3Rpb24gSUQgcG93ZXJlZCBieSBvdXIgZGlzdHJpYnV0ZWQgbGVkZ2VyLiBFYXNpbHkgZG93bmxvYWQgdGhlIGxvZyBvciBzZWN1cmVseSBzaGFyZSBhY2Nlc3Mgd2l0aCB0aGlyZCBwYXJ0aWVzIGZvciB0cmFuc3BhcmVudCBhbmQgZWZmaWNpZW50IG1hbmFnZW1lbnQuJyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBzZXRDdXJyZW50SW5kZXgoKHByZXZJbmRleCkgPT4gKHByZXZJbmRleCArIDEpICUgc2xpZGVzLmxlbmd0aCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xyXG4gICAgc2V0Q3VycmVudEluZGV4KChwcmV2SW5kZXgpID0+XHJcbiAgICAgIHByZXZJbmRleCA9PT0gMCA/IHNsaWRlcy5sZW5ndGggLSAxIDogcHJldkluZGV4IC0gMVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctN3hsIG14LWF1dG8gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnXCI+XHJcbiAgICAgIHsvKiBJbWFnZSBTZWN0aW9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBoLVsyMDBweF0gbGc6aC1bNjAwcHhdIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLXQtbGcgbGc6cm91bmRlZC1ub25lIGxnOnctZnVsbFwiPlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICBrZXk9e2N1cnJlbnRJbmRleH1cclxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiA1MCB9fVxyXG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cclxuICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB4OiAtNTAgfX1cclxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBoLWZ1bGxcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e3NsaWRlc1tjdXJyZW50SW5kZXhdLmltYWdlfVxyXG4gICAgICAgICAgICAgIGFsdD17YFNsaWRlICR7Y3VycmVudEluZGV4fWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgICAgICAgIGZpbGxcclxuICAgICAgICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBDb250ZW50IFNlY3Rpb24gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgbGc6aXRlbXMtc3RhcnQgbGc6dy0xLzIgcHgtNiBsZzpweC0xMiBweS04IHRleHQtY2VudGVyIGxnOnRleHQtbGVmdFwiPlxyXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2UgbW9kZT1cIndhaXRcIj5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGtleT17Y3VycmVudEluZGV4fVxyXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDUwIH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG4gICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAsIHk6IC01MCB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGxnOnRleHQtNHhsIGZvbnQtYm9sZCBtYi00XCI+XHJcbiAgICAgICAgICAgICAge3NsaWRlc1tjdXJyZW50SW5kZXhdLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxnOnRleHQteGwgbGVhZGluZy1yZWxheGVkXCI+XHJcbiAgICAgICAgICAgICAge3NsaWRlc1tjdXJyZW50SW5kZXhdLmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogTmF2aWdhdGlvbiBCdXR0b25zICovfVxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgb25DbGljaz17cHJldlNsaWRlfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgbGVmdC00IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIHAtMyBiZy1ncmF5LTcwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBzaGFkb3cgaG92ZXI6YmctZ3JheS02MDAgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzIFNsaWRlXCJcclxuICAgICAgPlxyXG4gICAgICAgIOKdrlxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBvbkNsaWNrPXtuZXh0U2xpZGV9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvMiByaWdodC00IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXktMS8yIHAtMyBiZy1ncmF5LTcwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBzaGFkb3cgaG92ZXI6YmctZ3JheS02MDAgdHJhbnNpdGlvblwiXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cIk5leHQgU2xpZGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAg4p2vXHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgey8qIERvdHMgTmF2aWdhdGlvbiAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNiBmbGV4IGdhcC0zXCI+XHJcbiAgICAgICAge3NsaWRlcy5tYXAoKF8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMyBoLTMgcm91bmRlZC1mdWxsICR7XHJcbiAgICAgICAgICAgICAgY3VycmVudEluZGV4ID09PSBpbmRleCA/ICdiZy13aGl0ZScgOiAnYmctZ3JheS01MDAgaG92ZXI6YmctZ3JheS00MDAnXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDdXJyZW50SW5kZXgoaW5kZXgpfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPXtgR28gdG8gc2xpZGUgJHtpbmRleCArIDF9YH1cclxuICAgICAgICAgID48L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVyVGVzdDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJTbGlkZXJUZXN0Iiwic2xpZGVzIiwiaW1hZ2UiLCJ0aXRsZSIsImNvbnRlbnQiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJuZXh0U2xpZGUiLCJwcmV2SW5kZXgiLCJsZW5ndGgiLCJwcmV2U2xpZGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsIngiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInNyYyIsImFsdCIsImZpbGwiLCJwcmlvcml0eSIsIm1vZGUiLCJ5IiwiaDIiLCJwIiwiYnV0dG9uIiwib25DbGljayIsImFyaWEtbGFiZWwiLCJtYXAiLCJfIiwiaW5kZXgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SliderTest.jsx\n"));

/***/ })

});