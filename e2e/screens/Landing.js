const { getQueriesFrom } = require("@testing-library/nightwatch");

const props = {
    text: {
      withNotes: "Your Notes"
    },
    label: {
      menuIcon: "Menu"
    }
  },
  elements = {},
  LandingCommands = {
    async assertHeaderIcon(browser){

      const { getByLabelText } = getQueriesFrom(browser);

      const menu = await getByLabelText(this.props.label.menuIcon);

      this.waitForElementVisible(menu, 10000);
    },
  };

module.exports = {
  url(){
    return this.api.launchUrl;
  },
  commands: [LandingCommands],
  elements,
  props
};