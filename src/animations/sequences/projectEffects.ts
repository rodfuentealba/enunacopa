import { gsap, ScrollTrigger } from '../gsap.config'

export function projectEntry() {
  const section = document.querySelector('#project')
  if (!section) return

  const cols = section.querySelectorAll<HTMLElement>('.project-grid > div')
  if (cols.length < 2) return

  const leftItems = cols[0].children
  const rightItems = cols[1].children
  const brand = section.querySelector('.project-brand')

  gsap.set(leftItems, { x: -80, opacity: 0 })
  gsap.set(rightItems, { x: 80, opacity: 0 })
  gsap.set(brand, { y: 80, opacity: 0 })

  function enter() {
    gsap.to(leftItems, { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out', clearProps: 'transform' })
    gsap.to(rightItems, { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out', clearProps: 'transform' })
    gsap.to(brand, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', clearProps: 'transform' })
  }

  function leave() {
    gsap.to([...Array.from(leftItems), ...Array.from(rightItems), brand].filter(Boolean), { opacity: 0, duration: 0.3, stagger: 0.03, ease: 'power2.out' })
  }

  ScrollTrigger.create({
    trigger: section,
    start: 'top 80%',
    onEnter: enter,
    onLeaveBack: leave,
    onEnterBack: enter,
  })
}
