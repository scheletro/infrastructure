/**
 * @description the code is form the tween.js, https://github.com/sole/tween.js/blob/master/src/Tween.js
 * @see http://sole.github.io/tween.js/examples/03_graphs.html
 *
 */

export type TimingFunction = (percent: number) => number;

/**
  * @param {number} k
  * @return {number}
  */
function linear(k: number) {
  return k;
}

/**
  * @param {number} k
  * @return {number}
  */
function quadraticIn(k: number) {
  return k * k;
}

/**
  * @param {number} k
  * @return {number}
  */
function quadraticOut(k: number) {
  return k * (2 - k);
}

/**
  * @param {number} k
  * @return {number}
  */
function quadraticInOut(k: number) {
  if ((k *= 2) < 1) {
    return 0.5 * k * k;
  }
  return -0.5 * (--k * (k - 2) - 1);
}

/**
  * @param {number} k
  * @return {number}
  */
function cubicIn(k: number) {
  return k * k * k;
}

/**
* @param {number} k
* @return {number}
*/
function cubicOut(k: number) {
  return --k * k * k + 1;
}

/**
* @param {number} k
* @return {number}
*/
function cubicInOut(k: number) {
  if ((k *= 2) < 1) {
    return 0.5 * k * k * k;
  }
  return 0.5 * ((k -= 2) * k * k + 2);
}

/**
* @param {number} k
* @return {number}
*/
function quarticIn(k: number) {
  return k * k * k * k;
}

/**
* @param {number} k
* @return {number}
*/
function quarticOut(k: number) {
  return 1 - (--k * k * k * k);
}

/**
* @param {number} k
* @return {number}
*/
function quarticInOut(k: number) {
  if ((k *= 2) < 1) {
    return 0.5 * k * k * k * k;
  }
  return -0.5 * ((k -= 2) * k * k * k - 2);
}

/**
* @param {number} k
* @return {number}
*/
function quinticIn(k: number) {
  return k * k * k * k * k;
}

/**
* @param {number} k
* @return {number}
*/
function quinticOut(k: number) {
  return --k * k * k * k * k + 1;
}

/**
* @param {number} k
* @return {number}
*/
function quinticInOut(k: number) {
  if ((k *= 2) < 1) {
    return 0.5 * k * k * k * k * k;
  }
  return 0.5 * ((k -= 2) * k * k * k * k + 2);
}

/**
* @param {number} k
* @return {number}
*/
function sinusoidalIn(k: number) {
  return 1 - Math.cos(k * Math.PI / 2);
}

/**
* @param {number} k
* @return {number}
*/
function sinusoidalOut(k: number) {
  return Math.sin(k * Math.PI / 2);
}

/**
* @param {number} k
* @return {number}
*/
function sinusoidalInOut(k: number) {
  return 0.5 * (1 - Math.cos(Math.PI * k));
}

/**
* @param {number} k
* @return {number}
*/
function exponentialIn(k: number) {
  return k === 0 ? 0 : Math.pow(1024, k - 1);
}

/**
* @param {number} k
* @return {number}
*/
function exponentialOut(k: number) {
  return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
}

/**
* @param {number} k
* @return {number}
*/
function exponentialInOut(k: number) {
  if (k === 0) {
    return 0;
  }
  if (k === 1) {
    return 1;
  }
  if ((k *= 2) < 1) {
    return 0.5 * Math.pow(1024, k - 1);
  }
  return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
}

/**
* @param {number} k
* @return {number}
*/
function circularIn(k: number) {
  return 1 - Math.sqrt(1 - k * k);
}

/**
* @param {number} k
* @return {number}
*/
function circularOut(k: number) {
  return Math.sqrt(1 - (--k * k));
}

/**
* @param {number} k
* @return {number}
*/
function circularInOut(k: number) {
  if ((k *= 2) < 1) {
    return -0.5 * (Math.sqrt(1 - k * k) - 1);
  }
  return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
}

/**
* @param {number} k
* @return {number}
*/
function elasticIn(k: number) {
  let s;
  let a = 0.1;
  let p = 0.4;
  if (k === 0) {
    return 0;
  }
  if (k === 1) {
    return 1;
  }
  if (!a || a < 1) {
    a = 1;
    s = p / 4;
  }
  else {
    s = p * Math.asin(1 / a) / (2 * Math.PI);
  }
  return -(a * Math.pow(2, 10 * (k -= 1))
    * Math.sin((k - s) * (2 * Math.PI) / p));
}

/**
* @param {number} k
* @return {number}
*/
function elasticOut(k: number) {
  let s;
  let a = 0.1;
  let p = 0.4;
  if (k === 0) {
    return 0;
  }
  if (k === 1) {
    return 1;
  }
  if (!a || a < 1) {
    a = 1;
    s = p / 4;
  }
  else {
    s = p * Math.asin(1 / a) / (2 * Math.PI);
  }
  return (a * Math.pow(2, -10 * k)
    * Math.sin((k - s) * (2 * Math.PI) / p) + 1);
}

/**
* @param {number} k
* @return {number}
*/
function elasticInOut(k: number) {
  let s;
  let a = 0.1;
  let p = 0.4;
  if (k === 0) {
    return 0;
  }
  if (k === 1) {
    return 1;
  }
  if (!a || a < 1) {
    a = 1;
    s = p / 4;
  }
  else {
    s = p * Math.asin(1 / a) / (2 * Math.PI);
  }
  if ((k *= 2) < 1) {
    return -0.5 * (a * Math.pow(2, 10 * (k -= 1))
      * Math.sin((k - s) * (2 * Math.PI) / p));
  }
  return a * Math.pow(2, -10 * (k -= 1))
    * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

}

/**
* @param {number} k
* @return {number}
*/
function backIn(k: number) {
  let s = 1.70158;
  return k * k * ((s + 1) * k - s);
}

/**
* @param {number} k
* @return {number}
*/
function backOut(k: number) {
  let s = 1.70158;
  return --k * k * ((s + 1) * k + s) + 1;
}

/**
* @param {number} k
* @return {number}
*/
function backInOut(k: number) {
  let s = 1.70158 * 1.525;
  if ((k *= 2) < 1) {
    return 0.5 * (k * k * ((s + 1) * k - s));
  }
  return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
}

/**
* @param {number} k
* @return {number}
*/
function bounceIn(k: number) {
  return 1 - bounceOut(1 - k);
}

/**
* @param {number} k
* @return {number}
*/
function bounceOut(k: number) {
  if (k < (1 / 2.75)) {
    return 7.5625 * k * k;
  }
  else if (k < (2 / 2.75)) {
    return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
  }
  else if (k < (2.5 / 2.75)) {
    return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
  }
  else {
    return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
  }
}

/**
* @param {number} k
* @return {number}
*/
function bounceInOut(k: number) {
  if (k < 0.5) {
    return bounceIn(k * 2) * 0.5;
  }
  return bounceOut(k * 2 - 1) * 0.5 + 0.5;
}

export default {
  linear,
  quadraticIn,
  quadraticOut,
  quadraticInOut,
  cubicIn,
  cubicOut,
  cubicInOut,
  quarticIn,
  quarticOut,
  quarticInOut,
  quinticIn,
  quinticOut,
  quinticInOut,
  sinusoidalIn,
  sinusoidalOut,
  sinusoidalInOut,
  exponentialIn,
  exponentialOut,
  exponentialInOut,
  circularIn,
  circularOut,
  circularInOut,
  elasticIn,
  elasticOut,
  elasticInOut,
  backIn,
  backOut,
  backInOut,
  bounceIn,
  bounceOut,
  bounceInOut
};
