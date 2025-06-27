'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

type PointsType = 'restaurant' | 'pousadas' | 'hotel' | 'house';

const iconMap: Record<PointsType, L.Icon> = {
  restaurant: new L.Icon({
    iconUrl: '/restaurant-coffee-shop-svgrepo-com.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  }),
  pousadas: new L.Icon({
    iconUrl: '/icon-pousada.png',
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
  house: new L.Icon({
    iconUrl: '/home.png', 
    iconSize: [50, 50],
    iconAnchor: [25, 40],
    popupAnchor: [0, -40],
  }),
};

type Point = {
  id: number;
  name: string;
  position: [number, number];
  image: string;
  description: string;
  type: PointsType;
};

const points: Point[] = [
  {
    id: 1,
    name: 'Aloha Village Hotel',
    position: [-3.02556, -39.65393],
    image: '',
    description: 'R Benedito Goncalves de Sousa, Icaraí de Amontada',
    type: 'pousadas',
  },
  {
    id: 2,
    name: 'Casa Florzinha em Icaraizinho',
    position: [-3.0244689052658833, -39.65325473309589],
    image: '',
    description: 'Rua da Praia, s.n - Icaraí, Amontada - CE.',
    type: 'house',
  },
  {
    id: 3,
    name: 'Casa Janjão',
    position: [-3.024230694071786, -39.65673026390667],
    image: '',
    description: 'Av. Dep. Roberto Mesquita, 996 - Icaraí, Amontada - CE, 62540-000',
    type: 'house',
  },
    {
      id: 4,
      name: 'Canoé Brasil',
      position: [-3.0025160571575866, -39.69848473322211],
      image: '',
      description: 'R. Camilo Alves, s/n - Moitas, Amontada - CE, 62540-000',
      type: 'hotel',
    },
    {
      id: 5,
      name: 'Charles Bayern',
      position: [-3.0250542580980553, -39.64345195041343],
      image: '',
      description: 'R. Joaquim Alves Parente, 672 - Icaraí de, Amontada - CE, 62545-000',
      type: 'hotel',
    },
    {
      id: 6,
      name: 'De praia Brasil',
      position: [-3.0240891885335883, -39.647149004386414],
      image: '',
      description: 'Praça Navegantes, s/n - Centro, Amontada - CE, 62540-000',
      type: 'hotel',
    },
    {
      id: 7,
      name: 'Ecocamping Lumiar',
      position: [-3.0846565101820773, -39.55551094856409],
      image: '',
      description: 'Caetanos de Cima - Centro 1800, Amontada - CE, 62500-000',
      type: 'pousadas',
    },
    {
      id: 8,
      name: 'Restaurante e Pousada Hibisco',
      position: [-3.023182760594986, -39.64423930438652],
      image: '',
      description: 'R. Valdemar Carneiro Lima, 119 - praia de, Amontada - CE, 62545-000',
      type: 'pousadas',
    },
    {
      id: 9,
      name: 'Hotel Icaraí Beach',
      position: [-3.0334142141258598, -39.653586804386386],
      image: '',
      description: 'Tv. Raimundo Carneiro de Sousa, SN - Icaraí, Amontada - CE, 62545-000',
      type: 'hotel',
    },
    {
      id: 10,
      name: 'Pousada Hula Hula Brazil ',
      position: [-3.026199136248714, -39.65784166205763],
      image: '',
      description: 'X8FR+FV - Icaraí, Amontada - CE, 62545-000',
      type: 'pousadas',
    },
    {
      id: 11,
      name: 'Pousada Jardim do Vento',
      position: [-3.0211460881006316, -39.64189007555087],
      image: '',
      description: 'R. Rita Praciano, 00 - Icaraí, Amontada - CE, 62500-000',
      type: 'pousadas',
    },
    {
      id: 13,
      name: 'Pousada e Restaurante Junduh Brasil',
      position: [-3.024340616353345, -39.64752530253744],
      image: '',
      description: 'R. João de Castro, sn - Icaraí, Amontada - CE, 62540-000',
      type: 'pousadas',
    },
    {
      id: 14,
      name: 'Pousada Laculá',
      position: [-3.000881059189972, -39.69884163507121],
      image: '',
      description: 'R. Beira Mar - Praia de, Amontada - CE, 62540-000',
      type: 'pousadas',
    },
    {
      id: 15,
      name: 'Makena Hotel',
      position: [-3.023924827468459, -39.644062448564306],
      image: '',
      description: 'R. Joaquim Alves Parente - In, Amontada - CE, 62545-000',
      type: 'hotel',
    },
    {
      id: 16,
      name: 'Pousada País Tropical',
      position: [-3.02503914701846, -39.65481914856237],
      image: '',
      description: 'Icaraí de Amontada - Av. Dep. Roberto Mesquita, S/N - Icaraí, Amontada - CE, 62540-000',
      type: 'pousadas',
    },
    {
      id: 18,
      name: 'Pousada Brisa Del Mar',
      position: [-3.0261604888385287, -39.65548260438667],
      image: '',
      description: 'Pousada Brisa Del Mar - R. João Rafael Diniz, S/N - Icaraí, Amontada - CE, 62545-000',
      type: 'pousadas',
    },
    {
      id: 19,
      name: 'Pousada Varanda Amar, Hotel Icaraí de Amontada, Icaraizinho',
      position: [-3.0277053920626744, -39.638580162057714],
      image: '',
      description: 'R. Luís Alves Parente, 1450 - Icaraí, Amontada - CE, 62540-000',
      type: 'pousadas',
    },
    {
      id: 20,
      name: 'Terrasa Solar Hotel',
      position: [-3.0280734891203838, -39.64205951972869],
      image: '',
      description: 'R. Pedro Carneiro Sobrinho, 100 - Icarai de amontada, Amontada - CE, 62545-000',
      type: 'hotel',
    },
    {
      id: 21,
      name: 'Pousada Vila Icaraí',
      position: [-3.0250509637211818, -39.642931960208664],
      image: '',
      description: 'Icaraí de Amontada - R. Joaquim Alves Parente, 702 - Icaraí, Amontada - CE, 62540-000',
      type: 'pousadas',
    },
    {
      id: 22,
      name: 'Pousada Villa Mango',
      position: [-3.0231010771634375, -39.65757821787991],
      image: '',
      description: 'Rua Deputado Roberto Mesquita, 1134 - Icaraí, Amontada - CE, 62540-000',
      type: 'pousadas',
    },
    
];
  import { useEffect, useState } from 'react';
  import { useMap } from 'react-leaflet';


  function ConditionalMarkers({ points }: { points: Point[] }) {
    const map = useMap();
    const [showMarkers, setShowMarkers] = useState(map.getZoom() >= 17);

    useEffect(() => {
      const handleZoom = () => {
        setShowMarkers(map.getZoom() >= 17);
      };

      map.on('zoomend', handleZoom);
      return () => {
        map.off('zoomend', handleZoom);
      };
    }, [map]);

    if (!showMarkers) return null;

      return (
        <>
          {points.map((point) => (
            <Marker
              key={point.id}
              position={point.position}
              icon={iconMap[point.type]}
            >
              <Popup>
                <div className="text-center">
                  <img
                    src={point.image}
                    alt={point.name}
                  />
                  <h2 className="font-semibold">{point.name}</h2>
                  {point.description && <p className="text-sm">{point.description}</p>}
                </div>
              </Popup>
            </Marker>
          ))}
        </>
      );
    }
  export default function Map() {
    return (
      <MapContainer
        center={[-3.029350, -39.653422]}
        zoom={16}
        scrollWheelZoom={true}
        className="w-full h-[600px] rounded-lg shadow-lg"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      <ConditionalMarkers points={points} />
      </MapContainer>
    );
  }
