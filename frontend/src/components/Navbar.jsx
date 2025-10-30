import { useState } from "react";
import { data } from "../restApi.json";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="logo">ZEESH</div>

      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {/* Smooth scroll links (for same-page sections) */}
          {data[0].navbarLinks.map((element) => (
            <ScrollLink
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              key={element.id}
            >
              {element.title}
            </ScrollLink>
          ))}

          {/* React Router links (for different pages) */}
          <RouterLink to="/signup">Signup</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
        </div>

        <button className="menuBtn">OUR MENU</button>
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
