import React from 'react'
import { SubSchedual } from './SubSchedual'

export const MatchSchedual = (props) => {
  return (
    <div>
        <h1>Match Schedual - today's weather = {props.weather}</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>TEAM 1</th>
                    <th>TEAM 2</th>
                    <th>CITY</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.matches.map((macth)=>{
                        return<tr>
                            <td>{macth.team1}</td>
                            <td>{macth.team2}</td>
                            <td>{macth.ground}</td>
                            <td>{macth.date}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        <SubSchedual matches = {props.matches} weather = {props.weather}></SubSchedual>
    </div>
  )
}
