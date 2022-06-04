import { useQuery } from 'react-query'
import { getStationInformation } from '../api'
import SearchBar from './SearchBar'
import Error from './Error'

export default function StationList(props) {
    const { data, status} = useQuery('station-info', getStationInformation)

    const onSearchSelect = (selectedItem) => {
        data.stations.forEach((station, index) => {
            if (selectedItem.station_id === station.station_id) {
                props.onClickCallback(index, station.lat, station.lon)
                return
            }
        })
    }

    if (status === 'loading')
        return <div>Loading...</div>

    if (status === 'error')
        return <Error message={ "Det oppstod en feil!" } />

    return (
        <SearchBar items={ data.stations } onClickCallback={ onSearchSelect } />
    )
}
