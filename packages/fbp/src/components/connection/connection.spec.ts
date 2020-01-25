import { Connection } from './connection';

describe('fbp-connection', () => {
  it('builds', () => {
    expect(new Connection()).toBeTruthy();
  });
});
