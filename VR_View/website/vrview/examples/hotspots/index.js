/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var vrView;

// All the scenes for the experience
var scenes = {
  dolphins: {
    image: 'dolphins.jpg',
    preview: 'dolphins-preview.jpg',
    hotspots: {
      whaleRight: {
        pitch: 0,
        yaw: 110,
        radius: 0.05,
        distance: 1
      },
      whaleLeft: {
        pitch: 0,
        yaw: 150,
        radius: 0.05,
        distance: 1
      },
      walrus: {
        pitch: 0,
        yaw: 170,
        radius: 0.05,
        distance: 1
      }
    }
  },
  whaleLeft: {
    image: 'whale-left.jpg',
    preview: 'whale-left-preview.jpg',
    hotspots: {
      whaleRight: {
        pitch: 0,
        yaw: 125,
        radius: 0.05,
        distance: 1
      },
      dolphins: {
        pitch: 0,
        yaw: 110,
        radius: 0.05,
        distance: 1
      },
      walrus: {
        pitch: 0,
        yaw: 30,
        radius: 0.05,
        distance: 1
      }
    }
  },
  whaleRight: {
    image: 'whale-right.jpg',
    preview: 'whale-right-preview.jpg',
    hotspots: {
      dolphins: {
        pitch: 0,
        yaw: 305,
        radius: 0.05,
        distance: 1
      },
      whaleLeft: {
        pitch: 0,
        yaw: 180,
        radius: 0.05,
        distance: 1
      },
      walrus: {
        pitch: 0,
        yaw: 210,
        radius: 0.05,
        distance: 1
      }
    }
  },
  walrus: {
    image: 'walrus.jpg',
    preview: 'walrus-preview.jpg',
    hotspots: {
      whaleLeft: {
        pitch: 0,
        yaw: 20,
        radius: 0.05,
        distance: 1
      },
      whaleRight: {
        pitch: 0,
        yaw: 340,
        radius: 0.05,
        distance: 1
      },
      dolphins: {
        pitch: 0,
        yaw: 320,
        radius: 0.05,
        distance: 1
      }
    }
  },
  temp: {
    image: 'temp.jpg',
    preview: 'temp.jpg',
    hotspots: {
      room1: {
        pitch: 0,
        yaw: 47,
        radius: 0.05,
        distance: 1
      },
      room2: {
        pitch: 0,
        yaw: -90,
        radius: 0.05,
        distance: 1
      },
      room3: {
        pitch: 0,
        yaw: -107,
        radius: 0.05,
        distance: 1
      },
      balcony: {
        pitch: 0,
        yaw: 150,
        radius: 0.05,
        distance: 1
      }
    }
  },
  room1: {
    image: 'room1.jpg',
    preview: 'room1.jpg',
    hotspots: {
      hall: {
        pitch: 0,
        yaw: 0,
        radius: 0.05,
        distance: 1
      }
    }
  },
  room3: {
    image: 'room2.jpg',
    preview: 'room2.jpg',
    hotspots: {
      hall: {
        pitch: 0,
        yaw: 80,
        radius: 0.05,
        distance: 1
      }
    }
  },
  room2: {
    image: 'room3.jpg',
    preview: 'room3.jpg',
    hotspots: {
      hall: {
        pitch: 0,
        yaw: 180,
        radius: 0.05,
        distance: 1
      },
      balcony: {
        pitch: 0,
        yaw: 0,
        radius: 0.05,
        distance: 1
      }
    }
  },
  balcony: {
    image: 'balcony.jpg',
    preview: 'balcony.jpg',
    hotspots: {
      hall: {
        pitch: 0,
        yaw: 0,
        radius: 0.05,
        distance: 1
      }
    }
  }

};

function onLoad() {
  vrView = new VRView.Player('#vrview', {
    image: 'blank.png',
    preview: 'blank.png',
    is_stereo: true,
    is_autopan_off: true
  });

  vrView.on('ready', onVRViewReady);
  vrView.on('modechange', onModeChange);
  vrView.on('click', onHotspotClick);
  vrView.on('error', onVRViewError);
}

function onVRViewReady(e) {
  console.log('onVRViewReady');
  //var name = getParameterByName('name');
  loadScene("temp");
}

function onModeChange(e) {
  console.log('onModeChange', e.mode);
}

function onHotspotClick(e) {
  console.log('onHotspotClick', e.id);
  if (e.id) {
    loadScene(e.id);
  }
}


function loadScene(id) {
  console.log('loadScene', id);

  // Set the image
  vrView.setContent({
    image: scenes[id].image,
    preview: scenes[id].preview,
    is_stereo: true,
    is_autopan_off: true
  });

  // Add all the hotspots for the scene
  var newScene = scenes[id];
  var sceneHotspots = Object.keys(newScene.hotspots);
  for (var i = 0; i < sceneHotspots.length; i++) {
    var hotspotKey = sceneHotspots[i];
    var hotspot = newScene.hotspots[hotspotKey];

    vrView.addHotspot(hotspotKey, {
      pitch: hotspot.pitch,
      yaw: hotspot.yaw,
      radius: hotspot.radius,
      distance: hotspot.distance
    });
  }
}

function onVRViewError(e) {
  console.log('Error! %s', e.message);
}

function getParameterByName(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

window.addEventListener('load', onLoad);
