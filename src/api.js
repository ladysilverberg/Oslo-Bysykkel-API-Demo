import axios from 'axios'

const API_URL = "https://gbfs.urbansharing.com/oslobysykkel.no"
const HEADERS = {
    'Content-Type': 'application/json',
    'Client-Identifier': 'ladysilverberg-apidemo'
}

export const getStationInformation = async () => {
    const res = await axios.get(API_URL + '/station_information.json', {
        headers: HEADERS
    })
    return res.data.data
}

export const getStationStatus = async () => {
    const res = await axios.get(API_URL + '/station_status.json', {
        headers: HEADERS
    })
    return res.data.data
}