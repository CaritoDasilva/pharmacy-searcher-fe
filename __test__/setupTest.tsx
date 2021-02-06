import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom'
import { createSerializer } from 'enzyme-to-json';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });
//@ts-ignore
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
};