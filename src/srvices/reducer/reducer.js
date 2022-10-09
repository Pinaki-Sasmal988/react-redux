import ADD_TO_CART from '../constants'
const initialSate={
cardData:[]
}
export default function cardItem(state=initialSate,action){
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