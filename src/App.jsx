import { useState, useCallback } from 'react'
import { ToastProvider }  from './context/ToastContext'
import { useScrollReveal } from './hooks/useScrollReveal'

import Loader       from './components/Loader/Loader'
import Navbar       from './components/Navbar/Navbar'
import Hero         from './components/Hero/Hero'
import About        from './components/About/About'
import Menu         from './components/Menu/Menu'
import Delivery     from './components/Delivery/Delivery'
import CartDrawer   from './components/Delivery/CartDrawer'
import Reservations from './components/Reservations/Reservations'
import Reviews      from './components/Reviews/Reviews'
import Location     from './components/Location/Location'
import Footer       from './components/Footer/Footer'

import styles from './App.module.css'
import './context/ToastContext.css'

/**
 * AppContent contiene el estado global del carrito de delivery.
 * Se separa de App para poder usar hooks después del provider.
 */
function AppContent() {
  useScrollReveal('.reveal', 0.1)

  const [cartItems,   setCartItems]   = useState([])
  const [cartOpen,    setCartOpen]    = useState(false)

  // Agrega o incrementa un item en el carrito
  const handleAddToCart = useCallback((item) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...item, qty: 1 }]
    })
  }, [])

  // Incrementa o decrementa cantidad; elimina si llega a 0
  const handleUpdateQty = useCallback((id, delta) => {
    setCartItems((prev) =>
      prev
        .map((i) => i.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter((i) => i.qty > 0)
    )
  }, [])

  // Genera mensaje de WhatsApp con el pedido
  const handleOrder = useCallback(() => {
    const lines = cartItems.map(
      (i) => `• ${i.qty}x ${i.name} (${i.price} c/u)`
    )
    const total = cartItems.reduce((sum, i) => {
      return sum + parseFloat(i.price.replace('$','').replace(',','')) * i.qty
    }, 0)
    const msg = encodeURIComponent(
      `¡Hola! Quiero hacer un pedido a domicilio:\n\n${lines.join('\n')}\n\n` +
      `Subtotal: $${total.toFixed(0)}\n\n¿Me pueden confirmar disponibilidad y tiempo de entrega?`
    )
    window.open(`https://wa.me/5215512345678?text=${msg}`, '_blank')
  }, [cartItems])

  const totalItems = cartItems.reduce((s, i) => s + i.qty, 0)

  return (
    <>
      <Loader />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Menu onAddToCart={handleAddToCart} />
        <Delivery />
        <Reservations />
        <Reviews />
        <Location />
      </main>

      <Footer />

      {/* ─── FAB flotante del carrito ─── */}
      <button
        className={styles.cartFab}
        onClick={() => setCartOpen(true)}
        aria-label="Ver carrito"
        title="Ver mi pedido"
      >
        <i className="fas fa-shopping-bag" />
        {totalItems > 0 && (
          <span className={styles.cartBadge}>{totalItems}</span>
        )}
      </button>

      {/* ─── Drawer del carrito ─── */}
      {cartOpen && (
        <CartDrawer
          items={cartItems}
          onRemove={handleUpdateQty}
          onClose={() => setCartOpen(false)}
          onOrder={handleOrder}
        />
      )}
    </>
  )
}

export default function App() {
  return (
    <ToastProvider>
      <AppContent />
    </ToastProvider>
  )
}
