var mymap = L.map('mapid').setView([46.2043907, 6.1431577], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmF5YXN0aWNvdCIsImEiOiJja3M4cjZqdjkwNmJ1MnBwNDljdmJ4dXJwIn0.AiKORC_gheuM0ThYph6U5w'
}).addTo(mymap);
var requestURL = 'https://rayasticot.github.io/options.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    const jsonOptions = request.response;
  }
var id1 = L.marker([jsonOptions['panneaux'][0]['cosa'],['panneaux'][0]['cosb']]).addTo(mymap);
id1.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
