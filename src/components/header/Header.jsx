import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { CiCamera, CiHeadphones, CiMobile3, CiMonitor, CiSearch, CiStopwatch } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";


import Cart from "../../assets/cart.svg";
import Like from "../../assets/like.svg";
import User from "../../assets/user.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_top}>
        <div className={styles.header_logo}>
          <img src="/logo.svg" alt="logo" />
        </div>

        <div className={styles.header_search}>
          <span><CiSearch size={20} /></span>
          <input type="text" placeholder="Search" />
        </div>

        <nav className={styles.header_nav}>
          <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ""}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ""}>Contact Us</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? styles.active : ""}>Blog</NavLink>
        </nav>

        <div className={styles.header_buttons}>
          <img src={Like} alt="like" />
          <img src={Cart} alt="cart" />
          <img src={User} alt="user" />
        </div>
      </div>

      <div className={styles.category_bar}>
        <div className={styles.category_content}>
          <div className={styles.cat_item}><CiMobile3 /> Phones</div>
          <div className={styles.cat_item}><CiMonitor /> Computers</div>
          <div className={styles.cat_item}><CiStopwatch /> Smart Watches</div>
          <div className={styles.cat_item}><CiCamera /> Cameras</div>
          <div className={styles.cat_item}><CiHeadphones /> Headphones</div>
          <div className={styles.cat_item}><IoGameControllerOutline /> Gaming</div>
        </div>
      </div>
    </header>
  );
};

export default Header;