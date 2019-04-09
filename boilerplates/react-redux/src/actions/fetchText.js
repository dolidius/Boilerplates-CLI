import { FETCH_TEXT } from './types';

export const changeText = () =>{
    return{
        type: FETCH_TEXT,
        payload: { text: 'Redux is the best' }
    }
}