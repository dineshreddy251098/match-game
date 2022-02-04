import './index.css'

const ThumbnailItem = props => {
  const {eachThumbnail, onClickThumbnail} = props
  const {id} = eachThumbnail

  const onClicked = () => {
    onClickThumbnail(id)
  }
  return (
    <li className="thumbnail-container">
      <button onClick={onClicked} className="thumbnail-btn" type="button">
        <img
          className="image"
          src={eachThumbnail.thumbnailUrl}
          alt="thumbnail"
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
