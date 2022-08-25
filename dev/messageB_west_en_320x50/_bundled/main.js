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
			right: { w: 71, h: 101 },
			left: { w: 121, h: 94 },
			bottom: { w: 50, h: 69 }
		},
		west: {
			right: { w: 76, h: 109 },
			left: { w: 121, h: 94 },
			bottom: { w: 50, h: 69 }
		}
	},
	"728x90": {
		east: {
			right: { w: 36, h: 22 },
			left: { w: 67, h: 32 },
			bottom: { w: 32, h: 59 }
		},
		west: {
			right: { w: 40, h: 27 },
			left: { w: 67, h: 32 },
			bottom: { w: 32, h: 59 }
		}
	},
	"320x50": {
		east: {},
		west: {}
	}
};

var read = {
	messageA: [3, 4, 4],
	messageB: [3, 4, 4]
};

var _window$universalBanner = window.universalBanner;
var size = _window$universalBanner.size;
var eastWest = _window$universalBanner.eastWest;
var name = _window$universalBanner.name;

var readAB = read[name];
console.log(readAB);

var mask = data[size][eastWest];

function maskerItem(id) {
	var tl = new TimelineMax();
	var el = document.getElementById("mask-" + id);
	var elImage = el.querySelector("img");
	tl.set(el, { width: mask[id].w, height: mask[id].h });
	return el;
}
var elDuration = 12;
function maskerAll() {
	var tl = new TimelineMax();

	tl.add("el");
	maskerItem("left");
	tl.from("#mask-left img", { duration: elDuration, x: "+=" + mask.left.w / 2 }, "el");

	maskerItem("right");
	tl.from("#mask-right img", { duration: elDuration, x: "-=" + mask.right.w / 2 }, "el");

	maskerItem("bottom");
	tl.from("#mask-bottom img", { duration: elDuration, y: "+=" + mask.bottom.h / 2 }, "el");

	return tl;
}

function end300x250() {
	var tl = new TimelineMax();
	tl.add("end", "+=" + readAB[2]);
	tl.to("#man", { duration: 1, x: "-=50" }, "end");
	tl.to(".cover2", { duration: 1, x: 0 }, "end");
	// tl.to(".sky", {duration:1, x:-45 }, "end")
	tl.to([".t3", ".logo_1"], { duration: .3, opacity: 0 }, "end");
	tl.from([".t4", ".logo_2a", ".logo_2b"], { duration: .3, opacity: 0 });
	return tl;
}

function end728x90() {
	var tl = new TimelineMax();
	tl.add("end", "+=" + readAB[2]);

	tl.to(".cover2", { duration: 1, x: 0 }, "end");
	// tl.to(".sky", {duration:1, x:-45 }, "end")
	tl.to([".t3", ".logo_1"], { duration: .3, opacity: 0 }, "end");
	tl.from([".t4", ".logo_2a", ".logo_2b"], { duration: .3, opacity: 0 });
	return tl;
}

function end300x600() {
	var tl = new TimelineMax();
	tl.add("end", "+=" + readAB[2]);

	tl.to([".t3", ".logo_1"], { duration: .3, opacity: 0 }, "end");
	tl.from([".t4", ".logo_2a", ".logo_2b"], { duration: .3, opacity: 0 });
	return tl;
}

function init() {

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	maskerAll();

	tl.to(".t1", { duration: .3, opacity: 0 }, "+=" + readAB[0]);
	tl.from(".t2", { duration: .3, opacity: 0 });
	tl.to(".t2", { duration: .3, opacity: 0 }, "+=" + readAB[1]);
	tl.from(".t3", { duration: .3, opacity: 0 });

	if (size === "300x250") {
		tl.add(end300x250());
	} else if (size === "300x600") {
		TweenLite.from("#man", { duration: elDuration, y: "+=10" }, "end");
		TweenLite.from(".sky", { duration: elDuration, x: -40 });
		tl.add(end300x600());
	} else if (size === "728x90") {
		TweenLite.to("#man", { duration: elDuration, y: -29 }, "end");
		TweenLite.to(".sky", { duration: elDuration, x: -5 });
		tl.add(end728x90());
	}

	return;
}

function size320x50() {

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	tl.to(".t1", { duration: .3, opacity: 0 }, "+=" + readAB[0]);
	tl.from(".t2", { duration: .3, opacity: 0 });

	tl.to(".t2", { duration: .3, opacity: 0 }, "+=" + readAB[1]);
	tl.from(".t3", { duration: .3, opacity: 0 });

	tl.add("end", "+=" + readAB[2]);
	tl.to([".t3", ".logo_1"], { duration: .3, opacity: 0 }, "end");
	tl.from([".logo_2", ".logo_3"], { duration: .3, opacity: 0 });
	tl.from(".t4", { duration: .3, opacity: 0 }, "+=.3");
}

exports.init = init;
exports.size320x50 = size320x50;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

(0, _commonJsCommonJs.size320x50)();

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
