import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('Component App', ()=>{
  it('should render', ()=>{
    const component = shallow(<App />);
    expect(component).toBeTruthy();
  });
});
