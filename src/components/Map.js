import { useMap } from 'react-leaflet'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Icon } from 'leaflet'

function ChangeMapView(props) {
    const map = useMap()
    map.setView(props.position, map.getZoom())
    return null
}

export default function Map(props) {
    return (
        <MapContainer className="map" center={ props.position } zoom={ 18 }>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={ props.position } />
            <ChangeMapView position={ props.position } />
        </MapContainer>
    )
}
