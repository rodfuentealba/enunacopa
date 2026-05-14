import { gsap, ScrollTrigger } from '../gsap.config'

export function footerEntry() {
  const section = document.querySelector('#footer')
  if (!section) return

  const left = section.querySelector('.footer-left')
  const center = section.querySelector('.footer-center')
  const right = section.querySelector('.footer-right')

  if (!left || !center || !right) return

  gsap.set(left, { y: 15, opacity: 0 })
  gsap.set(center, { y: 15, opacity: 0 })
  gsap.set(right, { y: 15, opacity: 0 })

  function enter() {
    const tl = gsap.timeline()
    tl.to([left, center, right], {
      y: 0,
      opacity: 1,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power3.out',
      clearProps: 'transform',
    })
  }

  function leave() {
    gsap.to([left, center, right], {
      opacity: 0,
      y: 10,
      duration: 0.3,
      stagger: 0.05,
      ease: 'power2.out',
    })
  }

  ScrollTrigger.create({
    trigger: section,
    start: 'top bottom',
    onEnter: enter,
    onLeaveBack: leave,
    onEnterBack: enter,
  })
}
