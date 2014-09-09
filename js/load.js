$.get( "http://gaadikey.in/getCount", function( data ) {

   console.log("No of users is "+data.length);
  $( "page-header" )
    .append( "<small>Over "+data.length+"+ registered users.</small>") //2+
}, "json" ); 