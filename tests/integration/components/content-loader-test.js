import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | content-loader', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders with animation', async function(assert) {
    await render(hbs`
      <ContentLoader @animate={{true}} />
    `);

    assert.notEqual(this.element.querySelectorAll('animate').length, 0);

    await render(hbs`
      <ContentLoader
        @animate={{true}}
      >
        <rect x="0" y="0" rx="5" ry="5" width=50 height=50 />
      </ContentLoader>
    `);

    assert.notEqual(this.element.querySelectorAll('animate').length, 0);
  });

  test('it renders without animation', async function(assert) {
    await render(hbs`
      <ContentLoader @animate={{false}} />
    `);

    assert.equal(this.element.querySelectorAll('animate').length, 0);

    await render(hbs`
      <ContentLoader
        @animate={{false}}
      >
        <rect x="0" y="0" rx="5" ry="5" width=50 height=50 />
      </ContentLoader>
    `);

    assert.equal(this.element.querySelectorAll('animate').length, 0);
  });

  test('it renders with title', async function(assert) {
    await render(hbs`
      <ContentLoader @ariaLabel='My awesome title' />
    `);

    assert.equal(this.element.querySelectorAll('title')[0].textContent, 'My awesome title');

    await render(hbs`
      <ContentLoader
        @ariaLabel='My awesome title'
      >
        <rect x="0" y="0" rx="5" ry="5" width=50 height=50 />
      </ContentLoader>
    `);

    assert.equal(this.element.querySelectorAll('title')[0].textContent, 'My awesome title');
  });
});
