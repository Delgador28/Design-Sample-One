$("#happy").on("click", function(event) {
    event.preventDefault();
    $('body').css({
        'background-color': 'yellow',
    });
});

$("#sad").on("click", function(event) {
    event.preventDefault();
    $('body').css({
        'background-color': 'blue',
    });
})

$("#sick").on("click", function(event) {
    event.preventDefault();
    $('body').css({
        'background-color': 'yellowgreen',
    });
    
})

$("#angry").on("click", function(event) {
    event.preventDefault();
    $('body').css({
        'background-color': 'red',
    });
})

$("#cool").on("click", function(event) {
    event.preventDefault();
    $('body').css({
        'background-color': 'skyblue',
    });
})

$("#everythingisfine").on("click", function(event) {
    event.preventDefault();
    $('body').css({
        'background-color': 'lightgrey',
    });
})