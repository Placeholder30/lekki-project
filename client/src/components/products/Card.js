import { Link } from "react-router-dom";
import { CardContainer } from "../home/FeaturedProducts";
import { RiArrowRightSLine } from "react-icons/ri";
import styled from "styled-components";
function Card({ product }) {
  return (
    <Link to={`/products/${product.UUID}`}>
      <Container>
        <div className="prod-image">
          <img src={product.imageUrl} alt={product.alt} />
        </div>
        <p className="prod-name">{product.name}</p>
        <p className="price">${product.price}</p>
        <div className="view-prod">
          <div>View Item</div> <RiArrowRightSLine className="right-arrow" />
        </div>
      </Container>
    </Link>
  );
}

const Container = styled(CardContainer)`
  border: none;
`;
export default Card;
