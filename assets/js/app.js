/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../\u0000#2025/\u0000#february/drivebox/src/assets/js/accordion.js":
/*!**********************************************************************!*\
  !*** ../../../ #2025/ #february/drivebox/src/assets/js/accordion.js ***!
  \**********************************************************************/
/***/ (function() {

eval("$('.main_info__other_info_title').click(function (event) {\r\n    $(this).toggleClass('active').next().slideToggle(300);\r\n});\n\n//# sourceURL=webpack://brainscloud/../../../%00#2025/%00#february/drivebox/src/assets/js/accordion.js?");

/***/ }),

/***/ "../../../\u0000#2025/\u0000#february/drivebox/src/assets/js/add_to_cart.js":
/*!************************************************************************!*\
  !*** ../../../ #2025/ #february/drivebox/src/assets/js/add_to_cart.js ***!
  \************************************************************************/
/***/ (function() {

eval("$(document).ready(function() {\r\n    $('.minus').click(function () {\r\n        var $input = $(this).parent().find('input');\r\n        var count = parseInt($input.val()) - 1;\r\n        count = count < 1 ? 0 : count;\r\n        $input.val(count);\r\n        $input.change();\r\n        return false;\r\n    });\r\n    $('.plus').click(function () {\r\n        var $input = $(this).parent().find('input');\r\n        $input.val(parseInt($input.val()) + 1);\r\n        $input.change();\r\n        return false;\r\n    });\r\n});\r\n\r\n$(document).ready(\r\n    function() {\r\n\r\n $('.input_1').change(function()  {\r\n         if($(this).val()<=1)\r\n         {\r\n   $(\".minus_1\").addClass(\"disabled\");\r\n         }\r\n     else{\r\n        $(\".minus_1\").removeClass(\"disabled\");\r\n     }\r\n\r\n        });\r\n  });\n\n//# sourceURL=webpack://brainscloud/../../../%00#2025/%00#february/drivebox/src/assets/js/add_to_cart.js?");

/***/ }),

/***/ "../../../\u0000#2025/\u0000#february/drivebox/src/assets/js/add_to_wishlist.js":
/*!****************************************************************************!*\
  !*** ../../../ #2025/ #february/drivebox/src/assets/js/add_to_wishlist.js ***!
  \****************************************************************************/
/***/ (function() {

eval("window.addEventListener(\"DOMContentLoaded\", (event) => {\r\n    let addToWishlist = document.querySelectorAll('.you_may_also_like__card_wish');\r\n    let wishlistIcon = document.querySelectorAll('.you_may_also_like__card_wish img');\r\n\r\n    addToWishlist.forEach (function(addToWishlist) {\r\n        addToWishlist.addEventListener('click',function(){\r\n            this.classList.toggle('active');\r\n      })\r\n    })\r\n});\n\n//# sourceURL=webpack://brainscloud/../../../%00#2025/%00#february/drivebox/src/assets/js/add_to_wishlist.js?");

/***/ }),

/***/ "../../../\u0000#2025/\u0000#february/drivebox/src/assets/js/app.js":
/*!****************************************************************!*\
  !*** ../../../ #2025/ #february/drivebox/src/assets/js/app.js ***!
  \****************************************************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://brainscloud/../../../%00#2025/%00#february/drivebox/src/assets/js/app.js?");

/***/ }),

/***/ "../../../\u0000#2025/\u0000#february/drivebox/src/assets/js/wishlist_menu.js":
/*!**************************************************************************!*\
  !*** ../../../ #2025/ #february/drivebox/src/assets/js/wishlist_menu.js ***!
  \**************************************************************************/
/***/ (function() {

eval("window.addEventListener(\"DOMContentLoaded\", (event) => {\r\n    let wishlistBtn = document.querySelector('.wishlist_btn');\r\n    let wishlist = document.querySelector('.wishlist');\r\n    let wishlistItem = document.querySelectorAll('.wishlist__item');\r\n    let wishlistClose = document.querySelector('.wishlist__top .close');\r\n\r\n    wishlistBtn.addEventListener('click', function(){\r\n        event.preventDefault();\r\n        wishlist.classList.toggle('active');\r\n    })\r\n\r\n    wishlistClose.addEventListener('click', function(){\r\n        wishlist.classList.remove('active');\r\n    })\r\n\r\n\r\n    wishlistItem.forEach (function(wishlistItem) {\r\n        wishlistItem.addEventListener('click',function(){\r\n            event.preventDefault();\r\n            wishlist.classList.toggle('active');\r\n      })\r\n    })\r\n});\n\n//# sourceURL=webpack://brainscloud/../../../%00#2025/%00#february/drivebox/src/assets/js/wishlist_menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["../../../\u0000#2025/\u0000#february/drivebox/src/assets/js/accordion.js"]();
/******/ 	__webpack_modules__["../../../\u0000#2025/\u0000#february/drivebox/src/assets/js/add_to_cart.js"]();
/******/ 	__webpack_modules__["../../../\u0000#2025/\u0000#february/drivebox/src/assets/js/add_to_wishlist.js"]();
/******/ 	__webpack_modules__["../../../\u0000#2025/\u0000#february/drivebox/src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../../../\u0000#2025/\u0000#february/drivebox/src/assets/js/wishlist_menu.js"]();
/******/ 	
/******/ })()
;