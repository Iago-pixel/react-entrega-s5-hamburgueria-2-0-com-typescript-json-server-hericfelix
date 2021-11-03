import { Redirect } from "react-router";
import CartModal from "../../components/CartModal";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../providers/Products";
import { useUser } from "../../providers/User";
import { Container } from "./style";

const Home = () => {
  const { token } = useUser();
  const { products } = useProducts();

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <Header />
      <Container>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>
      <CartModal />
    </div>
  );
};

export default Home;
