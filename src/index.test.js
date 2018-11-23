import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

jest.mock('./registerServiceWorker');
jest.mock('react-dom', () => ({
     render: jest.fn(),
}));


import '.';

describe('index.js', () => {
  it('calls render once', () => {
    expect(ReactDOM.render).toHaveBeenCalledTimes(1);
  });

  it('calls render with `<App />`', () => {
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, null);
  });

  it('calls registerServiceWorker once', () => {
    expect(registerServiceWorker).toHaveBeenCalledTimes(1);
  });
});
