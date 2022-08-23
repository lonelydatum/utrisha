import {init, size, olg} from './common.js'

const READ = {
	t1: 2.5,
	t1b: 2.5,
	t2: 3
}


function intro_O(){
	const tl = init()
	tl.from(".o", {duration:.3, scale:1, ease:'back.out', opacity:0}, "+=.2")
	tl.add("proline", "+=.4")
	tl.from(".o-shadow", {duration:.1, opacity:0}, "proline")
	tl.from(".proline", {scale:1, duration:.25, opacity:0, ease:'back.out'}, "proline")

	tl.to(".proline", {duration:.2, opacity:0}, "+=1")

	return tl
}

function text1(){
	const tl = new TimelineMax()
	tl.add("t1-in")
	tl.from(".t1a", {x:`-${size.w}`, duration:.2}, "t1-in")
	tl.from(".t1b", {x:size.w, duration:.2}, "t1-in")

	tl.add("t1-out", `+=${READ.t1}`)
	tl.to(".t1a", {opacity:0, x:`-${Math.min(size.w, 300)}`, duration:.3}, "t1-out")
	tl.to(".t1b", {opacity:0, x:Math.min(size.w, 300), duration:.3}, "t1-out")
	tl.to([".o-shadow", ".proline", ".o"], {duration:.1, opacity:0}, "+=.1")

	return tl
}

function end(){

	const tl = new TimelineMax()
	tl.from(".t2",  {duration:.3, opacity:0}, "+=.5")
	tl.to(".t2",  {duration:.3, opacity:0}, `+=${READ.t2}`)


	tl.add("cta", "+=.2")

	tl.from(".cta",  {duration:.3, opacity:0}, "cta")

	tl.add("end", "+=.3")
	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, opacity:0}, "end")

	return tl
}


////////////

function horizontal(duration=.3){


	TweenLite.set([".bring" ], {
		transformOrigin:`${size.w}px ${size.h}px`,
		x: -size.w/2,
		y: -size.h/2,
		scale: .5
	})

	const tl = init()
	
	const HEIGHT = Math.min(size.h*.7, 80)

	tl.from(".o",  {duration:.3, opacity:0}, "+=.2")
	tl.from(".proline", {scale:1, duration:.25, opacity:0, ease:'back.out'}, "+=.2")
	tl.to(".proline", {duration:.25, opacity:0}, "+=1")
	
	
	

	tl.add("t1-in", "+=.2")
	tl.from(".t1a", {duration, opacity:0, y:`-=${HEIGHT}`}, "t1-in")	
	tl.from(".t1b", {duration, opacity:0, y:`+=${HEIGHT}`}, "t1-in")	

	tl.add("t1-out", `+=${READ.t1}`)
	tl.to(".t1a", {duration, opacity:0, y:`-=${HEIGHT}`}, "t1-out")
	tl.to(".t1b", {duration, opacity:0, y:`+=${HEIGHT}`}, "t1-out")


	tl.add("t2-in", "+=.1")
	tl.from(".t2a", {duration, opacity:0, y:`-=${HEIGHT}`}, "t2-in")	
	tl.from(".t2b", {duration, opacity:0, y:`+=${HEIGHT}`}, "t2-in")	

	tl.add("t2-out", `+=${READ.t1b}`)
	tl.to(".t2a", {duration, opacity:0, y:`-=${HEIGHT}`}, "t2-out")
	tl.to(".t2b", {duration, opacity:0, y:`+=${HEIGHT}`}, "t2-out")
	



	tl.from(".bring", {scale:1, duration:.25, opacity:0, ease:'back.out'}, "+=.2")
	tl.to(".bring", {duration:.25, opacity:0}, "+=1.3")


	tl.from(".t2", {duration:.25, opacity:0}, "+=.2")
	tl.to(".t2", {duration:.25, opacity:0}, `+=${READ.t2}`)

	tl.from(".proline-end", {duration:.25, opacity:0}, "+=.1")
	tl.from(".cta", {duration:.25, opacity:0}, "+=.3")
	
	
	tl.add("end", "+=.3")
	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, opacity:0}, "end")


}
export {intro_O, text1, end, horizontal, READ}