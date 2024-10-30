import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'
/**
 * дерево состояний храниться store(объект всех состояний, то к чему будет обращение)
 * 
*/
const store = configureStore({
  reducer: rootReducer,
});

export default store;