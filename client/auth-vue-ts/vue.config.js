module.exports = {
  devServer: {
    host: "localhost",
  },
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: "[name]-[hash]",
        },
      },
    },
  },
};
