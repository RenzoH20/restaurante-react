import styles from './Reservations.module.css'

/**
 * Paso 3: Datos de contacto del cliente.
 */
export default function Step3Contact({ data, onChange }) {
  return (
    <div className={styles.stepContent}>
      <h3 className={styles.stepTitle}>
        <i className="fas fa-user-circle" /> Tus datos de contacto
      </h3>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Ej: María"
            value={data.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Apellido</label>
          <input
            type="text"
            placeholder="Ej: García"
            value={data.lastName}
            onChange={(e) => onChange('lastName', e.target.value)}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Correo electrónico</label>
        <input
          type="email"
          placeholder="correo@ejemplo.com"
          value={data.email}
          onChange={(e) => onChange('email', e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Teléfono</label>
        <input
          type="tel"
          placeholder="+52 55 1234 5678"
          value={data.phone}
          onChange={(e) => onChange('phone', e.target.value)}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={data.newsletter}
            onChange={(e) => onChange('newsletter', e.target.checked)}
          />
          <span>Deseo recibir promociones y novedades por correo</span>
        </label>
      </div>

      <p className={styles.privacyNote}>
        <i className="fas fa-lock" /> Tu información es privada y nunca será compartida con terceros.
      </p>
    </div>
  )
}
