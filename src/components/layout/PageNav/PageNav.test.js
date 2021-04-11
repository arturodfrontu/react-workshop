import React from 'react';
import {shallow} from 'enzyme';
import PageNav from './PageNav';

describe('Component PageNav', ()=>{
  it('should render', ()=>{
    const component = shallow(<PageNav />);
    expect(component).toBeTruthy();
  });
  it('should contain NavLink', ()=>{
    const component = shallow(<PageNav />);
    expect(component.find('NavLink')).toBeTruthy();
  });
});
