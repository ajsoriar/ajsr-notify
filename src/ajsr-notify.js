/**
 * ajsr-notify
 * Pure javascript notifications plugin. No JQuery needed.
 * @version v0.0.1 - 2017-09-01
 * @link https://github.com/ajsoriar/ajsr-notify
 * @author Andres J. Soria R. <ajsoriar@gmail.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */

(function() { // An immediately invoked function will wrap our code

    "use strict";

    // About this here: Our IIFE will be called globally, so this will be pointing at the window. 

    console.log("(1) Value of this:", this); // In the case of "use strict"; this will be undefined.
 
    window.ajsrnotify = function() { // Use 'window' to share ny object in the global scope.

        // Utility method to extend defaults including user options
        var extendDefaults = function (source, properties) {

            var property;

            for (property in properties) {
              if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
              }
            }

            return source;
        };

        var timestamp_ID = Date.now();

        // Define default options
        var defaults = {
            title: "Info",
            msg: "Awesome!",
            classTheme: 'default',
            className: 'mio',
            type: null, //+"info",
            closeButton: false,
            timeout: 5000,
            position: "center",
            autoClose: true,
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null
        };

        // Create options by extending defaults with the passed in arugments

        var options = {};

        if (arguments[0] && typeof arguments[0] === "object") {
            options = extendDefaults( defaults, arguments[0] );
        }

        console.log("options:", options);

        if ( typeof options.onShow === "function" ) options.onShow();

        // destroy previous alert if it exists
        var elemDiv = document.createElement( 'div' );
        elemDiv.id = "ajsrnotify-"+ timestamp_ID;
        elemDiv.className = "ajsrnotify "+ options.classTheme +" "+ options.type +" "+ options.className;

        var htmlString;
            htmlString = '<div class="window">';
            htmlString += '<div class="title">'+ options.title + ' / '+ timestamp_ID +'</div>';
            htmlString += '<p>'+ options.msg +'</p>';
            htmlString += '<div>';

        elemDiv.innerHTML = htmlString;
        document.body.appendChild(elemDiv);

        if ( typeof options.onShown === "function" ) options.onShown();

        elemDiv.className = elemDiv.className + " show";


        // Show alert time
        var couter_timestamp_A = Date.now();
        var couter_timestamp_B = Date.now();

        console.log("couter_timestamp_A:", couter_timestamp_A );
        console.log("couter_timestamp_B:", couter_timestamp_B );

        function counter() {

            if ( ( couter_timestamp_A + 2000 ) > couter_timestamp_B ) {

                couter_timestamp_B = Date.now();
                console.log(timestamp_ID +" ...");
                mov = window.requestAnimationFrame( counter );

            } else {

                console.log(timestamp_ID +"End & remove!");
                elemDiv.remove();
                window.cancelAnimationFrame( mov ); 
            }  
        }

        var mov = window.requestAnimationFrame( counter );
    };

}());



/* --- */