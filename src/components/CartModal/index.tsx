import React from "react";
import { useCart } from "../../providers/Cart";
import Button from "../Button";
import CartProductCard from "../CartProductCard";
import { Cart, Container, Content, EmptyCart, TitleContainer } from "./style";

const CartModal = () => {
  const { cartIsVisible, setCartIsVisible, userCart, clearUserCart } =
    useCart();

  return (
    <>
      {cartIsVisible && (
        <Container>
          <div>
            <TitleContainer>
              <h3>Carrinho de Compras</h3>
              <p onClick={() => setCartIsVisible(false)}>X</p>
            </TitleContainer>
            <Content>
              {userCart.length > 0 ? (
                <Cart>
                  <div>
                    {userCart.map((product) => (
                      <CartProductCard key={product.id} product={product} />
                    ))}
                  </div>
                  <div>
                    <div>
                      <p>Total</p>
                      <p>
                        {userCart
                          .reduce(
                            (acc, product) =>
                              acc + product.price * product.amount,
                            0
                          )
                          .toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                      </p>
                    </div>
                    <Button variant="secondary" onClick={clearUserCart}>
                      Remover todos
                    </Button>
                  </div>
                </Cart>
              ) : (
                <EmptyCart>
                  <h3>Sua sacola está vazia</h3>
                  <p>Adiciona itens</p>
                </EmptyCart>
              )}
            </Content>
          </div>
        </Container>
      )}
    </>
  );
};

export default CartModal;
