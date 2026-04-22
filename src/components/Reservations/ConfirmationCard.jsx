import { ZONES, OCCASIONS } from '../../data/reservations'
import styles from './Reservations.module.css'

/**
 * Tarjeta de confirmación mostrada tras una reservación exitosa.
 * @param {{ reservation: object, onNew: () => void }} props
 */
export default function ConfirmationCard({ reservation, onNew }) {
  const zone     = ZONES.find((z) => z.id === reservation.zone)
  const occasion = OCCASIONS.find((o) => o.id === reservation.occasion)

  // Formatea la fecha en español
  const dateFormatted = new Date(reservation.date + 'T12:00:00').toLocaleDateString('es-MX', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <div className={styles.confirmation}>
      {/* ─── Icono de éxito ─── */}
      <div className={styles.confirmIcon}>
        <i className="fas fa-check" />
      </div>

      <h3 className={styles.confirmTitle}>¡Reservación Confirmada!</h3>
      <p className={styles.confirmSubtitle}>
        Gracias, <strong>{reservation.firstName} {reservation.lastName}</strong>.
        Te esperamos con gusto.
      </p>

      {/* ─── Código de reservación ─── */}
      <div className={styles.confirmCode}>
        <span>Código de reservación</span>
        <strong>{reservation.code}</strong>
      </div>

      {/* ─── Resumen ─── */}
      <div className={styles.confirmDetails}>
        <div className={styles.confirmRow}>
          <i className="fas fa-calendar-alt" />
          <div>
            <span>Fecha</span>
            <strong>{dateFormatted}</strong>
          </div>
        </div>
        <div className={styles.confirmRow}>
          <i className="fas fa-clock" />
          <div>
            <span>Hora</span>
            <strong>{reservation.time}</strong>
          </div>
        </div>
        <div className={styles.confirmRow}>
          <i className="fas fa-users" />
          <div>
            <span>Personas</span>
            <strong>{reservation.guests} {reservation.guests === 1 ? 'persona' : 'personas'}</strong>
          </div>
        </div>
        <div className={styles.confirmRow}>
          <i className={`fas ${zone?.icon}`} />
          <div>
            <span>Zona</span>
            <strong>{zone?.label}</strong>
          </div>
        </div>
        {reservation.occasion !== 'ninguna' && (
          <div className={styles.confirmRow}>
            <i className="fas fa-star" />
            <div>
              <span>Ocasión</span>
              <strong>{occasion?.label}</strong>
            </div>
          </div>
        )}
        <div className={styles.confirmRow}>
          <i className="fas fa-envelope" />
          <div>
            <span>Confirmación enviada a</span>
            <strong>{reservation.email}</strong>
          </div>
        </div>
      </div>

      <p className={styles.confirmNote}>
        Si necesitas modificar o cancelar tu reservación, llámanos al{' '}
        <strong>+52 55 1234 5678</strong> con al menos 2 horas de anticipación.
      </p>

      <button className={`btn btn-outline ${styles.newReservationBtn}`} onClick={onNew}>
        <i className="fas fa-plus" style={{ marginRight: '0.5rem' }} />
        Nueva reservación
      </button>
    </div>
  )
}
