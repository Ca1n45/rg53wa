input.onGesture(Gesture.Shake, function on_gesture_shake() {
    let Random = randint(1, 5)
    if (Random == 0) {
        basic.clearScreen()
        basic.showString("Big nose!")
    } else if (Random == 1) {
        basic.showString("You fr got no rizz")
    } else if (Random == 2) {
        basic.showString("Yea...no")
        basic.clearScreen()
    } else if (Random == 3) {
        basic.showString("look at your feet, oh wait you can't")
        basic.clearScreen()
    } else if (Random == 4) {
        basic.showString("Fatty")
        basic.clearScreen()
    } else if (Random == 4) {
        basic.showString("Have a great day!!")
        basic.clearScreen()
    }
    
})
