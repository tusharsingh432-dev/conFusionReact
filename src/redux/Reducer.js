import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import {DISHES} from '../shared/dishes';


export const initialState = {
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    dishes: DISHES
}

export const Reducer = (state = initialState, action) =>{
    return state;
}