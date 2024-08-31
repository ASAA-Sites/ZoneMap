const searchParams = new URLSearchParams(window.location.search);

let route = searchParams.get("category")

let currentLocation = route ? route : "General"

let linkdata = []
let dataLoaded = false;

let url = `https://script.google.com/macros/s/AKfycbymCJtUEcwge-CrsY90aMEpTXfaiKZHjD84SiuLc4lnB7ZmK7RzChbtteyK4XC-SSWu/exec?path=Data`;
fetch(url)
.then((response) => response.json())
.then(json => {
    linkdata = json;
    dataLoaded = true;
    $('.container').css("display", "none")
    $('.zoneContainer').css("filter", "none").css("pointer-events", "auto")
});


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
    let links = linkdata.filter(a => a.Zone == $(element).attr('title') && a.Category == currentLocation)
    console.log(links.length)
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
            l.href = links[i].Link
        
            l.innerHTML = links[i]["Display Name"]
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