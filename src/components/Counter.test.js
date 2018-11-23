import React from 'react';
import {shallow} from 'enzyme';

import Counter from './Counter';

describe('Counter', () => {
  let props;
  let component;
  const getInputValue = () => component.find('input[type="text"]').first().props().value
  // const setInputValue = (val) => { component.setState({count: val}) }
  const loadComponent = (newProps) => {
    props = newProps;
    return shallow(<Counter {...props} />);
  }

  beforeEach(() => {
    component = loadComponent({
      value: undefined,
      onIncrement: undefined,
      onDecrement: undefined
    });
  });

  it('renders one input', () => {
    const inputs = component.find('input[type="text"]');
    expect(inputs.length).toBe(1);
  });

  it('renders one .increment button', () => {
    const buttons = component.find('button.increment');
    expect(buttons.length).toBe(1);
  });

  it('renders one .decrment button', () => {
    const buttons = component.find('button.decrement');
    expect(buttons.length).toBe(1);
  });

  // Not a good test really, but just to make sure the state was really lifted
  // up by all of you
  it('doesn\'t have it\'s own state*', () => {
    expect(component.state()).toBeNull();
  });

  describe('The input', () => {
    let input;

    beforeEach(() => {
      component = loadComponent({
        value: 3
      });
      input = component.find('input[type="text"]').first();
    });

    it('is read only', () => {
      expect(input.props().readOnly).toBeTruthy();
    });

    it('displays value from props', () => {
      expect(getInputValue()).toBe(props.value);

      component = loadComponent({ value: 4 });

      expect(getInputValue()).toBe(props.value);
    })
  });

  describe('An .increment button', () => {
    let button;

    beforeEach(() => {
      component = loadComponent({
        onIncrement: jest.fn()
      });

      button = component.find('button.increment').first();
    });

    it('contains +', () => {
      expect(button.text()).toContain('+');
    });

    xit('calls the onIncrement function from props when clicked', () => {
      button.simulate('click');
      expect(props.onIncrement).toHaveBeenCalledTimes(1);
    });

    // Not a good test really, but just to make sure the state was really lifted
    // up by all of you
    it('doesn\'t change state on click*', () => {
      button.simulate('click');
      expect(component.state()).toBeNull();
    });
  });

  describe('A .decrement button', () => {
    let button;

    beforeEach(() => {
      component = loadComponent({
        onDecrement: jest.fn()
      });

      button = component.find('button.decrement').first();
    });

    it('contains -', () => {
      expect(button.text()).toContain('-');
    });

    it('calls the onDecrement function from props when clicked', () => {
      button.simulate('click');
      expect(props.onDecrement).toHaveBeenCalledTimes(1);
    });

    // Not a good test really, but just to make sure the state was really lifted
    // up by all of you
    it('doesn\'t change state on click*', () => {
      button.simulate('click');
      expect(component.state()).toBeNull();
    });
  });

})
