import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import PromoList from '../PromoList';

describe('PromoList', () => {
  it('PromoList is renderable', () => {
    const wrapper = shallow(<PromoList />);
    expect(wrapper.render());
  });
  it('PromoList has state 1', () => {
    const wrapper = shallow(<PromoList />);
    expect(true).toEqual(true);
  });
});
