import Timing, { TimingFunction } from "./timing-function";

export default class Animator {
  _requestAnimationFrameID!: number;
  _isPlaying!: boolean;

  _timingFunction!: TimingFunction;
  _durationTime!: number;
  _delayTime!: number;
  _startTime!: number;
  _callbackOfUpdate!: Function;

  constructor() {
    this._animate = this._animate.bind(this);
  }

  _animate(time?: number) {

    this._requestAnimationFrameID = requestAnimationFrame(this._animate);

    const { _durationTime, _delayTime, _startTime } = this;

    if (_startTime + _delayTime < _startTime + (time || 0)) {
      if (_startTime + _durationTime + _delayTime >= _startTime + (time || 0)) {
        if (this._callbackOfUpdate) {
          const delta = ((time || 0) - _delayTime) / _durationTime;
          const timing = this._timingFunction || Timing.linear;
          this._callbackOfUpdate({
            modulus: timing(delta),
            time,
            timing,
          });
        }
      } else {
        this.stop();
      }
    }
  }

  timing(func: TimingFunction) {
    this._timingFunction = func;

    return this;
  };

  duration(time: number) {
    this._durationTime = time;
    return this;
  }

  delay(time: number) {
    this._delayTime = time;
    return this;
  }

  start() {
    if (this._isPlaying) {
      return true;
    }

    this._isPlaying = true;

    this._startTime = window.performance.now();

    this._animate();

    return true;
  }

  stop() {
    if (!this._isPlaying) {
      return true;
    }

    if (this._requestAnimationFrameID) {
      cancelAnimationFrame(this._requestAnimationFrameID);
    }

    this._isPlaying = false;
    this._startTime = 0;

    return false;
  }

  update(callback: Function) {
    this._callbackOfUpdate = callback;

    return this;
  }
}
