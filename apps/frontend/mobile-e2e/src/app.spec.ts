import { device, element, by, expect } from 'detox';

describe('FrontendMobile', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display welcome message', async () => {
    await expect(element(by.id('heading'))).toHaveText(
      'Welcome to FrontendMobile'
    );
  });

  it('should open nx link', async () => {
    await expect(element(by.id('nx-link'))).toBeVisible();
    element(by.id('nx-link')).tap();
  });
});
