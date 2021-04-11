import React from 'react';
import {shallow} from 'enzyme';
import TablesBookingNew from './TablesBookingNew';

describe('Component TablesBookingNew', ()=>{
  it('should render', ()=>{
    const component = shallow(<TablesBookingNew />);
    expect(component).toBeTruthy();
  });
});
