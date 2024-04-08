import Logo from "../assets/logo.png";
import "./header.css";

const Header = () => {
  return (
    <>
      <img className="logo" src={Logo} alt="Logo" />
      <div>Header</div>
      <h2>hello</h2>
    </>
  );
};

export default Header;