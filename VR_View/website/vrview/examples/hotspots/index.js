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
  room: {
    image: 'room.jpg',
    preview: 'room.jpg',
    hotspots: {
      room1: {
        pitch: 0,
        yaw: 38,
        radius: 0.05,
        distance: 1
      },
      room2: {
        pitch: 0,
        yaw: 12,
        radius: 0.05,
        distance: 1
      },
      room3: {
        pitch: 0,
        yaw: -64,
        radius: 0.05,
        distance: 1
      },
      room4: {
        pitch: 0,
        yaw: -90,
        radius: 0.05,
        distance: 1
      },
      room5: {
        pitch: 0,
        yaw: -167,
        radius: 0.05,
        distance: 1
      },
      room6: {
        pitch: 0,
        yaw: -245,
        radius: 0.05,
        distance: 1
      },
      item1_view: {
        pitch: 31,
        yaw: -300.5,
        radius: 0.03,
        distance: 1
      },
      item1_cart: {
        pitch: 15,
        yaw: -297.5,
        radius: 0.03,
        distance: 1
      },
      item2_view: {
        pitch: -5,
        yaw: -277.5,
        radius: 0.03,
        distance: 1
      },
      item2_cart: {
        pitch: -5,
        yaw: -282.5,
        radius: 0.03,
        distance: 1
      },
      item3_view: {
        pitch: -65,
        yaw: -252.5,
        radius: 0.03,
        distance: 1
      },
      item3_cart: {
        pitch: -39,
        yaw: -260.5,
        radius: 0.03,
        distance: 1
      }
    }
  },
  room1: {
    image: 'room1.jpg',
    preview: 'room1.jpg',
    hotspots: {
      room: {
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
  loadScene("room");
}

function onModeChange(e) {
  console.log('onModeChange', e.mode);
}

function renderProductInfoPopup(productId) {
  var iframe = document.getElementsByTagName('iframe')[0].contentDocument;
  var popup = iframe.getElementsByClassName('dialog')[0];
  var title = iframe.getElementsByClassName('title')[0];
  var description = iframe.getElementsByClassName('message')[0];
  // get product info from db
  popup.style.display = 'block';
  title.textContent = 'abdh';
  description.textContent = 'mhvf';
}

function goToNextRoom(roomId) {
    loadScene(roomId);
}

function onHotspotClick(e) {
  var id = e.id;
    console.log('onHotspotClick', id);
  if (id && id in scenes && id.includes('room')) {
    goToNextRoom(id);
  } else if (id && id.includes('item') && id.includes('view')) {
    renderProductInfoPopup(id);
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
