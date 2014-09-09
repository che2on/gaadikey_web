
function getCount()
{
	$.get( "http://gaadikey.in/getCount", function( data ) {
		console.log("Data is "+data);
	   console.log("No of users is "+data.registered_users);
	  $( "page-header" )
	    .append( "<small>Over "+data.registered_users+"+ registered users.</small>") //2+
	}, "json" ); 

}