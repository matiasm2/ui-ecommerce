import Image from 'next/image';
import './Header.scss';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar/SearchBar';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link href="/">
          <Image
            src="/Logo_ML@2x.png"
            alt="MercadoLibre Logo"
            className="header__logo"
            width={53}
            height={36}
            priority
          />
        </Link>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
