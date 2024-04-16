import './index.css'

const DenominationItem = props => {
  const {DenominationDetails, updateItem} = props
  const {id, title, value} = DenominationDetails
}

return (
  <li className="update-item">
    <h1 className="title">{title}</h1>
    <button type="button" className="update-btn" onClick={Count}></button>
  </li>
)

export default DenominationItem
