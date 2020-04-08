module.exports = function () {
  const WARNING = "warning",
    ERROR = "error";
  return {
    env: {
      browser: true,
      commonjs: true,
      es6: true,
    },
    extends: "eslint:recommended",
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
    },
    parserOptions: {
      ecmaVersion: 2018,
    },
    rules: {
      indent: [ERROR, 4],
      "linebreak-style": [ERROR, "unix"],
      quotes: [WARNING, "single"],
      semi: [ERROR, "never"],
    },
  };
};
