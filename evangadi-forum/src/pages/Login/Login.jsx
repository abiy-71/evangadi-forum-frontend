import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "../../axiosConfig";
import { AppState } from "../../App";
import About from "../../components/About/About";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AppState);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/users/login", {
        email,
        password,
      });
      console.log(data);
      localStorage.setItem("token", data.token);
      setUser(data);
      navigate("/");
    } catch (error) {
      // alert("Something went wrong");
      console.log(error.response);
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="landing_page">
      <section className="auth_wrapper">
        <div className="auth_card auth_card--login">
          <p style={{textAlign: "center", color: "red", fontSize: 15}}>{message}</p>
          <h2>Login to your account</h2>
          <p>
            don't have an account?{" "}
            <Link to="/register">Create a new account</Link>
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="password_field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className={showPassword ? "visible" : ""}
                onClick={() => setShowPassword((prev) => !prev)}
              ></button>
            </div>
            <button type="submit">submit</button>
          </form>

          <p>
            <Link to="/register">Create an account</Link>
          </p>
        </div>
        <About />
      </section>
    </div>
  );
};

export default Login;
