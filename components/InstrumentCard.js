'use client'
import { useState } from 'react'
import InstrumentModal from './InstrumentModal'
import '../styles/instrument-card.component.css'

// Colores por índice (puedes mapearlos a constructs si prefieres)
const CARD_COLORS = [
  '#D95F4B', // rojo-salmón
  '#5A9E7C', // verde
  '#5B8FA8', // azul grisáceo
  '#E8944A', // naranja
  '#B05EA8', // morado
  '#4A7FB5', // azul
]

const getShortName = (title) => {
  // Extrae siglas o primeras palabras para la tarjeta
  const acronymMatch = title.match(/\b([A-Z]{2,}(?:-\d+)?(?:-[A-Z])?)\b/)
  if (acronymMatch) return acronymMatch[1]
  return title.split(' ').slice(0, 2).join(' ')
}

export default function InstrumentCard({ test, index = 0 }) {
  const [isOpen, setIsOpen] = useState(false)
  const color = CARD_COLORS[index % CARD_COLORS.length]
  const shortName = getShortName(test.title)
  const category = test.construct?.[0] ?? ''

  return (
    <>
      <div
        className="instrument-card"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
      >
        <div className="instrument-card-info" style={{ backgroundColor: test.color }}>
          <p className="instrument-card-name">{shortName}</p>
          <p className="instrument-card-category">{category}</p>
        </div>
        <div className="instrument-card-image" style={{ backgroundColor: test.color + '40' }}>
          {/* Reemplaza con <Image> de Next.js cuando tengas las imágenes */}
          <div className="instrument-card-image-placeholder" />
        </div>
      </div>

      {isOpen && (
        <InstrumentModal
          test={test}
          shortName={shortName}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}