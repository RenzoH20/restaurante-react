import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Inicio',        href: '#hero'          },
  { label: 'Nosotros',      href: '#about'         },
  { label: 'Menú',          href: '#menu'          },
  { label: 'Delivery',      href: '#delivery'      },
  { label: 'Reservaciones', href: '#reservaciones' },
  { label: 'Reseñas',       href: '#reviews'       },
  { label: 'Ubicación',     href: '#location'      },
]

export default function Navbar() {
  const [isOpen,     setIsOpen]     = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>La Bella Cucina</div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={styles.menuToggle}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Menú móvil"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`} />
      </button>
    </nav>
  )
}
