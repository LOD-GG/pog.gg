webpackHotUpdate("static\\development\\pages\\summoner.js",{

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: getInfo, getleagueFirst, getleagueSecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInfo", function() { return getInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getleagueFirst", function() { return getleagueFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getleagueSecond", function() { return getleagueSecond; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var address = "http://localhost:8080";
function getInfo(name) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/userinfo", {
    params: {
      name: name
    }
  });
}
function getleagueFirst(encryptedSummonerId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/userleaguesFirst", {
    params: {
      encryptedSummonerId: encryptedSummonerId
    }
  });
}
function getleagueSecond(leagueId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/userleaguesSecond", {
    params: {
      leagueId: leagueId
    }
  });
}

/***/ })

})
//# sourceMappingURL=summoner.js.6eb322a788ad8d5c753e.hot-update.js.map