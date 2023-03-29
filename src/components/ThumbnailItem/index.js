import './index.css'

const ThumbnailItem = props => {
  const {item, onClickThumbnail, selectedindex} = props
  const handleClick = () => {
    onClickThumbnail(item.id)
  }
  return (
    <li className="list" onClick={handleClick}>
      <img
        src={item.thumbnailUrl}
        alt={item.thumbnailAltText}
        className={
          selectedindex === item.id
            ? 'thumbnail-image selected-image'
            : 'thumbnail-image'
        }
      />
    </li>
  )
}

export default ThumbnailItem
