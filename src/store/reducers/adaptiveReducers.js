import { 
    SET_DARK_MODE, 
} from "../actions/adaptiveActions";

export const initialState = {
    dark_mode: false
}

export const adaptiveReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_DARK_MODE:
            return {
                ...state,
                dark_mode: !state.dark_mode,
            };
        default:
            return state;
    }
}