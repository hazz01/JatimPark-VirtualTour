(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "label": "IMG_20241105_111635_00_055",
 "hfovMin": "135%",
 "id": "panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999",
 "adjacentPanoramas": [
  {
   "yaw": 160.03,
   "class": "AdjacentPanorama",
   "backwardYaw": -104.13,
   "panorama": "this.panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_6DF4403D_7D31_2C0B_41CD_E9A66F3E030F"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_63AC179E_7D73_3409_41D9_180EFA72AA46",
 "initialPosition": {
  "yaw": -136.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_62221847_7D73_3C06_41BE_D1ACBE36076B",
 "initialPosition": {
  "yaw": 34.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_62321836_7D73_3C19_41DE_288BED19353D",
 "initialPosition": {
  "yaw": -19.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_604D28E2_7D73_3C39_41CD_66B0F3DA6C1E",
 "initialPosition": {
  "yaw": 162.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_6385F779_7D73_340A_4193_86A8817807FF",
 "initialPosition": {
  "yaw": -174.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "label": "IMG_20241105_112226_00_058",
 "hfovMin": "135%",
 "id": "panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2",
 "adjacentPanoramas": [
  {
   "yaw": 142.94,
   "class": "AdjacentPanorama",
   "backwardYaw": 43.96,
   "panorama": "this.panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF",
   "distance": 1
  },
  {
   "yaw": 8.04,
   "class": "AdjacentPanorama",
   "backwardYaw": -63.68,
   "panorama": "this.panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_6CECF7FF_7D33_7407_41CE_7788736CB5A1",
  "this.overlay_69462E73_7D33_D41F_41DA_F3B51A77613F"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_62103814_7D73_3C19_41D6_82297E6051C0",
 "initialPosition": {
  "yaw": 72.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_638C9765_7D73_343B_41D5_28E376C22ED4",
 "initialPosition": {
  "yaw": 170.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "label": "IMG_20241105_112321_00_059",
 "hfovMin": "135%",
 "id": "panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E",
 "adjacentPanoramas": [
  {
   "yaw": -63.68,
   "class": "AdjacentPanorama",
   "backwardYaw": 8.04,
   "panorama": "this.panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2",
   "distance": 1
  },
  {
   "yaw": -0.13,
   "class": "AdjacentPanorama",
   "backwardYaw": -144.45,
   "panorama": "this.panorama_76953EF0_7D31_3419_41CD_388D47C2A52F",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_6CE40F9A_7D33_3409_41D4_88DC3FA6E327",
  "this.overlay_6C05C34A_7D31_EC09_41D7_CD4B82AF0190"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_62601801_7D73_3BFB_41C1_BC7DCF6EB36F",
 "initialPosition": {
  "yaw": 176.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "label": "IMG_20241105_112851_00_066",
 "hfovMin": "135%",
 "id": "panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE",
 "adjacentPanoramas": [
  {
   "yaw": 161.54,
   "class": "AdjacentPanorama",
   "backwardYaw": -9.55,
   "panorama": "this.panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD",
   "distance": 1
  },
  {
   "yaw": 0.75,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.54,
   "panorama": "this.panorama_76947E07_7D30_D407_41D2_A39FEC03557C",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_6C4AC92E_7D31_5C09_41DA_215EF46D1E11",
  "this.overlay_6F48F873_7D4F_DC1E_41D6_A63848D7278C"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_63B94789_7D73_340B_41AE_9D88F7379748",
 "initialPosition": {
  "yaw": 30.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_6286F87F_7D73_3C07_41DD_BD3E32C61E37",
 "initialPosition": {
  "yaw": 9.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "label": "IMG_20241105_112733_00_064",
 "hfovMin": "135%",
 "id": "panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103",
 "adjacentPanoramas": [
  {
   "yaw": 10.05,
   "class": "AdjacentPanorama",
   "backwardYaw": -171.96,
   "panorama": "this.panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD",
   "distance": 1
  },
  {
   "yaw": -149.6,
   "class": "AdjacentPanorama",
   "backwardYaw": -9.55,
   "panorama": "this.panorama_7687D326_7D30_EC39_41D5_464E67BF99D3",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_6F3D4F3C_7D31_540A_41C4_8406193EED30",
  "this.overlay_6CB65C13_7D4F_541F_41D0_E826E8F1BE3A"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_62E6886B_7D73_3C0E_41C2_D37D669580C4",
 "initialPosition": {
  "yaw": -171.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "label": "IMG_20241105_112802_00_065",
 "hfovMin": "135%",
 "id": "panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD",
 "adjacentPanoramas": [
  {
   "yaw": -171.96,
   "class": "AdjacentPanorama",
   "backwardYaw": 10.05,
   "panorama": "this.panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103",
   "distance": 1
  },
  {
   "yaw": -9.55,
   "class": "AdjacentPanorama",
   "backwardYaw": 161.54,
   "panorama": "this.panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_6C463E9A_7D31_7409_41DE_15F89EAA6A07",
  "this.overlay_6F7927EB_7D4F_540E_41D8_DD7C7E8C5EAC"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "media": "this.panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_76953EF0_7D31_3419_41CD_388D47C2A52F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7685256A_7D30_D409_41CC_3DACC5E9A426",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7687D326_7D30_EC39_41D5_464E67BF99D3",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_76947E07_7D30_D407_41D2_A39FEC03557C",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_76947E07_7D30_D407_41D2_A39FEC03557C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_6076890C_7D73_3C09_41DA_423F2DF7C25B",
 "initialPosition": {
  "yaw": -159.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_626EB7ED_7D73_340B_41DA_CB1F21299D3D",
 "initialPosition": {
  "yaw": 43.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "label": "IMG_20241105_112124_00_057",
 "hfovMin": "135%",
 "id": "panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF",
 "adjacentPanoramas": [
  {
   "yaw": 43.96,
   "class": "AdjacentPanorama",
   "backwardYaw": 142.94,
   "panorama": "this.panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2",
   "distance": 1
  },
  {
   "yaw": -145.08,
   "class": "AdjacentPanorama",
   "backwardYaw": 20.85,
   "panorama": "this.panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_6C01E754_7D30_D419_41C6_EE0DB1244ACD",
  "this.overlay_6DA75842_7D30_FC79_41C5_43D048D9C0AF"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "hfovMax": 130,
 "label": "IMG_20241105_112711_00_063",
 "hfovMin": "135%",
 "id": "panorama_7687D326_7D30_EC39_41D5_464E67BF99D3",
 "adjacentPanoramas": [
  {
   "yaw": -170.7,
   "class": "AdjacentPanorama",
   "backwardYaw": 5.9,
   "panorama": "this.panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F",
   "distance": 1
  },
  {
   "yaw": -9.55,
   "class": "AdjacentPanorama",
   "backwardYaw": -149.6,
   "panorama": "this.panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_6CE77213_7D31_EC1F_41A9_5F3C4DC8C814",
  "this.overlay_6FDB47EA_7D30_D409_41B4_B6CC925B56AE"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "hfovMax": 130,
 "label": "IMG_20241105_111909_00_054",
 "hfovMin": "135%",
 "id": "panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6",
 "adjacentPanoramas": [
  {
   "yaw": -104.13,
   "class": "AdjacentPanorama",
   "backwardYaw": 160.03,
   "panorama": "this.panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999",
   "distance": 1
  },
  {
   "yaw": 20.85,
   "class": "AdjacentPanorama",
   "backwardYaw": -145.08,
   "panorama": "this.panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_6D1DF064_7D3F_2C39_41CF_BD4BD6FDF39E",
  "this.overlay_6DF882AF_7D3F_EC07_41C9_F62F9510DD2A"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_607F1901_7D73_3DFA_41A1_BF61EE97EE36",
 "initialPosition": {
  "yaw": -37.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "label": "IMG_20241105_112617_00_061",
 "hfovMin": "135%",
 "id": "panorama_7685256A_7D30_D409_41CC_3DACC5E9A426",
 "adjacentPanoramas": [
  {
   "yaw": -17.71,
   "class": "AdjacentPanorama",
   "backwardYaw": -136.29,
   "panorama": "this.panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F",
   "distance": 1
  },
  {
   "yaw": -107.27,
   "class": "AdjacentPanorama",
   "backwardYaw": -3.01,
   "panorama": "this.panorama_76953EF0_7D31_3419_41CD_388D47C2A52F",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_6CA3475F_7D37_3407_41DD_E7A795ED4B68",
  "this.overlay_6F5F04D0_7D31_3419_4189_1866AD249353"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_624CA7C5_7D73_347A_41AE_0F6FC266E1E0",
 "initialPosition": {
  "yaw": 170.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "media": "this.panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_76953EF0_7D31_3419_41CD_388D47C2A52F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7685256A_7D30_D409_41CC_3DACC5E9A426",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7687D326_7D30_EC39_41D5_464E67BF99D3",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_76947E07_7D30_D407_41D2_A39FEC03557C",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_76947E07_7D30_D407_41D2_A39FEC03557C_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "hfovMax": 130,
 "label": "IMG_20241105_112453_00_060",
 "hfovMin": "135%",
 "id": "panorama_76953EF0_7D31_3419_41CD_388D47C2A52F",
 "adjacentPanoramas": [
  {
   "yaw": -3.01,
   "class": "AdjacentPanorama",
   "backwardYaw": -107.27,
   "panorama": "this.panorama_7685256A_7D30_D409_41CC_3DACC5E9A426",
   "distance": 1
  },
  {
   "yaw": -144.45,
   "class": "AdjacentPanorama",
   "backwardYaw": -0.13,
   "panorama": "this.panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_6DE250F2_7D31_2C19_41DA_A605509F52EA",
  "this.overlay_6EADCB3C_7D37_3C09_41DA_9C2057219337"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "label": "IMG_20241105_112647_00_062",
 "hfovMin": "135%",
 "id": "panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F",
 "adjacentPanoramas": [
  {
   "yaw": 5.9,
   "class": "AdjacentPanorama",
   "backwardYaw": -170.7,
   "panorama": "this.panorama_7687D326_7D30_EC39_41D5_464E67BF99D3",
   "distance": 1
  },
  {
   "yaw": -136.29,
   "class": "AdjacentPanorama",
   "backwardYaw": -17.71,
   "panorama": "this.panorama_7685256A_7D30_D409_41CC_3DACC5E9A426",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_6C1A7666_7D33_5439_4160_7D145C831A74",
  "this.overlay_6C86906C_7D31_2C09_41CB_3CB37DE6EDE3"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_62D42850_7D73_3C19_41B2_9A7EE0284F7F",
 "initialPosition": {
  "yaw": -179.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_627E77DA_7D73_3409_41D8_D15507AE35F0",
 "initialPosition": {
  "yaw": -18.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "hfovMax": 130,
 "label": "IMG_20241105_112946_00_067",
 "hfovMin": "135%",
 "id": "panorama_76947E07_7D30_D407_41D2_A39FEC03557C",
 "adjacentPanoramas": [
  {
   "yaw": 161.54,
   "class": "AdjacentPanorama",
   "backwardYaw": 0.75,
   "panorama": "this.panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE",
   "distance": 1
  }
 ],
 "overlays": [
  "this.overlay_6C48FD27_7D31_3407_41D3_9C9CB4D23E4C",
  "this.overlay_6F92074F_7D4F_5407_41D5_DE1A8493DEE7"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_t.jpg",
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_6296E876_7D73_3C19_4145_7659C4ED3182",
 "initialPosition": {
  "yaw": 35.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "targetPitch": 0,
    "pitchSpeed": 17.05,
    "easing": "cubic_in_out",
    "yawSpeed": 33.25
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_62C5E859_7D73_3C0B_41B8_2DB1376DE221",
 "initialPosition": {
  "yaw": 75.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_625C07B2_7D73_3419_41DA_258D06FF7732",
 "initialPosition": {
  "yaw": 116.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_6203E822_7D73_3C39_41C4_EDBA84C55ECD",
 "initialPosition": {
  "yaw": 179.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "gyroscopeVerticalDraggingEnabled": true,
 "displayPlaybackBar": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "gyroscopeEnabled": true
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_604388F7_7D73_3C07_41D1_180ABF9BA611",
 "initialPosition": {
  "yaw": -18.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_6396F750_7D73_3419_41B1_3761567C8D19",
 "initialPosition": {
  "yaw": 8.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_76947E07_7D30_D407_41D2_A39FEC03557C_camera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_604928ED_7D73_3C0B_41D1_89F15F87BAA1",
 "initialPosition": {
  "yaw": -169.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "progressLeft": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#FFFFFF",
 "height": "100%",
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 55,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 10,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": 13,
 "paddingTop": 0,
 "toolTipPaddingBottom": 7,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipOpacity": 0.5,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "backgroundOpacity": 0,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "height": 641,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "verticalAlign": "top",
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "width": 573,
 "backgroundOpacity": 0,
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "class": "Container",
 "top": 15,
 "scrollBarVisible": "rollOver",
 "height": 133,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--STICKER"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "backgroundOpacity": 0.64,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "class": "Container",
 "scrollBarMargin": 2,
 "bottom": 0,
 "scrollBarVisible": "rollOver",
 "height": 118,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--MENU"
 },
 "verticalAlign": "top",
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "scrollBarOpacity": 0.5
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--INFO photo"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--INFO photoalbum"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--LOCATION"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--FLOORPLAN"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "paddingLeft": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "layout": "absolute",
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--REALTOR"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton MUTE"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 33.33,
   "yaw": 160.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6, this.camera_62C5E859_7D73_3C0B_41B8_2DB1376DE221); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6966ED14_7D31_3419_41C5_4B813DE7AF86",
   "pitch": -36.49,
   "hfov": 33.33,
   "yaw": 160.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6DF4403D_7D31_2C0B_41CD_E9A66F3E030F",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.78,
   "yaw": 8.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E, this.camera_625C07B2_7D73_3419_41DA_258D06FF7732); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6961BD1A_7D31_3409_41D1_D3732BE13EF9",
   "pitch": -20.41,
   "hfov": 23.78,
   "yaw": 8.04,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6CECF7FF_7D33_7407_41CE_7788736CB5A1",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.19,
   "yaw": 142.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF, this.camera_63AC179E_7D73_3409_41D9_180EFA72AA46); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6961FD1A_7D31_3409_41D2_02C31C137818",
   "pitch": -35.23,
   "hfov": 23.19,
   "yaw": 142.94,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_69462E73_7D33_D41F_41DA_F3B51A77613F",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24,
   "yaw": -0.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76953EF0_7D31_3419_41CD_388D47C2A52F, this.camera_6296E876_7D73_3C19_4145_7659C4ED3182); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_69613D1A_7D31_3409_41DD_55FF39544988",
   "pitch": -20.54,
   "hfov": 24,
   "yaw": -0.13,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6CE40F9A_7D33_3409_41D4_88DC3FA6E327",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.14,
   "yaw": -63.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2, this.camera_62E6886B_7D73_3C0E_41C2_D37D669580C4); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_69617D1A_7D31_3409_41CE_4C616E92D721",
   "pitch": -31.47,
   "hfov": 23.14,
   "yaw": -63.68,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6C05C34A_7D31_EC09_41D7_CD4B82AF0190",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.02,
   "yaw": 0.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76947E07_7D30_D407_41D2_A39FEC03557C, this.camera_627E77DA_7D73_3409_41D8_D15507AE35F0); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6282B75E_7D71_D409_41C2_5D31D0A637C2",
   "pitch": -32.97,
   "hfov": 20.02,
   "yaw": 0.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6C4AC92E_7D31_5C09_41DA_215EF46D1E11",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.13,
   "yaw": 161.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD, this.camera_624CA7C5_7D73_347A_41AE_0F6FC266E1E0); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6281175F_7D71_D407_41D1_D12DAA131BEB",
   "pitch": -40.26,
   "hfov": 20.13,
   "yaw": 161.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6F48F873_7D4F_DC1E_41D6_A63848D7278C",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.67,
   "yaw": 10.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD, this.camera_6396F750_7D73_3419_41B1_3761567C8D19); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_62833759_7D71_D40B_41CB_5A840B2819DF",
   "pitch": -34.48,
   "hfov": 19.67,
   "yaw": 10.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6F3D4F3C_7D31_540A_41C4_8406193EED30",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.59,
   "yaw": -149.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7687D326_7D30_EC39_41D5_464E67BF99D3, this.camera_638C9765_7D73_343B_41D5_28E376C22ED4); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6283975E_7D71_D409_41D6_AC5F78F07439",
   "pitch": -40.13,
   "hfov": 19.59,
   "yaw": -149.6,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6CB65C13_7D4F_541F_41D0_E826E8F1BE3A",
 "data": {
  "label": "Arrow 02a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.57,
   "yaw": -9.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE, this.camera_604388F7_7D73_3C07_41D1_180ABF9BA611); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6282775E_7D71_D409_41D5_93ACDFBD6525",
   "pitch": -30.46,
   "hfov": 20.57,
   "yaw": -9.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6C463E9A_7D31_7409_41DE_15F89EAA6A07",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.81,
   "yaw": -171.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103, this.camera_604928ED_7D73_3C0B_41D1_89F15F87BAA1); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6282F75E_7D71_D409_41C3_14E7647A7EB9",
   "pitch": -39.38,
   "hfov": 19.81,
   "yaw": -171.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6F7927EB_7D4F_540E_41D8_DD7C7E8C5EAC",
 "data": {
  "label": "Arrow 02a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.68,
   "yaw": 43.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2, this.camera_607F1901_7D73_3DFA_41A1_BF61EE97EE36); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_69661D14_7D31_3419_41CC_C4A4B7BD5624",
   "pitch": -29.33,
   "hfov": 21.68,
   "yaw": 43.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6C01E754_7D30_D419_41C6_EE0DB1244ACD",
 "data": {
  "label": "Arrow 02a Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 23.05,
   "yaw": -145.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6, this.camera_6076890C_7D73_3C09_41DA_423F2DF7C25B); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_69667D1A_7D31_3409_4161_03F5E7DB0067",
   "pitch": -28.07,
   "hfov": 23.05,
   "yaw": -145.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6DA75842_7D30_FC79_41C5_43D048D9C0AF",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.57,
   "yaw": -9.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103, this.camera_63B94789_7D73_340B_41AE_9D88F7379748); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_628CF758_7D71_D40A_41D3_093C1A0823E4",
   "pitch": -30.46,
   "hfov": 20.57,
   "yaw": -9.55,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6CE77213_7D31_EC1F_41A9_5F3C4DC8C814",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.66,
   "yaw": -170.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F, this.camera_6385F779_7D73_340A_4193_86A8817807FF); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_62834758_7D71_D40A_419B_704EEF580451",
   "pitch": -39.88,
   "hfov": 19.66,
   "yaw": -170.7,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6FDB47EA_7D30_D409_41B4_B6CC925B56AE",
 "data": {
  "label": "Arrow 02a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 22.35,
   "yaw": -104.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "rollOver": "this.startPanoramaWithCamera(this.panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999, this.camera_62321836_7D73_3C19_41DE_288BED19353D); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_69672D14_7D31_3419_41D2_60A42AED2992",
   "pitch": -24.81,
   "hfov": 22.35,
   "yaw": -104.13,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6D1DF064_7D3F_2C39_41CF_BD4BD6FDF39E",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.15,
   "yaw": 20.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF, this.camera_62221847_7D73_3C06_41BE_D1ACBE36076B); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_69669D14_7D31_3419_41A0_84C589A4408A",
   "pitch": -25.69,
   "hfov": 20.15,
   "yaw": 20.85,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6DF882AF_7D3F_EC07_41C9_F62F9510DD2A",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.73,
   "yaw": -17.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F, this.camera_626EB7ED_7D73_340B_41DA_CB1F21299D3D); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_69605D1A_7D31_3409_41B0_4E4AFF4518AD",
   "pitch": -30.71,
   "hfov": 20.73,
   "yaw": -17.71,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6CA3475F_7D37_3407_41DD_E7A795ED4B68",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 21.47,
   "yaw": -107.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76953EF0_7D31_3419_41CD_388D47C2A52F, this.camera_62601801_7D73_3BFB_41C1_BC7DCF6EB36F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6963AD1A_7D31_3409_41D1_C2E614384391",
   "pitch": -32.22,
   "hfov": 21.47,
   "yaw": -107.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6F5F04D0_7D31_3419_4189_1866AD249353",
 "data": {
  "label": "Arrow 02a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.24,
   "yaw": -3.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7685256A_7D30_D409_41CC_3DACC5E9A426, this.camera_62103814_7D73_3C19_41D6_82297E6051C0); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6960CD1A_7D31_3409_41CF_D6B8BB759B42",
   "pitch": -22.8,
   "hfov": 25.24,
   "yaw": -3.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6DE250F2_7D31_2C19_41DA_A605509F52EA",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 24.27,
   "yaw": -144.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_1_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E, this.camera_6203E822_7D73_3C39_41C4_EDBA84C55ECD); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_69601D1A_7D31_3409_41C0_2EBB8C58C217",
   "pitch": -39.38,
   "hfov": 24.27,
   "yaw": -144.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6EADCB3C_7D37_3C09_41DA_9C2057219337",
 "data": {
  "label": "Arrow 02b Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.69,
   "yaw": 5.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7687D326_7D30_EC39_41D5_464E67BF99D3, this.camera_6286F87F_7D73_3C07_41DD_BD3E32C61E37); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_628C5758_7D71_D40A_41DD_6D36014CB896",
   "pitch": -29.46,
   "hfov": 19.69,
   "yaw": 5.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6C1A7666_7D33_5439_4160_7D145C831A74",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.95,
   "yaw": -136.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7685256A_7D30_D409_41CC_3DACC5E9A426, this.camera_604D28E2_7D73_3C39_41CD_66B0F3DA6C1E); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_628C3758_7D71_D40A_4195_39EE6A68AAD6",
   "pitch": -38.88,
   "hfov": 19.95,
   "yaw": -136.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6C86906C_7D31_2C09_41CB_3CB37DE6EDE3",
 "data": {
  "label": "Arrow 02a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.49,
   "yaw": 15.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6281F75F_7D71_D407_41D3_943DE9D1D9CD",
   "pitch": -35.23,
   "hfov": 19.49,
   "yaw": 15.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6C48FD27_7D31_3407_41D3_9C9CB4D23E4C",
 "data": {
  "label": "Arrow 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 20.13,
   "yaw": 161.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE, this.camera_62D42850_7D73_3C19_41B2_9A7EE0284F7F); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6281A75F_7D71_D407_41C0_CEA020111725",
   "pitch": -40.26,
   "hfov": 20.13,
   "yaw": 161.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6F92074F_7D4F_5407_41D5_DE1A8493DEE7",
 "data": {
  "label": "Arrow 02b Right-Up"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "backgroundOpacity": 0,
 "right": 30,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "bottom": 8,
 "height": 75,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton VR"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton GYRO"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton HS "
 },
 "cursor": "hand"
},
{
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "backgroundOpacity": 0,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": true,
 "class": "Container",
 "top": "0%",
 "scrollBarVisible": "rollOver",
 "height": 110,
 "scrollBarMargin": 2,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "button menu sup"
 },
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "width": "91.304%",
 "backgroundOpacity": 0,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": true,
 "class": "Container",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "height": "85.959%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "data": {
  "name": "-button set"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "textShadowBlurRadius": 10,
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": 0,
 "width": 454,
 "backgroundOpacity": 0,
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "text": "Jatim park 1",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Label",
 "top": 5,
 "textShadowOpacity": 1,
 "height": 86,
 "verticalAlign": "top",
 "textShadowHorizontalLength": 0,
 "minWidth": 1,
 "fontSize": 90,
 "textShadowVerticalLength": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "fontColor": "#FFFFFF",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold"
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Book",
 "textShadowBlurRadius": 10,
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "left": 0,
 "width": 427,
 "backgroundOpacity": 0,
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "text": "kini bisa dijelajahi virtual",
 "minHeight": 1,
 "propagateClick": true,
 "class": "Label",
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "bottom": 0,
 "height": 46,
 "textShadowVerticalLength": 0,
 "textShadowHorizontalLength": 1,
 "minWidth": 1,
 "fontSize": 41,
 "borderSize": 0,
 "paddingBottom": 0,
 "fontStyle": "normal",
 "paddingTop": 0,
 "fontColor": "#FFFFFF",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "text 2"
 },
 "fontWeight": "normal"
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "backgroundOpacity": 0,
 "right": "0%",
 "paddingRight": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "Image",
 "verticalAlign": "middle",
 "bottom": 53,
 "height": 2,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "white line"
 }
},
{
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A3D00_16C4_0505_41B2_6830155B7D52"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 30,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": true,
 "class": "Container",
 "scrollBarMargin": 2,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "height": 51,
 "minWidth": 1,
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-button set container"
 },
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "right": "10%",
 "paddingRight": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "5%",
 "scrollBarWidth": 10,
 "top": "5%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": true,
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowBlurRadius": 25
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "backgroundOpacity": 0,
 "right": "10%",
 "paddingRight": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "bottom": "80%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "right": "10%",
 "paddingRight": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "5%",
 "scrollBarWidth": 10,
 "top": "5%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": true,
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowBlurRadius": 25
},
{
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "backgroundOpacity": 0,
 "right": "10%",
 "paddingRight": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "bottom": "80%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "right": "15%",
 "paddingRight": 0,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "7%",
 "scrollBarWidth": 10,
 "top": "7%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": true,
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowBlurRadius": 25
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "right": "10%",
 "paddingRight": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "5%",
 "scrollBarWidth": 10,
 "top": "5%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": true,
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowBlurRadius": 25
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "backgroundOpacity": 0,
 "right": "10%",
 "paddingRight": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "bottom": "80%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "right": "15%",
 "paddingRight": 0,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "7%",
 "scrollBarWidth": 10,
 "top": "7%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": true,
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowBlurRadius": 25
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "right": "15%",
 "paddingRight": 0,
 "overflow": "visible",
 "shadowOpacity": 0.3,
 "shadowVerticalLength": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "bottom": "7%",
 "scrollBarWidth": 10,
 "top": "7%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": true,
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowBlurRadius": 25
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "right": "15%",
 "paddingRight": 0,
 "overflow": "visible",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "7%",
 "scrollBarWidth": 10,
 "top": "7%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": true,
 "horizontalAlign": "center",
 "data": {
  "name": "Global"
 },
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowBlurRadius": 25
},
{
 "scrollBarOpacity": 0.5,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "backgroundOpacity": 1,
 "shadowColor": "#000000",
 "right": "10%",
 "paddingRight": 0,
 "overflow": "scroll",
 "shadowVerticalLength": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "propagateClick": false,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "bottom": "5%",
 "scrollBarWidth": 10,
 "top": "5%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": true,
 "horizontalAlign": "left",
 "data": {
  "name": "Global"
 },
 "verticalAlign": "top",
 "shadowSpread": 1,
 "shadowBlurRadius": 25
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "backgroundOpacity": 0,
 "right": "10%",
 "paddingRight": 20,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "Container",
 "top": "5%",
 "bottom": "80%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "layout": "vertical",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "Container X global"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_76CA6CEA_7D31_7409_41D5_BC10E49AC999_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6966ED14_7D31_3419_41C5_4B813DE7AF86",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_6961BD1A_7D31_3409_41D1_D3732BE13EF9",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_769491B9_7D31_2C0B_41CF_68FBFA2A73E2_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6961FD1A_7D31_3409_41D2_02C31C137818",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_69613D1A_7D31_3409_41DD_55FF39544988",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_76840839_7D31_3C0B_41CF_2E1D85231E8E_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_69617D1A_7D31_3409_41CE_4C616E92D721",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_6282B75E_7D71_D409_41C2_5D31D0A637C2",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_768DB72A_7D30_D40E_41A8_702E05CE1DAE_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6281175F_7D71_D407_41D1_D12DAA131BEB",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_62833759_7D71_D40B_41CB_5A840B2819DF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7694C9AA_7D30_FC0E_41CA_131F5E9D7103_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6283975E_7D71_D409_41D6_AC5F78F07439",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_6282775E_7D71_D409_41D5_93ACDFBD6525",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7694D088_7D30_EC0A_41A0_21845C1AD3DD_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6282F75E_7D71_D409_41C3_14E7647A7EB9",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_1_HS_0_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_69661D14_7D31_3419_41CC_C4A4B7BD5624",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_76826B32_7D31_5C19_41C4_6207ECEA7BDF_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_69667D1A_7D31_3409_4161_03F5E7DB0067",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_628CF758_7D71_D40A_41D3_093C1A0823E4",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7687D326_7D30_EC39_41D5_464E67BF99D3_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_62834758_7D71_D40A_419B_704EEF580451",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_69672D14_7D31_3419_41D2_60A42AED2992",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_769124BA_7D31_5409_41D5_BDF7DDB0ADF6_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_69669D14_7D31_3419_41A0_84C589A4408A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_69605D1A_7D31_3409_41B0_4E4AFF4518AD",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7685256A_7D30_D409_41CC_3DACC5E9A426_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6963AD1A_7D31_3409_41D1_C2E614384391",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_6960CD1A_7D31_3409_41CF_D6B8BB759B42",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_76953EF0_7D31_3419_41CD_388D47C2A52F_1_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_69601D1A_7D31_3409_41C0_2EBB8C58C217",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_628C5758_7D71_D40A_41DD_6D36014CB896",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_7694DCBE_7D30_D409_41D5_1F5D2030603F_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_628C3758_7D71_D40A_4195_39EE6A68AAD6",
 "rowCount": 6,
 "frameCount": 24
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_6281F75F_7D71_D407_41D3_943DE9D1D9CD",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 4,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_76947E07_7D30_D407_41D2_A39FEC03557C_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_6281A75F_7D71_D407_41C0_CEA020111725",
 "rowCount": 6,
 "frameCount": 24
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "image button menu"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "click": "this.shareTwitter(window.location.href)",
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton TWITTER"
 },
 "cursor": "hand"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "click": "this.shareFacebook(window.location.href)",
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "width": 141,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "iconHeight": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "label": "VIRTUAL TOUR INFO",
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "gap": 5,
 "rollOverShadow": false,
 "iconWidth": 0,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Button house info"
 },
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "width": 130,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "PANORAMA LIST",
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Button panorama list"
 },
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "width": 90,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "LOCATION",
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Button location"
 },
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "width": 103,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "FLOORPLAN",
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Button floorplan"
 },
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "width": 112,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "PHOTOALBUM",
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Button photoalbum"
 },
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 15
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, true, 0, null, null, false)",
 "id": "Button_1B9A3D00_16C4_0505_41B2_6830155B7D52",
 "width": 137,
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "height": 40,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 12,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "DEVELOPER CREDIT",
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Button realtor"
 },
 "fontWeight": "bold",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 15
},
{
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "width": "85%",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "width": "50%",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "paddingRight": 50,
 "borderRadius": 0,
 "paddingLeft": 50,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "height": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#0069A3",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "width": "85%",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "width": "50%",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "paddingRight": 50,
 "borderRadius": 0,
 "paddingLeft": 50,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "height": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#0069A3",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "width": "25%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 140,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "scrollBarOpacity": 0.5
},
{
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "rollOverItemLabelFontColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "width": "100%",
 "backgroundOpacity": 0.05,
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemPaddingLeft": 3,
 "scrollBarMargin": 2,
 "paddingLeft": 70,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "propagateClick": false,
 "class": "ThumbnailGrid",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemMinHeight": 50,
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "minWidth": 1,
 "itemMinWidth": 50,
 "height": "100%",
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#04A3E1",
 "itemHeight": 156,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadow": true,
 "itemLabelGap": 7,
 "itemLabelFontSize": 14,
 "itemThumbnailHeight": 125,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "paddingRight": 70,
 "itemThumbnailScaleMode": "fit_outside",
 "scrollBarVisible": "rollOver",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemThumbnailShadow": false,
 "borderRadius": 5,
 "itemBackgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "itemLabelFontColor": "#666666",
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemMaxWidth": 1000,
 "gap": 26,
 "itemHorizontalAlign": "center",
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontStyle": "normal",
 "itemMaxHeight": 1000,
 "paddingTop": 10,
 "itemWidth": 220,
 "itemMode": "normal",
 "itemLabelHorizontalAlign": "center",
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemThumbnailBorderRadius": 0,
 "itemLabelFontFamily": "Montserrat",
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowColor": "#04A3E1"
},
{
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "width": "85%",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "width": "15%",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "paddingRight": 50,
 "borderRadius": 0,
 "paddingLeft": 50,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 400,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "height": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#0069A3",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 140,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "MapViewer",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "progressLeft": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "100%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": 12,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 140,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "header"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container photo"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container photo"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "width": "55%",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "layout": "absolute",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "-left"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "width": "45%",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "paddingRight": 60,
 "borderRadius": 0,
 "paddingLeft": 60,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "height": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#0069A3",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-right"
 },
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "width": "25%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "X"
 },
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 }
},
{
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "height": 60,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "height": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#E73B2C",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 40,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "right": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "transitionDuration": 500,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "class": "ViewerArea",
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "top": 0,
 "bottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": 12,
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer info 1"
 },
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6
},
{
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "class": "Container",
 "top": "0%",
 "height": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container arrows"
 },
 "verticalAlign": "middle",
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "height": 60,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "height": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#E73B2C",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 40,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 80,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "top": "0%",
 "height": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.18vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.18vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "backgroundOpacity": 0,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundOpacity": 1,
 "right": "0%",
 "paddingRight": 0,
 "insetBorder": false,
 "paddingLeft": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "class": "WebFrame",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "height": 60,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "height": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#E73B2C",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 40,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 80,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "top": "0%",
 "height": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.18vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.18vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "backgroundOpacity": 0,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 80,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "top": "0%",
 "height": "100%",
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.18vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.18vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "width": "100%",
 "backgroundOpacity": 0,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": 20,
 "height": "36.14%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "progressLeft": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "100%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": 12,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "paddingTop": 0,
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "right": 10,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "paddingTop": 0,
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "progressLeft": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "100%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressHeight": 6,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "top": "0%",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#FFFFFF",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": 12,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "paddingTop": 0,
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "right": 10,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": "20%",
 "bottom": "20%",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "paddingTop": 0,
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "backgroundOpacity": 0,
 "right": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "IconButton",
 "top": 20,
 "height": "10%",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "paddingTop": 0,
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "IconButton X"
 },
 "cursor": "hand"
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "Image",
 "top": "0%",
 "height": "100%",
 "verticalAlign": "bottom",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "scaleMode": "fit_outside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image"
 }
},
{
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "height": 60,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "vertical",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "height": "100%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#E73B2C",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container text"
 },
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": 40,
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container space"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">jatimpark 1 </SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">Wahana seru, edukasi, dan petualangan di Malang!</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Jatim Park 1 adalah taman rekreasi populer di Kota Batu yang menawarkan berbagai wahana permainan, edukasi, dan hiburan untuk segala usia. Menggabungkan konsep belajar dan bersenang-senang, tempat ini memiliki area sains interaktif, taman air, serta berbagai atraksi yang menantang dan menyenangkan.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>kenapa harus jatimpark 1:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Memiliki lebih dari 50 wahana seru dan edukatif.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Menggabungkan hiburan dan edukasi</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Cocok untuk keluarga, pelajar, dan wisatawan.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Fasilitas lengkap, termasuk restoran dan tempat istirahat.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Bagian dari Jatim Park Group, bersama Jatim Park 2 &amp; 3.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "fontColor": "#FFFFFF",
 "click": "this.openLink('https://msha.ke/jatimparksatu', '_blank')",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": "46%",
 "backgroundOpacity": 0.7,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "fontSize": "3vh",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "9%",
 "label": "beli tiket ",
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "width": "12%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 70,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": "8%",
 "minWidth": 70,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton <"
 },
 "cursor": "hand"
},
{
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "width": "80%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false,
 "class": "Container",
 "scrollBarMargin": 2,
 "height": "30%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container separator"
 },
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "width": "12%",
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 70,
 "borderRadius": 0,
 "propagateClick": false,
 "class": "IconButton",
 "verticalAlign": "middle",
 "height": "8%",
 "minWidth": 70,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "paddingTop": 0,
 "transparencyActive": true,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton >"
 },
 "cursor": "hand"
},
{
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "fontColor": "#FFFFFF",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "width": "46%",
 "backgroundOpacity": 0.7,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "9%",
 "gap": 5,
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Bebas Neue Bold",
 "fontColor": "#FFFFFF",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "width": 207,
 "backgroundOpacity": 0.7,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "propagateClick": false,
 "class": "Button",
 "verticalAlign": "middle",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 34,
 "label": "lorem ipsum",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "height": 59,
 "gap": 5,
 "fontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "iconWidth": 32,
 "rollOverBackgroundOpacity": 1,
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "72.034%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "25.851%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.06vh;font-family:'Bebas Neue Bold';\">DEVELOPER CREDIT:</SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "class": "Container",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "height": "80%",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "- content"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "71.186%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "class": "HTMLText",
 "scrollBarMargin": 2,
 "height": "100%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">grounded team</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.98vh;font-family:'Bebas Neue Bold';\">collaborated with vragio</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.87vh;font-family:'Bebas Neue Bold';\">team member:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.98vh;font-family:'Bebas Neue Bold';\">Haza Nasrullah </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.98vh;font-family:'Bebas Neue Bold';\">dviki wahyudi</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.98vh;font-family:'Bebas Neue Bold';\">ryo hariyono</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.98vh;font-family:'Bebas Neue Bold';\">faiq dana ardi</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.98vh;font-family:'Bebas Neue Bold';\">davin prajna</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.98vh;font-family:'Bebas Neue Bold';\">fahrell sandy</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.98vh;font-family:'Bebas Neue Bold';\">fadlurrahman yusuf</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.98vh;font-family:'Bebas Neue Bold';\">yohannes samudra</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.87vh;font-family:'Bebas Neue Bold';\">web developer:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.98vh;font-family:'Bebas Neue Bold';\">Haza nasrullah</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.98vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#04A3E1",
 "shadow": false,
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarOpacity": 0.5
}],
 "class": "Player",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "vrPolyfillScale": 1,
 "verticalAlign": "top",
 "minWidth": 20,
 "mobileMipmappingEnabled": false,
 "desktopMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "gap": 10,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "layout": "absolute",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Player468"
 },
 "scripts": {
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "unregisterKey": function(key){  delete window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); }
 },
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "height": "100%",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
