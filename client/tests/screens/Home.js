const LandingCommands = {
  async createNote(browser, { subject, note }) {
    const { getByLabelText, getByText } = getQueriesFrom(browser);
    browser.click(await getByLabelText("Add note"));
    browser.setValue(await getByLabelText("Subject"), subject);
    browser.setValue(await getByLabelText("Note *"), note);
    browser.click(await getByText("Add Note"));
  },
  async assertHeaderIcon(browser) {
    const { getByLabelText } = getQueriesFrom(browser);
    expect(await getByLabelText("Menu"));
  },
  async assertNetworkError(browser) {
    const { getByText } = getQueriesFrom(browser);
    browser.waitForElementVisible(".exclamation");
    expect(await getByText("API error"));
  },
  async assertNote(browser, note) {
    const { getAllByText } = getQueriesFrom(browser);
    expect(await getAllByText(note));
  }
};

export default {
  url() {
    return this.api.launchUrl;
  },
  commands: [LandingCommands]
};
