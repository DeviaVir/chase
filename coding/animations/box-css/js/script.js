if( $( '#sweebrbox' ).length ) {
    var shows = [ 'top', 'left', 'right', 'back', 'front', 'bottom' ]
      , boxInterval = setInterval( function() {
        $( '#sweebrbox' ).removeAttr( 'class' );
        $( '#sweebrbox' ).addClass( 'show-' + shows[Math.floor(Math.random()*shows.length)] );
    }, 1500 );
}