import { gsap } from '../gsap.config'

export function pageEnter(target: string | Element, delay = 0) {
  return gsap.from(target, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay,
    ease: 'power2.out',
  })
}

export function pageLeave(target: string | Element) {
  return gsap.to(target, {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: 'power2.in',
  })
}
