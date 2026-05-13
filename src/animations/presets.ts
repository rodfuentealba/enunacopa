import { gsap } from 'gsap'

export const fadeInUp = (el: string | Element, delay = 0) =>
  gsap.from(el, { opacity: 0, y: 40, duration: 0.8, delay, ease: 'power3.out' })

export const fadeInDown = (el: string | Element, delay = 0) =>
  gsap.from(el, { opacity: 0, y: -40, duration: 0.8, delay, ease: 'power3.out' })

export const fadeInLeft = (el: string | Element, delay = 0) =>
  gsap.from(el, { opacity: 0, x: -60, duration: 0.8, delay, ease: 'power3.out' })

export const fadeInRight = (el: string | Element, delay = 0) =>
  gsap.from(el, { opacity: 0, x: 60, duration: 0.8, delay, ease: 'power3.out' })

export const scaleIn = (el: string | Element, delay = 0) =>
  gsap.from(el, { opacity: 0, scale: 0.8, duration: 0.8, delay, ease: 'back.out(1.7)' })

export const floatLoop = (el: string | Element, yDelta = 12, duration = 3) =>
  gsap.to(el, {
    y: yDelta,
    duration,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })
