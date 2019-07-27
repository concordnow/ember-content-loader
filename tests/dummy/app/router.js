import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('usage');
    this.route('examples');
    this.route('known-issues');
  });
  this.route('not-found', { path: '/*path' });
  this.route('examples');
});

export default Router;
