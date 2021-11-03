import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  CartCount,
  CartIconContainer,
  Container,
  Content,
  IconContainer,
  SearchContainer,
  TitleContainer,
} from "./style";
import { useCart } from "../../providers/Cart";
import { useUser } from "../../providers/User";

interface Props {}

const Header = (props: Props) => {
  const { setCartIsVisible, userCart } = useCart();
  const { handleLogout } = useUser();

  return (
    <Container>
      <Content>
        <TitleContainer>
          <h2>
            Burguer <span>Kenzie</span>
          </h2>
        </TitleContainer>
        <IconContainer>
          <SearchContainer>
            <input placeholder="Digitar pesquisa"></input>
            <div>
              <SearchIcon color="secondary" />
            </div>
          </SearchContainer>
          <CartIconContainer onClick={() => setCartIsVisible(true)}>
            <ShoppingCartIcon color="secondary" />
            <CartCount>{userCart.length}</CartCount>
          </CartIconContainer>
          <LogoutIcon color="secondary" onClick={handleLogout} />
        </IconContainer>
      </Content>
    </Container>
  );
};

export default Header;
