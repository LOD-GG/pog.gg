webpackHotUpdate("static\\development\\pages\\summoner.js",{

/***/ "./components/Summoner/Leagues/Leagues.js":
/*!************************************************!*\
  !*** ./components/Summoner/Leagues/Leagues.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../api/api */ "./api/api.js");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib */ "./components/lib.js");

var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Leagues\\Leagues.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Leauges = function Leauges(_ref) {
  var name = _ref.name,
      matchList = _ref.matchList,
      matchesData = _ref.matchesData;

  var getparticipantId = function getparticipantId(match) {
    var participantId = 0;
    match.participantIdentities.map(function (v) {
      if (v.player.summonerName.toLowerCase() == name.toLowerCase()) {
        participantId = v.participantId;
      }
    });
    return participantId;
  };

  var getTimestamp = function getTimestamp(ts) {
    var returnData = "";
    var writeDay = new Date(ts);
    var nowtimestamp = new Date().getTime();
    var now = new Date(nowtimestamp);
    var minus;

    if (now.getFullYear() > writeDay.getFullYear()) {
      minus = now.getFullYear() - writeDay.getFullYear();
      returnData = minus + "년 전";
    } else if (now.getMonth() > writeDay.getMonth()) {
      minus = now.getMonth() - writeDay.getMonth();
      returnData = minus + "달 전";
    } else if (now.getDate() > writeDay.getDate()) {
      minus = now.getDate() - writeDay.getDate();
      returnData = minus + "일 전";
    } else if (now.getDate() == writeDay.getDate()) {
      var nowTime = now.getTime();
      var writeTime = writeDay.getTime();

      if (nowTime > writeTime) {
        var sec = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(nowTime - writeTime) / 1000;

        var day = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(sec / 60 / 60 / 24);

        sec = sec - day * 60 * 60 * 24;

        var hour = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(sec / 60 / 60);

        sec = sec - hour * 60 * 60;

        var min = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(sec / 60);

        sec = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(sec - min * 60);

        if (hour > 0) {
          returnData = hour + "시간 전";
        } else if (min > 0) {
          returnData = min + "분 전";
        } else if (sec > 0) {
          returnData = sec + "초 전";
        }
      }
    }

    return returnData;
  };

  return __jsx("div", {
    className: "jsx-628099662" + " " + "GameItemList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, matchesData.map(function (v, i) {
    var match = matchList.matches.find(function (item) {
      return item.gameId === v.gameId;
    });
    var participantIdentitie = v.participantIdentities.find(function (item) {
      return item.player.summonerName.toLowerCase() == name.toLowerCase();
    });
    var participant = v.participants.find(function (item) {
      return item.participantId === participantIdentitie.participantId;
    });
    var playerStat = participant.stats; //console.log(match)
    //console.log(v);

    var gamemode = "";
    var gameMinute = 0;
    var gameSecond = 0;
    var isWin = "";
    var time = getTimestamp(match.timestamp);
    var gameData = _lib__WEBPACK_IMPORTED_MODULE_4__["GetGameData"];
    var champData = gameData.getChampData(match.champion);
    var spellData1 = gameData.getSpellUrl(participant.spell1Id);
    var spellData2 = gameData.getSpellUrl(participant.spell2Id); //let participantId = getparticipantId(v)
    //let userInfo = v.participants[participantId-1]

    console.log(v, match, participantIdentitie, participant);
    console.log(champData); //타임스탬프 판별
    //게임 모드 판별

    if (v.queueId === 420) {
      gamemode = "솔로랭크";
    } else if (v.queueId === 430) {
      gamemode = "일반게임";
    } else if (v.queueId === 440) {
      gamemode = "자유랭크";
    }

    if (v.teams[1].win === "Win") {
      isWin = "승리";
    } else if (v.teams[1].win === "Fail") {
      isWin = "패배";
    } // 게임 길이 판별


    gameMinute = Math.floor(v.gameDuration / 60);
    gameSecond = Math.floor(v.gameDuration % 60); //게임 승리 판별

    if (participant.stats.win) {
      isWin = "Win";
    } else {
      isWin = "Lose";
    }

    return __jsx("div", {
      key: i,
      className: "jsx-628099662" + " " + "GameItemWrap",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + ("GameItem " + "".concat(isWin) || false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "Content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "GameStats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "GameType",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, gamemode), __jsx("div", {
      className: "jsx-628099662" + " " + "TimeStamp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, time)), __jsx("div", {
      className: "jsx-628099662" + " " + "Bar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-628099662" + " " + "GameResult",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, isWin), __jsx("div", {
      className: "jsx-628099662" + " " + "GameLength",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, gameMinute, "\uBD84 ", gameSecond, "\uCD08")), __jsx("div", {
      className: "jsx-628099662" + " " + "GameSettingInfo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx("img", {
      src: champData,
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-628099662" + " " + "SummonerSpell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "Spell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx("img", {
      src: spellData1,
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "Spell",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("img", {
      src: spellData2,
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }))), __jsx("div", {
      className: "jsx-628099662" + " " + "Runes",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "Rune",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("img", {
      src: "https://opgg-static.akamaized.net/images/lol/perk/".concat(playerStat.perk0, ".png?image=w_22&v=1"),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "Rune",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx("img", {
      src: "https://opgg-static.akamaized.net/images/lol/perkStyle/".concat(playerStat.perkSubStyle, ".png?image=w_22&v=2"),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    })))), __jsx("div", {
      className: "jsx-628099662" + " " + "KDA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "KDA",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-628099662" + " " + "Kill",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, playerStat.kills), ' ', "/", ' ', __jsx("span", {
      className: "jsx-628099662" + " " + "Death",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, playerStat.deaths), ' ', "/", ' ', __jsx("span", {
      className: "jsx-628099662" + " " + "Assist",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, playerStat.assists)), __jsx("div", {
      className: "jsx-628099662" + " " + "KDARatio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-628099662" + " " + "KDARatio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, playerStat.deaths === 0 ? "Perfect" : ((participant.stats.kills + participant.stats.assists) / participant.stats.deaths).toFixed(2)), ' ', "  \uD3C9\uC810")), __jsx("div", {
      className: "jsx-628099662" + " " + "Stats",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "Level",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "\uB808\uBCA8", playerStat.champLevel), __jsx("div", {
      className: "jsx-628099662" + " " + "CS",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, playerStat.totalMinionsKilled + playerStat.neutralMinionsKilled, " (", ((playerStat.totalMinionsKilled + playerStat.neutralMinionsKilled) / gameMinute).toFixed(1), ")"), " CS"), __jsx("div", {
      "class": "CKRate tip tpd-delegation-uid-1",
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, "\uD0AC\uAD00\uC5EC 61%")), __jsx("div", {
      className: "jsx-628099662" + " " + "Items",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "ItemList",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "Item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getItemUrl(participant.stats.item0),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "Item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getItemUrl(participant.stats.item1),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "Item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getItemUrl(participant.stats.item2),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "Item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getItemUrl(participant.stats.item6),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "Item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getItemUrl(participant.stats.item3),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "Item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getItemUrl(participant.stats.item4),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "Item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getItemUrl(participant.stats.item5),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    })))), __jsx("div", {
      className: "jsx-628099662" + " " + "FollowPlayers Names",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "Team",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getChampData(v.participants[0].championId),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-628099662" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }, v.participantIdentities[0].player.summonerName))), __jsx("div", {
      className: "jsx-628099662" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getChampData(v.participants[1].championId),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-628099662" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, v.participantIdentities[1].player.summonerName))), __jsx("div", {
      className: "jsx-628099662" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getChampData(v.participants[2].championId),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-628099662" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, v.participantIdentities[2].player.summonerName))), __jsx("div", {
      className: "jsx-628099662" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getChampData(v.participants[3].championId),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-628099662" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, v.participantIdentities[3].player.summonerName))), __jsx("div", {
      className: "jsx-628099662" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getChampData(v.participants[4].championId),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-628099662" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, v.participantIdentities[4].player.summonerName)))), __jsx("div", {
      className: "jsx-628099662" + " " + "Team",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getChampData(v.participants[5].championId),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-628099662" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, v.participantIdentities[5].player.summonerName))), __jsx("div", {
      className: "jsx-628099662" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getChampData(v.participants[6].championId),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-628099662" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, v.participantIdentities[6].player.summonerName))), __jsx("div", {
      className: "jsx-628099662" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getChampData(v.participants[7].championId),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-628099662" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, v.participantIdentities[7].player.summonerName))), __jsx("div", {
      className: "jsx-628099662" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getChampData(v.participants[8].championId),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-628099662" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199
      },
      __self: this
    }, v.participantIdentities[8].player.summonerName))), __jsx("div", {
      className: "jsx-628099662" + " " + "Summoner",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-628099662" + " " + "ChampionImage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, __jsx("img", {
      src: gameData.getChampData(v.participants[9].championId),
      className: "jsx-628099662",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-628099662" + " " + "SummonerName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "jsx-628099662" + " " + "Link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, v.participantIdentities[9].player.summonerName))))))));
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "628099662",
    __self: this
  }, ".GameContents{width:700px;height:700px;}.GameItemWrap{border-radius:3px;margin-bottom:8px;}.GameItem{position:relative;background:none;}.GameItem.Win>.Content{table-layout:fixed;background-color:#a3cfec;border-color:#99b9cf;}.GameItem.Lose>.Content{table-layout:fixed;background-color:#E2B6B3;border-color:#99b9cf;}.GameItem>.Content{display:table;width:689px;height:97px;border-collase:collapse;border:1px solid #cdd2d2;}.GameItem>.Content>.GameStats{width:70px;text-align:center;font-size:11px;color:#555;line-height:16px;}.GameItem>.Content>div{display:table-cell;height:96px;vertical-align:middle;}.GameItem>.Content>.GameStats>.GameType{font-weight:bold;width:70px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}._timeCountAssigned{font-size:inherit;cursor:help;}.GameItem.Lose>.Content>.GameStats>.Bar{display:block;width:27px;margin:5px auto;height:2px;background:#cea7a7;}.GameItem.Lose>.Content>.GameStats>.GameResult{color:#c6443e;}.GameItem.Win>.Content>.GameStats>.Bar{display:block;width:27px;margin:5px auto;height:2px;background:#99b9cf;}.GameItem.Win>.Content>.GameStats>.GameResult{color:#1a78ae;}.GameItem>.Content>.GameSettingInfo{width:110px;font-size:0;}.GameItem>.Content>.GameSettingInfo>.ChampionImage{display:inline-block;width:46px;height:46px;vertical-align:middle;border-radius:50%;overflow:hidden;}.GameItem>.Content>.GameSettingInfo>.ChampionImage img{width:46px;height:46px;}.GameItem>.Content>.GameSettingInfo>.SummonerSpell{display:inline-block;vertical-align:middle;margin-left:4px;}.GameItem>.Content>.GameSettingInfo>.SummonerSpell img{width:22px;height:22px;margin-top:2px;}.GameItem>.Content>.GameSettingInfo>.SummonerSpell>.Spell:first-child{margin-left:0;}.GameItem>.Content>.GameSettingInfo>.Runes{display:inline-block;vertical-align:middle;margin-left:4px;}.GameItem>.Content>.GameSettingInfo>.Runes>.Rune{width:22px;height:22px;margin-top:2px;}.GameItem>.Content>.GameSettingInfo>.Runes>.Rune:first-child{margin-top:0;}.GameItem>.Content>.GameSettingInfo>.Runes>.Rune:first-child>img{background:#000;}.GameItem>.Content>.GameSettingInfo>.Runes>.Rune img{display:block;width:100%;height:100%;border-radius:50%;}.GameItem>.Content>.GameSettingInfo>.ChampionName{margin-top:8px;font-size:11px;color:#555;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.GameItem>.Content>.GameSettingInfo>.ChampionName>a{-webkit-text-decoration:none;text-decoration:none;color:inherit;}.GameItem>.Content>.KDA{font-size:11px;font-weight:bold;text-align:center;}.GameItem>.Content>.KDA>.KDA{color:#879292;font-size:15px;white-space:nowrap;}.GameItem>.Content>.KDA>.KDA>.Kill,.GameItem>.Content>.KDA>.KDA>.Assist{color:#555e5e;}.GameItem>.Content>.KDA>.KDA>.Death{color:#c6443e;}.GameItem>.Content>.KDA>.KDA>.Kill,.GameItem>.Content>.KDA>.KDA>.Assist{color:#555e5e;}.GameItem>.Content>.KDA>.KDARatio{color:#555e5e;font-size:12px;font-weight:bold;margin-top:6px;}.GameItem>.Content>.KDA>.KDARatio .KDARatio{color:#353a3a;}.GameItem>.Content>.Items{font-size:0;}.GameItem>.Content>div{display:table-cell;height:96px;vertical-align:middle;}.GameItem>.Content>.Items .ItemList{width:96px;margin:0 auto;}.GameItem.Win>.Content>.Items>.ItemList>.Item{background-color:#99b9cf;}.GameItem>.Content>.Items .Item{display:inline-block;width:22px;height:22px;border-radius:3px;margin-top:2px;margin-right:2px;overflow:hidden;}.GameItem>.Content>.Items .Item img{width:22px;height:22px;}.GameItem>.Content>.Items .Item>.Image{width:100%;height:100%;}.GameItem>.Content>.Items .Trinket{margin-top:7px;color:#353a3a;line-height:13px;font-size:11px;text-align:center;}.GameItem>.Content>.Items .Trinket img{vertical-align:middle;}.GameItem>.Content>.FollowPlayers{width:170px;font-size:0;}.GameItem>.Content>.FollowPlayers.Names>.Team{float:left;width:50%;}.GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner{display:block;width:80px;height:18px;margin-left:3px;text-align:left;white-space:nowrap;}.GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.ChampionImage{display:inline-block;vertical-align:middle;margin-right:3px;}.GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.ChampionImage img{width:16px;height:16px;}.GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.SummonerName{display:inline-block;max-width:60px;vertical-align:middle;font-size:11px;color:#555;}.GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.SummonerName>.Link{display:block;color:inherit;-webkit-text-decoration:none;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;}.GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner.Requester>.SummonerName>.Link{color:#222;}.GameItem>.Content>.Stats{width:90px;font-size:11px;text-align:center;line-height:18px;color:#555e5e;}.GameItem>.Content>.Stats>.CKRate{color:#c6443e;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXGxvZGdnX2Zyb250ZW5kXFxjb21wb25lbnRzXFxTdW1tb25lclxcTGVhZ3Vlc1xcTGVhZ3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTmlCLEFBR3FDLEFBSU0sQUFJQSxBQUlDLEFBS0EsQUFLTCxBQU9ILEFBT1EsQUFLRixBQU9DLEFBSUosQUFPQSxBQUdBLEFBT0EsQUFHRixBQUlTLEFBUVYsQUFJVSxBQUtWLEFBS0csQUFHTyxBQUtWLEFBS0UsQUFHRyxBQUdGLEFBTUMsQUFTTSxBQUlOLEFBS0QsQUFLQSxBQUdBLEFBR0EsQUFHQSxBQU1BLEFBR0YsQUFHTyxBQUtSLEFBSWMsQUFHSixBQVNWLEFBSUEsQUFJSSxBQU9PLEFBR1YsQUFJRCxBQUlHLEFBUU8sQUFLVixBQUlVLEFBT1AsQUFRSCxBQUdBLEFBT0csV0FsT0ksQUF1RE4sQUFTQSxBQWFBLEFBa0VFLEFBZ0JGLEFBSUEsQUFrQkYsQUFpQkUsQUFtQmhCLEFBR21CLENBelBGLEFBd0VELEFBNEZoQixBQTBDZ0IsQ0EvRmhCLENBekZnQixBQThCRCxBQU9mLEFBR2UsQUFPZixBQTZCQSxBQW1CZSxBQXdCSSxBQUtuQixBQUdBLEFBR0EsQUFHbUIsQUFNbkIsQUFxRGUsQUF3QkcsQUFrQmxCLENBckltQixBQWFFLEFBNERILENBbEZsQixDQXpFZSxDQXJDTyxBQUlGLEFBd0NKLENBcENhLEFBS0EsQUFtQmIsQUFtSUEsRUEzRkQsQUFZVyxBQWFBLEFBOEVYLEFBZ0NmLEFBVzBCLEFBU1AsQ0E1Qm5CLENBdEhBLEFBU21CLEFBYUEsQUFrRm5CLEFBSUEsQUFtQ0EsQ0EzSkEsQUFzSUEsQ0E5TUEsQUFvRG9CLEFBVUEsQUF1REosQUF1RGhCLEFBR0EsQUF1Q2dCLENBaE1BLEFBbU9NLEVBaE5DLEFBcU1FLENBak5OLEFBZ0hJLEFBY0YsQUF5Q0EsQ0FwSnJCLEFBMkVlLENBdkZXLEFBbUlBLENBM0ZWLEFBNERNLEFBMkNOLEVBM0toQixFQUpBLEFBbU8wQixDQWpISixBQWlHRixDQWhNUSxBQXVFNUIsQUFhQSxHQXREZSxBQVVBLEFBNkRPLEVBcENGLEFBYUEsQUF5SEMsQ0FsTkksQUFLQSxBQWFWLEFBK0NXLEFBdUdKLEFBc0VELEVBOUZGLEFBeUNBLENBM0pDLENBb0dwQixFQVhrQixBQU1sQixFQW5GdUIsQUFVQSxDQTNCdkIsQUFtSUEsQUFnRG9CLEVBekxDLEFBd0ZyQixHQWlIbUIsQ0EvSW5CLEFBYUEsQUF1QnVCLENBa0d2QixDQWxFQSxBQXlDc0IsQUFxREosQ0FuT1csQUE2SlYsQ0ExSVEsQ0F5RjNCLENBdkhBLEFBS0EsQ0E0RHNCLEdBMklDLEVBbEt2QixBQVVBLENBakNBLENBeU1lLEVBbUJmLEVBdEVxQixDQXhERCxBQWlITyxDQXhDM0IsS0F4SG9CLEFBMkpwQixFQTlMQSxDQW5CQSxDQWlNQSxNQTNGMkIsQUF3RFAsTUF2R3BCLENBZ0t1QixTQXhEdkIsT0F4REEsR0FpSG9CLGdCQUNwQiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxsb2RnZ19mcm9udGVuZFxcY29tcG9uZW50c1xcU3VtbW9uZXJcXExlYWd1ZXNcXExlYWd1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi8uLi8uLi9hcGkvYXBpJztcclxuaW1wb3J0IHtHZXRHYW1lRGF0YX0gZnJvbSAnLi4vLi4vbGliJztcclxuY29uc3QgTGVhdWdlcyA9ICh7bmFtZSwgbWF0Y2hMaXN0LCBtYXRjaGVzRGF0YX0pID0+IHtcclxuICAgIGNvbnN0IGdldHBhcnRpY2lwYW50SWQgPSAobWF0Y2gpID0+IHtcclxuICAgICAgICBsZXQgcGFydGljaXBhbnRJZCA9IDA7XHJcbiAgICAgICAgbWF0Y2gucGFydGljaXBhbnRJZGVudGl0aWVzLm1hcCh2ID0+IHtcclxuICAgICAgICAgICAgaWYoKHYucGxheWVyLnN1bW1vbmVyTmFtZSkudG9Mb3dlckNhc2UoKSA9PSBuYW1lLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2lwYW50SWQgPSB2LnBhcnRpY2lwYW50SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBwYXJ0aWNpcGFudElkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0VGltZXN0YW1wID0gKHRzKSA9PiB7XHJcbiAgICAgICAgbGV0IHJldHVybkRhdGEgPSBcIlwiO1xyXG4gICAgICAgIHZhciB3cml0ZURheSA9IG5ldyBEYXRlKHRzKTtcclxuICAgICAgICB2YXIgbm93dGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKG5vd3RpbWVzdGFtcCk7XHJcblxyXG4gICAgICAgIHZhciBtaW51cztcclxuICAgICAgICBpZihub3cuZ2V0RnVsbFllYXIoKSA+IHdyaXRlRGF5LmdldEZ1bGxZZWFyKCkpe1xyXG4gICAgICAgICAgICBtaW51cz0gbm93LmdldEZ1bGxZZWFyKCktd3JpdGVEYXkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuRGF0YSA9IG1pbnVzK1wi64WEIOyghFwiO1xyXG4gICAgICAgIH1lbHNlIGlmKG5vdy5nZXRNb250aCgpID4gd3JpdGVEYXkuZ2V0TW9udGgoKSl7XHJcbiAgICAgICAgICAgIG1pbnVzPSBub3cuZ2V0TW9udGgoKS13cml0ZURheS5nZXRNb250aCgpO1xyXG4gICAgICAgICAgICByZXR1cm5EYXRhID1taW51cytcIuuLrCDsoIRcIjtcclxuICAgICAgICB9ZWxzZSBpZihub3cuZ2V0RGF0ZSgpID4gd3JpdGVEYXkuZ2V0RGF0ZSgpKXtcclxuICAgICAgICAgICAgbWludXM9IG5vdy5nZXREYXRlKCktd3JpdGVEYXkuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm5EYXRhID0gbWludXMrXCLsnbwg7KCEXCI7XHJcbiAgICAgICAgfWVsc2UgaWYobm93LmdldERhdGUoKSA9PSB3cml0ZURheS5nZXREYXRlKCkpe1xyXG4gICAgICAgICAgICB2YXIgbm93VGltZSA9IG5vdy5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIHZhciB3cml0ZVRpbWUgPSB3cml0ZURheS5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgICAgICBpZihub3dUaW1lPndyaXRlVGltZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VjID0gcGFyc2VJbnQobm93VGltZSAtIHdyaXRlVGltZSkgLyAxMDAwO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRheSAgPSBwYXJzZUludChzZWMvNjAvNjAvMjQpO1xyXG4gICAgICAgICAgICAgICAgc2VjID0gKHNlYyAtIChkYXkgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgICAgICAgICAgIGxldCBob3VyID0gcGFyc2VJbnQoc2VjLzYwLzYwKTtcclxuICAgICAgICAgICAgICAgIHNlYyA9IChzZWMgLSAoaG91cio2MCo2MCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1pbiA9IHBhcnNlSW50KHNlYy82MCk7XHJcbiAgICAgICAgICAgICAgICBzZWMgPSBwYXJzZUludChzZWMtKG1pbio2MCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGhvdXI+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuRGF0YSA9IGhvdXIrXCLsi5zqsIQg7KCEXCI7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihtaW4+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuRGF0YSA9IG1pbitcIuu2hCDsoIRcIjtcclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKHNlYz4wKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5EYXRhID0gc2VjK1wi7LSIIOyghFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5EYXRhO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVJdGVtTGlzdFwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYXRjaGVzRGF0YS5tYXAoKHYsaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXRjaCA9IG1hdGNoTGlzdC5tYXRjaGVzLmZpbmQoaXRlbSA9PiBpdGVtLmdhbWVJZCA9PT0gdi5nYW1lSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0aWNpcGFudElkZW50aXRpZSA9IHYucGFydGljaXBhbnRJZGVudGl0aWVzLmZpbmQoaXRlbSA9PiBpdGVtLnBsYXllci5zdW1tb25lck5hbWUudG9Mb3dlckNhc2UoKSA9PSBuYW1lLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnRpY2lwYW50ID0gdi5wYXJ0aWNpcGFudHMuZmluZChpdGVtID0+IGl0ZW0ucGFydGljaXBhbnRJZCA9PT0gcGFydGljaXBhbnRJZGVudGl0aWUucGFydGljaXBhbnRJZClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5ZXJTdGF0ID0gcGFydGljaXBhbnQuc3RhdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtYXRjaClcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBnYW1lbW9kZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVNaW51dGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBnYW1lU2Vjb25kID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNXaW4gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lID0gZ2V0VGltZXN0YW1wKG1hdGNoLnRpbWVzdGFtcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdhbWVEYXRhID0gR2V0R2FtZURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoYW1wRGF0YSA9IGdhbWVEYXRhLmdldENoYW1wRGF0YShtYXRjaC5jaGFtcGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwZWxsRGF0YTEgPSBnYW1lRGF0YS5nZXRTcGVsbFVybChwYXJ0aWNpcGFudC5zcGVsbDFJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNwZWxsRGF0YTIgPSBnYW1lRGF0YS5nZXRTcGVsbFVybChwYXJ0aWNpcGFudC5zcGVsbDJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9sZXQgcGFydGljaXBhbnRJZCA9IGdldHBhcnRpY2lwYW50SWQodilcclxuICAgICAgICAgICAgICAgICAgICAvL2xldCB1c2VySW5mbyA9IHYucGFydGljaXBhbnRzW3BhcnRpY2lwYW50SWQtMV1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2LCBtYXRjaCwgcGFydGljaXBhbnRJZGVudGl0aWUsIHBhcnRpY2lwYW50KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoYW1wRGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAvL+2DgOyehOyKpO2DrO2UhCDtjJDrs4RcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvL+qyjOyehCDrqqjrk5wg7YyQ67OEXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodi5xdWV1ZUlkID09PSA0MjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZW1vZGUgPSBcIuyGlOuhnOuere2BrFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih2LnF1ZXVlSWQgPT09IDQzMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lbW9kZSA9IFwi7J2867CY6rKM7J6EXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKHYucXVldWVJZCA9PT0gNDQwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVtb2RlID0gXCLsnpDsnKDrnq3tgaxcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodi50ZWFtc1sxXS53aW4gPT09IFwiV2luXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNXaW4gPSBcIuyKueumrFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZih2LnRlYW1zWzFdLndpbiA9PT0gXCJGYWlsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNXaW4gPSBcIu2MqOuwsFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyDqsozsnoQg6ri47J20IO2MkOuzhFxyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVNaW51dGUgPSBNYXRoLmZsb29yKCh2LmdhbWVEdXJhdGlvbiAvIDYwKSlcclxuICAgICAgICAgICAgICAgICAgICBnYW1lU2Vjb25kID0gTWF0aC5mbG9vcigodi5nYW1lRHVyYXRpb24gJSA2MCkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy/qsozsnoQg7Iq566asIO2MkOuzhFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHBhcnRpY2lwYW50LnN0YXRzLndpbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1dpbiA9IFwiV2luXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNXaW4gPSBcIkxvc2VcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIkdhbWVJdGVtV3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BHYW1lSXRlbSBgICsgYCR7aXNXaW59YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiR2FtZVN0YXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkdhbWVUeXBlXCI+e2dhbWVtb2RlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaW1lU3RhbXBcIj48c3Bhbj57dGltZX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkJhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHYW1lUmVzdWx0XCI+e2lzV2lufTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHYW1lTGVuZ3RoXCI+e2dhbWVNaW51dGV967aEIHtnYW1lU2Vjb25kfey0iDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJHYW1lU2V0dGluZ0luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhbXBpb25JbWFnZVwiPjxhPjxpbWcgc3JjPXtjaGFtcERhdGF9Lz48L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyU3BlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNwZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzcGVsbERhdGExfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTcGVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3BlbGxEYXRhMn0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJ1bmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSdW5lXCI+PGltZyBzcmM9e2BodHRwczovL29wZ2ctc3RhdGljLmFrYW1haXplZC5uZXQvaW1hZ2VzL2xvbC9wZXJrLyR7cGxheWVyU3RhdC5wZXJrMH0ucG5nP2ltYWdlPXdfMjImdj0xYH0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUnVuZVwiPjxpbWcgc3JjPXtgaHR0cHM6Ly9vcGdnLXN0YXRpYy5ha2FtYWl6ZWQubmV0L2ltYWdlcy9sb2wvcGVya1N0eWxlLyR7cGxheWVyU3RhdC5wZXJrU3ViU3R5bGV9LnBuZz9pbWFnZT13XzIyJnY9MmB9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiS0RBXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIktEQVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIktpbGxcIj57cGxheWVyU3RhdC5raWxsc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ30veycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJEZWF0aFwiPntwbGF5ZXJTdGF0LmRlYXRoc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeycgJ30veycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJBc3Npc3RcIj57cGxheWVyU3RhdC5hc3Npc3RzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJLREFSYXRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIktEQVJhdGlvXCI+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyU3RhdC5kZWF0aHMgPT09IDAgPyBcIlBlcmZlY3RcIiA6ICgocGFydGljaXBhbnQuc3RhdHMua2lsbHMgKyBwYXJ0aWNpcGFudC5zdGF0cy5hc3Npc3RzKSAvIHBhcnRpY2lwYW50LnN0YXRzLmRlYXRocykudG9GaXhlZCgyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9ICDtj4nsoJBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdGF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMZXZlbFwiPuugiOuyqHtwbGF5ZXJTdGF0LmNoYW1wTGV2ZWx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNTXCI+PHNwYW4+e3BsYXllclN0YXQudG90YWxNaW5pb25zS2lsbGVkICsgcGxheWVyU3RhdC5uZXV0cmFsTWluaW9uc0tpbGxlZH0gKHsoKHBsYXllclN0YXQudG90YWxNaW5pb25zS2lsbGVkICsgcGxheWVyU3RhdC5uZXV0cmFsTWluaW9uc0tpbGxlZCkvZ2FtZU1pbnV0ZSkudG9GaXhlZCgxKX0pPC9zcGFuPiBDUzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkNLUmF0ZSB0aXAgdHBkLWRlbGVnYXRpb24tdWlkLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDtgqzqtIDsl6wgNjElXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSXRlbUxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkl0ZW1cIj48aW1nIHNyYz17Z2FtZURhdGEuZ2V0SXRlbVVybChwYXJ0aWNpcGFudC5zdGF0cy5pdGVtMCl9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkl0ZW1cIj48aW1nIHNyYz17Z2FtZURhdGEuZ2V0SXRlbVVybChwYXJ0aWNpcGFudC5zdGF0cy5pdGVtMSl9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkl0ZW1cIj48aW1nIHNyYz17Z2FtZURhdGEuZ2V0SXRlbVVybChwYXJ0aWNpcGFudC5zdGF0cy5pdGVtMil9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkl0ZW1cIj48aW1nIHNyYz17Z2FtZURhdGEuZ2V0SXRlbVVybChwYXJ0aWNpcGFudC5zdGF0cy5pdGVtNil9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkl0ZW1cIj48aW1nIHNyYz17Z2FtZURhdGEuZ2V0SXRlbVVybChwYXJ0aWNpcGFudC5zdGF0cy5pdGVtMyl9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkl0ZW1cIj48aW1nIHNyYz17Z2FtZURhdGEuZ2V0SXRlbVVybChwYXJ0aWNpcGFudC5zdGF0cy5pdGVtNCl9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkl0ZW1cIj48aW1nIHNyYz17Z2FtZURhdGEuZ2V0SXRlbVVybChwYXJ0aWNpcGFudC5zdGF0cy5pdGVtNSl9Lz48L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiRm9sbG93UGxheWVycyBOYW1lc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYW1waW9uSW1hZ2VcIj48aW1nIHNyYz17Z2FtZURhdGEuZ2V0Q2hhbXBEYXRhKHYucGFydGljaXBhbnRzWzBdLmNoYW1waW9uSWQpfS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJOYW1lXCI+PGEgY2xhc3NOYW1lPVwiTGlua1wiIGhyZWY9XCIjXCI+e3YucGFydGljaXBhbnRJZGVudGl0aWVzWzBdLnBsYXllci5zdW1tb25lck5hbWV9PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFtcGlvbkltYWdlXCI+PGltZyBzcmM9e2dhbWVEYXRhLmdldENoYW1wRGF0YSh2LnBhcnRpY2lwYW50c1sxXS5jaGFtcGlvbklkKX0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyTmFtZVwiPjxhIGNsYXNzTmFtZT1cIkxpbmtcIiBocmVmPVwiI1wiPnt2LnBhcnRpY2lwYW50SWRlbnRpdGllc1sxXS5wbGF5ZXIuc3VtbW9uZXJOYW1lfTwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhbXBpb25JbWFnZVwiPjxpbWcgc3JjPXtnYW1lRGF0YS5nZXRDaGFtcERhdGEodi5wYXJ0aWNpcGFudHNbMl0uY2hhbXBpb25JZCl9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lck5hbWVcIj48YSBjbGFzc05hbWU9XCJMaW5rXCIgaHJlZj1cIiNcIj57di5wYXJ0aWNpcGFudElkZW50aXRpZXNbMl0ucGxheWVyLnN1bW1vbmVyTmFtZX08L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYW1waW9uSW1hZ2VcIj48aW1nIHNyYz17Z2FtZURhdGEuZ2V0Q2hhbXBEYXRhKHYucGFydGljaXBhbnRzWzNdLmNoYW1waW9uSWQpfS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJOYW1lXCI+PGEgY2xhc3NOYW1lPVwiTGlua1wiIGhyZWY9XCIjXCI+e3YucGFydGljaXBhbnRJZGVudGl0aWVzWzNdLnBsYXllci5zdW1tb25lck5hbWV9PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFtcGlvbkltYWdlXCI+PGltZyBzcmM9e2dhbWVEYXRhLmdldENoYW1wRGF0YSh2LnBhcnRpY2lwYW50c1s0XS5jaGFtcGlvbklkKX0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyTmFtZVwiPjxhIGNsYXNzTmFtZT1cIkxpbmtcIiBocmVmPVwiI1wiPnt2LnBhcnRpY2lwYW50SWRlbnRpdGllc1s0XS5wbGF5ZXIuc3VtbW9uZXJOYW1lfTwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYW1waW9uSW1hZ2VcIj48aW1nIHNyYz17Z2FtZURhdGEuZ2V0Q2hhbXBEYXRhKHYucGFydGljaXBhbnRzWzVdLmNoYW1waW9uSWQpfS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJOYW1lXCI+PGEgY2xhc3NOYW1lPVwiTGlua1wiIGhyZWY9XCIjXCI+e3YucGFydGljaXBhbnRJZGVudGl0aWVzWzVdLnBsYXllci5zdW1tb25lck5hbWV9PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFtcGlvbkltYWdlXCI+PGltZyBzcmM9e2dhbWVEYXRhLmdldENoYW1wRGF0YSh2LnBhcnRpY2lwYW50c1s2XS5jaGFtcGlvbklkKX0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyTmFtZVwiPjxhIGNsYXNzTmFtZT1cIkxpbmtcIiBocmVmPVwiI1wiPnt2LnBhcnRpY2lwYW50SWRlbnRpdGllc1s2XS5wbGF5ZXIuc3VtbW9uZXJOYW1lfTwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2hhbXBpb25JbWFnZVwiPjxpbWcgc3JjPXtnYW1lRGF0YS5nZXRDaGFtcERhdGEodi5wYXJ0aWNpcGFudHNbN10uY2hhbXBpb25JZCl9Lz48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lck5hbWVcIj48YSBjbGFzc05hbWU9XCJMaW5rXCIgaHJlZj1cIiNcIj57di5wYXJ0aWNpcGFudElkZW50aXRpZXNbN10ucGxheWVyLnN1bW1vbmVyTmFtZX08L2E+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTdW1tb25lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNoYW1waW9uSW1hZ2VcIj48aW1nIHNyYz17Z2FtZURhdGEuZ2V0Q2hhbXBEYXRhKHYucGFydGljaXBhbnRzWzhdLmNoYW1waW9uSWQpfS8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJOYW1lXCI+PGEgY2xhc3NOYW1lPVwiTGlua1wiIGhyZWY9XCIjXCI+e3YucGFydGljaXBhbnRJZGVudGl0aWVzWzhdLnBsYXllci5zdW1tb25lck5hbWV9PC9hPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU3VtbW9uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDaGFtcGlvbkltYWdlXCI+PGltZyBzcmM9e2dhbWVEYXRhLmdldENoYW1wRGF0YSh2LnBhcnRpY2lwYW50c1s5XS5jaGFtcGlvbklkKX0vPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlN1bW1vbmVyTmFtZVwiPjxhIGNsYXNzTmFtZT1cIkxpbmtcIiBocmVmPVwiI1wiPnt2LnBhcnRpY2lwYW50SWRlbnRpdGllc1s5XS5wbGF5ZXIuc3VtbW9uZXJOYW1lfTwvYT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUNvbnRlbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW1XcmFwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtLldpbiA+IC5Db250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EzY2ZlYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOTliOWNmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0uTG9zZSA+IC5Db250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UyQjZCMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjOTliOWNmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0gPiAuQ29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjg5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2RkMmQyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0gPiAuQ29udGVudCA+IC5HYW1lU3RhdHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtID4gLkNvbnRlbnQgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uR2FtZVN0YXRzPi5HYW1lVHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5fdGltZUNvdW50QXNzaWduZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogaGVscDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtLkxvc2U+LkNvbnRlbnQ+LkdhbWVTdGF0cz4uQmFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2NlYTdhNztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtLkxvc2U+LkNvbnRlbnQ+LkdhbWVTdGF0cz4uR2FtZVJlc3VsdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzY0NDNlOztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtLldpbj4uQ29udGVudD4uR2FtZVN0YXRzPi5CYXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOTliOWNmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0uV2luPi5Db250ZW50Pi5HYW1lU3RhdHM+LkdhbWVSZXN1bHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzFhNzhhZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8+LkNoYW1waW9uSW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8+LkNoYW1waW9uSW1hZ2UgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8+LlN1bW1vbmVyU3BlbGwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uR2FtZVNldHRpbmdJbmZvPi5TdW1tb25lclNwZWxsIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkdhbWVTZXR0aW5nSW5mbz4uU3VtbW9uZXJTcGVsbD4uU3BlbGw6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5HYW1lU2V0dGluZ0luZm8+LlJ1bmVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkdhbWVTZXR0aW5nSW5mbz4uUnVuZXM+LlJ1bmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uR2FtZVNldHRpbmdJbmZvPi5SdW5lcz4uUnVuZTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uR2FtZVNldHRpbmdJbmZvPi5SdW5lcz4uUnVuZTpmaXJzdC1jaGlsZD5pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkdhbWVTZXR0aW5nSW5mbz4uUnVuZXM+LlJ1bmUgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkdhbWVTZXR0aW5nSW5mbz4uQ2hhbXBpb25OYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkdhbWVTZXR0aW5nSW5mbz4uQ2hhbXBpb25OYW1lPmEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LktEQSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5LREE+LktEQSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODc5MjkyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uS0RBPi5LREE+LktpbGwsIC5HYW1lSXRlbT4uQ29udGVudD4uS0RBPi5LREE+LkFzc2lzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1ZTVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LktEQT4uS0RBPi5EZWF0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYzY0NDNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LktEQT4uS0RBPi5LaWxsLCAuR2FtZUl0ZW0+LkNvbnRlbnQ+LktEQT4uS0RBPi5Bc3Npc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzU1NWU1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5LREE+LktEQVJhdGlvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM1NTVlNWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5LREE+LktEQVJhdGlvIC5LREFSYXRpbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzUzYTNhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+Lkl0ZW1zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+ZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+Lkl0ZW1zIC5JdGVtTGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtLldpbj4uQ29udGVudD4uSXRlbXM+Lkl0ZW1MaXN0Pi5JdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5YjljZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5JdGVtcyAuSXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+Lkl0ZW1zIC5JdGVtIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5JdGVtcyAuSXRlbT4uSW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+Lkl0ZW1zIC5Ucmlua2V0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM1M2EzYTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+Lkl0ZW1zIC5Ucmlua2V0IGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uRm9sbG93UGxheWVycyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkZvbGxvd1BsYXllcnMuTmFtZXM+LlRlYW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5Gb2xsb3dQbGF5ZXJzLk5hbWVzPi5UZWFtPi5TdW1tb25lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkZvbGxvd1BsYXllcnMuTmFtZXM+LlRlYW0+LlN1bW1vbmVyPi5DaGFtcGlvbkltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5Gb2xsb3dQbGF5ZXJzLk5hbWVzPi5UZWFtPi5TdW1tb25lcj4uQ2hhbXBpb25JbWFnZSBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uRm9sbG93UGxheWVycy5OYW1lcz4uVGVhbT4uU3VtbW9uZXI+LlN1bW1vbmVyTmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LkZvbGxvd1BsYXllcnMuTmFtZXM+LlRlYW0+LlN1bW1vbmVyPi5TdW1tb25lck5hbWU+Lkxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5HYW1lSXRlbT4uQ29udGVudD4uRm9sbG93UGxheWVycy5OYW1lcz4uVGVhbT4uU3VtbW9uZXIuUmVxdWVzdGVyPi5TdW1tb25lck5hbWU+Lkxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkdhbWVJdGVtPi5Db250ZW50Pi5TdGF0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNTU1ZTVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuR2FtZUl0ZW0+LkNvbnRlbnQ+LlN0YXRzPi5DS1JhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2M2NDQzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVhdWdlczsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\lodgg_frontend\\components\\Summoner\\Leagues\\Leagues.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Leauges);

/***/ })

})
//# sourceMappingURL=summoner.js.155c0f24724cde320512.hot-update.js.map