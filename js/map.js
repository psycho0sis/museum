mapboxgl.accessToken = 'pk.eyJ1IjoicHN5Y2hvMHNpcyIsImEiOiJja3JuNXJwYmMxaDI3MnBsaXkwcXJwYnE0In0.7HgpUz30GQD_AXbobmquIw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/psycho0sis/ckrngnbuj37mg17o1pz4dca84/draft', 
center: [2.33587, 48.86102],
tileLayer: { format: 'jpg70' },
zoom: 16 
});

map.addControl(new mapboxgl.NavigationControl());