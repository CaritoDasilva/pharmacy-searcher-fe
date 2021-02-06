import React from 'react';
import { shallow } from 'enzyme';
import PharmacyDetail from '../../../components/Dialogs/PharmacyDetail'

const local = {
    "fecha": "04-02-2021",
    "local_id": "534",
    "local_nombre": "TORRES MPD",
    "comuna_nombre": "RECOLETA",
    "localidad_nombre": "RECOLETA",
    "local_direccion": "AVENIDA EL SALTO 2972",
    "funcionamiento_hora_apertura": "10:30 hrs.",
    "funcionamiento_hora_cierre": "19:30 hrs.",
    "local_telefono": "+560225053570",
    "local_lat": "-33.3996351",
    "local_lng": "-70.62894990000001",
    "funcionamiento_dia": "jueves",
    "fk_region": "7",
    "fk_comuna": "122"
}

describe('<PharmacyDetail/>', () => {
    const onCloseModal = jest.fn()
    test('Se renderiza componente correctamente con props', () => {
        const pharmacyDetailComponent = shallow(<PharmacyDetail localDetail={local} onClose={onCloseModal} />)

        expect(pharmacyDetailComponent.length).toEqual(1);

    })

})
