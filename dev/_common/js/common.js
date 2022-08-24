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
			right: {w:44, h:63},
			left: {w:80, h:59},
			bottom: {w:32, h:59},
		},
		west: {
			right: {w:47, h:63},
			left: {w:80, h:59},
			bottom: {w:32, h:59},
		}
	}
}

const {size, eastWest} = window.universalBanner

const mask = data[size][eastWest]


function maskerItem(id){
	const tl = new TimelineMax()
	const el = document.getElementById(`mask-${id}`)
	const elImage = el.querySelector("img")
	tl.set(el, {width:mask[id].w, height:mask[id].h })
	return el
}

function maskerAll(){
	const tl = new TimelineMax()
	const elDuration = 12
	tl.add("el")
	maskerItem("left")	
	tl.from("#mask-left img", {duration:elDuration, x:`+=${mask.left.w/2}` }, "el")

	maskerItem("right")
	tl.from("#mask-right img", {duration:elDuration, x:`-=${mask.right.w/2}` }, "el")

	maskerItem("bottom")
	tl.from("#mask-bottom img", {duration:elDuration, y:`+=${mask.bottom.h/2}` }, "el")

	tl.to(".sky", {duration:elDuration, x:0 }, "el")
	return tl
}



function init(){	
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	maskerAll()
	tl.to(".t1", {duration:.3, opacity:0}, "+=3")
	tl.from(".t2", {duration:.3, opacity:0})
	tl.to(".t2", {duration:.3, opacity:0}, "+=4")
	tl.from(".t3", {duration:.3, opacity:0})

	tl.add("end", "+=4")
	tl.to("#man", {duration: 1, x:"-=50"}, "end")
	tl.to(".cover2", {duration: 1, x:0}, "end")
	tl.to(".sky", {duration:1, x:-45 }, "end")
	tl.to([".t3", ".logo_1"], {duration:.3, opacity:0}, "end")
	tl.from([".t4", ".logo_2a", ".logo_2b"], {duration:.3, opacity:0})
	return tl
}





export {init}