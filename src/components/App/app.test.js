import React from 'react';
import { shallow } from 'enzyme';
import { App } from './index';

describe('Testing App behavior', () => {
  it('Should show loading', () => {
    const component = shallow(<App isLoading={true} error={''} />);
    expect(component).toMatchSnapshot();
  });
  it('Should show list if movies', () => {
    const component = shallow(<App isLoading={false} error={''} />);
    expect(component).toMatchSnapshot();
  });
  it('Should show error', () => {
    const component = shallow(<App isLoading={false} error={'Error message'} />);
    expect(component).toMatchSnapshot();
  });
});