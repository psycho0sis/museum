//video
const progress = document.querySelector('.video__progress');
const progressVolume = document.querySelector('.video__progress-volume');  
const volume = document.querySelector('.video__player-img-vol');  


progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #fff ${value}%, #C4C4C4 100%)`
})
 
progressVolume.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #24809E 0%, #24809E ${value}%, #fff ${value}%, #C4C4C4 100%)`
})

//map
mapboxgl.accessToken = 'pk.eyJ1IjoicHN5Y2hvMHNpcyIsImEiOiJja3JuNXJwYmMxaDI3MnBsaXkwcXJwYnE0In0.7HgpUz30GQD_AXbobmquIw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/psycho0sis/ckrngnbuj37mg17o1pz4dca84/draft', 
center: [2.33587, 48.86102], // starting position
zoom: 16 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());