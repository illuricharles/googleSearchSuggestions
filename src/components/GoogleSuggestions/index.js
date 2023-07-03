import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSuggestion = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const filterList = suggestionsList.filter(eachList => {
      const tempList = {...eachList}
      tempList.suggestion = tempList.suggestion.toLowerCase()
      return tempList.suggestion.includes(searchInput.toLowerCase())
    })

    return (
      <div className="bg-container">
        <div className="google-search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-logo"
            alt="google logo"
          />
          <div className="search-container">
            <div className="search-bar">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                placeholder="Search Google"
                type="search"
                value={searchInput}
                className="input-search"
                onChange={this.onSearch}
              />
            </div>
            <ul className="search-items-container">
              {filterList.map(eachList => {
                const {id, suggestion} = eachList
                return (
                  <SuggestionItem
                    key={id}
                    suggestion={suggestion}
                    onClickSuggestion={this.onClickSuggestion}
                  />
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
