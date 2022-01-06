import React, { useEffect, useState } from 'react'
import BarsList from '../components/BarsList/BarsList'
import { getBars } from '../services/api'

function Bars () {
  // initialise l'état des bars sous forme de tableau
  const [bars, setBars] = useState([])

  // On récupère les donnés avec la fonction de l'api
  const getData = async () => {
    const bars = await getBars()
    setBars(bars)
  }

  // useEffect regroupe componentDidMount, componentDidUpdate, et componentWillUnmount
  // le composant est nettoyer grace à [] lors du démontage
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>Bars</h1>
      <BarsList bars={bars} />
    </div>
  )
}

export default Bars
