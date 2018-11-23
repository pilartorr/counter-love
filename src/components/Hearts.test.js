import React from 'react';
import {shallow} from 'enzyme';

import Hearts from './Hearts';

describe('Hearts', () => {
  let props;
  let component;

  const loadComponent = (newProps) => {
    props = newProps;
    return shallow(<Hearts {...props}/>);
  }

  beforeEach(() => {
    component = loadComponent({count: 0});
  })

  it('renders a .hearts-container', () => {
    const containerElems = component.find('.hearts-container');

    expect(containerElems.length).toBeGreaterThan(0);
  });

  it('renders as many .heart elements as stated in props.count', () => {
    expect(component.find('.heart').length).toBe(props.count);

    component = loadComponent({count: 4});

    expect(component.find('.heart').length).toBe(props.count);
  });

  describe('The .hearts-container', () => {
    it('contains all rendered .heart elements', () => {
      const containerElem = component.find('.hearts-container').first();
      const heartElems = component.find('.hearts');

      expect(containerElem.children()).toEqual(heartElems)
    });
  });
});
