import PharmacyService from '../../pages/api/pharmacy_service';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import DataMock from '../../__mocks__/dataMock'

describe('Test Servicio', () => {
    const pharmacy_service = new PharmacyService();
    test('se traen farmacias y comunas correctamente', () => {
        var mock = new MockAdapter(axios);
        const data = {
            data: {
                communes: [DataMock.communes],
                pharmacys: [[DataMock.local]]

            }
        };
        mock.onGet('http://localhost:8000/api/communes/7').reply(200, data);
        pharmacy_service.getCommunesAndPharmacys().then(response => {
            expect(response.data).toEqual(data);
        });

    })
})