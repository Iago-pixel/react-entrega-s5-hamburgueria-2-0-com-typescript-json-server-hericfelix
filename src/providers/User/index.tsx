import { useState, ReactNode, useContext, createContext } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../services/api";

interface UserProps {
  children: ReactNode;
}
interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

interface UserContextData {
  handleLogin: (data: LoginData) => void;
  handleRegister: (data: RegisterData) => void;
  handleLogout: () => void;
  handleExpiration: (error: string) => void;
  token: string;
  userId: number;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

export const UserProvider = ({ children }: UserProps) => {
  const history = useHistory<History>();

  const [token, setToken] = useState<string>(
    localStorage.getItem("@KenzieBurger:token") || ""
  );

  const [userId, setUserId] = useState<number>(
    JSON.parse(localStorage.getItem("@KenzieBurger:id") || "0")
  );

  const handleLogin = async (data: LoginData) => {
    await api
      .post("/login", data)
      .then((res) => {
        setToken(res.data.accessToken);
        localStorage.setItem("@KenzieBurger:token", res.data.accessToken);
        setUserId(res.data.user.id);
        localStorage.setItem(
          "@KenzieBurger:id",
          JSON.stringify(res.data.user.id)
        );
        return history.push("/");
      })
      .catch((err) => toast.error(err.response.data));
  };

  const handleRegister = ({ email, password, name }: RegisterData) => {
    const user = { email, password, name };
    api
      .post("/register", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        return history.push("/login");
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };

  const handleLogout = () => {
    localStorage.clear();
    setToken("");
    setUserId(0);
    return history.push("/login");
  };

  const handleExpiration = (error: string) => {
    if (error === "jwt expired") {
      handleLogout();
      toast.error("Seu login expirou");
    } else {
      toast.error("Algo deu errado. Tente novamente!");
    }
  };
  return (
    <UserContext.Provider
      value={{
        handleLogin,
        handleRegister,
        handleLogout,
        handleExpiration,
        token,
        userId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
