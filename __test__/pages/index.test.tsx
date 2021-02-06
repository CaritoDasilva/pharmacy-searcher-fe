import React from 'react';
import { shallow } from 'enzyme';
import IndexPage from '../../pages/index'


describe('<IndexPage/>', () => {
    test('Se renderiza componente correctamente con props', () => {
        const indexPage = shallow(<IndexPage />)

        expect(indexPage.length).toEqual(1);

    })

})