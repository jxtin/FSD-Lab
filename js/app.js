/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 70,
        "density": {
          "enable": true,
          "value_area": 600
        }
      },
      "color": {
        "value": "#ff4949"
      },
      "shape": {
        "type": "triangle",
        "stroke": {
          "width": 0,
          "color": "#919191"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 28,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 120,
        "color": "#919191",
        "opacity": 0.8,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
async function search_data() {
  // get text input from the form
  // const jsonData = require("./hello.json")
  let response = await fetch("hello.json");
  let json_file = await response.json();
  console.log(json_file);
  var input = document.getElementById("search").value;
  found = false;
  console.log(input);
  // length of json
  for (var k in json_file) {
    // console.log(k);
    // console.log(json_file[k]);
    if (json_file[k].name.toLowerCase() == input) {
      found = true;
      // create table
      document.getElementById('search-results').innerHTML = "<tr><th>Name</th><th>Description</th><th>Value</th></tr>";
      document.getElementById('search-results').innerHTML += "<tr><td>" + json_file[k].name + "</td><td>" + json_file[k].description + "</td><td>" + json_file[k].value + "</td></tr>";
      break;
    }
  }
  if (!found) {
    document.getElementById('search-results').innerHTML = "Not found";
  }

}
