import { gsap } from '../gsap.config'

export function navbarEntry() {
  const logo = document.querySelector('.logo')
  const navSection = document.querySelector('#nav-section')
  const controls = document.querySelector('.nav-controls')
  const navLinks = document.querySelectorAll<HTMLElement>('.dnav-link')

  if (!logo || !navSection || !controls || !navLinks.length) return

  gsap.set(navSection, { opacity: 0 })

  const tl = gsap.timeline({ delay: 0.1 })
  tl.from(logo, { x: -30, opacity: 0, duration: 0.5, ease: 'power3.out' })
    .from(controls, { x: 30, opacity: 0, duration: 0.5, ease: 'power3.out' }, '-=0.2')
    .to(navSection, { opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.3')
    .from(navLinks, { y: 12, opacity: 0, duration: 0.3, stagger: 0.06, ease: 'power2.out' }, '-=0.2')
}
