const path = require("path");
const webpack = require("webpack");

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "하민이의 첫번째 생일에 초대합니다.";
      return args;
    });
  },
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        jQuery: "jquery",
      }),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/utils/_variables.scss";
          @import "@/assets/scss/utils/_mixins.scss";
          @import "@/assets/scss/utils/_functions.scss";
          @import "@/assets/scss/components/_icons.scss";
          `,
      },
    },
  },
  outputDir: path.resolve(__dirname, "./docs"),
};
