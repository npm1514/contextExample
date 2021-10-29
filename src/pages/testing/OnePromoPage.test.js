import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OnePromoPage from '../OnePromoPage';

describe('OnePromoPage', () => {
  it('OnePromoPage is renderable', () => {
    const wrapper = shallow(<OnePromoPage />);
    expect(wrapper.render());
  });
});

//done for now
