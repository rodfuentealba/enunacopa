import { gsap, ScrollTrigger } from '../gsap.config'

export function collabEntry() {
  const section = document.querySelector('#collab')
  if (!section) return

  const medium = section.querySelector('.collab-medium')
  const display = section.querySelector('.collab-display')
  const small = section.querySelector('.collab-small')

  if (!medium || !display || !small) return

  const spans = display.querySelectorAll('span')

  gsap.set(medium, { y: -30, opacity: 0 })
  gsap.set(spans[0], { y: -20, opacity: 0 })
  gsap.set(spans[1], { y: 20, opacity: 0 })
  gsap.set(small, { y: 30, opacity: 0 })

  function enter() {
    gsap.to(medium, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', clearProps: 'transform' })
    gsap.to(spans[0], { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', clearProps: 'transform' })
    gsap.to(spans[1], { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', clearProps: 'transform' })
    gsap.to(small, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', clearProps: 'transform' })
  }

  function leave() {
    gsap.to([medium, spans[0], spans[1], small].filter(Boolean), { opacity: 0, duration: 0.3, stagger: 0.04, ease: 'power2.out' })
  }

  ScrollTrigger.create({
    trigger: section,
    start: 'top 80%',
    onEnter: enter,
    onLeaveBack: leave,
    onEnterBack: enter,
  })
}
