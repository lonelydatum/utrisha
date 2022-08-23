(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power3.out"
});

var w = size.w;
var h = size.h;

function maskerItem(id) {
	var tl = new TimelineMax();

	var el = document.getElementById(id);
	var elImage = el.querySelector("img");

	tl.set(el, { width: elImage.width / 2, height: elImage.height / 2 });

	return elImage;
}

function maskerAll() {
	var tl = new TimelineMax();
	var elDuration = 12;
	tl.add("el");
	var imgCorn = maskerItem("mask-corn");
	tl.from(imgCorn, { duration: elDuration, x: "+=" + imgCorn.width / 2 }, "el");

	var imgLeaf = maskerItem("mask-leaf");
	tl.from(imgLeaf, { duration: elDuration, x: "-=" + imgLeaf.width / 2 }, "el");

	var imgWheat = maskerItem("mask-wheat");
	tl.from(imgWheat, { duration: elDuration, y: "+=" + imgWheat.width / 2 }, "el");

	tl.to(".sky", { duration: elDuration, x: 0 }, "el");

	tl.add("el2");
	tl.to("#man", { duration: 1, x: "-=50" }, "el2");
	tl.to(".cover2", { duration: 1, x: 0 }, "el2");
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

	tl.to([".t3", ".logo_1"], { duration: .3, opacity: 0 }, "+=4");
	tl.from([".t4", ".logo_2a", ".logo_2b"], { duration: .3, opacity: 0 });

	return tl;
}

exports.init = init;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

var data = {
	name: "david",
	tween: { x: -150, y: -125 }
};

(0, _commonJsCommonJs.init)();

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
