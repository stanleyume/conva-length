/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/length.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/length.js":
/*!***********************!*\
  !*** ./src/length.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _units_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./units.js */ \"./src/units.js\");\n\r\n\r\nfunction validateUnit(unit){\r\n  if (_units_js__WEBPACK_IMPORTED_MODULE_0__[\"validUnits\"].indexOf(unit) > -1)\r\n    return true;\r\n  else\r\n    return false;\r\n}\r\n\r\nfunction length(value, fromUnit, toUnit) {\r\n  if (!validateUnit(fromUnit) || !validateUnit(toUnit))\r\n    return false;\r\n\r\n  var baseValue = value * _units_js__WEBPACK_IMPORTED_MODULE_0__[\"standardUnits\"][fromUnit];\r\n\r\n  return baseValue / _units_js__WEBPACK_IMPORTED_MODULE_0__[\"standardUnits\"][toUnit];\r\n\r\n}\r\n\r\n// console.log( validUnits );\r\nconsole.log( length('1', \"dam\", \"km\") );\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (length);\r\n\n\n//# sourceURL=webpack:///./src/length.js?");

/***/ }),

/***/ "./src/units.js":
/*!**********************!*\
  !*** ./src/units.js ***!
  \**********************/
/*! exports provided: standardUnits, validUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"standardUnits\", function() { return standardUnits; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validUnits\", function() { return validUnits; });\n\r\n\r\nvar standardUnits = {\r\n  m: 1,\r\n  pm: Math.pow(10, -12),\r\n  nm: Math.pow(10, -9),\r\n  um: Math.pow(10, -6),\r\n  mm: Math.pow(10, -3),\r\n  cm: Math.pow(10, -2),\r\n  dm: Math.pow(10, -1),\r\n  dam: Math.pow(10, 1),\r\n  hm: Math.pow(10, 2),\r\n  km: Math.pow(10, 3),\r\n  nmi: 1852,\r\n  in: 0.0254,\r\n  ft: 0.3048,\r\n  yd: 0.9144,\r\n  fm: 1.8288,\r\n  mi: 1609.344,\r\n  ld: 384402000,\r\n  au: 149597870700,\r\n  ly: 9460730472580800,\r\n  pc: (648000 / Math.PI) * 149597870700,\r\n};\r\n\r\n// Array of available units\r\nvar validUnits = Object.keys(standardUnits);\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/units.js?");

/***/ })

/******/ });