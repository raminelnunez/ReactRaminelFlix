const SearchForm = () => {
  return (
    <form id="search" class="search">
      <input type="search" placeholder="Search for a title..." value="" />
      <div className="searchResults"></div>
    </form>
  );
}

export default SearchForm;