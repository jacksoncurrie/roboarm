/*
 * Author      :  Jackson Currie
 * Date        :  2018-07-28
 * Description :  Script for automatic moving of the controls
 */

// Socket
var socket = io();

var pickup = () => {

    for(var i = 1250; i <= 1500; i++ ) {
        socket.emit("forward", i);
    }

    for(var i = 1500; i >= 900; i-- ) {
        socket.emit("up", i);
    }

    for(var i = 1350; i >= 1100; i-- ) {
        socket.emit("in", i);
    }

    for(var i = 900; i <= 1500; i++ ) {
        socket.emit("up", i);
    }

    for(var i = 1500; i >= 1250; i-- ) {
        socket.emit("forward", i);
    }
}

var automate = (position) => {

    if(position == "right") {

        for(var i = 1450; i <= 2360; i++ ) {
            socket.emit("rotate", i);
        }

        pickup()

        for(var i = 2360; i >= 1450; i-- ) {
            socket.emit("rotate", i);
        }

    } else if(position == "left") {

        for(var i = 1450; i >= 540; i-- ) {
            socket.emit("rotate", i);
        }

        pickup()

        for(var i = 540; i <= 1450; i++ ) {
            socket.emit("rotate", i);
        }

    }

    for(var i = 1100; i <= 1350; i++ ) {
        socket.emit("in", i);
    }
    
}