const constants = require('app/constants');

const messageActions = {
  clear() {
    return { type: constants.message.CLEAR };
  },

  refreshFlash() {
    return { type: constants.message.REFRESH_FLASH };
  }
};

module.exports = messageActions;
