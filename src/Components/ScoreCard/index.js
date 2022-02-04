import './index.css'

const ScoreCard = props => {
  const {score, onPlayAgain} = props

  const onClickedButton = () => {
    onPlayAgain()
  }

  return (
    <div className="score-card-container">
      <img
        className="trophy-image"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <p className="your-score-heading">YOUR SCORE</p>
      <p className="score-card-score">{score}</p>
      <button onClick={onClickedButton} className="restart-btn" type="button">
        <img
          className="restart-logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p className="restart-heading">Play Again</p>
      </button>
    </div>
  )
}
export default ScoreCard
