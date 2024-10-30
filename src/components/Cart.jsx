import { useState, useEffect } from "react";
import CartItems from "./CartItem"; 
import '../styles/CartItems.modules.css'
import { useSelector, useDispatch } from "react-redux";
import { delCart } from "../slices/listSlice";

export const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cart); 
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const groupedItems = groupItemsByTitle(cartItems);
        setItems(groupedItems);
        calculateTotal(groupedItems);
    }, [cartItems]);

    const groupItemsByTitle = (noneGroped) => {
        return noneGroped.reduce((acc, item) => {
            const existingItem = acc.find(i => i.title === item.title);

            if (existingItem) {
                existingItem.quantity += 1; 
                existingItem.fullPrice = existingItem.quantity * existingItem.price;
            } else {
                acc.push({ ...item, quantity: 1, fullPrice: item.price }); 
            }
            return acc;
        }, []);
    };

    const calculateTotal = (items) => {
        const totalSum = items.reduce((acc, item) => acc + item.fullPrice, 0);
        setTotal(totalSum);
    };

    const deleteFromCart = (title) => {
        const updatedItems = items.filter(item => item.title !== title);
        setItems(updatedItems);
        calculateTotal(updatedItems);
        dispatch(delCart(title));
    };

    const changeQuantity = (title, change) => {
        setItems(prevItems => {
            const newItems = prevItems.map(item => {
                if (item.title === title) {
                    const newQuantity = item.quantity + change;
                    const validQuantity = Math.max(newQuantity, 1);
                    return { 
                        ...item, 
                        quantity: validQuantity, 
                        fullPrice: item.price * validQuantity 
                    }; 
                }
                return item;
            });
            calculateTotal(newItems);
            return newItems;
        });
    };
   const resultedCart = items.map((item, index) => (
        <CartItems 
            key={index} 
            title={item.title} 
            price={item.price} 
            quantity={item.quantity} 
            description={item.description}
            del={deleteFromCart}
            changeQuantity={changeQuantity}
            fullPrice={item.fullPrice}
        />
    ))
    return (
        <div>
            <main style={{ minHeight: "500px" }}>
                {resultedCart.length > 0 ? resultedCart : <div className="empty_cart">К сожалению, ваша корзина пуста</div>}
            </main>
            <div style={{display: "flex", justifyContent: "space-between", marginTop: "20px"}}>
            {resultedCart.length===0 ? "" : <div style={{fontSize: "24px"}}>Итоговая сумма: {total.toFixed(2)} Руб.</div>}
            
                    {resultedCart.length === 0 ? "":<div className="ConfirmButton">Оформить</div>}
                
            </div>
        </div>
    );
};