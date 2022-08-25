import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import styles from "../StyleComponents/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/"><img src="https://fontmeme.com/permalink/220825/422dbd16fe811741d23c0a86b2c28512.png" alt="netflix-font" border="0" /></Link>
      <div id="navigation" className={styles.navigation}>
        <nav>
          <ul>
            <li><Link to="/my-watch-list">Watch List</Link></li>
          </ul>
        </nav>
      </div>
      <SearchForm/>
    </header>
  );
}

export default Header;