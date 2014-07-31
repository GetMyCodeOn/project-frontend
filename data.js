
 $.getJSON("http://arcane-spire-9022.herokuapp.com/projects", function(data) {
 	var items = [];
 	
 	
 	$.each( data[0], function( key, val){
 		console.log(data[0].name)
 		items.push( "<li #" + key + ">" + val + "</li>");
 	});
 	$( "<div>", {
 		
 		html: items.join("")
 	}).appendTo( "#projects");
 });


/*$(document).ready(function() {
  // code for the twitter API challenge
$.ajax({
        url: "http://arcane-spire-9022.herokuapp.com/projects",
        dataType: "json",

        success: function(data) {
          $.each(data[1], function () {
          	console.log(data[1])
            $( "#projects" ).append
          });
        }});
});*/
