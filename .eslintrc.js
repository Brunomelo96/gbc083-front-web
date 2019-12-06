module.exports = {
  "extends": [
    "airbnb"
  ],
  "parser": "babel-eslint",
  "env": {
    "jest": true,
    "browser": true
  },
  "rules": {
    "semi": [
      2,
      "never"
    ],
    "import/no-extraneous-dependencies": [2, { devDependencies: true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "never",
        "exports": "never",
        "functions": "ignore"
      }
    ],
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": "*",
        "next": "return"
      }
    ],
    "prefer-destructuring": "off",
    "prefer-arrow-callback": "off",
    "func-names": "off",
    "react/no-array-index-key": "off",
    "eol-last": ["error", "always"],
    "react/forbid-prop-types": "off",
    "function-paren-newline": "off",
    "no-extra-boolean-cast": "off",
    "linebreak-style": "off",
    "jsx-a11y/aria-role": [2, {
      "ignoreNonDOM": true
    }],
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [
          "src",
        ],
      },
    },
  }
}