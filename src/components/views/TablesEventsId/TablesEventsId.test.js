import React from 'react';
import {shallow} from 'enzyme';
import TablesEventsId from './TablesEventsId';

describe('Component TablesEventsId', ()=>{
  it('should render', ()=>{
    const component = shallow(<TablesEventsId />);
    expect(component).toBeTruthy();
  });
});
