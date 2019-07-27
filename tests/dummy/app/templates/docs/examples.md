# Examples

## Custom

For the custom mode, use [the react online tool](http://danilowoz.com/create-content-loader/).

Convert code to HTMLBars should be strait forward.

## Facebook

{{#docs-demo as |demo|}}
  {{#demo.example name="facebook.hbs"}}
    <ContentLoader>
      <rect x="70" y="15" rx="4" ry="4" width="117" height="6.4" />
      <rect x="70" y="35" rx="3" ry="3" width="85" height="6.4" />
      <rect x="0" y="80" rx="3" ry="3" width="350" height="6.4" />
      <rect x="0" y="100" rx="3" ry="3" width="380" height="6.4" />
      <rect x="0" y="120" rx="3" ry="3" width="201" height="6.4" />
      <circle cx="30" cy="30" r="30" />
    </ContentLoader>
  {{/demo.example}}

  {{demo.snippet "facebook.hbs"}}
{{/docs-demo}}

## Instagram

{{#docs-demo as |demo|}}
  {{#demo.example name="instagram.hbs"}}
    <ContentLoader>
      <circle cx="30" cy="30" r="30" />

      <rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
      <rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
      <rect x="0" y="70" rx="5" ry="5" width="400" height="400" />
    </ContentLoader>
  {{/demo.example}}

  {{demo.snippet "instagram.hbs"}}
{{/docs-demo}}

## Code

{{#docs-demo as |demo|}}
  {{#demo.example name="code.hbs"}}
    <ContentLoader>
      <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
      <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
      <rect x="190" y="0" rx="3" ry="3" width="10" height="10" />

      <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
      <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />

      <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
      <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
      <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />

      <rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
    </ContentLoader>
  {{/demo.example}}

  {{demo.snippet "code.hbs"}}
{{/docs-demo}}

## List

{{#docs-demo as |demo|}}
  {{#demo.example name="list.hbs"}}
    <ContentLoader>
      <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
      <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
      <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
      <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
      <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
      <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
    </ContentLoader>
  {{/demo.example}}

  {{demo.snippet "list.hbs"}}
{{/docs-demo}}

## Bullet list

{{#docs-demo as |demo|}}
  {{#demo.example name="bullet-list.hbs"}}
    <ContentLoader>
      <circle cx="10" cy="20" r="8" />
      <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
      <circle cx="10" cy="50" r="8" />
      <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
      <circle cx="10" cy="80" r="8" />
      <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
      <circle cx="10" cy="110" r="8" />
      <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
  {{/demo.example}}

  {{demo.snippet "bullet-list.hbs"}}
{{/docs-demo}}
