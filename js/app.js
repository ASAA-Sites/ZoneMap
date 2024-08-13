$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});

$('.multi-link').on('click', function() {
        window.location.assign("links.html?location=" +  $(this).attr('alt'));
        return false;
});



// $('.single-link').on('click', function() {
//     e.preventDefault();
//     window.open("example.com");
//     return false;
// });


function redirect(link) {
    window.open(link)
}