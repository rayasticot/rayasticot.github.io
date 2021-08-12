var mymap = L.map('mapid').setView([46.2043907, 6.1431577], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmF5YXN0aWNvdCIsImEiOiJja3M4cjZqdjkwNmJ1MnBwNDljdmJ4dXJwIn0.AiKORC_gheuM0ThYph6U5w'
}).addTo(mymap);
var greenIcon = L.icon({
  iconUrl: 'marker_green.png',
  iconSize:     [24, 24], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [12, 24], // point of the icon which will correspond to marker's location
  shadowAnchor: [19, 110],  // the same for the shadow
  popupAnchor:  [5, -76] // point from which the popup should open relative to the iconAnchor
});
var redIcon = L.icon({
  iconUrl: 'marker_red.png',
  iconSize:     [24, 24], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [12, 24], // point of the icon which will correspond to marker's location
  shadowAnchor: [19, 110],  // the same for the shadow
  popupAnchor:  [5, -76] // point from which the popup should open relative to the iconAnchor
});
var requestURL = 'https://rayasticot.github.io/options.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var optiona = request.response;


var isid0 = redIcon
if (optiona['panneaux'][0]['affiche'] > 0){ 
  var isid0 = greenIcon
};
var id0 = L.marker([optiona['panneaux'][0]['cosa'],optiona['panneaux'][0]['cosb']], {icon: isid0}).addTo(mymap);
id0.bindPopup(optiona['panneaux'][0]['nom']);


var isid1 = redIcon
if (optiona['panneaux'][1]['affiche'] > 0){ 
  var isid1 = greenIcon
};
var id1 = L.marker([optiona['panneaux'][1]['cosa'],optiona['panneaux'][1]['cosb']], {icon: isid1}).addTo(mymap);
id1.bindPopup(optiona['panneaux'][1]['nom']);


var isid2 = redIcon
if (optiona['panneaux'][2]['affiche'] > 0){ 
  var isid2 = greenIcon
};
var id2 = L.marker([optiona['panneaux'][2]['cosa'],optiona['panneaux'][2]['cosb']], {icon: isid2}).addTo(mymap);
id2.bindPopup(optiona['panneaux'][2]['nom']);


var isid3 = redIcon
if (optiona['panneaux'][3]['affiche'] > 0){ 
  var isid3 = greenIcon
};
var id3 = L.marker([optiona['panneaux'][3]['cosa'],optiona['panneaux'][3]['cosb']], {icon: isid3}).addTo(mymap);
id3.bindPopup(optiona['panneaux'][3]['nom']);


var isid4 = redIcon
if (optiona['panneaux'][4]['affiche'] > 0){ 
  var isid4 = greenIcon
};
var id4 = L.marker([optiona['panneaux'][4]['cosa'],optiona['panneaux'][4]['cosb']], {icon: isid4}).addTo(mymap);
id4.bindPopup(optiona['panneaux'][4]['nom']);


var isid5 = redIcon
if (optiona['panneaux'][5]['affiche'] > 0){ 
  var isid5 = greenIcon
};
var id5 = L.marker([optiona['panneaux'][5]['cosa'],optiona['panneaux'][5]['cosb']], {icon: isid5}).addTo(mymap);
id5.bindPopup(optiona['panneaux'][5]['nom']);


var isid6 = redIcon
if (optiona['panneaux'][6]['affiche'] > 0){ 
  var isid6 = greenIcon
};
var id6 = L.marker([optiona['panneaux'][6]['cosa'],optiona['panneaux'][6]['cosb']], {icon: isid6}).addTo(mymap);
id6.bindPopup(optiona['panneaux'][6]['nom']);


var isid7 = redIcon
if (optiona['panneaux'][7]['affiche'] > 0){ 
  var isid7 = greenIcon
};
var id7 = L.marker([optiona['panneaux'][7]['cosa'],optiona['panneaux'][7]['cosb']], {icon: isid7}).addTo(mymap);
id7.bindPopup(optiona['panneaux'][7]['nom']);


var isid8 = redIcon
if (optiona['panneaux'][8]['affiche'] > 0){ 
  var isid8 = greenIcon
};
var id8 = L.marker([optiona['panneaux'][8]['cosa'],optiona['panneaux'][8]['cosb']], {icon: isid8}).addTo(mymap);
id8.bindPopup(optiona['panneaux'][8]['nom']);


var isid9 = redIcon
if (optiona['panneaux'][9]['affiche'] > 0){ 
  var isid9 = greenIcon
};
var id9 = L.marker([optiona['panneaux'][9]['cosa'],optiona['panneaux'][9]['cosb']], {icon: isid9}).addTo(mymap);
id9.bindPopup(optiona['panneaux'][9]['nom']);


var isid10 = redIcon
if (optiona['panneaux'][10]['affiche'] > 0){ 
  var isid10 = greenIcon
};
var id10 = L.marker([optiona['panneaux'][10]['cosa'],optiona['panneaux'][10]['cosb']], {icon: isid10}).addTo(mymap);
id10.bindPopup(optiona['panneaux'][10]['nom']);


var isid11 = redIcon
if (optiona['panneaux'][11]['affiche'] > 0){ 
  var isid11 = greenIcon
};
var id11 = L.marker([optiona['panneaux'][11]['cosa'],optiona['panneaux'][11]['cosb']], {icon: isid11}).addTo(mymap);
id11.bindPopup(optiona['panneaux'][11]['nom']);


var isid12 = redIcon
if (optiona['panneaux'][12]['affiche'] > 0){ 
  var isid12 = greenIcon
};
var id12 = L.marker([optiona['panneaux'][12]['cosa'],optiona['panneaux'][12]['cosb']], {icon: isid12}).addTo(mymap);
id12.bindPopup(optiona['panneaux'][12]['nom']);


var isid13 = redIcon
if (optiona['panneaux'][13]['affiche'] > 0){ 
  var isid13 = greenIcon
};
var id13 = L.marker([optiona['panneaux'][13]['cosa'],optiona['panneaux'][13]['cosb']], {icon: isid13}).addTo(mymap);
id13.bindPopup(optiona['panneaux'][13]['nom']);


var isid14 = redIcon
if (optiona['panneaux'][14]['affiche'] > 0){ 
  var isid14 = greenIcon
};
var id14 = L.marker([optiona['panneaux'][14]['cosa'],optiona['panneaux'][14]['cosb']], {icon: isid14}).addTo(mymap);
id14.bindPopup(optiona['panneaux'][14]['nom']);


var isid15 = redIcon
if (optiona['panneaux'][15]['affiche'] > 0){ 
  var isid15 = greenIcon
};
var id15 = L.marker([optiona['panneaux'][15]['cosa'],optiona['panneaux'][15]['cosb']], {icon: isid15}).addTo(mymap);
id15.bindPopup(optiona['panneaux'][15]['nom']);


var isid16 = redIcon
if (optiona['panneaux'][16]['affiche'] > 0){ 
  var isid16 = greenIcon
};
var id16 = L.marker([optiona['panneaux'][16]['cosa'],optiona['panneaux'][16]['cosb']], {icon: isid16}).addTo(mymap);
id16.bindPopup(optiona['panneaux'][16]['nom']);


var isid17 = redIcon
if (optiona['panneaux'][17]['affiche'] > 0){ 
  var isid17 = greenIcon
};
var id17 = L.marker([optiona['panneaux'][17]['cosa'],optiona['panneaux'][17]['cosb']], {icon: isid17}).addTo(mymap);
id17.bindPopup(optiona['panneaux'][17]['nom']);


var isid18 = redIcon
if (optiona['panneaux'][18]['affiche'] > 0){ 
  var isid18 = greenIcon
};
var id18 = L.marker([optiona['panneaux'][18]['cosa'],optiona['panneaux'][18]['cosb']], {icon: isid18}).addTo(mymap);
id18.bindPopup(optiona['panneaux'][18]['nom']);


var isid19 = redIcon
if (optiona['panneaux'][19]['affiche'] > 0){ 
  var isid19 = greenIcon
};
var id19 = L.marker([optiona['panneaux'][19]['cosa'],optiona['panneaux'][19]['cosb']], {icon: isid19}).addTo(mymap);
id19.bindPopup(optiona['panneaux'][19]['nom']);


var isid20 = redIcon
if (optiona['panneaux'][20]['affiche'] > 0){ 
  var isid20 = greenIcon
};
var id20 = L.marker([optiona['panneaux'][20]['cosa'],optiona['panneaux'][20]['cosb']], {icon: isid20}).addTo(mymap);
id20.bindPopup(optiona['panneaux'][20]['nom']);


var isid21 = redIcon
if (optiona['panneaux'][21]['affiche'] > 0){ 
  var isid21 = greenIcon
};
var id21 = L.marker([optiona['panneaux'][21]['cosa'],optiona['panneaux'][21]['cosb']], {icon: isid21}).addTo(mymap);
id21.bindPopup(optiona['panneaux'][21]['nom']);


var isid22 = redIcon
if (optiona['panneaux'][22]['affiche'] > 0){ 
  var isid22 = greenIcon
};
var id22 = L.marker([optiona['panneaux'][22]['cosa'],optiona['panneaux'][22]['cosb']], {icon: isid22}).addTo(mymap);
id22.bindPopup(optiona['panneaux'][22]['nom']);


var isid23 = redIcon
if (optiona['panneaux'][23]['affiche'] > 0){ 
  var isid23 = greenIcon
};
var id23 = L.marker([optiona['panneaux'][23]['cosa'],optiona['panneaux'][23]['cosb']], {icon: isid23}).addTo(mymap);
id23.bindPopup(optiona['panneaux'][23]['nom']);


var isid24 = redIcon
if (optiona['panneaux'][24]['affiche'] > 0){ 
  var isid24 = greenIcon
};
var id24 = L.marker([optiona['panneaux'][24]['cosa'],optiona['panneaux'][24]['cosb']], {icon: isid24}).addTo(mymap);
id24.bindPopup(optiona['panneaux'][24]['nom']);


var isid25 = redIcon
if (optiona['panneaux'][25]['affiche'] > 0){ 
  var isid25 = greenIcon
};
var id25 = L.marker([optiona['panneaux'][25]['cosa'],optiona['panneaux'][25]['cosb']], {icon: isid25}).addTo(mymap);
id25.bindPopup(optiona['panneaux'][25]['nom']);


var isid26 = redIcon
if (optiona['panneaux'][26]['affiche'] > 0){ 
  var isid26 = greenIcon
};
var id26 = L.marker([optiona['panneaux'][26]['cosa'],optiona['panneaux'][26]['cosb']], {icon: isid26}).addTo(mymap);
id26.bindPopup(optiona['panneaux'][26]['nom']);

}