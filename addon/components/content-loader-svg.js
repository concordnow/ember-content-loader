import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { guidFor } from '@ember/object/internals';

export default class extends Component{
  get rectClipPath() {
    return htmlSafe(`url(${this.args.baseUrl}#${this.idClip})`);
  }

  get rectStyle() {
    return htmlSafe(`fill: url(${this.args.baseUrl}#${this.idGradient})`);
  }

  get animateValues1() {
    return htmlSafe(`${-this.args.gradientRatio}; ${-this.args.gradientRatio}; 1`);
  }
  get animateValues2() {
    const div2 = this.args.gradientRatio / 2;
    return htmlSafe(`${-div2}; ${-div2}; ${1 + div2}`);
  }
  get animateValues3() {
    return htmlSafe(`0; 0; ${1 + this.args.gradientRatio}`);
  }

  get idClip() {
    return htmlSafe(`${guidFor(this)}-idClip`);
  }

  get idGradient() {
    return htmlSafe(`${guidFor(this)}-idGradient`);
  }

  get keyTimes() {
    return `0; ${this.args.interval}; 1`;
  }

  get dur() {
    return htmlSafe(`${this.args.speed}s`);
  }
}
