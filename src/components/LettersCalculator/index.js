/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputValue: ''}

  noOfLetters = event => {
    const {value} = event.target
    console.log(value)

    this.setState({inputValue: value})
  }

  render() {
    const {inputValue} = this.state
    return (
      <div className="bg-container">
        <div className="input-image-container">
          <div className="input-container">
            <h1 className="heading">Calculate the Letters you enter </h1>
            <label className="para" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              placeholder="Enter the Phrase"
              type="text"
              id="phraseText"
              className="input-box"
              value={inputValue}
              onChange={this.noOfLetters}
            />
            <p className="count-box">No.of letters: {inputValue.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
