import { combineReducers } from 'redux';
import { useAuthReducer } from './useAuthReducer';
import { useShoppingCartReducer } from './useShoppingCartReducer'
import { useLoadingReducer } from './useLoadingReducer';

export const useRootReducer = () => (combineReducers({
    auth: useAuthReducer,
    loadingState: useLoadingReducer,
    shoppingCartState: useShoppingCartReducer,
}));