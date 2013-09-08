var cbpAnimatedHeader = (function() {

        var docElem = document.documentElement,
                header = document.querySelector( '.outer-header' ),
                didScroll = false,
                changeHeaderOn = 300;

        function init() {
                window.addEventListener( 'scroll', function( event ) {
                        if( !didScroll ) {
                                didScroll = true;
                                setTimeout( scrollPage, 250 );
                        }
                }, false );
        }

        function scrollPage() {
                var sy = scrollY();
                if ( sy >= changeHeaderOn ) {
                        classie.add( header, 'outer-header-shrink' );
                }
                else {
                        classie.remove( header, 'outer-header-shrink' );
                }
                didScroll = false;
        }

        function scrollY() {
                return window.pageYOffset || docElem.scrollTop;
        }

        init();

})();

