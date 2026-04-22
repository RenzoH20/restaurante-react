import { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext(null)

/**
 * Proveedor global del Toast.
 * Envuelve la app en App.jsx para que cualquier componente
 * pueda llamar a showToast(mensaje).
 */
export function ToastProvider({ children }) {
  const [toast, setToast] = useState({ visible: false, message: '' })

  const showToast = useCallback((message, duration = 3000) => {
    setToast({ visible: true, message })
    setTimeout(() => setToast({ visible: false, message: '' }), duration)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast.visible && (
        <div className="toast-global">
          {toast.message}
        </div>
      )}
    </ToastContext.Provider>
  )
}

/** Hook para usar el toast desde cualquier componente */
export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast debe usarse dentro de <ToastProvider>')
  return ctx
}
