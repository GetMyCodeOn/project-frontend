
 $.getJSON("http://arcane-spire-9022.herokuapp.com/projects", function(data) {
 	for(i=0; i<data.length; i++){
 		var items = [];	
 		$.each( data[i], function( key, val){	
 			items.push( "<li #" + key + ">" + val + "</li>");
 		});
 		$( "<ul>", {	
 			html: items.join("")
 		}).appendTo( "#projects");
 		console.log(data[0].Name)
 	}
 	/*$.each( data[0].Name, function( key, val){
 		items.push("<li #" + key + ">" + val + "</li>");
 		$( "<ul>", {	
 			html: items.join("")
 		}).appendTo( "#name");
 	})*/
 });


/*$(document).ready(function() {
  // code for the twitter API challenge
$.ajax({
        url: "http://arcane-spire-9022.herokuapp.com/projects",
        dataType: "json",

for(i=0; i<data.length; i++){

        success: function(data) {
          $.each(data[i], function () {
          	console.log(data[i])
            $( "#projects" ).append
          });
        });
	}
}
});*/
