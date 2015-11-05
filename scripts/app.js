console.log('dood the script loaded');

// The constructor for our component
window.onload = function() {
  console.log('all files that this page needs have been loaded');

  function component(domElement) {
  this.domElement = domElement;
  this.initialize = function() {
    console.log('init');
  };
  this.render = function() {
    console.log('render');
    this.domElement.src = 'http://www.fly-fishing-discounters.com/images/mayflywulffadamsD022.jpg';
  }
}

var thePhoto = document.getElementById('logo');
var theButton = document.getElementById('btn');

// New component & initialize it
var comp = new component(thePhoto);
comp.initialize();

// Listen for click on button
theButton.addEventListener('click', function() {
   console.log('button pressed')
   comp.render();
 });



}
