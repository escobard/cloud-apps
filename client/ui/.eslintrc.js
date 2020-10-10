module.exports={
  "extends": ["airbnb", "plugin:prettier/recommended"],
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "jest": true,
  },
  "plugins": ["jsx-a11y", "prettier", "react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/label-has-for": "off",
    "react/jsx-one-expression-per-line": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
    "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/style-prop-object": [0],
    "linebreak-style": 0,
    "no-unused-expressions": [2, { allowShortCircuit: true }]
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "arrowFunctions": true,
      "binaryLiterals": true,
      "blockBindings": true,
      "classes": true,
      "defaultParams": true,
      "destructuring": true,
      "forOf": true,
      "generators": true,
      "modules": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": true,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "octalLiterals": true,
      "regexUFlag": true,
      "regexYFlag": true,
      "spread": true,
      "superInFunctions": true,
      "templateStrings": true,
      "unicodeCodePointEscapes": true,
      "globalReturn": true,
      "jsx": true,
      "experimentalObjectRestSpread": true,
    }
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["node_modules", "src/"]
      }
    }
  }
};
