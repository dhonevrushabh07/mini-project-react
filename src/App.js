import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Router,
  Routes,
  useNavigate,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Login |</Link>
      <Link to="/register">Rrgister</Link>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

function Login() {
  let navgate = useNavigate();
  const navtonext = () => {
    navgate("/homepage");
  };

  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <div>
        <input type="password" />
      </div>
      <button onClick={navtonext}> Log In</button>
    </div>
  );
}

function Register() {
  return <div>Register Page</div>;
}

function HomePage() {
  return (
    <div>
      <h1>Welcome to Our site</h1>
    </div>
  );
}
