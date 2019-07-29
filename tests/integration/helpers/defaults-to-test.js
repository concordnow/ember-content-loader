import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | defaults-to', function(hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it defaults if undefined', async function(assert) {
    this.set('inputValue', undefined);

    await render(hbs`{{defaults-to inputValue '1234'}}`);

    assert.equal(this.element.textContent.trim(), '1234');
  });

  test('it does not defaults if 0', async function(assert) {
    this.set('inputValue', 0);

    await render(hbs`{{defaults-to inputValue '1234'}}`);

    assert.equal(this.element.textContent.trim(), '0');
  });

  test('it does not defaults if empty string', async function(assert) {
    this.set('inputValue', '');

    await render(hbs`{{defaults-to inputValue '1234'}}`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('it does not defaults if null', async function(assert) {
    this.set('inputValue', null);

    await render(hbs`{{defaults-to inputValue '1234'}}`);

    assert.equal(this.element.textContent.trim(), '');
  });

  test('it does not defaults if false', async function(assert) {
    this.set('inputValue', false);

    await render(hbs`{{defaults-to inputValue '1234'}}`);

    assert.equal(this.element.textContent.trim(), 'false');
  });
});
