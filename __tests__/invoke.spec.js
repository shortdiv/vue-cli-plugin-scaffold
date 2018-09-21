jest.setTimeout(90000);

const path = require("path");
const cwd = path.resolve(__dirname, "../testProject");
const create = require("@vue/cli-test-utils/createTestProject");

let project;

beforeAll(async () => {
  project = await create(
    "starter-project",
    {
      plugins: {
        "@vue/cli-plugin-babel": {}
      }
    },
    cwd
  );
  await project.run(
    `${require.resolve(
      "@vue/cli/bin/vue"
    )} add vue-cli-plugin-scaffold@file:../../`
  );

  await project.run(
    `${require.resolve("@vue/cli/bin/vue")} invoke vue-cli-plugin-scaffold`
  );
});

test("should create a starter plugin template", async () => {
  expect(project.has("packages")).toBe(true);
});
