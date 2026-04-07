'use client'
import { useEffect } from 'react'
import '../styles/instrument-modal.component.css'

export default function InstrumentModal({ test, shortName, onClose }) {
  
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const {
    title,
    authors = [],
    other_data = {},
    year,
    construct = [],
    dimensions = [],
    time,
    description,
    color
  } = test

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close" onClick={onClose} aria-label="Cerrar">✕</button>

        <div className="modal-header">
          <div className="modal-header-card" style={{ backgroundColor: color }}>
            <p className="modal-header-short">{shortName}</p>
            <p className="modal-header-category">{construct[0]}</p>
          </div>
          <div className="modal-header-text" style={{ backgroundColor: color }} >
            <h2 className="modal-header-title">{title}</h2>
          </div>
        </div>

        {/* Descripción */}
        <p className="modal-description">{description}</p>

        {/* Tabla de metadata */}
        <div className="modal-table">
          <div className="modal-table__row">
            <p className="modal-table__label">Autor(es)</p>
            <p className="modal-table__value" style={{ backgroundColor: color + '40' }} >{authors.join(', ')}</p>
          </div>

          {Object.entries(other_data).map(([key, value]) => (
            <div className="modal-table__row" key={key}>
              <p className="modal-table__label" >{key}</p>
              <p className="modal-table__value" style={{ backgroundColor: color + '40' }} >{value}</p>
            </div>
          ))}

          {year > 0 && (
            <div className="modal-table__row">
              <p className="modal-table__label">Año</p>
              <p className="modal-table__value" style={{ backgroundColor: color + '40' }} >{year}</p>
            </div>
          )}

          <div className="modal-table__row">
            <p className="modal-table__label">Constructo que mide</p>
            <p className="modal-table__value" style={{ backgroundColor: color + '40' }}>{construct.join(', ')}</p>
          </div>

          <div className="modal-table__row">
            <p className="modal-table__label">Dimensiones</p>
            <p className="modal-table__value" style={{ backgroundColor: color + '40' }} >
              {dimensions.join(', ')}
            </p>
          </div>

          <div className="modal-table__row modal-table__row--footer">
            <div className="modal-table__inline-item">
              <p className="modal-table__label">Número de ítems</p>
              <p className="modal-table__badge" style={{ backgroundColor: color + '40' }}>
                {test.items_count ?? '—'} preguntas
              </p>
            </div>
            <div className="modal-table__inline-item">
              <p className="modal-table__label">Tiempo aproximado</p>
              <p className="modal-table__badge" style={{ backgroundColor: color + '40' }}>
                {time} minutos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}