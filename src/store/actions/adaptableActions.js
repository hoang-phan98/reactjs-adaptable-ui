export const SET_DARK_MODE = 'SET_DARK_MODE'
export const setDarkMode = () => ({
    type: SET_DARK_MODE,
})

export const SET_FONT_SIZE = 'SET_FONT_SIZE'
export const setFontSize = (fontSize) => ({
    type: SET_FONT_SIZE,
    payload: fontSize
})

export const SET_FONT_FAMILY = 'SET_FONT_FAMILY'
export const setFontFamily = (fontFamily) => ({
    type: SET_FONT_FAMILY,
    payload: fontFamily
})


