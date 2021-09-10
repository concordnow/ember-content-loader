import Controller from '@ember/controller';

export default class DocsKnownIssuesController extends Controller {
  opaque = `
{{!-- Opaque color in Safari and iOS --}}
<ContentLoader
  @primaryColor="rgba(0,0,0,0.06)"
  @secondaryColor="rgba(0,0,0,0.12)">
  {{!-- Your shapes --}}
</ContentLoader>
`;
  semiTransparent = `
{{!--  Semi-transparent color in Safari and iOS --}}
<ContentLoader
  @primaryColor="rgb(0,0,0)"
  @secondaryColor="rgb(0,0,0)"
  @primaryOpacity={{0.06}}
  @secondaryOpacity={{0.12}}>
  {{!-- Your shapes --}}
</ContentLoader>
`;
}
