import {Component} from 'react'

import Loader from 'react-loader-spinner'
import RepositoryItem from '../RepositoryItem/index'
import LanguageFilterItem from '../LanguageFilterItem/index'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repoItem: [],
      languageTab: languageFiltersData[0].id,
      resultStatusView: 'LOADING',
    }
  }

  componentDidMount() {
    this.fetchDataRepositories()
  }

  fetchDataRepositories = async () => {
    try {
      const {languageTab} = this.state
      const response = await fetch(
        `https://apis.ccbp.in/popular-repos?language=${languageTab}`,
      )

      if (response.ok) {
        const responseData = await response.json()
        this.setState({
          repoItem: responseData.popular_repos,
          resultStatusView: 'SUCCESS',
        })
      } else {
        this.setState({resultStatusView: 'FAILURE'})
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  languageTabClickedFunction = id => {
    this.setState({resultStatusView: 'LOADING', languageTab: id}, () =>
      this.fetchDataRepositories(),
    )
  }

  render() {
    const {resultStatusView, repoItem} = this.state

    let renderComponent
    switch (resultStatusView) {
      case 'SUCCESS':
        renderComponent = repoItem.map(eachObject => (
          <RepositoryItem eachObject={eachObject} key={eachObject.id} />
        ))
        break
      case 'FAILURE':
        renderComponent = (
          <img
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure view"
          />
        )
        break
      case 'LOADING':
        renderComponent = (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        )
        break
      default:
        renderComponent = null
        break
    }

    return (
      <div className="bg">
        <h1 className="mainHead">Popular</h1>
        <ul className="ulLanguageFilterItem">
          {languageFiltersData.map(eachObject => (
            <LanguageFilterItem
              eachObject={eachObject}
              languageTabClickedFunction={this.languageTabClickedFunction}
              key={eachObject.id}
            />
          ))}
        </ul>
        <ul className="ulRepositoryItem">{renderComponent}</ul>
      </div>
    )
  }
}

export default GithubPopularRepos
