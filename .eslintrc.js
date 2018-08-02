module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true,
        "mocha": true
    },
    "extends": [
        "eslint:recommended", 
        "plugin:react/recommended",
        "plugin:flowtype/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "modules": true,
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    globals: {},
    "plugins": [
        "react",
        "flowtype"
    ],
    "rules": {
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-empty": 0,
        "no-console": 0,
        "no-unused-vars": [2, { "varsIgnorePattern": "^h$" }],
        "no-cond-assign": 1,
        "camelcase": 0,
        "comma-style": 2,
        "comma-dangle": [2, "only-multiline"],
        "indent": [2, 2, { "SwitchCase": 1 }],
        "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
        "no-trailing-spaces": [2, { "skipBlankLines": true }],
        "max-nested-callbacks": [2, 3],
        "no-eval": 2,
        "no-implied-eval": 2,
        "no-new-func": 2,
        "guard-for-in": 2,
        "eqeqeq": 1,
        "no-else-return": 2,
        "no-redeclare": 2,
        "no-dupe-keys": 2,
        "radix": 2,
        "strict": [2, "never"],
        "no-shadow": 0,
        "no-delete-var": 2,
        "no-undef-init": 2,
        "no-shadow-restricted-names": 2,
        "handle-callback-err": 0,
        "no-lonely-if": 2,
        "keyword-spacing": 1,
        "constructor-super": 2,
        "no-this-before-super": 2,
        "no-dupe-class-members": 2,
        "no-const-assign": 2,
        "prefer-spread": 2,
        "no-useless-concat": 2,
        "no-var": 2,
        "object-shorthand": 2,
        "prefer-arrow-callback": 2,
        "react/jsx-uses-vars": 1
    }
};