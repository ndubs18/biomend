var modalSoil = document.getElementsByClassName("modal")[0];
var modalPlant = document.getElementsByClassName("modal")[1];
var modalGravel = document.getElementsByClassName("modal")[2];


var soilModal = document.getElementById('soilModal');
var plantModal = document.getElementById('plantModal');
var gravelModal = document.getElementById('gravelModal')

// Get the button that opens the modal
var soilBtn = document.getElementById("soilBtn");
var plantBtn = document.getElementById("plantBtn");
var gravelBtn = document.getElementById("gravelBtn");

// Get the <span> element that closes the modal
var soilSpan = document.getElementsByClassName("close")[0];
var plantSpan = document.getElementsByClassName("close")[1];
var gravelSpan = document.getElementsByClassName("close")[2];


// When the user clicks on the button, open the modal 
soilBtn.onclick = function() {
  soilModal.style.display = "block";
}

plantBtn.onclick = function() {
    plantModal.style.display = "block";
}

gravelBtn.onclick = function() {
    gravelModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
soilSpan.onclick = function() {
    soilModal.style.display = "none";
}

plantSpan.onclick = function() {
    plantModal.style.display = "none";
}

gravelSpan.onclick = function() {
    gravelModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modalSoil) {
    modalSoil.style.display = "none";
  }

  else if (event.target === modalPlant) {
      modalPlant.style.display = "none";
  }

  else if (event.target === modalGravel) {
      modalGravel.style.display = "none";
  }
}
