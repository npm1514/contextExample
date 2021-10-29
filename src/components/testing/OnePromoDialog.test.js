import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import OnePromoDialog from '../OnePromoDialog';

describe('OnePromoDialog', () => {
  it('OnePromoDialog is renderable', () => {
    const wrapper = shallow(<OnePromoDialog />);
    expect(wrapper.render());
  });
  it('OnePromoDialog has state 1', () => {
    const wrapper = shallow(<OnePromoDialog />);
    expect(wrapper.state().established).toEqual(true);
  });
});
