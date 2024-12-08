import style from '../styles/Header.module.css';
import cart from '../photo/icons/cart.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <div className={style.header__logo}>Kst.By</div>
        <ul className={style.headerList}>
          <li>
            <Link to="/">Каталог</Link>
          </li>
          <li>
            <Link to="/delivery">Доставка</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
        </ul>
        <div>
          <Link to="/cart">
            <img className="cart-icon" src={cart} alt="Cart" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;