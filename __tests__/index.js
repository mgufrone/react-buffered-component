import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ComponentTest from '../__components__/ComponentTest';


describe('buffer component', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<ComponentTest />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should update last update when the time buffer passed', () => {
    const node = document.createElement('div');
    const component = ReactDOM.render(<ComponentTest message={`hello`} timeBuffer={500}/>, node);
    const time = component.lastUpdate;
    ReactDOM.render(<ComponentTest message={`wow`} timeBuffer={500}/>, node)
    expect(component.lastUpdate === time).toBe(true);
  })
  it('should update component when the cycle buffer passed', () => {
    const node = document.createElement('div');
    const component = ReactDOM.render(<ComponentTest message={`hello`} cycleBuffer={10}/>, node);
    const cycles = component.cycles;
    ReactDOM.render(<ComponentTest message={`wow`} cycleBuffer={10}/>, node)
    console.log(cycles, component.cycles);
    expect(component.cycles === cycles).toBe(false);
  })
});


