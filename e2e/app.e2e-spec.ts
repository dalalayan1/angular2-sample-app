import { Angular2SampleAppPage } from './app.po';

describe('angular2-sample-app App', () => {
  let page: Angular2SampleAppPage;

  beforeEach(() => {
    page = new Angular2SampleAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
