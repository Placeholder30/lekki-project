import { Link } from "react-router-dom";
import { CardContainer } from "../home/FeaturedProducts";

function Card({ product, setProduct }) {
  return (
    <CardContainer>
      <div className="prod-image">
        <img src={product.imageUrl} alt="" />
      </div>
      <p className="prod-name">{product.name}</p>
      <p className="price">${product.price}</p>
      <Link
        to="/details"
        className="view-prod"
        onClick={() => {
          setProduct(product);
        }}
      >
        View Item {">"}
      </Link>
    </CardContainer>
  );
}

export default Card;
