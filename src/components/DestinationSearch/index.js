// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

const DestinationSearch = props => {
  const {destinationsList} = props
  console.log(destinationsList)

  return (
    <div className="bg-container">
      <h1> Destination Search </h1>
      <input type="search" />
      <div className="destinations-container">
        {destinationsList.map(eachDestination => (
          <DestinationItem
            eachItem={eachDestination}
            key={eachDestination.id}
          />
        ))}
      </div>
    </div>
  )
}

export default DestinationSearch
