import { palette } from "./palette";

export const cardArrayDefault = [
    [
        {color: palette.shtickColor, borderColor: '', player: ''},
        {color: palette.shtickColor, borderColor: '', player: ''},
        {color: palette.shtickColor, borderColor: '', player: ''},
    ],
    [
        {color: palette.shtickColor, borderColor: '', player: ''},
        {color: palette.shtickColor, borderColor: '', player: ''},
        {color: palette.shtickColor, borderColor: '', player: ''},
    ],
    [
        {color: palette.shtickColor, borderColor: '', player: ''},
        {color: palette.shtickColor, borderColor: '', player: ''},
        {color: palette.shtickColor, borderColor: '', player: ''},
    ]
]

export const winnerCombinations = [
    [{ex: 0, int: 0}, {ex: 0, int: 1}, {ex: 0, int: 2}],
    [{ex: 1, int: 0}, {ex: 1, int: 1}, {ex: 1, int: 2}],
    [{ex: 2, int: 0}, {ex: 2, int: 1}, {ex: 2, int: 2}],
    [{ex: 0, int: 0}, {ex: 1, int: 0}, {ex: 2, int: 0}],
    [{ex: 0, int: 1}, {ex: 1, int: 1}, {ex: 2, int: 1}],
    [{ex: 0, int: 2}, {ex: 1, int: 2}, {ex: 2, int: 2}],
    [{ex: 0, int: 0}, {ex: 1, int: 1}, {ex: 2, int: 2}],
    [{ex: 2, int: 0}, {ex: 1, int: 1}, {ex: 0, int: 2}],
]


// COLORS


