const path = require("path");
const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  outputDir: "./build",
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        views: "@/views",
      },
    },
  },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set("@", path.resolve(__dirname, "src"))
  //     .set("views", "@/views");
  // },
});
