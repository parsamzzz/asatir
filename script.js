TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "vfov": 180,
  "id": "panorama_306238C1_3A00_34F9_41A6_E26713A13967",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_306238C1_3A00_34F9_41A6_E26713A13967_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_306238C1_3A00_34F9_41A6_E26713A13967_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_306238C1_3A00_34F9_41A6_E26713A13967.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "id": "overlay_36AE0AFD_3A03_F489_41C2_5CC88437A441",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.38,
        "yaw": -136.48,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 69,
           "class": "ImageResourceLevel",
           "width": 75,
           "url": "media/panorama_306238C1_3A00_34F9_41A6_E26713A13967_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -8.06
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -136.48,
        "hfov": 9.38,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 139,
           "class": "ImageResourceLevel",
           "width": 151,
           "url": "media/panorama_306238C1_3A00_34F9_41A6_E26713A13967_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -8.06
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0, this.camera_367B24FE_3A10_5D49_41C5_ADD28B4523A3); this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "id": "overlay_37DDC2C1_3A00_34F9_4199_557E08BEF53C",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.57,
        "yaw": 65.99,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 74,
           "class": "ImageResourceLevel",
           "width": 80,
           "url": "media/panorama_306238C1_3A00_34F9_41A6_E26713A13967_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -31.26
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 65.99,
        "hfov": 8.57,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 148,
           "class": "ImageResourceLevel",
           "width": 160,
           "url": "media/panorama_306238C1_3A00_34F9_41A6_E26713A13967_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -31.26
       }
      ]
     }
    ]
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "vfov": 180,
     "id": "panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2880,
          "class": "ImageResourceLevel",
          "width": 5760,
          "url": "media/panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_306238C1_3A00_34F9_41A6_E26713A13967, this.camera_365484E6_3A10_5D46_4187_F87F60B42D56); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "id": "overlay_3413D418_3A00_1397_41BD_ED4E194B6E79",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 9.3,
           "yaw": -77.46,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 72,
              "class": "ImageResourceLevel",
              "width": 82,
              "url": "media/panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -25.35
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -77.46,
           "hfov": 9.3,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 144,
              "class": "ImageResourceLevel",
              "width": 164,
              "url": "media/panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -25.35
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F, this.camera_362E14DE_3A10_5D49_4170_53742277DEAF); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "id": "overlay_346A1082_3A00_137B_41C9_7E98A545DB66",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.83,
           "yaw": 140.12,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 83,
              "class": "ImageResourceLevel",
              "width": 82,
              "url": "media/panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -30.91
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 140.12,
           "hfov": 8.83,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 166,
              "class": "ImageResourceLevel",
              "width": 164,
              "url": "media/panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -30.91
          }
         ]
        }
       ]
      }
     ],
     "pitch": 0,
     "hfovMax": 120,
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "class": "Panorama",
        "vfov": 180,
        "id": "panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2880,
             "class": "ImageResourceLevel",
             "width": 5760,
             "url": "media/panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F_hq.jpeg"
            },
            {
             "height": 2001,
             "class": "ImageResourceLevel",
             "width": 4002,
             "url": "media/panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959, this.camera_3689151C_3A10_5CC9_41C7_8401A3B564AB); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "id": "overlay_3586531E_3A00_158B_41C6_85C10EC275EE",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.78,
              "yaw": 2.23,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 83,
                 "class": "ImageResourceLevel",
                 "width": 82,
                 "url": "media/panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -31.46
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 2.23,
              "hfov": 8.78,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 166,
                 "class": "ImageResourceLevel",
                 "width": 164,
                 "url": "media/panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -31.46
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0, this.camera_36B8A524_3A10_5CF9_41C8_A2B7EC08E3C6); this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "id": "overlay_2AA21AFD_3A00_3489_41BE_3AE1B39FE0F1",
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 8.78,
              "yaw": -170.12,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 76,
                 "class": "ImageResourceLevel",
                 "width": 82,
                 "url": "media/panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -31.46
             }
            ],
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -170.12,
              "hfov": 8.78,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 152,
                 "class": "ImageResourceLevel",
                 "width": 164,
                 "url": "media/panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -31.46
             }
            ]
           }
          ]
         }
        ],
        "pitch": 0,
        "hfovMax": 120,
        "hfov": 360,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "class": "Panorama",
           "vfov": 180,
           "id": "panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959",
           "frames": [
            {
             "thumbnailUrl": "media/panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2880,
                "class": "ImageResourceLevel",
                "width": 5760,
                "url": "media/panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959_hq.jpeg"
               },
               {
                "height": 2001,
                "class": "ImageResourceLevel",
                "width": 4002,
                "url": "media/panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F, this.camera_3664A505_3A10_5CBB_4185_262B93927FE8); this.mainPlayList.set('selectedIndex', 1)"
                }
               ],
               "id": "overlay_34E7ED66_3A00_2DBB_41AC_F48C570438A9",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 8.86,
                 "yaw": -55.29,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 74,
                    "class": "ImageResourceLevel",
                    "width": 82,
                    "url": "media/panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -30.57
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -55.29,
                 "hfov": 8.86,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 148,
                    "class": "ImageResourceLevel",
                    "width": 164,
                    "url": "media/panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -30.57
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000",
                 "click": "this.startPanoramaWithCamera(this.panorama_33D14FF3_3A00_EC99_41C0_DF7EFD3F7754, this.camera_3693750D_3A10_5CCB_41CA_47654F19DF9F); this.mainPlayList.set('selectedIndex', 6)"
                }
               ],
               "id": "overlay_35F42041_3A00_13F9_41C9_64DEC902E1B4",
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 8.11,
                 "yaw": 100.59,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 83,
                    "class": "ImageResourceLevel",
                    "width": 82,
                    "url": "media/panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -38.05
                }
               ],
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 100.59,
                 "hfov": 8.11,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 166,
                    "class": "ImageResourceLevel",
                    "width": 164,
                    "url": "media/panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -38.05
                }
               ]
              }
             ]
            }
           ],
           "pitch": 0,
           "hfovMax": 120,
           "hfov": 360,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F",
             "yaw": -55.29,
             "distance": 1,
             "backwardYaw": 2.23
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "class": "Panorama",
              "vfov": 180,
              "id": "panorama_33D14FF3_3A00_EC99_41C0_DF7EFD3F7754",
              "frames": [
               {
                "thumbnailUrl": "media/panorama_33D14FF3_3A00_EC99_41C0_DF7EFD3F7754_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2880,
                   "class": "ImageResourceLevel",
                   "width": 5760,
                   "url": "media/panorama_33D14FF3_3A00_EC99_41C0_DF7EFD3F7754_hq.jpeg"
                  },
                  {
                   "height": 2001,
                   "class": "ImageResourceLevel",
                   "width": 4002,
                   "url": "media/panorama_33D14FF3_3A00_EC99_41C0_DF7EFD3F7754.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000",
                    "click": "this.startPanoramaWithCamera(this.panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959, this.camera_3640B4EE_3A10_5D49_41BA_CBF64DBB6E58); this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "id": "overlay_3517379B_3A00_3C89_41BA_DB3AB0BA6710",
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 8.26,
                    "yaw": -136.21,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 83,
                       "class": "ImageResourceLevel",
                       "width": 82,
                       "url": "media/panorama_33D14FF3_3A00_EC99_41C0_DF7EFD3F7754_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -36.68
                   }
                  ],
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -136.21,
                    "hfov": 8.26,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 166,
                       "class": "ImageResourceLevel",
                       "width": 164,
                       "url": "media/panorama_33D14FF3_3A00_EC99_41C0_DF7EFD3F7754_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -36.68
                   }
                  ]
                 }
                ]
               }
              ],
              "pitch": 0,
              "hfovMax": 120,
              "hfov": 360,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959",
                "yaw": -136.21,
                "distance": 1,
                "backwardYaw": 100.59
               }
              ],
              "partial": false,
              "label": "5",
              "thumbnailUrl": "media/panorama_33D14FF3_3A00_EC99_41C0_DF7EFD3F7754_t.jpg"
             },
             "yaw": 100.59,
             "distance": 1,
             "backwardYaw": -136.21
            }
           ],
           "partial": false,
           "label": "4",
           "thumbnailUrl": "media/panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959_t.jpg"
          },
          "yaw": 2.23,
          "distance": 1,
          "backwardYaw": -55.29
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0",
          "yaw": -170.12,
          "distance": 1,
          "backwardYaw": 140.12
         }
        ],
        "partial": false,
        "label": "3",
        "thumbnailUrl": "media/panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F_t.jpg"
       },
       "yaw": 140.12,
       "distance": 1,
       "backwardYaw": -170.12
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_306238C1_3A00_34F9_41A6_E26713A13967",
       "yaw": -77.46,
       "distance": 1,
       "backwardYaw": 65.99
      }
     ],
     "partial": false,
     "label": "2",
     "thumbnailUrl": "media/panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0_t.jpg"
    },
    "yaw": 65.99,
    "distance": 1,
    "backwardYaw": -77.46
   }
  ],
  "partial": false,
  "label": "1",
  "thumbnailUrl": "media/panorama_306238C1_3A00_34F9_41A6_E26713A13967_t.jpg"
 },
 {
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "buttonMoveLeft": {
   "class": "IconButton",
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "borderRadius": 0,
   "mode": "push",
   "width": 40,
   "paddingTop": 0,
   "height": 40,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036_rollover.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036_pressed.png",
   "minHeight": 0,
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036.png",
   "id": "IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "horizontalAlign": "center",
   "data": {
    "name": "Button8707"
   },
   "borderSize": 0
  },
  "viewerArea": "this.MainViewer",
  "buttonPlayLeft": {
   "class": "IconButton",
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "borderRadius": 0,
   "mode": "push",
   "width": 40,
   "paddingTop": 0,
   "height": 40,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D_rollover.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D_pressed.png",
   "minHeight": 0,
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D.png",
   "id": "IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "horizontalAlign": "center",
   "data": {
    "name": "Button8706"
   },
   "borderSize": 0
  },
  "preloadEnabled": false,
  "buttonMoveDown": {
   "class": "IconButton",
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "borderRadius": 0,
   "mode": "push",
   "width": 40,
   "paddingTop": 0,
   "height": 40,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4_rollover.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4_pressed.png",
   "minHeight": 0,
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4.png",
   "id": "IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "horizontalAlign": "center",
   "data": {
    "name": "Button8711"
   },
   "borderSize": 0
  },
  "displayPlaybackBar": true,
  "buttonPlayRight": {
   "class": "IconButton",
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "borderRadius": 0,
   "mode": "push",
   "width": 40,
   "paddingTop": 0,
   "height": 40,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F_rollover.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F_pressed.png",
   "minHeight": 0,
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F.png",
   "id": "IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "horizontalAlign": "center",
   "data": {
    "name": "Button8713"
   },
   "borderSize": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveRight": {
   "class": "IconButton",
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "borderRadius": 0,
   "mode": "push",
   "width": 40,
   "paddingTop": 0,
   "height": 40,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508_rollover.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508_pressed.png",
   "minHeight": 0,
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508.png",
   "id": "IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "horizontalAlign": "center",
   "data": {
    "name": "Button8712"
   },
   "borderSize": 0
  },
  "buttonMoveUp": {
   "class": "IconButton",
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "borderRadius": 0,
   "mode": "push",
   "width": 40,
   "paddingTop": 0,
   "height": 40,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0_rollover.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0_pressed.png",
   "minHeight": 0,
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0.png",
   "id": "IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "horizontalAlign": "center",
   "data": {
    "name": "Button8709"
   },
   "borderSize": 0
  },
  "touchControlMode": "drag_rotation",
  "buttonRestart": {
   "class": "IconButton",
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "borderRadius": 0,
   "mode": "push",
   "width": 40,
   "paddingTop": 0,
   "height": 40,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E_rollover.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E_pressed.png",
   "minHeight": 0,
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E.png",
   "id": "IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "horizontalAlign": "center",
   "data": {
    "name": "Button8705"
   },
   "borderSize": 0
  },
  "buttonZoomOut": {
   "class": "IconButton",
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "borderRadius": 0,
   "mode": "push",
   "width": 40,
   "paddingTop": 0,
   "height": 40,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB_rollover.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB_pressed.png",
   "minHeight": 0,
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB.png",
   "id": "IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "horizontalAlign": "center",
   "data": {
    "name": "Button8704"
   },
   "borderSize": 0
  },
  "buttonZoomIn": {
   "class": "IconButton",
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "borderRadius": 0,
   "mode": "push",
   "width": 40,
   "paddingTop": 0,
   "height": 40,
   "rollOverIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84_rollover.png",
   "minWidth": 0,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84_pressed.png",
   "minHeight": 0,
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84.png",
   "id": "IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "horizontalAlign": "center",
   "data": {
    "name": "Button8715"
   },
   "borderSize": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPause": {
   "class": "IconButton",
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "paddingRight": 0,
   "borderRadius": 0,
   "mode": "toggle",
   "width": 40,
   "paddingTop": 0,
   "height": 40,
   "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2_pressed.png",
   "minWidth": 0,
   "minHeight": 0,
   "shadow": false,
   "cursor": "hand",
   "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2.png",
   "id": "IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2",
   "backgroundOpacity": 0,
   "paddingBottom": 0,
   "transparencyActive": true,
   "horizontalAlign": "center",
   "data": {
    "name": "Button8710"
   },
   "borderSize": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_306238C1_3A00_34F9_41A6_E26713A13967_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 31.1,
   "pitch": -2.84
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "Panorama",
  "vfov": 180,
  "id": "panorama_33CE1BAA_3A00_148B_41A9_BA28F5CBE68C",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_33CE1BAA_3A00_148B_41A9_BA28F5CBE68C_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2880,
       "class": "ImageResourceLevel",
       "width": 5760,
       "url": "media/panorama_33CE1BAA_3A00_148B_41A9_BA28F5CBE68C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_33CE1BAA_3A00_148B_41A9_BA28F5CBE68C.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_33C8B3A8_3A00_F4B7_41CC_76EEC64644D6, this.camera_364C04F6_3A10_5D59_4187_EC5B3C070D1E); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "id": "overlay_353178D7_3A00_1499_41C6_C07B39E59486",
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 8.64,
        "yaw": -20.42,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 65,
           "class": "ImageResourceLevel",
           "width": 75,
           "url": "media/panorama_33CE1BAA_3A00_148B_41A9_BA28F5CBE68C_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -24.19
       }
      ],
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -20.42,
        "hfov": 8.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 130,
           "class": "ImageResourceLevel",
           "width": 151,
           "url": "media/panorama_33CE1BAA_3A00_148B_41A9_BA28F5CBE68C_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -24.19
       }
      ]
     }
    ]
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "hfov": 360,
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "class": "Panorama",
     "vfov": 180,
     "id": "panorama_33C8B3A8_3A00_F4B7_41CC_76EEC64644D6",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_33C8B3A8_3A00_F4B7_41CC_76EEC64644D6_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2880,
          "class": "ImageResourceLevel",
          "width": 5760,
          "url": "media/panorama_33C8B3A8_3A00_F4B7_41CC_76EEC64644D6_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_33C8B3A8_3A00_F4B7_41CC_76EEC64644D6.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "id": "overlay_34612A32_3A00_779B_41A6_0464A2E9F2B2",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 7.82,
           "yaw": -145,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 58,
              "class": "ImageResourceLevel",
              "width": 64,
              "url": "media/panorama_33C8B3A8_3A00_F4B7_41CC_76EEC64644D6_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -15.13
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -145,
           "hfov": 7.82,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 117,
              "class": "ImageResourceLevel",
              "width": 129,
              "url": "media/panorama_33C8B3A8_3A00_F4B7_41CC_76EEC64644D6_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -15.13
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_33CE1BAA_3A00_148B_41A9_BA28F5CBE68C, this.camera_369CB515_3A10_5CDB_41A3_0588641C1775); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "id": "overlay_34E5563F_3A00_1F89_41C5_99126CD8408A",
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 8.17,
           "yaw": -103.54,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 61,
              "class": "ImageResourceLevel",
              "width": 66,
              "url": "media/panorama_33C8B3A8_3A00_F4B7_41CC_76EEC64644D6_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -12.66
          }
         ],
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -103.54,
           "hfov": 8.17,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 122,
              "class": "ImageResourceLevel",
              "width": 133,
              "url": "media/panorama_33C8B3A8_3A00_F4B7_41CC_76EEC64644D6_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -12.66
          }
         ]
        }
       ]
      }
     ],
     "pitch": 0,
     "hfovMax": 120,
     "hfov": 360,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_33CE1BAA_3A00_148B_41A9_BA28F5CBE68C",
       "yaw": -103.54,
       "distance": 1,
       "backwardYaw": -20.42
      }
     ],
     "partial": false,
     "label": "6",
     "thumbnailUrl": "media/panorama_33C8B3A8_3A00_F4B7_41CC_76EEC64644D6_t.jpg"
    },
    "yaw": -20.42,
    "distance": 1,
    "backwardYaw": -103.54
   }
  ],
  "partial": false,
  "label": "7",
  "thumbnailUrl": "media/panorama_33CE1BAA_3A00_148B_41A9_BA28F5CBE68C_t.jpg"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_33CE1BAA_3A00_148B_41A9_BA28F5CBE68C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -46.33,
   "pitch": -8.3
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_33C8B3A8_3A00_F4B7_41CC_76EEC64644D6",
 {
  "class": "PanoramaCamera",
  "id": "panorama_33C8B3A8_3A00_F4B7_41CC_76EEC64644D6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -123.01,
   "pitch": -1.65
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959",
 {
  "class": "PanoramaCamera",
  "id": "panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 59.06,
   "pitch": -4.66
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0",
 {
  "class": "PanoramaCamera",
  "id": "panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 24.62,
   "pitch": -4.38
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 "this.panorama_33D14FF3_3A00_EC99_41C0_DF7EFD3F7754",
 {
  "class": "PanoramaCamera",
  "id": "panorama_33D14FF3_3A00_EC99_41C0_DF7EFD3F7754_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 118.88,
   "pitch": -2.58
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_306238C1_3A00_34F9_41A6_E26713A13967",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_306238C1_3A00_34F9_41A6_E26713A13967_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_33CFA79E_3A00_1C8B_41C8_9E313E117C6F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_33CE1BAA_3A00_148B_41A9_BA28F5CBE68C",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_33CE1BAA_3A00_148B_41A9_BA28F5CBE68C_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_33C8B3A8_3A00_F4B7_41CC_76EEC64644D6",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_33C8B3A8_3A00_F4B7_41CC_76EEC64644D6_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_33F147DF_3A00_FC89_41CA_D76EDE28C959_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_33D06BEA_3A00_F48B_41B3_78D284401CC0_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_33D14FF3_3A00_EC99_41C0_DF7EFD3F7754",
    "camera": "this.panorama_33D14FF3_3A00_EC99_41C0_DF7EFD3F7754_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)"
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_362E14DE_3A10_5D49_4170_53742277DEAF",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.88,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_365484E6_3A10_5D46_4187_F87F60B42D56",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -114.01,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_3640B4EE_3A10_5D49_41BA_CBF64DBB6E58",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -79.41,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_364C04F6_3A10_5D59_4187_EC5B3C070D1E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 76.46,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_367B24FE_3A10_5D49_41C5_ADD28B4523A3",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 102.54,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_3664A505_3A10_5CBB_4185_262B93927FE8",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.77,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_3693750D_3A10_5CCB_41CA_47654F19DF9F",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 43.79,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_369CB515_3A10_5CDB_41A3_0588641C1775",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 159.58,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_3689151C_3A10_5CC9_41C7_8401A3B564AB",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 124.71,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_36B8A524_3A10_5CF9_41C8_A2B7EC08E3C6",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -39.88,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "linear"
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 7.96,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10
 }
], "children": [
 {
  "class": "ViewerArea",
  "borderSize": 0,
  "toolTipFontFamily": "Arial",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 3,
  "toolTipShadowOpacity": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "progressLeft": 10,
  "paddingRight": 0,
  "playbackBarHeadBorderRadius": 0,
  "toolTipBorderSize": 1,
  "progressBottom": 1,
  "progressRight": 10,
  "progressBarBorderSize": 0,
  "toolTipOpacity": 1,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "progressHeight": 20,
  "playbackBarHeadBorderColor": "#000000",
  "minWidth": 100,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "shadow": false,
  "toolTipPaddingRight": 6,
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "playbackBarBorderSize": 2,
  "transitionMode": "blending",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarProgressOpacity": 1,
  "progressBarOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "paddingBottom": 0,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBorderColor": "#AAAAAA",
  "transitionDuration": 500,
  "toolTipShadowVerticalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipTextShadowColor": "#000000",
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "paddingLeft": 0,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipShadowHorizontalLength": 0,
  "playbackBarBorderRadius": 4,
  "width": "100%",
  "playbackBarHeadShadowOpacity": 0.7,
  "borderRadius": 0,
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "height": "100%",
  "progressBarBorderRadius": 4,
  "playbackBarHeight": 20,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadHeight": 30,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarLeft": 0,
  "playbackBarProgressBorderSize": 0,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "toolTipBorderColor": "#767676",
  "toolTipDisplayTime": 600,
  "progressBorderSize": 2,
  "top": 0,
  "toolTipShadowColor": "#333333",
  "progressBackgroundOpacity": 1,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBorderColor": "#000000",
  "minHeight": 50,
  "toolTipFontSize": 12,
  "playbackBarOpacity": 1,
  "id": "MainViewer",
  "toolTipPaddingTop": 4,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadWidth": 6,
  "progressOpacity": 1,
  "playbackBarHeadBorderSize": 0,
  "left": 0,
  "playbackBarBottom": 10,
  "progressBorderRadius": 4,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBorderColor": "#AAAAAA",
  "toolTipFontWeight": "normal",
  "playbackBarRight": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0
 },
 {
  "class": "Container",
  "paddingLeft": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "verticalAlign": "middle",
  "paddingRight": 0,
  "borderRadius": 0,
  "width": "100%",
  "paddingTop": 0,
  "gap": 10,
  "height": 142,
  "layout": "horizontal",
  "scrollBarWidth": 10,
  "minWidth": 1,
  "shadow": false,
  "minHeight": 1,
  "scrollBarMargin": 2,
  "bottom": "0%",
  "backgroundOpacity": 0,
  "paddingBottom": 0,
  "creationPolicy": "delayed",
  "left": "0%",
  "horizontalAlign": "center",
  "data": {
   "name": "Container44746"
  },
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "class": "Container",
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "verticalAlign": "middle",
    "paddingRight": 0,
    "borderRadius": 0,
    "width": 392,
    "paddingTop": 0,
    "gap": 4,
    "layout": "horizontal",
    "scrollBarWidth": 10,
    "height": "100%",
    "minWidth": 392,
    "shadow": false,
    "minHeight": 20,
    "scrollBarMargin": 2,
    "id": "Container_52D2AE7F_5F01_65BC_4192_E5EA29912157",
    "backgroundOpacity": 0,
    "paddingBottom": 0,
    "creationPolicy": "delayed",
    "scrollBarOpacity": 0.5,
    "horizontalAlign": "center",
    "data": {
     "name": "Container8703"
    },
    "children": [
     "this.IconButton_52D2AE7E_5F01_65BC_41B2_1643EF9CD4CB",
     "this.IconButton_52D2AE7E_5F01_65BC_41D5_F0DD57A13E9E",
     "this.IconButton_52D2AE7E_5F01_65BC_41BD_FF5C3FFC5E7D",
     "this.IconButton_52D2AE7E_5F01_65BC_41D1_D21E9D38C036",
     {
      "class": "Container",
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "borderRadius": 0,
      "width": 40,
      "paddingTop": 0,
      "gap": 4,
      "layout": "vertical",
      "scrollBarWidth": 10,
      "height": "100%",
      "minWidth": 20,
      "shadow": false,
      "minHeight": 20,
      "scrollBarMargin": 2,
      "id": "Container_52D2AE7E_5F01_65BC_41AC_A51A5F5534C5",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "creationPolicy": "delayed",
      "scrollBarOpacity": 0.5,
      "horizontalAlign": "center",
      "data": {
       "name": "Container8708"
      },
      "children": [
       "this.IconButton_52D2AE7E_5F01_65BC_41C0_0D9AC1FD02F0",
       "this.IconButton_52D2AE7E_5F01_65BC_41D2_983083226CD2",
       "this.IconButton_52D2AE7E_5F01_65BC_4189_6A3B617D11B4"
      ],
      "scrollBarVisible": "rollOver",
      "borderSize": 0,
      "overflow": "hidden"
     },
     "this.IconButton_52D2AE7E_5F01_65BC_41CE_DD2209EF2508",
     "this.IconButton_52D2AE7E_5F01_65BC_41B6_407705DA163F",
     {
      "class": "IconButton",
      "paddingLeft": 0,
      "verticalAlign": "middle",
      "paddingRight": 0,
      "borderRadius": 0,
      "mode": "toggle",
      "width": 40,
      "paddingTop": 0,
      "height": 40,
      "pressedIconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E_pressed.png",
      "minWidth": 0,
      "minHeight": 0,
      "shadow": false,
      "cursor": "hand",
      "iconURL": "skin/IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E.png",
      "id": "IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E",
      "backgroundOpacity": 0,
      "paddingBottom": 0,
      "transparencyActive": true,
      "horizontalAlign": "center",
      "data": {
       "name": "Button8714"
      },
      "borderSize": 0
     },
     "this.IconButton_52D2AE7E_5F01_65BC_41D3_A0DC49375B84"
    ],
    "scrollBarVisible": "rollOver",
    "borderSize": 0,
    "overflow": "hidden"
   }
  ],
  "scrollBarVisible": "rollOver",
  "borderSize": 0,
  "overflow": "scroll"
 }
], 
 "start": "this.set('mute', true); this.mainPlayList.set('selectedIndex', 0)",
 "class": "Player",
 "paddingLeft": 0,
 "mouseWheelEnabled": true,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "verticalAlign": "top",
 "vrPolyfillScale": 0.5,
 "borderRadius": 0,
 "width": "100%",
 "paddingRight": 0,
 "gap": 10,
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_52D2AE7E_5F01_65BC_4189_0A1A561B3A3E",
 "mobileMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "height": "100%",
 "minWidth": 20,
 "layout": "absolute",
 "minHeight": 20,
 "shadow": false,
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "scripts": {
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getKey": function(key){  return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "existsKey": function(key){  return key in window; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); }
 },
 "backgroundPreloadEnabled": true,
 "creationPolicy": "delayed",
 "scrollBarOpacity": 0.5,
 "horizontalAlign": "left",
 "data": {
  "name": "Player43899"
 },
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "overflow": "visible"
})