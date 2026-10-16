import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "../../axiosConfig";
import About from "../../components/About/About";

const Register = () => {
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("")

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/users/register", {
        username,
        firstname,
        lastname,
        email,
        password,
      });

      alert("Registration successful");
      navigate("/login");
    } catch (error) {
      // alert("Something went wrong");
      console.log(error.response);
      setMessage(error.response.data.message)
    }
  };

  return (
    <div className="landing_page">
      <section className="auth_wrapper">
        <div className="auth_card">
          <p style={{ textAlign: "center", color: "red", fontSize: 15 }}>{message}</p>
          <h2>Join the network</h2>
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
          <form onSubmit={handleRegister}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="name_fields">
              <input
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <button type="submit" id="register_btn">Agree and Join</button>
          </form>

          <p>
            I agree to the <Link to="#">privacy policy</Link> and{" "}
            <Link>terms of service</Link>
          </p>
          <p>
            <Link to="/login">Already have an account?</Link>
          </p>
        </div>
        <About />
      </section>
    </div>
  );
};

export default Register;
