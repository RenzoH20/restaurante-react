import styles from './Reservations.module.css'

const STEPS = [
  { number: 1, label: 'Fecha & Hora' },
  { number: 2, label: 'Detalles'     },
  { number: 3, label: 'Tus datos'    },
]

/**
 * Indicador visual del paso actual del formulario.
 * @param {{ current: number }} props
 */
export default function StepIndicator({ current }) {
  return (
    <div className={styles.stepIndicator}>
      {STEPS.map((step, index) => (
        <div key={step.number} className={styles.stepItem}>
          {/* Círculo del paso */}
          <div
            className={`${styles.stepCircle} ${
              current > step.number  ? styles.stepDone    :
              current === step.number ? styles.stepActive : ''
            }`}
          >
            {current > step.number
              ? <i className="fas fa-check" />
              : step.number
            }
          </div>
          <span className={`${styles.stepLabel} ${current === step.number ? styles.stepLabelActive : ''}`}>
            {step.label}
          </span>

          {/* Línea conectora (no en el último) */}
          {index < STEPS.length - 1 && (
            <div className={`${styles.stepLine} ${current > step.number ? styles.stepLineDone : ''}`} />
          )}
        </div>
      ))}
    </div>
  )
}
