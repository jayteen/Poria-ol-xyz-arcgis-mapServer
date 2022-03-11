import 'ol/ol.css';
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import {fromLonLat} from 'ol/proj';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new XYZ({
        url: 'https://www.luzhoumap.com/LZ/rest/services/Vector_TDT_BZB/MapServer/tile/{z}/{y}/{x}',
        projection : 'EPSG:4326',
      }),
    }),
  ],
  view: new View({
    center: [105.41450500488281, 28.916702270507812],
    projection : 'EPSG:4326',
    zoom: 8,
  }),
});
