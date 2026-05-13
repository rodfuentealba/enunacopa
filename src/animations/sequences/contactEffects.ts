import { gsap, ScrollTrigger } from '../gsap.config'

export function contactEntry() {
  const section = document.querySelector('#contact')
  if (!section) return

  const image = section.querySelector('.contact-image')
  const brand = section.querySelector('.contact-brand')
  const title = section.querySelector('.contact-title')
  const desc = section.querySelector('.contact-desc')
  const cta = section.querySelector('.contact-cta')

  if (!image || !brand || !title || !desc || !cta) return

  const brandChildren = brand.querySelectorAll(':scope > *')
  const rightItems = [desc, cta]

  gsap.set(image, { y: 120, opacity: 0 })
  gsap.set(brandChildren, { scale: 0, opacity: 0 })
  gsap.set(title, { y: 30, opacity: 0 })
  gsap.set(rightItems, { x: 80, opacity: 0 })

  function enter() {
    const tl = gsap.timeline()
    tl.to(image, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', clearProps: 'transform' })
      .to(brandChildren, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.15, ease: 'back.out(2)', clearProps: 'transform' }, '-=0.4')
      .to(title, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out', clearProps: 'transform' }, '-=0.3')
      .to(rightItems, { x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out', clearProps: 'transform' }, '-=0.2')
  }

  function leave() {
    gsap.to([image, ...rightItems, title].filter(Boolean), { opacity: 0, duration: 0.4, stagger: 0.04, ease: 'power2.out' })
    gsap.to(brandChildren, { opacity: 0, duration: 0.3, stagger: 0.04, ease: 'power2.out' })
  }

  ScrollTrigger.create({
    trigger: section,
    start: 'top 80%',
    onEnter: enter,
    onLeaveBack: leave,
    onEnterBack: enter,
  })
}
