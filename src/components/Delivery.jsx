import '../styles/Delivery.css';
import car from '../photo/icons/delivery-car.png';
import time from '../photo/icons/time-left.png';
import card from '../photo/icons/credit-card.png';

const Delivery = () => {
    return (
        <div>
            <h1>Доставка</h1>
            <section>
                <div className='title'>
                    <div className='title__content'>
                        <img style={{ width: "40px", height: '40px', marginRight: '10px' }} src={car} alt="" />
                        <h2>Тарифы и цены</h2>
                    </div>
                    <hr />
                </div>
                <div className='FirstSection__content'>
                    <div>
                        <h2>Стоимость</h2>
                        <p className='paragraph'>Заказ до 350 руб</p>
                        <p className='paragraph'>Заказ до 350 руб</p>
                    </div>
                    <div>
                        <h2>Внутри МКАДА</h2>
                        <p className='paragraph'>7 рублей</p>
                        <p className='paragraph'>0 рублей</p>
                    </div>
                </div>
                <div>
                    <p className='paragraph'>Стоимость доставки за МКАД уточняйте у менеджера.</p>
                </div>
            </section>
            <section>
                <div className='title'>
                    <div className='title__content'>
                        <img style={{ width: "30px", height: '30px', marginRight: '10px' }} src={time} alt="" />
                        <h2>Временной интервал</h2>
                    </div>
                    <hr />
                </div>
                <div>
                    <p className='paragraph'>Заказы, оформленные до 16:00 текущего дня, могут быть доставлены день в день. Возможность доставки уточняйте у менеджера.</p>
                    <span style={{display: "inline"}}>
                        <p className='paragraph'>ПН - ПТ</p>
                        <p className='paragraph'>11:00 - 23:00</p>
                        <p className='paragraph'>Сб, Вс - входной</p>
                    </span>
                </div>
            </section>
            <section>
                <div className='title'>
                    <div className='title__content'>
                        <img style={{ width: "30px", height: '30px', marginRight: '10px' }} src={card} alt="" />
                        <h2>Оплата</h2>
                    </div>
                    <hr />
                </div>
                <div>
                    <ul className='list'> 
                        <li className='elem'>Наличный расчет</li>
                        <li className='elem'>Банковская пластиковая карта</li>
                        <li className='elem'>ЕРИП (АИС «Расчет»)</li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Delivery;