import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

const PARTICLE_COUNT = 35

export default function Hero() {
  const particlesRef = useRef(null)

  useEffect(() => {
    const container = particlesRef.current
    if (!container) return

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement('div')
      p.className = styles.particle
      p.style.left              = `${Math.random() * 100}%`
      p.style.width             = `${Math.random() * 5 + 2}px`
      p.style.height            = p.style.width
      p.style.animationDuration = `${Math.random() * 10 + 8}s`
      p.style.animationDelay    = `${Math.random() * 10}s`
      container.appendChild(p)
    }

    return () => { container.innerHTML = '' }
  }, [])

  return (
    <section id="hero" className={styles.hero}>
      <div ref={particlesRef} className={styles.particles} />

      <p className={styles.tag}>✦ Experiencia Gastronómica Única ✦</p>

      <h1 className={styles.title}>
        La Bella
        <span>Cucina</span>
      </h1>

      <p className={styles.subtitle}>
        Donde cada plato cuenta una historia de sabor y pasión
      </p>

      <div className={styles.buttons}>
        <a href="#reservaciones" className="btn btn-gold">Reservar Mesa</a>
        <a href="#menu"          className="btn btn-outline">Ver Menú</a>
      </div>

      <div className={styles.scrollHint}>
        <i className="fas fa-chevron-down" />
      </div>
    </section>
  )
}
