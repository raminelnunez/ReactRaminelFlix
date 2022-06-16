import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import styles from "../StyleComponents/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/"><img src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png" alt="netflix-font" border="0" /></Link>
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