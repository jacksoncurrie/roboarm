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
        position += (position < final) ? 10 : -10;

        // Send to servo
        socket.emit(servo, position);
    
        // Run function again
        setTimeout(() => 
            moveServo(servo, position, final, callback),
            20
        );
    } else {
        callback();
    }
}

// Start automation of arm
var automate = (position) => {

    // Which way to rotate
    rotateTo = (position == "right") ? 2360 : 540;
    
    // Moves the servos
    moveServo("rotate", 1450, rotateTo, () =>
        moveServo("up", 1500, 900, () =>
            moveServo("forward", 1250, 1700, () =>
                moveServo("in", 1700, 1100, () =>
                    moveServo("up", 900, 1500, () =>
                        moveServo("forward", 1700, 1250, () =>
                            moveServo("rotate", rotateTo, 1450, () =>
                                moveServo("in", 1100, 1700, () =>{})
                            )
                        )
                    )
                )
            )
        )
    );
}