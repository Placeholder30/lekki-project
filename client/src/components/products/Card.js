import { Link } from "react-router-dom";
import { CardContainer } from "../home/FeaturedProducts";

function Card({ product }) {
  return (
    <CardContainer>
      <div className="prod-image">
        <img src={product.imageUrl} alt={product.alt} />
      </div>
      <p className="prod-name">{product.name}</p>
      <p className="price">${product.price}</p>
      <Link to={`products/${product.id}`} className="view-prod">
        View Item {">"}
      </Link>
    </CardContainer>
  );
}

export default Card;
