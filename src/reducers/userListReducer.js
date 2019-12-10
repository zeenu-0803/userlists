import { SET_USER_LISTS } from "../actions/actionTypes";

const initialState = {
    users: []
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_USER_LISTS:
            return {
                ...state,
                users: action.payload
            }
        default: return state;
    }
}