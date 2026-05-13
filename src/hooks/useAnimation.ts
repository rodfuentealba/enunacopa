import { useEffect, useRef } from 'react'
import { gsap } from '../animations/gsap.config'

type AnimationFn = (el: string | Element, delay?: number) => gsap.core.Tween

export function useAnimation<T extends HTMLElement>(animFn: AnimationFn, delay = 0) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      animFn(el, delay)
    }, el)
    return () => ctx.revert()
  }, [animFn, delay])

  return ref
}
