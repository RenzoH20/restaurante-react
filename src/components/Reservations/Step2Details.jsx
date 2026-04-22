import { GUEST_OPTIONS, ZONES, OCCASIONS } from '../../data/reservations'
import styles from './Reservations.module.css'

/**
 * Paso 2: Número de personas, zona y ocasión.
 */
export default function Step2Details({ data, onChange }) {
  return (
    <div className={styles.stepContent}>
      <h3 className={styles.stepTitle}>
        <i className="fas fa-users" /> Detalles de tu visita
      </h3>

      {/* ─── Número de personas ─── */}
      <div className={styles.formGroup}>
        <label>Número de personas</label>
        <div className={styles.guestGrid}>
          {GUEST_OPTIONS.map((n) => (
            <button
              key={n}
              type="button"
              className={`${styles.guestBtn} ${data.guests === n ? styles.guestBtnActive : ''}`}
              onClick={() => onChange('guests', n)}
            >
              <i className="fas fa-user" />
              <span>{n}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ─── Zona del restaurante ─── */}
      <div className={styles.formGroup}>
        <label>Zona preferida</label>
        <div className={styles.zoneGrid}>
          {ZONES.map((zone) => (
            <button
              key={zone.id}
              type="button"
              className={`${styles.zoneCard} ${data.zone === zone.id ? styles.zoneCardActive : ''}`}
              onClick={() => onChange('zone', zone.id)}
            >
              <i className={`fas ${zone.icon}`} />
              <span className={styles.zoneName}>{zone.label}</span>
              <span className={styles.zoneDesc}>{zone.desc}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ─── Ocasión especial ─── */}
      <div className={styles.formGroup}>
        <label>Ocasión especial</label>
        <select
          value={data.occasion}
          onChange={(e) => onChange('occasion', e.target.value)}
        >
          {OCCASIONS.map((o) => (
            <option key={o.id} value={o.id}>{o.label}</option>
          ))}
        </select>
      </div>

      {/* ─── Peticiones especiales ─── */}
      <div className={styles.formGroup}>
        <label>Peticiones especiales (opcional)</label>
        <textarea
          rows={3}
          placeholder="Alergias, silla alta para bebé, decoración especial..."
          value={data.requests}
          onChange={(e) => onChange('requests', e.target.value)}
        />
      </div>
    </div>
  )
}
