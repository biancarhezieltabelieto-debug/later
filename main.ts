input.onButtonPressed(Button.A, function () {
    basic.pause(100)
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 70)
    basic.pause(5000)
    Kitronik_Move_Motor.stop()
})
