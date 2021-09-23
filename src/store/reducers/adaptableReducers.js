import {
    SET_DARK_MODE, SET_FONT_FAMILY, SET_FONT_SIZE,
} from "../actions/adaptableActions";

export const initialState = {
    dark_mode: false,
    font_size: null,
    font_family: null
}

export const adaptableReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_DARK_MODE:
            return {
                ...state,
                dark_mode: !state.dark_mode,
            };
        case SET_FONT_SIZE:
            return {
                ...state,
                font_size: payload
            }
        case SET_FONT_FAMILY:
            return {
                ...state,
                font_family: payload
            }
        default:
            return state;
    }
}