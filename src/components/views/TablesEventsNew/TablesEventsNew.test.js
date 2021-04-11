import React from 'react';
import {shallow} from 'enzyme';
import TablesEventsNew from './TablesEventsNew';

describe('Component TablesEventsNew', ()=>{
  it('should render', ()=>{
    const component = shallow(<TablesEventsNew />);
    expect(component).toBeTruthy();
  });
});
