import { newE2EPage } from '@stencil/core/testing';

describe('fbp-node', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fbp-node></fbp-node>');

    const element = await page.find('fbp-node');
    expect(element).toHaveClass('hydrated');
  });
});
