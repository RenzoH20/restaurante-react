import styles from './Delivery.module.css'

/**
 * Panel lateral (drawer) del carrito de delivery.
 * @param {{ items, onRemove, onClose, onOrder }} props
 */
export default function CartDrawer({ items, onRemove, onClose, onOrder }) {
  const total = items.reduce((sum, item) => {
    const num = parseFloat(item.price.replace('$', '').replace(',', ''))
    return sum + num * item.qty
  }, 0)

  const isEmpty = items.length === 0

  return (
    <>
      {/* Backdrop */}
      <div className={styles.backdrop} onClick={onClose} />

      {/* Drawer */}
      <div className={styles.drawer}>
        <div className={styles.drawerHeader}>
          <div>
            <h3><i className="fas fa-shopping-bag" /> Mi Pedido</h3>
            <span className={styles.drawerSub}>
              {isEmpty ? 'Agrega platillos del menú' : `${items.reduce((s,i)=>s+i.qty,0)} artículo(s)`}
            </span>
          </div>
          <button className={styles.drawerClose} onClick={onClose}>
            <i className="fas fa-times" />
          </button>
        </div>

        {/* Items */}
        <div className={styles.drawerItems}>
          {isEmpty ? (
            <div className={styles.emptyCart}>
              <i className="fas fa-shopping-bag" />
              <p>Tu carrito está vacío</p>
              <small>Agrega platos desde el menú</small>
            </div>
          ) : (
            items.map((item) => {
              const unitPrice = parseFloat(item.price.replace('$', '').replace(',', ''))
              return (
                <div key={item.id} className={styles.cartItem}>
                  <img src={item.img} alt={item.name} />
                  <div className={styles.cartItemInfo}>
                    <span className={styles.cartItemName}>{item.name}</span>
                    <span className={styles.cartItemPrice}>
                      {item.qty > 1 && <small>{item.qty} × </small>}
                      ${(unitPrice * item.qty).toFixed(0)}
                    </span>
                  </div>
                  <div className={styles.cartItemControls}>
                    <button onClick={() => onRemove(item.id, -1)}>−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => onRemove(item.id, 1)}>+</button>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* Footer */}
        {!isEmpty && (
          <div className={styles.drawerFooter}>
            <div className={styles.drawerTotal}>
              <span>Subtotal</span>
              <strong>${total.toFixed(0)}</strong>
            </div>
            <div className={styles.drawerTotal}>
              <span>Envío</span>
              <strong style={{ color: '#4caf50' }}>
                {total >= 300 ? 'Gratis 🎉' : '$45'}
              </strong>
            </div>
            {total < 300 && (
              <p className={styles.freeHint}>
                Agrega ${(300 - total).toFixed(0)} más para envío gratis
              </p>
            )}
            <div className={styles.drawerTotalFinal}>
              <span>Total</span>
              <strong>${(total + (total >= 300 ? 0 : 45)).toFixed(0)}</strong>
            </div>
            <button className={`btn btn-gold ${styles.orderBtn}`} onClick={onOrder}>
              <i className="fas fa-motorcycle" style={{ marginRight: '0.5rem' }} />
              Ordenar por WhatsApp
            </button>
            <p className={styles.drawerNote}>
              Te contactaremos para confirmar tu dirección y pago.
            </p>
          </div>
        )}
      </div>
    </>
  )
}
