import { FETCH_TEXT } from '../actions/types';

const initialState = {
    text: '123'
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_TEXT: {
            return action.payload;
        }
        default:
            return state;
    }

}