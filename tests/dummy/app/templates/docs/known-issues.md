# Known issues

## Alpha is not working: Safari / iOS

When using `rgba` as a `primaryColor` or `secondaryColor` value, [Safari does not respect the alpha channel](https://github.com/w3c/svgwg/issues/180), meaning that the color will be opaque. To prevent this, instead of using an `rgba` value for `primaryColor`/`secondaryColor`, use the `rgb` equivalent and move the alpha channel value to the `primaryOpacity`/`secondaryOpacity` props.

```hbs
{{!-- Opaque color in Safari and iOS --}}
<ContentLoader
  @primaryColor="rgba(0,0,0,0.06)"
  @secondaryColor="rgba(0,0,0,0.12)">
  {{!-- Your shapes --}}
</ContentLoader>
```


```hbs
{{!--  Semi-transparent color in Safari and iOS --}}
<ContentLoader
  @primaryColor="rgb(0,0,0)"
  @secondaryColor="rgb(0,0,0)"
  @primaryOpacity={{0.06}}
  @secondaryOpacity={{0.12}}>
  {{!-- Your shapes --}}
</ContentLoader>

```


## Black box in Safari / iOS (again)

Using base tag on a page that contains SVG elements fails to render and it looks like a black box. Just remove the **base-href** tag from the `<head />` and issue solved.

<img width="200" alt="Black box" src="https://user-images.githubusercontent.com/11562881/39406054-2f308de6-4bce-11e8-91fb-bbb35e29fc10.png" />

See: [react-content-loader#93](https://github.com/danilowoz/react-content-loader/issues/93) / [react-content-loader#109](https://github.com/danilowoz/react-content-loader/issues/109)
