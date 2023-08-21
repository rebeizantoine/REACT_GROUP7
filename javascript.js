// Initialize the map
var map = L.map('map').setView([33.894207897447394, 35.479599808576545], 13);

// Add the OSM base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker
var marker = L.marker([33.894207897447394, 35.479599808576545]).addTo(map);
marker.bindPopup("Hello! This is FOODY!!.").openPopup();

// You can add more markers, polygons, etc. as needed