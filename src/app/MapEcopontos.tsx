"use client";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const ecopontos: {
  name: string;
  address: string;
  position: [number, number];
}[] = [
  {
    name: "Ecoponto CPA",
    address: "Av. Historiador Rubens de Mendonça, CPA I",
    position: [-15.563964, -56.083524],
  },
  {
    name: "Ecoponto Pedra 90",
    address: "Rua 01, Pedra 90",
    position: [-15.6518, -56.0719],
  },
  {
    name: "Ecoponto Osmar Cabral",
    address: "Av. Oátomo Canavarros, Osmar Cabral",
    position: [-15.629, -56.097],
  },
  {
    name: "Ecoponto Jardim Leblon",
    address: "Rua 10, Jardim Leblon",
    position: [-15.573, -56.071],
  },
  {
    name: "Ecoponto Jardim União",
    address: "Rua 5, Jardim União",
    position: [-15.589, -56.099],
  },
];

export default function MapEcopontos() {
  return (
    <MapContainer
      center={[-15.6014109, -56.0978917]}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={true}
      className="z-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-15.6014109, -56.0978917]} icon={greenIcon}>
        <Popup>
          <span style={{ color: "#16a34a", fontWeight: "bold" }}>
            Base: Cuiabá-MT, Brazil
          </span>
        </Popup>
      </Marker>
      {ecopontos.map((ecoponto, idx) => (
        <Marker key={idx} position={ecoponto.position} icon={greenIcon}>
          <Popup>
            <span className="font-bold text-green-700">{ecoponto.name}</span>
            <br />
            <span className="text-green-900">{ecoponto.address}</span>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
