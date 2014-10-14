$( window ).load( function() {
	$.getJSON( 'http://next.funda.nl/api/zaandam,amsterdam/100000-20000/3+kamers/appartement/zwembad/in-woonwijk/', function( data ) {
		$( 'body' ).append(
			$( '<pre />' ).text( data )
		)
	})
})