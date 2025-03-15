
function initMap() {

let map;

 //location 

 const loc = { lat: 12.010480, lng: 8.489140 }


  map = new google.maps.Map(document.getElementById("map"),
   {
    center: loc,
    zoom: 14,
  });
}

const marker = new google.maps.MarKar({position: loc, map: map})

//window.initMap = initMap;

window.addEventListener("scroll", function(){
  if(window.scrollY > 150){
    document.querySelector("#navbar").style.opacity = 0.9;
  }
  else
  {
    document.querySelector("#navbar").style.opacity = 1;
  }
})



// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      1000
    );
  }
});
