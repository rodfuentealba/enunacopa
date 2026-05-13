import { gsap, ScrollTrigger } from '../gsap.config'

export function servicesEntry() {
  const grid = document.querySelector('#services .grid')
  if (!grid) return

  const leftCol = grid.children[0]
  const rightCol = grid.children[1]
  if (!leftCol || !rightCol) return

  const serviceItems = leftCol.querySelectorAll(':scope > div')
  const footerNotes = rightCol.querySelectorAll('p')

  gsap.set(serviceItems, { x: -80, opacity: 0 })
  gsap.set(footerNotes, { x: 80, opacity: 0 })

  function enter() {
    gsap.to(serviceItems, { x: 0, opacity: 1, duration: 0.6, stagger: 0.3, ease: 'power3.out', clearProps: 'transform' })
    gsap.to(footerNotes, { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', clearProps: 'transform' })
  }

  function leave() {
    gsap.to([...Array.from(serviceItems), ...Array.from(footerNotes)], { opacity: 0, duration: 0.3, stagger: 0.03, ease: 'power2.out' })
  }

  ScrollTrigger.create({
    trigger: '#services',
    start: 'top 80%',
    onEnter: enter,
    onLeaveBack: leave,
    onEnterBack: enter,
  })
}
