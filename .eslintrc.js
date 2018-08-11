module.exports = {
    "parser": "babel-eslint",
    "env": {
      "es6": true,
      "browser": true,
      "node": true
    },
    "plugins": [
      "react",
      "jsx-a11y",
      "import"
    ],
    "parserOptions": {
      "allowImportExportEverywhere": true
    },
    "rules": {
      "no-console": 0,
      "no-unused-vars": [1, { "argsIgnorePattern": "res|next|^err"}],
      "comma-dangle": 0,
      "import": 0,
      "react/prefer-es6-class": 0,
      "import/no-named-default": 0,
      "react/jsx-filename-extension": 0,
      "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "to" ],
            "aspects": [ "noHref", "invalidHref", "preferButton" ]
          }],
      "import/first": 0,
      "no-param-reassign": ["error", { "props": false }],
      "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
      "object-shorthand": ["error", "always", { "ignoreConstructors": true }],
      "no-shadow": ["error", { "builtinGlobals": false, "hoist": "functions", "allow": [] }]
    }
}