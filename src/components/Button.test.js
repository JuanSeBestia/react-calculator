// @vendors
import React from 'react'
import { shallow } from 'enzyme'

// @components
import Button from './Button';

const mockHandleClick = jest.fn();
const props = {
  handleClick: mockHandleClick,
}

describe('Button test', () => {
  it('should render a html button', () => {
    const wrapper = shallow(<Button>5</Button>);
    const button = wrapper.find('.btn-wrapper');

    expect(button.length).toEqual(1)
  })

  it('handleclik should be run 1 time', () => {
    const wrapper = shallow(<Button {...props}>5</Button>);
    const button = wrapper.find('.btn-wrapper');
    button.simulate('click');

    expect(mockHandleClick).toBeCalled()
  })

  it('should render a html button', () => {
    const wrapper = shallow(<Button>5</Button>);
    const button = wrapper.find('.btn-wrapper').text();

    expect(button).toEqual('5');
  })

  it('handleclik should be run 1 time', () => {
    const wrapper = shallow(<Button {...props}>-</Button>);
    const button = wrapper.find('.btn-wrapper');

    expect(button.props().className.includes('operator')).toBe(true)

  })
});
