// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {eachObject, languageTabClickedFunction} = props
  const {language, id} = eachObject

  const languageTabClicked = () => languageTabClickedFunction(id)

  return (
    <li className="liLanguage">
      <button
        type="button"
        className="languagefilerBtn"
        onClick={languageTabClicked}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
