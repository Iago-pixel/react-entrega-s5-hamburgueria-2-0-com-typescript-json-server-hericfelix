import { ReactNode } from "react";
import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";
import { UserProvider } from "./User";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <UserProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </UserProvider>
  );
};

export default Providers;
