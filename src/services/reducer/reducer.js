import {ADD_TO_CART}  from "../constants"
import state from 'react'
const initialState={
    cardData:[]
}
 function cardItem(state=initialState,action){
    switch(action.type){
        case ADD_TO_CART:
            return{
                ...state,
                cardData:action.data
            }
            break;
            default:
                return state
    }
}
export default cardItem;