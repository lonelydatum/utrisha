const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power3.out"
});



const {w, h} = size



function maskerItem(id){
	const tl = new TimelineMax()

	const el = document.getElementById(id)
	const elImage = el.querySelector("img")
	

	// tl.set(el, {width:elImage.width/2, height:elImage.height/2 })
	

	return el
}

function maskerAll(){
	const tl = new TimelineMax()
	const elDuration = 12
	tl.add("el")
	const imgCorn = maskerItem("mask-corn")
	tl.from("#mask-corn img", {duration:elDuration, x:`+=${imgCorn.offsetWidth/2}` }, "el")

	const imgLeaf = maskerItem("mask-leaf")
	tl.from("#mask-leaf img", {duration:elDuration, x:`-=${imgLeaf.offsetWidth/2}` }, "el")

	const imgWheat = maskerItem("mask-wheat")
	tl.from("#mask-wheat img", {duration:elDuration, y:`+=${imgWheat.offsetWidth/2}` }, "el")

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