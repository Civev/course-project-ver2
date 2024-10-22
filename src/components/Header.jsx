import style from '../styles/Header.module.css'
import cart from '../photo/icons/cart.png'

const Header = () =>
{
    return(
    <header className={style.header}>
        <nav>
        <div className={style.header__logo}>Kst.By</div>
          <ul>
            <li><a href="default.html">Каталог</a></li>
            {/* <li><a href="news.asp">Новости</a></li> */}
            <li><a href="contact.asp">Доставка</a></li>
            <li><a href="about.asp">О нас</a></li>
            
          </ul>
          <div style={{marginLeft: "60px"}}><a><img style={{height: "60px"}} src={cart}></img></a></div>
        </nav>
      </header>
      )
}
export default Header;