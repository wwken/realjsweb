import React, {useEffect, useState, useRef} from 'react';
import {createRoot} from 'react-dom/client';

import {
  APIProvider,
  Marker,
  Map,
  useMap,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import {MarkerClusterer} from '@googlemaps/markerclusterer';
import trees from './trees';

const API_KEY =
  globalThis.GOOGLE_MAPS_API_KEY ?? (process.env.GOOGLE_MAPS_API_KEY as string);

const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const App = () => (
  <APIProvider apiKey={API_KEY}>
    <Map
      mapId={'bf51a910020fa25a'}
      defaultCenter={{lat: 40.604233, lng: -74.002602}}
      defaultZoom={13}
      gestureHandling={'greedy'}
      disableDefaultUI>
      <Markers points={trees} />
    </Map>
  </APIProvider>
);

type Point = google.maps.LatLngLiteral & {key: string} & {price:string};
type Props = {points: Point[]};

const Markers = ({points}: Props) => {
  const map = useMap();
  const [markers, setMarkers] = useState<{[key: string]: Marker}>({});
  const clusterer = useRef<MarkerClusterer | null>(null);

  // Initialize MarkerClusterer
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({map});
    }
  }, [map]);

  // Update markers
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers(prev => {
      if (marker) {
        return {...prev, [key]: marker};
      } else {
        const newMarkers = {...prev};
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <>
      {points.map(point => (
        <>
        {/*<AdvancedMarker*/}
        {/*  position={point}*/}
        {/*  key={point.key}*/}
        {/*  ref={marker => setMarkerRef(marker, point.key)} >*/}
        {/*  <Pin*/}
        {/*    background={'#0f9d58'}*/}
        {/*    borderColor={'#006425'}*/}
        {/*    glyphColor={'#60d98f'}*/}
        {/*  />*/}
        {/*</AdvancedMarker>*/}

          <Marker
          position={{lat: point.lat, lng: point.lng}}
          clickable={true}
          onMouseOver={() =>
            alert('marker was clicked!')
          }
          title={'clickable google.maps.Marker'}
          label={USDollar.format(point.key)}
        />
          </>
      ))}
    </>
  );
};

export default App;

export function renderToDom(container: HTMLElement) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
