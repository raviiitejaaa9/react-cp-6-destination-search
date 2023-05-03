// Write your code here
import './index.css'

const DestinationItem = props => {
  const {eachItem} = props
  const {id, imgUrl, name} = eachItem

  return (
    <div className="destination">
      <img src={imgUrl} alt={name} className="image" />
      <p className="city"> {name} </p>
    </div>
  )
}

export default DestinationItem
