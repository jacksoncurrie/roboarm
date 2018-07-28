/*
 * Author      :  Jackson Currie
 * Date        :  2018-07-28
 * Description :  Script for automatic moving of the controls
 */

// Socket
var socket = io();

var automate = () => {
    for(var i = 1450; i <= 2360; i++ ) {
        socket.emit("rotate", i);
    }
}