let locations = {
    "North West" :    [],
    "North East" :    [],
    "North Central" : [],
    "Edmonton" :      [],
    "Central" :       [],
    "South Central" : [],
    "Calgary" :       [],
    "South" :         [
        {"link" : "https://saiac.schoolsites.ca/", "name" : "SAIAC"}, 
        {"link" : "https://sites.google.com/view/sebcbasketball/home", "name" : "SEBC"}, 
        {"link" : "http://www.sahsrl.ca/", "name" : "SAHSRL"}
    ]
}

console.log(locations)

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('location');

let links = locations[myParam];
let linkContainer = document.getElementById("links-container")

if(links.length == 0) {
  console.log("No available data")
  let p = document.createElement("p")
  p.textContent = "No available Data"
  linkContainer.appendChild(p)
}

for(let i = 0; i < links.length; i++) {
  console.log(links[i])
  let l = document.createElement("a")
  l.href = links[i].link

  l.innerHTML = links[i].name
  l.target = "_blank"
  l.rel = "noopener noreferrer"

  linkContainer.appendChild(l)
}

var paragraph = document.getElementById("loc");
paragraph.innerHTML = myParam + " Zone Links";