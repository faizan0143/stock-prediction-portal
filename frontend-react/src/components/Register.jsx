import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const UserData = { username, email, password };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/register/",
        UserData,
      );
      // console.log(response.data);
      console.log("User registered successfully");
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error registering user:", error.response.data);
    }
  };
  return (
    <>
      <div className="container w-50 bg-light-dark p-4 mt-5 rounded">
        <h1 className="text-light text-center pb-4">Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="text-light fw-bolder">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="text-light fw-bolder">
              E-mail:
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="text-light fw-bolder">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb3 d-block text-center">
            <input type="submit" className="btn btn-primary" value="Register" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
