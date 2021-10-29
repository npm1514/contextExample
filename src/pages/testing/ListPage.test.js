import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import ListPage from '../ListPage';

describe('ListPage', () => {
  it('ListPage is renderable', () => {
    const wrapper = shallow(<ListPage />);
    expect(wrapper.render());
  });
});

//done for now
