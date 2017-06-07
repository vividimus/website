
'use strict';

$( function () {
    /**
     * Activate CSS transition
     */

    var $body = $( "body" )
    .addClass( "loaded" );

// Navigation toggle

    $( "#menu-button" ).click( function () {
        $body.toggleClass( "transition" )
    } );

    /**
     * Add scroll classes
     */
    var blocksShown = 0;
    var scrollStep = 10;
    var scrollBlockSize = 10;
    var scrollClass = '.project-thumbnail';
    var $scrollItems = $( scrollClass ).each( function () {
        $( this ).data( 'top', this.offsetTop );
    } );

    $( window ).scroll( function () {
        var top = document.body.scrollTop;
        $scrollItems.each( function () {

                if( $( this ).offset().top + scrollStep < top ) {
                    $( this ).addClass( 'scroll-after' )
                } else {
                    $( this ).removeClass( 'scroll-after' )
                }
            }
        );

        var blocks = Math.floor( top / scrollBlockSize );
        if( blocks >= 0 ) {

            if( blocksShown < blocks ) {
                for( var i = blocksShown; i < blocks; i++ ) {
                    $body.addClass( 'scroll-' + scrollBlockSize * (i + 1) );
                }
            }

            if( blocksShown > blocks ) {
                for( var x = blocks; x < blocksShown; x++ ) {
                    $body.removeClass( 'scroll-' + scrollBlockSize * (x + 1) );
                }
            }

            blocksShown = blocks;
        }

    } );


} );


$(window).load(function() {
setTimeout(function() { $("#preloader").fadeOut("slow", function() { $("body").addClass("loaded"); });  }, 0);
})



// Analytics
var _gaq = _gaq || [];
_gaq.push( ['_setAccount', 'UA-33716389-1'] );
_gaq.push( ['_trackPageview'] );

(function () {
    var ga = document.createElement( 'script' );
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName( 'script' )[0];
    s.parentNode.insertBefore( ga, s );

})();