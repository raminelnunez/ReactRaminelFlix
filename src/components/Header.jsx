import SearchForm from "./SearchForm";
import styles from "../StyleComponents/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="/"><img src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png" alt="netflix-font" border="0" /></a>
      <div id="navigation" className={styles.navigation}>
        <nav>
          <ul>
            <li><a href="/my-watch-list">Watch List</a></li>
          </ul>
        </nav>
      </div>
      <SearchForm/>
    </header>
  );
}

export default Header;