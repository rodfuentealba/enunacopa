import { gsap, ScrollTrigger } from '../gsap.config'

export function jobsEntry() {
  const section = document.querySelector('#jobs')
  if (!section) return

  const title = section.querySelector('.jobs-title')
  const logos = section.querySelectorAll<HTMLElement>('.job-logo')
  const image = section.querySelector('.jobs-image')
  if (!image) return

  gsap.set(title, { x: -60, opacity: 0 })
  gsap.set(logos, { x: -60, opacity: 0 })
  gsap.set(image, { opacity: 0 })

  function enter() {
    const tl = gsap.timeline()
    tl.to(image, {
      clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%)',
      opacity: 1,
      duration: 0.7,
      ease: 'power3.out',
    })
      .to(image, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.1')
      .to(title, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out', clearProps: 'transform' }, '-=0.4')
      .to(logos, { x: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: 'power2.out', clearProps: 'transform' }, '-=0.3')
  }

  function leave() {
    gsap.to([title, image, ...Array.from(logos)].filter(Boolean), { opacity: 0, duration: 0.3, stagger: 0.03, ease: 'power2.out' })
  }

  ScrollTrigger.create({
    trigger: section,
    start: 'top 80%',
    onEnter: enter,
    onLeaveBack: leave,
    onEnterBack: enter,
  })
}
