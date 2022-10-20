const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  outputDir: "./build",
  // publicPath: "./",
  lintOnSave: false,
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:5000",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
      },
    },
  },

  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("views", "@/views");
  },
});
