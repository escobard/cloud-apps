const props = {
    text: {
      withNotes: "create-app e2e automated test subject"
    },
    label: {
      menuIcon: "Menu",
      noNotesIcon: "No Notes"
    }
  },
  elements = {},
  LandingCommands = {
    beforeEach(browser, done) {
      done()
    },
    async assertHeaderIcon(browser){
      const { getByLabelText } = getQueriesFrom(browser);
      expect(await getByLabelText(this.props.label.menuIcon))
    },
    async assertNoNotes(browser){
      const { getByLabelText } = getQueriesFrom(browser)
      expect(await getByLabelText(this.props.label.noNotesIcon))
    },
    async assertWithNotes(browser){
      const { queryByText } = getQueriesFrom(browser);
      expect(await queryByText(this.props.text.withNotes))
    }
  };

export default {
  url(){
    return this.api.launchUrl;
  },
  elements,
  commands: [LandingCommands],
  props
};