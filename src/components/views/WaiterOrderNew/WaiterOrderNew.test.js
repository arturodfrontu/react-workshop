import React from 'react';
import {shallow} from 'enzyme';
import WaiterOrderNew from './WaiterOrderNew';

describe('Component WaiterOrderNew', ()=>{
  it('should render', ()=>{
    const component = shallow(<WaiterOrderNew />);
    expect(component).toBeTruthy();
  });
});
