module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "bugfix",
        "config",
        "hotfix",
        "feature",
        "docs",
        "refactor",
        "revert",
        "auth",
        "redux",
        "test",
        "route",
        "style",
        "other",
        "script",
      ],
    ],
    "scope-case": [2, "always", "kebab-case"],
    "subject-case": [2, "always", "sentence-case"],
  },
};
