import '../styles/about.css'
 const about = () =>
{
    return (
        <div style={{minHeight: "500px"}}>
        <h1>О нас</h1>
        <div style={{display: 'block;', fontSize: "18px"}}>
        Добро пожаловать в наш магазин ПК комплектующих! Мы — команда профессионалов, преданных своему делу и стремящихся предоставить вам самые качественные и современные компоненты для сборки вашего идеального компьютера.

Наш ассортимент включает в себя все необходимое: от процессоров и видеокарт до материнских плат и блоков питания. Мы тщательно отбираем товары, чтобы гарантировать их надежность и производительность.

Мы ценим каждого клиента и готовы помочь вам на каждом этапе — от выбора комплектующих до послепродажного обслуживания.

Если у вас есть вопросы, не стесняйтесь обращаться к нам:
        
        </div>
        <ul style={{fontSize: "18px"}}>
            <li>
            info@kst.by - для физических лиц
            </li>
            <li>
            bn@kst.by - для юридических лиц
            </li>
            <li>
            service@kst.by - по вопросам гарантии
            </li>
        </ul>
        <div style={{fontSize: "18px"}}>Также вы можете связаться с нами по телефонам:</div>
        <ul  fontSize={{fontSize: "18px"}}>
        <li style={{fontSize: "18px"}}>+375 29 33 33 759</li>
        <li style={{fontSize: "18px"}}>+375 25 743 78 64</li>
        </ul>
        <div style={{fontSize: "18px", marginBottom: "20px"}}>
        Мы всегда рады помочь вам создать компьютер вашей мечты!
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <iframe
            
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37635.362060574174!2d27.460623561813218!3d53.87469219628521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbd01ccebda717%3A0x9f1aa3b1cb66790d!2z0JjQvdGC0LXRgNC90LXRgi3QvNCw0LPQsNC30LjQvSBLU1QuYnk!5e0!3m2!1sru!2sby!4v1732389280747!5m2!1sru!2sby"
            width="50%"
            height="450px"
            style={{ border: 0, textAlign: "center" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
        ></iframe>
        </div>
        </div>
        
    )
}
export default about