const banner = document.getElementById('banner')
const bannerSize = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});



const {w, h} = bannerSize

var data = {
	"300x250": {
		east: {
			right: {w:44, h:63},
			left: {w:80, h:59},
			bottom: {w:32, h:59},
		},
		west: {
			right: {w:47, h:63},
			left: {w:80, h:59},
			bottom: {w:32, h:59},
		}
	},
	"300x600": {
		east: {
			right: {w:71, h:101},
			left: {w:121, h:94},
			bottom: {w:50, h:69},
		},
		west: {
			right: {w:76, h:109},
			left: {w:121, h:94},
			bottom: {w:50, h:69},
		}
	},
	"728x90": {
		east: {
			right: {w:36, h:22},
			left: {w:67, h:32},
			bottom: {w:32, h:59},
		},
		west: {
			right: {w:40, h:27},
			left: {w:67, h:32},
			bottom: {w:32, h:59},
		}
	},
	"320x50": {
		east: {},
		west: {}
	}
}

const read = {
	messageA: [3, 4, 4],
	messageB: [3, 4, 4]
}

const {size, eastWest, name} = window.universalBanner
const readAB = read[name]
console.log(readAB);

const mask = data[size][eastWest]


function maskerItem(id){
	const tl = new TimelineMax()
	const el = document.getElementById(`mask-${id}`)
	const elImage = el.querySelector("img")
	tl.set(el, {width:mask[id].w, height:mask[id].h })
	return el
}
const elDuration = 12
function maskerAll(){
	const tl = new TimelineMax()
	
	tl.add("el")
	maskerItem("left")	
	tl.from("#mask-left img", {duration:elDuration, x:`+=${mask.left.w/2}` }, "el")

	maskerItem("right")
	tl.from("#mask-right img", {duration:elDuration, x:`-=${mask.right.w/2}` }, "el")

	maskerItem("bottom")
	tl.from("#mask-bottom img", {duration:elDuration, y:`+=${mask.bottom.h/2}` }, "el")

	
	return tl
}

function end300x250(){
	const tl = new TimelineMax()
	tl.add("end", `+=${readAB[2]}`)
	tl.to("#man", {duration: 1, x:"-=50"}, "end")
	tl.to(".cover2", {duration: 1, x:0}, "end")
	tl.to(".sky", {duration:1, x:-45 }, "end")
	tl.to([".t3", ".logo_1"], {duration:.3, opacity:0}, "end")
	tl.from([".t4", ".logo_2a", ".logo_2b"], {duration:.3, opacity:0})
	return tl
}

function end728x90(){
	const tl = new TimelineMax()
	tl.add("end", `+=${readAB[2]}`)
	
	tl.to(".cover2", {duration: 1, x:0}, "end")
	
	tl.to([".t3", ".logo_1"], {duration:.3, opacity:0}, "end")
	tl.from([".t4", ".logo_2a", ".logo_2b"], {duration:.3, opacity:0})
	return tl
}


function end300x600(){
	const tl = new TimelineMax()
	tl.add("end", `+=${readAB[2]}`)
	
	
	
	tl.to([".t3", ".logo_1"], {duration:.3, opacity:0}, "end")
	tl.from([".t4", ".logo_2a", ".logo_2b"], {duration:.3, opacity:0})
	return tl
}



function init(){	

	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	

	maskerAll()
	
	tl.to(".t1", {duration:.3, opacity:0}, `+=${readAB[0]}`)
	tl.from(".t2", {duration:.3, opacity:0})
	tl.to(".t2", {duration:.3, opacity:0}, `+=${readAB[1]}`)
	tl.from(".t3", {duration:.3, opacity:0})

	if(size==="300x250"){
		TweenLite.to(".sky", {duration:elDuration, x:0 })
		tl.add(end300x250())
	}else if(size==="300x600"){
		TweenLite.from("#man", {duration: elDuration, y:"+=10"}, "end")
		TweenLite.from(".sky", {duration:elDuration, x:-40 })
		tl.add(end300x600())
	}else if(size==="728x90"){
		TweenLite.to("#man", {duration: elDuration, y:-29}, "end")
		TweenLite.to(".sky", {duration: elDuration, x:-5 })
		tl.add(end728x90())
	}
	
	return
	
}

function size320x50(){	

	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.to(".t1", {duration:.3, opacity:0}, `+=${readAB[0]}`)
	tl.from(".t2", {duration:.3, opacity:0})

	tl.to(".t2", {duration:.3, opacity:0}, `+=${readAB[1]}`)
	tl.from(".t3", {duration:.3, opacity:0})

	tl.add("end", `+=${readAB[2]}`)
	tl.to([".t3", ".logo_1"], {duration:.3, opacity:0}, "end")
	tl.from([".logo_2", ".logo_3"], {duration:.3, opacity:0})
	tl.from(".t4", {duration:.3, opacity:0}, "+=.3")

}





export {init, size320x50}