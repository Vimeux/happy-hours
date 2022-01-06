import React from 'react'

function BarsListItem ({ bar }) {
  // liste les éléments que l'on veut affché pour un bar
  return (
    <div>
      <h3>{bar.name}</h3>
    </div>
  )
}

export default BarsListItem
