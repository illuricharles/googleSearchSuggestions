// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion, onClickSuggestion} = props
  const onClickArrow = () => {
    onClickSuggestion(suggestion)
  }
  return (
    <li className="search-item">
      <p className="search-suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="image-arrow"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem
