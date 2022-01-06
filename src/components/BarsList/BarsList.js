import React from 'react'
import BarsListItem from './BarsListItem'

function BarsList ({ bars }) {
  // si il n'y a pas de bars ou que le tableau est vide
  if (!bars || bars.leght < 1) {
    return (
      <h3>Aucun Restaurant</h3>
    )
  }
  return (
    <div>
      {/* le map parcour le tableau et crée un composant pour chaque bar */}
      {bars.map(bar => {
        return (
          <BarsListItem key={bar._id} bar={bar} />
        )
      })}
    </div>
  )
}

export default BarsList
