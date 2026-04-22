import { jsPDF } from 'jspdf'
import { MENU_ITEMS } from '../../data/menuItems'

const CATEGORY_LABELS = {
  entradas: 'ENTRADAS',
  pastas:   'PASTAS',
  carnes:   'CARNES & AVES',
  postres:  'POSTRES',
  bebidas:  'BEBIDAS',
}

/**
 * Genera y descarga el menú completo en formato PDF.
 */
export function generateMenuPDF() {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const W = doc.internal.pageSize.getWidth()

  // Fondo oscuro
  doc.setFillColor(26, 26, 26)
  doc.rect(0, 0, W, 297, 'F')

  // ─── Header ───────────────────────────────
  doc.setFillColor(201, 168, 76)
  doc.rect(0, 0, W, 45, 'F')
  doc.setFont('times', 'bold')
  doc.setFontSize(32)
  doc.setTextColor(26, 26, 26)
  doc.text('La Bella Cucina', W / 2, 22, { align: 'center' })
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  doc.text('CARTA DEL RESTAURANTE  ·  2024', W / 2, 32, { align: 'center' })
  doc.setFontSize(7)
  doc.text(
    'Av. Insurgentes Sur 1234, CDMX  ·  reservas@labellacucina.mx  ·  +52 55 1234 5678',
    W / 2, 39,
    { align: 'center' }
  )

  // ─── Categorías ───────────────────────────
  let y = 55
  const categories = Object.keys(CATEGORY_LABELS)

  categories.forEach((cat) => {
    const items = MENU_ITEMS.filter((i) => i.category === cat)
    if (!items.length) return

    if (y > 260) {
      doc.addPage()
      doc.setFillColor(26, 26, 26)
      doc.rect(0, 0, W, 297, 'F')
      y = 15
    }

    // Encabezado de categoría
    doc.setFillColor(60, 40, 10)
    doc.roundedRect(10, y - 6, W - 20, 10, 2, 2, 'F')
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(201, 168, 76)
    doc.text(CATEGORY_LABELS[cat], W / 2, y + 1, { align: 'center' })
    y += 10

    items.forEach((item) => {
      if (y > 270) {
        doc.addPage()
        doc.setFillColor(26, 26, 26)
        doc.rect(0, 0, W, 297, 'F')
        y = 15
      }

      // Nombre y precio
      doc.setFontSize(10)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(255, 255, 255)
      doc.text(item.name, 14, y)
      doc.setTextColor(201, 168, 76)
      doc.text(item.price, W - 14, y, { align: 'right' })
      y += 5

      // Descripción
      doc.setFontSize(8)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(180, 180, 180)
      const lines = doc.splitTextToSize(item.desc, W - 28)
      doc.text(lines, 14, y)
      y += lines.length * 4 + 4

      // Separador
      doc.setDrawColor(60, 60, 60)
      doc.line(14, y - 1, W - 14, y - 1)
    })

    y += 5
  })

  // ─── Footer ───────────────────────────────
  doc.setFillColor(201, 168, 76)
  doc.rect(0, 285, W, 12, 'F')
  doc.setFontSize(7)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(26, 26, 26)
  doc.text(
    'www.labellacucina.mx  ·  Reservaciones: +52 55 1234 5678',
    W / 2, 293,
    { align: 'center' }
  )

  doc.save('Menu_LaBellaCucina_2024.pdf')
}
