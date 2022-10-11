import './styles.css';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import {useMap} from 'react-leaflet/hooks'
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
function Markers(){
    const map = useMap();
    return(
        locations.map((location) => {
            return(
                <Marker position={location} key={location[0]} eventHandlers={{
                    click: () => {
                        map.setView(location, 14)
                    }
                }}>
                <Popup>Você está aqui!</Popup>
                </Marker>
                )
    })
    )
}
function MapBoard() {
    L.Marker.prototype.options.icon = DefaultIcon;
    return (
        <div className='leafletContainer'>
            <MapContainer center={[-12.9704, -38.5124]} zoom={12} style={{height: "93%", width: "93%"}} scrollWheelZoom>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
                <Markers/>
            </MapContainer>
        </div>
    )
};

export default MapBoard;