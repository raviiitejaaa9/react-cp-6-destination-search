import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchValue: '',
  }

  onChangeInput = event => {
    this.setState({searchValue: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {searchValue} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchValue.toLowerCase()),
    )

    console.log(searchResults)

    return (
      <div className="bg-container">
        <div className="search-container">
          <h1 className="head"> Destination Search </h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="search"
              className="search-input"
              onChange={this.onChangeInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destinations-list">
            {searchResults.map(eachDestination => (
              <DestinationItem
                eachItem={eachDestination}
                key={eachDestination.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
