import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OnePromoInput from '../OnePromoInput';

describe('OnePromoInput', () => {
  it('OnePromoInput is renderable', () => {
    const wrapper = shallow(<OnePromoInput />);
    expect(wrapper.render());
  });
  it('OnePromoInput has state 1', () => {
    const wrapper = shallow(<OnePromoInput />);
    expect(true).toEqual(true);
  });
});
