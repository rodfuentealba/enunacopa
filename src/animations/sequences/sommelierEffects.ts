import { gsap, ScrollTrigger } from '../gsap.config'

const PARALLAX_SPEEDS: Record<string, number> = {
  'camilo-1': 0.3,
  'camilo-2': 0.14,
  'camilo-3': 0.20,
}

const GRAPE_KEYS = new Set(['grape-1', 'grape-2', 'grape-3'])

export function sommelierParallax() {
  const section = document.querySelector('#sommelier')
  if (!section) return

  const layers = section.querySelectorAll<HTMLElement>('[data-gsap]')

  layers.forEach((layer) => {
    const key = layer.dataset.gsap
    if (!key || key === 'camilo-bg' || GRAPE_KEYS.has(key)) return

    const speed = PARALLAX_SPEEDS[key] ?? 0.1

    gsap.to(layer, {
      y: () => (window.innerHeight - layer.offsetTop) * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5,
      },
    })
  })
}

export function sommelierEntry() {
  const section = document.querySelector('#sommelier')
  if (!section) return

  const name = section.querySelector('.som-name')
  const role = section.querySelector('.som-role')
  const since = section.querySelector('.som-since')
  const wsetLink = section.querySelector<HTMLAnchorElement>('a[href*="wsetglobal"]')
  const badgeText = section.querySelector('.p-0')
  const info = section.querySelector('.som-info')
  const infoChildren = info?.children ?? []

  gsap.set(name, { x: -80, opacity: 0 })
  gsap.set(role, { x: -60, opacity: 0 })
  gsap.set(since, { y: 20, opacity: 0 })
  gsap.set(wsetLink, { scale: 0, opacity: 0 })
  gsap.set(badgeText, { y: 20, opacity: 0 })
  gsap.set(infoChildren, { y: 20, opacity: 0 })

  const allItems = [name, role, since, wsetLink, badgeText].filter(Boolean)

  function enter() {
    gsap.to(name, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out', clearProps: 'transform' })
    gsap.to(role, { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out', clearProps: 'transform' })
    gsap.to(since, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out', clearProps: 'transform' })
    gsap.to(wsetLink, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)', clearProps: 'transform' })
    gsap.to(badgeText, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out', clearProps: 'transform' })
    gsap.to(infoChildren, { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out', clearProps: 'transform' })
  }

  function leave() {
    gsap.to([...allItems, ...Array.from(infoChildren)], { opacity: 0, duration: 0.3, stagger: 0.03, ease: 'power2.out' })
  }

  ScrollTrigger.create({
    trigger: section,
    start: 'top 85%',
    onEnter: enter,
    onLeaveBack: leave,
    onEnterBack: enter,
  })
}

export function sommelierExit() {
  const section = document.querySelector('#sommelier')
  if (!section) return

  section.querySelectorAll<HTMLElement>('[data-gsap]').forEach((el) => {
    if (el.dataset.gsap === 'camilo-bg') return
  })

  gsap.to(section.querySelectorAll<HTMLElement>('[data-gsap]:not([data-gsap="camilo-bg"])'), {
    opacity: 0,
    y: -30,
    duration: 0.5,
    ease: 'power2.in',
    stagger: 0.05,
    scrollTrigger: {
      trigger: section,
      start: 'bottom top',
      end: 'top top',
      toggleActions: 'play none none reverse',
    },
  })
}

export interface GrapeConfig {
  yDelta?: number
  duration?: number
  xDelta?: number
  rotation?: number
}

export interface GrapeController {
  el: HTMLElement
  tween: gsap.core.Tween
  pause: () => void
  resume: () => void
  reverse: () => void
  kill: () => void
  to: (vars: gsap.TweenVars) => gsap.core.Tween
}

const GRAPE_DEFAULTS: Record<string, GrapeConfig> = {
  'grape-1': { yDelta: 14, duration: 3.5, xDelta: 0,},
  'grape-2': { yDelta: -20, duration: 2.5, xDelta: 4 },
  'grape-3': { yDelta: 12, duration: 3, xDelta: -3,},
}

function createGrapeController(el: HTMLElement, cfg: GrapeConfig): GrapeController {
  const tween = gsap.to(el, {
    y: cfg.yDelta ?? 10,
    x: cfg.xDelta ?? 0,
    rotation: cfg.rotation ?? 0,
    duration: cfg.duration ?? 3,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  })

  return {
    el,
    tween,
    pause: () => tween.pause(),
    resume: () => tween.resume(),
    reverse: () => tween.reverse(),
    kill: () => tween.kill(),
    to: (vars) => gsap.to(el, vars),
  }
}

export function initGrapes(): Record<string, GrapeController> {
  const controllers: Record<string, GrapeController> = {}

  for (const [key, cfg] of Object.entries(GRAPE_DEFAULTS)) {
    const el = document.querySelector<HTMLElement>(`[data-gsap="${key}"]`)
    if (el) controllers[key] = createGrapeController(el, cfg)
  }

  return controllers
}

export function initSommelierAnimations() {
  sommelierParallax()
  sommelierEntry()
  return initGrapes()
}
