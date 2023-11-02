// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isRevealed: false,
  }

  showAnswer = answerText => (
    <>
      <hr className="seperator" />
      <p>{answerText}</p>
    </>
  )

  updatereveal = () => {
    this.setState(prevState => ({
      isRevealed: !prevState.isRevealed,
    }))
  }

  render() {
    const {details} = this.props
    const {questionText, answerText} = details
    const {isRevealed} = this.state
    const url = isRevealed
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const alt = isRevealed ? 'minus' : 'plus'
    return (
      <li>
        <div className="FaqItem-inner-cont">
          <h1>{questionText}</h1>
          <button type="button" onClick={this.updatereveal}>
            <img src={url} alt={alt} />
          </button>
        </div>
        {isRevealed ? this.showAnswer(answerText) : ''}
      </li>
    )
  }
}

export default FaqItem
