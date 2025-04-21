import React, { useState } from 'react'
import { MatchSchedual } from './MatchSchedual'

export const Schedual = () => {
    const [todayWeather, settodayWeather] = useState("Rainy")
    const [matches, setmatches] = useState([
        {
            team1:"MI",
            team2:"CSK",
            ground:"Vankhede",
            date:"21-04-2025"
        },
        {
            team1:"DL",
            team2:"KKR",
            ground:"Delhi",
            date:"22-04-2025"
        }
    ])


  return (
    <div style={{textAlign:"center"}}>
        <h1>Schedual</h1>
        <MatchSchedual matches = {matches} weather = {todayWeather}></MatchSchedual>
    </div>
  )
}
