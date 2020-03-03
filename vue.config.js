module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "~bootstrap/scss/functions"
          @import "~bootstrap/scss/mixins"
          @import "~bootstrap/scss/variables"
        `
      }
    }
  }
};
