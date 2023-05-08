import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const PharmaMap = () => {
  const [pharmacys, setPharmacys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/pharmacys");
      const data = await response.json();
      setPharmacys(data);
    };

    fetchData();
  }, []);

  const mapCenter = [-27.5931161, -48.5225146];

  return (
    <MapContainer center={mapCenter} zoom={13} style={{ height: "100vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {pharmacys.map((pharmacy) => (
        <Marker key={pharmacy.id} position={[pharmacy.latitude, pharmacy.longitude]}>
          <Popup>
            {pharmacy.id}<br></br>
            {pharmacy.razaosocial}<br></br>
            {pharmacy.CNPJ}<br></br>
            {pharmacy.fantasia}<br></br>
            {pharmacy.celular}<br></br>
            {pharmacy.cep}<br></br>
            {pharmacy.logradouro},
            {pharmacy.numero}<br></br>
            {pharmacy.bairro}<br></br>
            {pharmacy.localidade} -
            {pharmacy.uf}<br></br>
            {pharmacy.latitude}<br></br>
            {pharmacy.longitude}<br></br>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
