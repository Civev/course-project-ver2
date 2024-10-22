import styles from '../styles/Content.module.css'
import { Card}  from '@mui/material'
import {Paper} from '@mui/material'
const ContentItem = ({title, price, description, image, type}) =>
{
    console.log(image)
    console.log(title)
    return(
            <div className={styles.item_conteiner}>
            <Paper elevation={5} className={styles.item}>
            {/* <div className={styles.item}> */}
                <img style={{width: "150px", height: "120px", margin:"20px auto 0"}} src={image} alt="" />
                <h2 style={{textAlign: "center"}}>{title}</h2>
                <p style={{color: "black", paddingLeft: "5px", fontSize: "18px"}}>{type}</p>
                <div style={{fontSize: "18px", color: "black", height: "100px", paddingLeft: "7px", borderTop: "1px solid", borderBottom: "1px solid"}}>{description} </div>
                <p className={styles.price} >{price} руб.</p>
                
                <div className={styles.button}>
                    В корзину
                </div>
            {/* </div> */}
            </Paper>
            </div>
    )
}
export default ContentItem;