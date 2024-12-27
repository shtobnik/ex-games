const path = require('path');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/scss/variables.scss";
        `,
      },
    },
  },
};
