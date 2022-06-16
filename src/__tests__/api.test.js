import { getStationInformation, getStationStatus } from '../api'

describe('Station Information API Data fetching', () => {
    it('should get station information', () => {
        return getStationInformation().then((data) => {
            expect(data.stations).toBeDefined();
        });
    });
});

describe('Station Status API Data fetching', () => {
    it('should get station status', () => {
        return getStationStatus().then((data) => {
            expect(data.stations).toBeDefined();
        });
    });
});
