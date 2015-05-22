

describe("A suite", function() {
  beforeEach(function() {
      browser.get('index.html#/persons');
    });


  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it('should see person list page', function() {

	expect(browser.getTitle()).toEqual('Person');
  });
});




