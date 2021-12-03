import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import percySnapshot from '@percy/ember';

module('Integration | Component | content-loader', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders default layout', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <ContentLoader @animate={{false}} />
    `);

    await percySnapshot(assert);

    // Prevent 0 assertion exception
    assert.equal(0, 0);
  });

  test('it renders complex layout', async function (assert) {
    assert.expect(1);

    await render(hbs`
      <ContentLoader
        @height={{300}}
        @width={{500}}
        @speed={{2}}
        @primaryColor="#efefef"
        @secondaryColor="#dad9d9"
        @animate={{false}}
      >
        <rect x="0" y="8" rx="0" ry="0" width="40" height="18" />
        <circle cx="492" cy="16" r="8" />
        <circle cx="472" cy="16" r="8" />
        <rect x="362" y="8" rx="7" ry="7" width="96" height="16" />

        <rect x="0" y="39" rx="0" ry="0" width="34" height="8" />
        <rect x="50" y="39" rx="0" ry="0" width="36" height="8" />
        <rect x="102" y="39" rx="0" ry="0" width="34" height="8" />
        <rect x="152" y="39" rx="0" ry="0" width="34" height="8" />
        <rect x="202" y="39" rx="0" ry="0" width="36" height="8" />
        <rect x="254" y="39" rx="0" ry="0" width="34" height="8" />

        <rect x="477" y="39" rx="0" ry="0" width="10" height="8" />

        <rect x="19" y="64" rx="0" ry="0" width="465" height="155" />

        <rect x="18" y="225" rx="0" ry="0" width="141" height="38" />
        <rect x="182" y="225" rx="0" ry="0" width="141" height="38" />
        <rect x="343" y="225" rx="0" ry="0" width="141" height="38" />
        <rect x="18" y="270" rx="0" ry="0" width="141" height="38" />
        <rect x="182" y="270" rx="0" ry="0" width="141" height="38" />
        <rect x="343" y="270" rx="0" ry="0" width="141" height="38" />
      </ContentLoader>
    `);

    await percySnapshot(assert);

    // Prevent 0 assertion exception
    assert.equal(0, 0);
  });

  test('it renders with animation', async function (assert) {
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

  test('it renders without animation', async function (assert) {
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

  test('it renders with title', async function (assert) {
    await render(hbs`
      <ContentLoader @ariaLabel='My awesome title' />
    `);

    assert.equal(
      this.element.querySelectorAll('title')[0].textContent,
      'My awesome title'
    );

    await render(hbs`
      <ContentLoader
        @ariaLabel='My awesome title'
      >
        <rect x="0" y="0" rx="5" ry="5" width=50 height=50 />
      </ContentLoader>
    `);

    assert.equal(
      this.element.querySelectorAll('title')[0].textContent,
      'My awesome title'
    );
  });
});
