import './styles.css';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import { useMap } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
const locations = [
    [-12.9704, -38.5124],
    [-12.981193, -38.429765],
    [-13.009812, -38.492400],
    [-13.010179, -38.532511],
    [-12.982534, -38.520687],
    [-12.956708, -38.354115],
    [-12.928374, -38.318168],
    [-12.979151, -38.455549],
    [-12.981543, -38.465483]
]
function MapBoard() {
    L.Marker.prototype.options.icon = DefaultIcon;
    const navLocation = (latlng) => {
        const map = useMap();
        L.Map.setCenter(latlng)
        map.setCenter(latlng)
    }
    return (
        <div className='leafletContainer'>
            <MapContainer center={[-12.9704, -38.5124]} zoom={12} style={{height: "93%", width: "93%"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
                {locations.map((location) => (
                    <Marker position={location} onClick={(location) => navLocation(location)}>
                        <Popup>Você está aqui!</Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    )
};

export default MapBoard;