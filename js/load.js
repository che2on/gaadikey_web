
function getCount()
{
	$.get( "https://gaadikey.in/getCount", function( data ) {
		console.log("Data is "+data);
	   console.log("No of users is "+data.registered_users);
	  $( ".page-header" )
	    .append( "<small>Over "+data.registered_users+"+ registered users.</small>") //2+
	}, "json" ); 


	$.get( "https://gaadikey.in/reach", function( data ) {
		console.log("Data is "+data);
	   console.log("Reach is "+data.reach);
	  $( ".page-header" )
	    .append( "<small>Reaching around "+data.reach+"+ people.</small>") //2+
	}, "json" );



}