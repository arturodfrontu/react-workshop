import React from 'react';
import {shallow} from 'enzyme';
import TablesBookingId from './TablesBookingId';

describe('Component TablesBookingId', ()=>{
  it('should render', ()=>{
    const component = shallow(<TablesBookingId />);
    expect(component).toBeTruthy();
  });
});
