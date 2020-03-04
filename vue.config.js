module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/VueProject/" : "./",
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
