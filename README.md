ember-content-loader
==============================================================================

[![Build Status](https://travis-ci.org/concordnow/ember-content-loader.svg?branch=master)](https://travis-ci.org/concordnow/ember-content-loader)
[![Ember Observer Score](https://emberobserver.com/badges/ember-content-loader.svg)](https://emberobserver.com/addons/ember-content-loader)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/concordnow/ember-content-loader)

SVG-Powered component to easily create skeleton screens / placeholder loadings (like Facebook's cards loading). Documentation can be found [here](https://concordnow.github.io/ember-content-loader/)


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-content-loader
```


Usage
------------------------------------------------------------------------------

![Facebook skeleton](https://user-images.githubusercontent.com/4838076/34308760-ec55df82-e735-11e7-843b-2e311fa7b7d0.gif)

Simply add the `<ContentLoader>` component in your code with the shapes that you want.

```hbs
<ContentLoader>
  {{!-- Only SVG shapes --}}
  <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
  <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
  <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" />
  <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" />
  <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" />
  <circle cx="30" cy="30" r="30" />
</ContentLoader>
```

You can use the [online editor](http://danilowoz.com/create-content-loader/) to create complex shapes.

> **Note:** This editor is made for React, so you need to translate the produced code.


Options
------------------------------------------------------------------------------

You can find all `<ContentLoader>` available options [here](https://concordnow.github.io/ember-content-loader/docs/api/components/content-loader)


Thanks
------------------------------------------------------------------------------

* [react-content-loader](https://github.com/danilowoz/react-content-loader)
* [ember-cli-addon-docs](https://github.com/ember-learn/ember-cli-addon-docs)


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
