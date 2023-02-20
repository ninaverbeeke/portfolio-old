const bootstrapSassAbstractsImports = require("vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js");
module.exports = {
  lintOnSave: false,
  publicPath: process.env.VUE_APP_ENV_DEPLOY === 'production'
    ? '/portfolio/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: bootstrapSassAbstractsImports.join("\n"),
      },
      scss: {
        additionalData: [...bootstrapSassAbstractsImports, ""].join(";\n"),
      },
    },
  },
};
