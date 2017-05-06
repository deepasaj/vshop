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
    maproom: {
        image: 'maproom.jpg',
        preview: 'maproom.jpg',
        hotspots: {
            room1: {
                pitch: 60,
                yaw: -70,
                radius: 0.15,
                distance: 1,
                hidden: true
            },
            room2: {
                pitch: -18,
                yaw: 215.5,
                radius: 0.15,
                distance: 1,
                hidden: true
            },
            room3: {
                pitch: -30,
                yaw: -5,
                radius: 0.15,
                distance: 1,
                hidden: true
            }
        }
    },
    room1: {
        image: 'room1.jpg',
        preview: 'room1.jpg',
        hotspots: {
            maproom: {
                pitch: 10,
                yaw: 24,
                radius: 0.1,
                distance: 1,
                hidden: true
            },
            room2: {
                pitch: 0,
                yaw: 38,
                radius: 0.05,
                distance: 1
            },
            room3: {
                pitch: 0,
                yaw: 12,
                radius: 0.05,
                distance: 1
            },
            room4: {
                pitch: 0,
                yaw: -64,
                radius: 0.05,
                distance: 1
            },
            openCart: {
                pitch: 35,
                yaw: -74,
                radius: 0.18,
                distance: 1,
                hidden: true
            },
            room5: {
                pitch: 0,
                yaw: -90,
                radius: 0.05,
                distance: 1
            },
            room6: {
                pitch: 0,
                yaw: -167,
                radius: 0.05,
                distance: 1
            },
            room7: {
                pitch: 0,
                yaw: -245,
                radius: 0.05,
                distance: 1
            },
            item1_view: {
                pitch: 31,
                yaw: -300.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item1_cart: {
                pitch: 15,
                yaw: -297.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item2_view: {
                pitch: -5,
                yaw: -277.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item2_cart: {
                pitch: -5,
                yaw: -282.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item3_view: {
                pitch: -65,
                yaw: -252.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item3_cart: {
                pitch: -39,
                yaw: -260.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item4_view: {
                pitch: -104.5,
                yaw: -242.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item4_cart: {
                pitch: -112,
                yaw: -240.0,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item5_view: {
                pitch: -112,
                yaw: -217.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item5_cart: {
                pitch: -120,
                yaw: -223.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item6_view: {
                pitch: -81,
                yaw: -224.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item6_cart: {
                pitch: -81,
                yaw: -230.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item7_view: {
                pitch: -26,
                yaw: -297.8,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item7_cart: {
                pitch: -38,
                yaw: -302.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item8_view: {
                pitch: -75,
                yaw: -296.8,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item8_cart: {
                pitch: -65,
                yaw: -300.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item9_view: {
                pitch: -115,
                yaw: -285.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            },
            item9_cart: {
                pitch: -105,
                yaw: -295.5,
                radius: 0.03,
                distance: 1,
                hidden: true
            }
        }
    },
    gamification: {
        image: 'gamification_prompt.jpg',
        preview: 'gamification_prompt.jpg',
        hotspots:{
                room1: {
                    pitch:-28,
                    yaw: 0,
                    radius: 0.05,
                    distance: 1,
                    hidden: true
                },
                coupon: {
                    pitch:-20,
                    yaw: 0,
                    radius: 0.05,
                    distance: 1,
                    hidden: true
                }
            }
    },
    coupon: {
        image: 'hidden-coupon.jpg',
        preview: 'hidden-coupon.jpg',
        hotspots:{
            maproom: {
                pitch: 10,
                yaw: 24,
                radius: 0.1,
                distance: 1,
                hidden: true
            },
            treasure: {
                pitch: 35,
                yaw: -266.5,
                radius: 0.12,
                distance: 1,
                hidden: false
            }
        }
    },
    room2: {
        image: 'room2.jpg',
        preview: 'room2.jpg',
        hotspots: {
            maproom: {
                pitch: 16,
                yaw: 67,
                radius: 0.1,
                distance: 1,
                hidden: true
            },
            item21_view: {
          		pitch: 926.0346967722435,
          		yaw: 170.32811155959598,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item21_cart: {
          		pitch: 380.57032193446594,
          		yaw: 370.394410795264,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item22_view: {
          		pitch: 15.503805682112898,
          		yaw: 33.49389655328241,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item22_cart: {
          		pitch: 377.53815504911745,
          		yaw: 27.276324474448757,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item23_view: {
          		pitch: 397.97873323064834,
          		yaw: 45.67565783052987,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item23_cart: {
          		pitch: 29.547227828974343,
          		yaw: 409.4256758818928,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item24_view: {
          		pitch: 366.85373497991986,
          		yaw: 370.9853380836098,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item24_cart: {
          		pitch: 362.8653527246728,
          		yaw: 373.1526321611386,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item25_view: {
          		pitch: 353.18324021642775,
          		yaw: 394.8612460882981,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item25_cart: {
          		pitch: 536.6333517411153,
          		yaw: 152.90271227039375,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item26_view: {
          		pitch: 372.3675431904453,
          		yaw: 51.53926050260361,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item26_cart: {
          		pitch: 180.0401938390246,
          		yaw: 128.72025401560222,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item27_view: {
          		pitch: 349.65572051281424,
          		yaw: 370.7484507707277,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item27_cart: {
          		pitch: 703.9114621125573,
          		yaw: 11.369444938169636,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item28_view: {
          		pitch: 695.906719521885,
          		yaw: 393.197130129628,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item28_cart: {
          		pitch: 873.6356928889682,
          		yaw: 156.27589617732121,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item29_view: {
          		pitch: 342.7649552702492,
          		yaw: 412.9274397759832,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item29_cart: {
          		pitch: 515.7094975311443,
          		yaw: 129.3439989938155,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item210_view: {
          		pitch: 870.3543765545687,
          		yaw: 169.92808876999388,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item210_cart: {
          		pitch: 684.4409157890223,
          		yaw: 11.59048896831905,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item211_view: {
          		pitch: 134.3053475995057,
          		yaw: 152.65314372010374,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item211_cart: {
          		pitch: 855.7297970322206,
          		yaw: 158.88606911687953,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item212_view: {
          		pitch: 138.2547928256381,
          		yaw: 136.6984489426152,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item212_cart: {
          		pitch: 311.90482939916365,
          		yaw: 399.8329945034395,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	}
        }
    },
    room3: {
        image: 'room3.jpg',
        preview: 'room3.jpg',
        hotspots: {
            maproom: {
                pitch: 10,
                yaw: 24,
                radius: 0.1,
                distance: 1,
                hidden: true
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
    loadScene("maproom");
}

function onModeChange(e) {
    console.log('onModeChange', e.mode);
}
var timeout;

function renderProductInfoPopup(inputTitle, inputPrice, showCurrency) {
    var iframe = document.getElementsByTagName('iframe')[0].contentDocument, popUpTimeOut;
    var popup = iframe.getElementsByClassName('dialog')[0];
    popup.style.visibility = 'visible';
    var title = iframe.getElementsByClassName('title')[0];
    var price = iframe.getElementsByClassName('message')[0];
    var actionButtons = iframe.getElementsByClassName('action_buttons')[0];
    actionButtons.style.visibility = showCurrency ? 'visible' : 'hidden';
    // get product info from db
    popup.style.display = 'block';
    title.textContent = inputTitle;
    price.textContent = showCurrency ? 'Rs.' + inputPrice + '/-' : inputPrice;
    if (!showCurrency && popup.style.visibility !== 'hidden') {
        timeout = setTimeout(function () {
            removeInfoPopup();
        }, 750);
    }
}

function renderCartOverlay(items){
    var iframe = document.getElementsByTagName('iframe')[0].contentDocument, popUpTimeOut;
    var popup = iframe.getElementsByClassName('cart-dialog')[0];
    var html = '<table class="table table-striped">';
    popup.style.visibility = 'visible';
    var title = iframe.getElementsByClassName('title')[1];
    var actionButtons = iframe.getElementsByClassName('action_buttons')[1];
    actionButtons.style.visibility =  'visible';
    // get product info from db
    popup.style.display = 'block';
    for(i=0; i<items.length;i++){
        html += '<tr><td>' + items[i].name + '</td>' + '<td>' + items[i].price + '</td></tr>'
    }
    html += '</table>';
    title.innerHTML = html;
    console.log(html);
}

function removeInfoPopup() {
    var iframe = document.getElementsByTagName('iframe')[0].contentDocument;
    var popup = iframe.getElementsByClassName('dialog')[0];
    popup.style.visibility = 'hidden';
    clearTimeout(timeout);
}

function goToNextRoom(roomId) {
    loadScene(roomId);
}

function addToCart(id) {
    var productId = id.split('item')[1].split('_cart')[0];
    $.ajax({
        url: "/api/cartitems",
        async: false,
        data: {"productId": productId},
        type: 'POST',
        dataType: 'json', // added data type
        success: function () {
            renderProductInfoPopup('Item added to cart', '', false);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}

function addCoupon(id) {
    $.ajax({
        url: "/api/cartcoupons",
        async: false,
        data: {"couponId": id},
        type: 'POST',
        dataType: 'json', // added data type
        success: function () {
            renderProductInfoPopup('You won this game and your coupon was added to cart', '', false);
        },
        error: function (jqXHR, textStatus, errorThrown) {
        }
    });
}

function viewCartDetails(){
    $.ajax({
        url: "/api/cartitems",
        type: 'GET',
        dataType: 'json', // added data type
        success: function (res) {
            renderCartOverlay(res);
        }
    });
}

function viewProductDetails(productId) {
    $.ajax({
        url: "/api/products/" + productId,
        type: 'GET',
        dataType: 'json', // added data type
        success: function (res) {
            renderProductInfoPopup(res.name, res.price, true);
        }
    });
}

function onHotspotClick(e) {
    var id = e.id, gamificationTimer;
    console.log('onHotspotClick', id);
    if(id && id === 'treasure'){
        addCoupon(id);
    }
    if(id && id === 'room3'){
        gamificationTimer = setTimeout(function(){loadScene('gamification')}, 10000)
    }
    if (id && id in scenes && (id.includes('room') || id.includes('coupon'))) {
        goToNextRoom(id);
    }
    else if(id && id === 'openCart'){
        viewCartDetails();
    }
    else if (id && id.includes('item') && id.includes('view')) {
        var productId = id.split('item')[1].split('_view')[0];
        viewProductDetails(productId);
    } else if (id && id.includes('item') && id.includes('cart')) {
        addToCart(id);
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
            distance: hotspot.distance,
            hidden: hotspot.hidden
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
