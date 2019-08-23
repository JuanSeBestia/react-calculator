// @vendors
import React from 'react'
import { shallow } from 'enzyme'

// @components
import App from './App';

describe('App test', () => {
  it('should render a html button', () => {
    const wrapper = shallow(<App />);
    const calculator = wrapper.find('Calculator');

    expect(calculator.length).toEqual(1)
  })

  it('should render a html button', () => {
    const wrapper = shallow(<App />);
    const state = wrapper.state();
    wrapper.setState({ input: '666' });
    const newState = wrapper.state();

    
    const devil = wrapper.find('.devil')
    console.log(devil.debug())
    expect(devil.length).toEqual(1)
   
  })
});