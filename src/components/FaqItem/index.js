// Write your code here.
import {Component} from 'react'
import './index.css'

const plusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusIcon =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  onToggleImage = () => {
    this.setState(prev => ({
      isActive: !prev.isActive,
    }))
  }

  renderButton = () => {
    const {isActive} = this.state
    const image = isActive ? minusIcon : plusIcon
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button onClick={this.onToggleImage} type="button">
        <img alt={altText} src={image} />
      </button>
    )
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isActive) {
      return (
        <div>
          <hr />
          <p>{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li>
        <div>
          <h1>{questionText}</h1>
          {this.renderButton()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
