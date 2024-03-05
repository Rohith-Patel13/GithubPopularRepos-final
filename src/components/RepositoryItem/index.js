// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachObject} = props
  const eachObjectDetailsInCamelCase = {
    name: eachObject.name,
    issuesCount: eachObject.issues_count,
    forksCount: eachObject.forks_count,
    starsCount: eachObject.stars_count,
    avatarUrl: eachObject.avatar_url,
  }
  const {
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = eachObjectDetailsInCamelCase

  return (
    <li className="liRepoContent">
      <img src={avatarUrl} alt={name} />
      <h1>{name}</h1>
      <div className="contentBg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="contentBg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="contentBg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
