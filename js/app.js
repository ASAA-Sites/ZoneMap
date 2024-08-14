import locations from "./locations.js";

$(document).ready(function(e) {
    $('img[usemap]').rwdImageMaps();
});

$('area').on('click', function(e) {
            openList($(this), e)
            return false;
});


function redirect(link) {
    window.open(link)
}

function openList(element, e) {
    let links = locations[$(element).attr('title')]
    let tooltip = document.getElementById("tooltip")

    $(element).on("mouseleave", function(e) {
        tooltip.style.animation = 'out 0.25s linear forwards'
    }) 

    $(tooltip).on("mouseenter", function() {
        tooltip.style.animation = '';
    })

    $(tooltip).on("mouseleave", function() {
       tooltip.style.animation = 'out 0.25s linear forwards'
       setTimeout(() => {
        tooltip.style.top = '15000000px'
        tooltip.right = '15000000px'
        }, "250");  
    })


    tooltip.innerHTML = '';
    tooltip.style.opacity = 0;
    tooltip.style.visibility = 'visible'
    tooltip.style.animation = '';

    if(links.length > 0) {
        for(let i = 0; i < links.length; i++) {
            let l = document.createElement("a")
            l.href = links[i].link
          
            l.innerHTML = links[i].name
            l.target = "_blank"
            l.rel = "noopener noreferrer"
          
            tooltip.appendChild(l)
        }
    } else if (links.length == 0) {
        tooltip.innerHTML = "No Available Data"
    }

    tooltip.style.left = e.pageX + 'px'
    tooltip.style.top = e.pageY + 'px'
    tooltip.style.visibility = 'visible'
    tooltip.style.opacity = 100;
    tooltip.style.display = 'flex'
}

window.openList = openList;
window.redirect = redirect