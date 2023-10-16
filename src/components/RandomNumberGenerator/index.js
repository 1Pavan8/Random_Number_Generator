// Write your code here
import {Component} from 'react'
import './index.css'

class Randomnum extends Component {
  state = {newnum: 0}

  changenum = () => {
    this.setState(() => ({newnum: Math.ceil(100 * Math.random())}))
  }

  render() {
    const {newnum} = this.state
    return (
      <div className="main">
        <div className="subc">
          <h1 className="head">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.changenum}>
            Generate
          </button>
          <p className="num">{newnum}</p>
        </div>
      </div>
    )
  }
}

export default Randomnum
