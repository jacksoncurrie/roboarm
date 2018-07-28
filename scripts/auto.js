/*
 * Author      :  Jackson Currie
 * Date        :  2018-07-28
 * Description :  Script for automatic moving of the controls
 */

// Socket
var socket = io();

var automate = () => {
    for(var i = 1450; i <= 2360; i++ ) {
        (function (i) {
            setTimeout(function () {
                socket.emit("rotate", i);
            }, 300);
        })(i);
    }

    for(var i = 1250; i <= 1500; i++ ) {
        (function (i) {
            setTimeout(function () {
                socket.emit("forward", i);
            }, 300);
        })(i);
    }

    for(var i = 1500; i >= 900; i-- ) {
        (function (i) {
            setTimeout(function () {
                socket.emit("up", i);
            }, 300);
        })(i);
    }

    for(var i = 1350; i >= 1100; i-- ) {
        (function (i) {
            setTimeout(function () {
                socket.emit("in", i);
            }, 300);
        })(i);
    }

    for(var i = 1100; i <= 1350; i++ ) {
        (function (i) {
            setTimeout(function () {
                socket.emit("in", i);
            }, 300);
        })(i);
    }

    for(var i = 900; i <= 1500; i++ ) {
        (function (i) {
            setTimeout(function () {
                socket.emit("up", i);
            }, 300);
        })(i);
    }

    for(var i = 1500; i >= 1250; i-- ) {
        (function (i) {
            setTimeout(function () {
                socket.emit("forward", i);
            }, 300);
        })(i);
    }

    for(var i = 2360; i >= 1450; i-- ) {
        
        (function (i) {
            setTimeout(function () {
                socket.emit("rotate", i);
            }, 300);
        })(i);
    }
}