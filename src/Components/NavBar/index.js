import './index.css'

const NavBar = props => {
  const {score, timer} = props

  return (
    <ul className="nav-container">
      <li
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <li className="score-container">
        <p className="score-heading">
          Score: <span className="score">{score}</span>
        </p>
        <div className="timer-container">
          <img
            className="timer-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
          />
          <p className="score-heading score">{timer} Sec</p>
        </div>
      </li>
    </ul>
  )
}
export default NavBar
