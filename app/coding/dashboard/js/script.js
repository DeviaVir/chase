$( window ).load( function() {
	utils = function( target, func ) {
    	return function(){
    		return func.apply( target, arguments ); 
    	}
    }
alert( 'HOI?' )
    var socket = io.connect('apiv2.sweebr.com:3000');
    socket.on('connect', function(){
    	$( 'body > pre' ).remove()
    })
    socket.on('transaction', function (data) {
    	// { payments: Payments, mutations: Mutations }
    	$( 'div.transactions' ).find( 'span' ).removeClass( 'updated' ).addClass( 'updated' ).text( data.payments )
    	$( 'div.mutations' ).find( 'span' ).removeClass( 'updated' ).addClass( 'updated' ).text( data.mutations )
    	setTimeout(function(){
    	        //$( 'div.mutations, div.transactions' ).removeClass( 'updated' ) 
    	}, 2000)
    });
    socket.on('total', function( data ) {
    	// { OrganizationsActive: OrganizationsActive, WorkersActive: WorkersActive,  }
    })
    socket.on( 'organizations', function( data ) {
    	$.each( data, function( i,v ) {
    		$( '<li />' ).text( i ).append( '<span class="badge">' + v +  '</span>' ).attr( 'data-count', v ).attr( 'data-name', i ).appendTo( 'ul.organizations' )
    	})
    })
    socket.on('login organization', function (data) {
    	// { name: OrganizationName }
    	var li = $( 'ul.organizations > li[data-name="' + data.name + '"]' )
    	if( li.length ) {
    		li.addClass( 'updated' ).attr( 'data-count', li.attr( 'data-count' ) + 1 )
    		li.find( 'span' ).text( li.attr( 'data-count' ) )
    	}
    	else {
    		li = $( '<li />' ).text( data.name ).append( '<span class="badge">' + 1 + '</span>' ).addClass( 'added' ).attr( 'data-count', 1 ).attr( 'data-name', data.name ).appendTo( 'ul.organizations' )
    	}
    	setTimeout(utils(li,function(){
    		this.removeClass( 'updated' ).removeClass( 'added' )
    	}), 2000)
    	delete li;
    });
    socket.on('logout organization', function (data) {
    	// { name: OrganizationName }
    	var li = $( 'ul.organizations > li[data-name="' + data.name + '"]' )
    	if( li.length ) {
    		li.attr( 'data-count', li.attr( 'data-count' ) - 1 )
    		li.find( 'span' ).text( li.attr( 'data-count' ) )
    		if( li.attr( 'data-count' ) <= 0 )
    			li.addClass( 'removed' )
    		setTimeout(utils(li,function(){
    			this.remove()
    		}), 2000)
    	}
    	delete li;
    });
    socket.on('restart server', function (data) {
    	// Server restarted, remove all logged in organizations & workers, they will appear again
    	$( 'ul.organizations' ).empty()
    });
})