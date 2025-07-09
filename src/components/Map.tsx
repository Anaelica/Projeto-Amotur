'use client';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from 'react-leaflet';
import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { points, Point, PointsType } from '@/components/Points';

const defaultIcon = new L.Icon({
  iconUrl: '/default.png',
  iconSize: [30, 30],
  iconAnchor: [25, 40],
  popupAnchor: [0, -40],
});

const iconHouse = new L.Icon({
  iconUrl: '/icon-casas.png',
  iconSize: [50, 50],
  iconAnchor: [25, 40],
  popupAnchor: [0, -40],
});
const iconHamburgueria = new L.Icon({
  iconUrl: '/icon-hamburgue.png',
  iconSize: [40, 40],
  iconAnchor: [25, 40],
  popupAnchor: [0, -40],
});
const restaurantes = new L.Icon({
  iconUrl: '/restaurantes.png',
  iconSize: [50, 65],
  iconAnchor: [25, 40],
  popupAnchor: [0, -40],
});
const comercios = new L.Icon({
  iconUrl: '/comercios.png',
  iconSize: [32, 32],
  iconAnchor: [25, 40],
  popupAnchor: [0, -40],
});
const esportesAgua = new L.Icon({
  iconUrl: '/esportes.png',
  iconSize: [32, 32],
  iconAnchor: [25, 40],
  popupAnchor: [0, -40],
});
const mares = defaultIcon;
const iconPousadas = new L.Icon({
  iconUrl: '/pousadas.png',
  iconSize: [45, 45],
  iconAnchor: [25, 40],
  popupAnchor: [0, -40],
});

const iconMap: Record<PointsType, L.Icon> = {
  farmacia: defaultIcon,
  camping: defaultIcon,
  trilha: defaultIcon,
  clube: defaultIcon,
  praça: defaultIcon,
  atracaoNatural: defaultIcon,
  museu: defaultIcon,
  centroCultural: defaultIcon,
  agencia: defaultIcon,
  correspondenciaBancaria: defaultIcon,
  igreja: defaultIcon,
  mecanico: new L.Icon({
    iconUrl: '/ICON-HOTEL.png',
    iconSize: [50, 50],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
  escola: new L.Icon({
    iconUrl: '/home.png',
    iconSize: [50, 50],
    iconAnchor: [25, 40],
    popupAnchor: [0, -40],
  }),
  hamburgueria: iconHamburgueria,
  barraca: restaurantes,
  casas: iconHouse,
  villas: iconHouse,
  hotel: iconPousadas,
  pousadas: iconPousadas,
  bar: restaurantes,
  restaurantes: restaurantes,
  pizzaria: restaurantes,
  sorveteria: restaurantes,
  acai: restaurantes,
  sanduiches: restaurantes,
  comercios: comercios,
  lojas: comercios,
  supermercado: comercios,
  kitesurf: esportesAgua,
  windsurf: esportesAgua,
  servicos: esportesAgua,
  lagoa: mares,
  praia: mares,
  rio: mares,
  riacho: mares,
};

function ConditionalMarkers({ points, search }: { points: Point[]; search: string }) {
  const map = useMap();
  const markerRefs = useRef<Record<number, L.Marker>>(Object.create(null));
  const [showMarkers, setShowMarkers] = useState(false);

  useEffect(() => {
    setShowMarkers(map.getZoom() >= 16); 
    const handleZoom = () => {
      setShowMarkers(map.getZoom() >= 16);
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
        if (marker) marker.openPopup();
      }, 500);
    }
  }, [search, map, points]);

  if (!showMarkers) return null;

  return (
    <>
      {points.map((point) => {
        const icon = iconMap[point.type] || defaultIcon;
        return (
          <Marker
            key={point.id}
            position={point.position}
            icon={icon}
            ref={(instance) => {
              if (instance) markerRefs.current[point.id] = instance;
            }}
          >
            <Popup>
              <div className="text-center">
                <img
                  src={point.image}
                  alt={point.name}
                  className="w-32 h-20 object-cover mb-1"
                />
                <h2 className="font-semibold">{point.name}</h2>
                <p className="text-sm">{point.description}</p>
              </div>
            </Popup>
          </Marker>
        );
      })}
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
  console.log('Pontos filtrados:', filteredPoints);

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