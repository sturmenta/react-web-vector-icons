module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true
  },
  "extends": [
      "eslint:recommended", 'plugin:react/recommended'
  ],
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "globals":{
      __DEV__: true,
      __PROD__: true
  },
  "rules": {
      "indent": [
          "error",
          2,
          { "SwitchCase": 1 }
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ],
      "no-console": 0,
      "react/prop-types": 0
  }
};