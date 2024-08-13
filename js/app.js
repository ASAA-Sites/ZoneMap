$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});

$('.multi-link').on('click', function() {
        window.location.assign("links.html?location=" +  $(this).attr('alt'));
        return false;
});