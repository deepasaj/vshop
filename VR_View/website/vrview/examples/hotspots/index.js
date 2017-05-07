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
    confirmation: {
    image: 'cart_confirmation.jpg',
        preview: 'cart_confirmation.jpg',
        hotspots: {
        room1: {
            pitch: 10,
                yaw: 24,
                radius: 0.1,
                distance: 1,
                hidden: false
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
            },
            item101_view: {
            	pitch: 123.3000495568215,
            	yaw: 386.74268422707837,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item101_cart: {
            	pitch: 671.6285436858266,
            	yaw: 148.0186515241694,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item102_view: {
            	pitch: 868.7269719700289,
            	yaw: 381.03019066262095,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item102_cart: {
            	pitch: 142.84274307783153,
            	yaw: 25.45649135410713,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item103_view: {
            	pitch: 491.9102182715196,
            	yaw: 8.003881597212512,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item103_cart: {
            	pitch: 318.1125510489865,
            	yaw: 171.00246174734184,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item104_view: {
            	pitch: 155.59457555410086,
            	yaw: 40.90470897085288,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item104_cart: {
            	pitch: 705.7832749804566,
            	yaw: 137.7316473619062,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item105_view: {
            	pitch: 898.4396333682071,
            	yaw: 384.5425042937536,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item105_cart: {
            	pitch: 900.4396333682071,
            	yaw: 390.5425042937536,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item106_view: {
            	pitch: 161.17119284198725,
            	yaw: 9.106678340540908,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item106_cart: {
            	pitch: 168.82136105564328,
            	yaw: 10.312958144142044,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item107_view: {
            	pitch: 557.5577609141287,
            	yaw: 401.3643997313802,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item107_cart: {
            	pitch: 747.0256899279266,
            	yaw: 140.46017269324693,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item108_view: {
            	pitch: 388.7497268118989,
            	yaw: 158.50817041544474,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item108_cart: {
            	pitch: 390.7497268118989,
            	yaw: 152.50817041544474,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item109_view: {
            	pitch: 910.7516417805577,
            	yaw: 9.566036741301104,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item109_cart: {
            	pitch: 561.4390465696802,
            	yaw: 370.45121863007,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item110_view: {
            	pitch: 232.00586315759915,
            	yaw: 391.7383349809488,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item110_cart: {
            	pitch: 238.00586315759915,
            	yaw: 386.7383349809488,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item111_cart: {
            	pitch: 243.09727124600613,
            	yaw: 17.821512756446737,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item112_cart: {
            	pitch: 48.25081980674349,
            	yaw: 174.26757012513553,
            	radius: 0.05,
            	distance: 1,
            	hidden: true
            },
            item112_view: {
            	pitch: 42.25081980674349,
            	yaw: 174.26757012513553,
            	radius: 0.05,
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
                pitch: 986.1783017141843,
                yaw: 430.23532284633114,
                radius: 0.12,
                distance: 1,
                hidden: false
            },
            item401_view: {
          		pitch: 605.8734954107325,
          		yaw: 141.78657216300405,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item401_cart: {
          		pitch: 783.1769164527564,
          		yaw: 44.04200569007719,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item402_view: {
          		pitch: 798.0154663827257,
          		yaw: 57.488157040026636,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item402_cart: {
          		pitch: 787.7040529466854,
          		yaw: 58.14473704679979,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item403_view: {
          		pitch: 97.0758284312119,
          		yaw: 403.711967595744,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item403_cart: {
          		pitch: 637.6595096469055,
          		yaw: 129.39487469840196,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item404_view: {
          		pitch: 753.0610922293013,
          		yaw: 420.01795985517145,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item404_cart: {
          		pitch: 736.3678767298871,
          		yaw: 422.8986586897345,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item405_view: {
          		pitch: 865.5541193311492,
          		yaw: 95.44513009314096,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item405_cart: {
          		pitch: 892.2988277094119,
          		yaw: 103.30967348018203,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item406_view: {
          		pitch: 832.6883222599499,
          		yaw: 432.8743648968581,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item406_cart: {
          		pitch: 850.6883222599499,
          		yaw: 438.8743648968581,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item407_view: {
          		pitch: 317.7555211302324,
          		yaw: 417.57810500216465,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item407_cart: {
          		pitch: 867.8404747954346,
          		yaw: 119.78399872777095,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item408_view: {
          		pitch: 279.8911410638375,
          		yaw: 420.87661331493837,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item408_cart: {
          		pitch: 830.2093232666793,
          		yaw: 120.41446343720827,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item409_view: {
          		pitch: 250.7400872662738,
          		yaw: 435.0862433539312,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item409_cart: {
          		pitch: 432.58931789093094,
          		yaw: 114.40090860701582,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item410_view: {
          		pitch: 112.65948262313623,
          		yaw: 137.85006168892505,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item410_cart: {
          		pitch: 469.6581289631083,
          		yaw: 143.60147620153703,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item411_view: {
          		pitch: 82.50017808150756,
          		yaw: 130.95733621699355,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item412_view: {
          		pitch: 270.1974075143057,
          		yaw: 30.91331540577403,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item412_cart: {
          		pitch: 262.5237588727159,
          		yaw: 38.606906750618506,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
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
            },
            item301_view: {
          		pitch: 67.0966657729104,
          		yaw: 397.7406315547744,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item301_cart: {
          		pitch: 421.477195692996,
          		yaw: 402.59880944521615,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item302_view: {
          		pitch: 978.9937099258636,
          		yaw: 120.0092438865779,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item302_cart: {
          		pitch: 787.4488787041864,
          		yaw: 55.96424356967009,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item303_view: {
          		pitch: 998.313437535573,
          		yaw: 138.24939653647994,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item303_cart: {
          		pitch: 998.313437535573,
          		yaw: 130.24939653647994,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item304_view: {
          		pitch: 752.1585151888726,
          		yaw: 420.7344428485785,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item304_cart: {
          		pitch: 556.8688229663608,
          		yaw: 118.94591897486248,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item305_view: {
          		pitch: 508.84334688141325,
          		yaw: 97.3984627478394,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item305_cart: {
          		pitch: 704.6533107633372,
          		yaw: 75.97666930793616,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item306_view: {
          		pitch: 650.1484378755736,
          		yaw: 106.86932908980441,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item306_cart: {
          		pitch: 668.1484378755736,
          		yaw: 100.86932908980441,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item307_view: {
          		pitch: 508.9138512801892,
          		yaw: 118.67820371578318,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item307_cart: {
          		pitch: 320.90799817002153,
          		yaw: 416.7165152058633,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item308_view: {
          		pitch: 100.23370513693999,
          		yaw: 122.11217014403587,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item308_cart: {
          		pitch: 290.609601105049,
          		yaw: 56.70378677616918,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item309_view: {
          		pitch: 66.94390433870878,
          		yaw: 105.86281961584518,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item309_cart: {
          		pitch: 72.79548452639561,
          		yaw: 114.34835897127164,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item310_view: {
          		pitch: 476.3976600792821,
          		yaw: 138.7466030708872,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item310_cart: {
          		pitch: 649.5881146453603,
          		yaw: 393.1381406558339,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item312_view: {
          		pitch: 81.97325852146831,
          		yaw: 134.45630013807977,
          		radius: 0.05,
          		distance: 1,
          		hidden: true
          	},
          	item312_cart: {
          		pitch: 623.68624694759,
          		yaw: 397.8048188422814,
          		radius: 0.05,
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
            loadScene('confirmation');
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
