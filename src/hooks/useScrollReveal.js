import { useEffect, useRef } from 'react'

/**
 * Hook que aplica la clase "visible" a los elementos con clase "reveal"
 * cuando entran en el viewport, usando IntersectionObserver.
 *
 * @param {string} selector - selector CSS de los elementos a observar
 * @param {number} threshold - porcentaje visible para activar (0-1)
 */
export function useScrollReveal(selector = '.reveal', threshold = 0.1) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold }
    )

    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [selector, threshold])
}
