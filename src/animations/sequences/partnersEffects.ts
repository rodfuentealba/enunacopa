import { gsap, ScrollTrigger } from '../gsap.config'

export function partnersEntry() {
  const grid = document.querySelector('#partners .grid')
  if (!grid) return

  const leftCol = grid.children[0]
  const rightCol = grid.children[1]
  if (!leftCol || !rightCol) return

  const intro = leftCol.querySelector('p')
  const partnerItems = rightCol.querySelectorAll(':scope > div')

  gsap.set(partnerItems, { x: 80, opacity: 0 })
  gsap.set(intro, { x: -80, opacity: 0 })

  function enter() {
    gsap.to(partnerItems, { x: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power3.out', clearProps: 'transform' })
    gsap.to(intro, { x: 0, opacity: 1, duration: 0.5, ease: 'power2.out', clearProps: 'transform' })
  }

  function leave() {
    gsap.to([...Array.from(partnerItems), intro].filter(Boolean), { opacity: 0, duration: 0.3, stagger: 0.03, ease: 'power2.out' })
  }

  ScrollTrigger.create({
    trigger: '#partners',
    start: 'top 80%',
    onEnter: enter,
    onLeaveBack: leave,
    onEnterBack: enter,
  })
}
