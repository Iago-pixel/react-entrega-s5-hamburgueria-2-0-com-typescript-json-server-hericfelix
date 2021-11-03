import { ButtonContainer, Container } from "./style";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../providers/Cart";

interface CartProductCardProps {
  product: {
    name: string;
    category: string;
    price: number;
    amount: number;
    userId: number;
    id: number;
    img: string;
  };
}

const CartProductCard = ({ product }: CartProductCardProps) => {
  const { handleAddToCart, deleteProductFromCart, handleRemoveFromCart } =
    useCart();

  return (
    <Container>
      <div>
        <figure>
          <img alt={product.name} src={product.img}></img>
        </figure>
        <div>
          <h3>{product.name}</h3>
          <ButtonContainer>
            <button onClick={() => handleRemoveFromCart(product)}>-</button>
            <p>{product.amount}</p>
            <button onClick={() => handleAddToCart(product)}>+</button>
          </ButtonContainer>
        </div>
      </div>
      <DeleteIcon onClick={() => deleteProductFromCart(product.id)} />
    </Container>
  );
};

export default CartProductCard;
