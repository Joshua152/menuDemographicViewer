import React, {useEffect, useState} from 'react';
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import {GeoJsonLayer, PolygonLayer} from '@deck.gl/layers';
import {LightingEffect, AmbientLight, _SunLight as SunLight} from '@deck.gl/core';
import {scaleThreshold} from 'd3-scale';
import Slider from '../components/Slider';
import '../index.css';
import { geoGraticule } from 'd3';

const geoUrl = require('../data/us-county-boundaries.geojson')
const dataUrls = [
  'https://api.census.gov/data/2000/dec/sf1?get=P003004,GEO_ID&for=county:*&in=state:17',
  'https://api.census.gov/data/2010/dec/pl?get=P001004,GEO_ID&for=county:*&in=state:17',
  'https://api.census.gov/data/2020/dec/pl?get=P1_004N,GEO_ID&for=county:*&in=state:31'
]

export default function Test({data: geo = geoUrl}) {
  const [data, setData] = useState([]);
  const [map, setMap] = useState(null);

  // const [year, setYear] = useState(2020);

  useEffect(() => {
    setMap(null);
    getData(2020);
    // setData(json);
  }, []);

  useEffect(() => {
    console.log("set: " + layers);
    
    console.log("before: " + map)
    setMap(geo);

    console.log("map: " + map);
  }, [data]);

  const getData = async (year) => {
    const resp = await fetch(dataUrls[(year - 2000) / 10]);
    const json = await resp.json();

    setData(json)

    // console.log("set data: " + JSON.stringify(json));

    // return json;
  }

  const getPop = (countyId) => {
    console.log("get pop: " + data)

    let pop = 0;

    data.some(el => {
      const cId = el[3];

      if(+countyId === +cId) {
        pop = +el[0];

        return true;
      }
    });

    return pop;
  }

  const changeYear = (year) => {
    setMap(null);
    getData(year)
  }

  const getTooltip = ({object}) => {
    return (
      object && {
        html: `\
        <div><b>Black Population</b></div>
        <div>${object.properties.namelsad}</div>
        <div>${getPop(object.properties.countyfp)}</div>
        `,
        style: {
          backgroundColor: '#FFFFFF',
          color: '#000000',
          borderRadius: '5px',
          borderStyle: 'solid',
          borderWidth: '2px',
          fontFamily: 'sans-serif'
        }
      }
    );
  }

  const INITIAL_VIEW_STATE = {
    latitude: 40.6331,
    longitude: -89.3985,
    zoom: 1,
    minZoom: 6,
    maxZoom: 10,
    pitch: 45,
    bearing: 0
  };

  // const landCover = [[-71.0071, 40.2227], [40.2227, 46.2640], [-80.9918, 46.2640], [-80.9918, 40.2227]];

  const layers = [
    // new PolygonLayer({
    //   id: 'ground',
    //   data: landCover,
    //   stroked: false,
    //   getPolygon: f => f,
    //   getFillColor: [0, 0, 0, 0]
    // }),
    new GeoJsonLayer({
      id: 'geojson',
      data: geo,
      opacity: 0.8,
      stroked: false,
      filled: true,
      extruded: true,
      wireframe: true,
      getElevation: f => getPop(f.properties.countyfp) / 5,//Math.sqrt(f.properties.valuePerSqm) * 10,
      getFillColor: f => [getPop(f.properties.countyfp) / 50, 20, 60],
      // getLineColor: [255, 255, 255],
      pickable: true
    })
  ];

  return (
    <div className='h-screen flex items-center'>
      {/* <h1>{data["data"]}</h1> */}
      <Slider onChange={(year) => changeYear(year)} />
      {map && 
        <DeckGL
            layers={layers}
            // effects={effects}
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            getTooltip={getTooltip}
            style={{zIndex: -1}}
            // className='z-0'
          >
            {/* <StaticMap reuseMaps mapStyle={mapStyle} preventStyleDiffing={true} /> */}
        </DeckGL>
      }
    </div>
  );
}