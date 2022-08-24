(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var bannerSize = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var w = bannerSize.w;
var h = bannerSize.h;

var data = {
	"300x250": {
		east: {
			right: { w: 44, h: 63 },
			left: { w: 80, h: 59 },
			bottom: { w: 32, h: 59 }
		},
		west: {
			right: { w: 47, h: 63 },
			left: { w: 80, h: 59 },
			bottom: { w: 32, h: 59 }
		}
	},
	"300x600": {
		east: {
			right: { w: 44, h: 63 },
			left: { w: 80, h: 59 },
			bottom: { w: 32, h: 59 }
		},
		west: {
			right: { w: 47, h: 63 },
			left: { w: 80, h: 59 },
			bottom: { w: 32, h: 59 }
		}
	}
};

var _window$universalBanner = window.universalBanner;
var size = _window$universalBanner.size;
var eastWest = _window$universalBanner.eastWest;

var mask = data[size][eastWest];

function maskerItem(id) {
	var tl = new TimelineMax();
	var el = document.getElementById("mask-" + id);
	var elImage = el.querySelector("img");
	tl.set(el, { width: mask[id].w, height: mask[id].h });
	return el;
}

function maskerAll() {
	var tl = new TimelineMax();
	var elDuration = 12;
	tl.add("el");
	maskerItem("left");
	tl.from("#mask-left img", { duration: elDuration, x: "+=" + mask.left.w / 2 }, "el");

	maskerItem("right");
	tl.from("#mask-right img", { duration: elDuration, x: "-=" + mask.right.w / 2 }, "el");

	maskerItem("bottom");
	tl.from("#mask-bottom img", { duration: elDuration, y: "+=" + mask.bottom.h / 2 }, "el");

	tl.to(".sky", { duration: elDuration, x: 0 }, "el");
	return tl;
}

function init() {
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	maskerAll();
	tl.to(".t1", { duration: .3, opacity: 0 }, "+=3");
	tl.from(".t2", { duration: .3, opacity: 0 });
	tl.to(".t2", { duration: .3, opacity: 0 }, "+=4");
	tl.from(".t3", { duration: .3, opacity: 0 });

	tl.add("end", "+=4");
	tl.to("#man", { duration: 1, x: "-=50" }, "end");
	tl.to(".cover2", { duration: 1, x: 0 }, "end");
	tl.to(".sky", { duration: 1, x: -45 }, "end");
	tl.to([".t3", ".logo_1"], { duration: .3, opacity: 0 }, "end");
	tl.from([".t4", ".logo_2a", ".logo_2b"], { duration: .3, opacity: 0 });
	return tl;
}

exports.init = init;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.init)();

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
