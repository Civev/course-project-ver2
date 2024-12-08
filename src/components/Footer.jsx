import styles from "../styles/Footer.module.css";
import mail from '../photo/icons/mail.png';
import point from '../photo/icons/map_point.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__conteiner}>
                <div>
                    <p>Контакты<br />+375 29 33 33 759<br />+375 25 743 78 64</p>
                </div>
                <div>
                    <p>Почта<br />
                        <span className={styles.span__container}><img className={styles.mail} src={mail} alt="" />info@kst.by - для физических лиц</span>
                        <span className={styles.span__container}><img className={styles.mail} src={mail} alt="" />bn@kst.by - для юридических лиц</span>
                        <span className={styles.span__container}><img  className={styles.mail} src={mail} alt="" />service@kst.by - по вопросам гарантии</span>
                    </p>
                </div>
                <div>
                    <p>Выдача заказов:<br />Пн. - Пт.: 10.00-21.00<br />Сб.: 11.00-17.00<br />Вс.: выходной</p>
                </div>
                <div>
                    <p>Работа call-центра:<br />Пн. - Пт.: 9:00 - 21:00<br />Сб.: 10:00 - 18:00<br />Вс.: 11:00 - 16:00</p>
                </div>
                <div>
                    <span className={styles.span__container}><img className={styles.point} src={point} alt="" /><p>220069 г.Минск, пр. Дзержинского, 15, пом. 852</p></span>
                </div>
            </div>
            <div className={styles.line__conteiner}>
                <hr />
                <p>Общество с ограниченной ответственностью "Креативные системные технологии", 220069 г.Минск, пр. Дзержинского, 15, пом. 852
                Свидетельство о регистрации №191257780, выдано Минским Горисполкомом.
                Интернет-магазин зарегистрирован в Государственном реестре информационных ресурсов.
                Дата регистрации в торговом реестре 19.10.2022г.
                Уполномоченный по защите прав потребителей администрации Московского района г. Минска, 80174688049;
                Руководитель отдела: Ковриго Ирина Владимировна
                © ООО "Креативные системные технологии", 2022–2024</p>
            </div>
        </footer>
    );
}

export default Footer;