import { gsap } from '../gsap.config'

export function navbarEntry() {
  const logo = document.querySelector('.logo')
  const navSection = document.querySelector('#nav-section')
  const controls = document.querySelector('.nav-controls')
  const navLinks = document.querySelectorAll<HTMLElement>('.dnav-link')

  if (!logo || !navSection || !controls || !navLinks.length) return

  gsap.set([logo, navSection, controls], { opacity: 0 })
  gsap.set(navLinks, { y: 12, opacity: 0 })

  gsap.set(logo, { x: -30 })
  gsap.set(navSection, { y: -12 })
  gsap.set(controls, { x: 30 })

  const tl = gsap.timeline({ delay: 0.1 })
  tl.to(logo, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', clearProps: 'transform' })
    .to(controls, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', clearProps: 'transform' }, '-=0.2')
    .to(navSection, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', clearProps: 'transform' }, '-=0.3')
    .to(navLinks, { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, ease: 'power2.out', clearProps: 'transform' }, '-=0.2')
}
