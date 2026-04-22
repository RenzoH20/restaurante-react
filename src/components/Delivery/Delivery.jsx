import styles from './Delivery.module.css'
import {
  DELIVERY_PLATFORMS,
  DELIVERY_ZONES,
  DELIVERY_FEATURES,
} from '../../data/delivery'

/**
 * Sección de Delivery con plataformas de pedido, zonas de cobertura
 * y características del servicio.
 */
export default function Delivery() {
  return (
    <section id="delivery" className={`${styles.delivery} section-wrapper`}>
      {/* ─── Header ─── */}
      <p className="section-label reveal">A tu puerta</p>
      <h2 className="section-title reveal">Servicio a Domicilio</h2>
      <div className="section-line reveal" />

      {/* ─── Hero banner de delivery ─── */}
      <div className={`${styles.heroBanner} reveal`}>
        <div className={styles.bannerContent}>
          <div className={styles.bannerBadge}>
            <i className="fas fa-motorcycle" /> Delivery disponible ahora
          </div>
          <h3>La experiencia de La Bella Cucina<br />llega hasta tu mesa en casa</h3>
          <p>
            Disfruta nuestros platillos auténticos italianos en la comodidad de tu hogar.
            Empaque térmico especial para que cada bocado llegue perfecto.
          </p>
          <a
            href="https://wa.me/5215512345678?text=Hola,%20quiero%20hacer%20un%20pedido%20a%20domicilio"
            target="_blank"
            rel="noreferrer"
            className="btn btn-gold"
          >
            <i className="fab fa-whatsapp" style={{ marginRight: '0.5rem' }} />
            Ordenar ahora por WhatsApp
          </a>
        </div>
        <div className={styles.bannerVisual}>
          <img
            src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80"
            alt="Delivery de comida italiana"
          />
          {/* ─── Chips flotantes ─── */}
          <div className={`${styles.floatChip} ${styles.chipTop}`}>
            <i className="fas fa-clock" /> 25–35 min
          </div>
          <div className={`${styles.floatChip} ${styles.chipBottom}`}>
            <i className="fas fa-star" /> 4.9 ★ en entregas
          </div>
        </div>
      </div>

      {/* ─── Características del servicio ─── */}
      <div className={`${styles.featuresGrid} reveal`}>
        {DELIVERY_FEATURES.map((f) => (
          <div key={f.title} className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <i className={`fas ${f.icon}`} />
            </div>
            <h4 className={styles.featureTitle}>{f.title}</h4>
            <p className={styles.featureDesc}>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* ─── Plataformas de pedido ─── */}
      <div className={`${styles.platformsSection} reveal`}>
        <h3 className={styles.subheading}>
          <i className="fas fa-mobile-alt" /> Pide a través de
        </h3>
        <div className={styles.platformsGrid}>
          {DELIVERY_PLATFORMS.map((p) => (
            <a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className={styles.platformCard}
              style={{ '--platform-color': p.color }}
            >
              <div className={styles.platformIcon}>
                <i className={`fab ${p.icon}`} style={{ color: p.color }} />
              </div>
              <span className={styles.platformName}>{p.label}</span>
              <span className={styles.platformDesc}>{p.desc}</span>
              <div className={styles.platformArrow}>
                <i className="fas fa-arrow-right" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ─── Zonas de cobertura ─── */}
      <div className={`${styles.zonesSection} reveal`}>
        <h3 className={styles.subheading}>
          <i className="fas fa-map-marked-alt" /> Zonas de cobertura
        </h3>
        <div className={styles.zonesGrid}>
          {DELIVERY_ZONES.map((z, i) => (
            <div key={z.zone} className={styles.zoneRow}>
              <div className={styles.zoneNumber}>{i + 1}</div>
              <div className={styles.zoneInfo}>
                <span className={styles.zoneName}>{z.zone}</span>
                <span className={styles.zoneArea}>{z.area}</span>
              </div>
              <div className={styles.zoneMeta}>
                <span className={styles.zoneTime}>
                  <i className="fas fa-clock" /> {z.time}
                </span>
                <span className={styles.zoneCost}>
                  <i className="fas fa-truck" /> {z.cost}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className={styles.zonesNote}>
          * Consulta disponibilidad en tu zona contactándonos directamente.
          El tiempo de entrega puede variar según la demanda.
        </p>
      </div>
    </section>
  )
}
