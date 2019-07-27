import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/template';
import layout from '../templates/components/content-loader-svg';

export default Component.extend({
  layout,
  tagName: 'svg',
  attributeBindings: [
    'role',
    'rtlStyle:style',
    'aria-label',
    'viewBox',
    'preserveAspectRatio'
  ],

  role: 'img',

  rtlStyle: computed('rtl', function() {
    return htmlSafe(this.rtl ? 'transform: scaleX(-1)' : '');
  }),

  'aria-label': computed('ariaLabel', function() {
    return this.ariaLabel || null;
  }),

  viewBox: computed('width', 'height', function() {
    return htmlSafe(`0 0 ${this.width} ${this.height}`);
  }),

  rectClipPath: computed('baseUrl', 'idClip', function() {
    return htmlSafe(`url(${this.baseUrl}#${this.idClip})`);
  }),

  rectStyle: computed('baseUrl', 'idGradient', function() {
    return htmlSafe(`fill: url(${this.baseUrl}#${this.idGradient})`);
  }),

  animateValues1: computed('gradientRatio', function() {
    return htmlSafe(`${-this.gradientRatio}; ${-this.gradientRatio}; 1`);
  }),
  animateValues2: computed('gradientRatio', function() {
    let div2 = this.gradientRatio / 2;
    return htmlSafe(`${-div2}; ${-div2}; ${1 + div2}`);
  }),
  animateValues3: computed('gradientRatio', function() {
    return htmlSafe(`0; 0; ${1 + this.gradientRatio}`);
  }),

  idClip: computed('elementId', function() {
    return htmlSafe(`${this.elementId}-idClip`);
  }),

  idGradient: computed('elementId', function() {
    return htmlSafe(`${this.elementId}-idGradient`);
  }),

  keyTimes: computed('interval', function() {
    return `0; ${this.interval}; 1`;
  }),

  dur: computed('speed', function() {
    return htmlSafe(`${this.speed}s`);
  })
});
