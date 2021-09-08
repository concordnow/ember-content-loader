import Component from '@glimmer/component';
/**
 * This is the main component
 *
 * @class ContentLoader
 * @public
 */
export default class extends Component {
  constructor() {
    super(...arguments);
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


  /**
   * Defaults to `Loading interface...`
   *
   * It's used to describe what element it is. Use `false` to remove.
   *
   * @argument ariaLabel
   * @type String|Boolean
   * @default "Loading interface..."
   */


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

  /**
   * Defaults to `2`.
   *
   * Animation speed in seconds.
   *
   * @argument speed
   * @type Number
   * @default 2
   */

  /**
   * Defaults to `0.25`.
   *
   * Interval of time between runs of the animation, as a fraction of the animation speed.
   *
   * @argument interval
   * @type Number
   * @default 0.25
   */

  /**
   * Defaults to `400`.
   *
   * It will be set in the viewbox attr in the `<svg />`.
   *
   * @argument width
   * @type Number
   * @default 400
   */

  /**
   * Defaults to `130`.
   *
   * It will be set in the viewbox attr in the `<svg />`.
   *
   * @argument height
   * @type Number
   * @default 400
   */

  /**
   * Defaults to `2`.
   *
   * Width of the animated gradient as a fraction of the viewbox width.
   *
   * @argument gradientRatio
   * @type Number
   * @default 2
   */

  /**
   * Defaults to `false`.
   *
   * Content right-to-left.
   *
   * @argument rtl
   * @type Boolean
   * @default false
   */


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

  /**
   * Defaults to `#f3f3f3`.
   *
   * Background of animation.
   *
   * @argument primaryColor
   * @type String
   * @default "#f3f3f3"
   */

  /**
   * Defaults to `#ecebeb`.
   *
   * Placeholder/layer of animation.
   *
   * @argument secondaryColor
   * @type String
   * @default "#ecebeb"
   */

  /**
   * Defaults to `1`.
   *
   * Background opacity (0 = transparent, 1 = opaque) used to solve a issue in [Safari](#safari--ios)
   *
   * @argument primaryOpacity
   * @type Number
   * @default 1
   */

  /**
   * Defaults to `1`.
   *
   * Animation opacity (0 = transparent, 1 = opaque) used to solve a issue in [Safari](#safari--ios)
   *
   * @argument secondaryOpacity
   * @type Number
   * @default 1
   */
}
