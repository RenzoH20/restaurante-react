import { useState, useMemo } from 'react'
import { MENU_ITEMS, MENU_CATEGORIES } from '../../data/menuItems'
import { useToast } from '../../context/ToastContext'
import MenuCard from './MenuCard'
import { generateMenuPDF } from './menuPDF'
import styles from './Menu.module.css'

/**
 * Sección del menú con búsqueda, filtros y acciones por plato.
 * @param {{ onAddToCart: (item) => void }} props
 */
export default function Menu({ onAddToCart }) {
  const [search,   setSearch]   = useState('')
  const [category, setCategory] = useState('todos')
  const { showToast } = useToast()

  const filteredItems = useMemo(() => {
    const q = search.toLowerCase()
    return MENU_ITEMS.filter((item) => {
      const matchCat = category === 'todos' || item.category === category
      const matchQ   = item.name.toLowerCase().includes(q) ||
                       item.desc.toLowerCase().includes(q)
      return matchCat && matchQ
    })
  }, [search, category])

  // Scroll suave a la sección de reservaciones
  const handleReserve = (item) => {
    showToast(`✓ Reservando mesa para disfrutar "${item.name}"`)
    setTimeout(() => {
      document.getElementById('reservaciones')?.scrollIntoView({ behavior: 'smooth' })
    }, 600)
  }

  const handleAddToCart = (item) => {
    onAddToCart(item)
    showToast(`🛵 "${item.name}" agregado al carrito`)
  }

  const handleDownload = () => {
    generateMenuPDF()
    showToast('✓ Menú descargado en PDF')
  }

  return (
    <section id="menu" className={`${styles.menu} section-wrapper`}>
      <p className="section-label reveal">Lo que ofrecemos</p>
      <h2 className="section-title reveal">Nuestro Menú</h2>
      <div className="section-line reveal" />

      {/* ─── Controles ─── */}
      <div className={`${styles.controls} reveal`}>
        <div className={styles.searchBox}>
          <i className="fas fa-search" />
          <input
            type="text"
            placeholder="Buscar plato..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={styles.filterTabs}>
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${category === cat.id ? styles.active : ''}`}
              onClick={() => setCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Grid de platos ─── */}
      {filteredItems.length > 0 ? (
        <div className={styles.grid}>
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onReserve={handleReserve}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      ) : (
        <p className={styles.noResults}>No se encontraron platos con esa búsqueda.</p>
      )}

      {/* ─── Botón PDF ─── */}
      <div className={`${styles.downloadWrap} reveal`}>
        <button className="btn btn-gold" onClick={handleDownload}>
          <i className="fas fa-file-pdf" style={{ marginRight: '0.5rem' }} />
          Descargar Menú en PDF
        </button>
      </div>
    </section>
  )
}
