module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/demo-project-ui/" : "./",
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
