$(document).ready(function() {
    $(".icon a img").click(function() {
        $(".hide").slideToggle();
    });
});

$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}


// Variable speichert klasse
/* Lösungsvorschlag / Ideen:
    .attr('class')
    this.className*/

// Variable wird icon Element angefügt
