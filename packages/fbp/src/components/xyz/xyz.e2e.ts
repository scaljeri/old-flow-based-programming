import { newE2EPage } from '@stencil/core/testing';

describe('fbp-xyz', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fbp-xyz></fbp-xyz>');

    const element = await page.find('fbp-xyz');
    expect(element).toHaveClass('hydrated');
  });
});
