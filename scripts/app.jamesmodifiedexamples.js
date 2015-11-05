console.log('dood the script loaded');

window.onload = function() {
  console.log('all files that this page needs have been loaded');



// basic selectors
var container = document.getElementById('container');
console.log("The container" + container);

var monsters = ['Wreck-it Ralph', 'The giraffe from Lion King SNES', 'Ganon'];

for (var baddie in monsters) {
  // create a new dom element using document.createElement('name-of-tag');
  var li = document.createElement('li');
  // console.log('the li: ' + li);
  // access and assign a property to my dom element
  li.innerHTML = monsters[baddie]; //innerHTML is the inside of a tag
  // append it to container using selector.appendChild(domElement);
  container.appendChild(li);
}

console.log("The container" + container);

//now, we need to create an image
var kittenImage = document.createElement('img');
// alt text (alt) - ADA compliancy text for the blind
kittenImage.alt = 'A cute random kitten';
kittenImage.id = 'kitten';
kittenImage.src = 'https://pbs.twimg.com/profile_images/2546538556/lion.jpg';

// append my element as a child to a selector
container.appendChild(kittenImage);

// modify the cuteness level of my kitten
// create a new selector by querying the DOM
// notice the use of CSS style selectors!
// makes things easy to remember

var kitten = document.querySelector('#kitten');
kitten.src = 'http://dreamatico.com/data_images/kitten/kitten-2.jpg';

var listItemsArray = document.getElementsByTagName('li');
console.log(listItemsArray);

for (var li in listItemsArray) {
  listItemsArray[li].innerHTML = 'We are the champions (my friend)';
}

console.log(listItemsArray);

var status = document.getElementById('status-message');


// // bind event to a DOM element
// var body = document.getElementsByTagName('body')[0];
// console.log(body);
// // var bodyTag = body[0];
// // console.log(bodyTag);
// body.addEventListener('click', function(event) {
//   console.log(event);
//   console.log('you clicked!');
// });
//
// // touch events
// body.addEventListener('touchstart', function(event) {
//   // console.log(event);
//   // touchstart
//   // touchmove
//   // touchend
//   console.log('touchstart event:yo yo dudue wy you puokin me');
// });
//
// // keyboard events
// body.addEventListener('keyup', function(event) {
//   // look for specific keys to be pressed
//   if (event.keyCode == 13) {
//     console.log('y u pres enter?');
//   }
// });




} //End window.onload


// create a user intefae component!
// the goal here is to create an Boject
// that can update itself
// and visually show taht if needed

// ex1: user componenet


var user = {
  name: null,
  score: 0,
  domElement: null,
  initialize: function(elementToAppendTo) {
    if (this.name == null) {
        this.name = prompt('What is your name?');
      }
      this.domElement = document.createElement('div');
      elementToAppendTo.appendChild(this.domElement);
      console.log('initialize: complete');
    },
  // elemenetToAppendTo:  document.selector for an individual element
  render: function(innerHTML) {
    if (typeof(innerHTML) == 'string') {
      this.domElement.innerHTML = innerHTML;
    }
    elementToAppendTo.appendChild(this.domElement);
  },
  buildPlayerStatusString: function() {
    return this.name + ': ' + this.score;
  },
  // getter
  getName: function() {
    return this.name;
  },
  // mutator
  saveName: function(newName) {
    if (typeof(newName) == 'string' && newName.length >0) {
      this.name = newName;
    }
    else {
      alert('Incorrect or empty name');
    }
  },
  getScore: function() {
    return this.score;
  },
  updateScoreByOnePoint: function() {
    this.score = this.score + 1;
    var status = this.buildPlayerStatusString();
    this.render(status);
    return this.score;
  }
}

var status = document.getElementById('status-message');
var btn = document.getElementById('addPoint');

user.initialize(status);
btn.addEventListener('click', function() {
  user.updateScoreByOnePoint();
});
