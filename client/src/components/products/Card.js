import { Link } from "react-router-dom";
import { CardContainer } from "../home/FeaturedProducts";
import { RiArrowRightSLine } from "react-icons/ri";

function Card({ product }) {
  return (
    <Link to={`/products/${product.UUID}`}>
      <CardContainer>
        <div className="prod-image">
          <img src={product.imageUrl} alt={product.alt} />
        </div>
        <p className="prod-name">{product.name}</p>
        <p className="price">${product.price}</p>
        <div className="view-prod">
          <div>View Item</div> <RiArrowRightSLine className="right-arrow" />
        </div>
      </CardContainer>
    </Link>
  );
}

export default Card;
