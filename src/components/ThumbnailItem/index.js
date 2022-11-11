// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbnailId, isActiveThumbnailId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const isActiveThumbnailClassName = isActiveThumbnailId
    ? 'active'
    : 'in-active'

  const onClickThumbnail = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="li">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onClickThumbnail}
          className={isActiveThumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
