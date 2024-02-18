module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1708264207001, function(require, module, exports) {
const icons = require('./icons.json');
const info = require('./info.json');
const metadata = {};
const chars = {};

exports.icons = icons;
exports.info = info;
exports.metadata = metadata;
exports.chars = chars;

}, function(modId) {var map = {"./icons.json":1708264207002,"./info.json":1708264207003}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1708264207002, function(require, module, exports) {
module.exports = {
	"prefix": "mdi-light",
	"icons": {
		"account": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 14c4.14 0 7.5 1.57 7.5 3.5V20H4v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5M11.5 5A3.5 3.5 0 0 1 15 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 8.5A3.5 3.5 0 0 1 11.5 5m0 1A2.5 2.5 0 0 0 9 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6Z\"/>"
		},
		"account-alert": {
			"body": "<path fill=\"currentColor\" d=\"M10.5 14c4.14 0 7.5 1.57 7.5 3.5V20H3v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S4 16.12 4 17.5V19h13v-1.5M10.5 5A3.5 3.5 0 0 1 14 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 7 8.5A3.5 3.5 0 0 1 10.5 5m0 1A2.5 2.5 0 0 0 8 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 13 8.5A2.5 2.5 0 0 0 10.5 6M20 16v-1h1v1h-1m0-3V7h1v6h-1Z\"/>"
		},
		"alarm": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 6a7.5 7.5 0 0 1 7.5 7.5a7.5 7.5 0 0 1-7.5 7.5A7.5 7.5 0 0 1 4 13.5A7.5 7.5 0 0 1 11.5 6m0 1A6.5 6.5 0 0 0 5 13.5a6.5 6.5 0 0 0 6.5 6.5a6.5 6.5 0 0 0 6.5-6.5A6.5 6.5 0 0 0 11.5 7M11 9h1v4.36l3.05 1.42l-.42.91L11 14V9m4.25-3.75l.64-.75l3.83 3.2l-.64.76l-3.83-3.21m-7.5 0L3.92 8.46l-.64-.76l3.83-3.2l.64.75Z\"/>"
		},
		"alarm-panel": {
			"body": "<path fill=\"currentColor\" d=\"M8 11v2H5v-2h3m5 0h-3v2h3v-2m5 0h-3v2h3v-2m-1-4H6v2h11V7m1-1v4H5V6h13m1-1H4c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1m0-1c1.1 0 2 .9 2 2v13c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h15M8 14H5v2h3v-2m5 0h-3v2h3v-2m5 0h-3v2h3v-2M8 17H5v2h3v-2m5 0h-3v2h3v-2m5 0h-3v2h3v-2Z\"/>"
		},
		"alarm-plus": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 6a7.5 7.5 0 0 1 7.5 7.5a7.5 7.5 0 0 1-7.5 7.5A7.5 7.5 0 0 1 4 13.5A7.5 7.5 0 0 1 11.5 6m0 1A6.5 6.5 0 0 0 5 13.5a6.5 6.5 0 0 0 6.5 6.5a6.5 6.5 0 0 0 6.5-6.5A6.5 6.5 0 0 0 11.5 7m3.75-1.75l.64-.75l3.83 3.2l-.64.76l-3.83-3.21m-7.5 0L3.92 8.46l-.64-.76l3.83-3.2l.64.75M11 11h1v2h2v1h-2v2h-1v-2H9v-1h2v-2Z\"/>"
		},
		"alert": {
			"body": "<path fill=\"currentColor\" d=\"M1 21L11.5 2.81L22 21H1m19.27-1L11.5 4.81L2.73 20h17.54M11 14v-4h1v4h-1m0 2h1v2h-1v-2Z\"/>"
		},
		"alert-circle": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4M11 17v-2h1v2h-1m0-4V8h1v5h-1Z\"/>"
		},
		"alert-octagon": {
			"body": "<path fill=\"currentColor\" d=\"M3 16V9l5-5h7l5 5v7.03L15.03 21H8l-5-5M8.39 5L4 9.39v6.21L8.4 20h6.21L19 15.61V9.39L14.61 5H8.39M11 8h1v5h-1V8m0 7h1v2h-1v-2Z\"/>"
		},
		"arrange-bring-forward": {
			"body": "<path fill=\"currentColor\" d=\"M8 9h4v1H9.71l6.71 6.72l-.7.7L9 10.71V13H8V9M3 4h12v9l-1-1V5H4v10h7l1 1H3V4m17 5v12H8v-3h1v2h10V10h-2V9h3Z\"/>"
		},
		"arrange-bring-to-front": {
			"body": "<path fill=\"currentColor\" d=\"M9 7V5H4v5h2v1H3V4h7v3H9m4 14v-3h1v2h5v-5h-2v-1h3v7h-7M8 9h7v7H8V9m1 1v5h5v-5H9Z\"/>"
		},
		"arrange-send-backward": {
			"body": "<path fill=\"currentColor\" d=\"M6 7h4v1H7.71l6.71 6.72l-.7.7L7 8.71V11H6V7m14 14H8v-9l1 1v7h10V10h-7l-1-1h9v12M3 16V4h12v3h-1V5H4v10h2v1H3Z\"/>"
		},
		"arrange-send-to-back": {
			"body": "<path fill=\"currentColor\" d=\"M9 5H4v5h5V5m1 6H3V4h7v7m3 10v-7h7v7h-7m1-1h5v-5h-5v5m2-12v4h-1V9h-3V8h4m-9 9v-4h1v3h3v1H7Z\"/>"
		},
		"arrow-down": {
			"body": "<path fill=\"currentColor\" d=\"M12 5v12.25L17.25 12l.75.66l-6.5 6.5l-6.5-6.5l.75-.66L11 17.25V5h1Z\"/>"
		},
		"arrow-down-circle": {
			"body": "<path fill=\"currentColor\" d=\"M12 7v8.25L15.25 12l.75.66l-4.5 4.5l-4.5-4.5l.75-.66L11 15.25V7h1m-.5 15C6.26 22 2 17.75 2 12.5A9.5 9.5 0 0 1 11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5m0-1a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5Z\"/>"
		},
		"arrow-left": {
			"body": "<path fill=\"currentColor\" d=\"M19 13H6.75L12 18.25l-.66.75l-6.5-6.5l6.5-6.5l.66.75L6.75 12H19v1Z\"/>"
		},
		"arrow-left-circle": {
			"body": "<path fill=\"currentColor\" d=\"M17 13H8.75L12 16.25l-.66.75l-4.5-4.5l4.5-4.5l.66.75L8.75 12H17v1m-15-.5A9.5 9.5 0 0 1 11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5m1 0a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4A8.5 8.5 0 0 0 3 12.5Z\"/>"
		},
		"arrow-right": {
			"body": "<path fill=\"currentColor\" d=\"M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4v-1Z\"/>"
		},
		"arrow-right-circle": {
			"body": "<path fill=\"currentColor\" d=\"M6 12h8.25L11 8.75l.67-.75l4.5 4.5l-4.5 4.5l-.67-.75L14.25 13H6v-1m15 .5a9.5 9.5 0 0 1-9.5 9.5C6.26 22 2 17.75 2 12.5A9.5 9.5 0 0 1 11.5 3a9.5 9.5 0 0 1 9.5 9.5m-1 0A8.5 8.5 0 0 0 11.5 4A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5Z\"/>"
		},
		"arrow-up": {
			"body": "<path fill=\"currentColor\" d=\"M11 20V7.75L5.75 13L5 12.34l6.5-6.5l6.5 6.5l-.75.66L12 7.75V20h-1Z\"/>"
		},
		"arrow-up-circle": {
			"body": "<path fill=\"currentColor\" d=\"M11 18V9.75L7.75 13L7 12.34l4.5-4.5l4.5 4.5l-.75.66L12 9.75V18h-1m.5-15a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4Z\"/>"
		},
		"bank": {
			"body": "<path fill=\"currentColor\" d=\"M11 2.5L20 7v2H2V7l9-4.5m4 7.5h4v8h-4v-8M2 22v-3h18v3H2m7-12h4v8H9v-8m-6 0h4v8H3v-8m0 10v1h16v-1H3m1-9v6h2v-6H4m6 0v6h2v-6h-2m6 0v6h2v-6h-2M3 8h16v-.4l-8-4.02L3 7.6V8Z\"/>"
		},
		"baseball-diamond": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 3C4.82 3 1 10 1 10l7.86 8.23c.21-.23.46-.48.74-.66L6.2 14l5.3-5.29L16.8 14l-3.4 3.57c.28.18.53.43.74.66L22 10s-3.82-7-10.5-7m0 4.29l-6 5.99l-3.24-3.41C3.32 8.25 6.6 4 11.5 4c4.88 0 8.17 4.26 9.24 5.87l-3.24 3.41l-6-5.99m1 6.71c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m.5 7l-1.5 1l-1.5-1v-2h3v2Z\"/>"
		},
		"bell": {
			"body": "<path fill=\"currentColor\" d=\"M12 4.5a.5.5 0 0 0-.5-.5a.5.5 0 0 0-.5.5v1.53c-2.25.25-4 2.15-4 4.47v5.91L5.41 18h12.18L16 16.41V10.5c0-2.32-1.75-4.22-4-4.47V4.5M11.5 3A1.5 1.5 0 0 1 13 4.5v.71c2.31.65 4 2.79 4 5.29V16l3 3H3l3-3v-5.5C6 8 7.69 5.86 10 5.21V4.5A1.5 1.5 0 0 1 11.5 3m0 19a2.5 2.5 0 0 1-2.45-2h1.04a1.495 1.495 0 0 0 2.82 0h1.04a2.5 2.5 0 0 1-2.45 2Z\"/>"
		},
		"bell-off": {
			"body": "<path fill=\"currentColor\" d=\"m2.79 4.46l.71-.71L20.25 20.5l-.71.71l-2.2-2.21H3l3-3v-5.5c0-.83.18-1.62.5-2.32L2.79 4.46M12 4.5a.5.5 0 0 0-.5-.5a.5.5 0 0 0-.5.5v1.53c-1 .11-1.91.55-2.6 1.21l-.71-.71c.64-.61 1.43-1.07 2.31-1.32V4.5A1.5 1.5 0 0 1 11.5 3A1.5 1.5 0 0 1 13 4.5v.71c2.31.65 4 2.79 4 5.29v5.34l-1-1V10.5c0-2.32-1.75-4.22-4-4.47V4.5m-5 6v5.91L5.41 18h10.93L7.28 8.94C7.1 9.43 7 9.95 7 10.5M11.5 22a2.5 2.5 0 0 1-2.45-2h1.04a1.495 1.495 0 0 0 2.82 0h1.04a2.5 2.5 0 0 1-2.45 2Z\"/>"
		},
		"bell-plus": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 3A1.5 1.5 0 0 0 10 4.5v.71C7.69 5.86 6 8 6 10.5V16l-3 3h17l-3-3v-5.5c0-2.5-1.69-4.64-4-5.29V4.5A1.5 1.5 0 0 0 11.5 3m0 1a.5.5 0 0 1 .5.5v1.53c2.25.25 4 2.15 4 4.47v5.91L17.59 18H5.41L7 16.41V10.5c0-2.32 1.75-4.22 4-4.47V4.5a.5.5 0 0 1 .5-.5m-.5 6v2H9v1h2v2h1v-2h2v-1h-2v-2h-1M9.05 20a2.5 2.5 0 0 0 4.9 0h-1.04a1.495 1.495 0 0 1-2.82 0H9.05Z\"/>"
		},
		"bluetooth": {
			"body": "<path fill=\"currentColor\" d=\"M11 3h1l4.85 4.85l-4.64 4.65l4.64 4.65L12 22h-1v-8.29l-4.45 4.45l-.71-.71l4.95-4.95l-4.95-4.95l.71-.71L11 11.29V3m1 1.41v6.88l3.44-3.44L12 4.41m0 16.18l3.44-3.44L12 13.71v6.88Z\"/>"
		},
		"book": {
			"body": "<path fill=\"currentColor\" d=\"M7 3h9a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3v6.7l-3-2.1l-3 2.1V4m5 0H8v4.78l2-1.4l2 1.4V4Z\"/>"
		},
		"book-multiple": {
			"body": "<path fill=\"currentColor\" d=\"M8 3h9a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3v6.7l-3-2.1l-3 2.1V4m5 0H9v4.78l2-1.4l2 1.4V4M8 24a5 5 0 0 1-5-5V7h1v12a4 4 0 0 0 4 4h8v1H8Z\"/>"
		},
		"book-plus": {
			"body": "<path fill=\"currentColor\" d=\"M7 3h9a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3v6.7l-3-2.1l-3 2.1V4m5 0H8v4.78l2-1.4l2 1.4V4M9 19v-2H7v-1h2v-2h1v2h2v1h-2v2H9Z\"/>"
		},
		"bookmark": {
			"body": "<path fill=\"currentColor\" d=\"M8 3h8a3 3 0 0 1 3 3v15l-7-3l-7 3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v13.5l6-2.56l6 2.56V6a2 2 0 0 0-2-2H8Z\"/>"
		},
		"border-all": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v17H3V4m1 1v7h7V5H4m15 7V5h-7v7h7M4 20h7v-7H4v7m15 0v-7h-7v7h7Z\"/>"
		},
		"border-bottom": {
			"body": "<path fill=\"currentColor\" d=\"M3 20h8v-1h1v1h8v1H3v-1m17-2h-1v-2h1v2M4 14H3v-3h1v1h1v1H4v1m0 4H3v-2h1v2m8-5h-1v-1h1v1M3 5V4h1v1H3m0 2h1v2H3V7m12-2V4h2v1h-2M6 5V4h2v1H6m4 0V4h3v1h-1v1h-1V5h-1m9 9v-1h-1v-1h1v-1h1v3h-1m1-5h-1V7h1v2m-1-4V4h1v1h-1m-5 8v-1h2v1h-2m-2 4h-1v-2h1v2m0-7h-1V8h1v2m-5 3v-1h2v1H7Z\"/>"
		},
		"border-horizontal": {
			"body": "<path fill=\"currentColor\" d=\"M20 18h-1v-2h1v2M4 14H3v-3h1v1h15v-1h1v3h-1v-1H4v1m0 4H3v-2h1v2M3 5V4h1v1H3m0 2h1v2H3V7m12-2V4h2v1h-2M6 5V4h2v1H6m4 0V4h3v1h-1v1h-1V5h-1m10 4h-1V7h1v2m-1-4V4h1v1h-1m-7 12h-1v-2h1v2m0-7h-1V8h1v2M3 20h1v1H3v-1m12 0h2v1h-2v-1m-9 0h2v1H6v-1m4 0h1v-1h1v1h1v1h-3v-1m9 0h1v1h-1v-1Z\"/>"
		},
		"border-inside": {
			"body": "<path fill=\"currentColor\" d=\"M17 4v1h-2V4h2m-4 16v1h-3v-1h1v-7H4v1H3v-3h1v1h7V5h-1V4h3v1h-1v7h7v-1h1v3h-1v-1h-7v7h1m4 0v1h-2v-1h2M4 21H3v-1h1v1m2 0v-1h2v1H6M4 9H3V7h1v2m0 9H3v-2h1v2M8 4v1H6V4h2M4 5H3V4h1v1m15 16v-1h1v1h-1m0-12V7h1v2h-1m0 9v-2h1v2h-1m0-13V4h1v1h-1Z\"/>"
		},
		"border-left": {
			"body": "<path fill=\"currentColor\" d=\"M4 4v8h1v1H4v8H3V4h1m2 17v-1h2v1H6m4-16V4h3v1h-1v1h-1V5h-1M6 5V4h2v1H6m5 8v-1h1v1h-1m8-9h1v1h-1V4m-2 0v1h-2V4h2m2 12h1v2h-1v-2m0-9h1v2h-1V7m0 4h1v3h-1v-1h-1v-1h1v-1m-9 9h1v-1h1v1h1v1h-3v-1m5 1v-1h2v1h-2m4-1h1v1h-1v-1m-8-5h1v2h-1v-2m-4-2v-1h2v1H7m7 0v-1h2v1h-2m-3-5h1v2h-1V8Z\"/>"
		},
		"border-none": {
			"body": "<path fill=\"currentColor\" d=\"M20 18h-1v-2h1v2M4 14H3v-3h1v1h1v1H4v1m15-2v-1h1v3h-1v-1h-1v-1h1m-5 1v-1h2v1h-2m-3 0v-1h1v1h-1m-4 0v-1h2v1H7m-3 5H3v-2h1v2M3 5V4h1v1H3m0 2h1v2H3V7m12-2V4h2v1h-2M6 5V4h2v1H6m4 0V4h3v1h-1v1h-1V5h-1m10 4h-1V7h1v2m-1-4V4h1v1h-1m-7 12h-1v-2h1v2m0-7h-1V8h1v2M3 20h1v1H3v-1m12 0h2v1h-2v-1m-9 0h2v1H6v-1m4 0h1v-1h1v1h1v1h-3v-1m9 0h1v1h-1v-1Z\"/>"
		},
		"border-outside": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v17H3V4m1 1v7h1v1H4v7h7v-1h1v1h7v-7h-1v-1h1V5h-7v1h-1V5H4m3 7h2v1H7v-1m4 0h1v1h-1v-1m0 3h1v2h-1v-2m3-3h2v1h-2v-1m-3-2V8h1v2h-1Z\"/>"
		},
		"border-right": {
			"body": "<path fill=\"currentColor\" d=\"M19 21v-8h-1v-1h1V4h1v17h-1M17 4v1h-2V4h2m-4 16v1h-3v-1h1v-1h1v1h1m4 0v1h-2v-1h2m-5-8v1h-1v-1h1m-8 9H3v-1h1v1m2 0v-1h2v1H6M4 9H3V7h1v2m0 9H3v-2h1v2m0-4H3v-3h1v1h1v1H4v1m9-9h-1v1h-1V5h-1V4h3v1M8 4v1H6V4h2M4 5H3V4h1v1m8 5h-1V8h1v2m4 2v1h-2v-1h2m-7 0v1H7v-1h2m3 5h-1v-2h1v2Z\"/>"
		},
		"border-top": {
			"body": "<path fill=\"currentColor\" d=\"M20 5h-8v1h-1V5H3V4h17v1M3 7h1v2H3V7m16 4h1v3h-1v-1h-1v-1h1v-1m0-4h1v2h-1V7m-8 5h1v1h-1v-1m9 8v1h-1v-1h1m0-2h-1v-2h1v2M8 20v1H6v-1h2m9 0v1h-2v-1h2m-4 0v1h-3v-1h1v-1h1v1h1m-9-9v1h1v1H4v1H3v-3h1m-1 5h1v2H3v-2m1 4v1H3v-1h1m5-8v1H7v-1h2m2-4h1v2h-1V8m0 7h1v2h-1v-2m5-3v1h-2v-1h2Z\"/>"
		},
		"border-vertical": {
			"body": "<path fill=\"currentColor\" d=\"M17 4v1h-2V4h2m-4 16v1h-3v-1h1V5h-1V4h3v1h-1v15h1m4 0v1h-2v-1h2M4 21H3v-1h1v1m2 0v-1h2v1H6M4 9H3V7h1v2m0 9H3v-2h1v2m0-4H3v-3h1v1h1v1H4v1M8 4v1H6V4h2M4 5H3V4h1v1m12 7v1h-2v-1h2m-7 0v1H7v-1h2m10 9v-1h1v1h-1m0-12V7h1v2h-1m0 9v-2h1v2h-1m0-4v-1h-1v-1h1v-1h1v3h-1m0-9V4h1v1h-1Z\"/>"
		},
		"briefcase": {
			"body": "<path fill=\"currentColor\" d=\"M5 7h3V5l2-2h3l2 2v2h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3m5.41-3L9 5.41V7h5V5.41L12.59 4h-2.18M5 8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H5Z\"/>"
		},
		"bullhorn": {
			"body": "<path fill=\"currentColor\" d=\"m14 4l-3 3H3a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3h3l3 3h2V4h-2m.41 1H15v13h-.59l-3-3H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h8.41l3-3M18 7v1c1.7.25 3 1.71 3 3.47c0 1.77-1.3 3.22-3 3.47v1.01A4.504 4.504 0 0 0 18 7m0 3.06v2.83c.58-.21 1-.76 1-1.42c0-.65-.42-1.21-1-1.41M4 16h3v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3Z\"/>"
		},
		"calendar": {
			"body": "<path fill=\"currentColor\" d=\"M7 2h1a1 1 0 0 1 1 1v1h5V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3V3a1 1 0 0 1 1-1m8 2h1V3h-1v1M8 4V3H7v1h1M6 5a2 2 0 0 0-2 2v1h15V7a2 2 0 0 0-2-2H6M4 18a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9H4v9m8-5h5v5h-5v-5m1 1v3h3v-3h-3Z\"/>"
		},
		"camcorder": {
			"body": "<path fill=\"currentColor\" d=\"M5 7h9a2 2 0 0 1 2 2v2.5l4-4v10l-4-4V16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5m14 1.91l-2.59 2.59L19 15.09V9.91Z\"/>"
		},
		"camera": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 8C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9M5 5h2l2-2h5l2 2h2a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m4.41-1l-2 2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2.41l-2-2H9.41Z\"/>"
		},
		"cancel": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 22C6.26 22 2 17.75 2 12.5A9.5 9.5 0 0 1 11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5m0-1a8.5 8.5 0 0 0 8.5-8.5c0-2.17-.81-4.15-2.14-5.65l-12.01 12A8.468 8.468 0 0 0 11.5 21m0-17A8.5 8.5 0 0 0 3 12.5c0 2.17.81 4.14 2.15 5.64l12-12A8.49 8.49 0 0 0 11.5 4Z\"/>"
		},
		"cart": {
			"body": "<path fill=\"currentColor\" d=\"M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85Z\"/>"
		},
		"chart-areaspline": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h1v14l5.57-9.67l6.01 3.47l3.62-6.26l.86.5l-4.11 7.13L9.94 9.7L4 20h2.3l3.87-6.71l.5-.86l.86.5l5.15 2.97L20 10.14V21H3V4m14.04 13.26l-6.01-3.47L7.45 20H19v-6.12l-1.96 3.38Z\"/>"
		},
		"chart-bar": {
			"body": "<path fill=\"currentColor\" d=\"M2 4h1v16h2V10h4v10h2V6h4v14h2v-6h4v7H2V4m16 11v5h2v-5h-2m-6-8v13h2V7h-2m-6 4v9h2v-9H6Z\"/>"
		},
		"chart-histogram": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h1v9h3V7h5v4h4v4h4v6H3V4m13 12v4h3v-4h-3m-4-4v8h3v-8h-3M8 8v12h3V8H8m-4 6v6h3v-6H4Z\"/>"
		},
		"chart-line": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h1v14l5.58-9.67l6.01 3.47l3.62-6.26l.86.5l-4.11 7.13L9.95 9.7L4 20h16v1H3V4Z\"/>"
		},
		"chart-pie": {
			"body": "<path fill=\"currentColor\" d=\"M12 3h1a8 8 0 0 1 8 8v1h-9V3m1 8h7a7 7 0 0 0-7-7v7m-3 3h8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8v8m-1 1V7.07c-3.39.49-6 3.4-6 6.93a7 7 0 0 0 7 7c3.53 0 6.44-2.61 6.93-6H9Z\"/>"
		},
		"check": {
			"body": "<path fill=\"currentColor\" d=\"M18.9 8.1L9 18l-4.95-4.95l.71-.71L9 16.59l9.19-9.2l.71.71Z\"/>"
		},
		"check-bold": {
			"body": "<path fill=\"currentColor\" d=\"m9 19l-5.657-5.657l2.121-2.121L9 14.757l8.485-8.485l2.122 2.121L9 19Zm-3.536-6.364l-.707.707L9 17.586l9.192-9.193l-.707-.707L9 16.172l-3.536-3.536Z\"/>",
			"hidden": true
		},
		"check-circle": {
			"body": "<path fill=\"currentColor\" d=\"M17.15 9.6L10 16.75l-3.2-3.2l.7-.71l2.5 2.5l6.44-6.45l.71.71M11.5 3c5.25 0 9.5 4.25 9.5 9.5S16.75 22 11.5 22S2 17.75 2 12.5S6.25 3 11.5 3m0 1C6.81 4 3 7.81 3 12.5S6.81 21 11.5 21s8.5-3.81 8.5-8.5S16.19 4 11.5 4Z\"/>"
		},
		"chevron-double-down": {
			"body": "<path fill=\"currentColor\" d=\"m17.16 7.59l-5.66 5.66l-5.66-5.66l.71-.7l4.95 4.95l4.95-4.95l.71.7m0 4l-5.66 5.66l-5.66-5.66l.71-.7l4.95 4.95l4.95-4.95l.71.7Z\"/>"
		},
		"chevron-double-left": {
			"body": "<path fill=\"currentColor\" d=\"m16.41 18.16l-5.66-5.66l5.66-5.66l.7.71l-4.95 4.95l4.95 4.95l-.7.71m-4 0L6.75 12.5l5.66-5.66l.7.71l-4.95 4.95l4.95 4.95l-.7.71Z\"/>"
		},
		"chevron-double-right": {
			"body": "<path fill=\"currentColor\" d=\"m6.59 6.84l5.66 5.66l-5.66 5.66l-.7-.71l4.95-4.95l-4.95-4.95l.7-.71m4 0l5.66 5.66l-5.66 5.66l-.7-.71l4.95-4.95l-4.95-4.95l.7-.71Z\"/>"
		},
		"chevron-double-up": {
			"body": "<path fill=\"currentColor\" d=\"m5.84 17.41l5.66-5.66l5.66 5.66l-.71.7l-4.95-4.95l-4.95 4.95l-.71-.7m0-4l5.66-5.66l5.66 5.66l-.71.7l-4.95-4.95l-4.95 4.95l-.71-.7Z\"/>"
		},
		"chevron-down": {
			"body": "<path fill=\"currentColor\" d=\"m5.84 9.59l5.66 5.66l5.66-5.66l-.71-.7l-4.95 4.95l-4.95-4.95l-.71.7Z\"/>"
		},
		"chevron-left": {
			"body": "<path fill=\"currentColor\" d=\"M14.41 18.16L8.75 12.5l5.66-5.66l.7.71l-4.95 4.95l4.95 4.95l-.7.71Z\"/>"
		},
		"chevron-right": {
			"body": "<path fill=\"currentColor\" d=\"m8.59 18.16l5.66-5.66l-5.66-5.66l-.7.71l4.95 4.95l-4.95 4.95l.7.71Z\"/>"
		},
		"chevron-up": {
			"body": "<path fill=\"currentColor\" d=\"m5.84 15.41l5.66-5.66l5.66 5.66l-.71.7l-4.95-4.95l-4.95 4.95l-.71-.7Z\"/>"
		},
		"circle": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4Z\"/>"
		},
		"clipboard": {
			"body": "<path fill=\"currentColor\" d=\"M6 5h2.5a3 3 0 0 1 3-3a3 3 0 0 1 3 3H17a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1v3H7V6H6m2 2h7V6H8v2m3.5-5a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2Z\"/>"
		},
		"clipboard-check": {
			"body": "<path fill=\"currentColor\" d=\"M6 5h2.5a3 3 0 0 1 3-3a3 3 0 0 1 3 3H17a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1v3H7V6H6m2 2h7V6H8v2m3.5-5a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2m5.65 8.6L10 18.75l-3.2-3.2l.7-.71l2.5 2.5l6.44-6.45l.71.71Z\"/>"
		},
		"clipboard-plus": {
			"body": "<path fill=\"currentColor\" d=\"M6 5h2.5a3 3 0 0 1 3-3a3 3 0 0 1 3 3H17a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1v3H7V6H6m2 2h7V6H8v2m3.5-5a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2M8 19v-2H6v-1h2v-2h1v2h2v1H9v2H8Z\"/>"
		},
		"clipboard-text": {
			"body": "<path fill=\"currentColor\" d=\"M6 5h2.5a3 3 0 0 1 3-3a3 3 0 0 1 3 3H17a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1v3H7V6H6m2 2h7V6H8v2m3.5-5a2 2 0 0 0-2 2h4a2 2 0 0 0-2-2M6 11h11v1H6v-1m0 3h11v1H6v-1m0 3h9v1H6v-1Z\"/>"
		},
		"clock": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4M11 7h1v5.42l4.7 2.71l-.5.87l-5.2-3V7Z\"/>"
		},
		"closed-caption": {
			"body": "<path fill=\"currentColor\" d=\"M4 5h15a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4m4.5 2c1 0 1.9.32 2.65.86l-.59.81C10 9.25 9.27 9 8.5 9A3.5 3.5 0 0 0 5 12.5A3.5 3.5 0 0 0 8.5 16c.77 0 1.5-.25 2.06-.67l.59.81c-.75.54-1.65.86-2.65.86C6 17 4 15 4 12.5S6 8 8.5 8m7.85 0c.99 0 1.91.32 2.65.86l-.59.81a3.499 3.499 0 0 0-5.56 2.83a3.499 3.499 0 0 0 5.56 2.83l.59.81c-.74.54-1.66.86-2.65.86c-2.48 0-4.5-2-4.5-4.5S13.87 8 16.35 8Z\"/>"
		},
		"cloud": {
			"body": "<path fill=\"currentColor\" d=\"M5.5 20A5.5 5.5 0 0 1 0 14.5A5.5 5.5 0 0 1 5.5 9c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03l.5-.03c2.5 0 4.5 2 4.5 4.5S21 20 18.5 20h-13m0-10C3 10 1 12 1 14.5S3 19 5.5 19h13a3.5 3.5 0 0 0 3.5-3.5a3.5 3.5 0 0 0-3.5-3.5c-.56 0-1.1.13-1.57.37c.07-.28.07-.57.07-.87A5.5 5.5 0 0 0 11.5 6a5.51 5.51 0 0 0-5.31 4.05L5.5 10Z\"/>"
		},
		"cloud-download": {
			"body": "<path fill=\"currentColor\" d=\"M5.5 20A5.5 5.5 0 0 1 0 14.5A5.5 5.5 0 0 1 5.5 9c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03l.5-.03c2.5 0 4.5 2 4.5 4.5S21 20 18.5 20h-13m0-10C3 10 1 12 1 14.5S3 19 5.5 19h13a3.5 3.5 0 0 0 3.5-3.5a3.5 3.5 0 0 0-3.5-3.5c-.56 0-1.1.13-1.57.37l.07-.87A5.5 5.5 0 0 0 11.5 6a5.51 5.51 0 0 0-5.31 4.05L5.5 10m6.5 0v5.25L14.25 13l.75.66l-3.5 3.5l-3.5-3.5l.75-.66L11 15.25V10h1Z\"/>"
		},
		"cloud-upload": {
			"body": "<path fill=\"currentColor\" d=\"M5.5 20A5.5 5.5 0 0 1 0 14.5A5.5 5.5 0 0 1 5.5 9c1-2.35 3.3-4 6-4c3.43 0 6.24 2.66 6.5 6.03l.5-.03c2.5 0 4.5 2 4.5 4.5S21 20 18.5 20h-13m0-10C3 10 1 12 1 14.5S3 19 5.5 19h13a3.5 3.5 0 0 0 3.5-3.5a3.5 3.5 0 0 0-3.5-3.5c-.56 0-1.1.13-1.57.37l.07-.87A5.5 5.5 0 0 0 11.5 6a5.51 5.51 0 0 0-5.31 4.05L5.5 10m6.5 7v-5.25L14.25 14l.75-.66l-3.5-3.5l-3.5 3.5l.75.66L11 11.75V17h1Z\"/>"
		},
		"cog": {
			"body": "<path fill=\"currentColor\" d=\"m19.588 15.492l-1.814-1.29a6.483 6.483 0 0 0-.005-3.421l1.82-1.274l-1.453-2.514l-2.024.926a6.484 6.484 0 0 0-2.966-1.706L12.953 4h-2.906l-.193 2.213A6.483 6.483 0 0 0 6.889 7.92l-2.025-.926l-1.452 2.514l1.82 1.274a6.483 6.483 0 0 0-.006 3.42l-1.814 1.29l1.452 2.502l2.025-.927a6.483 6.483 0 0 0 2.965 1.706l.193 2.213h2.906l.193-2.213a6.484 6.484 0 0 0 2.965-1.706l2.025.927l1.453-2.501ZM13.505 2.985a.5.5 0 0 1 .5.477l.178 2.035a7.45 7.45 0 0 1 2.043 1.178l1.85-.863a.5.5 0 0 1 .662.195l2.005 3.47a.5.5 0 0 1-.162.671l-1.674 1.172c.128.798.124 1.593.001 2.359l1.673 1.17a.5.5 0 0 1 .162.672l-2.005 3.457a.5.5 0 0 1-.662.195l-1.85-.863c-.602.49-1.288.89-2.043 1.179l-.178 2.035a.5.5 0 0 1-.5.476h-4.01a.5.5 0 0 1-.5-.476l-.178-2.035a7.453 7.453 0 0 1-2.043-1.179l-1.85.863a.5.5 0 0 1-.663-.194L2.257 15.52a.5.5 0 0 1 .162-.671l1.673-1.171a7.45 7.45 0 0 1 0-2.359L2.42 10.148a.5.5 0 0 1-.162-.67L4.26 6.007a.5.5 0 0 1 .663-.195l1.85.863a7.45 7.45 0 0 1 2.043-1.178l.178-2.035a.5.5 0 0 1 .5-.477h4.01ZM11.5 9a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7Zm0 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5Z\"/>",
			"hidden": true
		},
		"comment": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-4.59l-3.7 3.71c-.18.18-.43.29-.71.29a1 1 0 0 1-1-1v-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m13 1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4v4l4-4h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z\"/>"
		},
		"comment-alert": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-4.59l-3.7 3.71c-.18.18-.43.29-.71.29a1 1 0 0 1-1-1v-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m13 1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4v4l4-4h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-7 2h1v5h-1V6m0 7h1v2h-1v-2Z\"/>"
		},
		"comment-text": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-4.59l-3.7 3.71c-.18.18-.43.29-.71.29a1 1 0 0 1-1-1v-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m13 1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4v4l4-4h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M5 7h13v1H5V7m0 3h12v1H5v-1m0 3h8v1H5v-1Z\"/>"
		},
		"console": {
			"body": "<path fill=\"currentColor\" d=\"M5 4h13a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2h17a2 2 0 0 0-2-2H5M3 18a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8H3v10m14 0h-5v-1h5v1M6 10.5l.71-.71l4.2 4.21l-4.2 4.21L6 17.5L9.5 14L6 10.5Z\"/>"
		},
		"content-cut": {
			"body": "<path fill=\"currentColor\" d=\"M9 6.5c0 .79-.26 1.5-.7 2.1L20 20.29V21h-.71l-7.79-7.79l-3.2 3.19c.44.6.7 1.31.7 2.1A3.5 3.5 0 0 1 5.5 22A3.5 3.5 0 0 1 2 18.5A3.5 3.5 0 0 1 5.5 15c.79 0 1.5.26 2.1.7l3.19-3.2L7.6 9.3c-.6.44-1.31.7-2.1.7A3.5 3.5 0 0 1 2 6.5A3.5 3.5 0 0 1 5.5 3A3.5 3.5 0 0 1 9 6.5m-1 0A2.5 2.5 0 0 0 5.5 4A2.5 2.5 0 0 0 3 6.5A2.5 2.5 0 0 0 5.5 9A2.5 2.5 0 0 0 8 6.5M19.29 4H20v.71l-7.15 7.14l-.7-.7L19.29 4M5.5 16A2.5 2.5 0 0 0 3 18.5A2.5 2.5 0 0 0 5.5 21A2.5 2.5 0 0 0 8 18.5A2.5 2.5 0 0 0 5.5 16Z\"/>"
		},
		"content-duplicate": {
			"body": "<path fill=\"currentColor\" d=\"M9 6h8a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1h1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H6V9a3 3 0 0 1 3-3M5 2h10v1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h7.25L10 13.75l.66-.75l3.5 3.5l-3.5 3.5l-.66-.75L12.25 17H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z\"/>"
		},
		"content-paste": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 1a2.5 2.5 0 0 1 2.45 2H17a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h3.05a2.5 2.5 0 0 1 2.45-2m1.41 2a1.495 1.495 0 0 0-2.82 0h2.82M6 4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1v3H7V4H6m2 0v2h7V4H8Z\"/>"
		},
		"content-save": {
			"body": "<path fill=\"currentColor\" d=\"M6 4h10.59L20 7.41V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7.91L16.09 5H15v5H6V5m1 0v4h7V5H7m5 7a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z\"/>"
		},
		"content-save-all": {
			"body": "<path fill=\"currentColor\" d=\"M6 3h10.59L20 6.41V17a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V6.91L16.09 4H15v5H6V4m1 0v4h7V4H7m5 7a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M6 22a5 5 0 0 1-5-5V7h1v10a4 4 0 0 0 4 4h10v1H6Z\"/>"
		},
		"credit-card": {
			"body": "<path fill=\"currentColor\" d=\"M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v1h17V8a2 2 0 0 0-2-2H5M3 17a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-5H3v5m2-1h4v1H5v-1m6 0h3v1h-3v-1m-8-6v1h17v-1H3Z\"/>"
		},
		"credit-card-scan": {
			"body": "<path fill=\"currentColor\" d=\"M6 6h11a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2h15a2 2 0 0 0-2-2H6m-2 9a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4H4v4m2-1h3v1H6v-1m5 0h2v1h-2v-1m-7-5v1h15v-1H4M3 3h2v1H3a2 2 0 0 0-2 2v2H0V6a3 3 0 0 1 3-3M1 19a2 2 0 0 0 2 2h2v1H3a3 3 0 0 1-3-3v-2h1v2M20 3a3 3 0 0 1 3 3v2h-1V6a2 2 0 0 0-2-2h-2V3h2m3 16a3 3 0 0 1-3 3h-2v-1h2a2 2 0 0 0 2-2v-2h1v2Z\"/>"
		},
		"crop": {
			"body": "<path fill=\"currentColor\" d=\"M8 6h7a3 3 0 0 1 3 3v7h-1V9a2 2 0 0 0-2-2H8V6m0 13a3 3 0 0 1-3-3V7H1V6h4V2h1v14a2 2 0 0 0 2 2h13v1h-3v4h-1v-4H8Z\"/>"
		},
		"crop-free": {
			"body": "<path fill=\"currentColor\" d=\"M6 4h2v1H6a2 2 0 0 0-2 2v2H3V7a3 3 0 0 1 3-3M4 18a2 2 0 0 0 2 2h2v1H6a3 3 0 0 1-3-3v-2h1v2M17 4a3 3 0 0 1 3 3v2h-1V7a2 2 0 0 0-2-2h-2V4h2m3 14a3 3 0 0 1-3 3h-2v-1h2a2 2 0 0 0 2-2v-2h1v2Z\"/>"
		},
		"currency-eur": {
			"body": "<path fill=\"currentColor\" d=\"m2 11l.5-1h2.87c1.07-3.47 4.31-6 8.13-6c2.13 0 4.08.78 5.57 2.08l-.4.99A7.499 7.499 0 0 0 6.43 10H17.5l-.4 1H6.15a7.631 7.631 0 0 0 0 3h9.75l-.4 1H6.43c1.03 2.91 3.8 5 7.07 5c2.17 0 4.13-.92 5.5-2.4V19c-1.5 1.24-3.4 2-5.5 2c-3.82 0-7.06-2.53-8.13-6H2l.5-1h2.63c-.08-.5-.13-1-.13-1.5s.05-1 .13-1.5H2Z\"/>"
		},
		"currency-gbp": {
			"body": "<path fill=\"currentColor\" d=\"M7 13v-1h2.82c-.07-.47-.16-.9-.25-1.3c-.19-.88-.36-1.7-.32-2.7c.08-1.82.67-3.07 1.78-3.73c1.68-1.02 4.02-.27 4.97.09l-.15 1.01c-.64-.27-2.89-1.1-4.31-.24c-.8.47-1.23 1.45-1.29 2.87c-.04.9.12 1.64.3 2.5c.1.45.2.94.29 1.5H15v1h-4.05c.05.38.05.8.05 1.25C11 17.43 9.53 19 8.35 20H17v1H6.5v-1l.81-.43c1.13-.95 2.69-2.24 2.69-5.32c0-.45 0-.87-.05-1.25H7Z\"/>"
		},
		"currency-rub": {
			"body": "<path fill=\"currentColor\" d=\"M7 21v-5H6v-1h1v-3H6v-1h1V4h7a4 4 0 0 1 4 4a4 4 0 0 1-4 4H8v3h6v1H8v5H7m1-10h6a3 3 0 0 0 3-3a3 3 0 0 0-3-3H8v6Z\"/>"
		},
		"currency-usd": {
			"body": "<path fill=\"currentColor\" d=\"M11 4h1v2c3.29.15 4 1.7 4 3h-1c0-1.33-1.18-2-3.5-2c-.82 0-3.5.16-3.5 2.25c0 .87 0 1.86 3.62 2.75l1.61.5c2.53.93 2.77 2.07 2.77 3.25c0 1.88-1.5 3.09-4 3.25v2h-1v-2c-3.29-.15-4-1.7-4-3h1c0 1.33 1.18 2 3.5 2c.82 0 3.5-.16 3.5-2.25c0-.87 0-1.86-3.62-2.75l-1.61-.5C7.24 11.57 7 10.43 7 9.25C7 7.37 8.5 6.16 11 6V4Z\"/>"
		},
		"delete": {
			"body": "<path fill=\"currentColor\" d=\"M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1v12M6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7H6m12-1V5h-4l-1-1h-3L9 5H5v1h13M8 9h1v10H8V9m6 0h1v10h-1V9Z\"/>"
		},
		"diamond": {
			"body": "<path fill=\"currentColor\" d=\"M6 3h11l3.902 5.573L11.5 22L2.098 8.573L6 3Zm4.162 1L8.464 8h6.072l-1.698-4h-2.676ZM8.327 9l3.173 9.764L14.672 9H8.328ZM3.72 8h3.658l1.698-4H6.52l-2.8 4Zm-.102 1l6.825 9.747L7.276 9H3.618ZM19.28 8l-2.8-4h-2.556l1.698 4h3.658Zm.102 1h-3.658l-3.167 9.747L19.382 9Z\"/>",
			"hidden": true
		},
		"diamond-stone": {
			"body": "<path fill=\"currentColor\" d=\"M6 3h11l3.9 5.57L11.5 22L2.1 8.57L6 3m4.16 1l-1.7 4h6.08l-1.7-4h-2.68M8.33 9l3.17 9.76L14.67 9H8.33M3.72 8h3.66l1.7-4H6.5L3.72 8m-.1 1l6.82 9.75L7.28 9H3.62m15.66-1L16.5 4h-2.58l1.7 4h3.66m.1 1h-3.66l-3.16 9.75L19.38 9Z\"/>"
		},
		"dots-horizontal": {
			"body": "<path fill=\"currentColor\" d=\"M16 12a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-6 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m2-1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1Z\"/>"
		},
		"dots-vertical": {
			"body": "<path fill=\"currentColor\" d=\"M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m0 6a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m0 6a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1Z\"/>"
		},
		"download": {
			"body": "<path fill=\"currentColor\" d=\"M12 4v12.25L17.25 11l.75.66l-6.5 6.5l-6.5-6.5l.75-.66L11 16.25V4h1M3 19h1v2h15v-2h1v3H3v-3Z\"/>"
		},
		"eject": {
			"body": "<path fill=\"currentColor\" d=\"m5.33 15l6.17-9.25L17.67 15H5.33M5 18h13v1H5v-1m2-3.97h9l-4.5-6.78L7 14.03Z\"/>"
		},
		"email": {
			"body": "<path fill=\"currentColor\" d=\"M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6H5m6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72l-8.37 5.43Z\"/>"
		},
		"email-open": {
			"body": "<path fill=\"currentColor\" d=\"M21 9v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9c0-1.11.6-2.08 1.5-2.6l8-4.62l8 4.62c.9.52 1.5 1.49 1.5 2.6M3.72 7.47l7.78 5.03l7.78-5.03l-7.78-4.54l-7.78 4.54m7.78 6.24L3.13 8.28C3.05 8.5 3 8.75 3 9v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V9c0-.25-.05-.5-.13-.72l-8.37 5.43Z\"/>"
		},
		"equalizer": {
			"body": "<path fill=\"currentColor\" d=\"M13 4v17h-3V4h3m7 6v11h-3V10h3M6 13v8H3v-8h3m8-10H9v19h5V3m7 6h-5v13h5V9M7 12H2v10h5V12Z\"/>"
		},
		"ereader": {
			"body": "<path fill=\"currentColor\" d=\"M7 3h9a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7Zm0 1h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 1v12h9V6H7Zm2 2h5v1H9V8Zm0 3h5v1H9v-1Zm0 3h3v1H9v-1Z\"/>",
			"hidden": true
		},
		"eye": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 18c4 0 7.46-2.22 9.24-5.5C18.96 9.22 15.5 7 11.5 7s-7.46 2.22-9.24 5.5C4.04 15.78 7.5 18 11.5 18m0-12c4.56 0 8.5 2.65 10.36 6.5C20 16.35 16.06 19 11.5 19S3 16.35 1.14 12.5C3 8.65 6.94 6 11.5 6m0 2C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9Z\"/>"
		},
		"eye-off": {
			"body": "<path fill=\"currentColor\" d=\"M2.54 4.71L3.25 4L20 20.75l-.71.71l-3.34-3.35c-1.37.57-2.87.89-4.45.89c-4.56 0-8.5-2.65-10.36-6.5c.97-2 2.49-3.67 4.36-4.82L2.54 4.71M11.5 18c1.29 0 2.53-.23 3.67-.66l-1.12-1.13c-.73.5-1.6.79-2.55.79C9 17 7 15 7 12.5c0-.95.29-1.82.79-2.55L6.24 8.41a10.64 10.64 0 0 0-3.98 4.09C4.04 15.78 7.5 18 11.5 18m9.24-5.5C18.96 9.22 15.5 7 11.5 7c-1.15 0-2.27.19-3.31.53l-.78-.78C8.68 6.26 10.06 6 11.5 6c4.56 0 8.5 2.65 10.36 6.5a11.47 11.47 0 0 1-4.07 4.63l-.72-.73c1.53-.96 2.8-2.3 3.67-3.9M11.5 8C14 8 16 10 16 12.5c0 .82-.22 1.58-.6 2.24l-.74-.74c.22-.46.34-.96.34-1.5A3.5 3.5 0 0 0 11.5 9c-.54 0-1.04.12-1.5.34l-.74-.74c.66-.38 1.42-.6 2.24-.6M8 12.5a3.5 3.5 0 0 0 3.5 3.5c.67 0 1.29-.19 1.82-.5L8.5 10.68c-.31.53-.5 1.15-.5 1.82Z\"/>"
		},
		"face-mask": {
			"body": "<path fill=\"currentColor\" d=\"M19.5 6A2.5 2.5 0 0 0 17 8.5v.18l-4.91-1.59a1.964 1.964 0 0 0-1.18 0L6 8.68V8.5a2.5 2.5 0 0 0-5 0V13c0 1.1.9 2 2 2h2.5c1 2.35 3.3 4 6 4s5-1.65 6-4H20c1.1 0 2-.9 2-2V8.5A2.5 2.5 0 0 0 19.5 6M5 14H3c-.55 0-1-.45-1-1V8.5C2 7.67 2.67 7 3.5 7S5 7.67 5 8.5V14m6.5 4A5.51 5.51 0 0 1 6 12.5V9.73l5.21-1.68C11.3 8 11.4 8 11.5 8s.2 0 .28.04L17 9.73v2.77c0 3.03-2.47 5.5-5.5 5.5m9.5-5c0 .55-.45 1-1 1h-2V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V13m-8.77-2.89l1.77.57v1.05l-2.06-.66a1.87 1.87 0 0 0-.88 0L9 11.73v-1.05l1.76-.57c.49-.15.99-.15 1.47 0Z\"/>"
		},
		"factory": {
			"body": "<path fill=\"currentColor\" d=\"m2 8l7 4.04V8l7 4V3h5v19H2V8m15 6l-7-4.27v4.04L3 9.73V21h17V4h-3v10M5 15h3v1H5v-1m0 3h5v1H5v-1m7-3h3v1h-3v-1m0 3h6v1h-6v-1Z\"/>"
		},
		"fast-forward": {
			"body": "<path fill=\"currentColor\" d=\"M21.4 12.5L12 18.38L11 19v-5.62l-8 5L2 19V6l9 5.62V6l10.4 6.5m-1.9 0L12 7.8v9.4l7.5-4.7m-9 0L3 7.8v9.4l7.5-4.7Z\"/>"
		},
		"file": {
			"body": "<path fill=\"currentColor\" d=\"M14 11a3 3 0 0 1-3-3V4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8h-4m-2-3a2 2 0 0 0 2 2h3.59L12 4.41V8M7 3h5l7 7v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z\"/>"
		},
		"file-alert": {
			"body": "<path fill=\"currentColor\" d=\"M7 3a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9l-7-7H7m0 1h4v4a3 3 0 0 0 3 3h4v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m5 .41L17.59 10H14a2 2 0 0 1-2-2V4.41M7.5 10v5h1v-5h-1m0 7v2h1v-2h-1Z\"/>"
		},
		"file-multiple": {
			"body": "<path fill=\"currentColor\" d=\"M15 11a3 3 0 0 1-3-3V4H8a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8h-4m-2-3a2 2 0 0 0 2 2h3.59L13 4.41V8M8 3h5l7 7v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 21a5 5 0 0 1-5-5V7h1v12a4 4 0 0 0 4 4h8v1H8Z\"/>"
		},
		"file-plus": {
			"body": "<path fill=\"currentColor\" d=\"M14 11a3 3 0 0 1-3-3V4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8h-4m-2-3a2 2 0 0 0 2 2h3.59L12 4.41V8M7 3h5l7 7v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m2 16v-2H7v-1h2v-2h1v2h2v1h-2v2H9Z\"/>"
		},
		"filmstrip": {
			"body": "<path fill=\"currentColor\" d=\"M4 4h1v2h2V4h9v2h2V4h1v17h-1v-2h-2v2H7v-2H5v2H4V4Zm3 3H5v3h2V7Zm0 4H5v3h2v-3Zm0 4H5v3h2v-3Zm9 3h2v-3h-2v3Zm0-4h2v-3h-2v3Zm0-4h2V7h-2v3ZM8 5v7h7V5H8Zm0 8v7h7v-7H8Z\"/>",
			"hidden": true
		},
		"flag": {
			"body": "<path fill=\"currentColor\" d=\"M5 5h8.42l1.16 2H19v9h-6l-1.15-2H6v7H5V5m13 10V8h-4l-1.15-2H6v7h6.42l1.16 2H18Z\"/>"
		},
		"flash": {
			"body": "<path fill=\"currentColor\" d=\"m16 3l-3.5 7H16l-6 12.03V14H7V3h9m-5.11 8l3.49-7H8v9h3v4.79L14.38 11h-3.49Z\"/>"
		},
		"flask": {
			"body": "<path fill=\"currentColor\" d=\"M13 6h1V5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1h1v2.07l-5.71 9.9c-.19.3-.29.65-.29 1.03a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2c0-.38-.1-.73-.29-1.03L13 8.07V6M6 22a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V7a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3H6m6.29-6.71l1.63-1.62L17 19H6l3.66-6.34l2.63 2.63m0 1.42l-2.41-2.42L7.73 18h7.54l-1.56-2.71l-1.42 1.42M12 10a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1Z\"/>"
		},
		"flask-empty": {
			"body": "<path fill=\"currentColor\" d=\"M13 6h1V5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1h1v2.07l-5.71 9.9c-.19.3-.29.65-.29 1.03a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2c0-.38-.1-.73-.29-1.03L13 8.07V6M6 22a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V7a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3H6Z\"/>"
		},
		"folder": {
			"body": "<path fill=\"currentColor\" d=\"M5 5h4l3 3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-6.41l-3-3H5Z\"/>"
		},
		"folder-multiple": {
			"body": "<path fill=\"currentColor\" d=\"M6 5h3l3 3h7a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-7.41l-3-3H6m0 16a5 5 0 0 1-5-5V9h1v8a4 4 0 0 0 4 4h12v1H6Z\"/>"
		},
		"folder-plus": {
			"body": "<path fill=\"currentColor\" d=\"M5 5h4l3 3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-6.41l-3-3H5m2 11v-2H5v-1h2v-2h1v2h2v1H8v2H7Z\"/>"
		},
		"format-align-bottom": {
			"body": "<path fill=\"currentColor\" d=\"M3 21v-1h13v1H3m0-4v-1h17v1H3m8-13h1v8.25L15.25 9l.75.66l-4.5 4.5L7 9.66L7.75 9L11 12.25V4Z\"/>"
		},
		"format-align-center": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v1H3V4m4 4h9v1H7V8m-4 4h17v1H3v-1m4 4h9v1H7v-1m-4 4h17v1H3v-1Z\"/>"
		},
		"format-align-justify": {
			"body": "<path fill=\"currentColor\" d=\"M3 5V4h17v1H3m0 4V8h17v1H3m0 4v-1h17v1H3m0 4v-1h17v1H3m0 4v-1h17v1H3Z\"/>"
		},
		"format-align-left": {
			"body": "<path fill=\"currentColor\" d=\"M3 21v-1h17v1H3m0-4v-1h11v1H3m0-4v-1h17v1H3m0-4V8h11v1H3m0-4V4h17v1H3Z\"/>"
		},
		"format-align-middle": {
			"body": "<path fill=\"currentColor\" d=\"M3 13v-1h17v1H3m8-9h1v4.25L14.25 6l.75.66l-3.5 3.5L8 6.66L8.75 6L11 8.25V4m0 17v-4.25L8.75 19L8 18.34l3.5-3.5l3.5 3.5l-.75.66L12 16.75V21h-1Z\"/>"
		},
		"format-align-right": {
			"body": "<path fill=\"currentColor\" d=\"M20 4v1H3V4h17m0 4v1H9V8h11m0 4v1H3v-1h17m0 4v1H9v-1h11m0 4v1H3v-1h17Z\"/>"
		},
		"format-align-top": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v1H3V4m0 4h13v1H3V8m8 13v-8.25L7.75 16L7 15.34l4.5-4.5l4.5 4.5l-.75.66L12 12.75V21h-1Z\"/>"
		},
		"format-bold": {
			"body": "<path fill=\"currentColor\" d=\"M16 14.5a3.5 3.5 0 0 1-3.5 3.5H7V5h4.5A3.5 3.5 0 0 1 15 8.5c0 1.1-.5 2.07-1.29 2.71C15.05 11.71 16 13 16 14.5M11.5 6H8v5h3.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6m1 6H8v5h4.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5Z\"/>"
		},
		"format-clear": {
			"body": "<path fill=\"currentColor\" d=\"M8 4h9v1h-4L8.5 17h-1L12 5H8V4M5 21v-1h8v1H5m11.79-3.5L14 14.71l.71-.71l2.79 2.79L20.29 14l.71.71l-2.79 2.79L21 20.29l-.71.71l-2.79-2.79L14.71 21l-.71-.71l2.79-2.79Z\"/>"
		},
		"format-float-center": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v1H3V4m0 12h17v1H3v-1m13 4v1H3v-1h13M8 7h7v7H8V7m6 1H9v5h5V8Z\"/>"
		},
		"format-float-left": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v1H3V4m9 4h8v1h-8V8m0 4h8v1h-8v-1m-9 4h13v1H3v-1m17 4v1H3v-1h17M3 7h7v7H3V7m6 1H4v5h5V8Z\"/>"
		},
		"format-float-none": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v1H3V4m9 9v-1h8v1h-8M3 7h7v7H3V7m1 1v5h5V8H4m-1 8h13v1H3v-1m0 4h17v1H3v-1Z\"/>"
		},
		"format-float-right": {
			"body": "<path fill=\"currentColor\" d=\"M20 4v1H3V4h17m-9 4v1H3V8h8m-8 4h5v1H3v-1m0 4h13v1H3v-1m0 4h17v1H3v-1M20 7v7h-7V7h7m-1 1h-5v5h5V8Z\"/>"
		},
		"format-indent-decrease": {
			"body": "<path fill=\"currentColor\" d=\"M3 21v-1h17v1H3m8-4v-1h9v1h-9m0-4v-1h9v1h-9m0-4V8h9v1h-9M3 5V4h17v1H3m0 7.5L8.5 18V7L3 12.5m1.41 0L7.5 9.41v6.18L4.41 12.5Z\"/>"
		},
		"format-indent-increase": {
			"body": "<path fill=\"currentColor\" d=\"M3 21v-1h17v1H3m8-4v-1h9v1h-9m0-4v-1h9v1h-9m0-4V8h9v1h-9M3 5V4h17v1H3m5.5 7.5L3 18V7l5.5 5.5m-1.41 0L4 9.41v6.18l3.09-3.09Z\"/>"
		},
		"format-italic": {
			"body": "<path fill=\"currentColor\" d=\"M6 17v-1h3l4-11h-3V4h7v1h-3l-4 11h3v1H6Z\"/>"
		},
		"format-line-spacing": {
			"body": "<path fill=\"currentColor\" d=\"M21 6v1H10V6h11m0 6v1H10v-1h11m0 6v1H10v-1h11M5 19.25L7.25 17l.75.66l-3.5 3.5l-3.5-3.5l.75-.66L4 19.25V5.75L1.75 8L1 7.34l3.5-3.5L8 7.34L7.25 8L5 5.75v13.5Z\"/>"
		},
		"format-list-bulleted": {
			"body": "<path fill=\"currentColor\" d=\"M20 18v1H7v-1h13m-16.5-.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M20 12v1H7v-1h13m-16.5-.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M20 6v1H7V6h13M3.5 5.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1Z\"/>"
		},
		"format-list-checks": {
			"body": "<path fill=\"currentColor\" d=\"M20 18v1H7v-1h13m0-6v1H7v-1h13m0-6v1H7V6h13M2 5h3v3H2V5m1 1v1h1V6H3m-1 5h3v3H2v-3m1 1v1h1v-1H3m-1 5h3v3H2v-3m1 1v1h1v-1H3Z\"/>"
		},
		"format-list-numbered": {
			"body": "<path fill=\"currentColor\" d=\"M2 11v-1h3v.9L3.2 13H5v1H2v-.9L3.8 11H2m1-3V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2M20 6v1H7V6h13m0 6v1H7v-1h13m0 6v1H7v-1h13Z\"/>"
		},
		"format-list-numbers": {
			"body": "<path fill=\"currentColor\" d=\"M2 10.998v-1h3v.9l-1.8 2.1H5v1H2v-.9l1.8-2.1H2Zm1-3v-3H2v-1h2v4H3Zm-1 9v-1h3v4H2v-1h2v-.5H3v-1h1v-.5H2ZM20 6v1H7V6h13Zm0 6v1H7v-1h13Zm0 6v1H7v-1h13Z\"/>",
			"hidden": true
		},
		"format-quote-close": {
			"body": "<path fill=\"currentColor\" d=\"M18 6v8l-1.95 4h-4.2l1.95-4H12V6h6m-1 7.77V7h-4v6h2.4l-1.95 4h1.97L17 13.77M11 6v8l-1.95 4h-4.2l1.95-4H5V6h6m-1 7.77V7H6v6h2.4l-1.95 4h1.97L10 13.77Z\"/>"
		},
		"format-quote-open": {
			"body": "<path fill=\"currentColor\" d=\"M5 18v-8l1.95-4h4.2L9.2 10H11v8H5m1-7.77V17h4v-6H7.6l1.95-4H7.58L6 10.23M12 18v-8l1.95-4h4.2l-1.95 4H18v8h-6m1-7.77V17h4v-6h-2.4l1.95-4h-1.97L13 10.23Z\"/>"
		},
		"format-underline": {
			"body": "<path fill=\"currentColor\" d=\"M17 11.5a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 6 11.5V4h1v7.5C7 14 9 16 11.5 16s4.5-2 4.5-4.5V4h1v7.5M5 21v-1h13v1H5Z\"/>"
		},
		"format-wrap-inline": {
			"body": "<path fill=\"currentColor\" d=\"M20 4v1H3V4h17m0 12v1h-6v-1h6m0 4v1H3v-1h17M7.5 8l4.5 9H3l4.5-9m0 2.24L4.62 16h5.76L7.5 10.24Z\"/>"
		},
		"format-wrap-square": {
			"body": "<path fill=\"currentColor\" d=\"m11.5 8l4.5 9H7l4.5-9m0 2.24L8.62 16h5.76l-2.88-5.76M3 16h2v1H3v-1m0-4h2v1H3v-1m0-4h2v1H3V8m15 0h2v1h-2V8m0 4h2v1h-2v-1m0 4h2v1h-2v-1m2 4v1H3v-1h17M3 4h17v1H3V4Z\"/>"
		},
		"format-wrap-tight": {
			"body": "<path fill=\"currentColor\" d=\"m11.5 8l4.5 9H7l4.5-9m0 2.24L8.62 16h5.76l-2.88-5.76M3 4h17v1H3V4m11 4h6v1h-6V8M3 8h6v1H3V8m0 4h4v1H3v-1m0 4h2v1H3v-1m15 0h2v1h-2v-1m-2-4h4v1h-4v-1M3 20h17v1H3v-1Z\"/>"
		},
		"format-wrap-top-bottom": {
			"body": "<path fill=\"currentColor\" d=\"m11.5 8l4.5 9H7l4.5-9m0 2.24L8.62 16h5.76l-2.88-5.76M3 4h17v1H3V4m17 16v1H3v-1h17Z\"/>"
		},
		"forum": {
			"body": "<path fill=\"currentColor\" d=\"M2 16.59L5.59 13H15a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10.59M2 18H1V6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H6l-4 4m19 2.59V10a2 2 0 0 0-2-2V7a3 3 0 0 1 3 3v12h-1l-4-4H8c-1.24 0-2.3-.75-2.76-1.82l.8-.8C6.21 16.3 7 17 8 17h9.41L21 20.59Z\"/>"
		},
		"fullscreen": {
			"body": "<path fill=\"currentColor\" d=\"M5 4h13a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5m5 3h7v7h-1V9.71l-7.15 7.14l-.7-.7L15.29 9H10V8Z\"/>"
		},
		"fullscreen-close": {
			"body": "<path fill=\"currentColor\" d=\"M18 21H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3Zm0-1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13Zm-5-3H6v-7h1v5.293l7.146-7.147l.708.708L7.707 16H13v1Z\"/>",
			"hidden": true
		},
		"fullscreen-exit": {
			"body": "<path fill=\"currentColor\" d=\"M18 21H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3m0-1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13m-5-3H6v-7h1v5.29l7.15-7.14l.7.7L7.71 16H13v1Z\"/>"
		},
		"gender-female": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 5C8.5 5 6 7.5 6 10.5c0 2.8 2.2 5.2 5 5.5v2H9v1h2v2h1v-2h2v-1h-2v-2c2.8-.3 5-2.6 5-5.5c0-3-2.5-5.5-5.5-5.5m0 1C14 6 16 8 16 10.5S14 15 11.5 15S7 13 7 10.5S9 6 11.5 6Z\"/>"
		},
		"gender-male": {
			"body": "<path fill=\"currentColor\" d=\"M14 5v1h3.3L13 10.3C12 9.5 10.8 9 9.5 9C6.5 9 4 11.5 4 14.5S6.5 20 9.5 20s5.5-2.5 5.5-5.5c0-1.3-.5-2.5-1.3-3.5L18 6.7V10h1V5h-5m-4.5 5c1 0 2 .4 2.8 1c.2.2.5.4.7.7c.6.8 1 1.8 1 2.8C14 17 12 19 9.5 19S5 17 5 14.5S7 10 9.5 10Z\"/>"
		},
		"gender-male-female": {
			"body": "<path fill=\"currentColor\" d=\"M16 3v1h3.3L15 8.3C14 7.5 12.8 7 11.5 7C8.5 7 6 9.5 6 12.5c0 2.8 2.2 5.2 5 5.5v2H9v1h2v2h1v-2h2v-1h-2v-2c2.8-.3 5-2.6 5-5.5c0-1.3-.5-2.5-1.3-3.5L20 4.7V8h1V3h-5m-4.5 5c1 0 2 .4 2.8 1c.2.2.5.4.7.7c.6.8 1 1.8 1 2.8c0 2.5-2 4.5-4.5 4.5S7 15 7 12.5S9 8 11.5 8Z\"/>"
		},
		"gender-transgender": {
			"body": "<path fill=\"currentColor\" d=\"M2 3v5h1V4.7l2.2 2.2l-1.4 1.4l.7.7l1.4-1.4L7.3 9C6.5 10 6 11.2 6 12.5c0 2.8 2.2 5.2 5 5.5v2H9v1h2v2h1v-2h2v-1h-2v-2c2.8-.3 5-2.6 5-5.5c0-1.3-.5-2.5-1.3-3.5L20 4.7V8h1V3h-5v1h3.3L15 8.3C14 7.5 12.8 7 11.5 7C10.2 7 9 7.5 8 8.3L6.6 6.9L8 5.5l-.7-.7l-1.4 1.4L3.7 4H7V3H2m9.5 5c1 0 2 .4 2.8 1c.2.2.5.4.7.7c.6.8 1 1.8 1 2.8c0 2.5-2 4.5-4.5 4.5S7 15 7 12.5c0-1 .4-2 1-2.8c.2-.3.4-.5.7-.7c.8-.7 1.8-1 2.8-1Z\"/>"
		},
		"gift": {
			"body": "<path fill=\"currentColor\" d=\"M4 13v8h7v-8H4m8 0v8h7v-8h-7m8 0v9H3v-9H2V7h3.04L5 6.5A3.5 3.5 0 0 1 8.5 3c1.27 0 2.39.68 3 1.7c.61-1.02 1.73-1.7 3-1.7A3.5 3.5 0 0 1 18 6.5l-.04.5H21v6h-1M3 8v4h8V8H3m17 4V8h-8v4h8m-3.05-5l.05-.5A2.5 2.5 0 0 0 14.5 4A2.5 2.5 0 0 0 12 6.5V7h4.95M11 7v-.5A2.5 2.5 0 0 0 8.5 4A2.5 2.5 0 0 0 6 6.5l.05.5H11Z\"/>"
		},
		"grid": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v3h5V4H5M3 19a2 2 0 0 0 2 2h3v-5H3v3m5-9H3v5h5v-5m10 11a2 2 0 0 0 2-2v-3h-5v5h3m2-11h-5v5h5v-5m0-4a2 2 0 0 0-2-2h-3v5h5V6M9 4v5h5V4H9m0 17h5v-5H9v5m5-11H9v5h5v-5Z\"/>"
		},
		"grid-large": {
			"body": "<path fill=\"currentColor\" d=\"M12 4v8h8V6a2 2 0 0 0-2-2h-6m8 9h-8v8h6a2 2 0 0 0 2-2v-6m-9 8v-8H3v6a2 2 0 0 0 2 2h6m-8-9h8V4H5a2 2 0 0 0-2 2v6m2-9h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Z\"/>"
		},
		"grid-off": {
			"body": "<path fill=\"currentColor\" d=\"m.79 2.46l.71-.71L22.25 22.5l-.71.71l-1.78-1.78c-.49.36-1.1.57-1.76.57H5a3 3 0 0 1-3-3V6c0-.66.21-1.27.57-1.76L.79 2.46M5 3h13a3 3 0 0 1 3 3v13l-.09.74l-.91-.9V16h-2.84l-1-1H20v-5h-5v3.84l-1-1V10h-2.84l-1-1H14V4H9v3.84l-1-1V4H5.16l-.9-.91L5 3M3 6v3h4.34L3.29 4.96C3.11 5.26 3 5.62 3 6m6 9h4.34L9 10.66V15m6 6h3c.38 0 .74-.11 1.04-.29L15 16.66V21M3 19a2 2 0 0 0 2 2h3v-5H3v3m5-9H3v5h5v-5m12-4a2 2 0 0 0-2-2h-3v5h5V6M9 21h5v-5H9v5Z\"/>"
		},
		"group": {
			"body": "<path fill=\"currentColor\" d=\"M7 8v5h6V8H7M2 3h3v1h13V3h3v3h-1v13h1v3h-3v-1H5v1H2v-3h1V6H2V3m3 16v1h13v-1h1V6h-1V5H5v1H4v13h1M6 7h8v4h3v7H8v-4H6V7m8 7H9v3h7v-5h-2v2M3 4v1h1V4H3m16 0v1h1V4h-1m0 16v1h1v-1h-1M3 20v1h1v-1H3Z\"/>"
		},
		"hamburger": {
			"body": "<path fill=\"currentColor\" d=\"M7 4h9a5 5 0 0 1 5 5H2a5 5 0 0 1 5-5m9 1H7C5.14 5 3.57 6.27 3.13 8h16.74c-.44-1.73-2.01-3-3.87-3m5 11a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5h19M7 20h9c1.86 0 3.43-1.27 3.87-3H3.13c.44 1.73 2.01 3 3.87 3m5.5-10l2 2l2-2H19a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h8.5m2 3.41L12.09 11H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2.09l-2.41 2.41Z\"/>"
		},
		"heart": {
			"body": "<path fill=\"currentColor\" d=\"M4.24 12.25a4.19 4.19 0 0 1-1.24-3A4.25 4.25 0 0 1 7.25 5c1.58 0 2.96.86 3.69 2.14h1.12A4.241 4.241 0 0 1 15.75 5A4.25 4.25 0 0 1 20 9.25c0 1.17-.5 2.25-1.24 3L11.5 19.5l-7.26-7.25m15.22.71C20.41 12 21 10.7 21 9.25A5.25 5.25 0 0 0 15.75 4c-1.75 0-3.3.85-4.25 2.17A5.218 5.218 0 0 0 7.25 4A5.25 5.25 0 0 0 2 9.25c0 1.45.59 2.75 1.54 3.71l7.96 7.96l7.96-7.96Z\"/>"
		},
		"heart-half": {
			"body": "<path fill=\"currentColor\" d=\"m4.24 12.25l7.26 7.25v1.42l-7.96-7.96A5.247 5.247 0 0 1 2 9.25A5.25 5.25 0 0 1 7.25 4c1.75 0 3.3.85 4.25 2.17v.97h-.56A4.241 4.241 0 0 0 7.25 5A4.25 4.25 0 0 0 3 9.25c0 1.17.47 2.25 1.24 3Z\"/>"
		},
		"heart-off": {
			"body": "<path fill=\"currentColor\" d=\"m1.79 3.46l.71-.71L19.25 19.5l-.71.71l-3.16-3.17l-3.88 3.88l-7.96-7.96a5.247 5.247 0 0 1 .17-7.59L1.79 3.46m2.45 8.79l7.26 7.25l3.17-3.16L4.42 6.08C3.55 6.86 3 8 3 9.25c0 1.17.47 2.25 1.24 3m14.52 0c.74-.75 1.24-1.83 1.24-3A4.25 4.25 0 0 0 15.75 5c-1.58 0-2.96.86-3.69 2.14h-1.12A4.241 4.241 0 0 0 7.25 5l-.97.11l-.81-.8C6.03 4.11 6.63 4 7.25 4c1.75 0 3.3.85 4.25 2.17C12.45 4.85 14 4 15.75 4A5.25 5.25 0 0 1 21 9.25c0 1.45-.59 2.75-1.54 3.71l-2.67 2.67l-.7-.71l2.67-2.67Z\"/>"
		},
		"help": {
			"body": "<path fill=\"currentColor\" d=\"M11 22v-2h1v2h-1m0-4.5c0-4.5 5-6 5-9C16 6 14 4 11.5 4C9.18 4 7.28 5.75 7.03 8H6c.28-2.8 2.63-5 5.5-5A5.5 5.5 0 0 1 17 8.5c0 3.5-5 4.5-5 9v.5h-1v-.5Z\"/>"
		},
		"help-circle": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 4A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4m0-1a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3M11 17h1v2h-1v-2m.5-11A3.5 3.5 0 0 1 15 9.5c0 .9-.7 1.5-1.44 2.18l-.93.9c-.59.67-.66 1.95-.63 2.39V15h-1c0-.05-.1-1.96.87-3.08l1.03-.99c.6-.53 1.1-.98 1.1-1.43A2.5 2.5 0 0 0 11.5 7A2.5 2.5 0 0 0 9 9.5H8A3.5 3.5 0 0 1 11.5 6Z\"/>"
		},
		"hexagon": {
			"body": "<path fill=\"currentColor\" d=\"m6.59 21l-4.9-8.5L6.6 4h9.81l4.91 8.5l-4.91 8.5H6.59m9.24-16H7.18l-4.34 7.5L7.17 20h8.66l4.33-7.5L15.83 5Z\"/>"
		},
		"home": {
			"body": "<path fill=\"currentColor\" d=\"m16 8.41l-4.5-4.5L4.41 11H6v8h3v-6h5v6h3v-8h1.59L17 9.41V6h-1v2.41M2 12l9.5-9.5L15 6V5h3v4l3 3h-3v8h-5v-6h-3v6H5v-8H2Z\"/>"
		},
		"image": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11.59l4.29-4.3l2.5 2.5l5-5L20 16V6a2 2 0 0 0-2-2H5m4.79 13.21l-2.5-2.5L3 19a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-1.59l-5.21-5.2l-5 5M7.5 6A2.5 2.5 0 0 1 10 8.5A2.5 2.5 0 0 1 7.5 11A2.5 2.5 0 0 1 5 8.5A2.5 2.5 0 0 1 7.5 6m0 1A1.5 1.5 0 0 0 6 8.5A1.5 1.5 0 0 0 7.5 10A1.5 1.5 0 0 0 9 8.5A1.5 1.5 0 0 0 7.5 7Z\"/>"
		},
		"inbox": {
			"body": "<path fill=\"currentColor\" d=\"M6 4h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v8h5v.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V15h5V7a2 2 0 0 0-2-2H6M4 18a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2h-4.04c-.24 1.7-1.7 3-3.46 3s-3.22-1.3-3.46-3H4v2Z\"/>"
		},
		"information": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4M11 8v2h1V8h-1m0 4v5h1v-5h-1Z\"/>"
		},
		"label": {
			"body": "<path fill=\"currentColor\" d=\"M6 6h8c.97 0 1.83.46 2.38 1.18l4.16 5.32l-4.16 5.32C15.83 18.54 14.97 19 14 19H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m9.58 11.23l3.69-4.73l-3.69-4.73C15.21 7.3 14.64 7 14 7H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8c.64 0 1.21-.3 1.58-.77Z\"/>"
		},
		"layers": {
			"body": "<path fill=\"currentColor\" d=\"m2.7 11l8.67-6.75l8.93 6.98L11.63 18L2.7 11m16 .21L11.39 5.5L4.32 11l7.31 5.73l7.07-5.52M11.63 21L2.7 14l.8-.6l8.11 6.35l7.89-6.16l.8.64L11.63 21Z\"/>"
		},
		"lightbulb": {
			"body": "<path fill=\"currentColor\" d=\"M14 20a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1h1m1-3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2c-1.8-1.18-3-3.2-3-5.5A6.5 6.5 0 0 1 11.5 3A6.5 6.5 0 0 1 18 9.5c0 2.3-1.2 4.32-3 5.5v2m-6 0a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.6c1.78-.9 3-2.76 3-4.9A5.5 5.5 0 0 0 11.5 4A5.5 5.5 0 0 0 6 9.5c0 2.14 1.22 4 3 4.9V17Z\"/>"
		},
		"lightbulb-on": {
			"body": "<path fill=\"currentColor\" d=\"M14 20a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1h1m1-3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-2c-1.8-1.18-3-3.2-3-5.5A6.5 6.5 0 0 1 11.5 3A6.5 6.5 0 0 1 18 9.5c0 2.3-1.2 4.32-3 5.5v2m-6 0a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.6c1.78-.9 3-2.76 3-4.9A5.5 5.5 0 0 0 11.5 4A5.5 5.5 0 0 0 6 9.5c0 2.14 1.22 4 3 4.9V17m-.87-6.88l2.37-2.37l2 2L14.25 8l.71.71l-2.46 2.45l-2-2l-1.66 1.67l-.71-.71Z\"/>"
		},
		"link": {
			"body": "<path fill=\"currentColor\" d=\"M8 13v-1h7v1H8m7.5-6a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H13v-1h2.5c2.5 0 4.5-2 4.5-4.5S18 8 15.5 8H13V7h2.5m-8 11A5.5 5.5 0 0 1 2 12.5A5.5 5.5 0 0 1 7.5 7H10v1H7.5C5 8 3 10 3 12.5S5 17 7.5 17H10v1H7.5Z\"/>"
		},
		"link-variant": {
			"body": "<path fill=\"currentColor\" d=\"M10.73 14.97c.27.11.36.41.24.66c-.12.25-.41.37-.66.24h-.01c-.46-.21-.89-.51-1.27-.9a4.49 4.49 0 0 1 0-6.36l3.53-3.53a4.49 4.49 0 0 1 6.36 0a4.49 4.49 0 0 1 0 6.36l-1.63 1.63l-.15-1.26l1.08-1.08a3.513 3.513 0 0 0 0-4.95a3.513 3.513 0 0 0-4.95 0L9.73 9.32a3.513 3.513 0 0 0 0 4.95c.3.3.64.53 1 .7m-6.65 4.95a4.49 4.49 0 0 1 0-6.36l1.63-1.63l.15 1.26l-1.08 1.08a3.513 3.513 0 0 0 0 4.95a3.513 3.513 0 0 0 4.95 0l3.54-3.54a3.513 3.513 0 0 0 0-4.95c-.3-.3-.64-.53-1-.7v.01a.488.488 0 0 1-.24-.67c.12-.25.41-.37.66-.24h.01c.46.21.89.51 1.27.9a4.49 4.49 0 0 1 0 6.36l-3.53 3.53a4.49 4.49 0 0 1-6.36 0Z\"/>"
		},
		"loading": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 4A8.5 8.5 0 0 0 3 12.5H2A9.5 9.5 0 0 1 11.5 3v1Z\"/>"
		},
		"lock": {
			"body": "<path fill=\"currentColor\" d=\"M16 8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3V6.5C7 4 9 2 11.5 2S16 4 16 6.5V8M7 9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H7m8-1V6.5A3.5 3.5 0 0 0 11.5 3A3.5 3.5 0 0 0 8 6.5V8h7m-3.5 6a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m0-1a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9 15.5a2.5 2.5 0 0 1 2.5-2.5Z\"/>"
		},
		"lock-open": {
			"body": "<path fill=\"currentColor\" d=\"M16 8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h8V6.5A3.5 3.5 0 0 0 11.5 3C9.74 3 8.28 4.3 8.04 6H7.03c.25-2.25 2.15-4 4.47-4C14 2 16 4 16 6.5V8M7 9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H7m4.5 5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m0-1a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9 15.5a2.5 2.5 0 0 1 2.5-2.5Z\"/>"
		},
		"lock-unlocked": {
			"body": "<path fill=\"currentColor\" fill-opacity=\".886\" d=\"M16 8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h8V6.5A3.5 3.5 0 0 0 8.035 6H7.027A4.5 4.5 0 0 1 16 6.5V8ZM7 9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H7Zm4.5 5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm0-1a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Z\"/>",
			"hidden": true
		},
		"login": {
			"body": "<path fill=\"currentColor\" d=\"M15 3H9a3 3 0 0 0-3 3v4h1V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-4H6v4a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3M3 12h10.25L10 8.75l.66-.75l4.5 4.5l-4.5 4.5l-.66-.75L13.25 13H3v-1Z\"/>"
		},
		"logout": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h6a3 3 0 0 1 3 3v4h-1V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4h1v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m3 9h11.25L16 8.75l.66-.75l4.5 4.5l-4.5 4.5l-.66-.75L19.25 13H8v-1Z\"/>"
		},
		"magnify": {
			"body": "<path fill=\"currentColor\" d=\"M9.5 4a6.5 6.5 0 0 1 6.5 6.5c0 1.62-.59 3.1-1.57 4.23l5.65 5.65l-.71.71l-5.65-5.65A6.469 6.469 0 0 1 9.5 17A6.5 6.5 0 0 1 3 10.5A6.5 6.5 0 0 1 9.5 4m0 1A5.5 5.5 0 0 0 4 10.5A5.5 5.5 0 0 0 9.5 16a5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 9.5 5Z\"/>"
		},
		"magnify-minus": {
			"body": "<path fill=\"currentColor\" d=\"M9.5 4a6.5 6.5 0 0 1 6.5 6.5c0 1.62-.59 3.1-1.57 4.23l5.65 5.65l-.71.71l-5.65-5.65A6.469 6.469 0 0 1 9.5 17A6.5 6.5 0 0 1 3 10.5A6.5 6.5 0 0 1 9.5 4m0 1A5.5 5.5 0 0 0 4 10.5A5.5 5.5 0 0 0 9.5 16a5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 9.5 5M7 10h5v1H7v-1Z\"/>"
		},
		"magnify-plus": {
			"body": "<path fill=\"currentColor\" d=\"M9.5 4a6.5 6.5 0 0 1 6.5 6.5c0 1.62-.59 3.1-1.57 4.23l5.65 5.65l-.71.71l-5.65-5.65A6.469 6.469 0 0 1 9.5 17A6.5 6.5 0 0 1 3 10.5A6.5 6.5 0 0 1 9.5 4m0 1A5.5 5.5 0 0 0 4 10.5A5.5 5.5 0 0 0 9.5 16a5.5 5.5 0 0 0 5.5-5.5A5.5 5.5 0 0 0 9.5 5M7 10h2V8h1v2h2v1h-2v2H9v-2H7v-1Z\"/>"
		},
		"map-marker": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 7A2.5 2.5 0 0 1 14 9.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9 9.5A2.5 2.5 0 0 1 11.5 7m0 1A1.5 1.5 0 0 0 10 9.5a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 13 9.5A1.5 1.5 0 0 0 11.5 8m-4.7 4.36l4.7 7.73l4.7-7.73c.51-.86.8-1.81.8-2.86A5.5 5.5 0 0 0 11.5 4A5.5 5.5 0 0 0 6 9.5c0 1.05.29 2 .8 2.86m10.25.52L11.5 22l-5.55-9.12C5.35 11.89 5 10.74 5 9.5A6.5 6.5 0 0 1 11.5 3A6.5 6.5 0 0 1 18 9.5c0 1.24-.35 2.39-.95 3.38Z\"/>"
		},
		"memory": {
			"body": "<path fill=\"currentColor\" d=\"M8 19a3 3 0 0 1-3-3v-1H3v-1h2v-3H3v-1h2V9a3 3 0 0 1 3-3h1V4h1v2h3V4h1v2h1a3 3 0 0 1 3 3v1h2v1h-2v3h2v1h-2v1a3 3 0 0 1-3 3h-1v2h-1v-2h-3v2H9v-2H8M8 7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H8m1 8v-5h5v5H9m1-4v3h3v-3h-3Z\"/>"
		},
		"menu": {
			"body": "<path fill=\"currentColor\" d=\"M3 8V7h17v1H3m17 4v1H3v-1h17M3 17h17v1H3v-1Z\"/>"
		},
		"message": {
			"body": "<path fill=\"currentColor\" d=\"M3 20.59L6.59 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14.59M3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7l-4 4Z\"/>"
		},
		"message-alert": {
			"body": "<path fill=\"currentColor\" d=\"M3 20.59L6.59 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14.59M3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7l-4 4m8-16h1v5h-1V6m1 9h-1v-2h1v2Z\"/>"
		},
		"message-image": {
			"body": "<path fill=\"currentColor\" d=\"M3 20.59L6.59 17H18a2 2 0 0 0 2-2v-.09l-5.21-5.2l-5 5l-2.5-2.5L3 16.5v4.09M20 6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9.09l4.29-4.3l2.5 2.5l5-5L20 13.5V6M3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7l-4 4M9 6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1Z\"/>"
		},
		"message-photo": {
			"body": "<path fill=\"currentColor\" d=\"M3 20.586L6.586 17H18a2 2 0 0 0 2-2v-.086l-5.207-5.207l-5 5l-2.5-2.5L3 16.5v4.086ZM20 6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9.086l4.293-4.293l2.5 2.5l5-5L20 13.5V6ZM3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7l-4 4ZM9 6a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm0 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z\"/>",
			"hidden": true
		},
		"message-processing": {
			"body": "<path fill=\"currentColor\" d=\"M3 20.59L6.59 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14.59M3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7l-4 4M6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9m0 1a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m5-1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 11.5 9m0 1a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5m5-1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 16.5 9m0 1a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5Z\"/>"
		},
		"message-reply": {
			"body": "<path fill=\"currentColor\" d=\"M20 20.59L16.41 17H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v14.59M20 22h1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h11l4 4Z\"/>"
		},
		"message-text": {
			"body": "<path fill=\"currentColor\" d=\"M3 20.59L6.59 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14.59M3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7l-4 4M6 7h11v1H6V7m0 3h11v1H6v-1m0 3h8v1H6v-1Z\"/>"
		},
		"message-video": {
			"body": "<path fill=\"currentColor\" d=\"M3 20.59L6.59 17H18a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14.59M3 22H2V6a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7l-4 4M17 7v7h-1l-2-2v2H6V7h8v2l2-2h1m-3 3.41v.18l2 2V8.41l-2 2M7 8v5h6V8H7Z\"/>"
		},
		"microphone": {
			"body": "<path fill=\"currentColor\" d=\"M11 21v-3c-3.36-.27-6-3.08-6-6.5V11h1v.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V11h1v.5c0 3.42-2.64 6.23-6 6.5v3h-1m.5-18A2.5 2.5 0 0 1 14 5.5v6a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9 11.5v-6A2.5 2.5 0 0 1 11.5 3m0 1A1.5 1.5 0 0 0 10 5.5v6a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 11.5 4Z\"/>"
		},
		"microphone-off": {
			"body": "<path fill=\"currentColor\" d=\"m2.79 4.46l.71-.71L15.26 15.5l.71.72l4.28 4.28l-.71.71l-4.35-4.36c-.92.65-2.01 1.04-3.19 1.15v3h-1v-3c-3.36-.27-6-3.08-6-6.5V11h1v.5a5.5 5.5 0 0 0 5.5 5.5c1.09 0 2.11-.32 2.97-.87l-2.24-2.24c-.23.07-.48.11-.73.11A2.5 2.5 0 0 1 9 11.5v-.84l-6.21-6.2M17 11.5V11h1v.5c0 1.5-.5 2.88-1.36 4l-.71-.74c.67-.91 1.07-2.04 1.07-3.26M11.5 3A2.5 2.5 0 0 1 14 5.5v6c0 .39-.09.76-.25 1.09l-.78-.79l.03-.3v-6A1.5 1.5 0 0 0 11.5 4A1.5 1.5 0 0 0 10 5.5v3.34l-1-1V5.5A2.5 2.5 0 0 1 11.5 3M10 11.67c.09.69.64 1.24 1.33 1.33L10 11.67Z\"/>"
		},
		"minus": {
			"body": "<path fill=\"currentColor\" d=\"M5 13v-1h13v1H5Z\"/>"
		},
		"minus-box": {
			"body": "<path fill=\"currentColor\" d=\"M7 12h9v1H7v-1M6 4h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6Z\"/>"
		},
		"minus-circle": {
			"body": "<path fill=\"currentColor\" d=\"M7 12h9v1H7v-1m4.5-9a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4Z\"/>"
		},
		"monitor": {
			"body": "<path fill=\"currentColor\" d=\"M5 4h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-4.5l.5 3h1v1H8v-1h1l.5-3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m5.5 13l-.5 3h3l-.5-3h-2M5 5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Z\"/>"
		},
		"monitor-multiple": {
			"body": "<path fill=\"currentColor\" d=\"M6 5h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-4.5l.5 3h1v1H9v-1h1l.5-3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m5.5 13l-.5 3h3l-.5-3h-2M6 6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H6M1 8a5 5 0 0 1 5-5h12v1H6a4 4 0 0 0-4 4v6H1V8Z\"/>"
		},
		"music": {
			"body": "<path fill=\"currentColor\" d=\"M8 6.1L19 5v11a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3c.77 0 1.47.29 2 .76V9.04l-9 1V17a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3c.77 0 1.47.29 2 .76V6.1M9 7v2.03l9-.99V6.09L9 7M8 17a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2m10-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2Z\"/>"
		},
		"music-off": {
			"body": "<path fill=\"currentColor\" d=\"m2.79 4.46l.71-.71L20.25 20.5l-.71.71l-2.42-2.43c-.35.14-.72.22-1.12.22a3 3 0 0 1-3-3c0-.4.08-.77.22-1.12L9 10.66V17a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3c.77 0 1.47.29 2 .76v-5.1l-5.21-5.2M8 6.1L19 5v11c0 .53-.14 1.03-.38 1.46l-.75-.75c.08-.21.13-.46.13-.71a2 2 0 0 0-2-2c-.25 0-.5.05-.71.13l-.75-.75a3.006 3.006 0 0 1 3.46.38V9.04l-7 .78l-.92-.91L18 8.04V6.09L9 7v.84l-1-1V6.1m6 9.9a2 2 0 0 0 2 2h.31L14 15.69V16m-6 1a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2Z\"/>"
		},
		"nfc": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5Zm8 8.5a1.5 1.5 0 1 1-2-1.415V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2v1H7v9h9V8h-4v3.085a1.5 1.5 0 0 1 1 1.415Zm-1.5-.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1Z\"/>",
			"hidden": true
		},
		"nfc-variant": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5m8 8.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5c0-.65.42-1.21 1-1.41V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2v1H7v9h9V8h-4v3.09c.58.2 1 .76 1 1.41m-1.5-.5a.5.5 0 0 0-.5.5a.5.5 0 0 0 .5.5a.5.5 0 0 0 .5-.5a.5.5 0 0 0-.5-.5Z\"/>"
		},
		"note": {
			"body": "<path fill=\"currentColor\" d=\"M16 12a3 3 0 0 1-3-3V5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6h-4m-2-3a2 2 0 0 0 2 2h3.59L14 5.41V9M5 4h9l7 7v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z\"/>"
		},
		"note-multiple": {
			"body": "<path fill=\"currentColor\" d=\"M17 12a3 3 0 0 1-3-3V5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6h-4m-2-3a2 2 0 0 0 2 2h3.59L15 5.41V9M6 4h9l7 7v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 19a5 5 0 0 1-5-5V8h1v10a4 4 0 0 0 4 4h12v1H6Z\"/>"
		},
		"note-plus": {
			"body": "<path fill=\"currentColor\" d=\"M16 12a3 3 0 0 1-3-3V5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6h-4m-2-3a2 2 0 0 0 2 2h3.59L14 5.41V9M5 4h9l7 7v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m2 14v-2H5v-1h2v-2h1v2h2v1H8v2H7Z\"/>"
		},
		"note-text": {
			"body": "<path fill=\"currentColor\" d=\"M16 12a3 3 0 0 1-3-3V5H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6h-4m-2-3a2 2 0 0 0 2 2h3.59L14 5.41V9M5 4h9l7 7v7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 4h6v1H5V8m0 4h6v1H5v-1m0 4h13v1H5v-1Z\"/>"
		},
		"octagon": {
			"body": "<path fill=\"currentColor\" d=\"M3 16V9l5-5h7l5 5v7.03L15.03 21H8l-5-5M8.39 5L4 9.39v6.21L8.4 20h6.21L19 15.61V9.39L14.61 5H8.39Z\"/>"
		},
		"paperclip": {
			"body": "<path fill=\"currentColor\" d=\"M17 7v10.5a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 6 17.5V6a4 4 0 0 1 4-4a4 4 0 0 1 4 4v10.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9 16.5V7h1v9.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5V6a3 3 0 0 0-3-3a3 3 0 0 0-3 3v11.5C7 20 9 22 11.5 22s4.5-2 4.5-4.5V7h1Z\"/>"
		},
		"pause": {
			"body": "<path fill=\"currentColor\" d=\"M13 19V6h4v13h-4m-7 0V6h4v13H6M7 7v11h2V7H7m7 0v11h2V7h-2Z\"/>"
		},
		"pencil": {
			"body": "<path fill=\"currentColor\" d=\"m19.71 8.04l-2.34 2.33l-3.75-3.75l2.34-2.33c.39-.39 1.04-.39 1.41 0l2.34 2.34c.39.37.39 1.02 0 1.41M3 17.25L13.06 7.18l3.75 3.75L6.75 21H3v-3.75M16.62 5.04l-1.54 1.54l2.34 2.34l1.54-1.54l-2.34-2.34M15.36 11L13 8.64l-9 9.02V20h2.34l9.02-9Z\"/>"
		},
		"phone": {
			"body": "<path fill=\"currentColor\" d=\"M19.5 22a1.5 1.5 0 0 0 1.5-1.5V17a1.5 1.5 0 0 0-1.5-1.5c-1.17 0-2.32-.18-3.42-.55a1.51 1.51 0 0 0-1.52.37l-1.44 1.44a14.772 14.772 0 0 1-5.89-5.89l1.43-1.43c.41-.39.56-.97.38-1.53c-.36-1.09-.54-2.24-.54-3.41A1.5 1.5 0 0 0 7 3H3.5A1.5 1.5 0 0 0 2 4.5C2 14.15 9.85 22 19.5 22M3.5 4H7a.5.5 0 0 1 .5.5c0 1.28.2 2.53.59 3.72c.05.14.04.34-.12.5L6 10.68c1.65 3.23 4.07 5.65 7.31 7.32l1.95-1.97c.14-.14.33-.18.51-.13c1.2.4 2.45.6 3.73.6a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5C10.4 21 3 13.6 3 4.5a.5.5 0 0 1 .5-.5Z\"/>"
		},
		"picture": {
			"body": "<path fill=\"currentColor\" d=\"M5 3h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3Zm0 1a2 2 0 0 0-2 2v11.586l4.293-4.293l2.5 2.5l5-5L20 16V6a2 2 0 0 0-2-2H5Zm4.793 13.207l-2.5-2.5L3 19a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-1.586l-5.207-5.207l-5 5ZM7.5 6a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5Zm0 1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z\"/>",
			"hidden": true
		},
		"pin": {
			"body": "<path fill=\"currentColor\" d=\"M14 12.41V5h1V4H8v1h1v7.41l-2 2V15h9v-.59l-2-2M17 14v2h-5v4.5l-.5 1.5l-.5-1.5V16H6v-2l2-2V6H7V3h9v3h-1v6l2 2Z\"/>"
		},
		"pin-off": {
			"body": "<path fill=\"currentColor\" d=\"m2.79 4.46l.71-.71L20.25 20.5l-.71.71L14.33 16H12v4.5l-.5 1.5l-.5-1.5V16H6v-2l2-2V9.66l-5.21-5.2M14 12.41V5h1V4H8v1h1v2.84l-1-1V6h-.84L7 5.84V3h9v3h-1v6l2 2v1.83l-1-.99v-.43l-2-2m-5 0l-2 2V15h6.34L9 10.66v1.75Z\"/>"
		},
		"play": {
			"body": "<path fill=\"currentColor\" d=\"M18.4 12.5L9 18.38L8 19V6l10.4 6.5m-1.9 0L9 7.8v9.4l7.5-4.7Z\"/>"
		},
		"plus": {
			"body": "<path fill=\"currentColor\" d=\"M5 13v-1h6V6h1v6h6v1h-6v6h-1v-6H5Z\"/>"
		},
		"plus-box": {
			"body": "<path fill=\"currentColor\" d=\"M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1M6 4h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6Z\"/>"
		},
		"plus-circle": {
			"body": "<path fill=\"currentColor\" d=\"M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1m4.5-9a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4Z\"/>"
		},
		"power": {
			"body": "<path fill=\"currentColor\" d=\"M11 13V4h1v9h-1m8-.5a7.5 7.5 0 0 1-7.5 7.5A7.5 7.5 0 0 1 4 12.5c0-2.71 1.44-5.09 3.6-6.4l.73.73A6.478 6.478 0 0 0 5 12.5a6.5 6.5 0 0 0 6.5 6.5a6.5 6.5 0 0 0 6.5-6.5c0-2.44-1.34-4.56-3.33-5.67l.73-.73a7.476 7.476 0 0 1 3.6 6.4Z\"/>"
		},
		"presentation": {
			"body": "<path fill=\"currentColor\" d=\"M2 4h8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h8v1h-1v11h-5.73l1.61 6h-1.04l-1.61-6H9.77l-1.61 6H7.12l1.61-6H3V5H2V4m17 11V5H4v10h15Z\"/>"
		},
		"presentation-play": {
			"body": "<path fill=\"currentColor\" d=\"M2 4h8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h8v1h-1v11h-5.73l1.61 6h-1.04l-1.61-6H9.77l-1.61 6H7.12l1.61-6H3V5H2V4m17 11V5H4v10h15m-9-8h1l3 3l-3 3h-1V7m1 1.41v3.18L12.59 10L11 8.41Z\"/>"
		},
		"printer": {
			"body": "<path fill=\"currentColor\" d=\"M17 4v5h1a3 3 0 0 1 3 3v5h-4v4H6v-4H2v-5a3 3 0 0 1 3-3h1V4h11m1 9a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1M3 12v4h3v-2h11v2h3v-4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m13 8v-5H7v5h9M7 5v4h9V5H7Z\"/>"
		},
		"redo-variant": {
			"body": "<path fill=\"currentColor\" d=\"M17 20v-1h-1v1h1M10 8a6 6 0 0 0-6 6a6 6 0 0 0 6 6h4v-1h-4a5 5 0 0 1-5-5a5 5 0 0 1 5-5h7.09l-3.04 3.04l.71.7L19 8.5l-4.24-4.24l-.71.7L17.09 8H10Z\"/>"
		},
		"refresh": {
			"body": "<path fill=\"currentColor\" d=\"M5 5h5v5H9V6.5c-2.35.97-4 3.29-4 6c0 3.58 2.91 6.5 6.5 6.5a6.5 6.5 0 0 0 6.5-6.5c0-3.08-2.14-5.66-5-6.33V5.14c3.42.7 6 3.72 6 7.36c0 4.13-3.36 7.5-7.5 7.5A7.5 7.5 0 0 1 4 12.5C4 9.72 5.5 7.3 7.74 6H5V5Z\"/>"
		},
		"repeat": {
			"body": "<path fill=\"currentColor\" d=\"m20 7.5l-3.54 3.54l-.7-.71L18.09 8H6v4H5V7h13.09l-2.33-2.33l.7-.71L20 7.5M17 17v-4h1v5H4.91l2.33 2.33l-.7.71L3 17.5l3.54-3.54l.7.71L4.91 17H17Z\"/>"
		},
		"repeat-off": {
			"body": "<path fill=\"currentColor\" d=\"m2.79 4.46l.71-.71L20.25 20.5l-.71.71l-3.2-3.21H4.91l2.33 2.33l-.7.71L3 17.5l3.54-3.54l.7.71L4.91 17h10.43l-9-9H6v4H5V7h.34L2.79 4.46M20 7.5l-3.54 3.54l-.7-.71L18.09 8H9.16l-1-1h9.93l-2.33-2.33l.7-.71L20 7.5M17 13h1v3.84l-1-1V13Z\"/>"
		},
		"repeat-once": {
			"body": "<path fill=\"currentColor\" d=\"m20 7.5l-3.54 3.54l-.7-.71L18.09 8H6v4H5V7h13.09l-2.33-2.33l.7-.71L20 7.5M17 17v-4h1v5H4.91l2.33 2.33l-.7.71L3 17.5l3.54-3.54l.7.71L4.91 17H17m-7-3h1v-3h-1v-1h2v4h1v1h-3v-1Z\"/>"
		},
		"rewind": {
			"body": "<path fill=\"currentColor\" d=\"m1 12.5l9.4 5.88l1 .62v-5.62l8 5l1 .62V6l-9 5.62V6L1 12.5m1.89 0l7.51-4.7v9.4l-7.51-4.7m9 0l7.51-4.7v9.4l-7.51-4.7Z\"/>"
		},
		"rhombus": {
			"body": "<path fill=\"currentColor\" d=\"m2.59 12.5l8.91-8.91l8.91 8.91l-8.91 8.91l-8.91-8.91M11.5 5L4 12.5l7.5 7.5l7.5-7.5L11.5 5Z\"/>"
		},
		"rss": {
			"body": "<path fill=\"currentColor\" d=\"M5 16a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-3-6c6.08 0 11 4.92 11 11h-1A10 10 0 0 0 2 12v-1m0-4a15 15 0 0 1 15 15h-1A14 14 0 0 0 2 8V7m0-4c10.5 0 19 8.5 19 19h-1A18 18 0 0 0 2 4V3Z\"/>"
		},
		"script": {
			"body": "<path fill=\"currentColor\" d=\"M3 19a2 2 0 0 0 2 2h6.76c-.47-.53-.76-1.23-.76-2H3m11 2a2 2 0 0 0 2-2V6c0-.77.29-1.47.76-2H8a2 2 0 0 0-2 2v12h6v1a2 2 0 0 0 2 2M5 6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v2h-5v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1h3V6m16 1V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1h4Z\"/>"
		},
		"seek-next": {
			"body": "<path fill=\"currentColor\" d=\"M15.402 12.5L5 6v13l1-.625l9.402-5.875Zm-1.887 0L6 17.196V7.804l7.515 4.696ZM18 6h-1v13h1V6Z\"/>",
			"hidden": true
		},
		"seek-previous": {
			"body": "<path fill=\"currentColor\" d=\"M7.598 12.5L18 6v13l-1-.625L7.598 12.5Zm1.887 0L17 17.196V7.804L9.485 12.5ZM5 6h1v13H5V6Z\"/>",
			"hidden": true
		},
		"settings": {
			"body": "<path fill=\"currentColor\" d=\"m19.59 15.5l-1.82-1.3c.3-1.08.32-2.25 0-3.42l1.82-1.28L18.14 7l-2.03.92c-.79-.8-1.79-1.42-2.96-1.71L12.95 4h-2.9l-.2 2.21c-1.17.29-2.17.91-2.96 1.71L4.86 7L3.41 9.5l1.82 1.28c-.32 1.17-.3 2.34 0 3.42l-1.82 1.3L4.86 18l2.03-.93c.79.79 1.79 1.39 2.96 1.7l.2 2.23h2.9l.2-2.23c1.17-.31 2.17-.91 2.96-1.7l2.03.93l1.45-2.5M13.5 3c.27 0 .5.2.5.46l.18 2.04c.76.28 1.44.69 2.05 1.18l1.85-.87c.23-.12.52-.04.66.19l2 3.5c.14.21.06.5-.16.65l-1.67 1.17c.13.8.12 1.59 0 2.36l1.67 1.17c.22.15.3.44.16.65l-2 3.5c-.14.21-.43.29-.66.17l-1.85-.86c-.61.49-1.29.89-2.05 1.19l-.18 2c0 .29-.23.5-.5.5h-4a.5.5 0 0 1-.5-.5l-.18-2c-.76-.3-1.44-.7-2.05-1.19l-1.85.86c-.23.12-.52.04-.66-.17l-2-3.5c-.14-.21-.06-.5.16-.65l1.67-1.17c-.12-.77-.13-1.56 0-2.36l-1.67-1.17c-.22-.15-.3-.44-.16-.65l2-3.5c.14-.23.43-.31.66-.19l1.85.87c.61-.49 1.29-.9 2.05-1.18L9 3.46c0-.26.23-.46.5-.46h4m-2 6a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 8 12.5A3.5 3.5 0 0 1 11.5 9m0 1A2.5 2.5 0 0 0 9 12.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5Z\"/>"
		},
		"shape-circle": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 3a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19Zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17Z\"/>",
			"hidden": true
		},
		"shape-hexagon": {
			"body": "<path fill=\"currentColor\" d=\"m6.593 21l-4.905-8.494L6.6 4h9.808l4.908 8.5l-4.908 8.5H6.593ZM15.83 5H7.177l-4.334 7.506L7.17 20h8.66l4.33-7.5L15.83 5Z\"/>",
			"hidden": true
		},
		"shape-octagon": {
			"body": "<path fill=\"currentColor\" d=\"M3 16.011V8.98L7.98 4h7.04L20 8.98v7.046L15.025 21H7.99L3 16.011ZM8.393 5L4 9.393v6.204L8.403 20h6.208L19 15.611V9.393L14.607 5H8.393Z\"/>",
			"hidden": true
		},
		"shape-rhombus": {
			"body": "<path fill=\"currentColor\" d=\"M2.586 12.5L11.5 3.586l8.914 8.914l-8.914 8.914L2.586 12.5ZM11.5 5L4 12.5l7.5 7.5l7.5-7.5L11.5 5Z\"/>",
			"hidden": true
		},
		"shape-square": {
			"body": "<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 4h17v17H3V4Zm1 1v15h15V5H4Z\"/>",
			"hidden": true
		},
		"shape-triangle": {
			"body": "<path fill=\"currentColor\" d=\"M1 21L11.5 2.813L22 21H1Zm19.268-1L11.5 4.813L2.732 20h17.536Z\"/>",
			"hidden": true
		},
		"share": {
			"body": "<path fill=\"currentColor\" d=\"M19.59 12L15 7.41v2.46l-.86.13c-4.31.61-7.23 2.87-8.9 6.33c2.32-1.64 5.2-2.43 8.76-2.43h1v2.69m-2-1.69v.02c-4.47.21-7.67 1.82-10 5.08c1-5 4-10 11-11V5l7 7l-7 7v-4.1c-.33 0-.66.01-1 .02Z\"/>"
		},
		"share-variant": {
			"body": "<path fill=\"currentColor\" d=\"m15.7 6.92l-6.89 4.02c.12.33.19.69.19 1.06s-.07.73-.19 1.06l6.89 4.02A2.996 2.996 0 0 1 21 19c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-.37.07-.73.19-1.06L8.3 13.92A2.996 2.996 0 0 1 3 12a2.996 2.996 0 0 1 5.3-1.92l6.89-4.02C15.07 5.73 15 5.37 15 5c0-1.66 1.34-3 3-3s3 1.34 3 3a2.996 2.996 0 0 1-5.3 1.92M18 21c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .9-2 2s.9 2 2 2M6 14c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .9-2 2s.89 2 2 2m12-7c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .9-2 2s.9 2 2 2Z\"/>"
		},
		"shield": {
			"body": "<path fill=\"currentColor\" d=\"M11.5 3.11L19 6.63v5.01c0 4.81-3.22 9.26-7.5 10.4C7.22 20.9 4 16.45 4 11.64V6.63m7.5 16.44c4.9-1.23 8.5-6.13 8.5-11.43V6l-8.5-4L3 6v5.64c0 5.3 3.6 10.2 8.5 11.43Z\"/>"
		},
		"shuffle": {
			"body": "<path fill=\"currentColor\" d=\"M13 5h6v6h-1V6.71L4.71 20L4 19.29L17.29 6H13V5m0 14h4.29l-4.58-4.59l.7-.7L18 18.29V14h1v6h-6v-1M4 5.71L4.71 5l5.58 5.59l-.7.7L4 5.71Z\"/>"
		},
		"signal": {
			"body": "<path fill=\"currentColor\" d=\"M2 21v-5h4v5H2m1-4v3h2v-3H3m4 4v-9h4v9H7m1-8v7h2v-7H8m4 8V8h4v13h-4m1-12v11h2V9h-2m4 12V4h4v17h-4m1-16v15h2V5h-2Z\"/>"
		},
		"sim": {
			"body": "<path fill=\"currentColor\" d=\"m11 3l-7 7v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-5m.41 1H16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8.59L11.41 4M8 11v4h1v-4H8m3 0v2h1v-2h-1m3 0v4h1v-4h-1m-3 4v4h1v-4h-1m-3 2v2h1v-2H8m6 0v2h1v-2h-1Z\"/>"
		},
		"sim-alert": {
			"body": "<path fill=\"currentColor\" d=\"m11 3l-7 7v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-5m.41 1H16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8.59L11.41 4M11 9v5h1V9h-1m0 7v2h1v-2h-1Z\"/>"
		},
		"sim-off": {
			"body": "<path fill=\"currentColor\" d=\"m2.5 2.75l-.71.71l4.37 4.38L4 10v9a3 3 0 0 0 3 3h9c1.16 0 2.15-.66 2.64-1.62l1.82 1.83l.79-.71L7.58 7.83l-.7-.7L2.5 2.75M11 3L7.58 6.42l.71.71L11.41 4H16a2 2 0 0 1 2 2v10.84l1 1V6a3 3 0 0 0-3-3h-5M6.86 8.55l11.03 11.08C17.62 20.42 16.88 21 16 21H7a2 2 0 0 1-2-2v-8.59l1.86-1.86Z\"/>"
		},
		"sitemap": {
			"body": "<path fill=\"currentColor\" d=\"M9 3h5v5h-2v4h5a3 3 0 0 1 3 3v2h2v5h-5v-5h2v-2a2 2 0 0 0-2-2h-5v4h2v5H9v-5h2v-4H6a2 2 0 0 0-2 2v2h2v5H1v-5h2v-2a3 3 0 0 1 3-3h5V8H9V3m4 4V4h-3v3h3M5 21v-3H2v3h3m8 0v-3h-3v3h3m8 0v-3h-3v3h3Z\"/>"
		},
		"skip-next": {
			"body": "<path fill=\"currentColor\" d=\"M15.4 12.5L5 6v13l1-.62l9.4-5.88m-1.9 0L6 17.2V7.8l7.5 4.7M18 6h-1v13h1V6Z\"/>"
		},
		"skip-previous": {
			"body": "<path fill=\"currentColor\" d=\"M7.6 12.5L18 6v13l-1-.62l-9.4-5.88m1.9 0l7.5 4.7V7.8l-7.5 4.7M5 6h1v13H5V6Z\"/>"
		},
		"sleep": {
			"body": "<path fill=\"currentColor\" d=\"M2 13h5v1l-3.74 5H7v1H2v-1l3.75-5H2v-1m7-4h5v1l-3.74 5H14v1H9v-1l3.75-5H9V9m7-4h5v1l-3.74 5H21v1h-5v-1l3.75-5H16V5Z\"/>"
		},
		"sleep-off": {
			"body": "<path fill=\"currentColor\" d=\"m2.79 4.46l.71-.71L20.25 20.5l-.71.71L14 15.66V16H9v-1l1.86-2.5l-8.07-8.04M2 13h5v1l-3.74 5H7v1H2v-1l3.75-5H2v-1m12-4v1l-1.21 1.62l-.72-.71l.68-.91h-1.59l-1-1H14m-3.74 6h3.08l-1.76-1.76L10.26 15M16 5h5v1l-3.74 5H21v1h-5v-1l3.75-5H16V5Z\"/>"
		},
		"spellcheck": {
			"body": "<path fill=\"currentColor\" d=\"m8.5 17.5l.71-.71l3.5 3.5l7.79-7.79l.71.71l-8.5 8.5L8.5 17.5M4.71 13L3.5 16h-1L7.35 4h1.4l4.85 12h-1l-1.21-3H4.71m.41-1H11L8.05 4.74L5.12 12Z\"/>"
		},
		"square": {
			"body": "<path fill=\"currentColor\" d=\"M3 4h17v17H3V4m1 1v15h15V5H4Z\"/>"
		},
		"star": {
			"body": "<path fill=\"currentColor\" d=\"M12.86 10.44L11 6.06l-1.86 4.39l-4.75.41L8 14l-1.08 4.63L11 16.17l4.09 2.46L14 14l3.61-3.14l-4.75-.42m3.73 10.26L11 17.34L5.42 20.7l1.46-6.35l-4.92-4.28l6.49-.57l2.55-6l2.55 6l6.49.57l-4.92 4.27l1.47 6.36Z\"/>"
		},
		"star-half": {
			"body": "<path fill=\"currentColor\" d=\"m11 6.06l-1.86 4.39l-4.75.41L8 14l-1.08 4.63L11 16.18v1.16L5.42 20.7l1.46-6.35l-4.92-4.28l6.49-.57l2.55-6v2.56Z\"/>"
		},
		"stop": {
			"body": "<path fill=\"currentColor\" d=\"M17 18H6V7h11v11M7 8v9h9V8H7Z\"/>"
		},
		"tab": {
			"body": "<path fill=\"currentColor\" d=\"M6 4h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8h-8V5H6m13 2a2 2 0 0 0-2-2h-5v4h7V7Z\"/>"
		},
		"tab-plus": {
			"body": "<path fill=\"currentColor\" d=\"M6 4h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-8h-8V5H6m13 2a2 2 0 0 0-2-2h-5v4h7V7M8 18v-2H6v-1h2v-2h1v2h2v1H9v2H8Z\"/>"
		},
		"table": {
			"body": "<path fill=\"currentColor\" d=\"M6 5h11a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3M4 17a2 2 0 0 0 2 2h5v-3H4v1m7-5H4v3h7v-3m6 7a2 2 0 0 0 2-2v-1h-7v3h5m2-7h-7v3h7v-3M4 11h7V8H4v3m8 0h7V8h-7v3Z\"/>"
		},
		"taco": {
			"body": "<path fill=\"currentColor\" d=\"M3.5 18A2.5 2.5 0 0 1 1 15.5C1 11.36 4.81 8 9.5 8c.69 0 1.36.07 2 .21c.64-.14 1.31-.21 2-.21c4.69 0 8.5 3.36 8.5 7.5a2.5 2.5 0 0 1-2.5 2.5h-16M2 15.5A1.5 1.5 0 0 0 3.5 17A1.5 1.5 0 0 0 5 15.5c0-2.78 1.71-5.2 4.25-6.5C5.22 9.12 2 12 2 15.5M19.5 17a1.5 1.5 0 0 0 1.5-1.5c0-3.59-3.36-6.5-7.5-6.5C9.36 9 6 11.91 6 15.5c0 .56-.19 1.08-.5 1.5h14Z\"/>"
		},
		"tag": {
			"body": "<path fill=\"currentColor\" d=\"M15.62 21.12a3 3 0 0 1-4.24 0L3.05 13C2.45 12.45 2 11.63 2 10.75V6a3 3 0 0 1 3-3h4.75c.88 0 1.7.45 2.25 1.05l8.07 8.38a3 3 0 0 1 0 4.24l-4.45 4.45m-.71-.71l4.45-4.45c.78-.78.78-2.05 0-2.83l-8.25-8.55C10.78 4.2 10.3 4 9.75 4l-4.78-.03C3.87 3.97 3 4.9 3 6v4.75c0 .55.2 1.03.58 1.36l8.5 8.3c.78.78 2.05.78 2.83 0M6.5 5A2.5 2.5 0 0 1 9 7.5A2.5 2.5 0 0 1 6.5 10A2.5 2.5 0 0 1 4 7.5A2.5 2.5 0 0 1 6.5 5m0 1A1.5 1.5 0 0 0 5 7.5A1.5 1.5 0 0 0 6.5 9A1.5 1.5 0 0 0 8 7.5A1.5 1.5 0 0 0 6.5 6Z\"/>"
		},
		"television": {
			"body": "<path fill=\"currentColor\" d=\"M8 21v-1h1v-1H4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-5v1h1v1H8m2-2v1h3v-1h-3M4 5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Z\"/>"
		},
		"thumb-down": {
			"body": "<path fill=\"currentColor\" d=\"M21 15h-3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1m0-1V5h-3v9h3M5.28 5.97l-3 5c-.18.3-.28.66-.28 1.03v1a2 2 0 0 0 2 2h5.61l-1.46 5.44v.02c-.09.33-.01.7.26.96l6.01-6l-.01-.01c.37-.36.59-.86.59-1.41V7a2 2 0 0 0-2-2H7c-.73 0-1.37.39-1.72.97M1 12c0-.59.17-1.15.47-1.61l2.91-4.84C4.89 4.62 5.87 4 7 4h6a3 3 0 0 1 3 3v7c0 .83-.33 1.58-.88 2.12l-6.71 6.72l-.71-.71c-.53-.53-.7-1.29-.51-1.97L8.31 16H4a3 3 0 0 1-3-3v-1Z\"/>"
		},
		"thumb-up": {
			"body": "<path fill=\"currentColor\" d=\"M2 10h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1m0 1v9h3v-9H2m15.72 8.03l3-5c.18-.3.28-.66.28-1.03v-1a2 2 0 0 0-2-2h-5.61l1.46-5.44v-.02a.97.97 0 0 0-.26-.96l-6 6.01C8.22 9.95 8 10.45 8 11v7a2 2 0 0 0 2 2h6c.73 0 1.37-.39 1.72-.97M22 13c0 .59-.17 1.15-.47 1.61l-2.91 4.84C18.11 20.38 17.13 21 16 21h-6a3 3 0 0 1-3-3v-7c0-.83.34-1.58.88-2.12l6.71-6.72l.71.71c.53.53.7 1.29.51 1.97L14.69 9H19a3 3 0 0 1 3 3v1Z\"/>"
		},
		"thumbs-up-down": {
			"body": "<path fill=\"currentColor\" d=\"M10.9 8.43L11 8a1 1 0 0 0-1-1H4.93l.92-3.44v-.02a.97.97 0 0 0-.26-.96l-4 4.01C1.22 6.95 1 7.45 1 8v4a2 2 0 0 0 2 2h4c.8 0 1.5-.47 1.81-1.14H8.8l2.1-4.43M7 15H3a3 3 0 0 1-3-3V8c0-.83.34-1.58.88-2.12l4.71-4.72l.71.71c.53.53.7 1.29.51 1.97L6.23 6H10a2 2 0 0 1 2 2c0 .34-.08.66-.23.94l-2.01 4.23A3 3 0 0 1 7 15m5.1 1.57L12 17a1 1 0 0 0 1 1h5.07l-.92 3.44v.02c-.09.33-.01.7.26.96l4.01-4.01h-.01c.37-.36.59-.86.59-1.41v-4a2 2 0 0 0-2-2h-4c-.8 0-1.5.47-1.81 1.14h.01l-2.1 4.43M16 10h4a3 3 0 0 1 3 3v4c0 .83-.33 1.58-.88 2.12l-4.71 4.72l-.71-.71c-.53-.53-.7-1.29-.51-1.97l.58-2.16H13a2 2 0 0 1-2-2c0-.34.09-.66.23-.94l2.01-4.23A3 3 0 0 1 16 10Z\"/>"
		},
		"tooltip": {
			"body": "<path fill=\"currentColor\" d=\"M5 4h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3.5l-3 3l-3-3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.91l2.59 2.59L14.09 18H18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5Z\"/>"
		},
		"tooltip-text": {
			"body": "<path fill=\"currentColor\" d=\"M5 4h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3.5l-3 3l-3-3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.91l2.59 2.59L14.09 18H18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5m0 3h13v1H5V8m0 3h12v1H5v-1m0 3h8v1H5v-1Z\"/>"
		},
		"triangle": {
			"body": "<path fill=\"currentColor\" d=\"M1 21L11.5 2.81L22 21H1m19.27-1L11.5 4.81L2.73 20h17.54Z\"/>"
		},
		"trophy": {
			"body": "<path fill=\"currentColor\" d=\"M7 22a4 4 0 0 1 4-4v-1a5 5 0 0 1-4.9-4H5a3 3 0 0 1-3-3V5h2c.77 0 1.47.29 2 .76V3h11v2.76c.53-.47 1.23-.76 2-.76h2v5a3 3 0 0 1-3 3h-1.1a5 5 0 0 1-4.9 4v1a4 4 0 0 1 4 4H7m5-3h-1c-1.31 0-2.42.83-2.83 2h6.66A2.99 2.99 0 0 0 12 19m4-15H7v8a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4V4m4 6V6h-1a2 2 0 0 0-2 2v4h1a2 2 0 0 0 2-2M3 10a2 2 0 0 0 2 2h1V8a2 2 0 0 0-2-2H3v4Z\"/>"
		},
		"truck": {
			"body": "<path fill=\"currentColor\" d=\"M5.5 14a2.5 2.5 0 0 1 2.45 2H15V6H4a2 2 0 0 0-2 2v8h1.05a2.5 2.5 0 0 1 2.45-2m0 5a2.5 2.5 0 0 1-2.45-2H1V8a3 3 0 0 1 3-3h11a1 1 0 0 1 1 1v2h3l3 4v5h-2.05a2.5 2.5 0 0 1-4.9 0h-7.1a2.5 2.5 0 0 1-2.45 2m0-4A1.5 1.5 0 0 0 4 16.5A1.5 1.5 0 0 0 5.5 18A1.5 1.5 0 0 0 7 16.5A1.5 1.5 0 0 0 5.5 15m12-1a2.5 2.5 0 0 1 2.45 2H21v-3.68l-.24-.32H16v2.5c.42-.31.94-.5 1.5-.5m0 1a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5M16 9v2h4l-1.5-2H16Z\"/>"
		},
		"undo-variant": {
			"body": "<path fill=\"currentColor\" d=\"M6 20v-1h1v1H6m7-12a6 6 0 0 1 6 6a6 6 0 0 1-6 6H9v-1h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5H5.91l3.04 3.04l-.71.7L4 8.5l4.24-4.24l.71.7L5.91 8H13Z\"/>"
		},
		"unfold-less-horizontal": {
			"body": "<path fill=\"currentColor\" d=\"M15.74 5.29L11.5 9.54L7.26 5.29l.7-.7l3.54 3.53l3.54-3.53l.7.7m0 14.42l-.7.7l-3.54-3.53l-3.54 3.53l-.7-.7l4.24-4.25l4.24 4.25Z\"/>"
		},
		"unfold-less-vertical": {
			"body": "<path fill=\"currentColor\" d=\"m18.71 16.74l-4.25-4.24l4.25-4.24l.7.7l-3.53 3.54l3.53 3.54l-.7.7m-14.42 0l-.7-.7l3.53-3.54l-3.53-3.54l.7-.7l4.25 4.24l-4.25 4.24Z\"/>"
		},
		"unfold-more-horizontal": {
			"body": "<path fill=\"currentColor\" d=\"m15.74 8.83l-.7.71L11.5 6L7.96 9.54l-.7-.71l4.24-4.24l4.24 4.24m0 7.34l-4.24 4.24l-4.24-4.24l.7-.71L11.5 19l3.54-3.54l.7.71Z\"/>"
		},
		"unfold-more-vertical": {
			"body": "<path fill=\"currentColor\" d=\"m15.17 16.74l-.71-.7L18 12.5l-3.54-3.54l.71-.7l4.24 4.24l-4.24 4.24m-7.34 0L3.59 12.5l4.24-4.24l.71.7L5 12.5l3.54 3.54l-.71.7Z\"/>"
		},
		"ungroup": {
			"body": "<path fill=\"currentColor\" d=\"M2 3h3v1h8V3h3v3h-1v4h3V9h3v3h-1v7h1v3h-3v-1h-7v1H8v-3h1v-3H5v1H2v-3h1V6H2V3m16 9v-1h-3v3h1v3h-3v-1h-3v3h1v1h7v-1h1v-7h-1m-5-6V5H5v1H4v8h1v1h4v-3H8V9h3v1h3V6h-1m-2 6h-1v3h3v-1h1v-3h-3v1M3 5h1V4H3v1m11 0h1V4h-1v1m-5 6h1v-1H9v1m10 0h1v-1h-1v1M9 21h1v-1H9v1m10 0h1v-1h-1v1M3 16h1v-1H3v1m11 0h1v-1h-1v1Z\"/>"
		},
		"upload": {
			"body": "<path fill=\"currentColor\" d=\"M12 18.16V5.91l5.25 5.25l.75-.66L11.5 4L5 10.5l.75.66L11 5.91v12.25h1M3 19h1v2h15v-2h1v3H3v-3Z\"/>"
		},
		"vector-arrange-above": {
			"body": "<path fill=\"currentColor\" d=\"M18 22h-8a3 3 0 0 1-3-3v-1h1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V8h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3m-6-6H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3m0-1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8Z\"/>"
		},
		"vector-arrange-below": {
			"body": "<path fill=\"currentColor\" d=\"M10 8h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8M4 2h8a3 3 0 0 1 3 3v1h-1V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1v1H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z\"/>"
		},
		"vector-combine": {
			"body": "<path fill=\"currentColor\" d=\"M4 2h8a3 3 0 0 1 3 3v3h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m11 11a3 3 0 0 1-3 3H8v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-3v4M4 3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3v-4a3 3 0 0 1 3-3h4V5a2 2 0 0 0-2-2H4m8 12a2 2 0 0 0 2-2V9h-4a2 2 0 0 0-2 2v4h4Z\"/>"
		},
		"vector-difference": {
			"body": "<path fill=\"currentColor\" d=\"M4 2h8a3 3 0 0 1 3 3v1h-1V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1v1H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m11 6v3h-1V9h-2V8h3m3 0a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-1h1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V8h1M7 15v-2h1v2h2v1H7v-1m8-2a3 3 0 0 1-3 3v-1a2 2 0 0 0 2-2h1m-5-4a2 2 0 0 0-2 2H7a3 3 0 0 1 3-3v1Z\"/>"
		},
		"vector-difference-ab": {
			"body": "<path fill=\"currentColor\" d=\"M18 8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-4h5a2 2 0 0 0 2-2V8h4M8 16v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-3v4a3 3 0 0 1-3 3H8m3-14h1a3 3 0 0 1 3 3v1h-1V5a2 2 0 0 0-2-2h-1V2M4 2h1v1H4a2 2 0 0 0-2 2v1H1V5a3 3 0 0 1 3-3m3 1V2h2v1H7m-5 7H1V8h1v2m0 3a2 2 0 0 0 2 2h1v1H4a3 3 0 0 1-3-3v-1h1v1Z\"/>"
		},
		"vector-difference-ba": {
			"body": "<path fill=\"currentColor\" d=\"M4 2h8a3 3 0 0 1 3 3v4h-5a2 2 0 0 0-2 2v5H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m10 6V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3v-4a3 3 0 0 1 3-3h4m4 0a3 3 0 0 1 3 3v1h-1v-1a2 2 0 0 0-2-2h-1V8h1m3 8h-1v-2h1v2m0 3a3 3 0 0 1-3 3h-1v-1h1a2 2 0 0 0 2-2v-1h1v1m-8 3v-1h2v1h-2m-3 0a3 3 0 0 1-3-3v-1h1v1a2 2 0 0 0 2 2h1v1h-1Z\"/>"
		},
		"vector-intersection": {
			"body": "<path fill=\"currentColor\" d=\"M4 2h1v1H4a2 2 0 0 0-2 2v1H1V5a3 3 0 0 1 3-3m5 0v1H7V2h2m3 0a3 3 0 0 1 3 3v1h-1V5a2 2 0 0 0-2-2h-1V2h1m3 6v5a3 3 0 0 1-3 3H7v-5a3 3 0 0 1 3-3h5M2 10H1V8h1v2m0 3a2 2 0 0 0 2 2h1v1H4a3 3 0 0 1-3-3v-1h1v1m6 6a2 2 0 0 0 2 2h1v1h-1a3 3 0 0 1-3-3v-1h1v1m10 2a2 2 0 0 0 2-2v-1h1v1a3 3 0 0 1-3 3h-1v-1h1m2-10a2 2 0 0 0-2-2h-1V8h1a3 3 0 0 1 3 3v1h-1v-1m1 5h-1v-2h1v2m-8 6v-1h2v1h-2m-1-7a2 2 0 0 0 2-2V9h-4a2 2 0 0 0-2 2v4h4Z\"/>"
		},
		"vector-union": {
			"body": "<path fill=\"currentColor\" d=\"M4 2h8a3 3 0 0 1 3 3v3h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m10 3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-4V5Z\"/>"
		},
		"view-dashboard": {
			"body": "<path fill=\"currentColor\" d=\"M12 4h8v6h-8V4m0 17V11h8v10h-8m-9 0v-6h8v6H3m0-7V4h8v10H3m1-9v8h6V5H4m9 0v4h6V5h-6m0 7v8h6v-8h-6m-9 4v4h6v-4H4Z\"/>"
		},
		"view-module": {
			"body": "<path fill=\"currentColor\" d=\"M15 6h5v6h-5V6m-6 6V6h5v6H9m6 7v-6h5v6h-5m-6 0v-6h5v6H9m-6 0v-6h5v6H3m0-7V6h5v6H3m1-5v4h3V7H4m6 0v4h3V7h-3m6 0v4h3V7h-3M4 14v4h3v-4H4m6 0v4h3v-4h-3m6 0v4h3v-4h-3Z\"/>"
		},
		"volume": {
			"body": "<path fill=\"currentColor\" d=\"M21 12.5a7.5 7.5 0 0 1-7 7.484V18.98a6.5 6.5 0 0 0 0-12.96V5.016a7.5 7.5 0 0 1 7 7.484Zm-3 0a4.5 4.5 0 0 1-4 4.473v-1.008a3.501 3.501 0 0 0 0-6.93V8.027a4.5 4.5 0 0 1 4 4.473Zm-3 0a1.5 1.5 0 0 1-1 1.415v-2.83a1.5 1.5 0 0 1 1 1.415ZM2 9h4l4-4h2v15h-2l-4-4H2V9Zm1 6h3.414l4 4H11V6h-.586l-4 4H3v5Z\"/>",
			"hidden": true
		},
		"volume-high": {
			"body": "<path fill=\"currentColor\" d=\"M21 12.5c0 3.97-3.09 7.23-7 7.5v-1c3.36-.27 6-3.08 6-6.5S17.36 6.27 14 6V5c3.91.27 7 3.53 7 7.5m-3 0c0 2.32-1.75 4.22-4 4.47v-1.01c1.7-.24 3-1.7 3-3.46s-1.3-3.22-3-3.46V8.03c2.25.25 4 2.15 4 4.47m-3 0c0 .65-.42 1.21-1 1.41v-2.82c.58.2 1 .76 1 1.41M2 9h4l4-4h2v15h-2l-4-4H2V9m1 6h3.41l4 4H11V6h-.59l-4 4H3v5Z\"/>"
		},
		"volume-minus": {
			"body": "<path fill=\"currentColor\" d=\"M2 9h4l4-4h2v15h-2l-4-4H2V9m1 6h3.41l4 4H11V6h-.59l-4 4H3v5m11-2v-1h7v1h-7Z\"/>"
		},
		"volume-mute": {
			"body": "<path fill=\"currentColor\" d=\"M2 9h4l4-4h2v15h-2l-4-4H2V9m1 6h3.41l4 4H11V6h-.59l-4 4H3v5m10.96.33l2.83-2.83l-2.83-2.83l.71-.71l2.83 2.83l2.83-2.83l.71.71l-2.83 2.83l2.83 2.83l-.71.71l-2.83-2.83l-2.83 2.83l-.71-.71Z\"/>"
		},
		"volume-off": {
			"body": "<path fill=\"currentColor\" d=\"m2.79 4.46l.71-.71L20.25 20.5l-.71.71l-2.24-2.24c-.98.57-2.1.93-3.3 1.03v-1a6.8 6.8 0 0 0 2.57-.77l-1.51-1.51c-.34.13-.69.21-1.06.25v-1.01c.09-.01.17-.02.25-.04L12 13.66V20h-2l-4-4H2V9h4l.67-.67l-3.88-3.87M21 12.5c0 2.03-.81 3.87-2.12 5.22l-.7-.72A6.426 6.426 0 0 0 20 12.5c0-3.42-2.64-6.23-6-6.5V5c3.91.27 7 3.53 7 7.5m-3 0c0 1.2-.47 2.29-1.24 3.1l-.7-.71c.58-.62.94-1.47.94-2.39c0-1.76-1.3-3.22-3-3.46V8.03c2.25.25 4 2.15 4 4.47m-3 0c0 .37-.14.71-.36 1l-.64-.66v-1.75c.58.2 1 .76 1 1.41M6.41 10H3v5h3.41l4 4H11v-6.34L7.38 9.04l-.97.96M10 5h2v5.84l-1-1V6h-.59L8.79 7.63l-.71-.71L10 5Z\"/>"
		},
		"volume-plus": {
			"body": "<path fill=\"currentColor\" d=\"M2 9h4l4-4h2v15h-2l-4-4H2V9m1 6h3.41l4 4H11V6h-.59l-4 4H3v5m14 1v-3h-3v-1h3V9h1v3h3v1h-3v3h-1Z\"/>"
		},
		"wallet": {
			"body": "<path fill=\"currentColor\" d=\"M4 3a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h13a3 3 0 0 0 3-3v-1.77c.63-.57 1-1.38 1-2.23v-5c0-.85-.37-1.66-1-2.23V6a3 3 0 0 0-3-3H4m0 1h13a2 2 0 0 1 2 2v1.17c-.32-.11-.66-.17-1-.17h-6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h6c.34 0 .68-.06 1-.17V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 4h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m2.5 2a2.5 2.5 0 0 0-2.5 2.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5m0 1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5Z\"/>"
		},
		"wifi": {
			"body": "<path fill=\"currentColor\" d=\"m11.5 20.5l-4.5-6c1.24-.94 2.81-1.5 4.5-1.5s3.26.56 4.5 1.5l-4.5 6m0-1.66l3.07-4.07a6.5 6.5 0 0 0-6.14 0l3.07 4.07M11.5 4c3.73 0 7.17 1.24 9.93 3.32l-.6.8C18.23 6.16 15 5 11.5 5S4.77 6.16 2.17 8.12l-.6-.8C4.33 5.24 7.77 4 11.5 4m0 6c2.37 0 4.56.79 6.32 2.11l-.6.8A9.458 9.458 0 0 0 11.5 11c-2.15 0-4.13.71-5.72 1.91l-.6-.8C6.94 10.79 9.13 10 11.5 10m0-3c3.05 0 5.86 1 8.12 2.72l-.62.78A12.45 12.45 0 0 0 11.5 8c-2.82 0-5.43.94-7.5 2.5l-.62-.78C5.64 8 8.45 7 11.5 7Z\"/>"
		},
		"xml": {
			"body": "<path fill=\"currentColor\" d=\"m16.17 17.74l-.71-.7L20 12.5l-4.54-4.54l.71-.7l5.24 5.24l-5.24 5.24m-9.34 0L1.59 12.5l5.24-5.24l.71.7L3 12.5l4.54 4.54l-.71.7M12.73 5h1l-3.46 15h-1l3.46-15Z\"/>"
		}
	},
	"lastModified": 1671175242,
	"width": 24,
	"height": 24
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1708264207003, function(require, module, exports) {
module.exports = {
	"prefix": "mdi-light",
	"name": "Material Design Light",
	"total": 284,
	"author": {
		"name": "Pictogrammers",
		"url": "https://github.com/Templarian/MaterialDesignLight"
	},
	"license": {
		"title": "Open Font License",
		"spdx": "OFL-1.1",
		"url": "https://github.com/Templarian/MaterialDesignLight/blob/master/LICENSE.md"
	},
	"samples": [
		"cart",
		"home",
		"login"
	],
	"height": 24,
	"category": "General",
	"palette": false
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1708264207001);
})()
//miniprogram-npm-outsideDeps=[]
//# sourceMappingURL=index.js.map