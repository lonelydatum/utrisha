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
	

	tl.set(el, {width:elImage.width/2, height:elImage.height/2 })
	

	return elImage
}

function maskerAll(){
	const tl = new TimelineMax()
	const elDuration = 12
	tl.add("el")
	const imgCorn = maskerItem("mask-corn")
	tl.from(imgCorn, {duration:elDuration, x:`+=${imgCorn.width/2}` }, "el")

	const imgLeaf = maskerItem("mask-leaf")
	tl.from(imgLeaf, {duration:elDuration, x:`-=${imgLeaf.width/2}` }, "el")

	const imgWheat = maskerItem("mask-wheat")
	tl.from(imgWheat, {duration:elDuration, y:`+=${imgWheat.width/2}` }, "el")

	tl.to(".sky", {duration:elDuration, x:0 }, "el")


	tl.add("el2")
	tl.to("#man", {duration: 1, x:"-=50"}, "el2")
	tl.to(".cover2", {duration: 1, x:0}, "el2")
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

	tl.to([".t3", ".logo_1"], {duration:.3, opacity:0}, "+=4")
	tl.from([".t4", ".logo_2a", ".logo_2b"], {duration:.3, opacity:0})


	


	

	return tl
}





export {init}