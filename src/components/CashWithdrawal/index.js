import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: denominationList}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + id}))
  }

  render() {
    const {cashList} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Sarah Williams </h1>
        <h1 className="balanc-title">Your Balance</h1>
        <h1 className="withdraw-title">Withdraw</h1>
        <p clasName="paragraph">CHOOSE SUM (IN RUPEES)</p>
        <div className="denomination-item-container">
          <button type="button" onClick={this.onIncrement} className="button">
            {count}
          </button>
          <ul className="todos-list">
            {cashList.map(eachItem => (
              <TodoItem
                key={eachItem.id}
                todoDetails={eachItem}
                updateItem={this.updateItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
