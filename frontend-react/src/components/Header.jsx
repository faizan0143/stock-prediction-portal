import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="container navbar pt-3 align-items-start">
        <div>
          <Link to="/" className="navbar-brand text-light">
            Stock Prediction Portal
          </Link>
        </div>
        <div>
          <Button text="Login" class="btn-info me-2" url="/login" />
          <Button text="Register" class="btn-outline-info" url="/register" />
        </div>
      </nav>
    </>
  );
};

export default Header;
