import {Component} from 'react'
import ThumbnailItem from '../ThumbnailItem'
import Tab from '../Tab'
import './index.css'

class PlayingCard extends Component {
  state = {activeTabId: 'FRUIT'}

  componentWillUnmount() {
    this.clearTimeInterval()
  }

  clearTimeInterval = () => clearInterval(this.intervalId)

  onChangeTab = tabId => {
    this.setState({activeTabId: tabId})
  }

  getActiveTabThumbnails = () => {
    const {activeTabId} = this.state
    const {imagesList} = this.props

    return imagesList.filter(eachImage => eachImage.category === activeTabId)
  }

  render() {
    const {activeTabId} = this.state
    const {tabsList, matchImageObject, onClickThumbnail} = this.props
    const filteredThumbnailsList = this.getActiveTabThumbnails()

    return (
      <div>
        <div className="match-image-container">
          <img
            className="match-image"
            src={matchImageObject.imageUrl}
            alt="match"
          />
        </div>
        <ul className="tabs-container">
          {tabsList.map(eachTab => (
            <Tab
              key={eachTab.tabId}
              onChangeTab={this.onChangeTab}
              activeTabId={activeTabId}
              eachTab={eachTab}
            />
          ))}
        </ul>
        <ul className="thumbnails-container">
          {filteredThumbnailsList.map(eachThumbnail => (
            <ThumbnailItem
              onClickThumbnail={onClickThumbnail}
              key={eachThumbnail.id}
              eachThumbnail={eachThumbnail}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default PlayingCard
