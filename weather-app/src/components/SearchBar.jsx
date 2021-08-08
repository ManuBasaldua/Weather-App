import React, { useState } from "react";
import './SearchBar.css';

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className='search-bar' onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input className='search-bar__inputText'
        type="text"
        placeholder="Add city..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className='search-bar__inputSubmit' type="submit" value="Add" />
    </form>
  );
}
