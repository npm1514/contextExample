import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Header from '../Header';

describe('Header', () => {
  it('Header is renderable', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.render());
  });
});


//done for now
