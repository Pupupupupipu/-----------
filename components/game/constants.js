import {avatarSrc} from "../profile/avatar.png"
export const GAME_SYMBOLS = {
    ZERO: 'zero',
    CROSS: 'cross',
    TRIANGLE: 'triangle',
    SQUARE: 'square'
};

export const MOVE_ORDER = [
    GAME_SYMBOLS.CROSS,
    GAME_SYMBOLS.ZERO,
    GAME_SYMBOLS.TRIANGLE,
    GAME_SYMBOLS.SQUARE
]
export const players = [
    {id: 1, name: "Paromowwevg", rating: 1234, avatar: {avatarSrc}, symbol: GAME_SYMBOLS.CROSS},
    {id: 2, name: "Pupidamavaavfavavvava", rating: 564, avatar: {avatarSrc}, symbol: GAME_SYMBOLS.ZERO},
    {id: 3, name: "Rapapamiv", rating: 987, avatar: {avatarSrc}, symbol: GAME_SYMBOLS.TRIANGLE},
    {id: 4, name: "Mdashkinac", rating: 1411, avatar: {avatarSrc}, symbol: GAME_SYMBOLS.SQUARE}
]