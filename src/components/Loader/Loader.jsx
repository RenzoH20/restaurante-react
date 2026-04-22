import { useEffect, useState } from 'react'
import styles from './Loader.module.css'

/**
 * Pantalla de carga animada que desaparece al cargar la página.
 */
export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className={styles.loader}>
      <div className={styles.logoText}>La Bella Cucina</div>
      <div className={styles.dots}>
        <span /><span /><span />
      </div>
    </div>
  )
}
