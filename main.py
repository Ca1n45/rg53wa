def on_gesture_shake():
    Random = randint(1, 5)

    if Random == 0:
        basic.clear_screen()
        basic.show_string("Big nose!")
    elif Random == 1:
        basic.show_string("You fr got no rizz")
    elif Random == 2:
        basic.show_string("Yea...no")
        basic.clear_screen()

    elif Random == 3:
            basic.show_string("look at your feet, oh wait you can't")
            basic.clear_screen()
    elif Random == 4:
        basic.show_string("Fatty")
        basic.clear_screen()

    elif Random == 4:
            basic.show_string("Have a great day!!")
            basic.clear_screen()

input.on_gesture(Gesture.SHAKE, on_gesture_shake)






