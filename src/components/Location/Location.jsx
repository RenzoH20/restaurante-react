import styles from './Location.module.css'

const INFO_ITEMS = [
  {
    icon: 'fa-map-marker-alt',
    label: 'Dirección',
    content: 'Av. Insurgentes Sur 1234, Col. Del Valle\nCiudad de México, CDMX 03100',
  },
  {
    icon: 'fa-clock',
    label: 'Horarios',
    content: 'Lunes–Viernes: 1:00 PM – 10:00 PM\nSáb–Dom: 12:00 PM – 11:00 PM',
  },
  {
    icon: 'fa-phone',
    label: 'Teléfono',
    content: '+52 55 1234 5678',
  },
  {
    icon: 'fa-envelope',
    label: 'Correo',
    content: 'reservas@labellacucina.mx',
  },
]

export default function Location() {
  return (
    <section id="location" className={`${styles.location} section-wrapper`}>
      <p className="section-label reveal">Encuéntranos</p>
      <h2 className="section-title reveal">Nuestra Ubicación</h2>
      <div className="section-line reveal" />

      <div className={styles.grid}>
        {/* ─── Info de contacto ─── */}
        <div className={`${styles.info} reveal`}>
          <h3>
            Visítanos y disfruta{' '}
            <span style={{ color: 'var(--gold)' }}>en persona</span>
          </h3>

          {INFO_ITEMS.map((item) => (
            <div key={item.label} className={styles.infoItem}>
              <div className={styles.infoIcon}>
                <i className={`fas ${item.icon}`} />
              </div>
              <div>
                <div className={styles.infoLabel}>{item.label}</div>
                <p className={styles.infoText}>
                  {item.content.split('\n').map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </p>
              </div>
            </div>
          ))}

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold"
            style={{ marginTop: '1.5rem' }}
          >
            <i className="fas fa-directions" style={{ marginRight: '0.5rem' }} />
            Cómo llegar
          </a>
        </div>

        {/* ─── Mapa Google Maps ─── */}
        <div className={`${styles.mapWrap} reveal`}>
          {/* Reemplaza la URL del src con tu ubicación real de Google Maps */}
          <iframe
            title="Ubicación La Bella Cucina"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.0!2d-99.1677!3d19.3988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDIzJzU1LjciTiA5OcKwMTAnMDMuNyJX!5e0!3m2!1ses!2smx!4v1699999999"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
