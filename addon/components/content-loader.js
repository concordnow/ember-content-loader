import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';
import { guidFor } from '@ember/object/internals';

/**
 * This is the main component
 *
 * @class ContentLoader
 * @public
 */
export default class ContentLoader extends Component {
  constructor() {
    super(...arguments);
    this.elementId = guidFor(this);
  }

  /**
   * Defaults to `true`.
   *
   * Opt-out of animations with `false`
   *
   * @argument animate
   * @type Boolean
   * @default true
   */
  get animate() {
    return this.args.animate ?? true;
  }

  /**
   * Defaults to `Loading interface...`
   *
   * It's used to describe what element it is. Use `false` to remove.
   *
   * @argument ariaLabel
   * @type String|Boolean
   * @default "Loading interface..."
   */
  get ariaLabel() {
    return this.args.ariaLabel ?? 'Loading interface...';
  }

  /**
   * Required if you're using `<base url="/" />` in your `<head/>`.
   *
   * Defaults to an empty string.
   *
   * This prop is common used as: <ContentLoader baseUrl={window.location.pathname} />
   * which will fill the SVG attribute with the relative path. Related #93.
   * It's used to describe what element it is. Use `false` to remove.
   *
   * @argument baseUrl
   * @type String
   * @default "Loading interface..."
   */
  get baseUrl() {
    return this.args.baseUrl ?? '';
  }

  /**
   * Defaults to `2`.
   *
   * Animation speed in seconds.
   *
   * @argument speed
   * @type Number
   * @default 2
   */
  get speed() {
    return this.args.speed ?? 2;
  }

  /**
   * Defaults to `0.25`.
   *
   * Interval of time between runs of the animation, as a fraction of the animation speed.
   *
   * @argument interval
   * @type Number
   * @default 0.25
   */
  get interval() {
    return this.args.interval ?? 0.25;
  }

  /**
   * Defaults to `400`.
   *
   * It will be set in the viewbox attr in the `<svg />`.
   *
   * @argument width
   * @type Number
   * @default 400
   */
  get width() {
    return this.args.width ?? 400;
  }

  /**
   * Defaults to `130`.
   *
   * It will be set in the viewbox attr in the `<svg />`.
   *
   * @argument height
   * @type Number
   * @default 130
   */
  get height() {
    return this.args.height ?? 130;
  }

  /**
   * Defaults to `2`.
   *
   * Width of the animated gradient as a fraction of the viewbox width.
   *
   * @argument gradientRatio
   * @type Number
   * @default 2
   */
  get gradientRatio() {
    return this.args.gradientRatio ?? 2;
  }

  /**
   * Defaults to `false`.
   *
   * Content right-to-left.
   *
   * @argument rtl
   * @type Boolean
   * @default false
   */
  get rtl() {
    return this.args.rtl ?? false;
  }

  /**
   * Defaults to `none`.
   *
   * Aspect ratio option of `<svg/>`.
   * Avaible options [here](https://developer.mozilla.org/fr/docs/Web/SVG/Attribute/preserveAspectRatio#Syntaxe)
   *
   * @argument preserveAspectRatio
   * @type String
   * @default "none"
   */
  get preserveAspectRatio() {
    return this.args.preserveAspectRatio ?? 'none';
  }

  /**
   * Defaults to `#f0f0f0`.
   *
   * Background of animation.
   *
   * @argument primaryColor
   * @type String
   * @default "#f0f0f0"
   */
  get primaryColor() {
    return this.args.primaryColor ?? '#f0f0f0';
  }

  /**
   * Defaults to `#e0e0e0`.
   *
   * Placeholder/layer of animation.
   *
   * @argument secondaryColor
   * @type String
   * @default "#e0e0e0"
   */
  get secondaryColor() {
    return this.args.secondaryColor ?? '#e0e0e0';
  }

  /**
   * Defaults to `1`.
   *
   * Background opacity (0 = transparent, 1 = opaque) used to solve a issue in [Safari](#safari--ios)
   *
   * @argument primaryOpacity
   * @type Number
   * @default 1
   */
  get primaryOpacity() {
    return this.args.primaryOpacity ?? 1;
  }

  /**
   * Defaults to `1`.
   *
   * Animation opacity (0 = transparent, 1 = opaque) used to solve a issue in [Safari](#safari--ios)
   *
   * @argument secondaryOpacity
   * @type Number
   * @default 1
   */
  get secondaryOpacity() {
    return this.args.secondaryOpacity ?? 1;
  }

  get viewBox() {
    return `0 0 ${this.width} ${this.height}`;
  }

  get rectClipPath() {
    return `url(${this.baseUrl}#${this.idClip})`;
  }

  get rectStyle() {
    return htmlSafe(`fill: url(${this.baseUrl}#${this.idGradient})`);
  }

  get animateValues1() {
    return `${-this.gradientRatio}; ${-this.gradientRatio}; 1`;
  }

  get animateValues2() {
    let div2 = this.gradientRatio / 2;
    return `${-div2}; ${-div2}; ${1 + div2}`;
  }

  get animateValues3() {
    return `0; 0; ${1 + this.gradientRatio}`;
  }

  get idClip() {
    return `${this.elementId}-idClip`;
  }

  get idGradient() {
    return `${this.elementId}-idGradient`;
  }

  get keyTimes() {
    return `0; ${this.interval}; 1`;
  }

  get dur() {
    return `${this.speed}s`;
  }
}
