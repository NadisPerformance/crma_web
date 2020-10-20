webpackHotUpdate_N_E("pages/before_rentals/edit",{

/***/ "./components/image/DeleteButton.js":
/*!******************************************!*\
  !*** ./components/image/DeleteButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./queries */ \"./components/image/queries.js\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/lib/react-apollo.esm.js\");\n/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/withData */ \"./lib/withData.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/belabed90/Documents/GitHub/crma_web/components/image/DeleteButton.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\nvar DeleteButton = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(DeleteButton, _React$Component);\n\n  var _super = _createSuper(DeleteButton);\n\n  function DeleteButton(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, DeleteButton);\n\n    _this = _super.call(this, props);\n    var carId = _this.props.router.query.carId;\n    _this.state = {\n      carId: carId,\n      car: null\n    };\n    _this.fariane = [{\n      title: \"Acceuil\",\n      path: \"/\"\n    }, {\n      title: \"Véhicules\",\n      path: \"/cars/\"\n    }];\n    _this.onDelete = _this.onDelete.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(DeleteButton, [{\n    key: \"onDelete\",\n    value: function onDelete() {\n      window.flash('Le véhicule a bien été supprimée.', 'success');\n      this.props.history.push(\"/cars/\");\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var imageId = this.props.imageId;\n      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_8__[\"Mutation\"], {\n        mutation: _queries__WEBPACK_IMPORTED_MODULE_7__[\"delete_image\"],\n        variables: {\n          id: imageId\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 7\n        }\n      }, function (postMutation) {\n        return __jsx(\"a\", {\n          style: {\n            margin: 3\n          },\n          onClick: function onClick(event) {\n            event.preventDefault(); //console.log(user)\n\n            postMutation().then(function (result) {\n              //this.props.history.goBack();\n              //console.log(result)\n              if (result.data.deleteImage.statut_code == 1) {\n                if (_this2.props.onDelete) _this2.props.onDelete(imageId);\n              }\n            });\n          },\n          className: \"btn btn-danger btn-sm\",\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 13\n          }\n        }, \" \", imageId, __jsx(\"i\", {\n          className: \"fa fa-trash\",\n          style: {\n            color: 'white'\n          },\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 19\n          }\n        }));\n      });\n    }\n  }]);\n\n  return DeleteButton;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = Object(_lib_withData__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_c = Object(next_router__WEBPACK_IMPORTED_MODULE_10__[\"withRouter\"])(DeleteButton)));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"%default%$withData\");\n$RefreshReg$(_c2, \"%default%\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbWFnZS9EZWxldGVCdXR0b24uanM/OWU2YiJdLCJuYW1lcyI6WyJEZWxldGVCdXR0b24iLCJwcm9wcyIsImNhcklkIiwicm91dGVyIiwicXVlcnkiLCJzdGF0ZSIsImNhciIsImZhcmlhbmUiLCJ0aXRsZSIsInBhdGgiLCJvbkRlbGV0ZSIsImJpbmQiLCJ3aW5kb3ciLCJmbGFzaCIsImhpc3RvcnkiLCJwdXNoIiwiaW1hZ2VJZCIsImRlbGV0ZV9pbWFnZSIsImlkIiwicG9zdE11dGF0aW9uIiwibWFyZ2luIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRoZW4iLCJyZXN1bHQiLCJkYXRhIiwiZGVsZXRlSW1hZ2UiLCJzdGF0dXRfY29kZSIsImNvbG9yIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aXRoRGF0YSIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsWTs7Ozs7QUFDSix3QkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQURrQixRQUVWQyxLQUZVLEdBRUEsTUFBS0QsS0FBTCxDQUFXRSxNQUFYLENBQWtCQyxLQUZsQixDQUVWRixLQUZVO0FBR2xCLFVBQUtHLEtBQUwsR0FBVztBQUNUSCxXQUFLLEVBQUVBLEtBREU7QUFFVEksU0FBRyxFQUFDO0FBRkssS0FBWDtBQUlBLFVBQUtDLE9BQUwsR0FBYyxDQUFDO0FBQUNDLFdBQUssRUFBQyxTQUFQO0FBQWlCQyxVQUFJLEVBQUM7QUFBdEIsS0FBRCxFQUE0QjtBQUFDRCxXQUFLLEVBQUMsV0FBUDtBQUFtQkMsVUFBSSxFQUFDO0FBQXhCLEtBQTVCLENBQWQ7QUFDQSxVQUFLQyxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0MsSUFBZCx5R0FBaEI7QUFSa0I7QUFTbkI7Ozs7K0JBQ1M7QUFDUkMsWUFBTSxDQUFDQyxLQUFQLENBQWEsbUNBQWIsRUFBa0QsU0FBbEQ7QUFDQSxXQUFLWixLQUFMLENBQVdhLE9BQVgsQ0FBbUJDLElBQW5CLENBQXdCLFFBQXhCO0FBQ0Q7Ozs2QkFDUTtBQUFBOztBQUFBLFVBQ0ZDLE9BREUsR0FDUyxLQUFLZixLQURkLENBQ0ZlLE9BREU7QUFFUCxhQUNFLE1BQUMscURBQUQ7QUFBVSxnQkFBUSxFQUFFQyxxREFBcEI7QUFBa0MsaUJBQVMsRUFBRTtBQUFDQyxZQUFFLEVBQUNGO0FBQUosU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLFVBQUFHLFlBQVk7QUFBQSxlQUNYO0FBQUksZUFBSyxFQUFFO0FBQUNDLGtCQUFNLEVBQUM7QUFBUixXQUFYO0FBQ0UsaUJBQU8sRUFBRSxpQkFBQ0MsS0FBRCxFQUFTO0FBQ2hCQSxpQkFBSyxDQUFDQyxjQUFOLEdBRGdCLENBRWhCOztBQUNBSCx3QkFBWSxHQUFHSSxJQUFmLENBQW9CLFVBQUNDLE1BQUQsRUFBVTtBQUM1QjtBQUNBO0FBQ0Esa0JBQUlBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxXQUFaLENBQXdCQyxXQUF4QixJQUFxQyxDQUF6QyxFQUEyQztBQUN2QyxvQkFBRyxNQUFJLENBQUMxQixLQUFMLENBQVdTLFFBQWQsRUFDQSxNQUFJLENBQUNULEtBQUwsQ0FBV1MsUUFBWCxDQUFvQk0sT0FBcEI7QUFDSDtBQUNGLGFBUEQ7QUFRRCxXQVpIO0FBYU0sbUJBQVMsRUFBQyx1QkFiaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFhMkNBLE9BYjNDLEVBY007QUFBRyxtQkFBUyxFQUFDLGFBQWI7QUFBMkIsZUFBSyxFQUFFO0FBQUNZLGlCQUFLLEVBQUM7QUFBUCxXQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBZE4sQ0FEVztBQUFBLE9BRGpCLENBREY7QUF1QkQ7Ozs7RUF4Q3dCQyw0Q0FBSyxDQUFDQyxTOztBQTJDbEIscUVBQUFDLDZEQUFRLE1BQUNDLCtEQUFVLENBQUNoQyxZQUFELENBQVgsQ0FBdkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL2ltYWdlL0RlbGV0ZUJ1dHRvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGRlbGV0ZV9pbWFnZX0gZnJvbSAnLi9xdWVyaWVzJ1xuaW1wb3J0IHsgIE11dGF0aW9uIH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uLy4uL2xpYi93aXRoRGF0YSdcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNsYXNzIERlbGV0ZUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHsgY2FySWQgfSA9IHRoaXMucHJvcHMucm91dGVyLnF1ZXJ5XG4gICAgdGhpcy5zdGF0ZT17XG4gICAgICBjYXJJZDogY2FySWQsXG4gICAgICBjYXI6bnVsbFxuICAgIH1cbiAgICB0aGlzLmZhcmlhbmU9IFt7dGl0bGU6XCJBY2NldWlsXCIscGF0aDpcIi9cIn0se3RpdGxlOlwiVsOpaGljdWxlc1wiLHBhdGg6XCIvY2Fycy9cIn1dXG4gICAgdGhpcy5vbkRlbGV0ZSA9IHRoaXMub25EZWxldGUuYmluZCh0aGlzKVxuICB9XG4gIG9uRGVsZXRlKCl7XG4gICAgd2luZG93LmZsYXNoKCdMZSB2w6loaWN1bGUgYSBiaWVuIMOpdMOpIHN1cHByaW3DqWUuJywgJ3N1Y2Nlc3MnKVxuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2NhcnMvXCIpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQge2ltYWdlSWR9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8TXV0YXRpb24gbXV0YXRpb249e2RlbGV0ZV9pbWFnZX0gdmFyaWFibGVzPXt7aWQ6aW1hZ2VJZH19ID5cbiAgICAgICAgICB7cG9zdE11dGF0aW9uID0+XG4gICAgICAgICAgICA8YSAgc3R5bGU9e3ttYXJnaW46M319XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCk9PntcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codXNlcilcbiAgICAgICAgICAgICAgICBwb3N0TXV0YXRpb24oKS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgICAgICAgICAgICAvL3RoaXMucHJvcHMuaGlzdG9yeS5nb0JhY2soKTtcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLmRlbGV0ZUltYWdlLnN0YXR1dF9jb2RlPT0xKXtcbiAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnByb3BzLm9uRGVsZXRlKVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25EZWxldGUoaW1hZ2VJZClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYW5nZXIgYnRuLXNtXCIgPiB7aW1hZ2VJZH1cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCIgc3R5bGU9e3tjb2xvcjond2hpdGUnfX0+PC9pPlxuICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICB9XG4gICAgICA8L011dGF0aW9uPlxuXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKHdpdGhSb3V0ZXIoRGVsZXRlQnV0dG9uKSlcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/image/DeleteButton.js\n");

/***/ })

})