import {
  useState,
  ReactNode,
  useContext,
  createContext,
  useEffect,
} from "react";
import api from "../../services/api";

interface ProductsProps {
  children: ReactNode;
}

interface ProductsData {
  name: string;
  category: string;
  price: number;
  id: number;
  img: string;
}

interface ProductsContextData {
  products: ProductsData[];
}

const ProductsContext = createContext<ProductsContextData>(
  {} as ProductsContextData
);

export const ProductsProvider = ({ children }: ProductsProps) => {
  const [products, setProducts] = useState<ProductsData[]>([]);

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
