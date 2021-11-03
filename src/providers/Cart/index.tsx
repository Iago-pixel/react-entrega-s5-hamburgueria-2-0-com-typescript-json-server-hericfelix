import {
  useState,
  ReactNode,
  useContext,
  createContext,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useUser } from "../User";

interface CartProps {
  children: ReactNode;
}

interface CartProductsData {
  name: string;
  category: string;
  price: number;
  amount: number;
  userId: number;
  id: number;
  img: string;
}

interface HandleAddProductData {
  name: string;
  category: string;
  price: number;
  img: string;
}

interface CartContextData {
  handleAddToCart: (data: HandleAddProductData) => void;
  clearUserCart: () => void;
  deleteProductFromCart: (id: number) => void;
  handleRemoveFromCart: ({ id, amount }: CartProductsData) => void;
  userCart: CartProductsData[];
  cartIsVisible: boolean;
  setCartIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  getUserCart: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: CartProps) => {
  const { userId, token, handleExpiration } = useUser();

  const [userCart, setUserCart] = useState<CartProductsData[]>(
    [] as CartProductsData[]
  );
  const [cartIsVisible, setCartIsVisible] = useState<boolean>(false);

  useEffect(() => getUserCart(), [token, userId]);

  const getUserCart = () => {
    if (token) {
      api
        .get(`/cart?userId=${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setUserCart(res.data))
        .catch((err) => handleExpiration(err.response.data));
    }
  };

  const clearUserCart = () => {
    userCart.forEach(
      async (product) =>
        await api.delete(`/cart/${product.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
    );

    toast.success("Carrinho esvaziado.");
    getUserCart();
  };

  const deleteProductFromCart = async (id: number) => {
    await api.delete(`/cart/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    getUserCart();
    toast.success("Produto removido do carrinho!");
  };

  const handleAddToCart = async ({
    name,
    category,
    price,
    img,
  }: HandleAddProductData) => {
    if (userCart.filter((product) => product.name === name).length === 0) {
      const product = { name, category, price, img, userId: userId, amount: 1 };
      await api
        .post("/cart", product, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => toast.success("Produto adicionado ao carrinho!"))
        .catch((err) => handleExpiration(err.response.data));
      getUserCart();
    } else {
      const product = userCart.filter((product) => product.name === name)[0];
      await api
        .patch(
          `/cart/${product.id}`,
          { amount: product.amount + 1 },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .catch((err) => handleExpiration(err));
      getUserCart();
    }
  };

  const handleRemoveFromCart = async ({ id, amount }: CartProductsData) => {
    if (amount === 1) {
      deleteProductFromCart(id);
    } else {
      await api
        .patch(
          `/cart/${id}`,
          { amount: amount - 1 },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .catch((err) => handleExpiration(err));
      getUserCart();
    }
  };

  return (
    <CartContext.Provider
      value={{
        handleRemoveFromCart,
        handleAddToCart,
        deleteProductFromCart,
        userCart,
        clearUserCart,
        setCartIsVisible,
        cartIsVisible,
        getUserCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
