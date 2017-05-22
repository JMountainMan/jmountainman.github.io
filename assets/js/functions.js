$(document).ready(function() {
    $(".icon a img").click(function() {
        $(".hide").slideToggle();
    });
});

// $.urlParam =
function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace(
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;
	}
	return vars;
}
var name = $_GET('name');

$("nameTag").html(name);

// Variable speichert klasse
/* Lösungsvorschlag / Ideen:
    .attr('class')
    this.className*/

// Variable wird icon Element angefügt
