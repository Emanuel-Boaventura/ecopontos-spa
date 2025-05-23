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
      address: "Av. Historiador Rubens de Mendonça, 3300 - Jardim Aclimação, Cuiabá - MT, 78008-000",
      position: [-15.576441825907288, -56.07196593779783],
    },
    {
      name: "Ecoponto Resíduos Eletrônicos Shopping Estação",
      address:
        "Av. Miguel Sutil, 9300 - Santa Rosa, Cuiabá - MT, 78040-790 (Shopping Estação)",
      position: [-15.590193473416846, -56.12070844731547],
    },
    {
      name: "O Boticário, Loja Sustentável",
      address: "Av. Érico Preza, 211 - Jardim Itália, Cuiabá - MT, 78060-758",
      position: [-15.589644119526811, -56.0607554159448],
    },
    {
      name: "Ecodescarte Reciclagem de Eletrônicos",
      address: "Av. Des. Antônio Quirino de Araújo, 1000 - Poção, Cuiabá - MT, 78015-580",
      position: [-15.608450861198715, -56.088140519066535],
    },
    {
      name: "Ecoponto Canaã Recicláveis",
      address: "Canaã Recicláveis - R. Progresso, 100 - Jardim Ubata, Cuiabá - MT, 78025-765",
      position: [-15.618583733779603, -56.12300270345487],
    },
    {
      name: "SUCATÃO URUGUAI",
      address: "Av. V-2, 451 - Nova Esperança, Cuiabá - MT, 78098-160",
      position: [-15.640461811123792, -55.971236361732295],
    },
    {
      name: "Sucatão Do Goiano",
      address: "R. B - Distrito Industrial, Cuiabá - MT, 78098-280",
      position: [-15.654914436578455, -55.973544391650606],
    },
    {
      name: "JMC SUCATAS METÁLICAS",
      address: "R. Cinquenta e Oito, QUADRA 238 - SEGUNDA ETAPA - Pedra 90, Cuiabá - MT, 78099-290",
      position: [-15.631730885336776, -55.9446299071717],
    },
    {
      name: "Sucatão Paraná",
      address: "Avenida - Fernando Corrêa da Costa, Nº 8.400 Bairro: - São José, Cuiabá - MT, 78090-000",
      position: [-15.640826024511865, -56.02276887303448],
    },
    {
      name: "Sucatão Do Bacana",
      address: "92J8+CM6 Cuiabá - Coxipó da Ponte, Cuiabá - MT -15, 6189506, -55,9833485 - Coxipó da Ponte, Cuiabá - MT, 78091-507",
      position: [-15.618950056185216, -55.98339639449376],
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
