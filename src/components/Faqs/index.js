// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem/index'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="main-cont">
        <div className="faq-cont">
          <h1 className="faq-hed">FAQs</h1>
          <ul>
            {faqsList.map(eachFaq => (
              <FaqItem details={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
