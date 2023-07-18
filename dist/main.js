/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/count.js":
/*!**********************!*\
  !*** ./src/count.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countTvShows: () => (/* binding */ countTvShows),\n/* harmony export */   likeCounter: () => (/* binding */ likeCounter),\n/* harmony export */   updateTvShowsCount: () => (/* binding */ updateTvShowsCount)\n/* harmony export */ });\n// Count Tv-shows in the serached-for category\n\nconst countTvShows = () => {\n  const tvShowsCount = document.getElementById('tv-shows-listing').children.length;\n  return tvShowsCount;\n};\nconst updateTvShowsCount = count => {\n  const tvShowsTitle = document.getElementById('by-category-shows');\n  tvShowsTitle.innerText = `Tv Shows in this Category: (${count})`;\n};\nconst likeCounter = likeObject => {\n  const likesShowNum = likeObject[0].likes;\n  return likesShowNum;\n};\n\n\n//# sourceURL=webpack://tv-shows-api/./src/count.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_Tv_shows_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/Tv-shows-icon.png */ \"./assets/Tv-shows-icon.png\");\n/* harmony import */ var _assets_Tv_shows_collage_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Tv-shows-collage.png */ \"./assets/Tv-shows-collage.png\");\n/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count.js */ \"./src/count.js\");\n/* harmony import */ var _reload_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reload.js */ \"./src/reload.js\");\n/* harmony import */ var _tvShowDetails_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tvShowDetails.js */ \"./src/tvShowDetails.js\");\n/* eslint-disable eqeqeq */\n\n\n\n\n\n\n\n// Make img files available to the app\n\nconst logo = document.getElementById('logo');\nlogo.src = _assets_Tv_shows_icon_png__WEBPACK_IMPORTED_MODULE_1__;\nconst collage = document.getElementById('collage');\ncollage.src = _assets_Tv_shows_collage_png__WEBPACK_IMPORTED_MODULE_2__;\n\n// Search for tv-shows by keyword\n\nconst getTvShows = async searchString => {\n  const URL = `https://api.tvmaze.com/search/shows?q=${searchString}`;\n  const results = await fetch(`${URL}`);\n  const tvShows = await results.json();\n  displayTvShows(tvShows, searchString);\n};\n\n// Search bar\n\ndocument.getElementById('search-bar').addEventListener('submit', e => {\n  e.preventDefault();\n  const searchString = document.getElementById('search-category').value;\n  searchString.toLowerCase();\n  getTvShows(searchString);\n  const landingPage = document.getElementById('tv-shows-info');\n  landingPage.style.display = 'none';\n});\n\n// Likes API's calls\n\nconst AppCode = 'LO9gluM6sh4CT4MBVKTJ';\nconst likesURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${AppCode}/likes`;\nconst addLike = async id => {\n  const likeBody = {\n    item_id: id\n  };\n  const response = await fetch(likesURL, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(likeBody)\n  });\n  return response.status;\n};\nconst getLikes = async () => {\n  const result = await fetch(likesURL);\n  const likes = await result.json();\n  if (likes.error?.status === 500 || likes.error?.status === 400) {\n    return [];\n  }\n  return likes;\n};\n\n// Display Collection\n\nconst displayTvShows = async (collectionArray, searchString) => {\n  const likes = await getLikes();\n  const tvShowsCategory = document.getElementById('tv-shows-category');\n  tvShowsCategory.innerHTML = `<h3>${searchString}</h3>`;\n  const tvShowsList = document.getElementById('tv-shows-listing');\n  collectionArray.forEach(tvShow => {\n    const likeObject = likes.filter(like => like.item_id == tvShow.show.id);\n    let numberOfLikes = '';\n    if (likeObject.length > 0) {\n      numberOfLikes = `${(0,_count_js__WEBPACK_IMPORTED_MODULE_3__.likeCounter)(likeObject)} likes`;\n    } else {\n      numberOfLikes = '0 likes';\n    }\n    tvShowsList.insertAdjacentHTML('beforeend', ` \n      <div class=\"tv-shows-container\">\n        <div class=\"\">\n          <img src=\"${tvShow.show.image.medium}\" />\n        </div>\n        <div class=\"name-likes\">\n          <h4>${tvShow.show.name}</h4>\n          <h6>${numberOfLikes}</h6>\n        </div>\n        <div class=\"btn-container\">\n          <button data-id=\"${tvShow.show.id}\" class=\"btn-details\">Details</button>\n          <button like-id=\"${tvShow.show.id}\" class=\"icon-likes\"><i class=\"fas fa-heart\"></i></button>\n        </div>\n      </div> \n    `);\n    const detailsButton = document.querySelectorAll(`[data-id=\"${tvShow.show.id}\"]`)[0];\n    detailsButton.addEventListener('click', e => {\n      const tvShowId = e.target.getAttribute('data-id');\n      (0,_tvShowDetails_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(tvShowId);\n    });\n    const likeButton = document.querySelectorAll(`[like-id=\"${tvShow.show.id}\"]`)[0];\n    likeButton.addEventListener('click', async e => {\n      const tvShowId = e.target.parentElement.getAttribute('like-id');\n      const status = await addLike(tvShowId);\n      const addedLikes = await getLikes();\n      const likesObject = addedLikes.filter(like => like.item_id === tvShowId);\n      const numberOfLikes = `${likesObject[0].likes} likes`;\n      if (status === 201) {\n        const likeDisplay = likeButton.parentElement.previousElementSibling.children[1];\n        likeDisplay.innerText = numberOfLikes;\n      }\n    });\n  });\n  const count = (0,_count_js__WEBPACK_IMPORTED_MODULE_3__.countTvShows)();\n  (0,_count_js__WEBPACK_IMPORTED_MODULE_3__.updateTvShowsCount)(count);\n};\n\n//# sourceURL=webpack://tv-shows-api/./src/index.js?");

/***/ }),

/***/ "./src/reload.js":
/*!***********************!*\
  !*** ./src/reload.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Reload the page for a new search\n\nconst reloadWindow = document.getElementById('reload');\nreloadWindow.addEventListener('click', () => {\n  window.location.reload();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reloadWindow);\n\n//# sourceURL=webpack://tv-shows-api/./src/reload.js?");

/***/ }),

/***/ "./src/tvShowDetails.js":
/*!******************************!*\
  !*** ./src/tvShowDetails.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Obtain details on a specific Tv-shows\n\nconst findTvShowById = async id => {\n  const result = await fetch(`https://api.tvmaze.com/shows/${id}`);\n  const tvShow = await result.json();\n  displayTvShowDetails(tvShow);\n};\n\n// Post comments on a specific Tv-show\n\nconst AppCode = 'LO9gluM6sh4CT4MBVKTJ';\nconst commentsURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${AppCode}/comments`;\nconst createComment = async (id, username, comment) => {\n  const commentBody = {\n    item_id: id,\n    username,\n    comment\n  };\n  const results = await fetch(commentsURL, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(commentBody)\n  });\n  return results.status;\n};\nconst getComments = async id => {\n  const result = await fetch(`${commentsURL}?item_id=${id}`);\n  const comments = await result.json();\n  if (comments.error?.status === 500 || comments.error?.status === 400) {\n    return [];\n  }\n  return comments;\n};\n\n// Close display Tv-Show details\n\nconst closeTvShowDetails = () => {\n  const popup = document.getElementById('tv-show-details');\n  popup.style.display = 'none';\n};\n\n// Display details for specific Tv-Show\n\nconst displayTvShowDetails = async tvShow => {\n  const tvShowInfo = document.getElementById('tv-show-details');\n  tvShowInfo.classList.add('popup-container');\n  tvShowInfo.innerHTML = ` \n    <div class=\"tv-show-details-container\">\n      <div class=\"\">\n        <img src=\"${tvShow.image.medium}\" />\n      </div>\n      <div>\n        <h6>${tvShow.id}</h6>\n        <h4>${tvShow.name}</h4>\n        <div class=\"details\">\n          <h6 class=\"detail-m-r\">Network: <span>${tvShow.network.name}</span></h6>\n          <h6>Genre: <span>${tvShow.genres}</span></h6>\n        </div>\n        <div class=\"details\">\n          <h6 class=\"detail-m-r\">Language: <span>${tvShow.language}</span></h6>\n          <h6>Rating: <span>${tvShow.rating.average}</span></h6>\n        </div>\n        <h6>Summary: <span>${tvShow.summary}</span></h6>\n        <div class=\"details\">\n          <h6 class=\"detail-m-r\">Premiered: <span>${tvShow.premiered}</span></h6>\n          <h6>Ended: <span>${tvShow.ended}</span></h6>\n        </div>\n        <div class=\"comments-generate\" ></div>\n        <div>\n          <button id=\"close-window\" class=\"btn-close\" >Close Window</button>\n        </div>\n      </div>\n    <div>\n  `;\n  const commentsContent = document.querySelector('.comments-generate');\n  commentsContent.innerHTML = `\n    <div class=\"\">\n      <div class=\"\">\n        <h4 class=\"\">Comments:<span class=\"comments-counter\"></span></h4>\n        <div class=\"comments-data\"></div>\n      </div>          \n    </div>\n    <div class=\"\">\n    <form id=\"post-comment\" action=\"\">\n      <label for=\"name\">Name:</label><br>\n      <input id=\"name\" type=\"text\" name=\"fname\" required><br>\n      <label for=\"comment\">Comment:</label></br>\n      <textarea id=\"commentText\" rows=\"4\" cols=\"50\" name=\"comment\" form=\"post-comment\" required></textarea></br>\n      <input id=\"comment-btn\" class=\"btn-comment\" type=\"submit\" value=\"Submit\">\n    </form> \n    </div></br>\n  `;\n  const submitComment = document.getElementById('comment-btn');\n  submitComment.addEventListener('click', e => {\n    e.preventDefault();\n    // eslint-disable-next-line prefer-destructuring\n    const id = tvShow.id;\n    const username = document.getElementById('name').value;\n    const comment = document.getElementById('commentText').value;\n    createComment(id, username, comment);\n    document.getElementById('post-comment').reset();\n  });\n  const commentsData = document.querySelector('.comments-data');\n  // eslint-disable-next-line prefer-destructuring\n  const id = tvShow.id;\n  const comments = await getComments(id);\n  comments.forEach(comment => {\n    commentsData.insertAdjacentHTML('afterend', `\n      <p class=\"comments-font\"><b>** Dated:</b> ${comment.creation_date}  <b>** By:</b> ${comment.username}</p>\n      <p class=\"comments-font\"><b>Comment:</b> ${comment.comment}</p>\n      <br>\n    `);\n  });\n  const closeButton = document.getElementById('close-window');\n  closeButton.addEventListener('click', closeTvShowDetails);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findTvShowById);\n\n//# sourceURL=webpack://tv-shows-api/./src/tvShowDetails.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.navbar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  background-color: midnightblue;\n}\n\n#collage {\n  margin-top: 3%;\n}\n\n.collection-header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n\n#tv-shows-listing {\n  display: flex;\n  flex-flow: row wrap;\n  border: 2px solid black;\n  margin-top: 2%;\n  margin-bottom: 9%;\n}\n\n.tv-shows-container {\n  margin: 20px;\n  padding: 5px;\n  width: 20%;\n  border: 2px solid black;\n}\n\n.name-likes {\n  margin-left: 10%;\n}\n\n.btn-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 0 10% 5% 10%;\n}\n\n.icon-likes {\n  border-radius: 10%;\n  background-color: indianred;\n  color: white;\n  padding: 5px;\n}\n\n.popup-container {\n  margin: 0;\n  padding: 0;\n  position: fixed;\n  height: 100%;\n  top: 0%;\n  left: 20%;\n  right: 20%;\n  bottom: 0%;\n  z-index: 1;\n  overflow-y: scroll !important;\n  background-color: white;\n  border: 2px solid black;\n}\n\n.tv-show-details-container {\n  padding: 5% 10% 5% 10%;\n}\n\n.details {\n  display: flex;\n  flex-direction: row;\n}\n\n.detail-m-r {\n  margin-right: 25%;\n}\n\n.btn-details,\n.btn-close,\n.btn-comment {\n  border-radius: 10%;\n  background-color: blue;\n  color: white;\n  padding: 5px;\n}\n\n.comments-font {\n  font-size: 12px;\n}\n\nfooter {\n  position: fixed;\n  bottom: 0;\n  height: 10%;\n  width: 100%;\n  border: 2px solid black;\n  background-color: midnightblue;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.footer-content {\n  margin-right: 5%;\n}\n\n.btn-reload {\n  border-radius: 10%;\n  background-color: white;\n  color: blue;\n  padding: 10px;\n}\n\n.white-text {\n  color: white;\n}\n\n@media screen and (max-width: 1000px) {\n  .tv-shows-container {\n    width: 45%;\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tv-shows-api/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tv-shows-api/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tv-shows-api/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tv-shows-api/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tv-shows-api/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tv-shows-api/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tv-shows-api/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tv-shows-api/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tv-shows-api/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tv-shows-api/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assets/Tv-shows-collage.png":
/*!*************************************!*\
  !*** ./assets/Tv-shows-collage.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"178382fc36194373b1d1.png\";\n\n//# sourceURL=webpack://tv-shows-api/./assets/Tv-shows-collage.png?");

/***/ }),

/***/ "./assets/Tv-shows-icon.png":
/*!**********************************!*\
  !*** ./assets/Tv-shows-icon.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b1dc0ab7bca70a282c2.png\";\n\n//# sourceURL=webpack://tv-shows-api/./assets/Tv-shows-icon.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;