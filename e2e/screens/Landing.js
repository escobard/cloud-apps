const { getQueriesFrom } = require("@testing-library/nightwatch");

const props = {
    text: {
      withNotes: "create-app integration automated"
    }
  },
  elements = {},
  LandingCommands = {
    async assertWithNotes(browser){

      const { getByText } = getQueriesFrom(browser);

      const notes = await getByText(this.props.text.withNotes);

      this.waitForElementVisible(notes, 10000)

    },
  };

module.exports = {
  commands: [LandingCommands],
  elements,
  props
};