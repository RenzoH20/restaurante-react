import { useState, useRef } from 'react'
import styles from './Menu.module.css'

/**
 * Tarjeta individual de un plato del menú con efecto 3D dinámico.
 * 
 * @param {{ item: object, onReserve: (item: object) => void, onAddToCart: (item: object) => void }} props
 */
export default function MenuCard({ item, onReserve, onAddToCart }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [glare, setGlare] = useState({ opacity: 0, x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((y - centerY) / centerY) * -10 // Max 10deg
    const rotateY = ((x - centerX) / centerX) * 10  // Max 10deg
    
    setRotate({ x: rotateX, y: rotateY })
    setGlare({
      opacity: 0.4,
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100
    })
  }

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 })
    setGlare({ ...glare, opacity: 0 })
  }

  const categoryLabel =
    item.category.charAt(0).toUpperCase() + item.category.slice(1)

  return (
    <div className={styles.cardContainer}>
      <div 
        ref={cardRef}
        className={`${styles.card} reveal`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
      >
        {/* ─── Brillo (Glare) ─── */}
        <div 
          className={styles.glare} 
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.15) 0%, transparent 80%)`
          }}
        />

        {/* ─── Imagen con overlay ─── */}
        <div className={styles.imgWrap}>
          <img src={item.img} alt={item.name} loading="lazy" />
          <div className={styles.imgOverlay}>
            <button
              className={styles.overlayBtn}
              onClick={() => onAddToCart(item)}
              title="Agregar al pedido de delivery"
            >
              <i className="fas fa-motorcycle" />
              <span>Pedir a domicilio</span>
            </button>
          </div>
        </div>

        {/* ─── Cuerpo ─── */}
        <div className={styles.cardBody}>
          <div className={styles.cardHeader}>
            <span className={styles.catBadge}>{categoryLabel}</span>
          </div>
          <h3 className={styles.cardName}>{item.name}</h3>
          <p className={styles.cardDesc}>{item.desc}</p>

          {/* ─── Footer con precio y acciones ─── */}
          <div className={styles.cardFooter}>
            <span className={styles.price}>{item.price}</span>
            <div className={styles.cardActions}>
              <button
                className={styles.btnCart}
                onClick={() => onAddToCart(item)}
                title="Agregar al carrito"
              >
                <i className="fas fa-plus" />
              </button>
              <button
                className={styles.btnReserve}
                onClick={() => onReserve(item)}
              >
                <i className="fas fa-calendar-check" />
                Reservar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
