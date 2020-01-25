import { newE2EPage } from '@stencil/core/testing';

describe('fbp-connection', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<fbp-connection></fbp-connection>');

    const element = await page.find('fbp-connection');
    expect(element).toHaveClass('hydrated');
  });
});
