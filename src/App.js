import { useState } from "react";

export default function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

function Hello() {
  const [username, setUserName] = useState("Vrushabh");
  const [password, setPassword] = useState("");

  const handleUserName = (e) => {
    const newUsername = e.target.value;
    setUserName(newUsername);
  };
  const passhandler = (e) => {
    const newPass = e.target.value;
    setPassword(newPass);
  };
  return (
    <div>
      <input type="text" value={username} onChange={handleUserName} />
      <input type="password" values={password} onChange={passhandler} />
      <h1>{username}</h1>
      <h1>{password}</h1>
    </div>
  );
}
