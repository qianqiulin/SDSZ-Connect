import './Headbar.css';
import { useState } from 'react';
import sdszLogo from './assets/sdsz-logo.png';
import { Search, List } from 'bootstrap-icons-react';

function Headbar() {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleSearchClick = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`You searched: ${searchText}`);
  };
  function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown-menu">
        <button onClick={toggleMenu}><List /></button>
        {isOpen && (
          <div className="dropdown-content">
            <a href="#">About</a>
            <a href="#">School Gallery</a>
            <a href="#">Alumni</a>
            <a href="#">Join Us</a>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="headbar">
      <div className="logo">
        <img src={sdszLogo} alt="SDSZ Logo" style={{ width: "50px", height: "50px" }} />
      </div>
      <h1>SDSZ-Connect</h1>
      <div className="button-area">
        <button onClick={handleSearchClick}><Search /></button>
          <DropdownMenu />
      </div>
      {showSearchInput && (
        <div className="search-overlay">
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Headbar;
