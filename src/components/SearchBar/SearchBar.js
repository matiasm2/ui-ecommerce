'use client';

import './SearchBar.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText.trim() !== '') {
      router.push(`/items?search=${encodeURIComponent(searchText)}`);
    }
  };

  const handleOnChange = (e) => setSearchText(e.target.value);

  return (
    <form className="header__search-bar" onSubmit={handleSubmit}>
      <input onChange={handleOnChange} placeholder="Nunca dejes de buscar" />
      <button type="submit">
        <Image
          src="/ic_Search@2x.png"
          alt="Search"
          className="header__search-bar-logo"
          width={16}
          height={16}
          priority
        />
      </button>
    </form>
  );
}

export default SearchBar;
