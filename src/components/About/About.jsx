import styles from './About.module.css'

const STATS = [
  { value: '2K+', label: 'Clientes'     },
  { value: '85',  label: 'Platos'       },
  { value: '4.9', label: 'Calificación' },
]

export default function About() {
  return (
    <section id="about" className={`${styles.about} section-wrapper`}>
      <p className="section-label reveal">Nuestra Historia</p>
      <h2 className="section-title reveal">Pasión por la Gastronomía</h2>
      <div className="section-line reveal" />

      <div className={styles.grid}>
        {/* Imagen */}
        <div className={`${styles.imageWrap} reveal`}>
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80"
            alt="Interior del Restaurante"
          />
          <div className={styles.badge}>
            <span className={styles.badgeNum}>15</span>
            <span className={styles.badgeSub}>AÑOS DE EXCELENCIA</span>
          </div>
        </div>

        {/* Texto */}
        <div className={`${styles.content} reveal`}>
          <h2>
            Una Historia de <span style={{ color: 'var(--gold)' }}>Amor y Sabor</span>
          </h2>
          <p>
            Fundado en 2009, La Bella Cucina nació con un sueño: traer la auténtica
            gastronomía italiana a cada rincón. Nuestros chefs, formados en las mejores
            escuelas de Europa, seleccionan ingredientes premium para crear experiencias
            inolvidables.
          </p>
          <p>
            Cada plato es una obra de arte, preparada con técnicas tradicionales y un
            toque contemporáneo que sorprende y deleita el paladar más exigente.
          </p>

          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statVal}>{s.value}</span>
                <span className={styles.statLbl}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
