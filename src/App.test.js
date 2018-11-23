import React from 'react';
import { shallow, mount } from 'enzyme';

import App from './App';
import Counter from './components/Counter';
import Hearts from './components/Hearts';


describe('App', () => {
  let component;
  const loadComponent = (state) => {
    let current = shallow(<App />);
    if(state) {
      current.setState(() => state);
    };
    return current;
  }

  beforeEach(() => {
    component = loadComponent({count: 2});
  });

  it('renders a .container wrapper', () => {
    const containerElems = component.find('.container');

    expect(containerElems.length).toBeGreaterThan(0);
  });

  it('renders a h1 element', () => {
    const headings = component.find('h1');
    expect(headings.length).toBe(1);
    expect(headings.first().text().toLowerCase()).toContain('counter');
  });

  it('renders a Counter component', () => {
    const counters = component.find(Counter);

    expect(counters.length).toBe(1);
  });

  it('renders a Hearts component', () => {
    const counters = component.find(Hearts);

    expect(counters.length).toBe(1);
  });

  it('has it\'s own count state', () => {
    expect(component.state()).not.toBeNull();
    expect(component.state('count')).toBeDefined();
  })

  describe('The .container wrapper', () => {
    xit('contains all other elements', () => {
      const containerElem = component.find('.container').first();
      expect(containerElem.children()).toEqual(component.children())
    });
  });

  describe('The rendered `<Counter />` component', () => {
    let counter;
    const getCounter = () => component.find(Counter).first();
    const getCounterValue = () => getCounter().prop('value');

    beforeEach(() => {
      counter = getCounter();
    });


    it('has it\'s value prop set to count from state', () => {
      expect(getCounterValue()).toBe(component.state('count'));

      component = loadComponent({count: 2});

      expect(getCounterValue()).toBe(component.state('count'));
    });

    it('has it\'s onIncrement prop set to a function', () => {
      expect(typeof counter.prop('onIncrement')).toBe('function');
    });

    it('has it\'s onDecrement prop set to a function', () => {
      expect(typeof counter.prop('onDecrement')).toBe('function');
    });

    describe('onIncrement', () => {
      xit('increases the value of counter by one', () => {
        const before = getCounterValue();
        getCounter().prop('onIncrement')();

        expect(getCounterValue()).toBe(before + 1);
      });
    });

    describe('onDecrement', () => {
      xit('decreases the value of counter by one', () => {
        const before = getCounterValue();
        getCounter().prop('onDecrement')();

        expect(getCounterValue()).toBe(before - 1);
      });

      it('cannot decrease the value of counter below 0', () => {
        component = loadComponent({count: 0});

        getCounter().prop('onDecrement')();

        expect(getCounterValue()).toBe(0);
      });
    });
  });

  describe('The rendered `<Hearts />` component', () => {
    it('has it\'s count prop set to count from state', () => {
      expect(component.find(Hearts).first().prop('count'))
        .toBe(component.state('count'));

      component = loadComponent({count: 2});
      expect(component.find(Hearts).first().prop('count'))
        .toBe(component.state('count'));
    });
  });
});
