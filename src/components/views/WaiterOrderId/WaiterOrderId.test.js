import React from 'react';
import {shallow} from 'enzyme';
import WaiterOrderId from './WaiterOrderId';

describe('Component WaiterOrderId', ()=>{
  it('should render', ()=>{
    const component = shallow(<WaiterOrderId />);
    expect(component).toBeTruthy();
  });
});
