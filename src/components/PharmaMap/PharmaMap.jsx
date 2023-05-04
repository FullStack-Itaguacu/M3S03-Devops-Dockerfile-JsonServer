import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

export const PharmaMap = ({ addresses }) => {
    const [pharmacies, setPharmacies] = useState([]);
    const [mapCenter, setMapCenter] = useState([0, 0]);
    const [mapZoom, setMapZoom] = useState(13);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const promises = addresses.map((address) => 
                    fetch(`https://nominatim.openstreetmap.org/search?q=${address.address}&format=json&limit=1`)
                );
                const responses = await Promise.all(promises);
                const data = await Promise.all(responses.map((response) => response.json()));
                const coordinates = data.map((item) => [item[0].lat, item[0].lon]);
                setMapCenter(coordinates[0]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [addresses]);

    return (
        <div>
            <MapContainer center={mapCenter} zoom={mapZoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&amp;copy <a href="https://www.openstreetmap.org/" > OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {pharmacies.map((pharmacy) => (
                    <Marker key={pharmacy.id} position={[pharmacy.latitude, pharmacy.longitude]}>
                        <Popup>
                            {pharmacy.name}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );

}

