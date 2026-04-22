import { TIME_SLOTS } from '../../data/reservations'
import styles from './Reservations.module.css'

/**
 * Paso 1: Selección de fecha y hora.
 */
export default function Step1DateTime({ data, onChange }) {
  // Fecha mínima = hoy
  const today = new Date().toISOString().split('T')[0]

  return (
    <div className={styles.stepContent}>
      <h3 className={styles.stepTitle}>
        <i className="fas fa-calendar-alt" /> ¿Cuándo nos visitas?
      </h3>

      {/* ─── Selector de fecha ─── */}
      <div className={styles.formGroup}>
        <label>Fecha de la reservación</label>
        <input
          type="date"
          min={today}
          value={data.date}
          onChange={(e) => onChange('date', e.target.value)}
        />
      </div>

      {/* ─── Selector de hora ─── */}
      <div className={styles.formGroup}>
        <label>Hora</label>
        <div className={styles.timeGrid}>
          {TIME_SLOTS.map((slot) => (
            <button
              key={slot}
              type="button"
              className={`${styles.timeSlot} ${data.time === slot ? styles.timeSlotActive : ''}`}
              onClick={() => onChange('time', slot)}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
