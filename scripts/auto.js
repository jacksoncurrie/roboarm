/*
 * Author      :  Jackson Currie
 * Date        :  2018-07-28
 * Description :  Script for automatic moving of the controls
 */

// Socket
var socket = io();

var moveServo = (servo, position, final) => {
   
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
var automate = async (position) => {

    // Which way to rotate
    rotateTo = (position == "right") ? 2360 : 540;
    
    // Moves the servos
    await moveServo("rotate", 1450, rotateTo);
    await moveServo("up", 1500, 900);
    await moveServo("forward", 1250, 1500);
    await moveServo("in", 1700, 1100);
    await moveServo("up", 900, 1500);
    await moveServo("forward", 1500, 1250);
    await moveServo("rotate", rotateTo, 1450);
    await moveServo("in", 1100, 1700);
}
