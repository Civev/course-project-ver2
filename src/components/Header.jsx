import style from '../styles/Header.module.css'
import cart from '../photo/icons/cart.png'
import {Link} from 'react-router-dom'
const Header = () =>
{
    return(
    <header className={style.header}>
        <nav>
        <div className={style.header__logo}>Kst.By</div>
          <ul>
            <li><Link to='/'>Каталог</Link></li>
            {/* <li><a href="news.asp">Новости</a></li> */}
            <li><a href="contact.asp">Доставка</a></li>
            <li><a href="about.asp">О нас</a></li>
            
          </ul>
          <div style={{marginLeft: "60px"}}><Link to="/cart"><img style={{height: "60px"}} src={cart}></img></Link></div>
        </nav>
      </header>
      )
}
export default Header;