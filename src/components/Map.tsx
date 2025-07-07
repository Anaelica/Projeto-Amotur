'use client';

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { points, Point, PointsType } from '@/components/Points';

const iconHouse = new L.Icon({
  iconUrl: '/house-icon.png',
  iconSize: [32, 32],
});

const iconMap: Record<PointsType, L.Icon> = {
  villas: new L.Icon({
    iconUrl: '/restaurant-coffee-shop-svgrepo-com.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
  pousadas: new L.Icon({
    iconUrl: '/icons/pousadas.png',
    iconSize: [60, 60],
    iconAnchor: [32, 40],
    popupAnchor: [0, -40],
  }),
  hotel: new L.Icon({
    iconUrl: '/ICON-HOTEL.png',
    iconSize: [50, 50],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
  // casas: new L.Icon({
  //   iconUrl: '/home.png',
  //   iconSize: [50, 50],
  //   iconAnchor: [25, 40],
  //   popupAnchor: [0, -40],
  // }),
    casas: iconHouse,
    // villas: iconHouse,
};

function ConditionalMarkers({ points, search }: { points: Point[]; search: string }) {
  const map = useMap();
  const [showMarkers, setShowMarkers] = useState(false);
 const markerRefs = useRef<Record<number, L.Marker>>(Object.create(null));


  useEffect(() => {
    const handleZoom = () => {
      setShowMarkers(map.getZoom() >= 17);
    };
    map.on('zoomend', handleZoom);

    return () => {
      map.off('zoomend', handleZoom);
    };
  }, [map]);
useEffect(() => {
  if (!search) return;

  const matched = points.find((p) => p.name.toLowerCase() === search.toLowerCase());
  if (matched && matched.position) {
    map.flyTo(matched.position, 18);
    setTimeout(() => {
      const marker = markerRefs.current[matched.id];
      if (marker) marker.openPopup(); // <-- aqui está o segredo!
    }, 500); // dar um tempo pro flyTo terminar
  }
}, [search]);


  if (!showMarkers) return null;

  return (
    <>
      {points.map((point) => (
        <Marker
              key={point.id}
              position={point.position}
              icon={iconMap[point.type]}
              ref={(instance) => {
                if (instance) markerRefs.current[point.id] = instance;
              }}
            >
              <Popup>
                <div className="text-center">
                  <img src={point.image} alt={point.name} className="w-32 h-20 object-cover mb-1" />
                  <h2 className="font-semibold">{point.name}</h2>
                  <p className="text-sm">{point.description}</p>
                </div>
              </Popup>
            </Marker>

      ))}
    </>
  );
}

export default function MapComponent({
  search,
  setSearch,
  filteredPoints,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filteredPoints: Point[];
}) {
  return (
    <div className="relative w-full h-[600px]">
      <MapContainer
        center={[-3.02935, -39.653422]}
        zoom={16}
        scrollWheelZoom={true}
        className="w-full h-full rounded-lg shadow-lg"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ConditionalMarkers points={filteredPoints} search={search} />
      </MapContainer>
    </div>
  );
}
