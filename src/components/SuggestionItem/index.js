// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updatedSuggestion} = props
  const {suggestion} = suggestionDetails

  const onUpdate = () => {
    updatedSuggestion(suggestion)
  }

  return (
    <li className="list-container">
      <p className="description">{suggestion}</p>
      <button type="button" className="button" onClick={onUpdate}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
