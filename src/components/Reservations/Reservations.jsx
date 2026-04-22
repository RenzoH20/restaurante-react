import { useState } from 'react'
import { useToast }      from '../../context/ToastContext'
import StepIndicator     from './StepIndicator'
import Step1DateTime     from './Step1DateTime'
import Step2Details      from './Step2Details'
import Step3Contact      from './Step3Contact'
import ConfirmationCard  from './ConfirmationCard'
import styles            from './Reservations.module.css'

/** Estado inicial del formulario */
const INITIAL_FORM = {
  // Paso 1
  date: '',
  time: '',
  // Paso 2
  guests:   2,
  zone:     'interior',
  occasion: 'ninguna',
  requests: '',
  // Paso 3
  firstName:  '',
  lastName:   '',
  email:      '',
  phone:      '',
  newsletter: false,
}

/** Genera un código único de reservación */
const generateCode = () =>
  'LBC-' + Math.random().toString(36).toUpperCase().slice(2, 8)

/** Validaciones por paso */
const VALIDATIONS = {
  1: (f) => {
    if (!f.date) return 'Por favor selecciona una fecha.'
    if (!f.time) return 'Por favor selecciona un horario.'
    return null
  },
  2: (f) => {
    if (!f.guests) return 'Por favor selecciona el número de personas.'
    return null
  },
  3: (f) => {
    if (!f.firstName.trim()) return 'Por favor ingresa tu nombre.'
    if (!f.lastName.trim())  return 'Por favor ingresa tu apellido.'
    if (!f.email.trim() || !f.email.includes('@')) return 'Por favor ingresa un correo válido.'
    if (!f.phone.trim())  return 'Por favor ingresa tu teléfono.'
    return null
  },
}

export default function Reservations() {
  const [step,        setStep]        = useState(1)
  const [form,        setForm]        = useState(INITIAL_FORM)
  const [confirmed,   setConfirmed]   = useState(null)
  const [isSubmitting,setIsSubmitting]= useState(false)
  const { showToast } = useToast()

  const updateField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }))

  const handleNext = () => {
    const error = VALIDATIONS[step]?.(form)
    if (error) { showToast(`⚠ ${error}`); return }
    setStep((prev) => prev + 1)
  }

  const handleBack = () => setStep((prev) => prev - 1)

  const handleSubmit = () => {
    const error = VALIDATIONS[3]?.(form)
    if (error) { showToast(`⚠ ${error}`); return }

    setIsSubmitting(true)

    // Simula llamada a API (reemplaza con tu backend real)
    setTimeout(() => {
      const reservation = { ...form, code: generateCode() }
      setConfirmed(reservation)
      setIsSubmitting(false)
      showToast('✓ ¡Reservación confirmada!')
    }, 1500)
  }

  const handleNewReservation = () => {
    setForm(INITIAL_FORM)
    setStep(1)
    setConfirmed(null)
  }

  return (
    <section id="reservaciones" className={`${styles.section} section-wrapper`}>
      <p className="section-label reveal">Reserva tu mesa</p>
      <h2 className="section-title reveal">Haz tu Reservación</h2>
      <div className="section-line reveal" />

      {/* ─── Info rápida ─── */}
      <div className={`${styles.infoCards} reveal`}>
        {[
          { icon: 'fa-phone',       text: '+52 55 1234 5678'          },
          { icon: 'fa-clock',       text: 'Lun–Vie 1PM–10PM · Sáb–Dom 12PM–11PM' },
          { icon: 'fa-map-marker-alt', text: 'Av. Insurgentes Sur 1234, CDMX' },
        ].map((info) => (
          <div key={info.icon} className={styles.infoCard}>
            <i className={`fas ${info.icon}`} />
            <span>{info.text}</span>
          </div>
        ))}
      </div>

      {/* ─── Formulario multi-paso ─── */}
      <div className={`${styles.formContainer} reveal`}>
        {confirmed ? (
          <ConfirmationCard reservation={confirmed} onNew={handleNewReservation} />
        ) : (
          <>
            <StepIndicator current={step} />

            {/* Panel animado del paso actual */}
            <div className={styles.stepPanel} key={step}>
              {step === 1 && <Step1DateTime data={form} onChange={updateField} />}
              {step === 2 && <Step2Details  data={form} onChange={updateField} />}
              {step === 3 && <Step3Contact  data={form} onChange={updateField} />}
            </div>

            {/* ─── Navegación ─── */}
            <div className={styles.formNav}>
              {step > 1 && (
                <button className={`btn btn-outline ${styles.btnBack}`} onClick={handleBack}>
                  <i className="fas fa-arrow-left" style={{ marginRight: '0.5rem' }} />
                  Atrás
                </button>
              )}

              {step < 3 ? (
                <button className={`btn btn-gold ${styles.btnNext}`} onClick={handleNext}>
                  Siguiente
                  <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }} />
                </button>
              ) : (
                <button
                  className={`btn btn-gold ${styles.btnNext}`}
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <><i className="fas fa-spinner fa-spin" style={{ marginRight: '0.5rem' }} />Confirmando...</>
                  ) : (
                    <><i className="fas fa-check" style={{ marginRight: '0.5rem' }} />Confirmar Reservación</>
                  )}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
