import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

gsap.defaults({
  ease: 'power3.out',
  duration: 1,
})

export { gsap, ScrollTrigger, MotionPathPlugin }
