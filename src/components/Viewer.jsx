import React, {useEffect, useRef, useState} from 'react';
import DeckGL from '@deck.gl/react';
import {GeoJsonLayer} from '@deck.gl/layers';
import Slider from './Slider';
import '../index.css';

const dataUrls = [
  './data/1950.json',
  'https://api.census.gov/data/2000/dec/sf1?get=P003004,GEO_ID&for=county:*&in=state:17',
  'https://api.census.gov/data/2010/dec/pl?get=P001004,GEO_ID&for=county:*&in=state:17',
  'https://api.census.gov/data/2020/dec/pl?get=P1_004N,GEO_ID&for=county:*&in=state:17'
]

export default function Test({onChangeYear}) {
  const [data, setData] = useState({});
  const [map, setMap] = useState(null);
  const [year, setYear] = useState(1990);

  let updateInMap = useRef(true);
  let updateInData = useRef(true);
  let updateInYear = useRef(true);

  useEffect(() => {
    (async () => {
      await getData();

      const resp = await fetch('./data/us-county-boundaries.json');
      const json = await resp.json();
    
      updateInMap.current = true;
      setMap(json);
    })()
  }, []);

  useEffect(() => {
    if(updateInMap.current) {
      updateMap();

      updateInMap.current = false;
    }
  }, [map]);

  useEffect(() => {
    if(updateInData.current) {
      updateMap();

      updateInData = false;
    }
  }, [data])

  useEffect(() => {
    (async () => {
      await getData();
      
      if(updateInYear) {
        updateMap();

        updateInYear = false;
      }
    })()
  }, [year]);

  const updateMap = () => {
    if(map === null)
      return;

    const temp = JSON.parse(JSON.stringify(map));
    // const temp = map;

    temp.features.forEach(el => {
      const cId = el.properties.countyfp;

      data[year.toString()].some(el2 => {
        if(+el2[3] === +cId) {
          el.properties.pop = el2[0].toString();

          return true;
        }
      }); 
    });

    setMap(temp);
  }

  const getData = async () => {
    if(data !== null && data.hasOwnProperty(year))
      return true;

    const resp = await fetch(dataUrls[(year - 1990) / 10]);
    const json = await resp.json();

    let d = data;

    d[year] = json;
    
    setData(d);
    updateInData = true;

    return d[year];
  }

  const getPop = (countyId) => {
    if(data[year] === undefined)
      return "loading...";

    const popMap = data[year];
    let pop = -1;

    popMap.some(el => {
      if(+el[3] === +countyId) {
        pop = +el[0];
      
        return true;
      }
    });

    return pop;
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
      data: map,
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
    <div className='h-screen flex items-center overflow-hidden'>
      <Slider onChange={(year) => {updateInYear.current = true; setYear(year); onChangeYear(year)}} />
      {data !== [] &&// map &&
        <DeckGL
            layers={layers}
            // effects={effects}
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            getTooltip={getTooltip}
          >
            {/* <StaticMap reuseMaps mapStyle={mapStyle} preventStyleDiffing={true} /> */}
        </DeckGL>
      }
    </div>
  );
}