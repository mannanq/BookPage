// Get curent year for copyright
$('#year').text(new Date().getFullYear());

// Init ScrollSpy

$('body').scrollspy({target: '#main-nav'});

// Add ScrollSpy

$('#main-nav a').on('click', function (event) {
    if(this.hash !== " "){
        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            window.location.hash = hash;
        });
    }
});