/**
 * Configuración del servicio de Delivery.
 * Modifica este archivo para ajustar zonas, tiempos y plataformas.
 */

export const DELIVERY_PLATFORMS = [
  {
    id:    'whatsapp',
    label: 'WhatsApp',
    icon:  'fa-whatsapp',
    color: '#25D366',
    desc:  'Ordena directo y sin comisiones',
    href:  'https://wa.me/5215512345678?text=Hola,%20quiero%20hacer%20un%20pedido%20a%20domicilio',
  },
  {
    id:    'phone',
    label: 'Llamada',
    icon:  'fa-phone',
    color: '#c9a84c',
    desc:  'Te atendemos en segundos',
    href:  'tel:+5215512345678',
  },
  {
    id:    'uber',
    label: 'Uber Eats',
    icon:  'fa-utensils',
    color: '#06C167',
    desc:  'Disponible en la app',
    href:  '#',
  },
  {
    id:    'rappi',
    label: 'Rappi',
    icon:  'fa-shopping-bag',
    color: '#FF441F',
    desc:  'Entrega express',
    href:  '#',
  },
]

export const DELIVERY_ZONES = [
  { zone: 'Zona 1', area: 'Del Valle, Narvarte, Insurgentes', time: '25–35 min', cost: 'Gratis (pedido +$300)' },
  { zone: 'Zona 2', area: 'Coyoacán, Benito Juárez, Roma',   time: '35–50 min', cost: '$45'                   },
  { zone: 'Zona 3', area: 'Polanco, Lomas, Santa Fe',        time: '50–65 min', cost: '$75'                   },
]

export const DELIVERY_FEATURES = [
  { icon: 'fa-clock',        title: '25–65 min',        desc: 'Tiempo estimado de entrega según tu zona' },
  { icon: 'fa-thermometer-half', title: 'Empaque térmico', desc: 'Tus platillos llegan calientes y frescos' },
  { icon: 'fa-shield-alt',   title: 'Higiénico',        desc: 'Sellado con cinta de seguridad garantizada'  },
  { icon: 'fa-star',         title: 'Sin mínimo*',      desc: 'Pedido mínimo $200 para delivery gratis'     },
]
