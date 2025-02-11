import "../styles/base.css";
import "../styles/Footer.css";
import { getYear } from "../utilities/getDates";

const Footer = () => {
  return (
    <div className="border">
      <footer>
        <p>&copy; {getYear()} moo.v</p>
      </footer>
    </div>
  );
};

export default Footer;
