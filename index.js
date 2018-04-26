import React from 'react';

export default class BufferedComponent extends React.Component {
  /**
   *
   * @type {number}
   * @var timeBuffer
   * @description The time buffer you would like to wait in miliseconds
   */
  timeBuffer = 0;
  /**
   *
   * @type {number}
   * @var updateCycle
   * @description the threshold cycle you want to hold when props or state being updated
   */
  updateCycle = 0;
  /**
   * @private
   * @type {number}
   * @var lastUpdate
   */
  lastUpdate = new Date().getTime();
  /**
   * @private
   * @type {number}
   */
  cycles = 0;

  shouldComponentUpdate() {
    let shouldUpdateByTime = false;
    let shouldUpdateByCycle = false;
    if (!!this.timeBuffer && this.timeBuffer > 0) {
      shouldUpdateByTime = new Date().getTime() - this.lastUpdate >= this.timeBuffer;
    }
    if (!!this.updateCycle && this.updateCycle > 0) {
      this.cycles++;
      shouldUpdateByCycle = this.cycles >= this.updateCycle;
    }
    if (shouldUpdateByTime || shouldUpdateByCycle) {
      this.cycles = 0;
      this.lastUpdate = new Date().getTime();
    }
    return shouldUpdateByCycle || shouldUpdateByTime;
  }
}

