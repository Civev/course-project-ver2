import { combineReducers } from 'redux';
import { stateReducer, cartReducer} from './listSlice';

//принимает пред. состояния и action. Проводить операцию над состоянием

const rootReducer = combineReducers({
    state: stateReducer,
    cart: cartReducer
});

export default rootReducer;