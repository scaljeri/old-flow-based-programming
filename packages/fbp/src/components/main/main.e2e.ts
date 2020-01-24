import { newE2EPage } from '@stencil/core/testing';

describe('fbp-main', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fbp-main></fbp-main>');

    const element = await page.find('fbp-main');
    expect(element).toHaveClass('hydrated');
  });
});
