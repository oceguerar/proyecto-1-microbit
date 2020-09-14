basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, 145)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P0, 41)
    basic.pause(2000)
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, 38)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P1, 180)
    basic.pause(2000)
})
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, 180)
    basic.pause(2000)
    pins.servoWritePin(AnalogPin.P2, 64)
    basic.pause(2000)
})
