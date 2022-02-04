import {Component} from 'react'
import NavBar from '../NavBar'
import PlayingCard from '../PlayingCard'
import ScoreCard from '../ScoreCard'
import './index.css'

const initialState = {
  isPlaying: true,
  score: 0,
  timer: 60,
}

class MatchGame extends Component {
  state = {
    ...initialState,
    matchImageObject: {
      id: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png',
      category: 'FRUIT',
    },
  }

  componentDidMount() {
    this.intervalId = setInterval(this.decrementTime, 1000)
  }

  decrementTime = () => {
    this.setState(prevState => {
      if (prevState.timer > 0) {
        return {timer: prevState.timer - 1}
      }
      return {isPlaying: false}
    })
  }

  getMatchImageObject = () => {
    const {imagesList} = this.props
    console.log(imagesList)
    const index = Math.floor(Math.random() * imagesList.length)
    console.log(index)
    return imagesList[index]
  }

  onPlayAgain = () => {
    this.setState({
      ...initialState,
      matchImageObject: this.getMatchImageObject(),
    })
  }

  onClickThumbnail = id => {
    const {matchImageObject} = this.state

    if (matchImageObject.id === id) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        matchImageObject: this.getMatchImageObject(),
      }))
    } else {
      this.setState({isPlaying: false})
    }
  }

  render() {
    const {isPlaying, score, timer, matchImageObject} = this.state
    const {tabsList, imagesList} = this.props

    return (
      <div>
        <NavBar score={score} timer={timer} />
        <div className="gaming-section-container">
          {isPlaying ? (
            <PlayingCard
              onClickThumbnail={this.onClickThumbnail}
              tabsList={tabsList}
              matchImageObject={matchImageObject}
              imagesList={imagesList}
            />
          ) : (
            <ScoreCard onPlayAgain={this.onPlayAgain} score={score} />
          )}
        </div>
      </div>
    )
  }
}
export default MatchGame
