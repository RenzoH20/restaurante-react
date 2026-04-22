import styles from './Footer.module.css'

const NAV_LINKS = ['Inicio', 'Nosotros', 'Menú', 'Reseñas', 'Ubicación']
const MENU_LINKS = ['Entradas', 'Pastas', 'Carnes', 'Postres', 'Bebidas']

const SOCIALS = [
  { icon: 'fa-facebook-f', href: '#' },
  { icon: 'fa-instagram',  href: '#' },
  { icon: 'fa-tiktok',     href: '#' },
  { icon: 'fa-whatsapp',   href: '#' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* ─── Marca ─── */}
        <div className={styles.brand}>
          <div className={styles.logo}>La Bella Cucina</div>
          <p>
            Experiencia gastronómica italiana auténtica en el corazón de la ciudad.
            Cada visita es un viaje a Italia.
          </p>
          <div className={styles.socials}>
            {SOCIALS.map((s) => (
              <a key={s.icon} href={s.href} className={styles.socialBtn} aria-label={s.icon}>
                <i className={`fab ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>

        {/* ─── Navegación ─── */}
        <div className={styles.col}>
          <h4>Navegación</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace('é', 'e').replace('ú', 'u')}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ─── Menú ─── */}
        <div className={styles.col}>
          <h4>Menú</h4>
          <ul>
            {MENU_LINKS.map((link) => (
              <li key={link}>
                <a href="#menu">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          &copy; {new Date().getFullYear()} <span>La Bella Cucina</span>.
          Todos los derechos reservados. Diseñado con <span>♥</span>
        </p>
      </div>
    </footer>
  )
}
