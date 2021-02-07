import React from 'react';
import { shallow } from 'enzyme';
import Map from '../../../components/Map'
import DataMock from '../../../__mocks__/dataMock'


const location = { lat: -33.487576, lng: -70.6064527 }

describe('<Map/>', () => {
    test('Se renderiza componente correctamente con props', () => {
        const map = shallow(<Map location={location} markers={[DataMock.local]} />)
        expect(map.length).toEqual(1);
    })

})