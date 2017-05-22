$(document).ready(function() {
    $(".icon a img").click(function() {
        $(".hide").slideToggle();
    });
});

// Hauptklasse trifft auf top
/* Lösungsvorschlag / Ideen: */
$(document).on('scroll', function() {
    var lifeTop = $('.lifestyle').offset().top;
    var eduTop = $('.education').offset().top;

    if ($(window).scrollTop() >= lifeTop) {
        console.log("Hit Lifestyle");
    }

    if ($(window).scrollTop() >= eduTop) {
        console.log("Hit Education");
    }
});

// Variable speichert klasse
/* Lösungsvorschlag / Ideen:
    .attr('class')
    this.className*/

// Variable wird icon Element angefügt
