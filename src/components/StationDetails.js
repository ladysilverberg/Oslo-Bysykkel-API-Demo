import { useQuery } from 'react-query'
import { getStationInformation, getStationStatus } from '../api'
import Error from './Error'

export default function StationDetails(props) {
    const { data:stationInfo, status:infoQueryState } = useQuery('station-info', getStationInformation)
    const { data:stationStatus, status:statusQueryState } = useQuery('station-status', getStationStatus)

    if (infoQueryState === 'loading' || statusQueryState === 'loading')
        return <div>Laster...</div>

    if (infoQueryState === 'error' || statusQueryState === 'loading')
        return <Error message={ "Det oppstod en feil!" } />

    return (
        <div class="StationDetails">
            <h2>{ stationInfo.stations[props.stationIndex].name }</h2>
            <div className="CardCollection">
                <div className="Card">
                    <h3>Sykler</h3>
                    <span>{ stationStatus.stations[props.stationIndex].num_bikes_available }</span>
                </div>
                <div className="Card">
                    <h3>Låser</h3>
                    <span>{ stationStatus.stations[props.stationIndex].num_docks_available }</span>
                </div>
            </div>
        </div>
    )
}