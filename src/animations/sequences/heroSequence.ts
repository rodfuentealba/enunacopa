import { gsap } from '../gsap.config'

export function heroEntry() {
  const eyebrow = document.querySelector('.eyebrow')
  const tagline = document.querySelector('.tagline')
  const sub = document.querySelector('.sub')
  const cta = document.querySelector('.cta-btn')
  const scrollHint = document.querySelector('.scroll-hint')

  if (!eyebrow || !tagline || !sub || !cta) return

  gsap.set([eyebrow, tagline, sub, cta, scrollHint], { y: 40, opacity: 0 })

  const tl = gsap.timeline({ delay: 0.3 })
  tl.to([eyebrow, tagline, sub, cta, scrollHint].filter(Boolean), {
    y: 0,
    opacity: 1,
    duration: 0.7,
    stagger: 0.15,
    ease: 'power3.out',
    clearProps: 'transform',
  })
}
