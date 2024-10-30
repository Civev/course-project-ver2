import { Paper } from "@mui/material"
import styles from '../styles/CartItems.modules.css'
import '../styles/CartItems.modules.css'

const CartItems = ({ title, description, type, image, price, quantity, fullPrice, del, changeQuantity }) => {
    return (
        <Paper elevation={3} sx={{ marginLeft: "-50px", height: "200px" }}>
            <div>
                <image src={image}></image>
                <h1>{title}</h1>
                <div style={{marginBottom:"10px"}}>
                    {description}
                </div>
                <div className='NumericConteiner'>
                    <div>
                        Цена за одну шт.
                    <div style={{ fontSize: "24px" }}>{price}</div>
                    </div>
                    <div style={{margin: '0 auto'}}>
                    Количество
                    <div style={{ fontSize: "18px" }}>
                       
                      <span style={{fontSize: "20px", cursor: "pointer"}} onClick={() => changeQuantity(title, -1)}>-</span>  {quantity} <span style={{cursor: "pointer", fontSize: "20px"}} onClick={() => changeQuantity(title, 1)}>+</span>
                        </div>
                    </div>
                    <div>Полная цена
                        <div style={{ fontSize: "24px", marginBottom: "10px", marginRight: "20px" }}>
                            {fullPrice.toFixed(2)} Руб.
                        </div>
                    </div>
                </div>
                <div className=".button_conteiner">
                    <div className="button" onClick={() => del(title)}>Удалить</div>
                </div>
            </div>
        </Paper>
    )
}
export default CartItems;