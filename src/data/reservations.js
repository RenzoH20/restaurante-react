/**
 * Datos de configuración del sistema de reservaciones.
 * Modifica este archivo para ajustar horarios, mesas y zonas.
 */

/** Horarios disponibles para reservar */
export const TIME_SLOTS = [
  '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
]

/** Opciones de número de personas */
export const GUEST_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8]

/** Zonas disponibles del restaurante */
export const ZONES = [
  { id: 'interior',  label: 'Interior',   icon: 'fa-utensils',      desc: 'Ambiente acogedor y climatizado' },
  { id: 'terraza',   label: 'Terraza',    icon: 'fa-sun',           desc: 'Al aire libre con vista al jardín' },
  { id: 'privado',   label: 'Salón Privado', icon: 'fa-door-closed', desc: 'Ideal para eventos especiales' },
]

/** Ocasiones especiales */
export const OCCASIONS = [
  { id: 'ninguna',      label: 'Sin ocasión especial' },
  { id: 'cumpleanos',   label: '🎂 Cumpleaños'         },
  { id: 'aniversario',  label: '💍 Aniversario'         },
  { id: 'negocios',     label: '💼 Cena de negocios'   },
  { id: 'romantica',    label: '❤️ Cena romántica'      },
  { id: 'familiar',     label: '👨‍👩‍👧 Reunión familiar'   },
]
