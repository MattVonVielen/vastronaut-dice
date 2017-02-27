import { VastronautDicePage } from './app.po';

describe('vastronaut-dice App', () => {
  let page: VastronautDicePage;

  beforeEach(() => {
    page = new VastronautDicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
