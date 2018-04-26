import React from 'react';
import BufferedComponent from '../index';
export default class ComponentTest extends BufferedComponent{
  constructor(props) {
    super(props);
    this.timeBuffer = props.timeBuffer || 0;
    this.cycleBuffer = props.cycleBuffer || 0;
    this.state = {
      updateTime: new Date().getTime()
    }
  }
  render() {
    return (
      <div>
        Update Time: {this.state.updateTime}
        {JSON.stringify(this.props)}
      </div>
    );
  }
}
