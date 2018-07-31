/*
 * Author      :  Jackson Currie
 * Date        :  2018-07-28
 * Description :  Script for automatic moving of the controls
 */

// Socket
var socket = io();

// Move arm to pick up
var pickup = () => {

    // Move forward
    for(var i = 1250; i <= 1500; i++ ) {
        socket.emit("forward", i);
    }

    // Move down
    for(var i = 1500; i >= 900; i-- ) {
        socket.emit("up", i);
    }

    // Grab
    for(var i = 1700; i >= 1100; i-- ) {
        socket.emit("in", i);
    }


    // Move up
    for(var i = 900; i <= 1500; i++ ) {
        socket.emit("up", i);
    }

    // Move back
    for(var i = 1500; i >= 1250; i-- ) {
        socket.emit("forward", i);
    }
}

// Start automation of arm
var automate = (position) => {

    // If automated right
    if(position == "right") {

        // Rotate right
        for(var i = 1450; i <= 2360; i++ ) {
            socket.emit("rotate", i);
        }

        // Move arm
        pickup()

        // Rotate back
        for(var i = 2360; i >= 1450; i-- ) {
            socket.emit("rotate", i);
        }

    // If automated left
    } else if(position == "left") {

        // Rotate left
        for(var i = 1450; i >= 540; i-- ) {
            socket.emit("rotate", i);
        }

        // Move arm
        pickup()

        // Rotate back
        for(var i = 540; i <= 1450; i++ ) {
            socket.emit("rotate", i);
        }
    }

    // Drop object
    for(var i = 1100; i <= 1700; i++ ) {
        socket.emit("in", i);
    }
}
