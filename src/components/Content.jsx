
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/Content.module.css';
import ContentItem from './ContentItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';
import { Card } from '@mui/material';
import {useDispatch, useSelector} from 'react-redux'
import {addCart, cartReducer} from '../slices/listSlice'

const Content = () => {
  const [items, setItems] = useState([]);
  const [tempItems, setTemp] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [price, setPrice] = useState([200, 4000]);
  const [priceField, setPriceField] = useState([200,4000])
  const minDistance = 300;
  const dispatch = useDispatch();
  console.log(useSelector(state => state.cart.cart))
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/posts");
      const data = await response.json();
      setItems(data);
      setTemp(data);
    };
    fetchData();
  }, []);
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


  

  const changeCatalog = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    filterCatalogByCoast(price)
    filterItems(value, selectedTypes, price);
  };
  const changeCatalogByFilter = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;


    setSelectedTypes(prev =>
      checked ? [...prev, value] : prev.filter(type => type !== value)
    );


    filterItems(searchTerm, checked ? [...selectedTypes, value] : selectedTypes.filter(type => type !== value), price);
  };

  function filterCatalogByCoast(newValue) {
    return tempItems.filter(item => item.price >= newValue[0] && item.price <= newValue[1]);

  }

  const filterItems = (search, types, price) => {
    const filteredItems = items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(search);
      const matchesType = types.length === 0 || types.includes(item.type);
      const matchesPrice = item.price >= price[0] && item.price <= price[1];

      return matchesSearch && matchesType && matchesPrice;
    });
    setTemp(filteredItems);
  };

  const addToCart = (title) =>
  {
      const neededItem = items.filter(item => item.title === title);

      groupItemsByTitle(neededItem)
      
      dispatch(addCart(neededItem[0]))
  }

  const list = tempItems.map(item =>

    <ContentItem
      key={item.id}
      title={item.title}
      price={item.price}
      description={item.description}
      image={item.image}
      type={item.type}
      Click={addToCart}
    />
  );

  const ChangePriceSlider = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
    } else {
      setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
    }

    setPriceField(newValue);
    filterItems(searchTerm, selectedTypes, newValue);
  };

  const changePriceField = (index, event) => {
    const newValue = [...priceField];
    const newPrice = Number(event.target.value);
    
    if(!isNaN(newPrice))
    {
   
    newValue[index] = newPrice
    
    

    setPriceField(newValue);
    setPrice(newValue); 
    
    filterItems(searchTerm, selectedTypes, newValue);
  }
  };
  
  return (
    <div>
      <FormControl size='medium' fullWidth={true}>
        <TextField onChange={changeCatalog} sx={{width: "100wv"}} placeholder='Поиск...' color='info' classes={styles.input} margin='10px' style={{ marginTop: "10px" }} size='normal'></TextField>
      </FormControl>
      <div className={styles.content}>

        <aside className={styles.content__aside}>
          <Card sx={{height: "400px"}}>
          <p style={{ textAlign: "center", color: "black" }}>Тип</p>
          <label>  <Checkbox onChange={changeCatalogByFilter} name="" type="checkbox" value="Видеокарта" placeholder="Видеокарта"></Checkbox> Видеокарта </label>
          <br></br>
          <label>  <Checkbox onChange={changeCatalogByFilter} name="" type="checkbox" value="Процессор" placeholder="Оперативная память"></Checkbox> Процессоры </label>
          <br></br>
          <label>  <Checkbox onChange={changeCatalogByFilter} name="" type="checkbox" value="Оперативная память" placeholder="Оперативная память"></Checkbox> Опертивная память </label>
          <br />
          <label>  <Checkbox onChange={changeCatalogByFilter} name="" type="checkbox" value="SSD" placeholder="SSD"></Checkbox> SSD </label>
          <p style={{ textAlign: "center", color: "black" }}>Цена</p>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "10px", paddingRight: "10pxn"}}>
            <TextField sx={{width: "40%" }} onChange={(event) => changePriceField(0,event)} value={priceField[0]} id="filled-basic" label="От" variant="filled" />
            --
            <TextField sx={{width: "40%", paddingRight: "10px"}} onChange={(event) => changePriceField(1,event)} value={priceField[1]} id="filled-basic" label="До" variant="filled" />
          </div>
          <Slider
            getAriaLabel={() => 'Minimum distance shift'}
            value={price}
            onChange={ChangePriceSlider}
            step={100}
         
          
            disableSwap
            min={200}
            max={4000}
            sx={{
              width: "265px",
              marginLeft: "16px",
              '@media (max-width: 480px)': { width: '340px' },
              '@media (max-width: 768px)': { width: '315px' } 
            }}
            size='normal'
          />



        </Card>
        </aside>
        <main style={{ width: "100%" }}>



          <div className={styles.content__conteiner}>
            {tempItems.length > 0 ? list : <div className={styles.empty_list}> К сожалению, ничего не было найдено </div>}

          </div>
        </main>
      </div>
    </div>
  )
}
export default Content;