/*
 * Author      :  Jackson Currie
 * Date        :  2018-07-28
 * Description :  Script for automatic moving of the controls
 */

// Socket
var socket = io();

var moveServo = (servo, position, final, callback) => {
   
    // While not complete
    if(position != final) {
       
        // Which way to move
        position += (position < final) ? 5 : -5;

        // Send to servo
        socket.emit(servo, position);
    
        // Run function again
        setTimeout(() => 
            moveServo(servo, position, final, callback),
            10
        );
    } else {
        callback();
    }
}

// Start automation of arm
var automate = () => {

    // Moves the servos
    moveServo("rotate", 1450, 2360, () =>
    moveServo("up", 1500, 1300, () =>
    moveServo("forward", 1250, 1700, () =>
    moveServo("in", 1700, 1100, () =>
    moveServo("up", 1300, 1500, () =>
    moveServo("forward", 1700, 1250, () =>
    moveServo("rotate", 2360, 540, () =>
    moveServo("up", 1500, 1300, () =>
    moveServo("forward", 1250, 1700, () =>
    moveServo("in", 1100, 1700, () =>
    moveServo("forward", 1700, 1250, () =>
    moveServo("up", 1300, 1500, () =>
    moveServo("rotate", 540, 1450, () =>
    moveServo("rotate", 1450, 540, () =>
    moveServo("up", 1500, 1300, () =>
    moveServo("forward", 1250, 1700, () =>
    moveServo("in", 1700, 1100, () =>
    moveServo("up", 1300, 1500, () =>
    moveServo("forward", 1700, 1250, () =>
    moveServo("rotate", 540, 2360, () =>
    moveServo("up", 1500, 1300, () =>
    moveServo("forward", 1250, 1700, () =>
    moveServo("in", 1100, 1700, () =>
    moveServo("forward", 1700, 1250, () =>
    moveServo("up", 1300, 1500, () =>
    moveServo("rotate", 2360, 1450, () =>
    automate()
    ))))))))))))))))))))))))));
}