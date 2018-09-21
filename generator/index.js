module.exports = api => {
  api.extendPackage({
    devDependencies: {
      "vue-cli-plugin-my-plugin": "./packages/vue-cli-plugin-my-plugin"
    }
  });
  api.render("./template");
};
