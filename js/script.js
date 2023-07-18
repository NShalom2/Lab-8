$(document).ready(function() {
    // Click event
    $('#title1').on('click', function() {
        $(this).toggleClass('highlight');
    });

    // Double click event
    $('#title2').on('dblclick', function() {
        $(this).toggleClass('highlight');
    });

    // Hover event
    $('#title3').hover(
        function() {
            $(this).css('color', 'red');
        },
        function() {
            $(this).css('color', 'black');
        }
    );
});
