input.onButtonPressed(Button.A, function () {
    Word = randint(0, 1)
    if (Word == 0) {
        basic.showString("Truth")
    } else if (Word == 1) {
        basic.showString("Dare")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Word2 = randint(0, 3)
    if (Word2 == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (Word2 == 1) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    } else if (Word2 == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    }
})
let Word2 = 0
let Word = 0
basic.showString("Truth or Dare")
basic.clearScreen()
