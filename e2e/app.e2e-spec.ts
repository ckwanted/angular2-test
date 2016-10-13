import { Angular2EggHeadPage } from './app.po';

describe('angular2-egg-head App', function() {
  let page: Angular2EggHeadPage;

  beforeEach(() => {
    page = new Angular2EggHeadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
