// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachItem} = props
  const {id, imgUrl, name} = eachItem

  return (
    <li className="destination">
      <img src={imgUrl} alt={name} className="image" />
      <p className="city"> {name} </p>
    </li>
  )
}

export default DestinationItem
