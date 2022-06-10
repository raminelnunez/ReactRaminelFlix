const Header = ({SearchForm}) => {
  return (
    <header class="header">
      <a href="/"><img src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png" alt="netflix-font" border="0" /></a>
      <div id="navigation" class="navigation">
        <nav>
          <ul>
            <li><a href="/my-watch-list">Watch List</a></li>
          </ul>
        </nav>
      </div>
      <form id="search" class="search">
        <input type="search" placeholder="Search for a title..." value="" />
        <div class="searchResults"></div>
      </form>
    </header>
  );
}