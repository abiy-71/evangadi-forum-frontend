import { useEffect, useState, createContext } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "./axiosConfig";
import PublicLayout from "./layouts/PublicLayout";
import MainLayout from "./layouts/MainLayout";
import Question from "./pages/Question/Question";

export const AppState = createContext();

function App() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const checkUser = async () => {
    if (!token) {
      return;
    }

    try {
      const data = await axios.get("/users/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(data.data);
    } catch (error) {
      console.log(error.response);
      navigate("/login");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AppState.Provider value={{ user, setUser, logout }}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
        </Route>
      </Routes>
    </AppState.Provider>
  );
}

export default App;
