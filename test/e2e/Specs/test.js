
module.exports = {
  'Testing add item to favorite': function (browser) {
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#q-app', 5000)
      .useXpath()
      .click('//*[contains(@class, "q-checkbox")]')
      .useCss()
      .click('button[name=favoritesButton]')
      .assert.elementPresent('.modal')
      .assert.elementPresent('img[name=favored]')
      .assert.elementCount('img[name=favored]',1)
      .end()
  }
}
