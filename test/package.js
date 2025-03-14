// @ts-check

const pkg = require("../package.json");
const bower = require("../bower.json");
const { test } = require("node:test");
const assert = require("node:assert/strict");

test("package.json has `bugs`", () => {
  assert.strictEqual(typeof pkg.bugs, "string");
});

test("package.json and bower.json largely match", () => {
  [
    "name",
    "version",
    "keywords",
    "license",
    "main",
    "description",
    "repository",
    "homepage",
  ].forEach((key) => {
    assert.deepStrictEqual(pkg[key], bower[key]);
  });

  const pkgAuthors = [pkg.author].concat(pkg.contributors);
  assert.deepStrictEqual(pkgAuthors, bower.authors);

  assert(!("private" in pkg));
  assert(!("private" in bower));

  assert(!("dependencies" in pkg));
  assert(!("dependencies" in bower));
});
