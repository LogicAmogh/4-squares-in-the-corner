let X = 0
let Y = 0
function placing (x: number, y: number) {
    X = x
    Y = y
    led.plot(X, Y)
}
input.onButtonPressed(Button.A, function () {
    placing(0, 0)
    square()
    placing(3, 0)
    square()
    placing(3, 3)
    square()
    placing(0, 3)
    square()
})
function square () {
    X += 1
    led.plot(X, Y)
    basic.pause(100)
    Y += 1
    led.plot(X, Y)
    basic.pause(100)
    X += -1
    led.plot(X, Y)
    basic.pause(100)
    Y += -1
    led.plot(X, Y)
    basic.pause(100)
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
