/*
 * Author      :  Jackson Currie
 * Date        :  2018-07-28
 * Description :  Script for automatic moving of the controls
 */

// Socket
var socket = io();

var moveServo = async (servo, position, final) => {

    // While not complete
    if(position != final) {

        // Which way to move
        position += (position < final) ? 1 : -1;

        // Send to servo
        socket.emit(servo, position);

        // Run function again
        setTimeout(() =>
            moveServo(servo, position, final),
            10
        );
    }
}

// Start automation of arm
var automate = (position) => {

    // Which way to rotate
    rotateTo = (position == "right") ? 2360 : 540;

    // Moves the servo
    moveServo("rotate", 1450, rotateTo)
        /*.then(() =>
            moveServo("forward", 1250, 1500)
        )
        .then(() =>
            moveServo("up", 1500, 900)
        )
        .then(() =>
            moveServo("in", 1700, 1100)
        )
        .then(() =>
            moveServo("up", 900, 1500)
        )
        .then(() =>
            moveServo("forward", 1500, 1250)
        )
        .then(() =>
            moveServo("rotate", rotateTo, 1450)
        )
        .then(() =>
            moveServo("in", 1100, 1700)
        )*/
}