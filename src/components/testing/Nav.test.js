import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import Nav from '../Nav';

describe('Nav', () => {
  it('Nav is renderable', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.render());
  });
  it('Nav home page', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find("#newPromoButton").contains("New Promotion")).toEqual(true);
  });
  it('Nav new page', () => {
    const wrapper = shallow(<Nav/>);
    expect(wrapper.find("#cancelButton").contains("Cancel")).toEqual(true);
  });
  it('Nav title', () => {
    const wrapper = shallow(<Nav title="Promotions" />);
    expect(wrapper.find("#navTitle").contains("Promotions")).toEqual(true);
  });
});


//done for now
