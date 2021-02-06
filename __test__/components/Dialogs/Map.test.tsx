import React from 'react';
import { shallow } from 'enzyme';
import Map from '../../../components/Map'
import DataMock from '../../../__mocks__/dataMock'
// const local = {
//     "fecha": "04-02-2021",
//     "local_id": "534",
//     "local_nombre": "TORRES MPD",
//     "comuna_nombre": "RECOLETA",
//     "localidad_nombre": "RECOLETA",
//     "local_direccion": "AVENIDA EL SALTO 2972",
//     "funcionamiento_hora_apertura": "10:30 hrs.",
//     "funcionamiento_hora_cierre": "19:30 hrs.",
//     "local_telefono": "+560225053570",
//     "local_lat": "-33.3996351",
//     "local_lng": "-70.62894990000001",
//     "funcionamiento_dia": "jueves",
//     "fk_region": "7",
//     "fk_comuna": "122"
// }

const location = { lat: -33.487576, lng: -70.6064527 }

describe('<Map/>', () => {
    test('Se renderiza componente correctamente con props', () => {
        const map = shallow(<Map location={location} markers={[DataMock.local]} />)

        expect(map.length).toEqual(1);
        console.log(map.html())
    })

})