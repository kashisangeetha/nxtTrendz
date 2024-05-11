// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {title, brand, imageUrl, rating, price} = productDetails

  return (
    <li className="item">
      <img src={imageUrl} className="img" alt={`similar product ${title}`} />
      <p>{title}</p>
      <p>by {brand}</p>
      <div className="rating-container">
        <p>Rs {price}</p>
        <div className="price-container">
          <p>{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="img"
          />
        </div>
      </div>
    </li>
  )
}
export default SimilarProductItem
