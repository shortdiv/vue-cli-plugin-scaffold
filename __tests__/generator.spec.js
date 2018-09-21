const generateWithPlugin = require("@vue/cli-test-utils/generateWithPlugin");

test("base", async () => {
  const { pkg, files } = await generateWithPlugin([
    {
      id: "plugins",
      apply: require("../generator"),
      options: {}
    },
    // mock presence of the eslint plugin
    {
      id: "eslint",
      apply: () => {},
      options: {}
    }
  ]);

  expect(pkg.devDependencies).toHaveProperty("vue-cli-plugin-my-plugin");
});
