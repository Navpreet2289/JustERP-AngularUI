import { JustERPTemplatePage } from './app.po';

describe('abp-project-name-template App', function() {
  let page: JustERPTemplatePage;

  beforeEach(() => {
    page = new JustERPTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
