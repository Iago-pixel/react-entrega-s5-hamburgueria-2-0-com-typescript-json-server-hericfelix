import React, { useState } from "react";
import { Container } from "./style";
import Button from "../../components/Button";
import { useCart } from "../../providers/Cart";

interface ProductCardProps {
  product: {
    name: string;
    category: string;
    price: number;
    id: number;
    img: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { handleAddToCart } = useCart();

  const handleMouseEnter = () => {
    if (!isFocused) {
      setIsFocused(true);
    }
  };

  const handleMouseLeave = () => {
    if (isFocused) {
      setIsFocused(false);
    }
  };

  return (
    <Container
      isFocused={isFocused}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <figure>
        <img src={product?.img} alt={product?.name} />
      </figure>
      <div>
        <h3>{product?.name}</h3>
        <p>{product?.category}</p>
        <p>
          {product?.price?.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <Button
          size="small"
          isFocused={isFocused}
          variant={isFocused ? "primary" : "secondary"}
          onClick={() => handleAddToCart(product)}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  );
};

export default ProductCard;
