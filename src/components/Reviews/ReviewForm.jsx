import { useState } from 'react'
import { useToast } from '../../context/ToastContext'
import styles from './Reviews.module.css'

/**
 * Formulario para que los usuarios envíen su reseña.
 * @param {{ onSubmit: (review: object) => void }} props
 */
export default function ReviewForm({ onSubmit }) {
  const [name,    setName]    = useState('')
  const [text,    setText]    = useState('')
  const [rating,  setRating]  = useState(0)
  const [hovered, setHovered] = useState(0)
  const [success, setSuccess] = useState(false)
  const { showToast } = useToast()

  const handleSubmit = () => {
    if (!name.trim() || !text.trim() || !rating) {
      showToast('⚠ Por favor completa todos los campos y calificación')
      return
    }

    onSubmit({ name, text, stars: rating, date: 'Ahora mismo' })

    setName('')
    setText('')
    setRating(0)
    setSuccess(true)
    showToast('✓ ¡Reseña publicada!')
    setTimeout(() => setSuccess(false), 4000)
  }

  return (
    <div className={`${styles.formWrap} reveal`}>
      <h3 className={styles.formTitle}>Comparte tu Experiencia</h3>

      {/* ─── Estrellas ─── */}
      <div className={styles.starRating}>
        {[1, 2, 3, 4, 5].map((val) => (
          <i
            key={val}
            className="fas fa-star"
            style={{ color: val <= (hovered || rating) ? 'var(--gold)' : '#444' }}
            onClick={() => setRating(val)}
            onMouseEnter={() => setHovered(val)}
            onMouseLeave={() => setHovered(0)}
          />
        ))}
      </div>

      {/* ─── Campos ─── */}
      <div className={styles.formGroup}>
        <label>Tu nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej: María García"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Tu reseña</label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Cuéntanos sobre tu experiencia..."
          rows={4}
        />
      </div>

      <button className={styles.submitBtn} onClick={handleSubmit}>
        Publicar Reseña
      </button>

      {success && (
        <p className={styles.successMsg}>
          ✓ ¡Gracias! Tu reseña fue publicada exitosamente.
        </p>
      )}
    </div>
  )
}
